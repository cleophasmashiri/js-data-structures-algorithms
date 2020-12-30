export class HashTable {
    table = new Array(137);

    simpleHash(key: string): number {
        let t = 0;
        for (let i=0;i<key.length;i++) {
            t+=key.charCodeAt(i);
        }
        return t%this.table.length;
    }

    put(data: string) {
        const i = this.simpleHash(data);
        this.table[i] = data;
    }

    get(key: string): string {
        const i = this.simpleHash(key);
        return this.table[i];
    }
}