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

    function initiateGame(x) {
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#playerCharacter").append("<h3 class='text-center text-danger mt-4'>Your Character</h3>").append($("#" + x + "Card"));
        $("#changingTitle").text("Enemies Available to Attack").removeClass("text-white").addClass("text-danger");
        $("#battleRow").removeClass("d-none").addClass("w-100");
        $("#battleMessages").addClass("bg-dark border border-danger rounded my-4").html("<h3 class='text-white align-self-center text-center mx-auto'>Select an enemy to fight below.</h3>");
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
        $("#battleColumn").removeClass("d-flex");//bookmark -->
        $("#battleMessages").empty().removeClass("d-flex").append("<h3 class='text-white text-center py-5 my-5'>Click on the ATTACK button to attack.</h3>");
        $("#buttonRow").removeClass("d-none").addClass("mt-4 pt-3");
        $("#attackButton").addClass("pl-0").append("<button type='button' class='btn btn-danger border border-white' style='width: calc(100% - 15px); height: 100px; font-family: chunkfive_printregular; font-size: 2.5vw;'>ATTACK</button>");
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