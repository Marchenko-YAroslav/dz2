const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function per(){
    rl.question('Write first number ', (num1)=>{
        rl.question('Write second number ', (num2)=>{
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)    

            let P = (num1 + num2) *2
            console.log(P)

            rl.close()
        })
    })
}

per()