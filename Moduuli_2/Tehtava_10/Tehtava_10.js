'use strict';

let candidate_name, individual_vote;
let candidate_list = [];

function Candidate(name, votes) {
  this.name = name;
  this.votes = votes;
  candidate_list.push(this);
}

// Creating new candidates and input validation
let number_of_candidates = +prompt('How many candidates are there?');
while (isNaN(number_of_candidates)) {
  number_of_candidates = +prompt('How many candidates are there?');
}

// Creating Candidate-objects based on user submitted candidate names
for (let i = 1; i <= number_of_candidates; i++) {
  candidate_name = prompt(`Enter name for candidate ${i}`);
  new Candidate(candidate_name.toLowerCase().trim(), 0);
}

// Creating enough 'voting tickets' and input validation
let number_of_voters = +prompt('How many voters are there?');
while (isNaN(number_of_voters)) {
  number_of_voters = +prompt('How many voters are there?');
}

// giving instructions to the voter
alert('Only enter the first name of the candidate to the voting ticket. All incorrect tickets will be nullified');

// Giving one vote ticket per voter
for (let j = 0; j < number_of_voters; j++) {
  individual_vote = prompt(`Vote Ticket - Enter only candidates name!`);

  // Iterating over the list to match voting ticket to candidate.
  for (let candidate of candidate_list) {
    if (candidate.name === individual_vote.toLowerCase().trim()) {
      candidate.votes++;
      break;
    }
  }
}

// rearranging voting results: most-to-least votes
candidate_list.sort((a, b) => {
  return b.votes - a.votes;
});

// Check for draw
for (let candidate of candidate_list) {
  if (candidate_list[0].votes === candidate_list[1].votes) {
    console.log(`The voting is a draw`);
  } else {
    console.log(`The winner is ${candidate_list[0].name} with ${candidate_list[0].votes} votes!`);
  }
}

//Printing all the results
console.log('Results: ');
candidate_list.forEach((candidate) => {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
});

