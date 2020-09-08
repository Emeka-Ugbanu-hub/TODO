const current = new Date();
const date = current.getDate();
const styledate = document.querySelector("#date");
styledate.innerHTML = date;
const year = current.getFullYear();
const styleyear = document.querySelector("#year");
styleyear.innerHTML = year;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const stylemonth = document.querySelector("#month");
stylemonth.innerHTML = monthNames[current.getMonth()];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday"];
const styleday = document.querySelector("#day");
styleday.innerHTML = dayNames[current.getDay()];
const modal = document.querySelector(".modal__box");
const add = document.querySelector(".add__todo");
add.addEventListener("click",()=>{
    modal.style.display = "block";
})
const remove = document.querySelector("#cancel");
remove.addEventListener("click",()=>{
    modal.style.display = "none";
})
//now lets start using class
const ul = document.querySelector(".todo__list");
const li = document.querySelector(".todo__li")
const fin = document.querySelector("#button");
var input1 = document.querySelector("#todo__text");
var input2 = document.querySelector("#todo__time");
const star = document.querySelectorAll(".star");

for(const click of star){
click.addEventListener("click",()=>{
    click.style.color="#f44d31";
})
}
var arr = [];
       fin.addEventListener("click",()=>{
        const clone = li.cloneNode(true); 
        const create = document.createElement("H3");
       create.innerHTML=input1.value;
       create.id="head";
       clone.append(create);
       var telem = document.createElement("P");
       telem.innerHTML=input2.value;
       telem.className="time";
       clone.append(telem);
       ul.append(clone); 
       arr.push({name:input1.value,time:input2.value})
       localStorage.setItem("key",JSON.stringify(arr));  
       })       
       //reload
       window.addEventListener("load",()=>{    
      const held =  JSON.parse(localStorage.getItem("key"));           
          held.forEach(element => {
              arr.push(element)
                  const clone2 = li.cloneNode(true);
                  const create2 = document.createElement("H3");
       create2.innerHTML=element.name;
       create2.id="head";
       clone2.append(create2);
       const telem2 = document.createElement("P");
       telem2.innerHTML=element.time;
       telem2.className="time";
       clone2.append(telem2);
                  ul.append(clone2)      
          });                
    })
