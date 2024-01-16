function updateProgressBar(containerId, value) {
    var progressBar = document.getElementById(containerId).querySelector('.progress-bar');
    var progressText = document.getElementById(containerId).querySelector('.progress-text');
  
    progressBar.style.width = value * 100 + '%';
    progressText.textContent = Math.round(value * 100) + ' %';
  }
  
  function simulateProgressBar(containerId, targetValue) {
    var value = 0;
    var interval = setInterval(function() {
      value += 0.01;
      updateProgressBar(containerId, value);
  
      if (value >= targetValue) {
        clearInterval(interval);
      }
    }, 50);
  }
  
  // Simulate progress for the first progress bar (id="progress-container1")
  simulateProgressBar('progress-container1', 0.9);
  
  // Simulate progress for the second progress bar (id="progress-container2")
  simulateProgressBar('progress-container2', 0.95);
  
  // Simulate progress for the second progress bar (id="progress-container2")
  simulateProgressBar('progress-container3', 0.8);

    // Simulate progress for the second progress bar (id="progress-container2")
    simulateProgressBar('progress-container4', 0.9);

      // Simulate progress for the second progress bar (id="progress-container2")
  simulateProgressBar('progress-container5', 1);

    // Simulate progress for the second progress bar (id="progress-container2")
    simulateProgressBar('progress-container6', 0.98);






  /* to do list */

  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    var newTask = document.createElement("li");
    newTask.innerHTML = `${taskInput.value}<button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(newTask);
  
    taskInput.value = "";
  }
  
  function removeTask(button) {
    var taskToRemove = button.parentNode;
    taskToRemove.parentNode.removeChild(taskToRemove);
  }
  


/* flip box */

document.addEventListener('DOMContentLoaded', function () {
  var flipBox = document.getElementById('myFlipBox');
  var enterButton = document.getElementById('enterButton');

  enterButton.addEventListener('click', function () {
    flipBox.classList.add('flipped');

    // Get the entered name
    var nameInput = document.getElementById('nameInput');
    var name = nameInput.value.trim();

    // Display personalized greeting message
    var greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = name ? 'Hello\n ' + name + '!' : 'Hello!';
  });
});


/* wheather app*/


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("getWeatherBtn").addEventListener("click", function() {
      const cityInput = document.getElementById("cityInput").value;

      if (cityInput.trim() === "") {
          alert("Please enter a city name");
          return;
      }

      const apiKey = "0f4f8687db14fcd784d1b1e26eb4c896";

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              console.log("API Response:", data); // Log the API response for debugging

              if (data.main && data.main.temp) {
                  const temperature = data.main.temp;
                  document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°C`;
              } else {
                  alert("Unable to fetch weather data. Please check the city name.");
              }
          })
          .catch(error => {
              console.error("Error fetching data:", error);
              alert("An error occurred while fetching weather data.");
          });
  });
});





/*menu*/

function toggleMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
}

function closeMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = "none";
}









  
  
    