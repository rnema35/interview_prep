
// Implementing a stack using JavaScript
class Stack {
    constructor() {
        this.items = [];
        
        const itemA = "Item A";
        const itemB = "Item B";
        const itemC = "Item C";
        this.items.push(itemA);
        this.items.push(itemB);
        this.items.push(itemC);

        this.renderStack();
    }

    // Push operation
    push(item) {
        this.items.push(item);
        this.renderStack();
    }

    // Pop operation
    pop() {
        if (!this.isEmpty()) {
            this.items.pop();
            this.renderStack();
        } else {
            console.log("Stack is empty");
        }
    }

    // Peek operation
    peek() {
        if (!this.isEmpty()) {
            console.log("Top item:", this.items[this.items.length - 1]);
        } else {
            console.log("Stack is empty");
        }
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Render stack visualization
    renderStack() {
        const stackContainer = document.querySelector('.stack');
        stackContainer.innerHTML = '';

        for (let i = this.items.length - 1; i >= 0; i-- ) {
            const stackItem = document.createElement('div');
            stackItem.classList.add('stack-q-item');
            stackItem.textContent = this.items[i];
            stackContainer.appendChild(stackItem);
        }

    }
}

// Initialize stack and attach event listeners
const stack = new Stack();

document.getElementById('pushBtn').addEventListener('click', () => {
    const newItem = prompt("Enter item to push:");
    stack.push(newItem);
});

document.getElementById('popBtn').addEventListener('click', () => {
    stack.pop();
});

document.getElementById('peekBtn').addEventListener('click', () => {
    stack.peek();
});

function goHome(){
    window.location.href = 'main.html'
}

