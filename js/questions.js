const myQuestions = [
  {
    title: "Question 1 - Running Late",
    question: "You receive a call at 8:30 AM the day before your meeting tagged for Thursday, October 2nd at 10:00 AM and are told it is a two minute ride to the ninth floor from the lobby.  You exit your Uber eleven minutes late and you check-in the lobby at the front desk five minutes after exiting the Uber.  You take the elevator to the conference room where the meeting is being held.  How late are you to the meeting?",
    background: "<img src='https://deonec.github.io/hysp.menu/img/bg_slide1.jpg'>",
    answers: {
      a: "13 minutes.",
      b: "18 minutes.",
      c: "20 minutes."
    },
    correctAnswer: "b",
    correctAnswerText: "CORRECT.<p>You arrived at 10:00 AM, exited the Uber 11 minutes late, checked-in at the front desk 5 minutes after 10:11 AM, walked into the elevator at 10:16 AM to ride to the ninth floor, and arrived to the meeting at 10:18 AM.</p>",
    falseAnswerText: "INCORRECT.<p>Hint: How long is the elevator ride?</p>"
  },
  {
    title: "Question 2 - Scheduled Meeting",
    question: "What time did you arrive to the meeting?",
    background: "<img src='https://deonec.github.io/hysp.menu/img/bg_slide2.jpg'>",
    answers: {
      a: "10:13 AM.",
      b: "10:18 AM.",
      c: "10:20 AM."
    },
    correctAnswer: "b",
    correctAnswerText: "YES, CORRECT.<p>10:18 AM is the time arrived to the meeting.</p>",
    falseAnswerText: "WRONG AGAIN.<p>10:18 AM is the time of arrival.</p>"
  },
  {
    title: "Question 3 - Elevator Ride",
    question: "What floor is the scheduled meeting?",
    background: "<img src='https://deonec.github.io/hysp.menu/img/bg_slide3.jpg'>",
    answers: {
      a: "Floor 2.",
      b: "Floor 9.",
      c: "Floor 10."
    },
    correctAnswer: "b",
    correctAnswerText: "YEP! THAT IS CORRECT.<p>The scheduled meeting was on the ninth floor.</p>",
    falseAnswerText: "UM, THAT IS NOT CORRECT!<p>It is the ninth floor.</p>"
  },
  {
    title: "Question 4 - Meeting Location",
    question: "Where was the meeting location?",
    background: "<img src='https://deonec.github.io/hysp.menu/img/bg_slide4.jpg'>",
    answers: {
      a: "The Uber",
      b: "The Lobby",
      c: "Conference Room"
    },
    correctAnswer: "c",
    correctAnswerText: "AFFIRMATIVE!<p>The scheduled meeting was in the conference room.</p>",
    falseAnswerText: "NEGATIVE!<p>Hint:  What room is on the ninth floor?</p>"
  },
  {
    title: "Question 5 - Phone Call",
    question: "What date did you receive the phone call?<p>Select your answer then Confirm.</p>",
    background: "<img src='https://deonec.github.io/hysp.menu/img/bg_slide5.gif'>",
    answers: {
      a: "10/01",
      b: "10/02",
      c: "10/03"
    },
    correctAnswer: "a",
    correctAnswerText: "CORRECT!<p>The phone call was made the day prior to the meeting on Wednesday, October 1st.</p>",
    falseAnswerText: "TRY AGAIN!<p>Hint:  What is the day before Thursday?</p>"
  }
];