const errorDiv=document.getElementById("error")
const historyList=document.querySelector("#history-list")
const history=[]
const operations=["+","-","*","/","!","%"]
function getParseHistoryList()
{
    return JSON.parse(localStorage.getItem("historykey"))
}
function addListEvent(){
const lists=document.querySelectorAll("#history-list >li") //> will get child elements and also descendent is there
lists.forEach((li)=>{
   li.addEventListener("click",()=>{
   const bothsides= li.innerHTML.split("=")
   document.querySelector("result").innerHTML=bothsides[0]
   let operand=null
for (op of operations)
{
   
}

   operations.forEach((op)=>
{
    if(bothsides[1].includes(op))
    {
       operand=bothSides[1].split(op)
    }
})
   document.querySelector("#num1").innerHTML=operand[0]
   document.querySelector("#num2").innerHTML=operand[1]
   })
})
}

document.querySelector("#filter").addEventListener("change",function()
{
    const op=this.value
    if(op === "all"|| op==="")
    {
        printHistoryList(getParseHistoryList())
    }else
    {
    const parseHistory=getParseHistoryList()
    const filteredparseHistory=parseHistory.filter(function(e){
        return op===e.op  //  === give true or false value
    })
    printHistoryList(filteredparseHistory)
}
})

function addToHistory(num1,num2,r,op)
{
    const exp={num1,num2,result:r,op}
    history.push(exp)
    console.table(history)

    const jsonHistory=JSON.stringify(history)
    localStorage.setItem("historykey",jsonHistory)
    printHistoryList(getParseHistoryList())
}

function printHistoryList(parseHistory)
{
   
    historyList.innerHTML=""
    parseHistory.forEach(function(e,i){
        historyList.innerHTML+=`<li class="list-group-item">
        <span>${e.result}</span>
        <span>=</span>
        <span>${e.num1}</span>
        <span>${e.op}</span>
        <span>${e.num2}</span>
   
        </li>`
        // <span>${e.op==="!{fact}"?"":e.num2}</span></li> instead of  <span>${e.num2}</span> we we apply sir wali condition inscript.js
    })
    addListEvent()
}
printHistoryList(getParseHistoryList()) //call when html page load/open

function addition()
{
    try{
    const num1=parseInt((document.getElementById("num1").value).trim())
    const num2=parseInt((document.getElementById("num2").value).trim())
    const add=num1+num2
   
    document.getElementById("result").innerHTML="Result="+add
    addToHistory(num1,num2,add,"+")
    }
    catch(e)
    {
        errorDiv.innerHTML=e
        console.error(e)
    }
}

function substract()
{
    try{
    const num1=parseInt((document.getElementById("num1").value).trim())
    const num2=parseInt((document.getElementById("num2").value).trim())
    const result=num1-num2
    document.getElementById("result").innerHTML="Result="+result
    addToHistory(num1,num2,result,"-")
    }
    catch(e)
    {
        errorDiv.innerHTML=e
        console.error(e)
    }
}

function multiply()
{
    try{
    const num1=parseInt((document.getElementById("num1").value).trim())
    const num2=parseInt((document.getElementById("num2").value).trim())
    const result=num1*num2
    document.getElementById("result").innerHTML="Result="+result
    addToHistory(num1,num2,result,"*")
    }
    catch(e)
    {
        errorDiv.innerHTML=e
        console.error(e)
    }
}

function divide()
{
    try{
    const num1=parseInt((document.getElementById("num1").value).trim())
    const num2=parseInt((document.getElementById("num2").value).trim())
    const result=num1/num2
    document.getElementById("result").innerHTML="Result="+result
    addToHistory(num1,num2,result,"/")
    }
    catch(e)
    {
        errorDiv.innerHTML=e
        console.error(e)
    }
}

function remainder()
{
    try{
    const num1=parseInt((document.getElementById("num1").value).trim())
    const num2=parseInt((document.getElementById("num2").value).trim())
    const result=num1%num2
    document.getElementById("result").innerHTML="Result="+result
    addToHistory(num1,num2,result,"rem")
    }
    catch(e)
    {
        errorDiv.innerHTML=e
        console.error(e)
    }
}

function evenOdd() {
    const num = parseInt((document.getElementById("num1").value).trim());
    if (isNaN(num)) {
        errorDiv.innerHTML = "Please enter a valid integer";
        return;
    }
    const result = (num % 2 === 0) ? "Even" : "Odd";
    document.getElementById("result").innerHTML = num + " is " + result;
    addToHistory(num, null, result, "Even/Odd");
}

function factorial() {
    const num = parseInt((document.getElementById("num1").value).trim());
    if (isNaN(num) || num < 0) {
        errorDiv.innerHTML = "Please enter a valid non-negative integer";
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById("result").innerHTML = "Factorial of " + num + " = " + fact;
    addToHistory(num, null, fact, "Factorial");
    /*
    const num1 = parseInt((document.getElementById("num1").value).trim());
    const num2=0
    let fact =1;
     for (let i = 1; i <= num; i++){
     fact *=i;
     }
     document.getElementById("result").innerHTML='${num1}!=${fact}'
     addToHistory(num1,num2,fact,"!(fact)")
   
    */
   
}
function areaOfRectangle() {
    const length = parseFloat((document.getElementById("num1").value).trim());
    const width = parseFloat((document.getElementById("num2").value).trim());
    if (isNaN(length) || isNaN(width)) {
        errorDiv.innerHTML = "Please enter valid numbers for length and width";
        return;
    }
    const area = length * width;
    document.getElementById("result").innerHTML = "Area of Rectangle = " + area;
    addToHistory(length, width, area, "Rectangle Area");
}
function areaOfCircle() {
    const radius = parseFloat((document.getElementById("num1").value).trim());
    if (isNaN(radius)) {
        errorDiv.innerHTML = "Please enter a valid number for radius";
        return;
    }
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById("result").innerHTML = "Area of Circle = " + area.toFixed(2);
    addToHistory(radius, null, area.toFixed(2), 'Circle Area');
}

