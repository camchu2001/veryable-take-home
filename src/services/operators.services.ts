import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOperator(operatorId: number) {
  const findOperator = await prisma.operator.findUnique({
    where: {
      id: operatorId,
    },
  });
  return findOperator;
}

export async function createOperator(
  operatorFirstName: string,
  operatorLastName: string
) {
  const createdOperator = await prisma.operator.create({
    data: {
      firstName: operatorFirstName,
      lastName: operatorLastName,
    },
  });
  return createdOperator;
}
