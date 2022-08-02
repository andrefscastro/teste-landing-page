async function getContent() {
    try {
        const response = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

        const data = await response.json()
    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(products) {

    let output = ''

    for(let product of products) {
        output += `
        
        
        
        
        `
    }

    document.querySelector('.productsWrapper').innerHTML(output)
}