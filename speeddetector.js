// Speed
var speed= (100);
var speedlimit =70; 
var points;
// If the speed is less than 70, it should print “Ok”. 
if (speed <= speedlimit){
    console.log("OK")
}
else if(speed > speedlimit){
    points= Math.floor((speed-speedlimit)/5);
    // If the driver gets more than 12 points,
    if(points > 12){
        console.log("License suspended");
        }
        else{
            console.log("Points: ", points);
        }
    }