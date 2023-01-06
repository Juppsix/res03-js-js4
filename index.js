function exercice1()
{
let btn = document.getElementById("btn-change-color");
let box1= document.getElementById("box1")

btn.addEventListener("click", function(event){
    box1.style.backgroundColor = "blue";;
});
}

function exercice2()
{
let btn2 = document.getElementById("btn-move");
let box2 = document.getElementById("box2");

btn2.addEventListener("click", function(event){
    // box2.style.move = "translateX(20vh)";
    box2.classList.add("move");

});
}

function exercice3()
{
    let btn3 = document.getElementById("btn-add-ingredients");
    let ingredients = ["Salade", "Tomate", "Oignon"];
    btn3.addEventListener("click", function(event){
        
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let txt = document.createTextNode("Salade");
    let txt2 = document.createTextNode("Oignon");
    let txt3 = document.createTextNode("Tomate");
    
        
        
        li.appendChild(txt);
        li2.appendChild(txt2);
        li3.appendChild(txt3);
        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li3);
    });
}

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    let btn4 = document.getElementById("btn-add-hero");
    let tbody = document.querySelector("tbody");
    let count =0;
    btn4.addEventListener("click", function(event){
        
        let tr=document.createElement("tr");
        let tdName=document.createElement("td");
        let tdSecret=document.createElement("td");
        let name=document.createTextNode(heroes[count].name);
        let secret=document.createTextNode(heroes[count].secret);
        
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdSecret);
        tdName.appendChild(name);
        tdSecret.appendChild(secret);
        count++;
    });
}

function exercice5()
{
let btn5 = document.getElementById("btn-turn");
btn5.addEventListener("click", function (event){
    
    let section1 = document.getElementById("blue");
     let section2 = document.getElementById("red");
      let section3 = document.getElementById("green");
    
    
    section1.style.backgroundColor = "red";;
    section2.style.backgroundColor = "blue";;
    section3.style.backgroundColor = "green";;
});
}

function exercice6()
{

}

window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});
