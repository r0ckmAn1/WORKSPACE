let nSide = prompt("Enter the number of sides in each dice")
do {
    console.log("double throw for a",nSide,"sided Dice")
let numD1 = Math.floor(Math.random()*(nSide-1+1)+1)
console.log(numD1)//numD1 complete
let numD2 = Math.floor(Math.random()*(nSide-1+1)+1)
console.log(numD2)//numD2 complete
console.log("total sum of two throws",numD1+numD2)
rollAgain = prompt("Hit enter to roll ").toLowerCase()
    
} while (rollAgain = "yes");
