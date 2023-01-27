// Solution using one loop
console.log("Solution using one loop:");
for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}

// Solution using two nested loops
console.log("Solution using two nested loops:");
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
