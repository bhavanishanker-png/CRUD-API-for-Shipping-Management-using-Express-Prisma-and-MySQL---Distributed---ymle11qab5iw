/*
  Warnings:

  - You are about to drop the column `useId` on the `Shipping` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Shipping` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Shipping` DROP COLUMN `useId`,
    ADD COLUMN `userId` INTEGER NOT NULL;
