-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "StatusAppointment" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELED', 'SUCCESS', 'FAILURE');

-- CreateTable
CREATE TABLE "disponibilities" (
    "disponibility_id" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "available_from" TIMESTAMP(3) NOT NULL,
    "available_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "disponibilities_pkey" PRIMARY KEY ("disponibility_id")
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" SERIAL NOT NULL,
    "product_name" VARCHAR(100) NOT NULL,
    "product_logo" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "team" (
    "team_id" SERIAL NOT NULL,
    "leader_id" INTEGER NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "prospects" (
    "prospect_id" SERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "gender" "Gender" NOT NULL,
    "age_range" VARCHAR(20) NOT NULL,
    "situation" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postal_code" VARCHAR(10) NOT NULL,
    "phone" TEXT NOT NULL,
    "landline" TEXT NOT NULL,

    CONSTRAINT "prospects_pkey" PRIMARY KEY ("prospect_id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "appointment_id" SERIAL NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "call_record" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "prospect_id" INTEGER NOT NULL,
    "commercial_id" INTEGER NOT NULL,
    "status_appointment" "StatusAppointment" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("appointment_id")
);

-- AddForeignKey
ALTER TABLE "disponibilities" ADD CONSTRAINT "disponibilities_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("account_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "accounts"("account_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_prospect_id_fkey" FOREIGN KEY ("prospect_id") REFERENCES "prospects"("prospect_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "accounts"("account_id") ON DELETE RESTRICT ON UPDATE CASCADE;
