import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


//console.log(Client.checkForName);

document.addEventListener('DOMContentLoaded', () => {
    alert("I EXIST")
    console.log("CHANGE!!");
})

const updateUI = async() => {
    const request = await fetch('/getData')
    try {
        const data = await request.json()
        document.querySelector('#label').innerHTML = data.label;
        document.querySelector('#code').innerHTML = data.code;
        document.querySelector('#confidence').innerHTML = data.confidence;
    } catch (error) {
        console.log(error)
    }
}

document.querySelector('#dataBtn').addEventListener('click', updateUI);


export {
    checkForName,
    handleSubmit,
}
