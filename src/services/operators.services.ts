import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOperator(operatorId: number) {
  const foundOperator = await prisma.operator.findUnique({
    where: {
      id: operatorId,
    },
  });
  return foundOperator;
}

export async function createOperator(newOperator: Prisma.OperatorCreateInput) {
  const createdOperator = await prisma.operator.create({
    data: newOperator,
  });
  return createdOperator;
}
