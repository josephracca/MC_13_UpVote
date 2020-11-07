// alert('Hello!');

let voteCount1 = document.getElementById("voteCount1");
let votebtn1 = document.getElementById("votebtn1");
let votePlural1 = document.getElementById("votePlural1");

let totalVotes1 = 0;
let clicked1 = false;

votebtn1.addEventListener("click", function () {
  //    first click will set bool to true

  if (clicked1 == false) {
    clicked1 = true;
    totalVotes1++;
    voteCount1.innerText = totalVotes1;
    votebtn1.classList = "red";
  } else {
    clicked1 = false;
    totalVotes1--;
    voteCount1.innerText = totalVotes1;
    votebtn1.classList = "gray";
  }

  //    function will do the following: should be + or -
  //    totalVotes1++;

  if (totalVotes1 == 1) {
    votePlural1.innerText = "VOTE";
  } else {
    votePlural1.innerText = "VOTES";
  }
});

let voteCount2 = document.getElementById("voteCount2");
let votebtn2 = document.getElementById("votebtn2");
let votePlural2 = document.getElementById("votePlural2");

let totalVotes2 = 0;
let clicked2 = false;

votebtn2.addEventListener("click", function () {
  //    first click will set bool to true

  if (clicked2 == false) {
    clicked2 = true;
    totalVotes2++;
    voteCount2.innerText = totalVotes2;
    votebtn2.classList = "red";
  } else {
    clicked2 = false;
    totalVotes2--;
    voteCount2.innerText = totalVotes2;
    votebtn2.classList = "gray";
  }

  //    function will do the following: should be + or -
  //    totalVotes2++;

  if (totalVotes2 == 1) {
    votePlural2.innerText = "VOTE";
  } else {
    votePlural2.innerText = "VOTES";
  }
});

let comment1 = document.getElementById('comment1');
let commentToggle1 = document.getElementById('commentToggle1')

commentToggle1.addEventListener

('click', function(){
//we want to target comment1 or comment div
// let showComments = true;
if(comment1.classList.contains('d-none')){
    comment1.classList.remove('d-none');
    commentToggle1.innerText = "HIDE COMMENTS";
    
}
else{
    //remove d-none
    comment1.classList.add('d-none');
    commentToggle1.innerText = "SHOW COMMENTS";
}

});


//  NOTE: if this were a real website, we would want to send that information to the main server so that it could tally up the counts, but only once per unique user

//  if and when a new question is asked, javascript would assign that button id as well as the ids for the voteCount and display below
