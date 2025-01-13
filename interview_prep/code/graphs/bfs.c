#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include "graph.h"

//Need a way to get the adjacecny list
//

//should return a path -- aka a set of nodes
//need a node structure? or just an adjacency list

int* BFS(struct Node** graph, int start, int numNodes) {
    
    struct Node* toExplore[numNodes];

    int* parent = malloc(sizeof(int) * (numNodes));
    for (int i = 0; i < numNodes; i++) {
        parent[i] = -1;
    }

    int front = 0, rear = 0;

    toExplore[rear] = graph[start];
    graph[start]->visited = true;
    rear++;

    while(front < rear) {
        struct Node* currNode = toExplore[front];
        printf("exploring node: %d\n", currNode->data);
        //printf("rear: %d\n", rear);
        front++;

        struct Node* neighbor = currNode->next;
        while(neighbor != NULL) {
            printf("neighbor: %d\n", neighbor->data);
            printf("%d\n", neighbor->visited);
            if (!neighbor->visited) {
                toExplore[rear] = graph[neighbor->data];
                //printf("neighbor: %d at position: %d\n", neighbor->data, rear);
                neighbor->visited = true;
                rear++;

                parent[neighbor->data] = currNode->data;
            }
            neighbor = neighbor->next;
        };
    };

    return parent;
};


void visualizeBFS(int* parents, int numNodes) {
    for (int i = 0; i < numNodes; i++) {
        printf("Parent of %d: %d \n", i, parents[i]);
    }
}

int main() {
    int numNodes = 5;
    struct Node** graph = initializeAdjList(numNodes);

    addEdge(graph, 0, 1);
    addBidirectionalEdge(graph, 2, 1);
    addBidirectionalEdge(graph, 2, 3);
    addBidirectionalEdge(graph, 3, 4);
    addBidirectionalEdge(graph, 0, 4);
    visualizeGraph(graph, numNodes);

    printf("\n");
    int* parents = BFS(graph, 0, numNodes);
    visualizeBFS(parents, numNodes);
};

