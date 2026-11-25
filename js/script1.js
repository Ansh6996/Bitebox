/*
document.getElementById("heading").textContent = "Welcome";

let heading = document.getElementById("title");
console.log(heading);

let result = document.querySelector(".message");
console.log(result);


let result1 = document.querySelectorAll(".message");
console.log(result1);

document.getElementById("box").innerHTML="<b>Welcome Students</b>";

let name = document.getElementById("username").value;
console.log(name);
document.getElementById("username").value =  "css";

function showMessage()
{
    alert("Welcome to html");
}
document.getElementById("mybutton").addEventListener("click",function()
{
    alert("Button clicked");
}
);

let name1 = ["Rahul","Priya","Amit"];
name1.forEach(function(i)
{
    console.log(i);
});

let str = "Welcome to JS";
console.log(str.length);
console.log(str.replace("JS","CSS"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(6));
-----------------------------------------------------------------------------------
*/

let fooditem = ["Pizza","Burger","Pasta"];
fooditem.push("Fries")
fooditem.splice(0,2,"Frankie"); //splice add -> (index(to select index),0(to push at that postion for replacing),item_name) //splice remove -> (index,1)
console.log(fooditem);
fooditem.splice(3,1);
console.log(fooditem);


let cart = [
    {
        name:"Pizza",
        price: 249,
        quantity:1
    },
    {
        name:"Burger",
        price:150,
        quantity:1
    }
];

let r = cart.find(function(item){
    return item.name === "Pizza";
})
console.log(r);

let cart1=["Pizza","Burger","Pasta"];
let cartlist = document.getElementById("cart-list");
cart1.forEach(function(item)
{
    let li=document.createElement("li");
    li.textContent = item;
    cartlist.appendChild(li);
})

function changeMode(){
    document.body.classList.toggle("dark");
}



// arrays
array = ["Rohan","Rishi","Raj","Ryan","Roshan"];
console.log(array);

fooditems = ["Pizza","Burger","Donut","Pasta","Ice cream"];
fooditems.push("Fruits");
console.log(fooditems);

//objects
student1 = [
    {
        name: "Ansh",
        age: 23,
        course: "Pharmacy"
    }
]
console.log(student1);

product = [
    {
        name:"Iphone",
        storage: "256 gb",
        processor: "snapdragon",
        version: 18,
        quantity: 2
    }
]
console.log(product);


document.getElementById("task3").textContent = "task changed";
