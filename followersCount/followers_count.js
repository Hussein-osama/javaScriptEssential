let count = 0;
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
    document.getElementById("countDisplay").textContent = count;
}

function resetCount() {
  count = 0;
  document.getElementById("countDisplay").textContent = count;
  alert("The Followers count has been reset.");
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
    }
function checkCountValue() {
        if (count === 10) {
          alert("Your Instagram post gained 10 followers! Congratulations!");
        } else if (count === 20) {
          alert("Your Instagram post gained 20 followers! Keep it up!");
        }
      }