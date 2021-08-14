function getAlphabet() {

    const alphabet = new Map<string, number>();
    alphabet.set("A", 1);
    alphabet.set("B", 2);
    alphabet.set("C", 3);
    alphabet.set("D", 4);
    alphabet.set("E", 5);
    alphabet.set("F", 6);
    alphabet.set("G", 7);
    alphabet.set("H", 8);
    alphabet.set("I", 9);
    alphabet.set("J", 10);
    alphabet.set("K", 11);
    alphabet.set("L", 12);
    alphabet.set("M", 13);
    alphabet.set("N", 14);
    alphabet.set("O", 15);
    alphabet.set("P", 16);
    alphabet.set("Q", 17);
    alphabet.set("R", 18);
    alphabet.set("S", 19);
    alphabet.set("T", 20);
    alphabet.set("U", 21);
    alphabet.set("V", 22);
    alphabet.set("W", 23);
    alphabet.set("X", 24);
    alphabet.set("Y", 25);
    alphabet.set("Z", 26);
    return alphabet;
}

export function getTotalOfWord(word: string) {
    word.split("");
    let total = 0;
    const alphabet = getAlphabet();
    for (let letter of word) {
        // @ts-ignore
        total += alphabet.get(letter);
    }
    return total;
}


export function NamesScoresFunc(inputArray: string[]) {
    inputArray.sort();
    let total = 0;
    for (let i = 0; i < inputArray.length; i++) {
        total += (i + 1) * getTotalOfWord(inputArray[i]);
    }
    return total;
}
