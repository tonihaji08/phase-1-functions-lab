// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance>42){
        return distance-42
    } else {return 42-distance}

    
    //returns the number of blocks given a value
}
  function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet)*264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start,destination) {
    {
        return Math.abs((destination-start)*264)
    }

    //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start,destination) <= 400){
        return 0
    }
    else if(distanceTravelledInFeet(start,destination)<2000){
        return (distanceTravelledInFeet(start,destination)-400)*0.02
    } else if((distanceTravelledInFeet(start,destination)>2500)){
        return 'cannot travel that far'
    } else{return 25}

    //returns the fare for the customer
  }
