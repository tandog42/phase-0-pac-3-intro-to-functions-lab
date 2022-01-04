function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
 function logShout(word) {
     console.log(word.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(step) {
if (step.toLowerCase()===step) { return "I can't hear you!"; }

if (step.toUpperCase()===step) { return "YES INDEED!"; }
if (step==="Let's have dinner together!") { return "I would love to!";}
}



