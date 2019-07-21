$(document).ready(function () {
    var startState = true;

    var yourCharacter = "";

    var yourHitPoints = 0;

    var yourBaseAttack = 0;

    var yourCurrentAttack = 0;

    var currentDefender = "";

    var defenderHitPoints = 0;

    var defenderCounterPower = 0;

    var enemyChoice = false;

    var noClickingAllowed = false;

    var canClickRestart = false;

    var enemiesLeftToFight = 3;

    var characterNames = { ed: "Edward", mustang: "Mustang", armstrong: "Armstrong", scar: "Scar" };

    var victoryGifs = { ed: "edward-elric-victory.gif", mustang: "colonel-mustang-victory.gif", armstrong: "major-armstrong-victory.gif", scar: "scar-victory.gif" };

    function assignPlayerStats() {
        if (yourCharacter === "ed") {
            yourHitPoints = 100;
            yourBaseAttack = 12;
            yourCurrentAttack = 12;
        }

        else if (yourCharacter === "mustang") {
            yourHitPoints = 120;
            yourBaseAttack = 8;
            yourCurrentAttack = 8;
        }

        else if (yourCharacter === "armstrong") {
            yourHitPoints = 150;
            yourBaseAttack = 6;
            yourCurrentAttack = 6;
        }

        else {
            yourHitPoints = 180;
            yourBaseAttack = 4;
            yourCurrentAttack = 4;
        };
    };


    function initiateGame(x) {
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#playerCharacter").append("<h3 class='text-center text-danger mt-4'>Your Character</h3>").append($("#" + x + "Card"));
        $("#changingTitle").text("Enemies Available to Attack").removeClass("text-white").addClass("text-danger");
        $("#battleRow").removeClass("d-none").addClass("w-100");
        $("#battleMessages").addClass("bg-dark border border-danger rounded my-4").html("<h3 class='text-white align-self-center text-center mx-auto'>Select an enemy to fight below.</h3>");
        startState = false;
        yourCharacter = x;
        enemyChoice = true;
        assignPlayerStats();
    };

    function assignDefenderStats() {
        if (currentDefender === "ed") {
            defenderHitPoints = 100;
            defenderCounterPower = 32;
        }

        else if (currentDefender === "mustang") {
            defenderHitPoints = 120;
            defenderCounterPower = 24;
        }

        else if (currentDefender === "armstrong") {
            defenderHitPoints = 150;
            defenderCounterPower = 16;
        }

        else {
            defenderHitPoints = 180;
            defenderCounterPower = 8;
        };
    };

    function chooseEnemy(x) {
        $("#" + x + "Card").unwrap().removeClass("my-4").addClass("mb-4");
        $("#defender").append("<h3 class='text-center text-danger mt-4 mr-4'>Defender</h3>").append($("#" + x + "Card"));
        currentDefender = x;
        enemyChoice = false;
        $("#battleColumn").removeClass("d-flex");
        $("#battleMessages").empty().removeClass("d-flex").append("<h3 class='text-white text-center py-5 my-5'>Click on the ATTACK button to attack.</h3>");
        $("#buttonRow").removeClass("d-none").addClass("mt-4 pt-3");
        $("#attackButton").addClass("pl-0").append("<button type='button' id='attackDefender' class='btn btn-danger border border-white' style='width: calc(100% - 15px); height: 100px; font-family: chunkfive_printregular; font-size: 2.5vw;'>ATTACK</button>");
        assignDefenderStats();

        if (enemiesLeftToFight === 1) {
            $("#changingTitle").remove();
            $("#cardStorage").remove();
        };
    };

    function defenderDefeated() {
        $("#defender").empty();
        $("#attackButton").removeClass("pl-0").empty();
        $("#battleColumn").addClass("d-flex");
        $("#battleRow").addClass("w-100");
        $("#battleMessages").addClass("d-flex").html("<h3 class='text-white align-self-center text-center mx-auto'>Select an enemy to fight below.</h3>");
        noClickingAllowed = false;
        enemyChoice = true;
    };

    function gameOver() {
        $("#battleMessages").empty().append("<h3 class='text-white text-center pt-5 my-5'>You have been defeated!</h3>").append("<h3 class='text-white text-center pb-5 mb-5'>GAME OVER</h3>");
        noClickingAllowed = true;
        setTimeout( function() {
            $("#attackDefender").text("RESTART");
            canClickRestart = true;
        }, 2000);
    };

    function congratulatePlayer(x) {
        $("#defender").empty();
        $("#attackButton").empty();
        $("#buttonRow").addClass("d-none");
        $("#battleRow").addClass("w-100 pt-2");
        $("#battleMessages").empty().addClass("text-center").append("<img src=assets/images/" + victoryGifs[yourCharacter] + " class='py-4 my-3' style='height: auto; max-width: 30vw;' />").append("<h3 class='text-white align-self-center text-center mx-auto pb-4 mb-3'>Congratulations! You are victorious!</h3>");
    };

    function victory() {
        if (yourCharacter = "ed") {
            congratulatePlayer("ed");
        }

        else if (yourCharacter = "mustang") {
            congratulatePlayer("mustang");
        }

        else if (yourCharacter = "armstrong") {
            congratulatePlayer("armstrong");
        }

        else {
            congratulatePlayer("scar");
        };
    };

    $("#attackButton").on("click", "#attackDefender", function () {
        if (!noClickingAllowed) {
            defenderHitPoints = defenderHitPoints - yourCurrentAttack;
            $("#" + currentDefender + "HP").text("HP: " + defenderHitPoints);
            $("#battleMessages").empty().append("<h3 class='text-white text-center py-5 my-5'>You attack " + characterNames[currentDefender] + " for " + yourCurrentAttack + " damage!</h3>");
            yourCurrentAttack = yourCurrentAttack + yourBaseAttack;

            if (defenderHitPoints > 0) {
                yourHitPoints = yourHitPoints - defenderCounterPower;
                $("#" + yourCharacter + "HP").text("HP: " + yourHitPoints);
                $("#battleMessages").append("<h3 class='text-white text-center pb-5 mb-5'>" + characterNames[currentDefender] + " counters your attack for " + defenderCounterPower + " damage!</h3>");
                if (yourHitPoints < 1) {
                    gameOver();
                };
            }

            else {
                noClickingAllowed = true;
                $("#battleMessages").empty().append("<h3 class='text-white text-center py-5 my-5'>You defeated " + characterNames[currentDefender] + "!</h3>");
                enemiesLeftToFight--;
                if (enemiesLeftToFight > 0) {
                    setTimeout(defenderDefeated, 2000);                    
                }

                else {
                    setTimeout(victory, 2000);
                };
            };
        }

        else if (canClickRestart) {
            location.reload();
        };
    });

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