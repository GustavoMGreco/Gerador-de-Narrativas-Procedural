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
    const texto = fs.readFileSync('./prisma/actors.json', 'utf-8');
    const textoArray = JSON.parse(texto);
    await prisma.actor.createMany({data: textoArray});

    console.log('Semeadura concluída com sucesso!');
}

main()
    .catch((e) => {
    console.error('Erro durante o seed: ', e);
})
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });