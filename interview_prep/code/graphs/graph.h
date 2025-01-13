//Going to define node and adjancey list here?

//Or should i do a matrix

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
    bool visited;
};

//create node
struct Node* createNode(int a) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = a;
    newNode->next = NULL;
    newNode->visited = false;
    return newNode;
}

//add one way road;
void addEdge(struct Node* adjList[], int a, int b) {
    struct Node* newNode = createNode(b);
    
    //add edge to the front of the linked list but after the node for the act
    newNode->next = adjList[a]->next;
    adjList[a]->next = newNode;
};

void addBidirectionalEdge(struct Node* adjList[], int a, int b) {
    addEdge(adjList, a, b);
    addEdge(adjList, b, a);
}

void visualizeGraph(struct Node* adjList[], int numNodes) {
    for (int i = 0; i < numNodes; i++) {
        printf("Node %d: ", i);

        struct Node* currNode = adjList[i]->next;

        while (currNode != NULL) {
            printf("%d", currNode->data);
            if (currNode->next != NULL) {
                printf(", ");
            };
            currNode = currNode->next;
        }

        printf("\n");
    }
}

struct Node** initializeAdjList(int numNodes) {
    struct Node** adjList = (struct Node**)malloc(sizeof(struct Node*) * numNodes);

    for (int i = 0; i < numNodes; i++) {
        struct Node* tempNode = (struct Node*)malloc(sizeof(struct Node));
        tempNode->data = i;
        adjList[i] = tempNode; 
    }

    return adjList;
}