var directions = 'L1, L3, L5, L3, R1, L4, L5, R1, R3, L5, R1, L3, L2, L3, R2, R2, L3, L3, R1, L2, R1, L3, L2, R4, R2, L5, R4, L5, R4, L2, R3, L2, R4, R1, L5, L4, R1, L2, R3, R1, R2, L4, R1, L2, R3, L2, L3, R5, L192, R4, L5, R4, L1, R4, L4, R2, L5, R45, L2, L5, R4, R5, L3, R5, R77, R2, R5, L5, R1, R4, L4, L4, R2, L4, L1, R191, R1, L1, L2, L2, L4, L3, R1, L3, R1, R5, R3, L1, L4, L2, L3, L1, L1, R5, L4, R1, L3, R1, L2, R1, R4, R5, L4, L2, R4, R5, L1, L2, R3, L4, R2, R2, R3, L2, L3, L5, R3, R1, L4, L3, R4, R2, R2, R2, R1, L4, R4, R1, R2, R1, L2, L2, R4, L1, L2, R3, L3, L5, L4, R4, L3, L1, L5, L3, L5, R5, L5, L4, L2, R1, L2, L4, L2, L4, L1, R4, R4, R5, R1, L4, R2, L4, L2, L4, R2, L4, L1, L2, R1, R4, R3, R2, R2, R5, L1, L2';

var directionsArray = directions.split(", ");
var currentCoordinates = [0 ,0];
var currentDirection = 0; // n=0, e=1, s=2, w=3
var previousCoordinates = [];
previousCoordinates.push(currentCoordinates.toString());

directionsArray.some(function(step) {

    var turnDirection = step[0];
	
    var distance = parseInt(step.substring(1)); // get the rest

    currentDirection = getNewDirection(turnDirection, currentDirection);

    var result = move(currentCoordinates, currentDirection, distance, previousCoordinates);
	
	currentCoordinates = result.newCoordinates;
	
	if(result.repeatedCoordinates){
		console.log(previousCoordinates);
		console.log("First Repeat North: " + result.repeatedCoordinates[0]);
		console.log("First Repeat East: " + result.repeatedCoordinates[1]);
		console.log("Total Blocks Away: " + (Math.abs(result.repeatedCoordinates[0]) + Math.abs(result.repeatedCoordinates[1])));	
		return true;
	}

});




function getNewDirection(turnDirection, currentDirection){
    // n=0, e=1, s=2, w=3
    var changeBy = turnDirection == "L" ? -1 : 1;
    
    var newDirection = currentDirection + changeBy;
    if(newDirection==-1) newDirection = 3;
    if(newDirection==4) newDirection = 0;
    return newDirection;
}

function move(currentCoordinates,newDirection, distance, previousCoordinates){

    var result = null;

    switch(newDirection){
        case 0:
            // north
			result = calculateNewCoordinates(previousCoordinates, currentCoordinates, distance, 0);    
            break;
        case 1:
            // east
            result = calculateNewCoordinates(previousCoordinates, currentCoordinates, 0, distance);    
            break;
        case 2:
            // south
            result = calculateNewCoordinates(previousCoordinates, currentCoordinates, -distance, 0);        
            break;
        case 3:
            // west
            result = calculateNewCoordinates(previousCoordinates, currentCoordinates, 0, -distance);    
            break;            
    }
	
	return result;
}

function calculateNewCoordinates(previousCoordinates, currentCoordinates, distanceN, distanceE){
		
		var distance = distanceN != 0 ? distanceN : distanceE;
		var tempCoordinates;
		var repeatedCoordinates;
		
		for(var i=1;i<=Math.abs(distance); i++){
			var originali = distance > 0 ? i : -i;  
			tempCoordinates = distanceN != 0 ? [currentCoordinates[0] + originali, currentCoordinates[1]] : [currentCoordinates[0], currentCoordinates[1] + originali];
			
			if(previousCoordinates.includes(tempCoordinates.toString())){
				repeatedCoordinates = tempCoordinates;
				break;
			}
			
			previousCoordinates.push(tempCoordinates.toString());
		}
		return { newCoordinates: tempCoordinates, repeatedCoordinates: repeatedCoordinates};
}