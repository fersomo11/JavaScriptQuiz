function submitAnswers() {
    var nQuestions = 5;
    var score = 0;
    var answers = ["a", "c", "c", "a", "c"];
    
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;


    for (i = 1; i <= nQuestions; i++) {
        if (eval('q' + i) === null ||
            eval('q' + i) === undefined ||
            eval('q' + i) === '') {
            alert('Question ' + i + ' is missing.');
            return false;
        }

        if (eval('q' + i) === answers[i-1]) {
            score++;
        }
    }


    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>' + nQuestions + '</span></hr>';
    
    
    return false;
}