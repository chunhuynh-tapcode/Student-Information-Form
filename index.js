import { createStore } from 'http://cdn.skypack.dev/redux';

const initialState = '';

//Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SEND':
            return state + action.data
        default:
            return state
    }
}

// Data form input
const stuImg = document.getElementById('student-image')
const stuNumb = document.getElementById('student-number-input')
const stuFName = document.getElementById('first-name')
const stuLName = document.getElementById('last-name')
const stuBirth = document.getElementById('student-birth')
const stuGender = document.getElementById('student-gender')
const stuSocial = document.getElementById('student-social')
const stuPhone = document.getElementById('student-phone')
const stuEmail = document.getElementById('student-email')
const stuAddress = document.getElementById('student-address')
const stuBarcode = document.getElementById('student-barcode')
const stuMemo = document.getElementById('student-memo')

let stuImgData = '';
stuImg.addEventListener('input', function(e) {
    stuImgData = e.target.value
});
let stuNumbData = '';
stuNumb.addEventListener('input', function(e) {
    stuNumbData = e.target.value
});
let stuFNameData = '';
stuFName.addEventListener('input', function(e) {
    stuFNameData = e.target.value
});
let stuLNameData = '';
stuLName.addEventListener('input', function(e) {
    stuLNameData = e.target.value
});
let stuBirthData = '';
stuBirth.addEventListener('input', function(e) {
    stuBirthData = e.target.value
});
let stuGenderData = '';
stuGender.addEventListener('select', function(e) {
    stuGenderData = e.target.value
});
let stuSocialData = '';
stuSocial.addEventListener('input', function(e) {
    stuSocialData = e.target.value
});
let stuPhoneData = '';
stuPhone.addEventListener('input', function(e) {
    stuPhoneData = e.target.value
});
let stuEmailData = '';
stuEmail.addEventListener('input', function(e) {
    stuEmailData = e.target.value
});
let stuAddressData = '';
stuAddress.addEventListener('input', function(e) {
    stuAddressData = e.target.value
});
let stuBarcodeData = '';
stuBarcode.addEventListener('input', function(e) {
    stuBarcodeData = e.target.value
});
let stuMemoData = '';
stuMemo.addEventListener('textarea', function(e) {
    stuMemoData = e.target.value
});


// Store
const store = window.store = createStore(reducer);

// Action
function actionSend(data) {
    return {
        type: 'SEND',
        data
    }
}

// DOM events
const send = document.querySelector('#send')

// Event handlers
send.onclick = () => {
    store.dispatch(actionSend(stuImgData))
    store.dispatch(actionSend(stuNumbData))
    store.dispatch(actionSend(stuFNameData))
    store.dispatch(actionSend(stuLNameData))
    store.dispatch(actionSend(stuBirthData))
    store.dispatch(actionSend(stuGenderData))
    store.dispatch(actionSend(stuSocialData))
    store.dispatch(actionSend(stuPhoneData))
    store.dispatch(actionSend(stuEmailData))
    store.dispatch(actionSend(stuAddressData))
    store.dispatch(actionSend(stuBarcodeData))
    store.dispatch(actionSend(stuMemoData))
}

// Listener
store.subscribe(() => {
    render();
})

// Render
function render() {
    const output = document.querySelector('#student-info');
    output.innerText = store.getState();
}

render();