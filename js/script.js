
/* basic java script
console.log("Hello world");
let restaurantName = "BiteBox";
console.log("Welcome to" + restaurantName);


let customerName = prompt(
    "Welcome to " + restaurantName + "! \n\nWhat is your name?"
);

prompt(
    "Welcome to" + restaurantName + "!\n\nWhat is your name ?"
);


alert("Hello");

let age = 16;
if (age >= 18)
{
    console.log('Eligible');
}
else{
    console.log("Not Eligible");
}


let marks = 75;
if(marks >= 75){
    console.log("Distinction");
}
else{
    console.log("Fail")
}


let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wednesday")
        break;
    
    case 4:
        console.log("Thursday")
        break;
    
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    
    default:
        console.log("Invalid day");
}


for (let i=1; i<= 5; i++)
{
    console.log(i);
}

let i = 1;
while(i <= 5)
{
    console.log(i);
    i++;
}

do
{
    console.log(i);
    i++;
}while(i <= 5);


//task2
for (i=1;i<=10; i++)
{
    console.log(i);
}


//task4

let b = 1
do{
    console.log(b)
    b++;
    }while(b<=5);
    
    //task1
    let a = 2;
    let d = 3;
    let operator="sum";
    switch(operator)
    {
        case "mul":
            console.log(a*d);
            break;
            
            case "sub":
                console.log(a-d);
                break;
                
                case "sum":
                    console.log(a+d);
                    break;
                    
                    case "div":
                        console.log(a/d);
                        break;
                        
                        default:
                            console.log("Invalid");
                            } 

//task3
let j = 2;
while(j<= 10)
    {
        if(j%2 == 0){
            console.log(j);
        }
    }
        j++;

console.log("Hello");
for(let i=1;i<=10;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
    i++;
}

function greet()
{
    console.log("Hello");
    console.log("FSB course");
}

greet();

function add(a,b,c)
{
    console.log(a+b+c);
}
add(12,12,8);

function sub(a,b,c)
{
    console.log(a-b-c);
}
sub(100,2,12);

function mul(a,b,c)
{
    console.log(a*b*c);
}
mul(10,28,12);

function div(a,b)
{
    console.log(a/b);
}
div(12,2);

let i = 2;
while(i <= 10)
    {
        if(i%2 != 0)
        {
            console.log(i);
            i++;

        }
    }


    ----------------------------------------- END -------------------------------------------------


// Studying for BiteBox now
//calculate item total

function calculateItemTotal(price,quantity)
{
    return price*quantity;
}

// calculate subtotal
function calculateSubtotal()
{   
    let subtotal=0;
    let rows = document.querySelectorAll("#shopping-cart tbody tr");
    rows.forEach(function(row)
{
    let priceText=row.children[1].textContent;
    let price = parseFloat(priceText.replace("Rs.","").trim());

    let quantity=parseInt(row.querySelector(".quantity-box span").textContent);

    let itemTotal=calculateItemTotal(price,quantity);

    row.querySelector(".item-total").textContent="Rs. "+itemTotal;
});
return subtotal;
}


function calculateDelivery(subtotal)
{
    if (subtotal > 0)
    {
        return 40;
    }
    return 0;
}
function calculateTotal(subtotal,delivery)
{
    return subtotal+delivery;
}
function updateBill()
{
    let subtotal=calculateSubtotal();
    let delivery=calculateDelivery(subtotal);
    let total=calculateTotal(subtotal,delivery);
    document.getElementById("subtotal-amount").textContent="Rs"+subtotal.toFixed(2);
    document.getElementById("delivery")
        document.getElementById("subtotal-amount").textContent =
        "Rs. " + subtotal.toFixed(2);

    document.getElementById("delivery-amount").textContent =
        "Rs. " + delivery.toFixed(2);

    document.getElementById("total-amount").textContent =
        "Rs. " + total.toFixed(2);
}

// Call function
updateBill();
*/

// UPDATE 1: Get cart data from Local Storage

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// UPDATE 2: Add food to cart

function addFood(name, price) {

    let food = cart.find(function(item) {
        return item.name === name;
    });

    if (food) {

        food.quantity++;

    } else {

        let newFood = {
            name: name,
            price: price,
            quantity: 1
        };

        cart.push(newFood);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Food added to cart");

}


// UPDATE 3: Display cart items

function displayCart() {

    let output = "";
    let subtotal = 0;

    cart.forEach(function(food, index) {

        let itemTotal = food.price * food.quantity;

        subtotal = subtotal + itemTotal;

        output += `
            <tr>
                <td>${food.name}</td>

                <td>₹${food.price}</td>

                <td>
                    <button onclick="changeQuantity(${index}, -1)">-</button>

                    ${food.quantity}

                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </td>

                <td>₹${itemTotal}</td>

                <td>
                    <button onclick="removeFood(${index})">
                        Remove
                    </button>
                </td>
            </tr>
        `;

    });


    // Display cart items

    let cartItems = document.getElementById("cart-items");

    if (cartItems) {
        cartItems.innerHTML = output;
    }


    // UPDATE 4: Calculate bill

    let delivery = subtotal > 0 ? 40 : 0;

    let total = subtotal + delivery;


    // Display item count

    let count = document.getElementById("item-count");

    if (count) {
        count.textContent = cart.length;
    }


    // Display subtotal

    let amount = document.getElementById("subtotal-amount");

    if (amount) {
        amount.textContent = "₹" + subtotal;
    }


    // Display delivery charges

    let deliveryAmount = document.getElementById("delivery-amount");

    if (deliveryAmount) {
        deliveryAmount.textContent = "₹" + delivery;
    }


    // Display final total

    let totalAmount = document.getElementById("total-amount");

    if (totalAmount) {
        totalAmount.textContent = "₹" + total;
    }

}


// UPDATE 5: Increase or decrease quantity

function changeQuantity(index, value) {

    cart[index].quantity = cart[index].quantity + value;

    if (cart[index].quantity === 0) {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// UPDATE 6: Remove food from cart

function removeFood(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// UPDATE 7: Clear complete cart

function clearCart() {

    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// UPDATE 8: Clear Cart button

let clearButton = document.getElementById("clear-cart");

if (clearButton) {

    clearButton.addEventListener("click", clearCart);

}


// UPDATE 9: Display saved cart when page loads

displayCart();


//function to search the product
function searchFood()
{
    let search=document.getElementById("search").value.toLowerCase();
    let products=document.querySelectorAll(".product");
    products.forEach(function(food){
        let name=food.querySelector("h3").textContent.toLowerCase();
        if(name.includes(search)){
            food.style.display="block";
        }
        else
        {
            food.style.display="none";
        }
    });

}