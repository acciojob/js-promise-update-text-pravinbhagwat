//your JS code here. If required.
function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

sayHello().then((message) => {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
});