async function getContent() {
    try {
        const response = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

        const data = await response.json()

        show(data)

    } catch (error) {
        console.log(error)
    }
}

getContent()

function show(products) {

    let output = ''

    for(let product of products) {
        output += `
        
                    <img src="${product.image}" alt="">
                    <h3  class="name">${product.name}</h3>
                    <p class="description">${product.description}</p>
                    <span>De ${product.oldPrice}</span>
                    <span>Por ${product.price}</span>
                    <span>ou ${product.count} de ${product.value} </span>
                    <button type="submit">Comprar</button>
                    
        `
    }

    document.querySelector('.productSingle').innerHTML =  output
}