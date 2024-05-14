import { Customer } from "@/models/zod/customer";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Not Authorized." }, { status: 401 });
  }

  const data: Customer & { userId: string } = await req.json();

  try {
    await prisma.customer.create({
      data,
    });
    return NextResponse.json({ message: "Success." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Couldn't post customer data." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Not Authorized." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Invalid Customer ID" },
        { status: 406 }
      );
    }

    await prisma.customer.delete({ where: { id: id } });

    return NextResponse.json({ message: "Success." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Couldn't delete customer data." },
      { status: 500 }
    );
  }
}
