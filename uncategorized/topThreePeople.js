/**
 * Given adj list of relationship of people, find top 3 people with max friends.
 * Example :
 * Input: 
 * [
 *  ['A','B'],
 *  ['B','C'], 
 * ]
 * Output: ['B','A','C']
 */
class Graph {
    constructor() {
        this.vertices = 0;
        this.adjList = new Map();
    }
    addEdge([u,v]) {
        if(this.adjList.has(u)) {
            this.adjList.get(u).push(v);
        } else {
            this.adjList.set(u, []);
            this.vertices++;
        }

        if(this.adjList.has(v)) {
            this.adjList.get(v).push(u);
        } else {
            this.adjList.set(v, []);
            this.vertices++;
        }
    }
}
function maxFriends(arr2d) {
    // create graph
    let graph = new Graph();
    for(const arr of arr2d) {
        graph.addEdge(arr);
    }
    // dfs ? - wtf
    // we don't need to traverse graph to identify no. of friends
    // it's directly available in a map
    // Only need to extract top 3 which can be done by implementing
    // priority queue(max heap) - O(nlogn)
}