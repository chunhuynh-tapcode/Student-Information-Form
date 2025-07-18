import { createStore } from 'http://cdn.skypack.dev/redux';

const initialState = {
    img: '',
    number: '',
    firstName: '',
    lastName: '',
    birth: '',
    gender: '',
    social: '',
    phone: '',
    email: '',
    address: '',
    barcode: '',
    memo: ''
};

//Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SEND':
            return {
                ...state,
                [action.field]: action.data
            }
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
stuImg.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        stuImgData = URL.createObjectURL(file);
    }
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
stuGender.addEventListener('change', function(e) {
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
stuMemo.addEventListener('change', function(e) {
    stuMemoData = e.target.value
});


// Store
const store = window.store = createStore(reducer);

// Action
function actionSend(field, data) {
    return {
        type: 'SEND',
        field,
        data
    }
}

// DOM events
const send = document.querySelector('#send')

// Event handlers
send.onclick = () => {
  store.dispatch(actionSend('img', stuImgData));
  store.dispatch(actionSend('number', stuNumbData));
  store.dispatch(actionSend('firstName', stuFNameData));
  store.dispatch(actionSend('lastName', stuLNameData));
  store.dispatch(actionSend('birth', stuBirthData));
  store.dispatch(actionSend('gender', stuGenderData));
  store.dispatch(actionSend('social', stuSocialData));
  store.dispatch(actionSend('phone', stuPhoneData));
  store.dispatch(actionSend('email', stuEmailData));
  store.dispatch(actionSend('address', stuAddressData));
  store.dispatch(actionSend('barcode', stuBarcodeData));
  store.dispatch(actionSend('memo', stuMemoData));
};

// Listener
store.subscribe(() => {
    render();
})

// Render
function render() {
  const state = store.getState();
  const output = document.querySelector('#student-info');
  output.innerHTML = `
    <div>
      <img src="${state.img}" alt="Student Image" width="200" />
      <p><strong>Number:</strong> ${state.number}</p>
      <p><strong>Name:</strong> ${state.firstName} ${state.lastName}</p>
      <p><strong>Birth:</strong> ${state.birth}</p>
      <p><strong>Gender:</strong> ${state.gender}</p>
      <p><strong>Social:</strong> ${state.social}</p>
      <p><strong>Phone:</strong> ${state.phone}</p>
      <p><strong>Email:</strong> ${state.email}</p>
      <p><strong>Address:</strong> ${state.address}</p>
      <p><strong>Barcode:</strong> ${state.barcode}</p>
      <p><strong>Memo:</strong> ${state.memo}</p>
    </div>
  `;
}

render();