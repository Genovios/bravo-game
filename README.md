# Project Name: Punching Bag Game

## Date: 10/13/2025

## Objective:
Earn power by clicking the punching bag!

## Rules:
1. Click on the Punching Bag to earn Power.
2. Use power to upgrade punching strength in Training to earn more power per click.
3. Use power to unlock auto punching and earn power passively per second.
4. See how much power and how many lifetime clicks you can build up!

## Tech Used:
1. Visual Studio Code (Coding)
2. Microsoft Edge (Live Testing)

## Resource Links / References: 
1. W3Schools - [HTML Forms](https://www.w3schools.com/html/html_forms.asp)
2. UNA CS Tutoring
3. Various In-Person Development Assitance
4. [OneCompiler](https://onecompiler.com/)

## Code Snippet: 

``` 
<!-- Function to Increase Power (Currency) and Lifetime Clicks -->
$('#punchBag').on('click', () => {

    gs.power += gs.powGain; <!-- Power increases based on powGain / Power per click -->
    gs.clickScore += 1; <!-- clickScore / Lifetime Clicks increases by 1 per click -->

    displayUpdate(gs); <!-- Game display updates -->
    saveGame(gs); <!-- Gamestate is saved -->

});

```
## Wireframe:
(/assets/PBG-WireframeFinal.png)
