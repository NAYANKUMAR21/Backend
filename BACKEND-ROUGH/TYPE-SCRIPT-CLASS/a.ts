let x : number = 1
var y : undefined = undefined
var n : null = null
var f :Array<number>  = []
var f2 : number[] = [1,2,3,4]
var f3 :Array<string>  = ["a","b","c","d"]
var f4 : string[] = ["a","b","c","d"]
const g : Array<number | string> = ["",2,"xyz"]
let v : number | string ;
v = 1;
v = "nayan";

const z2 :Array<Array<number | string>> = [["nayan",1],["string",2]]
const z3 :Array<{
    id:number;
    author:string;                                                      //schema runtime will understand that this is TypeScript
    bool:boolean;
}> = [{id:1,author:"xyz",bool:true},{id:2,author:"abc",bool:true},{id:2,author:"gef",bool:true}]


const z5 :Array<{
    id:number;
    author:string;                                                      //schema runtime will understand that this is TypeScript
    bool:boolean;
    age?:number;
    gender?:{
        value:string
    };
}> = [{id:1,author:"xyz",bool:true},{id:2,author:"abc",bool:true},{id:2,author:"gef",bool:true,age:12,gender:{value:"male"}}]

z5[1].gender?.value


const x9 : Record<string,boolean> = {
    load:true,
    error:false,
    succes:false,
}


const h6 : Record<string,number[]> = {
    tasks:[1,2,4],
    poss:[2,3,4,],
}


/* 
[{id:1,author:"nayan",bool:true},{id:2,author:"nayan",bool:true},{id:2,author:"nayan",bool:true}]
*/


//nested types 
type GENDER  = "Male" | "Female" | "Others"
type User = {
    name :string,
    age :number,
    gender :GENDER
}

const nh : Array<User> = [{name:"nayan",age:12,gender:"Male"},{name:"nayan",age:12,gender:"Male"},{name:"nayan",age:12,gender:"Male"}]



type Country = "india" | "japan"| "USA" |"france"|"UK"
const country : Array<Country> = ["india","japan","USA","UK","france"]

//tuple its typeScript way of telling restricted the content of array and it length
const xyz : Array<[number,string | boolean]> = [[1,"nayan"],[2,true],[3,"xyz"]]

//giving types to function 
const xx = (a:number,b:number):number=>a+b
xx(2,1)


//if the function doesn't return anything then we write void
const something = (a:number,b:number):void=>{
    console.log(a+b)
}
something(1,2)



//enum
