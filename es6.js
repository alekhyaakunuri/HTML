function add(){
var sum=0;
for(i=1;i<10;i++)
{
    sum+=i;
    console.log(i);
}
console.log("i="+i);
return sum;
}
console.log(add());
//object
var student={
    rollNo:101,
    name:"alli",
    talk:function(){
        console.log("talk");
    },
    walk(){
        console.log(this);
    },
    subjects:['eng','maths'],
    marks:{
        eng:35,
        maths:50
    }
};
console.log(student.name);
console.log(student.talk());
console.log(student.walk());

console.log(student.subjects[0]);
console.log(student.subjects[1]);
console.log(student.marks.eng);
console.log(student.marks["maths"]);
//this keyword
console.log(student.walk());//student properties
var std=student.walk;
 
/*var std=function(){
    console.log(this) //equivalence code of above stmsts
}*/
//in standalone function 'this' refers to window

console.log(std);
console.log(std());//window properties
//binding object to function
var std=student.walk.bind(student);
console.log(std());
export default class Person{
    constructor(name){
        this.name=name;
    }
    }
    
//imoprt {person} from '../es7';
//import {walk} from es7;
//import person,walk
class Student extends Person{
    marks={};
    subjects=[];
    constructor(rollNo,name){
        super(name);
        this.rollNo=rollNo;
    }
    export talk(){
        console.log("talk1");
    }
    walk(){
        console.log("walk1");
    }
}
var std1=new Student(102,"ALEKHYA");

console.log(std1.rollNo);
console.log(std1.name);
var sum=(num1,num2)=>num1+num2;
console.log(sum(100,200));
var sq=(num1,num2)=>num1*num2;
var sq1=(num1)=>num1*num1;

console.log(sq(10,200));
console.log(sq1(10));
var arr=[10,20,30,40];
var arr2=[];
function sq3(){
    for(var i=0;i<arr.length;i++){
        arr2[i]=arr[i]*arr[i];

    }
    //console.log(arr2);//printing whole array
    console.log(arr2[2]);
}
sq3();
//map(x=>f(x)-applies function on every element of array
console.log(arr.map(num=>num*num));
//filter
console.log(arr.filter(num=>num>20));
//reduce
console.log(arr.reduce((acc,val)=>acc+val));
console.log(arr.reduce((acc,val)=>acc*val));
//const
const address={
    street:"1st cross",
    area:"navalur",
    city:"chen"
};

const{street,area}=address;
const{city}=address;
console.log(city);
const{city:c}=address;
console.log(c);

console.log(street);
console.log(area);
var arr3=[1,2,3,4,5,6,7,8];
console.log(arr3.filter(num=>(num%2==0)));
console.log(arr3.filter(num=>(num%2!=0)));
var arr4=[100,200,250];
var arr5=[5,15,20];
var arr6=[...arr4,...arr5];
console.log(arr6);
var arr6=[3,6,...arr4,10,11,...arr5,7,8];
console.log(arr6);
var student1={
    rollNo:102,
    name1:"shub"
};
var student2={...student1};
console.log(student2);
student2.schoolname="ZPHS school";
var student3={
    roollno:103,
    name:"alli"
};
var std={...student2,...student3,city:"satyawada"}
console.log(std);
//console.log(address);






