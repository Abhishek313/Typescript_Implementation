// let a :number= 25;

// let nambo : string = "abhi"

// let sirname: string | number = "hellow"


// type UserName = string | number;

// const func = (n : number,m : number):number => {
//    return n*m;
// }

// let arr : number [] = [1,2,3,4,5]

// let arr3 : Array<string|number> = [2,4,"ahdit"]

// interface Obj {
//     height: number;
//     weight: number;
//     gender?: boolean;
// }

// interface NewObj extends Obj {
//     scholar : boolean;
// }

// const obj: Obj = {
//     height: 44,
//     weight: 433,
// }




type funcType = (m:number,n:number) => number;


const func:funcType = (a,b) => a*b;


console.log(func(4,3));





interface Product {
    name: string;
    stock: number;
    price: number;
    photo: string;

}

type getDataType = (product: Product) => void;
const getData:getDataType = (product) => {
    console.log(product);
}

const productOne = {
    name: "macbook",
    stock: 45,
    price: 99999,
    photo: "sample-photo"
};

getData({name: "macbook",
stock: 45,
price: 99999,
photo: "sample-photo"})







