const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node();
        this._tail = new Node();
    }

    append(data) {
        //let node = new Node(data);

       /* var node = {
            value: value,
            next: null,
            prev: null,
        }*/
         
        if (this.length === 0) {
            let node = new Node(data);
            this._head = node;//
            this._tail = node;//
        } else if (this.length === 1) {
            this._tail = new Node(data, this._head);
            this._head.next = this._tail;
        } else {
            let node = this._tail;
            this._tail = new Node(data, node);
            node.next = this._tail;            
        }

        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        //if (this.length === 1) return this._head;
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        for (let i=0; i<index; i++) {
            node = node.next;             
        }

        return node.data;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
