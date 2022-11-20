import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const contacts = await prisma.contact.create({ data: body });
    return contacts;
  } catch (error) {
    sendError(event, createError({ statusCode: 500 }));
  }
});
