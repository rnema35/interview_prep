# Compiler
CC = clang

# Compiler flags
CFLAGS = -Wall -g

# Source files
SRCS = bfs.c

# Header files
HEADERS = graph.h

# Output executable
TARGET = bfs

# Rule to build the target executable
$(TARGET): $(SRCS) $(HEADERS)
	$(CC) $(CFLAGS) -o $(TARGET) $(SRCS)

# Rule to clean the build
clean:
	rm -f $(TARGET) *.o

# Rule to run the program
run: $(TARGET)
	./$(TARGET)

# Phony targets
.PHONY: clean run
