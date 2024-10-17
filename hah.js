function genPrivateServer(){
let result = '';
let length = 32
for(let i = 0; i < length; i++){
    result += Math.floor(Math.random() * 10);
    
}
return `https://www.roblox.com/games/2753915549/Blox-Fruits?privateServerLinkCode=${result}`;
}

module.exports = genPrivateServer;
