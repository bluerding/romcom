var currentCover;
var title = document.querySelector('.cover-title')
var cover = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var viewForm = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

//Button Variables
var randomCoverButton = document.querySelector('.random-cover-button')
var homeButton = document.querySelector(".home-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var makeCoverButton = document.querySelector(".make-new-button")
var viewSavedButton = document.querySelector(".view-saved-button")

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandom);
window.addEventListener("load", generateRandom)
makeCoverButton.addEventListener("click", viewMakeCover)
viewSavedButton.addEventListener("click", viewSavedCovers)
homeButton.addEventListener("click", goHome)

//  Create your event handlers and other functions here 👇
function generateRandom() {
  var titleIndex = getRandomIndex(titles)
  var coverIndex = getRandomIndex(covers)
  var taglineOneIndex = getRandomIndex(descriptors)
  var taglineTwoIndex = getRandomIndex(descriptors)
  
  currentCover = new Cover (covers[coverIndex], titles[titleIndex], descriptors[taglineOneIndex], descriptors[taglineTwoIndex])

  title.innerText = titles[titleIndex]
  cover.src =covers[coverIndex]
  taglineOne.innerText = descriptors[taglineOneIndex]
  taglineTwo.innerText = descriptors[taglineTwoIndex]
} 

function viewMakeCover() {
  viewForm.classList.remove("hidden")
  homeView.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
}
function viewSavedCovers() {
  homeView.classList.add("hidden")
  homeButton.classList.remove("hidden")
  randomCoverButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  savedView.classList.remove("hidden")
}

function goHome() {
  homeView.classList.remove("hidden")
  viewSavedButton.classList.remove("hidden")
  randomCoverButton.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
  viewForm.classList.add("hidden")
  homeButton.classList.add("hidden")
  savedView.classList.remove("hidden")
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}




