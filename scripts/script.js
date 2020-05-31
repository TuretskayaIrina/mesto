
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseEdite = document.querySelector('.popup__edite-close');
const popupButtonCloseAdd = document.querySelector('.popup__add-close');
const popupButtonClosePicture = document.querySelector('.popup__picture-close');
const buttonAdd = document.querySelector('.profile__button-add');
const popup = document.querySelector('.popup');
const popupEdite = document.querySelector('.popup-edite');
const popupAdd = document.querySelector('.popup-add');
const popupPicture = document.querySelector('.popup-picture');
const formCreateCard = popupAdd.querySelector('form');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_profession');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');
const placeName = document.querySelector('.elements__name');
const placeImg = document.querySelector('.elements__img');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const cardContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-template');

//открытие - закрытие попапов
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

//открытие попапа - редактирование профиля
function showPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupEdite);
}

//сохранить изменения в профиле
function popupEditSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popupEdite);
}

//массив дефолтных карточек
const initialCards = [
  {
      name: 'Владивосток',
      link: 'https://images.unsplash.com/photo-1587637885131-8b08567433d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
  },
  {
      name: 'Санкт-Петербург',
      link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1220&q=80'
  },
  {
      name: 'Норвегия',
      link: 'https://images.unsplash.com/photo-1518125790914-39f9ed92cb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1211&q=80'
  },
  {
      name: 'Прага',
      link: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
      name: 'Турция',
      link: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
      name: 'Черногория',
      link: 'https://images.unsplash.com/photo-1574705357737-3410a1967704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
  }
];

//функция для лайков
function toggleLikeActive(evt) {
  evt.target.classList.toggle("elements__like_active");
}

// удаление карточки и слушателей
function deleteClickHandler(evt) {
  const cardElement = evt.target.closest('.elements__place');
  evt.target.removeEventListener('click', deleteClickHandler);
  cardElement.remove();
}

//шаблон создания карточек
function createCard (name, link){
  //клонировали шаблон
  const cardElement = cardTemplate.content.cloneNode(true);
  //добавили лайк
  const buttonLike  = cardElement.querySelector('.elements__like');
  //добавили удаление
  const buttonDelete = cardElement.querySelector('.elements__delete');
  //добавили картинку
  cardElement.querySelector('.elements__img').src = link;
  cardElement.querySelector('.elements__img').alt = name;
  //название места
  cardElement.querySelector('.elements__name').textContent = name;
  // поставить лайк
  buttonLike.addEventListener('click', toggleLikeActive);
  //удалить
  buttonDelete.addEventListener('click', deleteClickHandler);
  //открыть в полном размере
  cardElement.querySelector('.elements__img').addEventListener('click', showPopupPicture);

  return cardElement;
}

//функция добавления карточек
function addCardToContainer(card){
  cardContainer.prepend(card);
}

// отобразить дефолтные карточки
function renderInitialCards() {
  initialCards.forEach(({name, link}) => addCardToContainer(createCard(name, link)));
}

renderInitialCards();

//открытие попапа - добавления карточки
function showPopupAdd() {
  formCreateCard.reset();
  togglePopup(popupAdd);
}

//добавление новых карточек
function popupAddSubmitHandler (evt) {
  evt.preventDefault();
  togglePopup(popupAdd);
  addCardToContainer(createCard (placeInput.value, linkInput.value));
  formCreateCard.reset();
}

//открытие попапа - просмотр изображения
function showPopupPicture(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  togglePopup(popupPicture);
}

//слушатели для попапа - просмотр изображения
popupButtonClosePicture.addEventListener('click', () => togglePopup(popupPicture));

//слушатели для попапа - редактирование профиля
profileButtonEdit.addEventListener('click', showPopupEdit);
popupButtonCloseEdite.addEventListener('click', () => togglePopup(popupEdite));
popupEdite.addEventListener('submit', popupEditSubmitHandler);

//слушатели для попапа - добавления карточек
buttonAdd.addEventListener('click', showPopupAdd);
popupButtonCloseAdd.addEventListener('click', () => togglePopup(popupAdd));
popupAdd.addEventListener('submit', popupAddSubmitHandler);
