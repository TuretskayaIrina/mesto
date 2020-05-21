
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseEdite = document.querySelector('.popup__edite-close');
const popupButtonCloseAdd = document.querySelector('.popup__add-close');
const buttonAdd = document.querySelector('.profile__button-add');
const popup = document.querySelector('.popup');
const popupEdite = document.querySelector('.popup-edite');
const popupAdd = document.querySelector('.popup-add');
const formCreateCard = popupAdd.querySelector('form');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');

let placeInput = document.querySelector('.popup__input_place');
let linkInput = document.querySelector('.popup__input_link');
let placeName = document.querySelector('.elements__name');
let placeImg = document.querySelector('.elements__img');

//открытие - закрытие попапов
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

//открытие попапа - редактирование профиля
function showPopupEdite() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupEdite);
}

//сохранить изменения в профиле
function popupEditSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popup);
}

//слушатели для попапа - редактирование профиля
profileButtonEdit.addEventListener('click', showPopupEdite);
popupButtonCloseEdite.addEventListener('click', () => togglePopup(popupEdite));
popupEdite.addEventListener('submit', popupEditSubmitHandler);

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

//шаблон создания карточек
function createCard (item){
  //секция куда добавлять карточки
  const cardContainer = document.querySelector('.elements');
  //получили шаблон
  const cardTemplate = document.querySelector('.elements-template');
  //клонировали шаблон
  const cardElement = cardTemplate.content.cloneNode(true);
  //добавили лайк
  const buttonLike  = cardElement.querySelector('.elements__like');
  //добавили удаление
  const buttonDelete = cardElement.querySelector('.elements__delete');
  //добавили картинку
  cardElement.querySelector('.elements__img').src = item.link;
  cardElement.querySelector('.elements__img').alt = item.name;
  //название места
  cardElement.querySelector('.elements__name').textContent = item.name;

  // поставить лайк
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle("elements__like_active");
    console.log('working');
  });
  //добавили в начало массива
  cardContainer.prepend(cardElement);
}

//пройдись по массиву и выполни функцию для каждого элемента
initialCards.forEach(createCard);

//открытие попапа - добавления карточки
function showPopupAdd() {
  togglePopup(popupAdd);
  formCreateCard.reset();
}

//добавление новых карточек
function popupAddSubmitHandler (evt) {
  evt.preventDefault();
  togglePopup(popupAdd);

  //почему этот вариант не работет?
  //createCard(linkInput.value, placeInput.value);

  //шаблон function createCard
  const cardContainer = document.querySelector('.elements');
  const cardTemplate = document.querySelector('.elements-template');
  const cardElement = cardTemplate.content.cloneNode(true);
  const buttonLike  = cardElement.querySelector('.elements__like');
  const buttonDelete = cardElement.querySelector('.elements__delete');

  //добавили картинку
  cardElement.querySelector('.elements__img').src = linkInput.value;
  cardElement.querySelector('.elements__img').alt = placeInput.value;
  //название места
  cardElement.querySelector('.elements__name').textContent = placeInput.value;

  // поставить лайк
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle("elements__like_active");
    console.log('working');
  });

  //добавили в начало массива
  cardContainer.prepend(cardElement);

  formCreateCard.reset();
}

//слушатели для попапа - добавления карточек
buttonAdd.addEventListener('click', showPopupAdd);
popupButtonCloseAdd.addEventListener('click', () => togglePopup(popupAdd));
popupAdd.addEventListener('submit', popupAddSubmitHandler);
