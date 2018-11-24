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
        // p 1: U = 1, D = 3, L = 1, R = 1
        case 1:
            switch (dir) {
                case 'U': 
                    position = 1;
                    break;
                case 'D': 
                    position = 3;
                    break;
                case 'L': 
                    position = 1;
                    break;
                case 'R': 
                    position = 1;
                    break;
                default: break;
            };
            break;
        // p 2: U = 2, D = 6, L = 2, R = 3
        case 2:
            switch (dir) {
                case 'U': 
                    position = 2;
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
        // p 3: U = 1, D = 7, L = 2, R = 4
        case 3:
            switch (dir) {
                case 'U': 
                    position = 1;
                    break;
                case 'D': 
                    position = 7;
                    break;
                case 'L': 
                    position = 2;
                    break;
                case 'R': 
                    position = 4;
                    break;
                default: break;
            };
            break;
        // p 4: U = 4, D = 8, L = 3, R = 4
        case 4:
            switch (dir) {
                case 'U': 
                    position = 4;
                    break;
                case 'D': 
                    position = 8;
                    break;
                case 'L': 
                    position = 3;
                    break;
                case 'R': 
                    position = 4;
                    break;
                default: break;
            };
            break;
        // p 5: U = 5, D = 5, L = 5, R = 6
        case 5:
            switch (dir) {
                case 'U': 
                    position = 5;
                    break;
                case 'D': 
                    position = 5;
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
        // p 6: U = 2, D = A, L = 5, R = 7
        case 6:
            switch (dir) {
                case 'U': 
                    position = 2;
                    break;
                case 'D': 
                    position = 'A';
                    break;
                case 'L': 
                    position = 5;
                    break;
                case 'R': 
                    position = 7;
                    break;
                default: break;
            };
            break;
        // p 7: U = 3, D = B, L = 6, R = 8
        case 7:
            switch (dir) {
                case 'U': 
                    position = 3;
                    break;
                case 'D': 
                    position = 'B';
                    break;
                case 'L': 
                    position = 6;
                    break;
                case 'R': 
                    position = 8;
                    break;
                default: break;
            };
            break;
        // p 8: U = 4, D = C, L = 7, R = 9
        case 8:
            switch (dir) {
                case 'U': 
                    position = 4;
                    break;
                case 'D': 
                    position = 'C';
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
        // p 9: U = 9, D = 9, L = 8, R = 9 
        case 9:
            switch (dir) {
                case 'U': 
                    position = 9;
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
        // p A: U = 6, D = A, L = A, R = B
        case 'A':
            switch (dir) {
                case 'U': 
                    position = 6;
                    break;
                case 'D': 
                    position = 'A';
                    break;
                case 'L': 
                    position = 'A';
                    break;
                case 'R': 
                    position = 'B';
                    break;
                default: break;
            };
            break;
        // p B: U = 7, D = D, L = A, R = C
        case 'B':
            switch (dir) {
                case 'U': 
                    position = 7;
                    break;
                case 'D': 
                    position = 'D';
                    break;
                case 'L': 
                    position = 'A';
                    break;
                case 'R': 
                    position = 'C';
                    break;
                default: break;
            };
            break;
        // p C: U = 8, D = D, L = B, R = C
        case 'C':
            switch (dir) {
                case 'U': 
                    position = 8;
                    break;
                case 'D': 
                    position = 'C';
                    break;
                case 'L': 
                    position = 'B';
                    break;
                case 'R': 
                    position = 'C';
                    break;
                default: break;
            };
            break;
        // p D: U = C, D = D, L = D, R = D
        case 'D':
            switch (dir) {
                case 'U': 
                    position = 'B';
                    break;
                case 'D': 
                    position = 'D';
                    break;
                case 'L': 
                    position = 'D';
                    break;
                case 'R': 
                    position = 'D';
                    break;
                default: break;
            };
            break;
        default: break;
    }
};