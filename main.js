var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
];

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather.",
];
var messageButton = document.querySelector(".recieve-message");
var displayMessageBox = document.querySelector("#image-box")
var image = document.querySelector(".meditate")
var deleteButton = document.querySelector('.delete')
var message = document.querySelector('.message')


messageButton.addEventListener("click", displayMessage);
messageButton.addEventListener("click", deployDeleteButton);
deleteButton.addEventListener("click", deleteMessage)


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function hide(item) {
  item.classList.add("hidden")
}

function show(item) {
  item.classList.remove("hidden")
}

var currentAffirmation
var currentMantra

function displayMessage() {
  event.preventDefault(event);
  currentAffirmation = affirmations[getRandomIndex(affirmations)]
  currentMantra = mantras[getRandomIndex(mantras)]
  if (affirmation.checked || mantra.checked) {
    hide(image)
    show(message)
  }
  if (affirmation.checked) {
    message.innerText = currentAffirmation
  } else if (mantra.checked) {
    message.innerText = currentMantra
  }

}

function deployDeleteButton() {
  if (affirmation.checked || mantra.checked) {
    show(deleteButton)
  }
}

function deleteMessage() {
  event.preventDefault(event)
  if (affirmation.checked) {
    for (var i = 0; i < affirmations.length; i ++) {
      if (affirmations[i] === currentAffirmation) {
        affirmations.splice(i, 1);
      }
    }
  }
  if (mantra.checked) {
    for (var i = 0; i < mantras.length; i ++) {
      if (mantras[i] === currentMantra) {
        mantras.splice(i, 1)
      }
    }
  }
  hide(message)
  alert("Sorry, you won't have to see that message again.")
  show(image)
  hide(deleteButton)
}
