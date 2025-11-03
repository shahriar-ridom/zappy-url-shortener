import { redirect, notFound } from "next/navigation";
import { prisma } from "../lib/prisma";

const page = async ({ params }: { params: Promise<{ shortCode: string }> }) => {
  const { shortCode } = await params;

  const link = await prisma.link.findUnique({
    where: {
      shortCode,
    },
  });

  if (!link) {
    notFound();
  }

  redirect(link.longUrl);
};

export default page;
