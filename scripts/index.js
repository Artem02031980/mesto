const openPopupEdit = document.querySelector('.author__button-edit')
const closePopup = document.querySelector('.popup__button-close')
const popup = document.querySelector('.popup')

const authorName = document.querySelector('.author__name')
const authorBiz = document.querySelector('.author__biz')

const nameInput = document.querySelector('#add-one')
const jobInput = document.querySelector('#add-two')

const formElement = document.querySelector('.form')

function togglePopup () {
  popup.classList.toggle('popup_opened')

  if(popup.classList.contains('popup_opened')){
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
  togglePopup()
}
formElement.addEventListener('submit', formSubmitHandler);



