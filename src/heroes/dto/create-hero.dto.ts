import { HeroClass } from "@prisma/client";

export class CreateHeroDto {
    name: string;
    class: HeroClass;
}
