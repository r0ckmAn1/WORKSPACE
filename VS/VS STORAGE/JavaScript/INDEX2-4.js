//CHAPTA
let verX = Math.floor(Math.random()*10)
console.log(verX)
let verY = Math.floor(Math.random()*9)
console.log(verY)
let key = verX+verY
let userKey = prompt(`verify you are a human (${verX} + ${verY} =)`)
if (userKey == key)
    {
    console.log("Human Verified")
    console.log("ChapTa support by 511.SEAN")
    }
else
        {
        console.log("verification failed")
        console.log("XXXXXXXXXXXXXXXXXXX")
        }