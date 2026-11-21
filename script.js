function updateClock() {
  const now = new Date();
  
  // Format Time
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  // Dynamic Greeting based on time of day
  const greetingElement = document.getElementById('greeting');
  if (hours < 12) {
    greetingElement.textContent = "Good Morning, Shreya! 🌅";
  } else if (hours < 18) {
    greetingElement.textContent = "Good Afternoon, Shreya! ☀️";
  } else {
    greetingElement.textContent = "Good Evening, Shreya! 🌙";
  }

  // Convert 24h to 12h format
  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, '0');

  // Update DOM elements
  document.getElementById('time').textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  
  // Format Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Run clock immediately, then update every second
updateClock();
setInterval(updateClock, 1000);