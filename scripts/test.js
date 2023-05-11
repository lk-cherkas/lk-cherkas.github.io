let answer = document.getElementById('answer');
function answerTest(event) {
    event.preventDefault();
    console.log(event);
    let testAnswer = document.getElementById('testAnswer').value;
    console.log(testAnswer);
}
answer.addEventListener('submit', answerTest);