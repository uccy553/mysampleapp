var game = prompt("do you want to play a game?")
if (game != "yes") {
    game.quit()
} else {
    console.log("okay let's play")
}

let q1 = prompt("what is the capital of Nigeria?")
if (q1 == "abuja") {
    console.log("correct!")
} else {
    console.log("incorrect! try again")
}