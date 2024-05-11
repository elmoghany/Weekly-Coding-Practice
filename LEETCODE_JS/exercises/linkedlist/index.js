// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
    insertFirst(data){
        this.head = new Node(data, this.head)
    }
    size(){
        let count = 0
        let node = this.head
        while(node){
            count ++
            node = node.next
        }
        return count
    }
    getFirst(){
        let node = this.head
        return node
    }
    getLast(){
        if(this.head){
            let node = this.head
            while(node){
                if(node.next == null)
                    return node
                node = node.next
            }
            return null
        }else{
            return null
        }
    }
    clear(){
        this.head = null
    }
    removeFirst(){
        if (!this.head){
            return
        }
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){
            return
        } else if (!this.head.next){
            this.head = null
            return
        } else{
            let prior_node = this.head
            let current_node = prior_node.next
            while(current_node){
                if(current_node.next == null){
                    prior_node.next = null
                    return prior_node
                }
                current_node = current_node.next
                prior_node = prior_node.next
            }
        }
    }
    insertLast(data){
        if(!this.head){
            this.head = new Node(data)
        } else if (!this.head.next){
            this.head.next = new Node(data)
        } else {
            let node = this.head
            while(node){
                if(!node.next){
                    node.next = new Node(data)
                    return
                }
                node = node.next
            }
        }
    }
    getAt(index){
        let node = this.head
        let count = 0
        while(node && count <= index){
            if(index === count){
                console.log("count= ", count)
                return node
            }
            count++
            node = node.next
        }
        return null
    }
    removeAt(index){
        let node = this.head
        let count = 0
        while(node){
            if(node == this.head){
                this.head = node.next
                return node
            } else if(count === index-1){
                prior_node = node
            } else if (count == index){
                prior_node.next = node.next
                node_to_remove = node
                node_to_remove.next= null
                return node
            }
            node = node.next
            count++
        }
        return null
    }
}

module.exports = { Node, LinkedList };

// const nodeOne = new Node(5)
// const list = new LinkedList()
// list.head = nodeOne
// list.insertFirst(4)
// console.log(list.getAt(0))
// console.log(list.getAt(1))