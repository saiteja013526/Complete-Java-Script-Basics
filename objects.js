score = {
  wins: 0,
  losses: 0,
  tie: 0,
  m1: (a,b)=>{
   
    return a+b;
  }
};


let stringscore=JSON.stringify(score);


console.log(score)
console.log(score.m1(10,20));

console.log(stringscore);

console.log(JSON.parse(stringscore));

