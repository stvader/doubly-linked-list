const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node();
        this._tail = new Node();
    }

    append(data) {             
        if (this.length === 0) {
            let node = new Node(data);
            this._head = node;            
        } else if (this.length === 1) {
            this._tail = new Node(data, this._head);
            this._head.next = this._tail;
        } else {
            let oldTail = this._tail;
            this._tail = new Node(data, oldTail);
            oldTail.next = this._tail;            
        }

        this.length++;
        return this;                
    }

    head() {
        return this._head.data;
    }

    tail() {
        if (this.length === 1) return this._head.data;      
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        for (let i=0; i<index; i++) {
            node = node.next;             
        }

        return node.data;
    }

    insertAt(index, data) {
        if(index == 0) {
            let oldHead = this._head;
            this._head = new Node(data, oldHead);
            oldHead.prev = this._head;
        } else {
            let node = this._head;            
            for (let i=0; i<index; i++) {                
                node = node.next;            
            }
            let newNode = new Node(data, node.prev, node);
            node.prev.next = newNode;
            node.prev = newNode;
        }

        this.length++;
        return this;         
    }

    isEmpty() {
        if (this.length === 0) return true;
        return false;
    }

    clear() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;

        return this;         
    }

    deleteAt(index) { 
        if (this.length === 1) {
            this.clear();
        } else if(index == 0) {
            this._head = this._head.next;
            this._head.prev = null;
        } else if (index == this.length-1) {
            this._tail = this._tail.prev;
            this._tail.next = null;        
        } else {
            let node = this._head;
            for (let i=0; i<index; i++) {
                node = node.next;             
            }

            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        this.length--;
        return this;         
    }

    reverse() {
        let nodesArr = [];
        let node = this._head;
        for (let i=0; i<this.length; i++) {
            nodesArr.push(node.data);           
            node = node.next;                                    
        }         
        nodesArr.reverse();
        this.clear();
        nodesArr.forEach((item) => {
            this.append(item);           
        });  

        return this;              
    }

    indexOf(data) {
        let node = this._head;
        for (let i=0; i<this.length; i++) {
            if (node.data == data) return i;                     
            node = node.next;                                    
        }

        return -1;        
    }
}

module.exports = LinkedList;
