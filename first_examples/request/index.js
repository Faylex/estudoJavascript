const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your favorite soccer team? ', getTeam);
function getTeam (nameTeam){
    let playersInter = "jogador1, jogador2, jogador3.";
    let playerFlamengo = "jogador1, jogador2, jogador3.";
    let playerPalmeiras = "blabla1, blabla2, blabla3.";
    if (nameTeam === "inter"){printTeam (nameTeam, playersInter)}
    else if (nameTeam === "flamengo"){printTeam (nameTeam, playerFlamengo)}
    else if (nameTeam === "palmeiras"){printTeam (nameTeam, playerPalmeiras)}

}

function printTeam (nameTeam, players) {
    console.log(`Nice! The best players the team ${nameTeam} is ${players}`)
}