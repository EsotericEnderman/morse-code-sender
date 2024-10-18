// A - short
// B - long

radio.setGroup(1);

const morseCode = {
    a: "AB",
    b: "BAAA",
    c: "BABA",
    d: "BAA",
    e: "A",
    f: "AABA",
    g: "BBA",
    h: "AAAA",
    i: "AA",
    j: "ABBB",
    k: "BAB",
    l: "ABAA",
    m: "BB",
    n: "BA",
    o: "BBB",
    p: "ABBA",
    q: "BBAB",
    r: "ABA",
    s: "AAA",
    t: "B",
    u: "AAB",
    v: "AAAB",
    x: "BAAB",
    y: "BABB",
    z: "BBAA",
    end: "ABAB"
};

const terminateSequence = "AAAAB";

let stringToSend = "";
let currentlyTypingString = "";

const invertedMorseCode = invertObject(morseCode);

const getMatch = () => {
    if (currentlyTypingString.indexOf(terminateSequence) === -1) {
        return null
    }

    const letter = invertedMorseCode[currentlyTypingString.slice(0, currentlyTypingString.length - terminateSequence.length)];

    console.log("Matched letter: " + letter);
    
    return letter;
}

const checkMatch = () => {
    const match = getMatch();

    if (!match) return;

    currentlyTypingString = "";

    if (match === "end") {
        radio.sendString(stringToSend);
        stringToSend = "";
    } else {
        stringToSend += match;
    }
}

const onButtonAPressed = () => {
    console.log("Button A pressed")

    currentlyTypingString += "A";
    checkMatch();
};

const onButtonBPressed = () => {
    console.log("Button B pressed")

    currentlyTypingString += "B";
    checkMatch();
}

input.onButtonPressed(Button.A, onButtonAPressed);
input.onButtonPressed(Button.B, onButtonBPressed);

radio.onReceivedString((receivedString) => basic.showString(receivedString));