$(document).ready( () => {
    console.log("Succesfully loaded!");


    if(!localStorage.getItem('gameState')) {
        const gameState = {

            //power (click) variables
            power: 0,
            powGain: 1,
            powPrice: 15,

            //autoclick variables
            autoPunch: 0,
            apCost: 25,

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

    function displayUpdate(gs) {
    $powerDisplay.text(gs.power);
    $powGainDisplay.text(gs.powGain);
    $powPriceDisplay.text(gs.powPrice);
    $apDisplay.text(gs.autoPunch);
    $apCostDisplay.text(gs.apCost);

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

    setInterval( () => {
        gs.power += gs.autoPunch;
        displayUpdate(gs);
        saveGame(gs);
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

        console.log("Button clicked");

        displayUpdate(gs);
        saveGame(gs);

        console.log(gs.power);
    });

    displayUpdate(gs);
    saveGame(gs);

});

function saveGame(gs) {
        localStorage.setItem('gameState', JSON.stringify(gs));
        console.log(gs);
};