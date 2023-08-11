//! Task 1: malas with function//
let a = "Salam";
stringReversed = a => {
    return a.split("").reverse().join("").toLowerCase();
}
let b = stringReversed(a);
console.log(b);

// //! Task 2 different number comes out on the console//
let f = [1, 2, 3, 4];
let e = [1, 2, 3, 4, 5];

e.forEach(diffrentNumber => {
    if(!f.includes(diffrentNumber)){
        console.log(diffrentNumber);
    }
})

//! Task 3 Let the console come out with the same one//
let x = [1, 2, 3, 4, 5, 6];
let y = [7, 8, 9, 10, 11, 6];

x.forEach(sameNumber=> {
    if (y.includes(sameNumber)){
        console.log(sameNumber);
    }
});




