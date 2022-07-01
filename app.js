const form = document.querySelector('form')
const button = document.querySelector('button')

form.addEventListener('change', e => {
    e.preventDefault()
    console.log('hello')
    const password = String('Jumola').toLowerCase()
    console.log(typeof password)
    const input = form.password.value.toLowerCase().trim()
    console.log(typeof input)

    if (input === password) {
       console.log(input === password)
       button.removeAttribute("disabled", "false")
    }

    form.reset()


})