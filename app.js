//Just copy and paste the below code. HAPPY CODING 
function getMoneySpent(keyboards, drives, b) {
    let max = -1
  for(let i = 0; i<keyboards.length; i++){
      for(let j = 0; j<drives.length; j++){
       if(keyboards[i]+drives[j] <=b && max < keyboards[i]+drives[j]){
        //   if(max < keyboards[i]+drives[j]){
              max = keyboards[i]+drives[j] 
        //   }
       }   
      }
  }
  if(max == 0){
      return -1
  }
  else{
      return max
  }
}
