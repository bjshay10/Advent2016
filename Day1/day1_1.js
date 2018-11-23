var directions = 'L1, L3, L5, L3, R1, L4, L5, R1, R3, L5, R1, L3, L2, L3, R2, R2, L3, L3, R1, L2, R1, L3, L2, R4, R2, L5, R4, L5, R4, L2, R3, L2, R4, R1, L5, L4, R1, L2, R3, R1, R2, L4, R1, L2, R3, L2, L3, R5, L192, R4, L5, R4, L1, R4, L4, R2, L5, R45, L2, L5, R4, R5, L3, R5, R77, R2, R5, L5, R1, R4, L4, L4, R2, L4, L1, R191, R1, L1, L2, L2, L4, L3, R1, L3, R1, R5, R3, L1, L4, L2, L3, L1, L1, R5, L4, R1, L3, R1, L2, R1, R4, R5, L4, L2, R4, R5, L1, L2, R3, L4, R2, R2, R3, L2, L3, L5, R3, R1, L4, L3, R4, R2, R2, R2, R1, L4, R4, R1, R2, R1, L2, L2, R4, L1, L2, R3, L3, L5, L4, R4, L3, L1, L5, L3, L5, R5, L5, L4, L2, R1, L2, L4, L2, L4, L1, R4, R4, R5, R1, L4, R2, L4, L2, L4, R2, L4, L1, L2, R1, R4, R3, R2, R2, R5, L1, L2';

var directionsArray = directions.split(", ");
var currentCoordinates = [0 ,0];
var currentDirection = 0; // n=0, e=1, s=2, w=3

directionsArray.forEach((step) => {
    var turnDirection = step[0];
    var distance = parseInt(step.substring(1)); // get the rest

    currentDirection = getNewDirection(turnDirection, currentDirection);

    currentCoordinates = calculateNewCoordinates(currentCoordinates, currentDirection, distance);

});

console.log("Moved North: " + currentCoordinates[0]);
console.log("Moved East: " + currentCoordinates[1]);
console.log("Total Blocks Away: " + (Math.abs(currentCoordinates[0]) + Math.abs(currentCoordinates[1])));


function getNewDirection(turnDirection, currentDirection){
    // n=0, e=1, s=2, w=3
    var changeBy = turnDirection == "L" ? -1 : 1;
    
    var newDirection = currentDirection + changeBy;
    if(newDirection==-1) newDirection = 3;
    if(newDirection==4) newDirection = 0;
    return newDirection;
}

function calculateNewCoordinates(currentCoordinates,newDirection, distance){
    var newCoordinates = null;
    switch(newDirection){
        case 0:
            // north
            newCoordinates = [currentCoordinates[0] + distance, currentCoordinates[1]];          
            break;
        case 1:
            // east
            newCoordinates = [currentCoordinates[0], currentCoordinates[1] + distance];          
            break;
        case 2:
            // south
            newCoordinates = [currentCoordinates[0] - distance, currentCoordinates[1]];     
            break;
        case 3:
            // north
            newCoordinates = [currentCoordinates[0], currentCoordinates[1] - distance];      
            break;            
    }
	return newCoordinates;
}
