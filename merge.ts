export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = collection2.length - 1, k = 0;
    let last = 0
    while (i < collection1.length || j >= 0 || k < collection3.length) {
        let min1 = i < collection1.length ? collection1[i] : Infinity;
        let min2 = j >= 0 ? collection2[j] : Infinity;
        let min3 = k < collection3.length ? collection3[k] : Infinity;

        // console.log(min1,min2,min3)
        last = result[result.length - 1]
        if (min1 <= min2 && min1 <= min3) {
            if (min1 === last) {
                i++;
            } else {
                result.push(min1);
                i++;
            }
        } else if (min2 <= min1 && min2 <= min3) {
            if (min2 === last) {
                j--;
            } else {
                result.push(min2);
                j--;
            }
        } else {
            if (min3 === last) {
                k++;
            } else {
                result.push(min3);
                k++;
            }
        }
    
        console.log(result)
    }
    return result;
}