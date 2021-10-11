let form = document.querySelector('#form')
// event listener
form.addEventListener('submit', (event) => {
    event.preventDefault()

    let message = ""
    let error = document.querySelector('#error')
    let type, quantity, color, name, phone, email, address

    type = document.querySelector('#type')
    quantity = document.querySelector('#quantity')
    color = document.querySelector('#color')
    name = document.querySelector('#name')
    phone = document.querySelector('#phone')
    email = document.querySelector('#email')
    address = document.querySelector('#address')

    if(type.value == "") {
        message = "Product type must be chosen"
    } else if(quantity.value == "") {
        message = "Quantity must be filled"
    } else if(quantity.value < 1) {
        message = "Quantity must be greater than 0"
    } else if(name.value == "") {
        message = "Name must be filled"
    } else if(!isAlphabet(name.value)) {
        message = "Name must be alphabet only"
    } else if(phone.value == "") {
        message = "Phone number must be filled"
    } else if(email.value == "") {
        message = "Email must be filled"
    } else if(!email.value.endsWith(".com")) {
        message = "Email must ends with '.com'"
    } else if(email.value.indexOf('@') == -1) {
        message = "Email must contains '@'"
    } else if(email.value.indexOf('@') != email.value.lastIndexOf('@')) {
        message = "Email must contains only one '@'"
    } else if(email.value.includes('@.') || email.value.includes('.@') || email.value.includes('..')) {
        message = "Email must not contains '@.' or '.@' or '..'"
    } else if(address.value == "") {
        message = "Address must be filled"
    } else if(!agreement.checked) {
        message = "You need to agree with the T&C"
    } else {
        alert("Your order has been added to system!")
    }

    error.textContent = message
})

function isAlphabet(string) {
    string = string.toLowerCase()
    let valid = true
    Array.from(string).forEach(c => {
        if(c < 'a' || c > 'z') {
            valid = false
        }
        if(c == ' ') {
            valid = true
        }
    })
    return valid
}