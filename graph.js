class Graph {
    constructor(n){
        this.numOfVertices = n;
        this.adjacent = new Map();
    }

    addVertex(v){
        this.adjacent.set(v, []);
    }
    addEdge(v1, v2){
        this.adjacent.get(v1).push(v2);
        this.adjacent.get(v2).push(v1);
    }

  

    print(){
        let vertices = this.adjacent.keys();
        
        for (const vertex of vertices ){
            console.log(vertex)

            for(const neighbor of this.adjacent.get(vertex)){
                console.log(neighbor)
            }
        }
    }
}

let g = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.print();

// g.bfs('A');
// console.log('\n')

// g.dfs('A');

// g.dfs_rec('A');

// g.bfs_rec('A');