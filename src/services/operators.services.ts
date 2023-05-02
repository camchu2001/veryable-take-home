import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function getOperator(operatorID: number) {
  const findOperator = await prisma.operator.findUnique({
    where: {
      id: operatorID,
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
