export class Food{
    name : string;
    number : number;
    elements = [];
    constructor(name, number, ...elements) {
        this.elements.push(...elements);
        this.name = name;
        this.number = number;
    }

}

let sscn = new Food('sscn', 2, 'cam','xa','chanh');
console.log(sscn.elements);