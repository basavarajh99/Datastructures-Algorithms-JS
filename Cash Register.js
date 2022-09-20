function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  //console.log(change);
  let cidTotal = 0;
  for(let elem of cid){
    cidTotal += elem[1]*100;
    //console.log(cidTotal);
  }

  //Insufficient funds
  if(change > cidTotal)
    return {status: "INSUFFICIENT_FUNDS", change: []};
  
  //Closed
  else if(change === cidTotal)
  return {status: "CLOSED", change: cid}

  //other cases: 
  //cid > change and change can be paid with available        
  //denominations or change can't be paid with available
  //denominations 
  else{
    let ans = [];
    cid = cid.reverse();
    let moneyUnits = {
      'ONE HUNDRED': 10000,
      'TWENTY': 2000,
      'TEN': 1000,
      'FIVE': 500,
      'ONE': 100,
      'QUARTER': 25,
      'DIME': 10,
      'NICKEL': 5,
      'PENNY': 1
    }
    //console.log(cid);
    for(let elem of cid){
      let remains = [elem[0], 0];
      elem[1] *= 100;
      //console.log(elem);
      while(change >= moneyUnits[elem[0]] && elem[1] > 0){
        //console.log(elem[1])
        change -= moneyUnits[elem[0]];
        //console.log(change)
        elem[1] -= moneyUnits[elem[0]];
        //console.log(elem[1])
        remains[1] += moneyUnits[elem[0]] / 100;
      }
      //cid > change and change can be paid with 
      //available denominations
      if(remains[1] > 0)
        ans.push(remains);
    }
    
    console.log(ans)

    //cid > change and change can't be paid with available   
    //denominations
    if(change > 0)
      return {status: "INSUFFICIENT_FUNDS", change: []};
    
    return {status: "OPEN", change: ans};
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
