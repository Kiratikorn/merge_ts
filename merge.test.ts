import { merge } from './merge';

describe('merge function', () => {
    it('should merge three sorted arrays', () => {
        const collection1 = [1, 3, 6];
        const collection2 = [9, 4, 2];
        const collection3 = [5, 7, 8];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  
    it('should handle arrays with different lengths', () => {
      const collection1 = [1, 3];
      const collection2 = [6];
      const collection3 = [0, 2, 8, 10];
      const expectedResult = [0, 1, 2, 3, 6, 8, 10];
  
      const merged = merge(collection1, collection2, collection3);
  
      expect(merged).toEqual(expectedResult);
    });
  
    it('should handle same number', () => {
      const collection1 = [2];
      const collection2 = [2];
      const collection3 = [2];
      const expectedResult = [2];
  
      const merged = merge(collection1, collection2, collection3);
  
      expect(merged).toEqual(expectedResult);
    });
  });
