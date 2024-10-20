function getNumbers() {
  // Returns a promise that resolves with an array of numbers
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000); // Reduced delay to 1 second
  });
}

getNumbers()
  .then((numbers) => {
    // First promise: filter out odd numbers immediately
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    document.getElementById("output").textContent = evenNumbers.join(", ");
    return evenNumbers; // Directly return the even numbers
  })
  .then((evenNumbers) => {
    // Second promise: multiply even numbers by 2 immediately
    const multipliedNumbers = evenNumbers.map((num) => num * 2);
    document.getElementById("output").textContent =
      multipliedNumbers.join(", ");
    return multipliedNumbers; // Directly return the multiplied numbers
  })
  .catch((err) => console.error(err));
