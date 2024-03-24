// Student Marks
var marks = (85);

if (marks >79 && marks< 100){
    console.log("Your grade is A")
}
else if (marks>=60 && marks <= 79){
    console.log("Your grade is B")  
}
else if (marks>=50 && marks <= 59){
    console.log("Your grade is C")  
}
else if (marks>=40 && marks <= 49){
    console.log("Your grade is D")  
}
else if (marks>0 && marks<40){
    console.log("Your grade is E")  
}
//marks below 0 and above 100
else{
    console.log("Invalid marks!!!")
}