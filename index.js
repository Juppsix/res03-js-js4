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
    
    btn4.addEventListener("click", function(event){
        
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let th = document.createElement("th");
        let name = document.createTextNode("Clark Kent")
        let name2 = document.createTextNode("Diana Prince")
        let name3 = document.createTextNode("Tony Stark")
        let secret = document.createTextNode("Superman")
        let secret2 = document.createTextNode("Wonder Woman")
        let secret3 = document.createTextNode("Iron Man")
        
        
        
        tr.appendChild("name")
    });
}

function exercice5()
{

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
