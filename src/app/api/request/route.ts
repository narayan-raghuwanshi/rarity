import { prisma } from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      bookName: body.bookName,
      author: body.author,
      phone: body.phone,
    },
  });

  return NextResponse.json(
    {
      name: body.name,
      bookName: body.bookName,
      author: body.author,
      email: body.email,
      phone: body.phone,
    },
    {
      status: 200,
    }
  );
}
