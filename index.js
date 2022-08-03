function shout(string) {
    return string.toUpperCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logshout(string) {
    console.log(string.toLowerCase())
}
function whisper(string) {
    return string.toLowerCase();
}


function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
        return `YES INDEED!`}

    else if (string === string.toLowerCase()){
        return `I can't hear you!`
    }

    else if (string === `Let's have dinner together!`){
        return `I would love to!`
    }
    
    

}