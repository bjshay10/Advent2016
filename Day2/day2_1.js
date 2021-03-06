//requireds
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
    // input: require('fs').createReadStream('./input_test.txt')
});

//variables
var position = 5;
var code = '';

//Read the lines of the file (5 of them)
lineReader.on('line', (line) => {
    var move = '';
    var lineLen = 0;
    lineLen = line.length;
    console.log(`Start Position: ${position}`);
    console.log(`For Loop for x times ${lineLen}`);
    console.log(`-----`);
    for(i=0; i<line.length; i++) {
        console.log(`Move character: ${line.substring(i,i+1)}`);
        calcMove(line.substring(i,i+1));
    }
    console.log(`-----`);
    console.log(`Final Line Position: ${position}`);
    code = code + position;
    console.log(code);
});

function calcMove(dir) {
    switch (position) {
        // p 1: U = 1, D = 4, L = 1, R = 2
        case 1:
            switch (dir) {
                case 'U': 
                    position = 1;
                    break;
                case 'D': 
                    position = 4;
                    break;
                case 'L': 
                    position = 1;
                    break;
                case 'R': 
                    position = 2;
                    break;
                default: break;
            };
            break;
        // p 2: U = 2, D = 5, L = 1, R = 3
        case 2:
            switch (dir) {
                case 'U': 
                    position = 2;
                    break;
                case 'D': 
                    position = 5;
                    break;
                case 'L': 
                    position = 1;
                    break;
                case 'R': 
                    position = 3;
                    break;
                default: break;
            };
            break;
        // p 3: U = 3, D = 6, L = 2, R = 3
        case 3:
            switch (dir) {
                case 'U': 
                    position = 3;
                    break;
                case 'D': 
                    position = 6;
                    break;
                case 'L': 
                    position = 2;
                    break;
                case 'R': 
                    position = 3;
                    break;
                default: break;
            };
            break;
        // p 4: U = 1, D = 7, L = 4, R = 5
        case 4:
            switch (dir) {
                case 'U': 
                    position = 1;
                    break;
                case 'D': 
                    position = 7;
                    break;
                case 'L': 
                    position = 4;
                    break;
                case 'R': 
                    position = 5;
                    break;
                default: break;
            };
            break;
        // p 5: U = 2, D = 8, L = 4, R = 6
        case 5:
            switch (dir) {
                case 'U': 
                    position = 2;
                    break;
                case 'D': 
                    position = 8;
                    break;
                case 'L': 
                    position = 4;
                    break;
                case 'R': 
                    position = 6;
                    break;
                default: break;
            };
            break;
        // p 6: U = 3, D = 9, L = 5, R = 6
        case 6:
            switch (dir) {
                case 'U': 
                    position = 3;
                    break;
                case 'D': 
                    position = 9;
                    break;
                case 'L': 
                    position = 5;
                    break;
                case 'R': 
                    position = 6;
                    break;
                default: break;
            };
            break;
        // p 7: U = 4, D = 7, L = 7, R = 8
        case 7:
            switch (dir) {
                case 'U': 
                    position = 4;
                    break;
                case 'D': 
                    position = 7;
                    break;
                case 'L': 
                    position = 7;
                    break;
                case 'R': 
                    position = 8;
                    break;
                default: break;
            };
            break;
        // p 8: U = 5, D = 8, L = 7, R = 9
        case 8:
            switch (dir) {
                case 'U': 
                    position = 5;
                    break;
                case 'D': 
                    position = 8;
                    break;
                case 'L': 
                    position = 7;
                    break;
                case 'R': 
                    position = 9;
                    break;
                default: break;
            };
            break;
        // p 9: U = 6, D = 9, L = 8, R = 9 
        case 9:
            switch (dir) {
                case 'U': 
                    position = 6;
                    break;
                case 'D': 
                    position = 9;
                    break;
                case 'L': 
                    position = 8;
                    break;
                case 'R': 
                    position = 9;
                    break;
                default: break;
            };
            break;
        default: break;
    }
};