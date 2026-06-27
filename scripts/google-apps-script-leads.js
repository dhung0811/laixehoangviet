const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found`);
    }

    const nextRow = sheet.getLastRow() + 1;
    const row = [
      new Date(),
      data.phone || "",
      data.source || "",
      data.submittedAt || "",
    ];

    sheet.getRange(nextRow, 2).setNumberFormat("@");
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
    );
  }
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
