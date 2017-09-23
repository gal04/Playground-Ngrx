export interface Icharecter {
    uid:         string;
    displayName: string;
    descripsion: string;
    powers:      string[];
    //loading?:    boolean;
    //error?:      string;
}

export class Charecter {
    constructor(public uid: string,
                public displayName: string,
                public description: string,
                public powers: string[]) {}
}