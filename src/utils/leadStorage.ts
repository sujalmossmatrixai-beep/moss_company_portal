import * as XLSX from 'xlsx'

export type ProductCategory =
  | 'Moss Med AI'
  | 'Moss AI Mapper'
  | 'Custom AI Solutions'
  | 'Moss Academy Inquiries'
  | 'Course Enrollments'

export interface LeadSubmission {
  id: string
  timestamp: string // ISO
  formattedDate: string
  fullName: string
  email: string
  phone: string
  organization?: string
  productCategory: ProductCategory
  specificItem?: string // e.g. 'Patient Portal', 'Forward Deployed Engineering'
  learningMode?: string // for courses: 'Hybrid Bangalore', 'Online', etc.
  offerFee?: string // e.g. '₹39,999'
  message?: string
  source?: string // e.g. 'Homepage Demo Booking', 'Course Modal', etc.
}

const STORAGE_KEY = 'moss_nexus_leads_v1'
const WEBHOOK_KEY = 'moss_nexus_gsheets_webhook'

// Initial seed data so the user can test downloading the 5-sheet Excel workbook immediately
const INITIAL_SEEDS: LeadSubmission[] = [
  {
    id: 'lead-med-001',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 4).toLocaleString('en-IN'),
    fullName: 'Dr. Rajesh Deshmukh',
    email: 'rajesh.deshmukh@manipalhospitals.example',
    phone: '+91-9845012345',
    organization: 'Apollo & Manipal Healthcare Group',
    productCategory: 'Moss Med AI',
    specificItem: 'Hospital Portal (Admin & ER Dashboards)',
    message: 'Evaluating 9-role dashboards and HL7 FHIR integration for 400-bed hospital network.',
    source: 'Med AI Portal Demo Booking',
  },
  {
    id: 'lead-med-002',
    timestamp: new Date(Date.now() - 3600000 * 18).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 18).toLocaleString('en-IN'),
    fullName: 'Dr. Sunita Kulkarni',
    email: 'dr.sunita@apexclinics.example',
    phone: '+91-9822098765',
    organization: 'Apex Multispeciality Hospital, Nagpur',
    productCategory: 'Moss Med AI',
    specificItem: 'Doctor Portal & Pharmacy Portal',
    message: 'Need e-prescription contraindication checks and OPD queue scheduling.',
    source: 'Explore More Hub',
  },
  {
    id: 'lead-mapper-001',
    timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 12).toLocaleString('en-IN'),
    fullName: 'Vikram Sengupta',
    email: 'vikram.s@fintechcloud.example',
    phone: '+91-9811223344',
    organization: 'Fintech Payments Ltd, Bangalore',
    productCategory: 'Moss AI Mapper',
    specificItem: 'Oracle to PostgreSQL 16 Migration',
    message: 'Migrating 850 tables with 4TB transactional data. Need zero-downtime CDC sync.',
    source: 'Moss AI Mapper Studio',
  },
  {
    id: 'lead-solutions-001',
    timestamp: new Date(Date.now() - 3600000 * 26).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 26).toLocaleString('en-IN'),
    fullName: 'Ananya Roy',
    email: 'ananya@supplychain-global.example',
    phone: '+91-9871100223',
    organization: 'Global Logistics Corp',
    productCategory: 'Custom AI Solutions',
    specificItem: 'Autonomous Multi-Agent Reconciliation Swarm',
    message: 'Automating multi-currency freight invoice reconciliation against ERP ledgers.',
    source: 'Custom Solutions Scoping',
  },
  {
    id: 'lead-academy-001',
    timestamp: new Date(Date.now() - 3600000 * 8).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 8).toLocaleString('en-IN'),
    fullName: 'Pooja Iyer',
    email: 'pooja.iyer@gmail.com',
    phone: '+91-9988776655',
    organization: 'PES University, Bangalore',
    productCategory: 'Moss Academy Inquiries',
    specificItem: 'Bangalore Campus Hub & Weekend Batches',
    message: 'Final year computer science student inquiring about internship eligibility and GPU labs.',
    source: 'Moss Academy Overview',
  },
  {
    id: 'enroll-fde-001',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 2).toLocaleString('en-IN'),
    fullName: 'Karthik Raman',
    email: 'karthik.raman@techgrad.example',
    phone: '+91-9844055667',
    organization: 'BE Computer Science (2025 Grad)',
    productCategory: 'Course Enrollments',
    specificItem: 'Forward Deployed Engineering (FDE) - 6 Month Flagship',
    learningMode: 'Hybrid (Bangalore Campus + Online)',
    offerFee: '₹39,999 (20% OFF Special Offer)',
    message: 'Enrolled for Nov 30th cohort with Guaranteed Internship Program.',
    source: 'FDE Course Enrollment Modal',
  },
  {
    id: 'enroll-agentic-002',
    timestamp: new Date(Date.now() - 3600000 * 15).toISOString(),
    formattedDate: new Date(Date.now() - 3600000 * 15).toLocaleString('en-IN'),
    fullName: 'Sneha Patil',
    email: 'sneha.patil@devpulse.example',
    phone: '+91-9860123987',
    organization: 'Software Engineer at Pune Tech Park',
    productCategory: 'Course Enrollments',
    specificItem: 'Agentic AI Developer Course',
    learningMode: '100% Live Online (Global Cohort)',
    offerFee: '₹39,999 (Special Diwali Offer)',
    message: 'Looking to build autonomous RAG multi-agent swarms using LangGraph and DSPy.',
    source: 'Agentic AI Flyer Enrollment',
  },
]

// Get all leads from storage
export function getAllLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEEDS))
      return INITIAL_SEEDS
    }
    return JSON.parse(raw)
  } catch (err) {
    console.error('Error reading leads from localStorage:', err)
    return INITIAL_SEEDS
  }
}

// Save a new lead
export function saveLead(
  lead: Omit<LeadSubmission, 'id' | 'timestamp' | 'formattedDate'>
): LeadSubmission {
  const all = getAllLeads()
  const now = new Date()
  const newRecord: LeadSubmission = {
    ...lead,
    id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    timestamp: now.toISOString(),
    formattedDate: now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  }

  const updated = [newRecord, ...all]
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch (err) {
    console.error('Error persisting lead to localStorage:', err)
  }

  // Push to Live Google Forms & Google Sheets in real-time
  postToGoogleForms(newRecord)

  // Optional: Trigger Webhook to Live Google Sheets if user configured webhook URL
  triggerWebhookIfConfigured(newRecord)

  // Dispatch custom browser event so modals/widgets update in real-time
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('moss_lead_added', { detail: newRecord }))
  }

  return newRecord
}

// Format lead rows for Excel output
function formatForExcel(leads: LeadSubmission[], isEnrollment = false) {
  if (isEnrollment) {
    return leads.map((l, idx) => ({
      'S.No': idx + 1,
      'Submission Date & Time': l.formattedDate,
      'Student Full Name': l.fullName,
      'Email Address': l.email,
      'Phone / WhatsApp': l.phone,
      'Course Enrolled': l.specificItem || 'Forward Deployed Engineering (FDE)',
      'Offer Price Locked': l.offerFee || '₹39,999 (20% OFF)',
      'Learning Mode & Campus': l.learningMode || 'Hybrid (Bangalore Campus)',
      'Current Background': l.organization || 'Student / Graduate',
      'Student Notes': l.message || '',
      'Registration Channel': l.source || 'Website Enrollment',
    }))
  }

  return leads.map((l, idx) => ({
    'S.No': idx + 1,
    'Submission Date & Time': l.formattedDate,
    'Contact Name': l.fullName,
    'Work Email': l.email,
    'Phone / WhatsApp': l.phone,
    'Organization / Company': l.organization || 'Individual',
    'Product Track': l.productCategory,
    'Specific Portal / Module': l.specificItem || 'General Product Inquiry',
    'Project Brief / Inquiry Details': l.message || '',
    'Inquiry Source': l.source || 'Website Demo Booking Form',
  }))
}

/**
 * EXPORT 1: A SINGLE MASTER EXCEL WORKBOOK WITH 5 SEPARATE SHEETS
 * (Moss Med AI, Moss AI Mapper, Custom AI Solutions, Moss Academy Inquiries, Course Enrollments)
 */
export function exportMasterExcelWorkbook() {
  const allLeads = getAllLeads()

  const medAILeads = allLeads.filter((l) => l.productCategory === 'Moss Med AI')
  const mapperLeads = allLeads.filter((l) => l.productCategory === 'Moss AI Mapper')
  const solutionsLeads = allLeads.filter((l) => l.productCategory === 'Custom AI Solutions')
  const academyInquiryLeads = allLeads.filter((l) => l.productCategory === 'Moss Academy Inquiries')
  const enrollmentLeads = allLeads.filter((l) => l.productCategory === 'Course Enrollments')

  const wb = XLSX.utils.book_new()

  // Sheet 1: Moss Med AI
  const wsMed = XLSX.utils.json_to_sheet(formatForExcel(medAILeads))
  wsMed['!cols'] = [
    { wch: 6 },
    { wch: 22 },
    { wch: 24 },
    { wch: 30 },
    { wch: 18 },
    { wch: 28 },
    { wch: 18 },
    { wch: 28 },
    { wch: 45 },
    { wch: 24 },
  ]
  XLSX.utils.book_append_sheet(wb, wsMed, 'Moss Med AI Inquiries')

  // Sheet 2: Moss AI Mapper
  const wsMapper = XLSX.utils.json_to_sheet(formatForExcel(mapperLeads))
  wsMapper['!cols'] = [
    { wch: 6 },
    { wch: 22 },
    { wch: 24 },
    { wch: 30 },
    { wch: 18 },
    { wch: 28 },
    { wch: 18 },
    { wch: 28 },
    { wch: 45 },
    { wch: 24 },
  ]
  XLSX.utils.book_append_sheet(wb, wsMapper, 'Moss AI Mapper Inquiries')

  // Sheet 3: Custom AI Solutions
  const wsSolutions = XLSX.utils.json_to_sheet(formatForExcel(solutionsLeads))
  wsSolutions['!cols'] = [
    { wch: 6 },
    { wch: 22 },
    { wch: 24 },
    { wch: 30 },
    { wch: 18 },
    { wch: 28 },
    { wch: 18 },
    { wch: 28 },
    { wch: 45 },
    { wch: 24 },
  ]
  XLSX.utils.book_append_sheet(wb, wsSolutions, 'Custom AI Solutions')

  // Sheet 4: Moss Academy Inquiries
  const wsAcademy = XLSX.utils.json_to_sheet(formatForExcel(academyInquiryLeads))
  wsAcademy['!cols'] = [
    { wch: 6 },
    { wch: 22 },
    { wch: 24 },
    { wch: 30 },
    { wch: 18 },
    { wch: 28 },
    { wch: 18 },
    { wch: 28 },
    { wch: 45 },
    { wch: 24 },
  ]
  XLSX.utils.book_append_sheet(wb, wsAcademy, 'Academy Inquiries')

  // Sheet 5: Course Enrollments
  const wsEnroll = XLSX.utils.json_to_sheet(formatForExcel(enrollmentLeads, true))
  wsEnroll['!cols'] = [
    { wch: 6 },
    { wch: 22 },
    { wch: 24 },
    { wch: 30 },
    { wch: 18 },
    { wch: 32 },
    { wch: 24 },
    { wch: 26 },
    { wch: 26 },
    { wch: 40 },
    { wch: 24 },
  ]
  XLSX.utils.book_append_sheet(wb, wsEnroll, 'Course Enrollments')

  const dateStr = new Date().toISOString().slice(0, 10)
  XLSX.writeFile(wb, `Moss_Nexus_Leads_Master_${dateStr}.xlsx`)
}

/**
 * EXPORT 2: DEDICATED SEPARATE EXCEL SHEET FOR A SPECIFIC PRODUCT
 */
export function exportSingleCategoryExcel(category: ProductCategory) {
  const allLeads = getAllLeads()
  const filtered = allLeads.filter((l) => l.productCategory === category)
  const isEnroll = category === 'Course Enrollments'

  const wb = XLSX.utils.book_new()
  const sheetName = category.replace(/[^a-zA-Z0-9 ]/g, '').slice(0, 30)
  const ws = XLSX.utils.json_to_sheet(formatForExcel(filtered, isEnroll))
  XLSX.utils.book_append_sheet(wb, ws, sheetName)

  const sanitizedFile = category.replace(/\s+/g, '_')
  const dateStr = new Date().toISOString().slice(0, 10)
  XLSX.writeFile(wb, `${sanitizedFile}_Leads_${dateStr}.xlsx`)
}

/**
 * GOOGLE SHEETS WEBHOOK INTEGRATION
 */
export function getGoogleSheetsWebhookUrl(): string {
  try {
    const envUrl = (import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL
    return localStorage.getItem(WEBHOOK_KEY) || envUrl || ''
  } catch {
    return ''
  }
}

export function setGoogleSheetsWebhookUrl(url: string) {
  try {
    localStorage.setItem(WEBHOOK_KEY, url.trim())
  } catch (err) {
    console.error('Error saving webhook URL:', err)
  }
}

async function triggerWebhookIfConfigured(lead: LeadSubmission) {
  const webhookUrl = getGoogleSheetsWebhookUrl()
  if (!webhookUrl) return

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      // Apps Script web apps accept text/plain without a CORS preflight.
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      mode: 'no-cors', // standard for Google Apps Script webhooks
      body: JSON.stringify(lead),
    })
  } catch (err) {
    console.warn('Webhook dispatch failed (non-blocking):', err)
  }
}

/**
 * LIVE GOOGLE FORMS & GOOGLE SHEETS DIRECT PIPELINE
 * Automatically pushes submissions to the user's published Google Forms,
 * instantly appending live rows into the linked Google Sheets in Google Drive.
 */
async function postToGoogleForms(lead: LeadSubmission) {
  try {
    // 1. Submit to Category-Specific Form
    if (lead.productCategory === 'Course Enrollments') {
      const params = new URLSearchParams()
      params.append('entry.1681314868', lead.fullName || '')
      params.append('entry.259528574', lead.email || '')
      params.append('entry.273428555', lead.phone || '')

      let courseVal = 'Forward Deployed Engineering (FDE)'
      if (lead.specificItem?.includes('Agentic')) {
        courseVal = 'Agentic AI Developer Course'
      } else if (lead.specificItem?.includes('DevOps') || lead.specificItem?.includes('Cloud')) {
        courseVal = 'DevOps, Cloud & MLOps Infrastructure'
      }
      params.append('entry.932110210', courseVal)

      let durationVal = '6 Months Program (40 Hours Structured)'
      if (lead.specificItem?.includes('Agentic')) {
        durationVal = 'Hands-on Projects + Expert Mentorship'
      } else if (lead.specificItem?.includes('DevOps')) {
        durationVal = '4 Months Immersion'
      }
      params.append('entry.509894261', durationVal)

      let modeVal = 'Hybrid (Bangalore Campus + Online)'
      if (lead.learningMode?.includes('Online')) {
        modeVal = '100% Live Online (Global Cohort)'
      } else if (lead.learningMode?.includes('Nagpur')) {
        modeVal = 'Hybrid (Nagpur Campus + Online)'
      }
      params.append('entry.146708652', modeVal)
      params.append('entry.1174629914', 'Guaranteed Internship Program + Industry Projects')

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSdjE7O6vm3bg96q9e7cN4gHBti6zJTcfsMFbL1ni5Sh_P7ZCw/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }).catch(() => {})
    } else if (lead.productCategory === 'Custom AI Solutions') {
      const params = new URLSearchParams()
      params.append('entry.2116636205', lead.id || `SOL-${Date.now().toString().slice(-4)}`)
      params.append('entry.540444734', lead.fullName || '')
      params.append('entry.204643384', lead.email || '')
      params.append('entry.1397576513', lead.phone || '')
      params.append('entry.1939409815', lead.organization || 'Enterprise')
      const track = lead.specificItem?.includes('Agent')
        ? 'Custom AI Agents & Zero Data Retention NLP'
        : 'Multi-Agent Systems & Supply Chain Automation'
      params.append('entry.746310763', track)
      params.append('entry.1884880961', 'Private VPC (AWS India)')
      params.append('entry.274600001', lead.message || lead.specificItem || 'Custom AI Architecture')
      params.append('entry.883776653', 'Architecture Review Scheduled')

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSe3KC91izFoi-BDHGztD1kZlzpfsyeL3KHpfh7UPDR3mVlvoQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }).catch(() => {})
    } else if (lead.productCategory === 'Moss Academy Inquiries') {
      const params = new URLSearchParams()
      params.append('entry.325749614', lead.fullName || '')
      params.append('entry.1616678992', lead.email || '')
      params.append('entry.910980675', lead.phone || '')
      params.append('entry.1394420492', lead.organization || 'University / College')
      params.append('entry.1378341426', lead.specificItem || 'Moss Academy Inquiries')
      params.append('entry.27292089', lead.message || 'Student Community & Hackathon Inquiry')
      params.append('entry.1117819579', 'Individual / Team')
      params.append('entry.42863251', 'New Inquiry')

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSeoF5qDheaq65tc6-xlcOT81seI7M18Nen90UnmAmnqeSewlA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }).catch(() => {})
    } else if (lead.productCategory === 'Moss AI Mapper') {
      const params = new URLSearchParams()
      params.append('entry.2134089525', lead.fullName || '')
      params.append('entry.1541784546', lead.email || '')
      params.append('entry.1582786139', lead.phone || '')
      params.append('entry.328543128', lead.organization || 'Enterprise')
      const targetMod = lead.specificItem?.includes('Ingestion')
        ? 'Schema Ingestion and Reports Validation'
        : 'AI Mapping Engine and ER Visualization'
      params.append('entry.1673366443', targetMod)
      params.append('entry.1712989696', 'Enterprise Relational DB (Oracle / SQL Server)')
      params.append('entry.1562408251', 'Target Cloud Warehouse (PostgreSQL / Snowflake)')
      params.append('entry.1678785584', lead.message || 'Database Migration & Mapping Engine')

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSfX5fo0IZWnwobNB1vVjW0Bci61g3Fl2ZTkQ2yvlHvx0k8bxA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }).catch(() => {})
    } else if (lead.productCategory === 'Moss Med AI') {
      const params = new URLSearchParams()
      params.append('entry.1667908458', lead.fullName || '')
      params.append('entry.515907272', lead.email || '')
      params.append('entry.710992492', lead.phone || '')
      params.append('entry.588315422', lead.organization || 'Hospital / Healthcare Network')
      let portalVal = 'Hospital Portal (Admin & ER Operations)'
      if (lead.specificItem?.includes('Doctor')) {
        portalVal = 'Doctor Portal (Clinical EHR & E-Prescriptions)'
      } else if (lead.specificItem?.includes('Lab') || lead.specificItem?.includes('Pharmacy')) {
        portalVal = 'Laboratory Portal & Pharmacy Portal'
      }
      params.append('entry.1833246037', portalVal)
      params.append('entry.1384254101', 'Live Demo Request')
      params.append('entry.2090779780', lead.message || 'Hospital EHR / FHIR R4 Integration')

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSdEkQjCVGqo_4ON9dYMLXXF-kqJbEa4d-CtcrD8-BLKHaGVYg/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }).catch(() => {})
    }

    // 2. Also log every submission into the Master Form "Moss Nexus Lead Inquiry Form"
    const masterParams = new URLSearchParams()
    masterParams.append('entry.1248987766', lead.fullName || '')
    masterParams.append('entry.346084520', lead.email || '')
    masterParams.append('entry.1909473752', lead.phone || '')
    masterParams.append('entry.1062539076', lead.organization || 'Website Visitor')
    masterParams.append('entry.836733388', lead.productCategory === 'Course Enrollments' ? 'Student' : 'Corporate')

    let masterProd = 'Forward Deployed Engineering (FDE)'
    if (lead.specificItem?.includes('Agentic')) masterProd = 'Agentic AI Developer Course'
    else if (lead.specificItem?.includes('DevOps')) masterProd = 'DevOps, Cloud & MLOps Infrastructure'
    masterParams.append('entry.1914731064', masterProd)

    masterParams.append(
      'entry.1523358416',
      lead.learningMode?.includes('Online')
        ? '100% Live Online (Global Cohort)'
        : 'Hybrid (Campus + Online)'
    )
    masterParams.append('entry.530749312', lead.offerFee || '₹39,999')
    masterParams.append(
      'entry.460591954',
      [lead.productCategory, lead.specificItem, lead.message].filter(Boolean).join(' | ')
    )
    masterParams.append('entry.1021050099', 'Website')

    fetch('https://docs.google.com/forms/d/e/1FAIpQLScNWsf59Dv4E1wqozXYdLhFjn1iDzkwC1ISU_o7XwzfdER9rw/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: masterParams.toString(),
    }).catch(() => {})
  } catch (err) {
    console.warn('Google Form direct push (non-blocking):', err)
  }
}

