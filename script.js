function getNumbers() {
  // Returns a promise that resolves with an array of numbers
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolves after 3 seconds
  });
}

getNumbers()
  .then((numbers) => {
    // Filter out odd numbers and print the array after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000); // Delay of 1 second
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2 and print the array after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent =
          multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 2000); // Delay of 2 seconds
    });
  })
  .catch((err) => console.error(err));
