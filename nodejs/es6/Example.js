//destructuring

const arr=[4,77,12,89,90,145]
// let n1=arr[0]
// let n2=arr[1]
// let n3=arr[2]
// let n4=arr[3]
// let n5=arr[4]
// let n6=arr[5]

const [n1,n2,n3,n4,n5,n6]=arr  

//const [,n2,,n4,n5]=arr     //4,12,145 skip
const person={name:"rahul",age:23,mobile:"9876543210"}

const{name,age,mobile}=person

//const{name,mobile}=person         //skip age