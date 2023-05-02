import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const operator = await prisma.operator.create({
    data: {
      firstName: "Alice",
      lastName: "Hello",
    },
  });

  const business = await prisma.business.create({
    data: {
      name: "DEF",
      description: "ABCDE",
      email: "somebody@gmail",
      addressLine1: "hello",
      addressLine2: "helloworld",
      city: "Dallas",
      state: "TX",
      zip: "75080",
    },
  });

  const op = await prisma.op.create({
    data: {
      operatorId: operator.id,
      businessId: business.id,
      title: "Backend Developer",
      description: "Develop and maintain backend.",
      pay: 25,
      location: "123 Main St, Anytown USA",
      startTime: "2023-05-02T10:11:46.518Z",
      endTime: "2023-05-02T10:11:46.518Z",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
