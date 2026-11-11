import { useState, useEffect } from 'react'

interface InteractiveDemoPageProps {
  initialProductIndex?: number
  onBack: () => void
}

const PRODUCTS_DATA = [
  {
    id: 'moss-migration',
    name: 'Moss Migration',
    badge: 'Live Production',
    badgeColor: 'blue',
    icon: '⚡',
    subtitle: 'Autonomous Enterprise Database Migration & Schema Mapping Engine',
    url: 'https://www.moss-ai-mapper.com/',
    headline: 'Eliminate 90% of Manual Data Engineering & Migration Overhead',
    description:
      'Our battle-tested, AI-driven database migration platform that automatically discovers schemas, matches complex hierarchical fields, generates transformation logic, and orchestrates zero-downtime cross-database sync.',
    highlights: [
      {
        title: 'Neural Schema Mapping',
        desc: 'Auto-detects semantic field associations across SQL, NoSQL, and JSON structures with >99% precision.',
      },
      {
        title: 'Visual Pipeline Architect',
        desc: 'Drag-and-drop transformation canvas with automated SQL/PySpark code synthesis and dry-run execution.',
      },
      {
        title: 'Continuous CDC & Sync',
        desc: 'Zero-downtime Change Data Capture that streams delta records without interrupting source systems.',
      },
      {
        title: 'Enterprise Lakehouse Ready',
        desc: 'Native connectors for Snowflake, Databricks, AWS Redshift, PostgreSQL, Oracle, and Google BigQuery.',
      },
    ],
    specs: [
      { label: 'Supported Engines', value: 'Oracle, Postgres, Snowflake, Databricks, BigQuery, MongoDB' },
      { label: 'Resolution Precision', value: '99.8% Automated Accuracy' },
      { label: 'Data Ingestion SLA', value: 'Sub-second real-time streaming & batch CDC' },
      { label: 'Compliance & Security', value: 'SOC2 Type II, HIPAA, ISO 27001, 256-bit AES' },
    ],
    featuresList: [
      'Automated schema recognition & foreign key mapping',
      'AI-driven field transformation with type safety',
      'Visual migration pipeline with real-time dry-run',
      'Pre-flight integrity & conflict isolation',
      'Zero-downtime enterprise data guarantees',
    ],
    accent: '#1b95cd',
  },
  {
    id: 'moss-med-ai',
    name: 'Moss Med AI',
    badge: '5-Portal Hospital Ecosystem',
    badgeColor: 'emerald',
    icon: '🩺',
    subtitle: 'Comprehensive 5-Portal Hospital & Clinical AI Ecosystem with Zero Data Retention',
    url: null,
    headline: 'Unified 5-Portal Suite for Patients, Doctors, Hospitals, Pharmacy & Labs',
    description:
      'A complete, turnkey hospital ecosystem package featuring dedicated Patient, Doctor, and Hospital portals, plus integrated Pharmacy and Laboratory modules. Integrates with Epic & Cerner, automates clinical documentation with ICD-10/SNOMED-CT coding, and operates under strict HIPAA Zero Data Retention.',
    highlights: [
      {
        title: '5-Portal Unified Ecosystem',
        desc: 'Dedicated Patient, Doctor, and Hospital Administration portals live today, with Pharmacy and Laboratory portals launching in Q3.',
      },
      {
        title: 'FHIR R4 & HL7 Interoperability',
        desc: 'Seamless bidirectional ingestion across Epic, Cerner, and legacy hospital EHR systems.',
      },
      {
        title: 'Automated Clinical Note Coding',
        desc: 'Converts unstructured physician dictations into structured FHIR records with ICD-10 & SNOMED-CT.',
      },
      {
        title: 'Zero Data Retention (ZDR)',
        desc: 'Protected Health Information (PHI) is cryptographically de-identified at the edge without logging.',
      },
    ],
    specs: [
      { label: 'Portals Suite Included', value: 'Patient, Doctor, Hospital (Active) + Pharmacy, Lab (Soon)' },
      { label: 'EHR Standards Supported', value: 'HL7 v2/v3, FHIR R4, CDA, DICOM metadata' },
      { label: 'Clinical Accuracy', value: '99.8% Terminology & Coding Precision' },
      { label: 'Healthcare Compliance', value: 'HIPAA, HITECH, SOC2 Type II, GDPR Article 9' },
    ],
    featuresList: [
      'Patient Portal: Appointments, test results & self-serve health records',
      'Doctor Portal: Inpatient charting, e-prescriptions & clinical sentinels',
      'Hospital Portal: Operations oversight, staff rosters & performance metrics',
      'Pharmacy & Laboratory Portals: Prescription dispensing & lab report ingest',
      'Native FHIR R4 & HL7 bidirectional interoperability with Epic & Cerner',
    ],
    accent: '#10b981',
  },
  {
    id: 'moss-tech',
    name: 'Moss Tech',
    badge: 'Custom Engineering',
    badgeColor: 'purple',
    icon: '🛠️',
    subtitle: 'Build Your Custom Solution & Autonomous Agents',
    url: null,
    headline: 'Build Your Custom Solution with Moss Tech Engineering',
    description:
      'Our engineering squad works directly with your business to architect, engineer, and deploy bespoke software solutions, autonomous agent swarms, and domain microservices integrated with your internal APIs and private VPC.',
    highlights: [
      {
        title: 'Bespoke Solution Scoping',
        desc: 'We audit your manual bottlenecks and engineer customized multi-agent DAG execution workflows.',
      },
      {
        title: 'Deterministic Guardrails',
        desc: 'Pre-execution schema validation, zero-leakage PII redaction, and strict API permission boundaries.',
      },
      {
        title: 'Private VPC Sandboxing',
        desc: 'Custom solutions run in air-gapped or dedicated VPC Kubernetes clusters with zero public model leakage.',
      },
      {
        title: 'Full Lifecycle SLA Support',
        desc: 'Dedicated engineering squad providing continuous prompt optimization, regression testing, and 24/7 SLAs.',
      },
    ],
    specs: [
      { label: 'Client Frameworks', value: 'LangGraph, CrewAI, DSPy, Custom Rust/Python Kernels' },
      { label: 'Deployment Boundary', value: 'Customer AWS/Azure/GCP VPC or On-Premise' },
      { label: 'Inference SLA', value: 'Sub-100ms P99 Latency with 99.99% Availability' },
      { label: 'Security & Audit', value: 'Cryptographic execution ledger, RBAC, Zero Retention' },
    ],
    featuresList: [
      'Bespoke software platforms built to your exact business requirements',
      'Custom multi-agent swarms engineered for your proprietary workflows',
      'Deterministic execution guardrails & transactional sandboxing',
      'Private VPC deployment with zero third-party data leakage',
      'End-to-end delivery: Scoping, agent training, testing & 24/7 SLAs',
    ],
    accent: '#8b5cf6',
  },
  {
    id: 'moss-academy',
    name: 'Moss Academy',
    badge: 'Admissions Open',
    badgeColor: 'amber',
    icon: '🎓',
    subtitle: 'Forward Deployed Engineering (FDE) & Agentic AI Academy',
    url: 'https://www.moss-tech.com/',
    headline: 'Bridging the Gap Between Conceptual Theory and Production Systems',
    description:
      'Headquartered in Bangalore and Nagpur, Moss Academy prepares AI-ready engineers through immersive, career-launching cohorts: Forward Deployed Engineering (FDE) with a Guaranteed Internship Program and hands-on Agentic AI Development.',
    highlights: [
      {
        title: 'Forward Deployed Engineering (FDE)',
        desc: '6-Month flagship program with Guaranteed Internship, 40 hours of structured learning, and hands-on problem solving.',
      },
      {
        title: 'Agentic AI Developer Course',
        desc: 'Build intelligent multi-agent swarms, automate workflows, and master real-world production problem solving.',
      },
      {
        title: 'Special Admission Offer: ₹39,999',
        desc: 'Limited-time offer (Original ₹49,999 · 20% OFF) with expert mentorship and career placement assistance.',
      },
      {
        title: 'Direct Industry Mentorship',
        desc: 'Live labs, code reviews, and project supervision led by senior solutions architects.',
      },
    ],
    specs: [
      { label: 'Flagship Programs', value: 'Forward Deployed Engineering (FDE) & Agentic AI' },
      { label: 'Special Offer Fee', value: '₹39,999 (Original ₹49,999 · 20% OFF)' },
      { label: 'Internship Guarantee', value: 'Guaranteed Industry Internship on FDE' },
      { label: 'Admissions Contact', value: 'hr@moss-tech.com · 8867475219' },
    ],
    featuresList: [
      'Forward Deployed Engineering (FDE): 6-Month with Guaranteed Internship',
      'Agentic AI Developer Course: Learn, Build & Automate (Starts Nov 30)',
      'Special Admission Offer: ₹39,999 (20% OFF regular ₹49,999)',
      'Hands-on cutting-edge tech, personal mentorship & career support',
      'Campus hubs in Bangalore, Nagpur and global online cohorts',
    ],
    accent: '#f59e0b',
  },
]

const CLINICAL_SCENARIOS = [
  {
    id: 'note-structuring',
    title: 'Hospital EHR Note Structuring & ICD-10 Coding',
    physicianNote:
      '"62yo male admitted to cardiology ward with persistent polyuria, fasting glucose 188 mg/dL, HbA1c 8.9%. BP 142/90. Started on Metformin 500mg BID and Lisinopril 10mg QD. Telemetry stable."',
    extractedData: [
      { code: 'ICD-10: E11.65', label: 'Type 2 Diabetes Mellitus with Hyperglycemia', confidence: '99.9%' },
      { code: 'ICD-10: I10', label: 'Essential (Primary) Hypertension', confidence: '99.7%' },
      { code: 'RxNorm: 860975', label: 'Metformin Hydrochloride 500 MG Oral Tablet', confidence: '100.0%' },
      { code: 'RxNorm: 314076', label: 'Lisinopril 10 MG Oral Tablet', confidence: '100.0%' },
    ],
    fhirResource: 'Observation & MedicationRequest (FHIR v4.0.1)',
  },
  {
    id: 'drug-interaction',
    title: 'Hospital Pharmacy Allergy & Contraindication Guard',
    physicianNote:
      '"Emergency Ward: Patient has documented severe Penicillin allergy (anaphylaxis). Presenting with acute bacterial sinusitis; proposed prescription: Amoxicillin-Clavulanate."',
    extractedData: [
      { code: 'CRITICAL ALERT', label: 'Contraindication: Beta-lactam anaphylaxis history detected in hospital allergy registry', confidence: '100.0%' },
      { code: 'Alternative Suggested', label: 'Azithromycin 500mg or Doxycycline 100mg suggested per clinical guidelines', confidence: '99.4%' },
      { code: 'SNOMED: 294532003', label: 'Allergy to Penicillin verified', confidence: '99.9%' },
    ],
    fhirResource: 'DetectedIssue & AllergyIntolerance (FHIR v4.0.1)',
  },
  {
    id: 'lab-alert',
    title: 'ICU Telemetry Sentinel & Biomarker Alert',
    physicianNote:
      '"Inpatient ICU telemetry: Serum potassium rose from 4.8 to 6.3 mEq/L within 6 hours. Serum creatinine 2.4 mg/dL. ECG demonstrates peaked T-waves."',
    extractedData: [
      { code: 'URGENT ALERT: Hyperkalemia', label: 'Critical Potassium 6.3 mEq/L with characteristic ECG morphological changes', confidence: '99.9%' },
      { code: 'Acute Kidney Injury', label: 'Creatinine elevation represents Stage 2 AKI per KDIGO criteria', confidence: '99.6%' },
      { code: 'Suggested Action', label: 'Immediate Calcium Gluconate IV & Insulin-Glucose protocol alert to attending staff', confidence: '99.5%' },
    ],
    fhirResource: 'DiagnosticReport & Flag (FHIR v4.0.1)',
  },
]

const CLIENT_AGENT_PRESETS = [
  {
    id: 'finance-agent',
    title: 'Custom Financial Reconciliation Agent',
    description: 'Autonomous multi-agent swarm tailored for client accounting: matches 50k transactions across Stripe, NetSuite & ERP.',
    agents: [
      { role: 'Orchestrator Agent', task: 'Decomposes ledger tasks into parallel DAG graph', status: 'Completed', latency: '14ms' },
      { role: 'Vector Search Agent', task: 'Retrieves client-specific tax & ledger rules', status: 'Completed', latency: '22ms' },
      { role: 'Transactional Tool Agent', task: 'Executes automated voucher creation via private API', status: 'Completed', latency: '38ms' },
      { role: 'Compliance Guardrail', task: 'Verifies SOX & SOC2 audit compliance', status: 'Verified', latency: '11ms' },
    ],
  },
  {
    id: 'devops-sentinel',
    title: 'Custom Infrastructure Self-Healing Agent',
    description: 'Client DevOps agent that intercepts Kubernetes pod crash loops, checks logs, and synthesizes auto-rollback PRs.',
    agents: [
      { role: 'Log Sentinel Agent', task: 'Analyzes stderr stream from crashed microservices', status: 'Completed', latency: '18ms' },
      { role: 'Root Cause Analyzer', task: 'Pinpoints OOMKilled condition in Redis cache node', status: 'Completed', latency: '31ms' },
      { role: 'Kubernetes Tool Agent', task: 'Hot-patches pod memory quota and restarts replica', status: 'Completed', latency: '29ms' },
      { role: 'Incident Reporter', task: 'Posts post-mortem summary to client PagerDuty/Slack', status: 'Verified', latency: '15ms' },
    ],
  },
]

const ACADEMY_COURSES = [
  {
    category: 'Flagship Programs',
    title: 'Forward Deployed Engineering (FDE)',
    subtitle: 'Build the Future. Become an AI-Ready Engineer!',
    badge: 'Guaranteed Internship Program',
    level: 'Industry Ready',
    duration: '6-Month Program · 40 Hrs Structured',
    offerFee: '₹39,999',
    originalFee: '₹49,999',
    discount: '20% OFF',
    status: 'Admissions Open',
    phone: '8867475219',
    highlights: [
      'Guaranteed Internship Program — Gain real-world experience & kickstart your career',
      'Hands-on training with cutting-edge technologies & practical project problem solving',
      'Expert trainers, personal mentorship & course completion certificate',
      'AI-focused technical skills for enterprise production systems',
    ],
    tags: ['FDE', 'Guaranteed Internship', 'AI Engineering', '6 Months'],
    featured: true,
  },
  {
    category: 'Flagship Programs',
    title: 'Agentic AI Developer Course',
    subtitle: 'Step into the Next Era... with AI! (Learn • Build • Automate)',
    badge: 'Starts 30th Nov · Admissions Open',
    level: 'Learn · Build · Automate',
    duration: 'Cohort Starts 30th Nov',
    offerFee: '₹39,999',
    originalFee: '₹49,999',
    discount: 'Diwali Special Offer',
    status: 'Admissions Open',
    phone: '8867475219',
    highlights: [
      'Build Intelligent AI Agents & multi-agent swarms with DSPy & LangGraph',
      'Automate complex enterprise workflows & solve real-world problems',
      'Hands-on projects with expert mentorship & comprehensive career support',
      'Production labs with zero-data-retention & enterprise tool calling',
    ],
    tags: ['Agentic AI', 'Multi-Agent', 'Workflow Automation', 'CrewAI'],
    featured: true,
  },
  {
    category: 'Cloud & DevOps',
    title: 'AWS Cloud Architect & Terraform Masterclass',
    subtitle: 'Enterprise Infrastructure as Code & Multi-Region Cloud',
    badge: 'Popular',
    level: 'Intermediate',
    duration: '10 Weeks',
    offerFee: '₹29,999',
    originalFee: '₹39,999',
    discount: '25% OFF',
    status: 'Open',
    phone: '8867475219',
    highlights: ['Multi-region AWS architectures', 'Terraform production modules', 'Docker & CI/CD automation'],
    tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
    featured: false,
  },
  {
    category: 'Big Data',
    title: 'Databricks, Lakehouse & PySpark at Scale',
    subtitle: 'Petabyte-Scale Distributed Data Engineering',
    badge: 'Enterprise',
    level: 'Advanced',
    duration: '12 Weeks',
    offerFee: '₹34,999',
    originalFee: '₹44,999',
    discount: '22% OFF',
    status: 'Open',
    phone: '8867475219',
    highlights: ['Delta Lake storage optimization', 'PySpark stream processing', 'Apache Airflow DAG pipelines'],
    tags: ['Databricks', 'PySpark', 'Delta Lake', 'Airflow'],
    featured: false,
  },
  {
    category: 'Cloud & DevOps',
    title: 'Kubernetes Production Orchestration',
    subtitle: 'Container Orchestration, Service Meshes & High Availability',
    badge: 'Hands-On',
    level: 'Intermediate',
    duration: '6 Weeks',
    offerFee: '₹24,999',
    originalFee: '₹32,999',
    discount: '25% OFF',
    status: 'Open',
    phone: '8867475219',
    highlights: ['Production K8s cluster administration', 'Helm chart packaging', 'Prometheus & Grafana observability'],
    tags: ['Kubernetes', 'Helm', 'Prometheus', 'ServiceMesh'],
    featured: false,
  },
  {
    category: 'Big Data',
    title: 'Snowflake Modern Data Warehouse Mastery',
    subtitle: 'Data Sharing, Secure Views & Zero-Copy Cloning',
    badge: 'Fast Track',
    level: 'All Levels',
    duration: '6 Weeks',
    offerFee: '₹24,999',
    originalFee: '₹32,999',
    discount: '25% OFF',
    status: 'Open',
    phone: '8867475219',
    highlights: ['Snowflake warehouse sizing & dbt pipelines', 'Zero-copy cloning & data governance', 'Cost optimization'],
    tags: ['Snowflake', 'dbt', 'SQL', 'Data Mesh'],
    featured: false,
  },
]

export default function InteractiveDemoPage({ initialProductIndex = 0, onBack }: InteractiveDemoPageProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProductIndex)
  const [mappingConfidence, setMappingConfidence] = useState(99.4)
  const [isSimulating, setIsSimulating] = useState(false)
  
  // Med AI state
  const [selectedClinicalScenario, setSelectedClinicalScenario] = useState(0)
  const [isClinicalRunning, setIsClinicalRunning] = useState(false)
  const [clinicalConfidence, setClinicalConfidence] = useState(99.8)
  const [medAITab, setMedAITab] = useState<'portals' | 'ai-engine'>('portals')
  const [activePortalModal, setActivePortalModal] = useState<'patient' | 'doctor' | 'hospital' | 'pharmacy' | 'laboratory' | null>(null)

  // Custom Agent state
  const [selectedAgentPreset, setSelectedAgentPreset] = useState(0)
  const [isAgentRunning, setIsAgentRunning] = useState(false)
  const [agentProgress, setAgentProgress] = useState(100)

  // Academy state
  const [activeCourseFilter, setActiveCourseFilter] = useState('All')

  useEffect(() => {
    setSelectedProduct(initialProductIndex)
  }, [initialProductIndex])

  const currentProduct = PRODUCTS_DATA[selectedProduct] || PRODUCTS_DATA[0]

  const mappedFields = [
    { source: 'customer_id (BIGINT)', target: 'user_uuid (UUID)', match: '99.8%', status: 'CONFIRMED' },
    { source: 'created_at (TIMESTAMP)', target: 'signup_epoch_utc (DATETIME)', match: '100.0%', status: 'CONFIRMED' },
    { source: 'billing_address_json (JSON)', target: 'shipping_address_struct (OBJECT)', match: '98.5%', status: 'CONFIRMED' },
    { source: 'account_balance (DECIMAL)', target: 'wallet_credits (NUMERIC)', match: '99.2%', status: 'CONFIRMED' },
  ]

  const handleSimulateMapping = () => {
    setIsSimulating(true)
    setTimeout(() => {
      setMappingConfidence(Number((99.2 + Math.random() * 0.7).toFixed(1)))
      setIsSimulating(false)
    }, 800)
  }

  const handleRunClinicalInference = () => {
    setIsClinicalRunning(true)
    setTimeout(() => {
      setClinicalConfidence(Number((99.6 + Math.random() * 0.3).toFixed(1)))
      setIsClinicalRunning(false)
    }, 850)
  }

  const handleRunAgentSwarm = () => {
    setIsAgentRunning(true)
    setAgentProgress(20)
    setTimeout(() => setAgentProgress(60), 400)
    setTimeout(() => {
      setAgentProgress(100)
      setIsAgentRunning(false)
    }, 950)
  }

  const filteredCourses =
    activeCourseFilter === 'All'
      ? ACADEMY_COURSES
      : ACADEMY_COURSES.filter((c) => c.category === activeCourseFilter)

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] pt-24 pb-20 selection:bg-sky-100 selection:text-[#1b95cd]">
      {/* Top Breadcrumbs & Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1b95cd] hover:border-[#1b95cd] font-['Poppins'] text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>← Back to Moss Nexus Solutions</span>
          </button>

          {/* 4 Solution Switcher Pills */}
          <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl flex-wrap">
            {PRODUCTS_DATA.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(idx)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedProduct === idx
                    ? 'bg-white text-[#1b95cd] shadow-xs'
                    : 'text-slate-600 hover:text-[#0d2335]'
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dedicated Product Page Header */}
        <div className="text-left max-w-4xl mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-12 h-12 rounded-2xl bg-blue-100/80 text-[#1b95cd] flex items-center justify-center font-bold text-2xl shadow-2xs">
              {currentProduct.icon}
            </span>
            <div>
              <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs uppercase tracking-wider">
                Moss Nexus Core Pillar
              </p>
              <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#0d2335] tracking-tight">
                {currentProduct.name}
              </h1>
            </div>
          </div>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed max-w-3xl">
            {currentProduct.subtitle}. Explore live architecture specifications, test the interactive platform sandbox, and access the application below.
          </p>
        </div>

        {/* Main Enterprise Platform Interactive Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column: Comprehensive Application Information */}
            <div className="lg:col-span-6 flex flex-col text-left">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1b95cd] border border-blue-200 text-xs font-['Poppins'] font-semibold uppercase tracking-wider">
                  {currentProduct.badge}
                </span>
                <span className="text-xs text-slate-400 font-['Inter']">
                  Moss Nexus Platform Core
                </span>
              </div>

              <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mb-4">
                {currentProduct.headline}
              </h2>

              <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {currentProduct.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <h4 className="font-['Poppins'] font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                  Technical Architecture & Specs
                </h4>
                <div className="space-y-2 text-xs font-['Inter']">
                  {currentProduct.specs.map((s, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200/50 last:border-0 last:pb-0">
                      <span className="font-medium text-slate-500">{s.label}:</span>
                      <span className="font-semibold text-slate-800 text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {currentProduct.highlights.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b95cd]" />
                      <h4 className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed pl-3.5">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary Direct Product Access Button */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                {currentProduct.url ? (
                  <a
                    href={currentProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-blue inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md"
                  >
                    <span>Launch & Access {currentProduct.name}</span>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      onBack()
                      setTimeout(() => {
                        const el = document.getElementById('contact')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="btn-primary-blue inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md"
                  >
                    <span>Request Deployment or Custom Agent Build</span>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}

                <button
                  onClick={onBack}
                  className="btn-secondary-outline px-5 py-3.5 rounded-xl font-['Poppins'] font-medium text-xs text-slate-700 cursor-pointer"
                >
                  Return to Portal
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive Simulation Workspace */}
            <div className="lg:col-span-6">
              {/* Product 0: Moss Migration Simulator */}
              {selectedProduct === 0 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b95cd]" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Live Schema Resolution Simulator
                      </span>
                    </div>
                    <button
                      onClick={handleSimulateMapping}
                      disabled={isSimulating}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1b95cd] text-white hover:bg-[#1579b0] font-['Poppins'] text-xs font-medium transition-all cursor-pointer shadow-xs"
                    >
                      {isSimulating ? 'Analyzing...' : '⚡ Re-Run Neural Match'}
                    </button>
                  </div>

                  <div className="space-y-2.5 mb-5 font-['JetBrains_Mono'] text-xs">
                    {mappedFields.map((field, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2 shadow-xs"
                      >
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-[10px]">Source Table</span>
                          <span className="text-[#0d2335] font-medium">{field.source}</span>
                        </div>

                        <div className="flex flex-col items-center px-2">
                          <span className="text-[10px] text-[#1b95cd] font-bold">{field.match}</span>
                          <svg className="w-5 h-4 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>

                        <div className="flex flex-col text-right">
                          <span className="text-slate-400 text-[10px]">Destination (Snowflake)</span>
                          <span className="text-emerald-700 font-medium">{field.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between text-xs font-['Poppins'] mb-5">
                    <span className="text-slate-600 font-medium">Confidence Score:</span>
                    <span className="text-[#1b95cd] font-bold">{mappingConfidence}% Perfect Semantic Match</span>
                  </div>

                  <a
                    href="https://www.moss-ai-mapper.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl bg-white border border-[#1b95cd]/40 text-[#1b95cd] hover:bg-[#1b95cd] hover:text-white text-xs font-['Poppins'] font-semibold transition-all shadow-xs"
                  >
                    Open Full Production Moss Migration Studio ↗
                  </a>
                </div>
              )}

              {/* Product 1: Moss Med AI Hospital Ecosystem Simulator */}
              {selectedProduct === 1 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left">
                  {/* Top Bar with Mode Switcher */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Moss Med AI Hospital Ecosystem
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setMedAITab('portals')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-['Poppins'] font-semibold transition-all cursor-pointer ${
                          medAITab === 'portals'
                            ? 'bg-[#1b95cd] text-white shadow-2xs'
                            : 'text-slate-600 hover:text-[#0d2335]'
                        }`}
                      >
                        🏥 5-Portal Suite
                      </button>
                      <button
                        type="button"
                        onClick={() => setMedAITab('ai-engine')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-['Poppins'] font-semibold transition-all cursor-pointer ${
                          medAITab === 'ai-engine'
                            ? 'bg-[#1b95cd] text-white shadow-2xs'
                            : 'text-slate-600 hover:text-[#0d2335]'
                        }`}
                      >
                        ⚡ Clinical AI Engine
                      </button>
                    </div>
                  </div>

                  {/* Mode 1: 5 Unified Portals Suite (Matching uploaded design!) */}
                  {medAITab === 'portals' && (
                    <div className="space-y-3">
                      <div className="text-center max-w-md mx-auto mb-1">
                        <span className="text-[10px] font-['Poppins'] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          5 Unified Hospital Portals
                        </span>
                        <p className="text-[11px] text-slate-500 font-['Inter'] mt-1">
                          Click any portal below to explore its live interactive interface.
                        </p>
                      </div>

                      {/* Top Row: 3 Active Portals */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* Patient Portal */}
                        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border-2 border-emerald-400 shadow-xs flex flex-col items-center text-center justify-between hover:shadow-md transition-all">
                          <div className="flex flex-col items-center">
                            <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2.5">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h4 className="font-['Poppins'] font-bold text-xs sm:text-sm text-[#0d2335] mb-1">
                              Patient Portal
                            </h4>
                            <p className="font-['Inter'] text-[10.5px] text-slate-500 leading-relaxed mb-3">
                              Book appointments, view test results, and manage your health records with ease
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActivePortalModal('patient')}
                            className="w-full py-2 px-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-['Poppins'] font-semibold text-[11px] transition-colors flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                          >
                            <span>Login / Sign Up</span>
                            <span>→</span>
                          </button>
                        </div>

                        {/* Doctor Portal */}
                        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border-2 border-blue-500 shadow-xs flex flex-col items-center text-center justify-between hover:shadow-md transition-all">
                          <div className="flex flex-col items-center">
                            <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                              <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                                <circle cx="20" cy="10" r="2" />
                              </svg>
                            </div>
                            <h4 className="font-['Poppins'] font-bold text-xs sm:text-sm text-[#0d2335] mb-1">
                              Doctor Portal
                            </h4>
                            <p className="font-['Inter'] text-[10.5px] text-slate-500 leading-relaxed mb-3">
                              Manage appointments, prescribe treatments, and access patient records seamlessly
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActivePortalModal('doctor')}
                            className="w-full py-2 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-['Poppins'] font-semibold text-[11px] transition-colors flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                          >
                            <span>Login / Sign Up</span>
                            <span>→</span>
                          </button>
                        </div>

                        {/* Hospital Portal */}
                        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border-2 border-purple-500 shadow-xs flex flex-col items-center text-center justify-between hover:shadow-md transition-all">
                          <div className="flex flex-col items-center">
                            <div className="w-11 h-11 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <h4 className="font-['Poppins'] font-bold text-xs sm:text-sm text-[#0d2335] mb-1">
                              Hospital Portal
                            </h4>
                            <p className="font-['Inter'] text-[10.5px] text-slate-500 leading-relaxed mb-3">
                              Oversee operations, manage staff schedules, and monitor hospital performance metrics
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActivePortalModal('hospital')}
                            className="w-full py-2 px-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-['Poppins'] font-semibold text-[11px] transition-colors flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                          >
                            <span>Login / Sign Up</span>
                            <span>→</span>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Row: 2 Portals Centered */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto pt-1">
                        {/* Pharmacy Portal */}
                        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-2xs flex flex-col items-center text-center justify-between opacity-85 hover:opacity-100 transition-opacity">
                          <div className="flex flex-col items-center">
                            <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-2.5">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            </div>
                            <h4 className="font-['Poppins'] font-bold text-xs sm:text-sm text-slate-700 mb-1">
                              Pharmacy Portal
                            </h4>
                            <p className="font-['Inter'] text-[10.5px] text-slate-400 leading-relaxed mb-3">
                              Manage prescriptions, track inventory, and process medication orders efficiently
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActivePortalModal('pharmacy')}
                            className="w-full py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 font-['Poppins'] font-medium text-[11px] transition-colors cursor-pointer"
                          >
                            Coming Soon
                          </button>
                        </div>

                        {/* Laboratory Portal */}
                        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-2xs flex flex-col items-center text-center justify-between opacity-85 hover:opacity-100 transition-opacity">
                          <div className="flex flex-col items-center">
                            <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-2.5">
                              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            </div>
                            <h4 className="font-['Poppins'] font-bold text-xs sm:text-sm text-slate-700 mb-1">
                              Laboratory Portal
                            </h4>
                            <p className="font-['Inter'] text-[10.5px] text-slate-400 leading-relaxed mb-3">
                              Upload test results, manage lab reports, and coordinate with healthcare providers
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActivePortalModal('laboratory')}
                            className="w-full py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 font-['Poppins'] font-medium text-[11px] transition-colors cursor-pointer"
                          >
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mode 2: Clinical EHR & Note AI Engine */}
                  {medAITab === 'ai-engine' && (
                    <div>
                      {/* Scenario Presets Selector */}
                      <div className="mb-4">
                        <span className="block text-[11px] font-['Poppins'] font-semibold text-slate-500 uppercase tracking-wide mb-2">
                          Select Hospital Workflow Scenario:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {CLINICAL_SCENARIOS.map((scen, idx) => (
                            <button
                              key={scen.id}
                              onClick={() => setSelectedClinicalScenario(idx)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-all cursor-pointer ${
                                selectedClinicalScenario === idx
                                  ? 'bg-[#1b95cd] text-white shadow-xs font-semibold'
                                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {scen.title}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Physician Raw Note Input Box */}
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 mb-4">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-['Poppins'] text-[11px] font-bold text-[#0d2335] uppercase tracking-wide">
                            EHR Physician Note / Telemetry
                          </span>
                          <span className="text-[10px] text-slate-400 font-['JetBrains_Mono']">
                            HL7 / FHIR Inbound
                          </span>
                        </div>
                        <p className="font-['Inter'] text-xs text-slate-700 italic leading-relaxed">
                          {CLINICAL_SCENARIOS[selectedClinicalScenario].physicianNote}
                        </p>
                      </div>

                      {/* Extracted Clinical Insights / ICD-10 Cards */}
                      <div className="space-y-2 mb-4">
                        {CLINICAL_SCENARIOS[selectedClinicalScenario].extractedData.map((item, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                              <div className="truncate">
                                <span className="font-['Poppins'] font-bold text-xs text-[#1b95cd] block">
                                  {item.code}
                                </span>
                                <span className="font-['Inter'] text-xs text-slate-700 truncate block">
                                  {item.label}
                                </span>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
                                {item.confidence}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* FHIR Target Schema */}
                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs font-['Poppins'] mb-4">
                        <span className="text-slate-600 font-medium">Mapped FHIR Resource:</span>
                        <span className="text-[#1b95cd] font-bold font-['JetBrains_Mono'] text-[11px]">
                          {CLINICAL_SCENARIOS[selectedClinicalScenario].fhirResource}
                        </span>
                      </div>

                      {/* Trigger Button */}
                      <button
                        onClick={handleRunClinicalInference}
                        disabled={isClinicalRunning}
                        className="w-full py-3 rounded-xl bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{isClinicalRunning ? 'Analyzing Hospital Records...' : '⚡ Re-Run Hospital AI Analysis'}</span>
                        <span className="text-[11px] opacity-90">({clinicalConfidence}% Confidence)</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Product 2: Moss Tech Custom Solutions & Agents Simulator */}
              {selectedProduct === 2 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-purple-50/50 border border-purple-200/80 shadow-sm text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-200/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Moss Tech Custom Solution Sandbox
                      </span>
                    </div>
                    <span className="text-[10px] font-['Poppins'] text-purple-700 bg-purple-100/70 border border-purple-200 px-2.5 py-0.5 rounded-full font-bold">
                      Build Your Custom Solution
                    </span>
                  </div>

                  {/* Workflow Preset Switcher */}
                  <div className="mb-4">
                    <span className="block text-[11px] font-['Poppins'] font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Sample Client Agent Workflow:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {CLIENT_AGENT_PRESETS.map((p, idx) => (
                        <button
                          key={p.id}
                          onClick={() => setSelectedAgentPreset(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-all cursor-pointer ${
                            selectedAgentPreset === idx
                              ? 'bg-purple-600 text-white shadow-xs font-semibold'
                              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {p.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="font-['Inter'] text-xs text-slate-600 mb-4 p-3 rounded-xl bg-white border border-purple-100">
                    {CLIENT_AGENT_PRESETS[selectedAgentPreset].description}
                  </p>

                  {/* Parallel Swarm Node Statuses */}
                  <div className="space-y-2 mb-4">
                    {CLIENT_AGENT_PRESETS[selectedAgentPreset].agents.map((agent, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                          <div className="truncate">
                            <span className="font-['Poppins'] font-semibold text-xs text-[#0d2335] block">
                              {agent.role}
                            </span>
                            <span className="font-['Inter'] text-[11px] text-slate-500 truncate block">
                              {agent.task}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-100 block mb-0.5">
                            {agent.status}
                          </span>
                          <span className="text-[10px] text-slate-400 font-['JetBrains_Mono']">
                            {agent.latency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {isAgentRunning && (
                    <div className="mb-4">
                      <div className="flex justify-between text-[11px] font-['Poppins'] text-slate-500 mb-1">
                        <span>Running Custom Client Agent Swarm...</span>
                        <span>{agentProgress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-600 transition-all duration-300"
                          style={{ width: `${agentProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleRunAgentSwarm}
                    disabled={isAgentRunning}
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-['Poppins'] font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isAgentRunning ? 'Agents Executing...' : '⚡ Test Custom Agent Swarm Execution'}</span>
                  </button>
                </div>
              )}

              {/* Product 3: Moss Academy Catalog Simulator */}
              {selectedProduct === 3 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b95cd]" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Curriculum Catalog & Labs
                      </span>
                    </div>
                    <span className="text-[11px] font-['Inter'] text-slate-500">
                      Bangalore · Nagpur · Online
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['All', 'Flagship Programs', 'Agentic AI', 'Cloud & DevOps', 'Big Data'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCourseFilter(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-['Poppins'] font-medium transition-all cursor-pointer ${
                          activeCourseFilter === cat
                            ? 'btn-primary-blue text-white font-semibold shadow-xs'
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
                    {filteredCourses.map((c, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-2xl transition-all shadow-xs flex flex-col gap-2 ${
                          c.featured
                            ? 'bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 border-2 border-amber-400/90 shadow-sm'
                            : 'bg-white border border-slate-200'
                        }`}
                      >
                        {/* Header: Title & Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5">
                            {c.featured && (
                              <span className="text-xs">🔥</span>
                            )}
                            <h4 className="font-['Poppins'] font-bold text-xs sm:text-sm text-[#0d2335]">
                              {c.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {c.originalFee && (
                              <del className="text-[11px] text-slate-400 font-medium">
                                {c.originalFee}
                              </del>
                            )}
                            <span className="font-['Poppins'] font-bold text-xs sm:text-sm text-red-600">
                              {c.offerFee}
                            </span>
                            {c.discount && (
                              <span className="text-[9px] font-['Poppins'] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-700">
                                {c.discount}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Subtitle */}
                        {c.subtitle && (
                          <p className="text-[11px] text-slate-600 font-['Inter'] italic">
                            {c.subtitle}
                          </p>
                        )}

                        {/* Badge Indicator */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full border ${
                            c.featured
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-blue-50 text-[#1b95cd] border-blue-200'
                          }`}>
                            {c.badge}
                          </span>
                          <span className="text-[10px] font-['Poppins'] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                            ⏱️ {c.duration}
                          </span>
                        </div>

                        {/* Highlights (if featured) */}
                        {c.highlights && c.highlights.length > 0 && (
                          <div className="space-y-1 my-1 pt-1 border-t border-slate-100">
                            {c.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-1.5 text-[10.5px] text-slate-700 font-['Inter']">
                                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                                <span className="leading-tight">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Footer */}
                        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2 text-[11px] font-['Poppins'] text-slate-500">
                            <span>📞 Call / WhatsApp:</span>
                            <a href={`tel:${c.phone || '8867475219'}`} className="font-bold text-[#0d2335] hover:text-[#1b95cd] transition-colors">
                              {c.phone || '8867475219'}
                            </a>
                          </div>

                          <a
                            href={`mailto:hr@moss-tech.com?subject=Inquiry for ${encodeURIComponent(c.title)}&body=Hi Moss Academy team, I am interested in enrolling in ${encodeURIComponent(c.title)}. Please share syllabus and admission details.`}
                            className={`px-3 py-1.5 rounded-xl font-['Poppins'] font-semibold text-[11px] transition-all shadow-2xs flex items-center gap-1 ${
                              c.featured
                                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                                : 'bg-[#1b95cd] hover:bg-[#1579b0] text-white'
                            }`}
                          >
                            <span>Enroll / Register</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://www.moss-tech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center py-3 rounded-xl bg-white border border-[#1b95cd]/40 text-[#1b95cd] hover:bg-[#1b95cd] hover:text-white text-xs font-['Poppins'] font-semibold transition-all shadow-xs"
                  >
                    Enroll & View All 50+ Courses on Moss Academy →
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          PORTAL INTERACTIVE SIMULATION MODAL
          ───────────────────────────────────────────────────────────── */}
      {activePortalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 text-left relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePortalModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Content: Patient Portal */}
            {activePortalModal === 'patient' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-['Poppins'] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Live Simulation
                    </span>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                      Patient Portal Dashboard
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-700">Patient Profile:</span>
                    <span className="font-mono text-slate-500">Rajesh Verma (ID: #PT-8829)</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>• <strong>Upcoming Appointment:</strong> Cardiology Follow-up with Dr. Priya Sharma (Tomorrow, 10:30 AM)</p>
                    <p>• <strong>Recent Lab Results:</strong> Lipid Panel (Normal) · Fasting Blood Sugar: 94 mg/dL</p>
                    <p>• <strong>Active Prescriptions:</strong> Metoprolol 25mg (1 Refill Available)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => alert("Appointment booked successfully in Patient Portal simulator!")}
                    className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-['Poppins'] font-semibold text-xs transition-colors text-center cursor-pointer shadow-xs"
                  >
                    📅 Book Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Downloading FHIR v4 Health Summary PDF...")}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-['Poppins'] font-semibold text-xs transition-colors text-center cursor-pointer"
                  >
                    📄 View Health Records
                  </button>
                </div>

                <p className="text-[11px] font-['Inter'] text-slate-400 text-center">
                  Protected under HIPAA Zero Data Retention standards.
                </p>
              </div>
            )}

            {/* Modal Content: Doctor Portal */}
            {activePortalModal === 'doctor' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-['Poppins'] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Live Simulation
                    </span>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                      Doctor Portal & EHR Charting
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-700">Attending Clinician:</span>
                    <span className="font-semibold text-blue-600">Dr. Priya Sharma, MD (Cardiology)</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>• <strong>Ward Inpatients:</strong> 18 Active Patients · 2 Telemetry Notifications</p>
                    <p>• <strong>Clinical Sentinel:</strong> Real-time drug-drug contraindication detection active</p>
                    <p>• <strong>EHR Interoperability:</strong> Synchronized with Epic / Cerner via FHIR R4</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActivePortalModal(null)
                      setMedAITab('ai-engine')
                    }}
                    className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-['Poppins'] font-semibold text-xs transition-colors text-center cursor-pointer shadow-xs"
                  >
                    ⚡ Test Clinical Note AI
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("E-Prescription transmitted to Hospital Pharmacy with 0 contraindications.")}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-['Poppins'] font-semibold text-xs transition-colors text-center cursor-pointer"
                  >
                    💊 Prescribe Treatment
                  </button>
                </div>

                <p className="text-[11px] font-['Inter'] text-slate-400 text-center">
                  Integrated with sub-100ms FHIR terminology encoders.
                </p>
              </div>
            )}

            {/* Modal Content: Hospital Portal */}
            {activePortalModal === 'hospital' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-['Poppins'] font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                      Live Simulation
                    </span>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                      Hospital Operations & Admin Portal
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-700">Facility:</span>
                    <span className="font-semibold text-purple-600">MetroHealth Apex Center</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>• <strong>Bed Occupancy:</strong> 412 / 480 Beds Occupied (86% Capacity)</p>
                    <p>• <strong>Staff On Shift:</strong> 124 Doctors, 310 Registered Nurses, 48 Techs</p>
                    <p>• <strong>Emergency Department:</strong> Average triage wait time: 14 mins (Green)</p>
                    <p>• <strong>System Health:</strong> HL7 Interfaces 99.99% Up · Zero Retention Verified</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => alert("Bed allocation re-balanced across ICU and Step-Down wards.")}
                    className="py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-['Poppins'] font-semibold text-xs transition-colors text-center cursor-pointer shadow-xs"
                  >
                    🏥 Manage Bed Allocation
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Staff roster updated and published to shift leads.")}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-['Poppins'] font-semibold text-xs transition-colors text-center cursor-pointer"
                  >
                    👥 Staff Roster
                  </button>
                </div>

                <p className="text-[11px] font-['Inter'] text-slate-400 text-center">
                  Executive governance and capacity telemetry for healthcare leaders.
                </p>
              </div>
            )}

            {/* Modal Content: Pharmacy Portal */}
            {activePortalModal === 'pharmacy' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 border border-slate-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-['Poppins'] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                      Release Roadmap
                    </span>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                      Pharmacy Portal (Coming Soon)
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-5 leading-relaxed">
                  <p className="mb-2">
                    The <strong>Moss Med AI Pharmacy Portal</strong> is currently undergoing pilot testing with our hospital network partners.
                  </p>
                  <p className="font-semibold text-slate-800 mb-1">Key Planned Capabilities:</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>Automated e-prescription intake from Doctor Portal</li>
                    <li>Real-time medication inventory and batch tracking</li>
                    <li>Automated dispensing verifications & refill alerts</li>
                  </ul>
                  <div className="mt-3 text-[11px] font-semibold text-[#1b95cd]">
                    Target General Availability: Q3 2026
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActivePortalModal(null)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-['Poppins'] font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

            {/* Modal Content: Laboratory Portal */}
            {activePortalModal === 'laboratory' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 border border-slate-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-['Poppins'] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                      Release Roadmap
                    </span>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                      Laboratory Portal (Coming Soon)
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-5 leading-relaxed">
                  <p className="mb-2">
                    The <strong>Moss Med AI Laboratory Portal</strong> is actively being integrated with clinical pathology instruments and DICOM imaging servers.
                  </p>
                  <p className="font-semibold text-slate-800 mb-1">Key Planned Capabilities:</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>Automated pathology result upload and HL7 ORU ingestion</li>
                    <li>Direct result broadcast to Doctor and Patient portals</li>
                    <li>Critical biomarker panic alarms dispatched to attending ICU staff</li>
                  </ul>
                  <div className="mt-3 text-[11px] font-semibold text-[#1b95cd]">
                    Target General Availability: Q3 2026
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActivePortalModal(null)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-['Poppins'] font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
