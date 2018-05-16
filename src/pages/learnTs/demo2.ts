

interface Check {
    arr: number[];
    fn(a: number): () => string;
}

let check: Check = {
    arr: [1, 2, 3],
    fn: function (a) {
        return () => {
            // console.log(this.arr);
            return 'we';
        }
    }
}

let a = check.fn(3);
a()
