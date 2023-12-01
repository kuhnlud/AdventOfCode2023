import { PUZZLE } from "./puzzle.js";

let numbersInString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//54644.

function decript(text){
    //take the text entry and for each line make a search
    let lineCodes = [];
    let codes = [];
    text.split("\n").forEach((line, i) => {
        //for each line, search the first and the last number occurence
        let numberofchar = 0;
        let chars = [];
        for (let i = 0; i < line.length; i++) {
            //is the string a number?
            if (isNaN(line[i]) === false){
                //if yes, count the number of occurence
                numberofchar++;
                chars.push(line[i]);
            }

            
        }

        //take the first and the last entries of the chars array
        let lineOfCode = `${chars[0]}${chars[chars.length - 1]}`;
        lineCodes.push(lineOfCode);

        //push the number of occurence and the char to the array
        codes.push(chars);

        console.log(`line ${i}: ${line}`);
        console.log(`number of char: ${numberofchar}`);
        console.log(`${chars}`);
        console.log(`${lineOfCode}`)
    });

    //parse the lineCodes array and make each entry a number and make the sume of all the numbers
    let sum = 0;
    lineCodes.forEach(code => {
        sum += parseInt(code);
    })
    console.log(`final puzzle input: ${sum}`)
}

function decriptWithNumbers(text){
    //take the text entry and for each line make a search
    let lineCodes = [];
    let codes = [];
    text.split("\n").forEach((line, i) => {
        //for each line, search the first and the last number occurence
        let chars = [];
        
        //first search if any of the "number in text" provide by the numbers array are somewhere in the line but search it many time if there are more than one occurence
        let numbersInStringPos = [];
        console.log('line:',line)
        let testline = line;
        numbersInString.forEach((number, i) => {
            let nbOfWhile = 0;
            console.log('number:',number)
            while (testline.includes(number)){
                  //get the start position of the number in the line
                let start = testline.indexOf(number);
                numbersInStringPos.push({number: numbers[i], start: start});
                //split the line to remove the number from the line
                testline = testline.replace(`${number}`,'');
                //recreate the line without the number
               // testline = splitLine.join('');
                console.log('splitLine: ', nbOfWhile, testline);
                nbOfWhile = nbOfWhile + 1;
            }
            console.log('**************')

        })

        let numberPos = []
        for (let i = 0; i < line.length; i++) {
            //is the string a number?
            if (isNaN(line[i]) === false){
                let start = line.indexOf(line[i]);
                numberPos.push({number: line[i], start: start});
            }
        }

        //compare the numbersInStringPos array with the chars array
        //search the lowest start position from the numbersInStringPos (item.start) array and compare it with the lowest start position from the numberPos (item.start) array and get the lowest one
        let lowestStart = 0;
        console.log('numbersInStringPos: ', numbersInStringPos)
        if (numbersInStringPos.length > 0){
            lowestStart = numbersInStringPos.reduce((prev, current) => (prev.start < current.start) ? prev : current);
        }
        console.log('numberPos: ', numberPos)
        let lowestStartPos = 0;
        if (numberPos.length > 0){
            lowestStartPos = numberPos.reduce((prev, current) => (prev.start < current.start) ? prev : current);
        }

        //if the lowest start position from the numbersInStringPos array is lower than the lowest start position from the numberPos array, then take the number from the numbersInStringPos array
        if (lowestStart.start < lowestStartPos.start){
            chars.push(lowestStart.number);
        } else {
            chars.push(lowestStartPos.number);
        }
        //compare the numbersInStringPos array with the chars array
        //search the highest start position from the numbersInStringPos (item.start) array and compare it with the highest start position from the numberPos (item.start) array and get the highest one
        let highestStart = 0;
        if (numbersInStringPos.length > 0){
            highestStart = numbersInStringPos.reduce((prev, current) => (prev.start > current.start) ? prev : current);
        }
        let highestStartPos = 0;
        if (numberPos.length > 0){
            highestStartPos = numberPos.reduce((prev, current) => (prev.start > current.start) ? prev : current);
        }

        //if the highest start position from the numbersInStringPos array is higher than the highest start position from the numberPos array, then take the number from the numbersInStringPos array
        if (highestStart.start > highestStartPos.start){
            chars.push(highestStart.number);
        } else {
            chars.push(highestStartPos.number);
        }

        
        //take the first and the last entries of the chars array
        let lineOfCode = `${chars[0]}${chars[chars.length - 1]}`;
        lineCodes.push(lineOfCode);
        
        //push the number of occurence and the char to the array
        //codes.push(chars);
        
         console.log(`line ${i}: ${line}`);
        console.log(`${chars}`)
        console.log(`${lineOfCode}`)
        console.log('-------------------') 
    });

    //parse the lineCodes array and make each entry a number and make the sume of all the numbers
    let sum = 0;
    lineCodes.forEach(code => {
        sum += parseInt(code);
    })
    console.log(`final puzzle input: ${sum}`)
}


console.log(decriptWithNumbers('two1sevenkqllxjvqbfvfxnr'));