import { PrismaClient } from "@prisma/client";
import * as fs from "fs";

const prisma = new PrismaClient();

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
    });