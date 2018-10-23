export class Recipe{
    public id:number;
    constructor(public title : string, public ingredients : string, public instructions : string) {
        this.id = count++;
    }
}

let count:number = 0;