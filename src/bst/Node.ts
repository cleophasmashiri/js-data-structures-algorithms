export class Node {

    right: Node;
    left: Node;

    constructor(public key: number, public value: string) {
        
    }

    min(): Node {
        if (this.left ===  null) {
            return this;
        } else {
            return this.left.min();
        }
    }
}