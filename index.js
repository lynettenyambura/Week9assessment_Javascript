function invokeAfterDelay(callback) {
    setTimeout(callback, 2000);
  }
  function displayMessage() {
    console.log("callback Invoked after 2 seconds!");
  }
  invokeAfterDelay(displayMessage);