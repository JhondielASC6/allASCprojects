function mash(){
    let h =("house");
    return(h);
}
console.log(mash());

function gethome(){
    let string = ['house', 'mansion', 'apartment', 'shack'];
    let max=string.length;
     let interval= Math.random()*(max-0)+0;
     interval = Math.floor(interval);
     return(string[interval]);
 }
console.log(gethome());

function getchildrencount(){
    let children;
    let intervail = Math.random()*(100-0)+0;
    intervail = Math.floor(intervail);
    console.log(`you will live in a ${gethome()}, and have, ${intervail}, chidren`);
   return (intervail)
}
getchildrencount()