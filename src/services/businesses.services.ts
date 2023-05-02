import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getBusiness(businessId: number) {
  const foundBusiness = await prisma.business.findUnique({
    where: {
      id: businessId,
    },
  });

  return foundBusiness;
}

export async function getBusinessesById(businessIds: number[]) {
  const foundBusinesses = await prisma.business.findMany({
    where: {
      id: { in: businessIds },
    },
  });
  return foundBusinesses;
}

export async function createBusiness(newBusiness: Prisma.BusinessCreateInput) {
  const createdBusiness = await prisma.business.create({
    data: newBusiness,
  });

  return createdBusiness;
}
