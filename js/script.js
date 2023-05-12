// validate the inputs
const inputs = document.querySelectorAll('form .field input');

// listener for the inputs
inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput);
});


function validateInput(e) {
    //console.log(e.target.id);
    const states = ['valid', 'not-valid'];

    let classes;

    if (e.target.value.length === 0) {

        classes = states[1];
    } else {
        classes = states[0];
    }

    //   console.log(classes);


    // generate or remove the alert
    if (classes === 'not-valid') {
        const errorDiv = document.createElement('div');
        errorDiv.appendChild(document.createTextNode('This field is mandatory'));
        errorDiv.classList.add('alert');

        console.log(errorDiv);

        // inject the error inside the dom, before the next field
        e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
    }
}
