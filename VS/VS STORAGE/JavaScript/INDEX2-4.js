//CHAPTA
let verX = Math.floor(Math.random()*10)
console.log(verX)
let verY = Math.floor(Math.random()*9)
console.log(verY)
let key = verX+verY
let userKey = prompt(`${verX} + ${verY} = `)
if (userKey == key)
console.log("Human Verified")
else
console.log("verification failed")
    
