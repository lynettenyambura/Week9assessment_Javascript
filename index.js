function invokeAfterDelay(callback) {
    setTimeout(callback, 2000);
  }
  function displayMessage() {
    console.log("Hello World!");
  }
  invokeAfterDelay(displayMessage);