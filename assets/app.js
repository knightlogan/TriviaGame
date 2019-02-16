// Create a function that creates the start button and initial screen
// $(document).ready(function () {


// Create trivia questions. 
var questions = [{
    ques: "What boxing class is heaviest - flyweight, bantam weight or feather weight?",
    ans: ["flyweight", "bantamweight", "featherweight"],
    name: "weight",
    correct: "featherweight",
    divClass: ".weight"
},
{
    ques: "What boxer made his first title defense in 21 years, in 1995?",
    ans: ["Mike Tyson", "George Foreman", "Evander Holyfield", "Oscar De La Hoya"],
    name: "boxer",
    correct: "George Foreman",
    divClass: ".boxer"
},
{
    ques: "What percentage of Mike Tyson's 1995 earnings came from endorsements?",
    ans: ["100", "35", "0", "12"],
    name: "mike",
    correct: "0",
    divClass: ".mike"
},
{
    ques: "How old was George Foreman when he became the oldest heavyweight champ in history?",
    ans: ["42", "50", "45", "38"],
    name: "george",
    correct: "45",
    divClass: ".george"
},
{
    ques: "What Mexican boxing champ lost for the first time to little known Frankie Randall?",
    ans: ["Oscar De La Hoya", "Julio Cesar Chavez", "Sugar Ray Leonard", "Rocky Marciano"],
    name: "mexican",
    correct: "Julio Cesar Chavez",
    divClass: ".mexican"
},
{
    ques: "How many rounds are in a professional championship boxing match?",
    ans: ["12", "10", "8", "9"],
    name: "rounds",
    correct: "12",
    divClass: ".rounds"
},
{
    ques: "What boxer inspired the story for the famous film Rocky?",
    ans: ["Rocky Marciano", "Sugar Ray Leonard", "Chuck Wepner", "Joe Bugner"],
    name: "rocky",
    correct: "Chuck Wepner",
    divClass: ".boxer"
},

] // end questions object

var labels = ["first", "second", "third", "forth"];

// create a function to start and run the game
var startGame =
    $("#start-btn").on('click', function () {
        $(this).parent().hide();
        $('.container').show();
        countdown(60);
        showQuestion();
    });

// function for displaying questions
var showQuestion = function () {
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(2000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#submit-btn').on('click', function () {
        clearInterval(timer);
        var correctAnswers = 0;
        var wrongAnswers = 0;
        var unAnswered = 0;
    
        // loop through correctArray & radioName to match html elements & answers
        for (var i = 0; i < 10; i++) {
    
            if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
    
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        };
    
        // once submit is clicked...
        // tests
        // stop timer
        countdown();
        // fade out questions
        $('.container').fadeOut(500);
        // show answerScreen
        $('#answerScreen').show();
        // display correctAnswers
        $('#correctScreen').append(correctAnswers);
        // display wrongAnswers
        $('#wrongScreen').append(wrongAnswers);
    })
}; // end countdown


