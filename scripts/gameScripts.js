$(document).ready(() => {
    console.log("Succesfully loaded!");

    const userName = " ";
    const powerScore = 0;
    const clickVal = 0;

    getData();
    console.log("userName ", userName);

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

    const $powerDisplay = $('#power');
    const $powGainDisplay = $('#powGain');
    const $powPriceDisplay = $('#powPrice');
    const $apDisplay = $('#autoPunch');
    const $apCostDisplay = $('#apCost');
    const $csDisplay = $('#clickScore');

    function displayUpdate(gs) {
        $powerDisplay.text(gs.power);
        $powGainDisplay.text(gs.powGain);
        $powPriceDisplay.text(gs.powPrice);
        $apDisplay.text(gs.autoPunch);
        $apCostDisplay.text(gs.apCost);
        $csDisplay.text(gs.clickScore);

        console.log(power);
    };

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

    setInterval(() => {
        if(gs.autoPunch > 0) {
            gs.power += gs.autoPunch;
            displayUpdate(gs);
            saveGame(gs);
        }
    }, 1000);

    $('#buyPowerButton').on('click', () => {
        if (gs.power >= gs.powPrice) {
            gs.power -= gs.powPrice;
            gs.powGain++;
            gs.powPrice *= 2;
            displayUpdate(gs);
            saveGame(gs);
        }

        else {
            alert("You are not strong enough yet for this upgrade... Keep going!");
        }
    });

    $('#punchBag').on('click', () => {
        gs.power += gs.powGain;
        gs.clickScore += 1;

        console.log("Button clicked");

        displayUpdate(gs);
        saveGame(gs);

        console.log(gs.power);
    });

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

});

function saveGame(gs) {
    localStorage.setItem('gameState', JSON.stringify(gs));
    console.log(gs);
};

function saveData(userName, powerVal, clickVal) {
    localStorage.setItem("userName", userName);
    localStorage.setItem("powerScore", powerScore);
    localStorage.setItem("clickVal", clickVal);
};

function getData() {
    userName = localStorage.getItem("userName");
    powerVal = localStorage.getItem("powerScore");
    clickVal = localStorage.getItem("clickVal");
};

$("#settings").on("submit", function (event) {

    event.preventDefault();

    userName = $("userName").val;
    powerScore = $("power");
    clickVal = $("clickScore");

    saveData(userName, powerScore, clickVal);

    alert("Highscore saved!");
    console.log("userName ", userName);
});