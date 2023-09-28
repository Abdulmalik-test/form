const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const errMessage = document.querySelector('.message');
const form = document.querySelector('form');
const element = document.getElementById('check');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    errMessage.innerHTML = ""

    const text = form.elements['text'].value;
    const email = form.elements['email'].value;
    const pass = form.elements['password'].value;

    try {
        if(text === "") throw "please input a name !!!";
        if(email === "") throw "please input an email !!!";
        if(pass === "") throw "please input a password !!!";
        if (pass < 4) throw "password too weak !!!"
    } catch (error) {
        errMessage.textContent += error
    }
});

inputs.forEach((item) => {
    item.addEventListener("input", (e) => {
        e.preventDefault();
        errMessage.textContent = ""
    });

    item.addEventListener('focusin', (border) => {
        border.currentTarget.classList.add('border')
    });

    item.addEventListener('focusout', (border) => {
        border.currentTarget.classList.remove('border')
    })
})

const pass = document.querySelector('#pass');

element.addEventListener('click', (e) => {
    e.preventDefault();
    if (pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
})