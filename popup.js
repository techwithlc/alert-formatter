// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const confirmation = document.getElementById("confirmation");
  
    copyButton.addEventListener("click", function () {
      // Get input values
      const issue = document.getElementById("issue").value.trim();
      const time = document.getElementById("time").value.trim();
      const region = document.getElementById("region").value.trim();
      const details = document.getElementById("details").value.trim();
  
      // Generate the formatted message
      const message = `
  Hi team, I received the following alert:
  *Issue Description* : ${issue || "N/A"}
  *Time* : ${time || "N/A"}
  *Region* : ${region || "N/A"}
  *Details* : ${details || "N/A"}
  Does anyone have any ideas or updates?
      `.trim();
  
      // Copy the message to the clipboard
      navigator.clipboard.writeText(message).then(() => {
        // Show confirmation message
        confirmation.style.display = "block";
        setTimeout(() => {
          confirmation.style.display = "none";
        }, 2000); // Hide after 2 seconds
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    });
  });
  