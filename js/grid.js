

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('#container');

const userInput = prompt('Please enter a number between 1 and 100:');
  const number = parseInt(userInput, 10);

  if (isNaN(number) || number < 1 || number > 100) {
    alert('Invalid input. Please refresh and enter a valid number.');
    return;
  }

const containerWidth = 960;
  const gap = 10;
  const numPerRow = 5; // You can adjust this number as needed
  const itemWidth = (containerWidth - (numPerRow - 1) * gap) / numPerRow;


  for (let i = 0; i < number; i++) {
    const newDiv = document.createElement('div');
newDiv.id = `div${i + 1}`;
    newDiv.style.width = `${itemWidth}px`;

newDiv.style.height = `${itemWidth}px`;
    
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '5px';
    newDiv.style.padding = '10px';

// Add event listener to change color on click
    newDiv.addEventListener('click', function() {
      const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
      this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });


    container.appendChild(newDiv);
  }
});
