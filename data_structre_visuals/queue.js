// Implementing a queue using JavaScript
class Queue {
    constructor() {
        this.items = [];
        
        const itemA = "Item A";
        const itemB = "Item B";
        const itemC = "Item C";
        this.items.push(itemA);
        this.items.push(itemB);
        this.items.push(itemC);

        this.renderQueue();
    }

    queue(item) {
        this.items.push(item);
        this.renderQueue();
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.items.shift();
            this.renderQueue();
        } else {
            console.log("Queue is empty");
        }
    }

    peek() {
        if (!this.isEmpty()) {
            console.log("Top item:", this.items[this.items.length - 1]);
        } else {
            console.log("Queue is empty");
        }
    }

    // Check if Queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Render Queue visualization
    renderQueue() {
        const queueContainer = document.querySelector('.queue');
        queueContainer.innerHTML = '';

        for (let i = 0; i < this.items.length; i++ ) {
            const queueItem = document.createElement('div');
            queueItem.classList.add('stack-q-item');
            queueItem.textContent = this.items[i];
            queueContainer.appendChild(queueItem);
        }

    }
}

// Initialize queue and attach event listeners
const queue = new Queue();

document.getElementById('pushBtn').addEventListener('click', () => {
    const newItem = prompt("Enter item to push:");
    queue.queue(newItem);
});

document.getElementById('popBtn').addEventListener('click', () => {
    queue.dequeue();
});

document.getElementById('peekBtn').addEventListener('click', () => {
    queue.peek();
});

function goHome(){
     window.location.href = 'main.html'
}
