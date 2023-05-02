import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getBusiness(businessId: number) {
  const findBusiness = await prisma.business.findUnique({
    where: {
      id: businessId,
    },
  });

  return findBusiness;
}

export async function getBusinessesByID(businessIDs: number[]) {
  const findBusinesses = await prisma.business.findMany({
    where: {
      id: { in: businessIDs },
    },
  });
  return findBusinesses;
}

export async function createBusiness(newBusiness: Prisma.BusinessCreateInput) {
  const createdBusiness = await prisma.business.create({
    data: newBusiness,
  });

  return createdBusiness;
}
