var resultArray;
var selectedElement;
var waitingForInput = false; //init waiting i/p is false when key pressed it get true and get value
var selectedIndex;
var answerAttemptInRow = 0;
var numberGuessedCorrect =0;
var attempt =1;



function generateRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + min).toString();
    resultArray = randomNumber.split("");
    console.log(resultArray);
}
generateRandomNumber(1111, 9999);


function clicked(element, index) {
    selectedElement = element;
    element.target.classList.add("wait");
    waitingForInput = true;
    selectedIndex = index;
}


function detectKeyPress(event) {
    console.log(event);
    if (waitingForInput == true) {
        if (event.keyCode >= 96 && event.keyCode <= 105) {
            selectedElement.target.innerHTML = event.key;
            waitingForInput = false;
            selectedElement.target.classList.remove("wait");
            checkNumberExist(event.key, selectedIndex);
            answerAttemptInRow++;
            if(answerAttemptInRow == 4)
            {
              attempt++;
              if(numberGuessedCorrect != 4)
              {
                  generateCircle();
              }
              numberGuessedCorrect =0;
              answerAttemptInRow =0;
            }
        }
    }
}

function checkNumberExist(number, index) {
    var isNumberPresent = resultArray.indexOf(number);
    console.log(isNumberPresent);
    if (isNumberPresent !== -1) {
        if (isNumberPresent == selectedIndex) {
            console.log("number exist in correct place");
            selectedElement.target.classList.add("success");
            numberGuessedCorrect++;
            if(numberGuessedCorrect == 4)
            {
                console.log("you Won");
            }
        }
        else {
            console.log("number exist,but in another place");
            selectedElement.target.classList.add("existButFailure");
        }
    }
    else {
        console.log("number not exist");
        selectedElement.target.classList.add("failure");
    }
}
function generateCircle()
{
    document.getElementById("content").innerHTML+=`<div class="row text center ">
    <div class="col-lg-3"></div>
    <div class="col-lg-1 box-grid"  onclick="clicked(event,'0')">
    </div>
    <div class="col-lg-1 box-grid" onclick="clicked(event,'1')">
    </div>
    <div class="col-lg-1 box-grid" onclick="clicked(event,'2')">
    </div>
    <div class="col-lg-1 box-grid" onclick="clicked(event,'3')">
    </div>
     </div>`;
}
generateCircle();










