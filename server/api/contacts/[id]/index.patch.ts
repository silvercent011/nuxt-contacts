import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getRouterParams(event);
  const body = await useBody(event);

  try {
    const contacts = await prisma.contact.update({
      where: {
        id: query.id,
      },
      data: body,
    });
    return contacts;
  } catch (error) {
    sendError(event, createError({ statusCode: 500 }));
  }
});
