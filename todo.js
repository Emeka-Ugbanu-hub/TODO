const current = new Date();
const styledate = document.querySelector("#date");
const styleyear = document.querySelector("#year");
const stylemonth = document.querySelector("#month");
const styleday = document.querySelector("#day");
//class for modal
const modal = document.querySelector(".modal__box");
const add = document.querySelector(".add__todo");
const remove = document.querySelector("#cancel");
const clear = document.querySelector("#clear");
//class for creating the todo
const ul = document.querySelector(".todo__list");
const li = document.querySelector(".todo__li")
const fin = document.querySelector("#button");
var input1 = document.querySelector("#todo__text");
var input2 = document.querySelector("#todo__time");
const star = document.querySelectorAll(".star");
//class for active
const star2 = document.querySelector(".star__two");
for(var i = 0; i < star.length; i++);
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday"];
class Currentdate {
    constructor(year,date,month,day){
this.year = current.getFullYear();
this.date = current.getDate();
this.month = current.getMonth();
this.day = current.getDay();
    }
    current(){
    styleyear.innerHTML = this.year;
    styledate.innerHTML = this.date;
    stylemonth.innerHTML = monthNames[this.month];
    styleday.innerHTML = dayNames[this.day];
    }
} 
const get = new Currentdate();
get.current();
//now lets start using class to create the todo

var arr=[];
class Create{
    constructor(clone,h3,div,span,p,div2,p2){
this.clone = li.cloneNode(false);
this.h3=document.createElement("H3");
this.div =  document.createElement("DIV");
this.span= document.createElement("SPAN");
this.p = document.createElement("P");
this.div2 = document.createElement("DIV");
this.p2 = document.createElement("P");
    }
    make(){
        console.log(this.div2);
this.h3.innerHTML=input1.value;
this.span.innerHTML="&#10003;";
this.p.innerHTML=input2.value;
this.p2.innerHTML=star[0].innerHTML+""+star[1].innerHTML+""+star[2].innerHTML;
//class
this.h3.id="head";
this.div2.className="checkbox__two";
this.span.className="check";
this.p2.className="star__two";
this.div.className="float";
this.p.className="time";
//appending
this.clone.append(this.h3);
this.div2.append(this.span);
this.div.append(this.p2);
this.div.append(this.p);
this.div.append(this.div2);
this.clone.append(this.div);
ul.append(this.clone);
localStorage.setItem("key",JSON.stringify(arr)); 
    }  
}
//events
       fin.addEventListener("click",()=>{
         if(input1.value == ""){
             return ;
         }
         else{
            arr.push({name:input1.value,time:input2.value});
            var result = new Create();
            result.make();
       }
       })  
      
add.addEventListener("click",()=>{
    modal.style.display = "block";
})
remove.addEventListener("click",()=>{
    modal.style.display = "none";
})   
clear.addEventListener("click",()=>{
    localStorage.clear();
})





       //reload create again
       window.addEventListener("load",()=>{
        const parse = JSON.parse(localStorage.getItem("key"));
        parse.forEach(element => {
            class Reload extends Create{  
                edit(){
                    this.h3.innerHTML=element.name;
                    this.span.innerHTML="&#10003;";
                    this.p.innerHTML=element.time;
                    this.p2.innerHTML=star[0].innerHTML+""+star[1].innerHTML+""+star[2].innerHTML;
                    //class
                    this.h3.id="head";
                    this.div2.className="checkbox__two";
                    this.span.className="check";
                    this.p2.className="star__two";
                    this.div.className="float";
                    this.p.className="time";
                    //appending
                    this.clone.append(this.h3);
                    this.div2.append(this.span);
                    this.div.append(this.p2);
                    this.div.append(this.p);
                    this.div.append(this.div2);
                    this.clone.append(this.div);
                    ul.append(this.clone);
                    arr.push({name:element.name,time:element.time});
                }
            }
            const test = new Reload();
            test.edit(); 
        })
        const checkbox = document.querySelectorAll(".checkbox__two");
        for(let c =0; c < checkbox.length; c++)
      checkbox[c].addEventListener("click",()=>{
         checkbox[c].classList.toggle("background");
      })
      const star2 = document.querySelectorAll(".star__two");
      for(let s =0; s < star2.length; s++)
    star2[s].addEventListener("click",()=>{
       star2[s].classList.toggle("color");
    })
             })