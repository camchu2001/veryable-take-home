import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOp(opId: number) {
  const foundOp = await prisma.op.findUnique({
    where: {
      id: opId,
    },
  });

  return foundOp;
}

export async function getOpsByOperatorId(operatorId: number) {
  const foundOps = await prisma.op.findMany({
    where: {
      operatorId: operatorId,
    },
  });
  return foundOps;
}

export async function createOp(newOp: Prisma.OpCreateInput) {
  const createdOp = await prisma.op.create({
    data: newOp,
  });

  return createdOp;
}
