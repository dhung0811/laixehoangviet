import { NextResponse } from "next/server";

const phonePattern = /^[0-9+\-\s().]{8,20}$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Du lieu gui len khong hop le." },
      { status: 400 },
    );
  }

  const phone =
    typeof payload === "object" &&
    payload !== null &&
    "phone" in payload &&
    typeof payload.phone === "string"
      ? payload.phone.trim()
      : "";

  if (!phonePattern.test(phone)) {
    return NextResponse.json(
      { message: "So dien thoai khong hop le." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Chua cau hinh noi luu thong tin dang ky." },
      { status: 500 },
    );
  }

  let response: Response;

  try {
    response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        source: "cta",
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch {
    return NextResponse.json(
      { message: "Khong ket noi duoc noi luu thong tin dang ky." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { message: "Khong gui duoc thong tin dang ky." },
      { status: 502 },
    );
  }

  const responseText = await response.text();

  if (responseText) {
    try {
      const responseBody = JSON.parse(responseText) as { ok?: unknown };

      if (responseBody.ok === false) {
        return NextResponse.json(
          { message: "Noi luu thong tin dang ky bao loi." },
          { status: 502 },
        );
      }
    } catch {
      // Some webhook services return plain text on success.
    }
  }

  return NextResponse.json({ ok: true });
}
