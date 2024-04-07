const product=[
    {
        id:0,
        image:"image/p1.png",
        title:'Stylish Allen Soly T Shirt',
        price:550,
    },
    {
        id:1,
        image:'image/p2.png',
        title:'Lee Cooper T Shirt for Girls',
        price:450
    },
    {
        id:2,
        image:'image/p3.png',
        title:'Buffalo T Shirt for Girls',
        price:799
    },
    {
        id:3,
        image:'image/p4.png',
        title:'Levis T Shirt for Girls',
        price:390
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image, title, price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        <div>`
    )
}).join('')