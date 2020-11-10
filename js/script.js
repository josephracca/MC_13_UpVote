let voteCount = document.getElementById('voteCount');

let upVotebtn = document.getElementById('upVotebtn');
let downvotebtn = document.getElementById('downvotebtn');

let votePlural = document.getElementById('votePlural');

let totalVotes = 0;

//==================TOGGLES INPUT FIELD ON/FF==============================

let inputToggle = document.getElementById('inputToggle');

inputToggle.addEventListener('click', function () {
  if (inputField.classList.contains('d-none')) {
    inputField.classList.remove('d-none');
    inputToggle.innerText = 'CANCEL';
  } else {
    inputField.classList.add('d-none');
    inputToggle.innerText = 'COMMENT';
  }
});

//==================CONTROLS VOTE COUNT==============================

upVotebtn.addEventListener('click', function () {
  if (totalVotes < 100) {
    totalVotes++;
    voteCount.innerText = totalVotes;
    downvotebtn.classList.add = 'd-none';
  } else {
    voteCount.innerText = totalVotes;
  }
  voteTextDisplay();
});

downvotebtn.addEventListener('click', function () {
  if (totalVotes > 0) {
    totalVotes--;
    voteCount.innerText = totalVotes;
  } else {
    alert('Cannot Down Vote Less than 0');
  }
  voteTextDisplay();
});

//==================CONTROLS PLURALITY==============================

voteTextDisplay = function () {
  if (totalVotes == 1) {
    votePlural.innerText = 'VOTE';
  } else if (totalVotes == 100) {
    votePlural.innerText = 'VOTES (MAX)';
  } else {
    votePlural.innerText = 'VOTES';
  }
}

//==================CONTROLS COMMENT VISIBILITY==============================

let comment = document.getElementById('comment');
let commentToggle = document.getElementById('commentToggle');

commentToggle.addEventListener('click', function () {
  if (comment.classList.contains('d-none')) {
    comment.classList.remove('d-none');
    commentToggle.innerText = 'HIDE COMMENTS';
  } else {
    comment.classList.add('d-none');
    commentToggle.innerText = 'SHOW COMMENTS';
  }
});