import { BinarySearchTree } from "./BinarySearchTree";

describe('BST insert function', ()=> {
    let t1: BinarySearchTree;
    beforeEach(() => {
        t1 = new BinarySearchTree();
        t1.insert(5, 'a');
        t1.insert(3, 'b');
        t1.insert(2, 'c');
        t1.insert(4, 'd');
        t1.insert(7, 'e');
        t1.insert(6, 'f');
        t1.insert(8, 'g');
    });
    it('Should build BST', ()=> {
      
        const arr:number[] = [];
        t1.preorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('5,3,2,4,7,6,8');
    });
});
describe('BST find', () => {
    let t1: BinarySearchTree;
    beforeEach(() => {
        t1 = new BinarySearchTree();
        t1.insert(5, 'a');
        t1.insert(3, 'b');
        t1.insert(2, 'c');
        t1.insert(4, 'd');
        t1.insert(7, 'e');
        t1.insert(6, 'f');
        t1.insert(8, 'g');
    });
    it('should return c', () => {
        expect(t1.find(7)).toBe('e');
        expect(t1.find(8)).toBe('g');
    });
});

describe('BST Traversal', () => {
    let t1: BinarySearchTree;
    beforeEach(() => {
        t1 = new BinarySearchTree();
        t1.insert(5, 'a');
        t1.insert(3, 'b');
        t1.insert(2, 'c');
        t1.insert(4, 'd');
        t1.insert(7, 'e');
        t1.insert(6, 'f');
        t1.insert(8, 'g');
    });

    it('should return preorderTraversal list', () => {
        const arr:number[] = [];
        t1.preorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('5,3,2,4,7,6,8');
    });
    it('should return preorderTraversal list', () => {
        const arr:number[] = [];
        t1.postorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('2,4,3,6,8,7,5');
    });
    it('should return inorderTraversal list', () => {
        const arr:number[] = [];
        t1.inorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('2,3,4,5,6,7,8');
    });
});

describe('BST delete', () => {
    let t1: BinarySearchTree;
    beforeEach(() => {
        t1 = new BinarySearchTree();
        t1.insert(5, 'a');
        t1.insert(3, 'b');
        t1.insert(2, 'c');
        t1.insert(4, 'd');
        t1.insert(7, 'e');
        t1.insert(6, 'f');
        t1.insert(8, 'g');
    });
    it('should delete node with no child', () => {
        t1.delete(2);
        const arr:number[] = [];
        t1.inorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('3,4,5,6,7,8');
    });
    it('should delete node with 1 child', () => {
        t1.insert(9, 'h');
        t1.delete(8);
        const arr:number[] = [];
        t1.inorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('2,3,4,5,6,7,9');
    });
    it('should delete node with 2 children', () => {
        t1.delete(5);
        const arr:number[] = [];
        t1.inorderTraversal(t1.r, arr)
        expect(arr.join()).toBe('2,3,4,6,7,8');
    });
});