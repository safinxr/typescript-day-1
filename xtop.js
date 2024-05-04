const seePromise =() => {
    return new Promise((resolve, reject) => {
        const a = 3;
         if (a === 2) {
            resolve("nice")
        } else {
            reject("fucked")
        }

        console.log("top");
})
    
}

seePromise()
.then((result)=>{
    console.log("lol" , result);
}).catch((error)=>{
    console.log("fuck", error);
})

