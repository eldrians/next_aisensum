import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/customer", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
