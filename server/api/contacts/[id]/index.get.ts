import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getRouterParams(event);

  try {
    const contacts = await prisma.contact.findUnique({
      where: { id: query.id },
    });
    return contacts;
  } catch (error) {
    sendError(event, createError({ statusCode: 500 }));
  }
});
