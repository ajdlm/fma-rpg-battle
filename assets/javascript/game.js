$(document).ready(function () {
    var startState = true;

    var yourCharacter = "";

    var currentDefender = "";

    var enemyChoice = false;

    function initiateGame(x) {
        $("#playerCharacter").append("<h3 class='text-center text-white mt-4'>Your Character</h3>");
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#playerCharacter").append($("#" + x + "Card"));
        $("#changingTitle").text("Enemies Available to Attack").removeClass("text-white").addClass("text-danger");
        startState = false;
        yourCharacter = x;
        enemyChoice = true;
    };

    function chooseEnemy(x) {
        $("#defender").append("<h3 class='text-center text-danger mt-4'>Defender</h3>");
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#defender").append($("#" + x + "Card"));
        currentDefender = x;
        enemyChoice = false;
    };

    $("#edCard").click(function () {
        if (startState) {
            initiateGame("ed");
        }

        else if (enemyChoice) {
            chooseEnemy("ed");
        };
    });

    $("#mustangCard").click(function () {
        if (startState) {
            initiateGame("mustang");
        }

        else if (enemyChoice) {
            chooseEnemy("mustang");
        };
    });

    $("#armstrongCard").click(function () {
        if (startState) {
            initiateGame("armstrong");
        }

        else if (enemyChoice) {
            chooseEnemy("armstrong");
        };
    });

    $("#scarCard").click(function () {
        if (startState) {
            initiateGame("scar");
        }

        else if (enemyChoice) {
            chooseEnemy("scar");
        };
    });
});