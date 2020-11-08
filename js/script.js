let voteCount1 = document.getElementById("voteCount1");
let votebtn1 = document.getElementById("votebtn1");
let votePlural1 = document.getElementById("votePlural1");

let totalVotes1 = 0;
let clicked1 = false;

let voteCount2 = document.getElementById("voteCount2");
let votebtn2 = document.getElementById("votebtn2");
let downvotebtn = document.getElementById("downvotebtn");
let votePlural2 = document.getElementById("votePlural2");

let totalVotes2 = 0;
let clicked2 = false;

let inputToggle = document.getElementById("inputToggle");

inputToggle.addEventListener("click", function () {
  if (inputField.classList.contains("d-none")) {
    inputField.classList.remove("d-none");
    inputToggle.innerText = "CANCEL";
  } else {
    inputField.classList.add("d-none");
    inputToggle.innerText = "COMMENT";
  }
});

downvotebtn.addEventListener("click", function () {
  if (totalVotes2 > 0) {
    totalVotes2--;
    voteCount2.innerText = totalVotes2;
    downvotebtn.classList.add = "red";
  } else {
  }
  voteTextDisplay();
});

votebtn2.addEventListener("click", function () {
  if (totalVotes2 < 100) {
    totalVotes2++;
    voteCount2.innerText = totalVotes2;
    votebtn2.classList = "green";
    downvotebtn.classList.add = "d-none";
  } else {
    voteCount2.innerText = totalVotes2;
  }
  voteTextDisplay();
});

voteTextDisplay = function () {
  if (totalVotes2 == 1) {
    votePlural2.innerText = "VOTE";
  } else if (totalVotes2 == 100) {
    votePlural2.innerText = "VOTES (MAX)";
  } else {
    votePlural2.innerText = "VOTES";
  }
}

let comment1 = document.getElementById("comment1");
let commentToggle1 = document.getElementById("commentToggle1");

commentToggle1.addEventListener("click", function () {
  //we want to target comment1 or comment div
  // let showComments = true;
  if (comment1.classList.contains("d-none")) {
    comment1.classList.remove("d-none");
    commentToggle1.innerText = "HIDE COMMENTS";
  } else {
    //remove d-none
    comment1.classList.add("d-none");
    commentToggle1.innerText = "SHOW COMMENTS";
  }
});

//  NOTE: if this were a real website, we would want to send that information to the main server so that it could tally up the counts, but only once per unique user

//  if and when a new question is asked, javascript would assign that button id as well as the ids for the voteCount and display below
