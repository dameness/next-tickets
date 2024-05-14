import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Ticket } from "@/models/zod/ticket";
import prisma from "@/lib/prisma";

type SubmitTicketProps = Ticket & {
  status: string;
  userId: string;
};

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Not Authorized." }, { status: 401 });
  }

  const data: SubmitTicketProps = await req.json();

  try {
    await prisma.ticket.create({ data });
    return NextResponse.json({ message: "Success." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Couldn't post the ticket." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Not Authorized." }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  try {
    await prisma.ticket.delete({ where: { id: id as string } });
    return NextResponse.json({ message: "Success." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Couldn't delete the ticket." },
      { status: 500 }
    );
  }
}
