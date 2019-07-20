$(document).ready(function () {
    var startState = true;

    var yourCharacter = "";

    var currentDefender = "";

    var enemyChoice = false;

    var battleCommenced = false;

    var edStats = { hitPoints: 100, attackPower: 12, counterAttackPower: 32 };

    var mustangStats = { hitPoints: 120, attackPower: 8, counterAttackPower: 24 };

    var armstrongStats = { hitPoints: 150, attackPower: 6, counterAttackPower: 16 };

    var scarStats = { hitPoints: 180, attackPower: 4, counterAttackPower: 8 };

    /*assignStats() {
        if (yourCharacter = "ed") {
            hitPoints = 
        }
    };*/

    function initiateGame(x) {
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#playerCharacter").append("<h3 class='text-center text-danger mt-4'>Your Character</h3>").append($("#" + x + "Card"));
        $("#changingTitle").text("Enemies Available to Attack").removeClass("text-white").addClass("text-danger");
        $("#battleMessages").addClass("bg-dark border border-danger rounded my-4").html("<h3 class='text-center text-white row justify-content-center align-self-center mx-auto'>SELECT AN ENEMY TO FIGHT BELOW...</h3>");
        startState = false;
        yourCharacter = x;
        enemyChoice = true;
    };

    function chooseEnemy(x) {
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#defender").append("<h3 class='text-center text-danger mt-4'>Defender</h3>").append($("#" + x + "Card"));
        currentDefender = x;
        enemyChoice = false;
        battleCommenced = true;
    };

    $("#edCard").click(function () {
        if (startState) {
            initiateGame("ed");
        }

        else if ((enemyChoice) && (yourCharacter !== "ed")) {
            chooseEnemy("ed");
        };
    });

    $("#mustangCard").click(function () {
        if (startState) {
            initiateGame("mustang");
        }

        else if ((enemyChoice) && (yourCharacter !== "mustang")) {
            chooseEnemy("mustang");
        };
    });

    $("#armstrongCard").click(function () {
        if (startState) {
            initiateGame("armstrong");
        }

        else if ((enemyChoice) && (yourCharacter !== "armstrong")) {
            chooseEnemy("armstrong");
        };
    });

    $("#scarCard").click(function () {
        if (startState) {
            initiateGame("scar");
        }

        else if ((enemyChoice) && (yourCharacter !== "scar")) {
            chooseEnemy("scar");
        };
    });
});