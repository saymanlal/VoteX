import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const secretKey = '6LdhZz0rAAAAAK5fzFjWGp_CU7YB4COaRWoC_Qbu';

  const formData = new URLSearchParams();
  formData.append('secret', secretKey);
  formData.append('response', token);

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString(),
  });

  const data = await verifyRes.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, errorCodes: data['error-codes'] || [] });
  }
}
