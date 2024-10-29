const product = [
    {
        id: 0,
        image: 'img/Sonia/armygreen_dress2.jpeg',
        prodName: 'Army Green Dress',
        price: 140,
    },
    {
        id: 1,
        image: 'img/Sonia/beige_dress.jpeg',
        prodName: 'Beige Dress',
        price: 120,
    },
    {
        id: 2,
        image: 'img/Sonia/black_dress.jpeg',
        prodName: 'Black Dress',
        price: 120,
    }
];
const catagories = [...new Set(product.map((item)=>{return item}))]
let i = 0;
document.getElementById('root').innerHTML = catagories.map((item)=>{
    var{image, prodName, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' srce=${image}></img>
            </div>
        <div class='bottom'>
        <p>${prodName}</p>
        <h2>R ${price}.oo</h2>` +
        "<button onclick='addToCart("+(i++)+")>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('');

var cart =[];

function addToCart(a){
    cart.push({...catagories[a]});
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.lenght == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "R "+0+".00";
    }else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>{
            var {image, prodName, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+".00";
            return(
                `<div class='cart=item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size: 12px;'>${prodName}</p>
                    <h2 style='font-size: 15px;'>R ${price}.00</h2>` +
                    "<i class='fa-solid fa=trash' onclick='delElement("+ (j++) +")'</i></div>"
            )
        }).join('');
    }
}