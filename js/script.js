
let page = 0

async function getContent() {


    try {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)

        const data = await response.json()

        show(data.products)

    } catch (error) {
        console.log(error)
    }

    page++
}

getContent()

function show(products) {

    let output = ''

    for(let product of products) {
        output += `
        
        <div class="productSingle" id="${product.id}">
                    <img src="${product.image}" alt="">
                    <h3  class="name">${product.name}</h3>
                    <p class="description">${product.description}</p>
                    <span class="first">De ${product.oldPrice}</span>
                    <span class="second">Por ${product.price}</span>
                    <span>ou ${product.installments.count}x de R$${product.installments.value} </span>
                    <button type="menu" >Comprar</button>
                    
                </div>
                    
        `
    }

    document.querySelector('.productsWrapper').innerHTML =  output

    if(page === 3){
        loadButton.classList.add('loadInvisible')
    } else{
        loadButton.classList.remove('loadInvisible')
    }
}

let loadButton = document.querySelector('.loadButton');

loadButton.onclick = function() {show(products)}

