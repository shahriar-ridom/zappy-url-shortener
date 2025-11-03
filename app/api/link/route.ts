import { prisma } from "@/app/lib/prisma";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { url } = body ?? {};
  if (!url || !url.startsWith("http")) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const shortCode = nanoid(7);
    await prisma.link.create({
      data: {
        longUrl: url,
        shortCode: shortCode,
      },
    });
    const shortUrl = `http://localhost:3000/${shortCode}`;
    return NextResponse.json({ link: shortUrl }, { status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json(
      { error: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
