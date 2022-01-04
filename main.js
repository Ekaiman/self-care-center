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

var usedAffirmations = [];

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

// >>>QUERY SELECTORS<<<
var messageButton = document.querySelector(".recieve-message");
var displayMessageBox = document.getElementById("image-box");
var image = document.querySelector(".meditate");
var deleteButton = document.querySelector('.delete');
var message = document.querySelector('.message');
var affirmation = document.getElementById('affirmation');
var mantra = document.getElementById('mantra');
var deletedMessage = document.getElementById('deleted-message')
var clearButton = document.querySelector('.clear-message-button')

//>>>EVENT LISTENERS<<<
messageButton.addEventListener("click", displayMessage)
messageButton.addEventListener("click", deployDeleteButton);
deleteButton.addEventListener("click", showDeletedMessage)
clearButton.addEventListener("click", clearMessage)
messageButton.addEventListener("click", noRepeats)

//>>> FUNCTIONS <<<
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function hide(item) {
  item.classList.add("hidden")
}

function show(item) {
  item.classList.remove("hidden")
}



// >>> GLOBAL VARIABLES<<<
var currentMessage


//>>> Random Message <<<
function displayMessage() {
  event.preventDefault(event);
  if (affirmation.checked || mantra.checked){
    if (affirmation.checked) {
      setMessage(affirmations)
    } else if (mantra.checked) {
      setMessage(mantras)
    }
    hide(image)
    show(message)
    show(clearButton)
  }
}

function setMessage(affOrMantra) {
  if (affOrMantra.length > 0) {
    currentMessage= affOrMantra[getRandomIndex(affOrMantra)]
    show(deleteButton)
  } else if (affOrMantra.length === 0) {
    hide(deleteButton)
    currentMessage = 'Oops! None of these left!'
  }
    message.innerText = currentMessage
}

//>>> Delete Message <<<
function deployDeleteButton() {
  if (affirmation.checked || mantra.checked) {
    if (affirmations.length > 0 && mantras.length > 0)
    show(deleteButton)
  }
}

function showDeletedMessage() {
  event.preventDefault(event)
  if (affirmation.checked || mantra.checked){
    if (affirmation.checked) {
      removeFromArray(affirmations)
    } else if (mantra.checked) {
      removeFromArray(mantras)
  }
}
  hide(message)
  hide(clearButton)
  show(deletedMessage)
  setTimeout('hide(deletedMessage)', 1500)
  show(image)
  hide(deleteButton)
}


function removeFromArray(mantraOrAff) {
  for ( var i = 0; i < mantraOrAff.length; i++) {
    if (mantraOrAff[i] === currentMessage){
      mantraOrAff.splice(i, 1);
    }
  }
}

//>>>Clear Message<<<
function clearMessage() {
  event.preventDefault(event);
  hide(message)
  show(image)
  hide(clearButton)
  hide(deleteButton)
}

// >>>No Repeats<<<
function noRepeats(){
  if (affirmation.checked || mantra.checked) {
    if (affirmation.checked) {
      debugger
      }
      for (var i = 0; i < affirmations.length; i++) {
        if (affirmations[i] === currentMessage) {
        affirmations.splice(i, 1);
        usedAffirmations.push(currentMessage);
        if (affirmation.length === 0) {
          currentMessage = "You've ran out of original messaged, you will now see repeats"
          affirmations.push(usedAffirmations)
          usedAffirmations = []

        }
      }
    }
  }
}

// function noRepeats() {
//   for (var i = 0; i < mantraOrAff.length; i++) {
//     if (mantraOrAff[i] === currentMessage) {
//       mantraOrAff.splice(i, 0)
//     }
//   }
// }
//
// function noRepeaters() {
//   if (affirmation.checked || mantra.checked) {
//     if (affirmation.checked)
//   }
// }
// function deleteMessage() {
  //   event.preventDefault(event)
  //   for (var i = 0; i < affirmations.length; i ++) {
    //     if (affirmations[i] === currentMessage) {
      //       affirmations.splice(i, 1);
      //     }
      //   }
      //   for (var i = 0; i < mantras.length; i ++) {
        //     if (mantras[i] === currentMessage) {
          //       mantras.splice(i, 1)
          //     }
          //   }



// function setAffirmation() {
  //   if (affirmations.length > 0) {
    //     currentAffirmation = affirmations[getRandomIndex(affirmations)]
    //   } else if (affirmations.length === 0) {
      //     currentAffirmation = "You are out of affirmations"
      //   }
      //     message.innerText = currentAffirmation
      // }
      //
      // function setMantra() {
        //   if (mantras.length > 0) {
          //     currentMantra = mantras[getRandomIndex(mantras)]
          //   } else if (mantras.length === 0) {
            //     currentMantra = "You are out of mantras"
            //   }
            //     message.innerText = currentMantra
            // }
