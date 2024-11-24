let productsArray = [];

function collectData() {
    const productName = document.getElementById('productName').value
    const productPrice = document.getElementById('productPrice').value
    const productCategory = document.getElementById('productCategory').value
    const productPhotoURL = document.getElementById('productPhotoURL').value
    return {
        productName: productName,
        productPrice: productPrice,
        productCategory: productCategory,
        productPhotoURL: productPhotoURL,
    }
}

function generateHTML(data, index) { // saves on newHTML the data by the mission requirements 
    const newHTML =
        `<tr>
            <td>${data.productName}</td>
            <td>${data.productPrice}</td>
            <td>${data.productCategory}</td>
            <td><img src="${data.productPhotoURL}"></td>
            <td><button onclick="deleteProduct(${index})" class="btn btn-danger">Delete</button></td>
        </tr>`
    return newHTML
}

function renderAllProducts() { //render all product from the array
    const productContainer = document.getElementById('productContainer')
    productContainer.innerHTML = '' // Clear current display
    for (let i = 0; i < productsArray.length; i++) {
        const newHTML = generateHTML(productsArray[i], i)
        productContainer.innerHTML += newHTML // adds each product from the array to the table
    }
}

function deleteProduct(index) {
    productsArray.splice(index, 1) // Remove item from array
    renderAllProducts() // Re-render the updated list
}

function clearForm() { // after added a product, clears the form
    const productForm = document.getElementById('productForm')
    productForm.reset()
    const productNameInput = document.getElementById('productName')
    productNameInput.focus()
}

function addProduct(event) {
    event.preventDefault() // prevents default
    const data = collectData() // collect data from user and saves on var data
    productsArray.push(data) // adds the array to the product array
    renderAllProducts() //render all product from the array
    clearForm() // after added a product, clears the form
}