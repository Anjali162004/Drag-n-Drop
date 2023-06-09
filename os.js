const firstContainer = document.getElementById('first-container');
const secondContainer = document.getElementById('second-container');
const resetBtn = document.getElementById('reset-btn');

let draggedItem = null;

// Add event listeners to the items in the source container
const items = document.getElementsByClassName('item');
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Add event listeners to the target container
secondContainer.addEventListener('dragover', dragOver);
secondContainer.addEventListener('dragenter', dragEnter);
secondContainer.addEventListener('dragleave', dragLeave);
secondContainer.addEventListener('drop', dragDrop);

// Event listeners for the dragged item
function dragStart() {
  draggedItem = this;
  setTimeout(() => this.style.display = 'none', 0);
}

function dragEnd() {
  draggedItem.style.display = 'block';
  draggedItem = null;
}

// Event listeners for the target container
function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add('highlight');
}

function dragLeave() {
  this.classList.remove('highlight');
}

function dragDrop() {
    this.classList.remove('highlight');
    this.appendChild(draggedItem);
    showMessage('Item dropped!');
  }
  

// Reset button event listener
resetBtn.addEventListener('click', reset);

// Reset the containers and show a reset message
function reset() {
  firstContainer.innerHTML = `
    <div class="item" draggable="true">Apple</div>
    <div class="item" draggable="true">Mango</div>
    <div class="item" draggable="true">Jackfruit</div>
  `;
  secondContainer.innerHTML = '';
  showMessage('Containers reset!');
}

// Display a message in the console and on the page
function showMessage(message) {
  // Remove any existing messages
  var existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(function(existingMessage) {
    document.body.removeChild(existingMessage);
  });

  var messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('message');

  // Center the message element on the page
  messageElement.style.marginTop = '40px';
  messageElement.style.textAlign = 'center';
  messageElement.style.fontSize = '22px';
  messageElement.style.color = 'green';
  messageElement.style.fontWeight = '700'

  document.body.appendChild(messageElement);

  // Remove the message element after a certain duration
  setTimeout(function() {
    document.body.removeChild(messageElement);
  }, 3000);
}