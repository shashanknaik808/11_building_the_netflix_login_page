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
}