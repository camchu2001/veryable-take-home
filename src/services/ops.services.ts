import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getOp(opId: number) {
  const findOp = await prisma.op.findUnique({
    where: {
      id: opId,
    },
  });

  return findOp;
}

export async function getOpsByOperatorId(operatorId: number) {
  const findOps = await prisma.op.findMany({
    where: {
      operatorID: operatorId,
    },
  });
  return findOps;
}

export async function createOp(newOp: Prisma.OpCreateInput) {
  const createdOp = await prisma.op.create({
    data: newOp,
  });

  return createdOp;
}
