  
//selecting all required elements
const qStart = qSel('.qStart button');
const qInfo = qSel('.qInfo');
const qExit = qInfo.querySelector('.qBtns .quit');
const qContnue = qInfo.querySelector('.qBtns .restart');
const qBox = qSel('.qBox');
const qResult = qSel('.qResult');
const qOptions = qSel('.qOptions');
const time_line = qSel('.qHead .time_line');
const timeText = qSel('.timer .qTimeL');
const timeCount = qSel('.timer .qClock');

// if startQuiz button clicked
qStart.onclick = () => {
  qInfo.classList.add("activeInfo"); //show info box
  tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/welcomestranger.mp3");
};

// if exitQuiz button clicked
qExit.onclick = () => {
  qInfo.classList.remove("activeInfo"); //hide info box
  tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/click.mp3");
};

// if continueQuiz button clicked
qContnue.onclick = () => {
  qInfo.classList.remove("activeInfo"); //hide info box
  qBox.classList.add("activeQuiz"); //show quiz box
  showQuetions(startQ); //calling showQestions function
  queCounter(0); //passing 1 parameter to queCounter
  startTimer(qTime); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
  tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/click.mp3");
};

let timeValue = qTime;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = qResult.querySelector(".qBtns .restart");
const quit_quiz = qResult.querySelector(".qBtns .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
  qBox.classList.add("activeQuiz"); //show quiz box
  qResult.classList.remove("activeResult"); //hide result box
  timeValue = qTime;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  next_btn.classList.remove("show"); //hide the next button
  tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/click.mp3");
};

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
  tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/click.mp3");
};

const next_btn = qSel(".qFoot .next_btn");
const bottom_ques_counter = qSel(".qFoot .qTotal");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/click.mp3");
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};

// getting questions and options from array
function showQuetions(index) {
  const qQues = qSel(".qQues");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  qQues.innerHTML = que_tag; //adding new span tag inside que_tag
  qOptions.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = qOptions.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag =
  '<div class="q-icon tick"><svg class="line" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div>';
let crossIconTag =
  '<div class="q-icon cross"><svg class="line" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = qOptions.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    toastNotif("Correct Answer");
    tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/success.mp3");
    //toastNotif("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    toastNotif("Wrong Answer");
    tSound("https://cdn.jsdelivr.net/gh/sharestudy01/functions@internal/audio/quiz/wrong-buzzer.mp3");

    for (i = 0; i < allOptions; i++) {
      if (qOptions.children[i].textContent == correcAns) {
        //if there is an option which is matched to an array answer
        qOptions.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        qOptions.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        //toastNotif("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    qOptions.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  qInfo.classList.remove("activeInfo"); //hide info box
  qBox.classList.remove("activeQuiz"); //hide quiz box
  qResult.classList.add("activeResult"); //show result box
  const scoreText = qResult.querySelector(".qScore");
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<p>"+ hScore +"<b>" +
      userScore +
      " / " +
      questions.length +
      "</b>  🎉🎉🎉</p>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside qScore
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<p>"+ mScore +"<b>" +
      userScore +
      " / " +
      questions.length +
      "</b></p>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<p>"+ lScore +"<b>" +
      userScore +
      " / " +
      questions.length +
      "</b></p>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off"; //change the time text to time off
      const allOptions = qOptions.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (qOptions.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          qOptions.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          qOptions.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log();
          toastNotif("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        qOptions.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}
  
  function startTimerLine() {
  var width = 1;
  var counterLine = setInterval(timer, qPbar);
  function  timer() {
    if (width >= 100) {
      clearInterval(counterLine);
    } else {
      width++; 
      time_line.style.width = width + '%'; 
    }
  }
}
  
  

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}
