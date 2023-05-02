import { Prisma, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function getBusiness(businessId: number) {
  const findBusiness = await prisma.business.findUnique({
    where: {
      id: businessId,
    },
  });

  return findBusiness;
}

export async function createBusiness(newBusiness: Prisma.BusinessCreateInput) {
  const createdBusiness = await prisma.business.create({
    data: newBusiness,
  });

  return createdBusiness;
}
