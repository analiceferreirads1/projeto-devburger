const list = document.querySelector('ul')

const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterVegan = document.querySelector('.filter-vegan')

const backButton = document.querySelector('.back-button')
const backButtonContainer = document.querySelector('.back-button-container')


// Mostrar botão voltar
function showBackButton() {
    backButtonContainer.style.display = 'flex'
}

// Esconder botão voltar
function hideBackButton() {
    backButtonContainer.style.display = 'none'
}


// Mostrar todos os produtos
function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })

    list.innerHTML = myLi
    hideBackButton()  // O botão voltar não aparece aqui
}


// Mapear com desconto
function mapWithDiscount() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: (product.price * 0.9).toFixed(2),
    }))

    let myLi = ''

    newPrices.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })

    list.innerHTML = myLi
    showBackButton()
}


// Somar tudo
function sumAllitens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor total dos itens é de:</p>
            <p class="item-price">R$ ${totalValue.toFixed(2)}</p>
        </li>
    `

    showBackButton()
}


// Filtrar veganos
function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    if (filterJustVegan.length === 0) {
        list.innerHTML = `
            <li>
                <p class="empty-message">Nenhum item vegano encontrado.</p>
            </li>
        `
    } else {
        let myLi = ''

        filterJustVegan.forEach((product) => {
            myLi += `
                <li>
                    <img src="${product.src}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price}</p>
                </li>
            `
        })

        list.innerHTML = myLi
    }

    showBackButton()
}


// Botão voltar → limpa a tela e volta pro início vazio
backButton.addEventListener('click', () => {
    list.innerHTML = ''
    hideBackButton()
})


// Eventos dos botões principais
buttonShowAll.addEventListener('click', () => {
    showAll(menuOptions)
    hideBackButton()
})

buttonMapAll.addEventListener('click', mapWithDiscount)
sumAll.addEventListener('click', sumAllitens)
filterVegan.addEventListener('click', filterAllItems)


// Ao carregar a página → lista vazia e botão voltar escondido
list.innerHTML = ''
hideBackButton()