-- CreateEnum
CREATE TYPE "actor_roles" AS ENUM ('Blacksmith', 'Guard', 'Alchemist', 'Innkeeper', 'Adventurer', 'Merchant', 'Mayor');

-- CreateEnum
CREATE TYPE "action_types" AS ENUM ('Kill', 'Gather', 'Escort', 'Investigate', 'Betray', 'Negotiate', 'Intimidate', 'Trade', 'Heal');

-- CreateTable
CREATE TABLE "actors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "actor_roles" NOT NULL,
    "level" INTEGER NOT NULL,
    "hostility" BOOLEAN NOT NULL,

    CONSTRAINT "actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objectives" (
    "id" TEXT NOT NULL,
    "action" "action_types" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "target_id" TEXT NOT NULL,
    "quest_id" TEXT NOT NULL,

    CONSTRAINT "objectives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quests" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "gold_reward" INTEGER NOT NULL,
    "xp_reward" INTEGER NOT NULL,

    CONSTRAINT "quests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "objectives" ADD CONSTRAINT "objectives_quest_id_fkey" FOREIGN KEY ("quest_id") REFERENCES "quests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quests" ADD CONSTRAINT "quests_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "actors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
