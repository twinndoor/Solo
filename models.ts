// src/models.ts

export interface Character {
    name: string;
    level: number;
    stats: Stats;
}

export interface Stats {
    strength: number;
    agility: number;
    intelligence: number;
    health: number;
}

export interface DungeonBeast {
    name: string;
    level: number;
    health: number;
    attack: number;
}
