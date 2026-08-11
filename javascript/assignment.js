function normalizeName(value){
    if(value == null || value.trim() === ""){
        console.log("Value is null or empty");
        return "Unknown";
    }
    console.log("Value is not null or empty");
    return value.trim();
}

console.log(normalizeName("  "));

// --- Ternary Operator --- //
// return value == null || value.trim() === "" ? "unknown" : value.trim();
// Format:- condition ? valueIfTrue : valueIfFalse