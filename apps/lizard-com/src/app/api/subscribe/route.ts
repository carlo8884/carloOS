import { NextResponse } from "next/server"
export async function POST() {
  return NextResponse.json({ error: "Email capture not yet available" }, { status: 503 })
}
