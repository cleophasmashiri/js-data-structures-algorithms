import { Node } from './Node';

export class BinarySearchTree {

    delete(k: number) {

        this.deleteNode(this.r, k);

    }
    deleteNode(n: Node, k: number): Node {
        if (!n) {
            return n;
        } else if (k > n.key) {
            n.right = this.deleteNode(n.right, k);
            return n;
        } else if (k < n.key) {
            n.left = this.deleteNode(n.left, k);
            return n;
        } else {
            // no child
            if (!n.left && !n.right) {
                n = undefined;
                return n;
            } else if (n.left && !n.right) { // has 1 child
                n = n.left;
                return n;
            } else if (n.right && !n.left) { // has 1 child
                n = n.right;
                return n;
            } else { // has 2 children
                const minNode = this.findMinNode(n.right);
                // copy into n
                n.key = minNode.key;
                n.value = minNode.value;
                n.right = this.deleteNode(n.right, n.key);
            }
        }
    }

    inorderTraversal(n: Node, arr: number[]) {
        if (n && arr) {
            this.inorderTraversal(n.left, arr);
            arr.push(n.key);
            this.inorderTraversal(n.right, arr);
        }
    }
    postorderTraversal(n: Node, arr: number[]) {
        if (n && arr) {
            this.postorderTraversal(n.left, arr);
            this.postorderTraversal(n.right, arr);
            arr.push(n.key);
        }
    }
    preorderTraversal(n: Node, arr: number[]) {
        if (n && arr) {
            arr.push(n.key);
            this.preorderTraversal(n.left, arr);
            this.preorderTraversal(n.right, arr);
        }
    }

    find(k: number): string {
        const n = this.findNode(this.r, k);
        return !n ? undefined : n.value;
    }
    findNode(r: Node, k: number): Node {
        if (!r || r.key === k)
            return r;
        else if (k > r.key) {
            return this.findNode(r.right, k);
        } else {
            return this.findNode(r.left, k);
        }
    }

    findMinNode(n: Node): Node {
        //console.log('min', n);
        if (!n || !n.left) {
            console.log('min', n);
            return n;
        } else {
            return this.findMinNode(n.left);
        } 
    }

    r: Node;

    insert(k: number, v: string) {
        this.r = this.insertNode(this.r, k, v);
    }
    private insertNode(n: Node, k: number, v: string): Node {
        if (!n) {
            n = new Node(k, v);
            return n;
        }
        if (k > n.key)
            n.right = this.insertNode(n.right, k, v);
        else if (k < n.key)
            n.left = this.insertNode(n.left, k, v);
        return n;
    }

}

