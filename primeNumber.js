function primeNumber(minRange, maxRange) {
    if(minRange>2){
        for (let i = minRange; i <= maxRange; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                   break;
                }
                console.log("prime Number",i);
            }
            
        }
    }
    return false
   
}
primeNumber(3,30)