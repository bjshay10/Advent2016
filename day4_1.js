var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
    // input: require('fs').createReadStream('./input_test.txt')
});

var temp = '';
var char = [];
var sectorIDs = 0;
var checkSum = [];
var charCount = [];

lineReader.on('line', (line) => {
    temp = '';
    char = [];
    charCount = [];

    temp = line.split('-').join(',').split('[').join(',').split(']').join(',');
    temp = temp.split(',');

    //push char into char array for temp[0], temp[1], temp[2]
    pushChar(temp[0]);
    pushChar(temp[1]);
    pushChar(temp[2]);
    char.sort();

    // sectorIDs.push(parseInt(temp[3]));
    

    //need to count the characters
    char.forEach(chars => {
       charCount[chars] = (charCount[chars] || 0) + 1;
    });
    const sorted = Object.entries(charCount).sort(([ charA, freqA], [ charB, freqB]) => 
        freqA < freqB ? 1 :
        freqA > freqB ? -1 :
        charA > charB ? 1 : -1 
    );
    if (temp[4] == sorted.map(([ char, freq]) => char).slice(0, 5).join('')) {
        // console.log(`Equal`);
        sectorIDs = sectorIDs + parseInt(temp[3]);
    } else {
    // .log(`not equal`);
    }
    console.log(sectorIDs);
});

// console.log(sectorIDs);

//push characters into char[]
function pushChar(s) {
    for (i=0; i < s.length; i++){
        char.push(s.substring(i,i+1));
    }
}