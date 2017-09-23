import {Charecter} from "../charecters/charecter.model";

export interface Imisson {
    uid:         string;
    displayTitle: string;
    descripsion: string;
    charecters:  Charecter[];
    //loading?:    boolean;
    //error?:      string;
}

export class Misson {
    constructor(public uid: string,
                public displayTitle: string,
                public description: string,
                public charecters: Charecter[]) {}
}