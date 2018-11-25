var lineReader = require('readline').createInterface({
    // input: require('fs').createReadStream('./input.txt')
    input: require('fs').createReadStream('./input_test.txt')
});

var tri;
var side1 = 0, side2 = 0, side3 = 0;
var s1 = 0, s2 = 0, s3 = 0;
var valid = 0, invalid = 0;


//Read the lines of the file (5 of them)
lineReader.on('line', (line) => {
    tri = line.split('  ');
    console.log(tri);
    
    s1 = parseInt(tri[1]);
    s2 = parseInt(tri[2]);
    s3 = parseInt(tri[3]);

    //calculate sides
    side1 = parseInt(tri[1]) + parseInt(tri[2]);
    side2 = parseInt(tri[2]) + parseInt(tri[3]);
    side3 = parseInt(tri[3]) + parseInt(tri[1]);
    // console.log(`Side1: ${side1}, Side2: ${side2}, Side3: ${side3}`);
    
    //if s1 > s2 + s3 (side2)
    //if s2 > s3 + s1 (side3)
    //if s3 > s1 + s2 (side1)
    // if (s1 > side2) {
            
    // } else {
    //     console.log(`s1 = ${s1}, side2 = ${side2}`);
    //     if (s2 > side3) {

    //     } else {
    //         console.log(`s2 = ${s2}, side3 = ${side3}`);
    //         if (s3 > side1) {

    //         } else {
    //             console.log(`s3 = ${s3}, side1 = ${side1}`);
    //             valid++;
    //         }
    //     }
    // }
    if ((s1 < side2) && (s2 < side3) && (s3 < side1)) {
        valid++;
    } else {
        invalid++;
    }

    console.log(`Valid: ${valid}`);
    console.log(`Invalid: ${invalid}`);
});

