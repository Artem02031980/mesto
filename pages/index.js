const openPopupEdit = document.querySelector('.button_type_edit')
const closePopup = document.querySelector('.button_form_close')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')

const authorName = document.querySelector('.author__name')
const authorBiz = document.querySelector('.author__biz')

const nameInput = document.querySelector('#add-one')
const jobInput = document.querySelector('#add-two')

const formElement = document.querySelector('.form_edit-profile')

function togglePopup () {
  overlay.classList.toggle('overlay_opened')
  popup.classList.toggle('popup_opened')

  if(overlay.classList.contains('overlay_opened') && popup.classList.contains('popup_opened')){
    nameInput.value = authorName.textContent
    jobInput.value = authorBiz.textContent
  }
}
openPopupEdit.addEventListener('click', togglePopup)
closePopup.addEventListener('click', togglePopup)

function formSubmitHandler (evt) {
  evt.preventDefault();
  authorName.textContent = nameInput.value
  authorBiz.textContent = jobInput.value
  overlay.classList.remove('overlay_opened')
  popup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', formSubmitHandler);



