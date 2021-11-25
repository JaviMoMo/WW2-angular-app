import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Countrie {
    id: string;
    name: string;
    flag: string;
    politic: {
        name: string;
        img: string;
    }
    stability: string;
    warSupport: string;
    army: {
        soldier: string;
        number: string;
        machine: string;
    }
    alliance: string;
}

export interface Battle {
    id: string;
    title: string;
    img: string;
    text: string;
    victory: string;
}

export interface Result {
    id: string;
    title: string;
    img: string;
}