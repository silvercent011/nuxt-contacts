import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const contacts = await prisma.contact.findMany();
    return contacts;
  } catch (error) {
    sendError(event, createError({ statusCode: 500 }));
  }
});
