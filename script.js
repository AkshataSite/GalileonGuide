//Javascript for toggle menu
var navLinks = document.getElementById("navLinks");

    function showMenu() {
      navLinks.style.right = "0";
    }
    function hideMenu() {
      navLinks.style.right = "-200px";
    }
// Prompt the user to enter goals
const goals = [];
const goalCount = prompt('Enter the number of daily goals:');

for (let i = 1; i <= goalCount; i++) {
  const goal = prompt(`Enter goal ${i}:`);
  goals.push(goal);
}

// Add goals to the list
const goalList = document.getElementById('goalList');

goals.forEach(goal => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.textContent = goal;

  li.appendChild(checkbox);
  li.appendChild(label);
  goalList.appendChild(li);
});

// Handle checkbox click event
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const completionMessage = document.getElementById('completionMessage');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const parentLi = this.parentNode;
    if (this.checked) {
      parentLi.classList.add('completed');
    } else {
      parentLi.classList.remove('completed');
    }

    // Check if all goals are completed
    const allCompleted = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allCompleted) {
      completionMessage.style.display = 'block';
      alert('Good job!');
    } else {
      completionMessage.style.display = 'none';
    }
  });
});