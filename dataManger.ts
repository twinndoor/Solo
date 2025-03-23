// src/dataManager.ts

import { Character, DungeonBeast } from './models';

const characters: Character[] = [];
const dungeonBeasts: DungeonBeast[] = [];

// Function to create a new character
export function createCharacter(name: string): Character {
    const newCharacter: Character = {
        name,
        level: 1,
        stats: {
            strength: 10,
            agility: 10,
            intelligence: 10,
            health: 100,
        },
    };
    characters.push(newCharacter);
    return newCharacter;
}

// Function to get character data
export function getCharacter(name: string): Character | undefined {
    return characters.find(character => character.name === name);
}

// Function to create a new dungeon beast
export function createDungeonBeast(name: string, level: number): DungeonBeast {
    const newBeast: DungeonBeast = {
        name,
        level,
        health: level * 10,
        attack: level * 5,
    };
    dungeonBeasts.push(newBeast);
    return newBeast;
}
