
$(document).ready(() => {
    console.log("Succesfully loaded!");
    console.log("Get 69 Lifetime Clicks with a total of 69 Power for a nice surprise!");

    let userStuff = [];

    displayUserData();

    //sets game state if no previous save / game state is detected
    if (!localStorage.getItem('gameState')) {
        const gameState = {

            //power (click) variables
            power: 0,
            powGain: 1,
            powPrice: 15,

            //autoclick variables
            autoPunch: 0,
            apCost: 25,

            //score variable
            clickScore: 0,

            //cheat enabled variable
            cheatFlag: false,

        };
        localStorage.setItem('gameState', JSON.stringify(gameState));
    };

    console.log(localStorage.getItem('gameState'));

    const localGame = localStorage.getItem('gameState');

    const gs = JSON.parse(localGame);

    //setting displayed values to appropriate variable values
    const $powerDisplay = $('#power');
    const $powGainDisplay = $('#powGain');
    const $powPriceDisplay = $('#powPrice');
    const $apDisplay = $('#autoPunch');
    const $apCostDisplay = $('#apCost');
    const $csDisplay = $('#clickScore');

    //updates the game's display
    function displayUpdate(gs) {
        $powerDisplay.text(gs.power);
        $powGainDisplay.text(gs.powGain);
        $powPriceDisplay.text(gs.powPrice);
        $apDisplay.text(gs.autoPunch);
        $apCostDisplay.text(gs.apCost);
        $csDisplay.text(gs.clickScore);

    };

    //allows user to buy autopunch (punch per second)
    $('#buyAPButton').on('click', () => {
        if (gs.power >= gs.apCost) {
            gs.power -= gs.apCost;
            gs.autoPunch++;
            gs.apCost *= 2;

            displayUpdate(gs);
            saveGame(gs);

        }

        else {
            alert("You are not strong enough yet for this upgrade... Keep going!");
        }
    });

    //sets auto punch to activate every 1 second
    setInterval(() => {
        if (gs.autoPunch > 0) {
            gs.power += gs.autoPunch;
            displayUpdate(gs);
            saveGame(gs);
        }
    }, 1000);

    //allows user to upgrade amount of power earned per click
    $('#buyPowerButton').on('click', () => {
        if (gs.power >= gs.powPrice) {
            gs.power -= gs.powPrice;
            gs.powGain++;
            gs.powPrice *= 2;

            easterEgg(); //Easter Egg function (see bottom of file)
            
            displayUpdate(gs);
            saveGame(gs);
        }

        else {
            alert("You are not strong enough yet for this upgrade... Keep going!");
        }
    });

    //allows user to earn power on a click
    $('#punchBag').on('click', () => {
        gs.power += gs.powGain;
        gs.clickScore += 1;

        console.log("Button clicked");

        displayUpdate(gs);
        saveGame(gs);

        console.log(gs.power);
    });

    //resets game state to default
    $('#resetButton').on('click', () => {
        let resetApproval = confirm("This button resets all progress to the default state. Are you certain you wish to reset?");
        if (resetApproval) {
            gs.power = 0;
            gs.powGain = 1;
            gs.powPrice = 15;

            gs.autoPunch = 0;
            gs.apCost = 25;

            gs.clickScore = 0;

            if (gs.cheatFlag == true) {
                gs.cheatFlag = false;
            }

            displayUpdate(gs);
            saveGame(gs);
        };
    });

    //increases all power gain values as a means to cheat the game
    $('#cheatButton').on('click', () => {
        let cheatApproval = confirm("Are you sure you want to enable cheats? (Must reset to revert.)")

        if (cheatApproval) {
            gs.power = 1000000;
            gs.powGain = 1000;
            gs.autoPunch = 1000;
            gs.cheatFlag = true;
        }

    });

    displayUpdate(gs);
    saveGame(gs);

    //saves user's name and highscore (unfinished?)
    $("#settings").on("submit", function (event) {

        if ("#nameInput") {

            if (!gs.cheatFlag) {

                console.log("No Cheat Detected");

                userName = $("#userName").val();
                // powerScore = $("#power").html();
                // clickVal = $("#clickScore");

                saveData(userName, power, clickScore);

                alert("Highscore saved!");

            };

            //if user has activated cheats, highscore is not saved
            if (gs.cheatFlag) {
                console.log("Cheat Detected");
                alert("Uh-oh, you've cheated! Your highscore can't be saved...");
            }
        }
    });

    //displays user data for highscore (unfinished, unused)
    function displayUserData() {
        userStuff = getData();
        console.log("userName ", userStuff[0]);
        $('.highscores').append(userStuff[0], "- Power: ", userStuff[1], ", Lifetime Clicks: ", userStuff[2]);

    }

});

//saves the user's game state
function saveGame(gs) {
    localStorage.setItem('gameState', JSON.stringify(gs));
    console.log(gs);
};

//saves the user's data for highscore (not essential for game to work)
function saveData(userNameP, powerValP, clickValP) {

    localStorage.setItem("userName", userNameP);
    localStorage.setItem(gs.power, powerValP);
    localStorage.setItem(gs.clickScore, clickValP);

    console.log("saveData status: ", userName);
    console.log("saveData status: ", powerValP);
    console.log("saveData status: ", clickValP);
};

//returns the user's data 
function getData() {
    //these vars arent the same at teh otehrs in doc load and all. scoping. Can't see? 
    userNameX = localStorage.getItem("userName");
    powerValX = localStorage.getItem("powerScore");
    clickValX = localStorage.getItem("clickVal");
    return [userNameX, powerValX, clickValX];

};

//if user has 69 lifetime clicks and 69 power at the same time, alert is displayed
function easterEgg() {
    if(gs.clickScore == 69) {
        if(gs.power == 69) {
            alert("69... Nice!");
        }
    }
};
