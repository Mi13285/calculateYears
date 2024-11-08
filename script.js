function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / Math.log(1 + interest * (1 - tax))
  );
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));

function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / Math.log(1 + interest * (1 - tax))
  );
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));
