const SPREADSHEET_ID = "1fbJO598fPEweErHenyfzyAvwHm4Zsh2wU3_4g2QeN1k";
const SHEET_NAME = "Sheet1";
const HEADERS = [
  "Submitted At",
  "Full Name",
  "Email",
  "Phone",
  "Organization / Background",
  "Category",
  "Course / Product",
  "Learning Mode",
  "Offer Fee",
  "Inquiry Details",
  "Source",
  "Lead ID",
];

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (!data.fullName || !data.email) {
      return jsonResponse({ ok: false, error: "Name and email are required." });
    }

    lock.waitLock(10000);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("Target sheet not found: " + SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    const leadId = String(data.id || Utilities.getUuid());
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existing = sheet
        .getRange(2, 12, lastRow - 1, 1)
        .createTextFinder(leadId)
        .matchEntireCell(true)
        .findNext();
      if (existing) return jsonResponse({ ok: true, duplicate: true, id: leadId });
    }

    const values = [
      data.formattedDate || data.timestamp || new Date().toISOString(),
      data.fullName,
      data.email,
      data.phone || "",
      data.organization || "",
      data.productCategory || "Inquiry",
      data.specificItem || "",
      data.learningMode || "",
      data.offerFee || "",
      data.message || "",
      data.source || "Website",
      leadId,
    ].map(safeCellValue);

    sheet.appendRow(values);
    return jsonResponse({ ok: true, id: leadId });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function safeCellValue(value) {
  const text = String(value == null ? "" : value);
  return /^[=+@\-]/.test(text) ? "'" + text : text;
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
