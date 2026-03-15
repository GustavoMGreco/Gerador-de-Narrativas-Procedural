import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as fs from "fs";
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
    const textoActors = fs.readFileSync('./prisma/data/actors.json', 'utf-8');
    const actorsArray = JSON.parse(textoActors);
    await prisma.actor.createMany({ data: actorsArray });

    console.log('Semeadura de actors concluída.');

    const textoTargets = fs.readFileSync('./prisma/data/targets.json', 'utf-8');
    const targetsArray = JSON.parse(textoTargets);
    await prisma.target.createMany({ data: targetsArray })

    console.log(`Foram criados ${targetsArray.length} alvos com sucesso.`);
}

main()
    .catch((e) => {
    console.error('Erro durante o seed: ', e);
})
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });