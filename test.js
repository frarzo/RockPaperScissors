var a=[1,2,3,4,5,6,7,8,9];


b=a.slice(0,2);
console.log(a);
console.log(b);

console.log(a.slice(0,2).concat(a.splice(a.length-1)));
