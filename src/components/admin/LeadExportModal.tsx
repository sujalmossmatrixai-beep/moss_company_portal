import React, { useState, useEffect } from 'react'
import {
  getAllLeads,
  LeadSubmission,
  ProductCategory,
  exportMasterExcelWorkbook,
  exportSingleCategoryExcel,
  getGoogleSheetsWebhookUrl,
  setGoogleSheetsWebhookUrl,
} from '../../utils/leadStorage'

interface LeadExportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadExportModal({ isOpen, onClose }: LeadExportModalProps) {
  const [leads, setLeads] = useState<LeadSubmission[]>([])
  const [selectedTab, setSelectedTab] = useState<ProductCategory | 'all' | 'webhook'>('all')
  const [webhookUrl, setWebhookInput] = useState('')
  const [webhookSaved, setWebhookSaved] = useState(false)

  const refreshLeads = () => {
    setLeads(getAllLeads())
  }

  useEffect(() => {
    if (isOpen) {
      refreshLeads()
      setWebhookInput(getGoogleSheetsWebhookUrl())
    }
  }, [isOpen])

  // Listen to live lead events
  useEffect(() => {
    const handler = () => refreshLeads()
    window.addEventListener('moss_lead_added', handler)
    return () => window.removeEventListener('moss_lead_added', handler)
  }, [])

  if (!isOpen) return null

  const medLeads = leads.filter((l) => l.productCategory === 'Moss Med AI')
  const mapperLeads = leads.filter((l) => l.productCategory === 'Moss AI Mapper')
  const solutionsLeads = leads.filter((l) => l.productCategory === 'Custom AI Solutions')
  const academyLeads = leads.filter((l) => l.productCategory === 'Moss Academy Inquiries')
  const enrollLeads = leads.filter((l) => l.productCategory === 'Course Enrollments')

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault()
    setGoogleSheetsWebhookUrl(webhookUrl)
    setWebhookSaved(true)
    setTimeout(() => setWebhookSaved(false), 2500)
  }

  const currentList =
    selectedTab === 'all'
      ? leads
      : selectedTab === 'Moss Med AI'
      ? medLeads
      : selectedTab === 'Moss AI Mapper'
      ? mapperLeads
      : selectedTab === 'Custom AI Solutions'
      ? solutionsLeads
      : selectedTab === 'Moss Academy Inquiries'
      ? academyLeads
      : selectedTab === 'Course Enrollments'
      ? enrollLeads
      : []

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs font-['Inter',sans-serif]">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-slate-200 bg-[#f8f9fa] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-[#1b95cd] flex items-center justify-center text-xl font-bold">
              📊
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                  Leads & Excel Export Hub
                </h3>
                <span className="text-[10px] font-['Poppins'] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-[#1b95cd]">
                  {leads.length} Total Submissions
                </span>
              </div>
              <p className="text-xs text-slate-500 font-['Inter']">
                Export inquiries across all 4 products + course enrollments into separate Excel sheets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => exportMasterExcelWorkbook()}
              className="px-4 py-2 rounded-xl bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
            >
              <span>📥 Download Master Excel (.xlsx)</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded font-mono">5 Sheets</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-500 flex items-center justify-center border border-slate-200 text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="px-6 py-3 border-b border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors shrink-0 cursor-pointer ${
              selectedTab === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Submissions ({leads.length})
          </button>
          <button
            onClick={() => setSelectedTab('Moss Med AI')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors shrink-0 cursor-pointer ${
              selectedTab === 'Moss Med AI'
                ? 'bg-[#1b95cd] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🩺 Med AI ({medLeads.length})
          </button>
          <button
            onClick={() => setSelectedTab('Moss AI Mapper')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors shrink-0 cursor-pointer ${
              selectedTab === 'Moss AI Mapper'
                ? 'bg-[#1b95cd] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ⚡ AI Mapper ({mapperLeads.length})
          </button>
          <button
            onClick={() => setSelectedTab('Custom AI Solutions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors shrink-0 cursor-pointer ${
              selectedTab === 'Custom AI Solutions'
                ? 'bg-[#1b95cd] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🤖 Custom AI ({solutionsLeads.length})
          </button>
          <button
            onClick={() => setSelectedTab('Moss Academy Inquiries')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors shrink-0 cursor-pointer ${
              selectedTab === 'Moss Academy Inquiries'
                ? 'bg-[#1b95cd] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🎓 Academy Inquiries ({academyLeads.length})
          </button>
          <button
            onClick={() => setSelectedTab('Course Enrollments')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors shrink-0 cursor-pointer ${
              selectedTab === 'Course Enrollments'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            📝 Course Enrollments ({enrollLeads.length})
          </button>
          <button
            onClick={() => setSelectedTab('webhook')}
            className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-colors shrink-0 cursor-pointer ml-auto ${
              selectedTab === 'webhook'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            🔗 Live Google Sheets Sync
          </button>
        </div>

        {/* Tab Content & Table */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          {selectedTab === 'webhook' ? (
            /* Google Sheets Sync Setup */
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📊</span>
                <h4 className="font-['Poppins'] font-bold text-base text-[#0d2335]">
                  Automate Live Google Sheets Synchronization
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                You can automatically receive every submission into your Google Drive spreadsheet in real time without downloading files manually.
              </p>

              <form onSubmit={handleSaveWebhook} className="space-y-3 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Google Apps Script Webhook URL
                  </label>
                  <input
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookInput(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:border-[#1b95cd]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer"
                >
                  {webhookSaved ? '✓ Webhook Saved!' : 'Save Google Sheets Webhook'}
                </button>
              </form>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
                <div className="text-slate-400 mb-1">// Copy this into Google Sheets (Extensions → Apps Script):</div>
                <pre>{`function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = data.productCategory || "Inquiries";
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Organization", "Specific Track", "Details"]);
  }
  
  sheet.appendRow([data.formattedDate, data.fullName, data.email, data.phone, data.organization, data.specificItem, data.message || data.offerFee]);
  return ContentService.createTextOutput("OK");
}`}</pre>
              </div>
            </div>
          ) : (
            /* Submissions Table */
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-xs text-slate-500 font-['Poppins']">
                  Showing <strong>{currentList.length}</strong> inquiries in this category:
                </span>

                {selectedTab !== 'all' && (
                  <button
                    onClick={() => exportSingleCategoryExcel(selectedTab as ProductCategory)}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[#1b95cd] text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer shadow-2xs"
                  >
                    Download Just This Sheet ({selectedTab}.xlsx) →
                  </button>
                )}
              </div>

              {currentList.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                  <p className="text-xs text-slate-500">No submissions yet in this category.</p>
                </div>
              ) : (
                <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-['Poppins']">
                        <th className="py-2.5 px-3">Date</th>
                        <th className="py-2.5 px-3">Contact</th>
                        <th className="py-2.5 px-3">Contact Info</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Item / Course</th>
                        <th className="py-2.5 px-3">Details / Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentList.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                            {item.formattedDate}
                          </td>
                          <td className="py-2.5 px-3">
                            <div className="font-semibold text-[#0d2335]">{item.fullName}</div>
                            {item.organization && (
                              <div className="text-[10px] text-slate-500">{item.organization}</div>
                            )}
                          </td>
                          <td className="py-2.5 px-3">
                            <div className="font-mono text-[11px] text-slate-700">{item.email}</div>
                            <div className="font-mono text-[11px] text-slate-500">{item.phone}</div>
                          </td>
                          <td className="py-2.5 px-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-['Poppins'] font-semibold ${
                                item.productCategory === 'Moss Med AI'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : item.productCategory === 'Moss AI Mapper'
                                  ? 'bg-sky-50 text-[#1b95cd] border border-sky-200'
                                  : item.productCategory === 'Custom AI Solutions'
                                  ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                  : item.productCategory === 'Course Enrollments'
                                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {item.productCategory}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-medium text-slate-800">
                            {item.specificItem || 'General Inquiry'}
                            {item.learningMode && (
                              <div className="text-[10px] text-slate-500">{item.learningMode}</div>
                            )}
                          </td>
                          <td className="py-2.5 px-3 max-w-xs text-slate-600 line-clamp-2">
                            {item.offerFee ? (
                              <span className="font-bold text-amber-700 font-mono">{item.offerFee}</span>
                            ) : (
                              item.message || '-'
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-[#f8f9fa] flex items-center justify-between text-xs text-slate-500">
          <span>Excel Export Engine · Multi-Sheet .XLSX Standard</span>
          <button
            onClick={() => exportMasterExcelWorkbook()}
            className="text-[#1b95cd] font-['Poppins'] font-semibold hover:underline cursor-pointer"
          >
            Download Moss_Nexus_Leads_Master.xlsx (5 Sheets) →
          </button>
        </div>
      </div>
    </div>
  )
}

