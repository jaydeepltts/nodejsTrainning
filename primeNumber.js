function primeNumber(value) {
    if(value>2){
        for(var i = 2 ; i< value ; i++){
            if(value%i === 0){
                return false
            }
            return true
        }
    }
    return false
    
}
primeNumber(20)