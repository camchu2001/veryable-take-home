-- CreateTable
CREATE TABLE "operators" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(256),
    "lastName" VARCHAR(256),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "operators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "businesses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256),
    "description" VARCHAR(256),
    "email" VARCHAR(256) NOT NULL,
    "addressLine1" VARCHAR(256) NOT NULL,
    "addressLine2" VARCHAR(256) NOT NULL,
    "city" VARCHAR(256) NOT NULL,
    "state" VARCHAR(256) NOT NULL,
    "zip" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "businesses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ops" (
    "id" SERIAL NOT NULL,
    "operatorID" INTEGER NOT NULL,
    "businessID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "pay" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ops_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "businesses_email_key" ON "businesses"("email");
