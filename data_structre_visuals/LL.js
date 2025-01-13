class Node {
    constructor(name) {
        this.name = name;
        this.data = name;
        this.prev = null;
        this.next = null;
    }
}

class LL {
    constructor(){
        this.list = []
        this.currNode = null
        
        const newNode = new Node('Node A');
        this.currNode = newNode

        this.list.push(newNode)
    }   

    addNode(name) {
        const newNode = new Node(name);
        
        if (!this.isEmpty) {
            this.currNode.prev = newNode;
            this.newNode.next = this.currNode;
        } 

        this.currNode = newNode
        this.list.push(newNode)
    }

    deleteNode() {

        if (!this.isEmpty) {
            const nextNode = this.currNode.next;
        
            this.currNode.next = null;
            this.currNode = nextNode;
    
            this.list.shift();
        } else {
            console.log("Is Empty")
        }
    
    }

    isEmpty() {
        return this.list.length === 0;
    }

    renderList() {
        const listContainer = document.querySelector('.linked-list');
        const linesContainer = document.querySelector('.lines');
        listContainer.innerHTML = '';
        linesContainer.innerHTML = '';

        this.list.forEach((node, index) => {
            const nodeElement = document.createElement('div');
            nodeElement.classList.add('node');
            nodeElement.textContent = node.data;
            listContainer.appendChild(nodeElement);

            if (index > 0) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', (index - 1) * 80 + 60);
                line.setAttribute('y1', 20);
                line.setAttribute('x2', index * 80 + 10);
                line.setAttribute('y2', 20);
                line.setAttribute('stroke', 'black');
                line.setAttribute('stroke-width', '2');
                linesContainer.appendChild(line);
            }
        });
    }
}

const list = new LL();

document.getElementById('pushBtn').addEventListener('click', () => {
    const newItem = prompt("Enter item to push:");
    list.addNode(newItem);
});

document.getElementById('popBtn').addEventListener('click', () => {
    list.deleteNode();
});

// document.getElementById('peekBtn').addEventListener('click', () => {
//     list.peek();
// });

document.getElementById('goHomeBtn').addEventListener('click', goHome);

function goHome(){
     window.location.href = 'main.html'
}
