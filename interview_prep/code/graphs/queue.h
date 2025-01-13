#include <stdio.h>
#include <stdlib.h>

struct queue {
    int length;
    int read_position;
    int write_position;
    struct Node* queue[];
};

struct queue* newQueue(int numNodes) {
    struct queue* the_q = (struct queue*)malloc(sizeof(struct queue));
};