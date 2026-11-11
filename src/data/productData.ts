// Structured content objects for MossTech Product Discovery Platform

export interface ScreenshotItem {
  id: string
  imagePath: string
  title: string
  description: string
  associatedProduct: 'moss-med-ai' | 'moss-ai-mapper' | 'custom-solutions' | 'moss-academy'
  associatedPortal?: string
  alt: string
  displayOrder: number
  badge?: string
}

export interface PortalFeature {
  id: string
  name: string
  icon: string
  shortDesc: string
  detailedExplanation: string
  howItWorks: string[]
  benefits: string[]
  screenshotId?: string
}

export interface RoleDashboard {
  id: string
  roleName: string
  badge: string
  icon: string
  overview: string
  responsibilities: string[]
  keyModules: { name: string; desc: string }[]
  workflow: string[]
  benefits: string[]
  color: string
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. MOSS MED AI DATA
// ─────────────────────────────────────────────────────────────────────────────
export const MOSS_MED_AI_DATA = {
  id: 'moss-med-ai',
  name: 'Moss Med AI',
  tagline: 'Connecting Healthcare Through Intelligent Technology',
  headline: 'Moss Med AI – Connecting Healthcare Through Intelligent Technology.',
  description:
    'Moss Med AI is a comprehensive healthcare management platform designed to simplify hospital operations, strengthen doctor-patient communication, and provide a unified digital healthcare experience. The platform connects patients, doctors, and hospital administrators through dedicated portals, allowing each user to access the tools and information relevant to their responsibilities.',
  heroStats: [
    { label: 'Clinical Precision', value: '99.8%' },
    { label: 'EHR Interoperability', value: 'HL7 & FHIR R4' },
    { label: 'Active Portals', value: '3 Live + 2 In Pilot' },
    { label: 'Data Security', value: '100% HIPAA & ZDR' },
  ],
  screenshots: [
    {
      id: 'med-portals-suite',
      imagePath: '/images/moss-med-ai-portals.png',
      title: 'Moss Med AI - 5 Unified Portals Suite',
      description: 'The complete healthcare package showing Patient, Doctor, and Hospital portals, with Pharmacy and Laboratory modules.',
      associatedProduct: 'moss-med-ai',
      alt: 'Moss Med AI 5 Portals Suite',
      displayOrder: 1,
      badge: 'Unified Architecture',
    },
    {
      id: 'doctor-charting',
      imagePath: '/images/moss-med-ai-portals.png',
      title: 'Doctor Portal Clinical Workspace',
      description: 'Physician EHR workspace with real-time ICD-10 encoding, e-prescriptions, and drug-drug contraindication checks.',
      associatedProduct: 'moss-med-ai',
      associatedPortal: 'doctor-portal',
      alt: 'Doctor Portal EHR Workspace',
      displayOrder: 2,
      badge: 'Clinician Interface',
    },
    {
      id: 'patient-dashboard',
      imagePath: '/images/moss-med-ai-portals.png',
      title: 'Patient Health Portal',
      description: 'Self-serve health records, lab reports, doctor appointment scheduling, and remote video consultations.',
      associatedProduct: 'moss-med-ai',
      associatedPortal: 'patient-portal',
      alt: 'Patient Portal Dashboard',
      displayOrder: 3,
      badge: 'Patient Interface',
    },
    {
      id: 'hospital-admin',
      imagePath: '/images/moss-med-ai-portals.png',
      title: 'Hospital Operational Command',
      description: 'Centralized hospital administration dashboard with live bed occupancy, nurse rostering, and billing oversight.',
      associatedProduct: 'moss-med-ai',
      associatedPortal: 'hospital-portal',
      alt: 'Hospital Portal Operations Dashboard',
      displayOrder: 4,
      badge: 'Operations & Admin',
    },
  ] as ScreenshotItem[],
  portals: [
    {
      id: 'patient-portal',
      name: 'Patient Portal',
      path: '/products/moss-med-ai/patient-portal',
      tagline: 'Empowering patients to manage their healthcare journey digitally.',
      icon: '👤',
      themeColor: '#10b981',
      bgLight: 'bg-emerald-50',
      borderLight: 'border-emerald-400',
      textColor: 'text-emerald-700',
      btnColor: 'bg-emerald-500 hover:bg-emerald-600',
      keyFeatures: [
        'Book doctor appointments',
        'Manage personal health records',
        'View prescriptions',
        'Access medical history',
        'Attend video consultations',
        'Share medical records with doctors',
      ],
      whoUses: 'Inpatients, outpatients, family caregivers, and wellness members managing treatment plans.',
      whyExists:
        'Patients frequently face fragmented records across clinics, lost paper prescriptions, and cumbersome booking queues. The Patient Portal provides a single secure home for their complete medical history.',
      problemsSolved: [
        'Eliminates paper prescription loss through permanent digital storage',
        'Prevents scheduling conflicts with real-time doctor availability calendars',
        'Removes physical hospital commute bottlenecks via secure video consultations',
        'Enables controlled, consent-based medical records sharing with any specialist',
      ],
      mainBenefits: [
        '24/7 self-service access to verified diagnostic reports & lab results',
        'Automated appointment reminders via SMS & email to reduce no-shows',
        'End-to-end encrypted record vault meeting global HIPAA standards',
      ],
      features: [
        {
          id: 'feat-booking',
          name: 'Doctor Appointment Booking',
          icon: '📅',
          shortDesc: 'Search specialists by department, select available time slots, and book in seconds.',
          detailedExplanation:
            'Patients can filter doctors by specialty, location, or insurance network. The scheduling engine links directly with hospital clinic calendars to prevent double-booking.',
          howItWorks: [
            'Search by doctor name, specialty (e.g. Cardiology), or clinical department',
            'View verified calendar slots updated in real-time from the hospital EHR',
            'Select slot and confirm appointment with instant SMS/email confirmation',
            'Add notes or symptom descriptions for the physician prior to the consultation',
          ],
          benefits: [
            'Zero phone queues or reception desk waiting',
            'Option to reschedule or cancel with 1-click self-service',
            'Instant calendar sync with Google, Apple, and Outlook calendars',
          ],
        },
        {
          id: 'feat-records',
          name: 'Electronic Health Records (EHR)',
          icon: '📁',
          shortDesc: 'Access, organize, and securely share complete medical history and diagnostic reports.',
          detailedExplanation:
            'A FHIR R4-compliant personal health repository that unifies blood panels, radiology scans, surgical summaries, and discharge notes in one chronological timeline.',
          howItWorks: [
            'Hospital labs and doctors upload records directly to the patient profile',
            'Records are tagged by category: Labs, Imaging, Vitals, Medications',
            'Patients can download certified PDF summaries or share temporary read-only links with specialists',
          ],
          benefits: [
            'Complete medical portability without losing critical historical tests',
            'Eliminates duplicate lab tests and saves out-of-pocket costs',
            '100% HIPAA-compliant encryption at rest and in transit',
          ],
        },
        {
          id: 'feat-video',
          name: 'HD Telehealth & Video Consultations',
          icon: '📹',
          shortDesc: 'Secure browser-based remote consultations connecting patients directly with physicians.',
          detailedExplanation:
            'Built-in WebRTC video consultation suite that operates directly inside the portal without third-party downloads, enabling screen-sharing of diagnostic scans and live chat.',
          howItWorks: [
            'Join the virtual waiting room 5 minutes prior to the scheduled slot',
            'Doctor admits the patient into an encrypted peer-to-peer room',
            'Doctor reviews EHR records on one pane while conversing with the patient',
            'Digital prescription is generated and delivered immediately at call wrap-up',
          ],
          benefits: [
            'Care delivery from home for elderly or mobility-impaired patients',
            'Zero software installation required for patients or physicians',
            'Automatic recording of consultation notes into hospital chart',
          ],
        },
        {
          id: 'feat-prescriptions',
          name: 'Digital Prescriptions & Refills',
          icon: '💊',
          shortDesc: 'Digitally signed e-prescriptions with dosage schedules and 1-click refill requests.',
          detailedExplanation:
            'Doctors sign prescriptions electronically with full regulatory compliance. Patients view exact dosages, frequencies, and instructions with built-in push notification alerts.',
          howItWorks: [
            'Doctor generates e-prescription during inpatient or outpatient consult',
            'Patient receives structured prescription card in portal with reminder schedule',
            '1-click refill request dispatches to attending physician when supply runs low',
          ],
          benefits: [
            'Prevents handwriting misinterpretation and medication errors',
            'Direct electronic transmission to partner hospital pharmacy',
          ],
        },
      ] as PortalFeature[],
      workflow: [
        { step: '1', title: 'Sign In / Register', desc: 'Secure 2FA authentication via mobile OTP or hospital ID.' },
        { step: '2', title: 'Select Care Pathway', desc: 'Choose between booking a doctor, reviewing reports, or requesting refills.' },
        { step: '3', title: 'Attend Consult', desc: 'Visit hospital clinic or join secure in-portal telehealth video room.' },
        { step: '4', title: 'Access Results', desc: 'Receive digital prescriptions, lab observations, and structured care plans.' },
      ],
    },
    {
      id: 'doctor-portal',
      name: 'Doctor Portal',
      path: '/products/moss-med-ai/doctor-portal',
      tagline: 'Helping doctors manage consultations, appointments, and patient information through an integrated clinical workspace.',
      icon: '🩺',
      themeColor: '#2563eb',
      bgLight: 'bg-blue-50',
      borderLight: 'border-blue-500',
      textColor: 'text-blue-700',
      btnColor: 'bg-blue-600 hover:bg-blue-700',
      keyFeatures: [
        'Patient history access',
        'Appointment management',
        'Prescription creation',
        'Medical record access',
        'Video consultations',
        'Clinical workflow management',
      ],
      whoUses: 'Attending physicians, surgeons, resident doctors, and clinical specialists across OPD, IPD, and emergency departments.',
      whyExists:
        'Physicians are overwhelmed by cumbersome documentation systems that take attention away from patient care. The Doctor Portal provides a sub-second, intelligent interface designed for clinical speed.',
      problemsSolved: [
        'Cuts clinical documentation time by 60% with AI-assisted voice-to-text structuring',
        'Prevents fatal drug-drug contraindications through automated real-time alerts',
        'Brings fragmented outpatient and inpatient records into a unified patient timeline',
        'Integrates with hospital EHR (Epic, Cerner) without double-entry overhead',
      ],
      mainBenefits: [
        'Faster clinical chart sign-offs with standardized ICD-10 & SNOMED-CT coding',
        'Real-time inpatient vitals telemetry monitors from ICU/step-down wards',
        'Seamless coordination with nursing and pharmacy staff in a single interface',
      ],
      features: [
        {
          id: 'doc-patient-history',
          name: 'Unified Patient History & EHR Chart',
          icon: '📋',
          shortDesc: 'Comprehensive longitudinal patient chart aggregating past diagnoses, allergies, and vitals.',
          detailedExplanation:
            'Doctors can review previous admissions, chronic condition timelines, surgical histories, and known drug allergies in seconds before entering the consultation room.',
          howItWorks: [
            'Search patient by barcode, hospital ID, or name',
            'View visual timeline of past admissions, vitals trends, and lab reports',
            'Critical allergies and chronic warnings highlighted in high-contrast banner',
          ],
          benefits: [
            'Instant situational awareness before complex clinical decisions',
            'Prevents adverse drug events and allergic reactions',
          ],
        },
        {
          id: 'doc-prescriptions',
          name: 'Intelligent e-Prescription Engine',
          icon: '💊',
          shortDesc: 'Rapid drug selection with automated contraindication detection and dosage calculators.',
          detailedExplanation:
            'A clinical pharmacology sentinel that checks active medications, renal function (eGFR), and known allergies in real time before approving medication orders.',
          howItWorks: [
            'Type generic or brand name with smart autocomplete',
            'System calculates recommended pediatric or geriatric dose based on weight/age',
            'Background sentinel runs contraindication check against active patient chart',
            'Digitally sign and transmit to pharmacy in one click',
          ],
          benefits: [
            'Zero medication collision errors',
            'Sub-15 second e-prescription completion time',
          ],
        },
        {
          id: 'doc-scheduling',
          name: 'Clinical Workflow & Appointment Roster',
          icon: '⏱️',
          shortDesc: 'Real-time OPD queue management and inpatient ward rounds scheduling.',
          detailedExplanation:
            'Live queue tracking showing patient arrival status, triage acuity scores, and appointment durations, allowing doctors to manage clinic flow efficiently.',
          howItWorks: [
            'View daily appointments divided by Morning OPD, Evening OPD, and IPD rounds',
            'See live status: Arrived, In Triage, In Consultation, Completed',
            '1-click patient hand-off to nursing staff for diagnostic procedures',
          ],
          benefits: [
            'Smooth clinical flow with reduced patient wait times',
            'Priority indicators for emergency and post-operative patients',
          ],
        },
        {
          id: 'doc-note-ai',
          name: 'AI Clinical Note Structuring',
          icon: '⚡',
          shortDesc: 'Converts unstructured dictations into structured FHIR records with ICD-10 codes.',
          detailedExplanation:
            'Specialized clinical NLP parser that reads doctor speech or shorthand notes and automatically structures Subjective, Objective, Assessment, and Plan (SOAP) sections with ICD-10 coding.',
          howItWorks: [
            'Doctor dictates or types natural clinical impressions',
            'Engine extracts symptoms, vital signs, diagnoses, and orders in sub-100ms',
            'Structured FHIR Observation and Condition resources generated automatically',
          ],
          benefits: [
            'Saves 2+ hours of administrative charting per clinical shift',
            'Standardizes medical records for billing and compliance audit readiness',
          ],
        },
      ] as PortalFeature[],
      workflow: [
        { step: '1', title: 'Open Clinic Roster', desc: 'Review daily OPD patient queue and inpatient ward census.' },
        { step: '2', title: 'Review Patient History', desc: 'Inspect chronological timeline, vitals trends, and drug allergies.' },
        { step: '3', title: 'Conduct Consultation', desc: 'Examine patient in-person or via high-definition portal telehealth.' },
        { step: '4', title: 'Prescribe & Sign Off', desc: 'Issue safe e-prescriptions and sign structured FHIR clinical notes.' },
      ],
    },
    {
      id: 'hospital-portal',
      name: 'Hospital Portal',
      path: '/products/moss-med-ai/hospital-portal',
      tagline: 'A centralized operational workspace designed to manage hospital staff, patient administration, financial workflows, and healthcare operations.',
      icon: '🏥',
      themeColor: '#8b5cf6',
      bgLight: 'bg-purple-50',
      borderLight: 'border-purple-500',
      textColor: 'text-purple-700',
      btnColor: 'bg-purple-600 hover:bg-purple-700',
      keyFeatures: [
        'Hospital administration',
        'Staff management',
        'Role-based dashboards',
        'Nurse management',
        'Front desk operations',
        'Bed and ward management',
        'Billing and financial oversight',
        'Insurance management',
        'Operational reporting',
      ],
      whoUses: 'Hospital CEOs, Medical Superintendents, Nurse Managers, Finance Directors, Front Desk Officers, and TPA Billing Specialists.',
      whyExists:
        'Hospitals are intricate operations requiring synchronized communication between clinical, administrative, and financial teams. The Hospital Portal breaks data silos and gives every department real-time operational visibility.',
      problemsSolved: [
        'Eliminates bed allocation bottlenecks and patient discharge delays',
        'Provides real-time visibility into staff rostering and nursing nurse-to-patient ratios',
        'Reduces insurance TPA claim rejection rates through pre-submission validation',
        'Unifies revenue cycle management, billing, and operational KPI dashboards',
      ],
      mainBenefits: [
        'Optimized bed turnover rate and 15% increase in operational capacity',
        'Accurate audit trails and role-based permissions preventing unauthorized PHI access',
        'Real-time emergency department triage and surge capacity management',
      ],
      features: [
        {
          id: 'hosp-bed-management',
          name: 'Bed & Ward Management',
          icon: '🛏️',
          shortDesc: 'Interactive hospital floor map with live occupancy, sanitation status, and bed allocation.',
          detailedExplanation:
            'Visual layout of ICU, NICU, General Wards, and Private Rooms. Staff can track occupied, reserved, cleaning-in-progress, and vacant beds in real-time.',
          howItWorks: [
            'Front desk or nursing supervisor selects admitting patient',
            'Floor map highlights available beds matching patient acuity level',
            'Automated alerts dispatched to housekeeping upon patient discharge for rapid turnaround',
          ],
          benefits: [
            'Reduces emergency room boarding time by 35%',
            'Maximizes inpatient bed utilization and prevents admission delays',
          ],
        },
        {
          id: 'hosp-staff-roster',
          name: 'Staff & Nurse Scheduling',
          icon: '👥',
          shortDesc: 'Automated shift scheduling, attendance telemetry, and nurse-patient ratio governance.',
          detailedExplanation:
            'Ensures clinical staffing compliance by matching scheduled nurse counts against ward patient acuity (e.g., 1:1 ICU, 1:4 General Ward ratios).',
          howItWorks: [
            'Algorithm drafts monthly rosters based on staff availability and departmental rules',
            'Supervisors approve shift swaps and emergency back-up coverage with 1 click',
            'Direct biometric and geo-fenced attendance logging',
          ],
          benefits: [
            'Prevents clinical burnout while maintaining strict patient safety standards',
            'Complete audit readiness for NABH and JCI hospital accreditations',
          ],
        },
        {
          id: 'hosp-billing-tpa',
          name: 'Billing & Insurance TPA Management',
          icon: '💳',
          shortDesc: 'Unified billing engine with cashless insurance pre-authorizations and claim settlement.',
          detailedExplanation:
            'Automates inpatient package billing, itemized pharmacy/consumables charging, and electronic claim submission to government and private insurance TPAs.',
          howItWorks: [
            'Bills compile charges in real-time as procedures and medications are ordered',
            'Insurance pre-authorization documents submitted digitally with diagnostic attachments',
            'Claim reconciliation dashboard tracks approved amounts, co-pays, and pending settlements',
          ],
          benefits: [
            'Shortens claim settlement cycles from 45 days to under 12 days',
            'Zero unbilled consumables or missed procedural charges',
          ],
        },
        {
          id: 'hosp-executive-kpi',
          name: 'Executive Analytics & Governance',
          icon: '📊',
          shortDesc: 'Real-time KPIs for Average Length of Stay (ALOS), occupancy, revenue, and clinical outcomes.',
          detailedExplanation:
            'Executive dashboards for Chief Medical Officers and Hospital Managing Directors displaying daily census, doctor productivity, infection rates, and revenue run-rates.',
          howItWorks: [
            'Aggregates streams from OPD, IPD, OT, and billing engines into executive charts',
            'Automated anomaly detection alerts leaders to capacity surges or billing slowdowns',
            'Export board-ready financial and clinical audit reports in PDF and Excel',
          ],
          benefits: [
            'Data-driven decisions for hospital capital expansion and service lines',
            'Comprehensive regulatory compliance reporting',
          ],
        },
      ] as PortalFeature[],
      roleDashboards: [
        {
          id: 'admin',
          roleName: 'Hospital Admin Dashboard',
          badge: 'System Governance',
          icon: '🛡️',
          color: '#1b95cd',
          overview: 'Central control room managing system security, user credentials, audit trails, and departmental master setups.',
          responsibilities: [
            'User provisioning, role-based access control (RBAC), and HIPAA security audits',
            'Hospital department, ward, and service pricing configurations',
            'Integration monitoring for external EHRs, PACS servers, and government registries',
          ],
          keyModules: [
            { name: 'User & Access Manager', desc: 'Assign fine-grained read/write permissions by staff role.' },
            { name: 'Audit Trail Sentinel', desc: 'Immutable log of every patient record view and modification.' },
            { name: 'System Interoperability', desc: 'HL7 / FHIR connectivity monitors with sub-100ms latency checks.' },
          ],
          workflow: ['Provision new staff', 'Configure clinical departments', 'Monitor interface health', 'Run security audit reports'],
          benefits: ['Prevents unauthorized data access', '100% compliance with HIPAA & NABH hospital guidelines'],
        },
        {
          id: 'executive',
          roleName: 'Executive Dashboard (CEO / Medical Director)',
          badge: 'Strategic KPIs',
          icon: '👔',
          color: '#0d2335',
          overview: 'High-level business intelligence dashboard aggregating institutional financial performance, bed occupancy, and patient satisfaction.',
          responsibilities: [
            'Institutional revenue and operational margin tracking',
            'Average Length of Stay (ALOS) and clinical mortality governance',
            'Strategic resource allocation across surgical theaters and intensive care units',
          ],
          keyModules: [
            { name: 'Hospital Performance Matrix', desc: 'Real-time occupancy, revenue run-rate, and patient inflow trends.' },
            { name: 'Departmental Yield Tracker', desc: 'Doctor-wise and specialty-wise clinical utilization.' },
            { name: 'Quality & Safety Metrics', desc: 'Infection rates, readmission rates, and patient NPS scores.' },
          ],
          workflow: ['Inspect morning operational briefing', 'Analyze department margins', 'Review clinical quality indicators'],
          benefits: ['Data-backed hospital governance', 'Maximizes institutional profitability while improving clinical outcomes'],
        },
        {
          id: 'nurse',
          roleName: 'Staff Nurse Dashboard',
          badge: 'Point of Care',
          icon: '👩‍⚕️',
          color: '#10b981',
          overview: 'Bedside clinical interface for medication administration, vitals recording, and doctor instruction execution.',
          responsibilities: [
            'Administering scheduled medications (eMAR barcode scanning)',
            'Continuous patient vitals recording (BP, SpO2, Temperature, Heart Rate)',
            'Nursing shift hand-off reports and critical lab alert response',
          ],
          keyModules: [
            { name: 'Assigned Patients Roster', desc: 'Real-time list of assigned ward beds with acuity indicators.' },
            { name: 'eMAR Medication Schedule', desc: 'Color-coded medication due times with 5-Rights safety check.' },
            { name: 'Vitals Charting & Early Warning Score (NEWS2)', desc: 'Automatic calculation of patient deterioration risk.' },
          ],
          workflow: ['Review shift assignments', 'Administer due medications via barcode scan', 'Log vitals', 'Submit shift hand-off summary'],
          benefits: ['Eliminates medication administration errors', 'Immediate notification of critical patient decline'],
        },
        {
          id: 'nurse-manager',
          roleName: 'Nurse Manager Dashboard',
          badge: 'Ward Leadership',
          icon: '🩺',
          color: '#059669',
          overview: 'Supervisory command center overseeing ward staffing ratios, bed cleanliness status, and clinical consumable supplies.',
          responsibilities: [
            'Balancing nurse-to-patient staffing ratios across floors',
            'Supervising high-risk patients and nursing care plan compliance',
            'Managing ward floor stock, crash carts, and linen inventory',
          ],
          keyModules: [
            { name: 'Ward Acuity & Staffing Balancer', desc: 'Real-time nurse allocation based on patient dependency.' },
            { name: 'Incident & Near-Miss Reporter', desc: 'Instant logging of clinical falls, extravasations, or errors.' },
            { name: 'Ward Stock & Medication Requisition', desc: '1-click re-stocking requests sent to Central Pharmacy.' },
          ],
          workflow: ['Inspect morning floor census', 'Reassign nurses to high-acuity patients', 'Audit controlled drug registers'],
          benefits: ['Balanced nurse workloads', 'Elevated quality of bedside inpatient care'],
        },
        {
          id: 'financial',
          roleName: 'Financial Manager Dashboard',
          badge: 'Revenue Cycle',
          icon: '💰',
          color: '#f59e0b',
          overview: 'Comprehensive financial dashboard tracking revenue cycle management (RCM), inpatient billing, and operational expenditures.',
          responsibilities: [
            'Monitoring daily hospital billing collections and unbilled patient tabs',
            'Accounts receivable tracking across private insurers, TPAs, and corporate tie-ups',
            'Departmental operational expenditure and doctor payout calculations',
          ],
          keyModules: [
            { name: 'Real-Time Revenue Monitor', desc: 'Hourly cash and digital billing counter collections.' },
            { name: 'Discharge Clearance Tracker', desc: 'Tracks bill preparation speed to eliminate discharge bottlenecks.' },
            { name: 'Aging Accounts Receivable', desc: 'Outstanding balances categorized by 30/60/90 days.' },
          ],
          workflow: ['Review daily collection reports', 'Audit high-value inpatient discharge bills', 'Authorize corporate vendor invoices'],
          benefits: ['Accelerates cash flow', 'Prevents revenue leakage on consumables and surgical implants'],
        },
        {
          id: 'front-desk',
          roleName: 'Front Desk Dashboard',
          badge: 'Patient Admissions',
          icon: '🛎️',
          color: '#3b82f6',
          overview: 'High-speed reception interface for rapid outpatient registrations, appointment check-ins, and bed allocations.',
          responsibilities: [
            'Registering new patients and issuing digital UHID barcodes',
            'Checking in scheduled OPD appointments and directing patients to clinic zones',
            'Processing inpatient admissions, emergency intake, and visitor pass generation',
          ],
          keyModules: [
            { name: 'Patient Registration & UHID Creator', desc: '1-minute fast-track registration with Aadhaar / ID capture.' },
            { name: 'OPD Queue Commander', desc: 'Real-time appointment check-in with token display integration.' },
            { name: 'Admission & Bed Allocator', desc: 'Direct allocation of available beds confirmed with admitting doctor.' },
          ],
          workflow: ['Scan patient ID', 'Check in appointment', 'Collect OPD consultation fee', 'Issue consultation token'],
          benefits: ['Reduces reception queue wait times from 20 minutes to under 2 minutes', 'Accurate demographic and contact capture'],
        },
        {
          id: 'ward-bed',
          roleName: 'Ward & Bed Manager Dashboard',
          badge: 'Facility Logistics',
          icon: '🏨',
          color: '#6366f1',
          overview: 'Logistical command console governing bed transfers, deep-cleaning turnarounds, and departmental bed reservations.',
          responsibilities: [
            'Live floor map management across all wards and intensive care units',
            'Housekeeping dispatch and sanitation cycle tracking',
            'Elective surgical admission bed reservations',
          ],
          keyModules: [
            { name: 'Visual Hospital Floor Map', desc: 'Interactive grid showing Occupied, Empty, Dirty, and Maintenance beds.' },
            { name: 'Housekeeping Dispatch Queue', desc: 'Automated task trigger to housekeeping team on discharge.' },
            { name: 'Bed Transfer Orchestrator', desc: 'Seamless patient transfer between ICU and General Ward.' },
          ],
          workflow: ['Receive discharge notification', 'Assign cleaning team', 'Verify sanitized bed inspection', 'Mark bed available for admission'],
          benefits: ['Cuts bed turnaround time from 2 hours to 28 minutes', 'Eliminates ER admission logjams'],
        },
        {
          id: 'insurance-tpa',
          roleName: 'Insurance / TPA Manager Dashboard',
          badge: 'Cashless Claims',
          icon: '📑',
          color: '#0891b2',
          overview: 'Specialized claims portal managing cashless insurance pre-authorizations, query resolutions, and final settlements.',
          responsibilities: [
            'Filing electronic pre-authorization requests to 30+ insurance TPAs',
            'Submitting clinical query responses with doctor notes and diagnostic proofs',
            'Securing final claim approvals before patient physical discharge',
          ],
          keyModules: [
            { name: 'Cashless Pre-Auth Terminal', desc: 'Digital upload of policy details, initial estimation, and doctor advice.' },
            { name: 'TPA Query Resolution Desk', desc: 'Real-time notification when insurers request additional lab proofs.' },
            { name: 'Final Settlement Vault', desc: 'Approved claim amount reconciliation against hospital discharge bill.' },
          ],
          workflow: ['Initiate pre-auth on admission', 'Monitor TPA approval status', 'Upload OT summary on surgery', 'Generate final discharge settlement'],
          benefits: ['Reduces insurance claim denials by 40%', 'Enables hassle-free cashless discharges for patients'],
        },
        {
          id: 'er-staff',
          roleName: 'Emergency / ER Staff Dashboard',
          badge: 'Critical Triage',
          icon: '🚑',
          color: '#ef4444',
          overview: 'Ultra-fast emergency department command center designed for rapid triage acuity scoring and trauma bay allocations.',
          responsibilities: [
            'Emergency Severity Index (ESI Level 1-5) triage scoring in seconds',
            'Trauma resuscitation bay, code blue, and crash team activations',
            'Immediate blood bank and imaging stat orders for acute patients',
          ],
          keyModules: [
            { name: 'ESI Acuity Triage Board', desc: 'Color-coded visual tracker of red/yellow/green emergency patients.' },
            { name: 'Code Alert Trigger', desc: '1-tap broadcast for Code Blue (Cardiac), Code Red, and Trauma Team.' },
            { name: 'Rapid Stat Order Pad', desc: 'Sub-second ordering of emergency CT, ECG, and O-Negative blood.' },
          ],
          workflow: ['Ambulance arrival & triage', 'Assign trauma bay', 'Run stat diagnostic panel', 'Admit to ICU or OT'],
          benefits: ['Sub-3 minute emergency patient triage time', 'Zero delay in life-saving clinical interventions'],
        },
      ] as RoleDashboard[],
      workflow: [
        { step: '1', title: 'Patient Inflow', desc: 'Front desk registers patient or admits from emergency into an allocated bed.' },
        { step: '2', title: 'Clinical Care & Medication', desc: 'Nurses administer prescribed medications and monitor live vitals on ward dashboard.' },
        { step: '3', title: 'Financial & TPA Processing', desc: 'Billing engine compiles charges while TPA desk coordinates cashless pre-auth.' },
        { step: '4', title: 'Discharge & Bed Turnaround', desc: 'Final bill cleared, patient discharged, and housekeeping auto-dispatched to sanitize bed.' },
      ],
    },
    {
      id: 'pharmacy-portal',
      name: 'Pharmacy Portal',
      path: '/products/moss-med-ai/pharmacy-portal',
      tagline: 'Manage prescriptions, track inventory, and process medication orders efficiently.',
      icon: '💊',
      themeColor: '#0ea5e9',
      bgLight: 'bg-sky-50',
      borderLight: 'border-sky-400',
      textColor: 'text-sky-700',
      btnColor: 'bg-sky-600 hover:bg-sky-700',
      keyFeatures: [
        'Manage digital e-prescriptions',
        'Track pharmaceutical inventory',
        'Process medication orders',
        'Drug-drug contraindication checks',
        'Batch & expiry date tracking',
        'Barcode dispensing verification',
      ],
      whoUses: 'Hospital Pharmacists, Pharmacy Technicians, Inventory Managers, and Inpatient Dispensing Staff.',
      whyExists:
        'Paper prescription illegibility, manual dispensing mistakes, and disconnected inventory systems lead to medication delays and clinical risks. The Pharmacy Portal centralizes pharmaceutical workflows with automated cross-checking against patient allergy histories.',
      problemsSolved: [
        'Eliminates dispensing errors caused by handwriting illegibility',
        'Prevents stock-outs of critical life-saving medications via automated reorder alerts',
        'Halts dangerous drug interactions before medication reaches the patient',
        'Accelerates discharge medication fulfillment from hours to minutes',
      ],
      mainBenefits: [
        '100% digital trace from physician prescription to bedside administration',
        'Automated batch and lot traceability for regulatory compliance',
        'Real-time integration with hospital billing to eliminate revenue leakage',
      ],
      features: [
        {
          id: 'feat-rx-processing',
          name: 'Digital e-Prescription Processing',
          icon: '📋',
          shortDesc: 'Instant receipt of electronic prescriptions directly from doctor clinical workstations.',
          detailedExplanation:
            'Pharmacists review verified prescriptions with dosage, route, and frequency pre-validated against patient renal and liver markers.',
          howItWorks: [
            'Physician submits e-prescription in Doctor Portal',
            'Pharmacy workstation instantly queues order with patient vitals & allergy flags',
            'Pharmacist verifies medication and prints barcoded dispensing labels',
          ],
          benefits: [
            'Zero transcription errors or lost paper scripts',
            'Prioritized STAT queue for emergency and ICU patients',
          ],
        },
        {
          id: 'feat-inventory-mgmt',
          name: 'Pharmaceutical Inventory & Batch Tracking',
          icon: '📦',
          shortDesc: 'Automated stock management with expiry alerts and vendor replenishment.',
          detailedExplanation:
            'Tracks stock across central pharmacy and satellite ward medication cabinets with barcode verification.',
          howItWorks: [
            'Scans batch and serial numbers during intake and dispensing',
            'Triggers purchase requisitions when stock dips below threshold',
            'Flags short-expiry lots automatically to minimize wastage',
          ],
          benefits: [
            'Zero stock-out incidents for emergency medications',
            'Full regulatory audit compliance for Schedule H and controlled narcotics',
          ],
        },
      ],
      workflow: [
        { step: '1', title: 'e-Prescription Ingestion', desc: 'Prescription routes automatically from Doctor Portal to Pharmacy Queue.' },
        { step: '2', title: 'Safety Verification', desc: 'Pharmacist verifies drug-drug interactions, patient allergies, and stock availability.' },
        { step: '3', title: 'Dispensing & Barcode Verification', desc: 'Medication packed and verified with barcode scanner against patient wristband.' },
        { step: '4', title: 'Billing Sync & Patient Handover', desc: 'Charges post to hospital invoice and medication instructions sync to Patient Portal.' },
      ],
    },
    {
      id: 'laboratory-portal',
      name: 'Laboratory Portal',
      path: '/products/moss-med-ai/laboratory-portal',
      tagline: 'Upload test results, manage lab reports, and coordinate with healthcare providers.',
      icon: '🧪',
      themeColor: '#6366f1',
      bgLight: 'bg-indigo-50',
      borderLight: 'border-indigo-400',
      textColor: 'text-indigo-700',
      btnColor: 'bg-indigo-600 hover:bg-indigo-700',
      keyFeatures: [
        'Process diagnostic test orders',
        'Barcoded sample tracking',
        'Automated analyzer interfacing (LIS / HL7)',
        'Pathologist review & digital sign-off',
        'Instant sync with Patient EHR',
        'Quality control & calibration logs',
      ],
      whoUses: 'Pathologists, Clinical Biochemists, Lab Technicians, Phlebotomists, and Diagnostic Center Directors.',
      whyExists:
        'Diagnostic results guide over 70% of clinical decisions, yet delays in result turnaround and misplaced paper slips frequently delay acute care. The Laboratory Portal directly connects analyzers and diagnostic specialists with clinical teams in real time.',
      problemsSolved: [
        'Reduces diagnostic turnaround time (TAT) by automating test result ingestion',
        'Eliminates transcription errors through direct HL7 analyzer interfaces',
        'Notifies doctors instantly of critical abnormal values (e.g. cardiac troponin, acute sepsis)',
        'Ensures diagnostic reports are permanently archived in the patient portable EHR',
      ],
      mainBenefits: [
        'Sub-minute notification for critical diagnostic findings',
        'Standardized LOINC and SNOMED clinical terminology encoding',
        'Complete paperless laboratory operations with digital audit trails',
      ],
      features: [
        {
          id: 'feat-sample-tracking',
          name: 'Barcoded Specimen Chain-of-Custody',
          icon: '🏷️',
          shortDesc: 'Positive patient identification from phlebotomy draw to analyzer carousel.',
          detailedExplanation:
            'Generates unique 2D barcode labels for blood, tissue, and fluid vials, tracking collection time, temperature, and technician handler.',
          howItWorks: [
            'Phlebotomist scans patient wristband to generate specimen label',
            'Lab technician scans vial upon arrival at diagnostic department',
            'Automated centrifuge and analyzer log intake and sample processing',
          ],
          benefits: [
            'Zero sample misidentification or lost test tubes',
            'Precise turnaround time tracking from collection to report delivery',
          ],
        },
        {
          id: 'feat-report-signoff',
          name: 'Pathologist Digital Verification & Sign-Off',
          icon: '✍️',
          shortDesc: 'Specialist validation workspace with historical trending and reference ranges.',
          detailedExplanation:
            'Pathologists compare current results against historical patient baselines with automated delta check alerts for unexpected fluctuations.',
          howItWorks: [
            'Analyzer transmits raw quantitative values via HL7 interface',
            'Portal highlights abnormal parameters against age/gender reference ranges',
            'Pathologist signs off report with cryptographic digital signature',
          ],
          benefits: [
            'Instant multi-portal broadcast to doctor EHR and patient portal',
            'Automated SMS notification to patient when certified report is ready',
          ],
        },
      ],
      workflow: [
        { step: '1', title: 'Order Requisition', desc: 'Physician requests diagnostic panels in Doctor Portal during consultation.' },
        { step: '2', title: 'Sample Collection & Accessioning', desc: 'Phlebotomist collects specimen and prints barcoded tube label.' },
        { step: '3', title: 'Analyzer Processing & HL7 Sync', desc: 'Automated instruments execute assays and push raw data into Lab Portal.' },
        { step: '4', title: 'Validation & EHR Broadcast', desc: 'Pathologist reviews and signs off; report publishes instantly to Doctor and Patient portals.' },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MOSS AI MAPPER DATA
// ─────────────────────────────────────────────────────────────────────────────
export const MOSS_AI_MAPPER_DATA = {
  id: 'moss-ai-mapper',
  name: 'Moss AI Mapper',
  tagline: 'Intelligent Schema Mapping and Data Migration',
  headline: 'Moss AI Mapper – Intelligent Schema Mapping and Data Migration.',
  description:
    'Moss AI Mapper is an AI-assisted database migration platform designed to simplify schema analysis, source-to-target mapping, transformation planning, and migration validation. The application helps organizations understand differences between database structures and accelerate complex migration workflows.',
  heroStats: [
    { label: 'Automated Mapping Precision', value: '99.8%' },
    { label: 'Migration Time Reduction', value: '90%' },
    { label: 'Supported DB Engines', value: '15+ SQL/NoSQL' },
    { label: 'Data Sync SLA', value: 'Zero-Downtime CDC' },
  ],
  screenshots: [
    {
      id: 'mapper-overview',
      imagePath: '/assets/hero-neural-core.png',
      title: 'Neural Schema Mapping Workspace',
      description: 'Side-by-side hierarchical source and target schema matching with automated semantic resolution.',
      associatedProduct: 'moss-ai-mapper',
      alt: 'Moss AI Mapper Neural Workspace',
      displayOrder: 1,
      badge: 'Core Engine',
    },
    {
      id: 'mapper-er-diagram',
      imagePath: '/assets/hero-abstract-mesh.png',
      title: 'Interactive ER Diagram Visualization',
      description: 'Entity-relationship graph displaying foreign key topologies, table dependencies, and transformation routes.',
      associatedProduct: 'moss-ai-mapper',
      alt: 'Moss AI Mapper ER Diagram',
      displayOrder: 2,
      badge: 'Visual Modeler',
    },
  ] as ScreenshotItem[],
  workflowStages: [
    {
      step: '1',
      title: 'Create Migration',
      shortDesc: 'Define project scope, migration strategy, and SLA targets.',
      detailedDesc: 'Users name their project, configure data volume limits, set zero-downtime requirements, and choose between one-time migration or continuous CDC replication.',
    },
    {
      step: '2',
      title: 'Source Upload',
      shortDesc: 'Connect live source DB or upload DDL / JSON / XML schemas.',
      detailedDesc: 'Ingest schema definitions from Oracle, PostgreSQL, MySQL, SQL Server, MongoDB, or CSV/JSON files with automated datatype introspection.',
    },
    {
      step: '3',
      title: 'Target Upload',
      shortDesc: 'Specify target modern cloud warehouse or database schema.',
      detailedDesc: 'Select target system like Snowflake, Databricks Delta Lake, Google BigQuery, or PostgreSQL and preview table structures.',
    },
    {
      step: '4',
      title: 'Schema Analysis',
      shortDesc: 'Deep semantic analysis of field semantics, constraints, and keys.',
      detailedDesc: 'The neural engine analyzes column names, data samples, primary/foreign keys, and nested structures to identify architectural disparities.',
    },
    {
      step: '5',
      title: 'AI Mapping',
      shortDesc: 'Automated table-to-table and column-to-column neural mapping.',
      detailedDesc: 'AI matches corresponding entities with confidence scores, auto-synthesizing transformation formulas for mismatched formats (e.g. string timestamps to epoch).',
    },
    {
      step: '6',
      title: 'Validation',
      shortDesc: 'Pre-flight integrity checks, orphan record tests & dry runs.',
      detailedDesc: 'Runs automated dry-runs against test samples to detect null-pointer violations, truncation risks, and referential integrity breaks before live execution.',
    },
    {
      step: '7',
      title: 'Mapping Results',
      shortDesc: 'Review, modify, and accept visual transformation pipelines.',
      detailedDesc: 'Interactive canvas allowing engineers to fine-tune mappings, adjust custom SQL expressions, and approve production DAG execution.',
    },
    {
      step: '8',
      title: 'Reports & Export',
      shortDesc: 'Generate compliance audit certificates and PySpark/SQL scripts.',
      detailedDesc: 'Download compiled production migration scripts, rollback plans, and executive data discrepancy reports with 100% audit transparency.',
    },
  ],
  modules: [
    {
      id: 'migration-setup',
      name: 'Migration Setup',
      path: '/products/moss-ai-mapper/migration-setup',
      icon: '⚙️',
      description: 'Define source and target architecture, security guardrails, and migration objectives.',
      features: [
        'Multi-cloud connector wizard (AWS, Azure, GCP, On-Prem)',
        'Support for batch extraction and real-time Change Data Capture (CDC)',
        'Role-based approval gates for production database alterations',
      ],
      workflow: ['Name migration project', 'Select source & target database types', 'Configure connection credentials or upload DDL', 'Save baseline migration configuration'],
      benefits: ['Standardizes migration governance across enterprise data teams', 'Enforces zero data leakage protocols before connections are tested'],
    },
    {
      id: 'schema-ingestion',
      name: 'Source Schema Ingestion',
      path: '/products/moss-ai-mapper/schema-ingestion',
      icon: '📥',
      description: 'Ingest legacy database structures via direct read-only JDBC connectors or offline DDL / JSON uploads.',
      features: [
        'Native connectors for Oracle 11g-19c, MS SQL Server, DB2, and Postgres',
        'Offline DDL / SQL parser supporting complex stored procedures and triggers',
        'Automatic metadata extraction including column comments, constraints, and indexes',
      ],
      workflow: ['Provide read-only credentials or drag-and-drop .sql/.ddl files', 'Engine parses schemas in seconds', 'Inspect hierarchical table tree and field statistics'],
      benefits: ['Zero load or performance impact on production transactional databases', 'Works in strictly air-gapped on-premise environments'],
    },
    {
      id: 'target-config',
      name: 'Target Schema Configuration',
      path: '/products/moss-ai-mapper/target-config',
      icon: '🎯',
      description: 'Define and preview destination cloud lakehouse or modern relational schemas.',
      features: [
        'Optimized presets for Snowflake, Databricks Delta Lake, and BigQuery',
        'Automatic DDL generation for targets if target schema does not yet exist',
        'Partitioning and clustering key recommendation based on query workloads',
      ],
      workflow: ['Select destination cloud platform', 'Choose target database and schema namespace', 'Preview target table schemas and optimize data types'],
      benefits: ['Eliminates manual DDL writing for modern data lakehouses', 'Ensures destination tables adhere to modern cloud performance best practices'],
    },
    {
      id: 'ai-mapping',
      name: 'AI Mapping Engine',
      path: '/products/moss-ai-mapper/ai-mapping',
      icon: '🧠',
      description: 'Deep neural semantic matching that pairs disparate table structures and synthesizes transformation logic.',
      features: [
        'Semantic embedding matching for obfuscated column names (e.g., CUST_FNAME -> first_name)',
        'Automated type conversions with truncation risk alerts',
        'Auto-generated SQL / PySpark transformation expressions for compound fields',
      ],
      workflow: ['Trigger AI Mapping scan', 'Inspect confidence scores (e.g. 99.8% match)', 'Accept recommendations or customize transformation rules on canvas'],
      benefits: ['Reduces manual spreadsheet mapping effort by over 90%', 'Eliminates human error in complex schema mappings with hundreds of tables'],
    },
    {
      id: 'er-diagrams',
      name: 'ER Diagram Visualization',
      path: '/products/moss-ai-mapper/er-diagrams',
      icon: '🕸️',
      description: 'Interactive visual entity-relationship graph displaying dependencies, foreign keys, and migration flows.',
      features: [
        'Interactive zoomable canvas with dependency clustering',
        'Visual mapping links showing source-to-target entity flows',
        'Color-coded conflict alerts highlighting unmapped foreign key relationships',
      ],
      workflow: ['Switch to ER Diagram view', 'Zoom and filter by business domain (e.g. Orders, Inventory)', 'Inspect relationship links and click entities to see field mappings'],
      benefits: ['Provides architects and stakeholders immediate structural clarity', 'Identifies cyclical dependencies before data migration execution'],
    },
    {
      id: 'reports-validation',
      name: 'Validation & Reports',
      path: '/products/moss-ai-mapper/reports',
      icon: '📑',
      description: 'Comprehensive pre-flight validation checks, discrepancy tracking, and audit-ready migration reports.',
      features: [
        'Automated dry-run validation testing row count matching and checksums',
        'Discrepancy and data loss risk analysis report',
        '1-click export of production PySpark, Airflow DAG, or dbt SQL models',
      ],
      workflow: ['Execute automated pre-flight validation dry-run', 'Inspect test results and confirm zero orphan records', 'Download complete compliance report and code artifacts'],
      benefits: ['Guarantees 100% data fidelity before cutover', 'Provides executive sign-off documentation for enterprise compliance auditors'],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. CUSTOM AI SOLUTIONS DATA
// ─────────────────────────────────────────────────────────────────────────────
export const CUSTOM_AI_SOLUTIONS_DATA = {
  id: 'custom-solutions',
  name: 'Custom AI Solutions',
  tagline: 'From Business Challenges to Intelligent AI Solutions',
  headline: 'From Business Challenges to Intelligent AI Solutions.',
  description:
    'MossTech helps organizations design and implement customized AI agents, intelligent automation systems, and scalable applications based on specific business requirements. We partner with enterprises to turn conceptual intelligence into secure, production-grade software.',
  solutions: [
    {
      id: 'custom-ai-agents',
      title: 'Custom AI Agents',
      path: '/solutions/custom-ai-agents',
      icon: '🤖',
      shortDesc: 'Build intelligent assistants tailored to your proprietary business processes and internal knowledge.',
      overview:
        'We build domain-specific AI agents that interact with your company databases, enterprise software, and APIs to execute tasks autonomously with human-in-the-loop governance.',
      problemsAddressed: [
        'Manual repetitive administrative workflows draining technical team capacity',
        'Fragmented institutional knowledge trapped across Notion, Confluence, and Slack',
        'High error rates in multi-step manual data entry and business calculations',
      ],
      useCases: [
        'Financial reconciliation agents that match bank statements with ERP ledgers',
        'Legal compliance agents that review vendor contracts against regulatory checklists',
        'IT support agents that diagnose server logs and recommend self-healing commands',
      ],
      keyCapabilities: [
        'Retrieval-Augmented Generation (RAG) with private enterprise vector stores',
        'Deterministic tool execution using strict function-calling schemas',
        'Complete private VPC deployment with zero third-party data retention',
      ],
      architecture: 'User Request → Guardrail Gateway → LLM Reasoning Engine → Vector Knowledge Base & Private APIs → Deterministic Tool Call → Verified Output',
      developmentApproach: 'Phase 1: Workflow Auditing & Scoping → Phase 2: RAG & Tool Prototyping → Phase 3: Guardrail & Accuracy Tuning → Phase 4: Production VPC Deployment & 24/7 SLAs',
      security: 'Enterprise air-gapped deployment, Zero Data Retention (ZDR) agreements, end-to-end audit logging, and SOC2 Type II compliance.',
    },
    {
      id: 'multi-agent-systems',
      title: 'Multi-Agent Systems',
      path: '/solutions/multi-agent-systems',
      icon: '🐝',
      shortDesc: 'Design coordinated agent swarms that divide and conquer complex, multi-stage enterprise tasks.',
      overview:
        'Multi-agent systems connect specialized agents—such as Researchers, Writers, Code Generators, and Quality Verifiers—into orchestrated swarms that collaborate to solve complex business problems.',
      problemsAddressed: [
        'Single-prompt LLMs hallucinating or failing when tasked with complex multi-step jobs',
        'Bottlenecks in end-to-end workflows requiring diverse specialized skills',
        'Lack of automated verification and cross-checking in enterprise AI pipelines',
      ],
      useCases: [
        'Automated software vulnerability auditing: Planner agent + Scanner agent + Patch generator + Verifier agent',
        'Competitive intelligence swarms that monitor market signals, synthesize reports, and notify leadership',
        'Complex supply chain disruption rerouting based on real-time weather and freight telemetry',
      ],
      keyCapabilities: [
        'Hierarchical and graph-based swarm orchestration using LangGraph and DSPy',
        'Automated consensus protocols and cross-agent peer review before final execution',
        'Shared memory registers with persistent state isolation between tasks',
      ],
      architecture: 'Orchestrator Agent (Task Decomposition) → Specialized Worker Swarms (Parallel Execution) → Consensus & QA Verifier → Production Output',
      developmentApproach: 'Design Directed Acyclic Graphs (DAGs) of agent tasks, benchmark individual agent latency, tune inter-agent messaging protocols, and deploy with real-time telemetry.',
      security: 'Sandboxed tool execution environments with strict budget caps and emergency kill-switch controls.',
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      path: '/solutions/ai-customer-support',
      icon: '🎧',
      shortDesc: 'Develop AI-powered support assistants integrated with your ticketing and CRM systems.',
      overview:
        '24/7 customer experience agents that resolve tier-1 and tier-2 tickets autonomously, execute backend actions (e.g., refunds, booking updates), and escalate gracefully to humans.',
      problemsAddressed: [
        'High support wait times leading to customer churn and low CSAT scores',
        'Soaring support team payroll during seasonal traffic surges',
        'Inconsistent resolution quality across offshore support teams',
      ],
      useCases: [
        'E-commerce order tracking, returns processing, and payment dispute handling',
        'SaaS technical troubleshooting and API integration support',
        'Hospital appointment rescheduling and patient navigation assistance',
      ],
      keyCapabilities: [
        'Omnichannel support across Web Chat, WhatsApp, Email, and Zendesk/Freshdesk',
        'Autonomous API tool calling for real-time customer account modifications',
        'Sentiment analysis and intelligent sentiment-based human escalation',
      ],
      architecture: 'Omnichannel Ingest → Sentiment & Intent Classifier → CRM & Knowledge Retrieval → Resolution Action Engine → Customer Reply / Human Hand-off',
      developmentApproach: 'Ingest historic ticket resolutions, fine-tune domain intent models, map API actions, and conduct supervised canary rollouts.',
      security: 'PII masking at ingress, GDPR right-to-be-forgotten compliance, and encrypted customer session histories.',
    },
    {
      id: 'document-intelligence',
      title: 'Document Intelligence',
      path: '/solutions/document-intelligence',
      icon: '📄',
      shortDesc: 'Automate document extraction, classification, and information retrieval from unstructured PDFs and scans.',
      overview:
        'Convert complex invoices, medical charts, legal contracts, and scanned documents into structured JSON data with 99.8% field-level accuracy.',
      problemsAddressed: [
        'Manual data entry delays costing thousands of operational man-hours per month',
        'High error rates in manual transcription of handwritten or low-resolution scans',
        'Slow turnaround times in loan processing, insurance claims, and vendor onboarding',
      ],
      useCases: [
        'Automated invoice & receipt parsing linked directly to SAP and QuickBooks',
        'Clinical trial and patient consent document extraction into FHIR datasets',
        'KYC identity verification and fraud detection for fintech onboarding',
      ],
      keyCapabilities: [
        'Vision-Language Model (VLM) parsing for complex nested tables and handwritten text',
        'Confidence scoring with automatic flagging of uncertain fields for human review',
        'Automated schema transformation and direct REST / Webhook export',
      ],
      architecture: 'Document Ingestion (PDF / Image) → OCR & Spatial Vision Embedding → Semantic Field Extraction → Confidence Validator → ERP / EHR Export',
      developmentApproach: 'Dataset collection and schema definition, zero-shot and few-shot vision model tuning, human-in-the-loop review station setup, and high-throughput batch deployment.',
      security: 'Ephemeral document processing: documents are deleted immediately after structured extraction with Zero Data Retention.',
    },
    {
      id: 'business-automation',
      title: 'AI Business Automation',
      path: '/solutions/business-automation',
      icon: '⚡',
      shortDesc: 'Build intelligent workflows to reduce repetitive manual operations across sales, HR, and finance.',
      overview:
        'We connect your isolated SaaS applications into automated, self-driving business processes powered by intelligent decision-making logic.',
      problemsAddressed: [
        'Data silos between CRM, ERP, project management, and email tools',
        'Manual follow-ups and lead qualification wasting sales executive time',
        'Slow employee onboarding and cross-departmental approval delays',
      ],
      useCases: [
        'Automated outbound sales research, lead enrichment, and hyper-personalized drafts',
        'Employee onboarding workflow that provisions accounts, sets up training, and tracks milestones',
        'Inventory reordering triggers based on predictive sales forecasting',
      ],
      keyCapabilities: [
        'Integrations with Salesforce, HubSpot, Stripe, Slack, Jira, and NetSuite',
        'Conditional AI branching based on real-time business metrics',
        'Real-time Slack / Teams approval interactive buttons',
      ],
      architecture: 'Event Trigger → AI Context Enrichment → Business Rules Engine → Automated Multi-System Action → Audit Log & Notification',
      developmentApproach: 'Value stream mapping to identify top ROI automation opportunities, modular workflow construction, edge-case failure testing, and production rollout.',
      security: 'OAuth 2.0 token governance, least-privilege API scoping, and real-time failure notification fallbacks.',
    },
    {
      id: 'enterprise-integration',
      title: 'Enterprise AI Integration',
      path: '/solutions/enterprise-ai-integration',
      icon: '🔗',
      shortDesc: 'Connect modern AI capabilities with existing legacy applications, databases, and enterprise architecture.',
      overview:
        'We bridge the gap between cutting-edge LLMs and legacy enterprise mainframes, on-premise databases, and proprietary software without risky system rewrites.',
      problemsAddressed: [
        'Enterprises locked into legacy systems unable to leverage modern AI tools',
        'Strict regulatory bans on sending proprietary data to public cloud AI APIs',
        'High latency and unreliable network architectures when connecting to external LLMs',
      ],
      useCases: [
        'Natural language SQL query interface over on-premise Oracle / DB2 mainframes',
        'Private AI gateway providing rate limiting, cost control, and PII redaction',
        'Air-gapped on-premise open-source LLM deployments on private NVIDIA GPU clusters',
      ],
      keyCapabilities: [
        'Private on-premise LLM hosting (vLLM, Ollama, Triton) on private GPU infrastructure',
        'Custom middleware adapters translating natural language to legacy RPC and SOAP services',
        'Enterprise AI gateway with token budgeting and compliance guardrails',
      ],
      architecture: 'Enterprise Client App → Private AI Gateway (PII Redaction & Rate Limit) → On-Prem GPU / Private VPC LLM → Legacy Connector → Legacy DB / Mainframe',
      developmentApproach: 'Architecture audit, private network topology setup, model benchmarking on enterprise hardware, and staged canary rollout.',
      security: '100% network isolation, zero external internet dependencies, full compliance with banking and defense data regulations.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. MOSS ACADEMY DATA
// ─────────────────────────────────────────────────────────────────────────────
export const MOSS_ACADEMY_DATA = {
  id: 'moss-academy',
  name: 'Moss Academy',
  tagline: 'Learn Today. Build Tomorrow.',
  headline: 'Moss Academy – Learn Today. Build Tomorrow.',
  description:
    'Moss Academy provides industry-oriented technical education focused on practical learning, software development, AI technologies, cloud engineering, and real-world project experience. The academy aims to help learners develop technical confidence through structured programs, hands-on assignments, mentorship, and practical projects.',
  stats: [
    { label: 'Active Alumni', value: '10,000+' },
    { label: 'Practical Labs', value: '100% Hands-On' },
    { label: 'Campus Locations', value: 'Bangalore & Nagpur Hubs' },
    { label: 'Flagship Offer', value: '₹39,999 (20% OFF)' },
  ],
  courses: [
    {
      id: 'forward-deployed-engineering',
      slug: 'forward-deployed-engineering',
      title: 'Forward Deployed Engineering (FDE)',
      subtitle: 'Build the Future. Become an AI-Ready Engineer!',
      heroDescription:
        'An intensive 6-month career-launching program engineered to transform students into production-ready Forward Deployed Engineers capable of architecting, deploying, and integrating modern AI systems directly into client environments.',
      whoIsFor: 'Aspiring software engineers, computer science graduates, and junior developers looking to build production systems and gain real-world industry experience.',
      learningOutcomes: [
        'Architect and deploy full-stack AI applications in production',
        'Master modern frontend and backend frameworks with clean code principles',
        'Design and deploy multi-agent LLM systems and RAG pipelines',
        'Manage cloud infrastructure using Docker, Kubernetes, and CI/CD',
        'Gain guaranteed industry internship experience working on real client solutions',
      ],
      techIcons: ['Python', 'TypeScript', 'React', 'FastAPI', 'Docker', 'Kubernetes', 'LangGraph', 'AWS', 'PostgreSQL'],
      duration: '6-Month Program · 40 Hours of Structured Learning',
      originalFee: '₹49,999',
      offerFee: '₹39,999',
      discount: '20% OFF Special Offer',
      classTimings: 'Weekend Cohort (Sat-Sun 10 AM - 1 PM) & Weekday Evening Batch (7 PM - 9 PM)',
      learningMode: 'Hybrid (Bangalore Campus, Nagpur Campus, or Live Online)',
      prerequisites: 'Basic familiarity with any programming language (Python, C++, or Java). Beginners with high curiosity are welcome.',
      certificationDetails: 'Official MossTech Certified Forward Deployed Engineer (FDE) Credential with verifiable digital badge.',
      internshipOpportunity: 'Guaranteed Internship Program for eligible graduates meeting attendance and capstone project standards, providing real-world client project exposure.',
      overview:
        'Forward Deployed Engineers work at the intersection of software development, artificial intelligence, and customer problem-solving. This course bridges the gap between conceptual university theory and production enterprise delivery.',
      whatYouWillLearn: [
        'Production-grade full stack engineering using React 19, TypeScript, and FastAPI',
        'Relational database architecture, indexing, and schema design with PostgreSQL',
        'LLM integration, DSPy prompt compilation, vector databases, and multi-agent systems',
        'Containerization with Docker, orchestration with Kubernetes, and AWS cloud deployment',
        'Client-facing solution architecture, scoping, and production SLA management',
      ],
      curriculum: [
        {
          module: 'Module 1',
          title: 'Programming Fundamentals & Modern Software Engineering',
          topics: ['Modern Python 3.12 & TypeScript idioms', 'Object-Oriented & Functional paradigms', 'Clean Code, Git branch workflows, and PR etiquette', 'Data structures and computational complexity (Big-O)'],
        },
        {
          module: 'Module 2',
          title: 'Frontend Engineering with React & Tailwind',
          topics: ['React 19 component architecture and hooks', 'Tailwind CSS v4 design systems and responsive UI', 'State management with Zustand and TanStack Query', 'Optimistic UI updates, caching, and client performance'],
        },
        {
          module: 'Module 3',
          title: 'Backend Engineering & High-Performance APIs',
          topics: ['FastAPI and Node.js asynchronous architecture', 'RESTful API design and OpenAPI specifications', 'Authentication via JWT, OAuth 2.0, and RBAC', 'Rate limiting, background task workers with Celery & Redis'],
        },
        {
          module: 'Module 4',
          title: 'Database Systems & Data Modeling',
          topics: ['PostgreSQL schema design and relational integrity', 'ACID transactions, connection pooling with PgBouncer', 'Indexing strategies (B-Tree, GIN) and query plan optimization', 'Vector embeddings storage with pgvector'],
        },
        {
          module: 'Module 5',
          title: 'API Development, Webhooks & Enterprise Integrations',
          topics: ['Third-party API consumption with resilient retry logic', 'Webhook dispatchers and idempotent processing', 'Message queues with Kafka and RabbitMQ', 'Integration testing with Pytest and Playwright'],
        },
        {
          module: 'Module 6',
          title: 'Artificial Intelligence & Machine Learning Fundamentals',
          topics: ['Machine learning foundations: Regression, classification, clustering', 'Embeddings, cosine similarity, and semantic vector search', 'Neural networks and transformer architecture deep dive', 'HuggingFace ecosystem and open-source models'],
        },
        {
          module: 'Module 7',
          title: 'LLM Integration, RAG & Multi-Agent Swarms',
          topics: ['LangChain, LangGraph, and DSPy framework implementation', 'Advanced Retrieval-Augmented Generation (Hybrid search, reranking)', 'Building autonomous agents with deterministic tool-calling', 'LLM evaluation, guardrails, and cost governance'],
        },
        {
          module: 'Module 8',
          title: 'Cloud Infrastructure, Docker & Kubernetes',
          topics: ['Docker multi-stage builds and image security scanning', 'Kubernetes pods, services, ingress, and Helm deployments', 'AWS cloud core: EC2, S3, RDS, ECS, and VPC networking', 'CI/CD pipeline automation with GitHub Actions'],
        },
        {
          module: 'Module 9',
          title: 'Solution Architecture & Enterprise Client Delivery',
          topics: ['Scoping client requirements and drafting architecture blueprints', 'Estimating cloud costs and designing 99.99% SLA architectures', 'Zero Data Retention (ZDR) and enterprise security protocols', 'Effective technical stakeholder communication'],
        },
        {
          module: 'Module 10',
          title: 'Real-World Capstone Project & Production Deployment',
          topics: ['End-to-end design of an enterprise AI solution', 'Code reviews conducted by senior MossTech architects', 'Production deployment to AWS with live monitoring and telemetry', 'Final defense and portfolio showcase presentation'],
        },
      ],
      learningJourney: [
        { stage: '1', title: 'Enroll', desc: 'Secure admission, get campus orientation, and receive curated development toolkits.' },
        { stage: '2', title: 'Learn Fundamentals', desc: 'Master programming, clean architecture, and modern full-stack workflows.' },
        { stage: '3', title: 'Practice & Labs', desc: 'Solve weekly algorithmic and systems engineering assignments with mentors.' },
        { stage: '4', title: 'Build Projects', desc: 'Construct production-grade full-stack applications and multi-agent swarms.' },
        { stage: '5', title: 'Assess Skills', desc: 'Undergo mock technical interviews and comprehensive code reviews.' },
        { stage: '6', title: 'Complete Program', desc: 'Earn verifiable certificate, join guaranteed internship, and launch career.' },
      ],
      projects: [
        {
          title: 'Enterprise Document Intelligence & RAG System',
          description: 'A multi-tenant application that parses complex financial reports, stores vectors in pgvector, and answers analytical queries with citations.',
          tech: ['FastAPI', 'React', 'pgvector', 'LangGraph', 'Docker'],
        },
        {
          title: 'Autonomous DevOps Self-Healing Agent',
          description: 'An AI agent that monitors Kubernetes cluster health, inspects container crash logs, and synthesizes hot-patch pull requests.',
          tech: ['Python', 'Kubernetes API', 'Docker', 'GitHub Actions'],
        },
        {
          title: 'Full-Stack Telehealth Consultation Platform',
          description: 'A WebRTC video consultation suite with real-time audio transcription and automated ICD-10 medical record generation.',
          tech: ['React 19', 'Node.js', 'WebRTC', 'PostgreSQL', 'Tailwind'],
        },
      ],
      faqs: [
        { q: 'Who can join the course?', a: 'Engineering students, computer science graduates, and junior professionals looking to transition into high-growth software and AI engineering roles.' },
        { q: 'Are beginners eligible?', a: 'Yes! While basic curiosity and willingness to code are required, our first two modules establish solid programming and computer science fundamentals.' },
        { q: 'What is the training duration?', a: 'The program spans 6 months with 40 hours of structured live learning, complemented by weekend labs and guided project hours.' },
        { q: 'Are recorded sessions available?', a: 'Yes. Every live lecture and lab is recorded and uploaded to the Moss Academy Student Portal with lifetime access.' },
        { q: 'Are practical projects included?', a: 'Every module requires hands-on coding assignments, culminating in an end-to-end enterprise capstone project.' },
        { q: 'Are internship opportunities available?', a: 'Yes! The Forward Deployed Engineering track includes a Guaranteed Internship Program for students who meet graduation benchmarks.' },
        { q: 'Is a certificate provided?', a: 'Graduates receive an industry-recognized Course Completion Certificate with verifiable cryptographic credential links.' },
        { q: 'How can students enroll?', a: 'Click the Enroll Now button below, call our admissions desk at +91-8867475219, or email hr@moss-tech.com.' },
      ],
    },
    {
      id: 'full-stack-development',
      slug: 'full-stack-development',
      title: 'Full Stack Web Development',
      subtitle: 'Master Modern Web Architecture from UI to Scalable APIs',
      heroDescription: 'Comprehensive hands-on training covering modern frontend engineering, scalable backend microservices, SQL/NoSQL databases, and cloud deployment.',
      whoIsFor: 'Aspiring web developers, frontend engineers wanting to master backend systems, and students building software careers.',
      learningOutcomes: [
        'Build production-ready web apps with React 19, Next.js, and TypeScript',
        'Architect scalable REST & GraphQL APIs with Node.js and Express',
        'Design optimized relational schemas with PostgreSQL and Prisma ORM',
        'Deploy applications to AWS and Vercel with automated CI/CD pipelines',
      ],
      techIcons: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Docker', 'AWS'],
      duration: '4 Months · 32 Hours Structured',
      originalFee: '₹39,999',
      offerFee: '₹29,999',
      discount: '25% OFF',
      classTimings: 'Weekend Batch (Sat-Sun 2 PM - 5 PM)',
      learningMode: 'Live Online & Campus Labs (Bangalore / Nagpur)',
      prerequisites: 'Basic HTML, CSS, and programming logic.',
      certificationDetails: 'MossTech Certified Full Stack Web Developer Certification.',
      internshipOpportunity: 'Merit-based internship pathways available for top cohort performers.',
      overview: 'Develop complete, responsive, full-stack enterprise web applications using modern industry tooling.',
      whatYouWillLearn: ['Modern React & Next.js App Router', 'TypeScript strict typing', 'Node.js backend architectures', 'PostgreSQL & MongoDB data layers', 'Docker containerization & AWS hosting'],
      curriculum: [
        { module: 'Module 1', title: 'Advanced Modern JavaScript & TypeScript', topics: ['ES6+ features, async/await, closures', 'TypeScript types, interfaces, generics', 'DOM manipulation & browser APIs'] },
        { module: 'Module 2', title: 'Frontend Architecture with React 19', topics: ['React hooks, component design patterns', 'Tailwind CSS v4 layout & animations', 'Client routing & state management'] },
        { module: 'Module 3', title: 'Full Stack Frameworks with Next.js', topics: ['Server Components & Client Components', 'Server Actions & API routes', 'SEO optimization & static generation'] },
        { module: 'Module 4', title: 'Backend APIs with Node.js & Express', topics: ['REST API design principles', 'Middleware, validation, and error handling', 'JWT authentication and role security'] },
        { module: 'Module 5', title: 'Database Engineering with PostgreSQL', topics: ['Relational data modeling', 'Prisma ORM & raw SQL query optimization', 'Database migrations & seeders'] },
        { module: 'Module 6', title: 'Production DevOps & Cloud Deployment', topics: ['Docker containers for web apps', 'AWS cloud deployment (S3, CloudFront, EC2)', 'Continuous integration with GitHub Actions'] },
      ],
      learningJourney: [
        { stage: '1', title: 'Fundamentals', desc: 'JavaScript and TypeScript core concepts.' },
        { stage: '2', title: 'Frontend Mastery', desc: 'React 19 and Tailwind CSS application development.' },
        { stage: '3', title: 'Backend & Data', desc: 'Node.js APIs and PostgreSQL relational databases.' },
        { stage: '4', title: 'Capstone & Deploy', desc: 'Deploy a full-stack SaaS platform to production cloud.' },
      ],
      projects: [
        { title: 'Multi-Tenant SaaS Project Management Tool', description: 'Real-time Kanban collaboration board with live WebSockets, billing, and team permissions.', tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'] },
        { title: 'E-Commerce Marketplace with Payment Gateway', description: 'Full shopping cart, inventory management, Stripe payment processing, and admin analytics.', tech: ['React', 'Node.js', 'Stripe', 'Docker'] },
      ],
      faqs: [
        { q: 'Who can join the course?', a: 'Anyone with an interest in web development. Prior coding familiarity is helpful but not mandatory.' },
        { q: 'Are practical projects included?', a: 'Yes, students build 4 distinct production applications culminating in a major capstone.' },
        { q: 'Is a certificate provided?', a: 'Yes, an industry-recognized certificate is awarded upon project defense.' },
      ],
    },
    {
      id: 'python-dsa',
      slug: 'python-dsa',
      title: 'Python Programming & Data Structures (DSA)',
      subtitle: 'Crack Technical Coding Interviews and Master Core Algorithms',
      heroDescription: 'Deep algorithmic problem solving and clean Python coding designed to help students master data structures and ace competitive programming and FAANG-level interviews.',
      whoIsFor: 'Students preparing for campus placements, software engineers preparing for coding interviews, and Python developers.',
      learningOutcomes: [
        'Master core Data Structures: Arrays, Linked Lists, Trees, Graphs, Heaps, and Tries',
        'Solve 250+ LeetCode Medium/Hard algorithmic challenges with optimal time/space complexity',
        'Understand algorithmic patterns: Two Pointers, Sliding Window, DP, and Backtracking',
        'Write elegant, clean, and PEP-8 compliant Python production code',
      ],
      techIcons: ['Python', 'LeetCode', 'Algorithms', 'Data Structures', 'Git'],
      duration: '3 Months · 24 Hours Structured',
      originalFee: '₹29,999',
      offerFee: '₹19,999',
      discount: '33% OFF',
      classTimings: 'Weekday Evenings (Mon-Wed-Fri 7 PM - 9 PM)',
      learningMode: 'Live Online + Weekly Coding Contests',
      prerequisites: 'Basic math and logical reasoning.',
      certificationDetails: 'MossTech Certified Algorithmic Problem Solver Certification.',
      internshipOpportunity: 'Top 10% coders shortlisted for direct MossTech engineering evaluations.',
      overview: 'Develop problem-solving intuition and algorithmic mastery in Python for technical placements.',
      whatYouWillLearn: ['Python language mastery', 'Linear data structures', 'Trees, Graphs, and Heaps', 'Dynamic Programming and Greedy algorithms', 'System design interview fundamentals'],
      curriculum: [
        { module: 'Module 1', title: 'Python Advanced Concepts & Time Complexity', topics: ['Python data model, generators, decorators', 'Time and Space Complexity (Big-O analysis)', 'Recursion & recurrence relations'] },
        { module: 'Module 2', title: 'Linear Data Structures & Classic Patterns', topics: ['Arrays, strings, and sliding window patterns', 'Linked lists, fast & slow pointers', 'Stacks, queues, and monotonic stack problems'] },
        { module: 'Module 3', title: 'Hierarchical Structures: Trees & Heaps', topics: ['Binary Search Trees, AVL Trees, traversals', 'Priority queues, min/max heaps', 'Trie prefix trees for search autocomplete'] },
        { module: 'Module 4', title: 'Graph Algorithms & Traversal Techniques', topics: ['BFS, DFS, topological sorting', 'Shortest path algorithms: Dijkstra, Bellman-Ford', 'Disjoint Set Union (DSU) and minimum spanning trees'] },
        { module: 'Module 5', title: 'Dynamic Programming & Advanced Optimization', topics: ['1D and 2D Dynamic Programming patterns', '0/1 Knapsack, Longest Common Subsequence', 'Bitmask DP and game theory fundamentals'] },
      ],
      learningJourney: [
        { stage: '1', title: 'Complexity & Basics', desc: 'Master recursion and asymptotic Big-O bounds.' },
        { stage: '2', title: 'Linear Structures', desc: 'Solve 100+ array and linked list challenges.' },
        { stage: '3', title: 'Non-Linear & Graphs', desc: 'Conquer binary trees, graphs, and shortest path algorithms.' },
        { stage: '4', title: 'DP & Mock Interviews', desc: 'Dynamic programming mastery and timed interview simulations.' },
      ],
      projects: [
        { title: 'Automated Algorithmic Trading Backtester', description: 'A Python backtesting engine analyzing historical price series with optimized data structures.', tech: ['Python', 'NumPy', 'Algorithms'] },
        { title: 'Graph-Based Transit Navigation Engine', description: 'Custom pathfinding engine calculating optimal multimodal city transit routes using Dijkstra and A*.', tech: ['Python', 'Graph Theory', 'DSU'] },
      ],
      faqs: [
        { q: 'Who can join the course?', a: 'Students preparing for technical rounds at software and product companies.' },
        { q: 'Are coding challenges included?', a: 'Yes, students solve 250+ curated interview problems with live code walkthroughs.' },
      ],
    },
    {
      id: 'devops-cloud',
      slug: 'devops',
      title: 'DevOps & Cloud Engineering',
      subtitle: 'Architect Resilient AWS Infrastructure and Kubernetes Clusters',
      heroDescription: 'Master enterprise Infrastructure as Code, continuous integration/continuous delivery, container orchestration, and multi-region AWS cloud architectures.',
      whoIsFor: 'Systems administrators, backend developers, and engineers wanting to specialize in high-demand DevOps and Cloud Architect roles.',
      learningOutcomes: [
        'Automate multi-tier cloud infrastructure using Terraform and Ansible',
        'Orchestrate scalable microservices on production Kubernetes (EKS)',
        'Build automated CI/CD pipelines with GitHub Actions and ArgoCD',
        'Implement enterprise observability with Prometheus, Grafana, and OpenTelemetry',
      ],
      techIcons: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Linux', 'Prometheus', 'Grafana'],
      duration: '4 Months · 32 Hours Structured',
      originalFee: '₹44,999',
      offerFee: '₹34,999',
      discount: '22% OFF',
      classTimings: 'Weekend Batch (Sat-Sun 10 AM - 1 PM)',
      learningMode: 'Live Online & Hands-On Cloud Sandbox Labs',
      prerequisites: 'Basic Linux commands and networking fundamentals.',
      certificationDetails: 'MossTech Certified Cloud & DevOps Architect Credential.',
      internshipOpportunity: 'Real-world infrastructure internship projects available for qualified students.',
      overview: 'Gain hands-on mastery over modern cloud automation, Kubernetes cluster administration, and GitOps delivery.',
      whatYouWillLearn: ['Linux systems & networking', 'Docker container security', 'Kubernetes architecture & Helm', 'Terraform infrastructure as code', 'CI/CD & GitOps with ArgoCD', 'Site Reliability Engineering (SRE)'],
      curriculum: [
        { module: 'Module 1', title: 'Enterprise Linux & Cloud Networking', topics: ['Linux shell scripting, process management, SSH', 'VPC architecture, subnets, NAT gateways, security groups', 'DNS, SSL/TLS certificates, and load balancing'] },
        { module: 'Module 2', title: 'Docker & Container Security', topics: ['Dockerfile optimization, multi-stage builds', 'Container networking, volumes, and storage drivers', 'Vulnerability scanning with Trivy and Docker Scout'] },
        { module: 'Module 3', title: 'Kubernetes Cluster Orchestration', topics: ['Pod lifecycles, deployments, daemonsets, statefulsets', 'Ingress controllers, Cert-Manager, and service meshes', 'Helm chart authoring and packaging'] },
        { module: 'Module 4', title: 'Infrastructure as Code with Terraform', topics: ['Terraform HCL, state management, remote backends', 'Modular multi-environment architectures (dev/staging/prod)', 'Terraform Cloud and drift detection'] },
        { module: 'Module 5', title: 'GitOps, CI/CD & Site Reliability', topics: ['GitHub Actions workflows and matrix testing', 'GitOps continuous deployment with ArgoCD', 'Monitoring with Prometheus, Grafana, and alert managers'] },
      ],
      learningJourney: [
        { stage: '1', title: 'Linux & Containers', desc: 'Master system fundamentals and Docker packaging.' },
        { stage: '2', title: 'Kubernetes Mastery', desc: 'Deploy and manage resilient distributed clusters.' },
        { stage: '3', title: 'IaC & Cloud', desc: 'Automate entire AWS environments with Terraform.' },
        { stage: '4', title: 'GitOps & SRE', desc: 'Build zero-downtime automated deployment pipelines.' },
      ],
      projects: [
        { title: 'Zero-Downtime Multi-Region EKS Deployment', description: 'Automated Terraform deployment of an AWS EKS cluster with ArgoCD GitOps, auto-scaling, and ingress.', tech: ['AWS', 'Kubernetes', 'Terraform', 'ArgoCD'] },
        { title: 'Enterprise Monitoring & Alerting Stack', description: 'Production Prometheus and Grafana monitoring stack with automated Slack pager escalation rules.', tech: ['Prometheus', 'Grafana', 'AlertManager', 'Docker'] },
      ],
      faqs: [
        { q: 'Who can join the course?', a: 'Engineers who want to build and manage production cloud infrastructure.' },
        { q: 'Do we get free AWS credits for labs?', a: 'Yes, sandbox cloud accounts and Terraform blueprints are provided.' },
      ],
    },
    {
      id: 'data-analytics',
      slug: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      subtitle: 'Turn Raw Data into Actionable Business Intelligence',
      heroDescription: 'Master SQL data extraction, exploratory data analysis with Python, statistical hypothesis testing, and interactive dashboard creation with PowerBI and Tableau.',
      whoIsFor: 'Business analysts, finance professionals, career switchers, and graduates wanting to build careers in data analytics.',
      learningOutcomes: [
        'Write complex analytical SQL queries (Window functions, CTEs, self-joins)',
        'Perform exploratory data analysis and data cleansing with Python Pandas & NumPy',
        'Create interactive executive dashboards using PowerBI and Tableau',
        'Communicate data-driven business recommendations effectively to executives',
      ],
      techIcons: ['SQL', 'Python', 'PowerBI', 'Tableau', 'Excel', 'Pandas', 'Statistics'],
      duration: '3 Months · 24 Hours Structured',
      originalFee: '₹34,999',
      offerFee: '₹24,999',
      discount: '28% OFF',
      classTimings: 'Weekend Batch (Sat-Sun 2 PM - 5 PM)',
      learningMode: 'Live Online + Real Industry Datasets',
      prerequisites: 'Basic computer literacy and curiosity about data.',
      certificationDetails: 'MossTech Certified Data Analytics Specialist Credential.',
      internshipOpportunity: 'Analytics portfolio review and internship matching.',
      overview: 'Develop end-to-end data analytics skills to extract, transform, visualize, and communicate business insights.',
      whatYouWillLearn: ['Advanced SQL for analytics', 'Python data manipulation with Pandas', 'Statistical modeling & hypothesis testing', 'PowerBI dashboard design', 'Business metrics and storytelling'],
      curriculum: [
        { module: 'Module 1', title: 'Advanced SQL for Enterprise Analytics', topics: ['Multi-table joins, subqueries, CTEs', 'Window functions (ROW_NUMBER, RANK, LAG, LEAD)', 'Data aggregation, grouping, and rollup queries'] },
        { module: 'Module 2', title: 'Python for Data Analysis & Visualization', topics: ['Pandas dataframes, series, data cleaning', 'NumPy vectorization and array manipulation', 'Data visualization with Matplotlib and Seaborn'] },
        { module: 'Module 3', title: 'Applied Business Statistics', topics: ['Descriptive vs. inferential statistics', 'Hypothesis testing, p-values, A/B test analysis', 'Correlation, linear regression, and forecasting'] },
        { module: 'Module 4', title: 'Executive BI Dashboards with PowerBI', topics: ['Power Query data modeling and star schemas', 'DAX calculations, measures, and calculated columns', 'Interactive storytelling, drill-throughs, and mobile reports'] },
      ],
      learningJourney: [
        { stage: '1', title: 'SQL Mastery', desc: 'Extract and aggregate data from relational databases.' },
        { stage: '2', title: 'Python Analytics', desc: 'Clean, filter, and analyze large unstructured datasets.' },
        { stage: '3', title: 'Statistical Modeling', desc: 'Conduct A/B test analysis and validate business hypotheses.' },
        { stage: '4', title: 'BI Dashboards', desc: 'Build executive-ready PowerBI visualizations.' },
      ],
      projects: [
        { title: 'E-Commerce Customer Retention & Cohort Analysis', description: 'End-to-end SQL and Python analysis calculating Customer Lifetime Value (CLV) and churn cohorts.', tech: ['SQL', 'Python', 'Pandas', 'PowerBI'] },
        { title: 'Healthcare Hospital Operations KPI Dashboard', description: 'Live PowerBI dashboard tracking bed occupancy, patient stay duration, and billing trends.', tech: ['PowerBI', 'DAX', 'SQL'] },
      ],
      faqs: [
        { q: 'Is coding experience required?', a: 'No, we start with SQL and approachable Python data analysis step by step.' },
        { q: 'Are real datasets used?', a: 'Yes, students work on real-world retail, healthcare, and fintech datasets.' },
      ],
    },
    {
      id: 'data-engineering',
      slug: 'data-engineering',
      title: 'Big Data & Cloud Data Engineering',
      subtitle: 'Build Scalable Petabyte-Level Data Pipelines with Databricks & PySpark',
      heroDescription: 'Master distributed big data processing with PySpark, modern cloud lakehouses on Databricks and Snowflake, streaming ingestion with Kafka, and orchestration with Apache Airflow.',
      whoIsFor: 'Software developers, data analysts, and backend engineers looking to build scalable enterprise big data systems.',
      learningOutcomes: [
        'Build distributed data processing pipelines handling millions of records with PySpark',
        'Implement modern Medallion Architecture (Bronze/Silver/Gold) on Databricks Delta Lake',
        'Design event-driven streaming pipelines with Apache Kafka',
        'Orchestrate dependency DAGs using Apache Airflow and dbt',
      ],
      techIcons: ['Databricks', 'PySpark', 'Snowflake', 'Apache Kafka', 'Airflow', 'dbt', 'SQL', 'AWS'],
      duration: '4 Months · 32 Hours Structured',
      originalFee: '₹44,999',
      offerFee: '₹34,999',
      discount: '22% OFF',
      classTimings: 'Weekend Batch (Sat-Sun 6 PM - 9 PM)',
      learningMode: 'Live Online + Databricks Cloud Lab Workspaces',
      prerequisites: 'Proficiency in Python and intermediate SQL.',
      certificationDetails: 'MossTech Certified Big Data Engineer Credential.',
      internshipOpportunity: 'Industry big data pipeline internships with partner enterprises.',
      overview: 'Equip yourself with the tools and techniques required to build robust, distributed cloud data platforms.',
      whatYouWillLearn: ['PySpark distributed computation', 'Databricks Lakehouse & Delta Lake', 'Data transformation with dbt', 'Workflow orchestration with Apache Airflow', 'Real-time streaming with Kafka'],
      curriculum: [
        { module: 'Module 1', title: 'Distributed Computing with Apache Spark & PySpark', topics: ['Spark architecture, Driver/Executor nodes, RDDs', 'Spark SQL, DataFrames, and Catalyst Optimizer', 'Partitioning, shuffling, and memory tuning'] },
        { module: 'Module 2', title: 'Lakehouse Architecture & Databricks Delta Lake', topics: ['ACID transactions on object storage', 'Time travel, compaction, and VACUUM operations', 'Medallion architecture: Bronze, Silver, Gold layers'] },
        { module: 'Module 3', title: 'Cloud Warehousing with Snowflake & dbt', topics: ['Snowflake virtual warehouses, zero-copy cloning', 'Data transformation models with dbt', 'Automated testing and documentation generation'] },
        { module: 'Module 4', title: 'Pipeline Orchestration & Streaming', topics: ['Apache Airflow DAG design, operators, and sensors', 'Event-driven streaming with Apache Kafka and Spark Streaming', 'Monitoring data quality with Great Expectations'] },
      ],
      learningJourney: [
        { stage: '1', title: 'PySpark Core', desc: 'Master distributed data computation and memory management.' },
        { stage: '2', title: 'Delta Lakehouse', desc: 'Implement Bronze/Silver/Gold architectures on Databricks.' },
        { stage: '3', title: 'dbt & Snowflake', desc: 'Transform warehouse data models with automated tests.' },
        { stage: '4', title: 'Production Airflow', desc: 'Deploy automated, fault-tolerant orchestration DAGs.' },
      ],
      projects: [
        { title: 'End-to-End Financial Streaming Lakehouse', description: 'Kafka streaming pipeline ingesting financial transactions into Databricks Delta Lake with real-time fraud aggregation.', tech: ['PySpark', 'Kafka', 'Databricks', 'Delta Lake'] },
        { title: 'Automated Healthcare Data Warehouse with dbt & Airflow', description: 'Production Airflow DAG extracting EHR datasets, transforming with dbt, and serving analytics tables in Snowflake.', tech: ['Airflow', 'dbt', 'Snowflake', 'Python'] },
      ],
      faqs: [
        { q: 'Who can join the course?', a: 'Developers and analysts wanting to work on large-scale data infrastructure.' },
        { q: 'Are cloud lab environments provided?', a: 'Yes, students receive guided Databricks and Snowflake lab environments.' },
      ],
    },
  ],
  internships: {
    overview:
      'Moss Academy provides industry internship opportunities designed to give students practical experience working on live client engagements, AI systems, and cloud infrastructure. Internships are offered based on graduation performance and capstone project evaluations.',
    pathways: [
      {
        title: 'Forward Deployed Engineering (FDE) Internship',
        duration: '3 to 6 Months',
        mode: 'Hybrid (Bangalore / Nagpur Hub or Remote)',
        eligibility: 'Graduates of the Forward Deployed Engineering track meeting capstone and attendance criteria.',
        responsibilities: [
          'Assist senior architects in integrating AI agents into client systems',
          'Build and test data migration pipelines using Moss AI Mapper',
          'Deploy containerized microservices to cloud staging environments',
        ],
      },
      {
        title: 'AI & Data Engineering Internship',
        duration: '3 Months',
        mode: 'Remote or Campus Hub',
        eligibility: 'Graduates of Data Engineering or Python/DSA tracks with strong project portfolios.',
        responsibilities: [
          'Develop PySpark transformation pipelines and Delta Lake schemas',
          'Clean and preprocess datasets for machine learning models',
          'Build automated data quality monitoring scripts',
        ],
      },
      {
        title: 'Full Stack Web Development Internship',
        duration: '3 Months',
        mode: 'Hybrid / Remote',
        eligibility: 'Graduates of the Full Stack Web Development program.',
        responsibilities: [
          'Develop responsive UI components in React and TypeScript',
          'Implement secure RESTful APIs with Node.js and FastAPI',
          'Write end-to-end integration tests and collaborate on pull requests',
        ],
      },
    ],
    selectionProcess: [
      { step: '1', title: 'Program Completion', desc: 'Complete all required course modules and homework assignments.' },
      { step: '2', title: 'Capstone Defense', desc: 'Present and successfully defend your capstone project before senior mentors.' },
      { step: '3', title: 'Technical Evaluation', desc: 'Undergo a structured coding and architecture review interview.' },
      { step: '4', title: 'Project Onboarding', desc: 'Receive your internship offer, NDA, and client project briefing.' },
    ],
    disclaimer: 'Note: Internship opportunities are awarded based on academic merit, capstone performance, and partner availability. Stated terms are subject to formal internship agreements upon completion.',
  },
  hackathons: [
    {
      id: 'ai-agent-challenge-2026',
      slug: 'ai-agent-challenge-2026',
      title: 'Autonomous Agent Hackathon 2026',
      status: 'Active',
      badge: 'Active Hackathon',
      badgeColor: 'emerald',
      shortDesc: 'Build autonomous multi-agent systems that automate complex business workflows or solve public health challenges.',
      regDeadline: 'May 15, 2026',
      eventStartDate: 'May 20, 2026',
      submissionDeadline: 'May 24, 2026',
      resultDate: 'May 30, 2026',
      eligibility: 'Open to all enrolled students and developers worldwide. Teams of 1 to 4 members.',
      participationFormat: 'Virtual / Online with live mentorship check-ins',
      rewards: '₹1,50,000 Prize Pool + MossTech Internship Fast-Track + Cloud GPU Credits',
      overview:
        'The Autonomous Agent Hackathon invites creative engineers to construct agentic AI swarms using modern frameworks (LangGraph, DSPy, CrewAI). Participants will build solutions that demonstrate autonomous reasoning, tool use, and self-correction.',
      problemStatements: [
        {
          id: 'ps-1',
          title: 'Autonomous Clinical Documentation & ICD-10 Agent',
          description: 'Build an agent that listens to patient-doctor dialogue and outputs structured FHIR clinical notes with verified medical billing codes.',
        },
        {
          id: 'ps-2',
          title: 'DevOps Cloud Cost & Security Sentinel Swarm',
          description: 'Design a multi-agent system that audits AWS Terraform configurations and autonomously recommends architecture fixes to lower cloud expenditure.',
        },
        {
          id: 'ps-3',
          title: 'Automated Legal Contract Risk Auditor',
          description: 'Create an intelligent assistant that reviews 50-page enterprise software contracts and flags non-standard indemnification and liability clauses.',
        },
      ],
      rules: [
        'All code must be written during the hackathon window; open-source libraries and APIs are permitted.',
        'Teams must submit a working GitHub repository with a README and a 3-minute video demonstration.',
        'Zero tolerance for plagiarism; all submissions are analyzed with automated originality tools.',
      ],
      teamSize: '1 to 4 Members',
      evaluationCriteria: [
        { criterion: 'Technical Innovation & Complexity', weight: '30%' },
        { criterion: 'Real-World Business Practicality', weight: '25%' },
        { criterion: 'Agent Autonomy & Tool Reliability', weight: '25%' },
        { criterion: 'UI / UX & Presentation Quality', weight: '20%' },
      ],
      schedule: [
        { date: 'May 15, 2026', event: 'Registration Closes at 11:59 PM IST' },
        { date: 'May 18, 2026', event: 'Pre-Hackathon Briefing & AMA Session (7 PM IST)' },
        { date: 'May 20, 2026', event: 'Hackathon Kicks Off & Problem Statements Unlocked (9 AM IST)' },
        { date: 'May 24, 2026', event: 'Code & Video Submission Deadline (11:59 PM IST)' },
        { date: 'May 30, 2026', event: 'Live Results Announcement & Winner Showcase (6 PM IST)' },
      ],
    },
    {
      id: 'data-lakehouse-challenge',
      slug: 'data-lakehouse-challenge',
      title: 'Databricks & Big Data Lakehouse Sprint',
      status: 'Upcoming',
      badge: 'Upcoming',
      badgeColor: 'blue',
      shortDesc: 'Construct high-throughput PySpark data pipelines streaming millions of event logs into Databricks Delta Lake.',
      regDeadline: 'June 10, 2026',
      eventStartDate: 'June 15, 2026',
      submissionDeadline: 'June 18, 2026',
      resultDate: 'June 22, 2026',
      eligibility: 'Engineering students, data engineers, and Python developers. Teams of 1 to 3.',
      participationFormat: 'Virtual Online + Databricks Cloud Lab Workspaces',
      rewards: '₹1,00,000 Prize Pool + Databricks Certification Vouchers + MossTech Merch Kits',
      overview:
        'A weekend high-intensity sprint challenging data engineers to optimize distributed PySpark jobs, prevent data skew, and build real-time dashboard analytics.',
      problemStatements: [
        {
          id: 'ps-lake-1',
          title: 'Petabyte Log Ingestion with Delta Lake Time Travel',
          description: 'Design a medallion pipeline handling 100k events/sec with automated schema evolution and historical time-travel auditing.',
        },
      ],
      rules: ['Submissions must run on provided Databricks lab accounts or local Spark clusters.', 'Code must include automated data quality checks with Great Expectations.'],
      teamSize: '1 to 3 Members',
      evaluationCriteria: [
        { criterion: 'Query & Spark Performance Optimization', weight: '35%' },
        { criterion: 'Pipeline Resilience & Idempotence', weight: '35%' },
        { criterion: 'Code Cleanliness & Documentation', weight: '30%' },
      ],
      schedule: [
        { date: 'June 10, 2026', event: 'Registration Deadline' },
        { date: 'June 15, 2026', event: 'Sprint Kickoff & Data Access' },
        { date: 'June 18, 2026', event: 'Submission Deadline' },
        { date: 'June 22, 2026', event: 'Results Ceremony' },
      ],
    },
    {
      id: 'fullstack-ai-sprint-2025',
      slug: 'fullstack-ai-sprint-2025',
      title: 'Full Stack AI Product Hackathon 2025',
      status: 'Completed',
      badge: 'Completed',
      badgeColor: 'slate',
      shortDesc: 'Over 850 developers built production web applications integrating generative AI into everyday SaaS workflows.',
      regDeadline: 'Nov 10, 2025',
      eventStartDate: 'Nov 15, 2025',
      submissionDeadline: 'Nov 18, 2025',
      resultDate: 'Nov 22, 2025',
      eligibility: 'Open Category (Past Event)',
      participationFormat: 'Virtual Hackathon',
      rewards: '₹1,00,000 Awarded to Winners · 12 Students Offered Internships',
      overview: 'Completed event celebrating breakthrough web applications that combined React 19, FastAPI, and generative AI models.',
      problemStatements: [
        { id: 'ps-comp-1', title: 'AI-Powered Smart Travel Planner', description: 'Real-time itinerary generation with interactive maps and flight price intelligence.' },
      ],
      rules: ['Event has concluded. Explore the winning repositories and project showcases on Moss Academy.'],
      teamSize: '1 to 4 Members',
      evaluationCriteria: [{ criterion: 'Execution', weight: '50%' }, { criterion: 'Innovation', weight: '50%' }],
      schedule: [{ date: 'Nov 22, 2025', event: 'Event Concluded & Prizes Disbursed' }],
    },
  ],
}

