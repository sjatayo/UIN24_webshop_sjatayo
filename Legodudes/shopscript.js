console.log(products)


//Gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til idex.html 
let productHTML = ""

//En variabel som kan holde på HTML-en for produktene 
products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button>Legg i handlekurv</button>
            </article>`)


//Finn id #productlist, og fyll den med verdiene i variebelen productHTML
document.getElementById("productlist").innerHTML = productHTML