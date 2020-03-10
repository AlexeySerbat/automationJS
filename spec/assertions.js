
describe('Jasmine test', () => {
    let a = 3;
    let b = 3;

    let name1 = 'Alexander';
    let name2 = 'Alexander';
    let name3 = 'Alex';

    let arr1 = [1,2,3,4,5,6];
    let arr2 = [1,2,3,4,5,6];

    let arrStr1 = ['Apple', 'Cherry', 'Banana'];
    let arrStr2 = ['Apple', 'Cherry', 'Banana'];
    let arrStr3 = ['Watermelon', 'Melon', 'Orange'];
    it('numbers equal', () => {
        expect(a).toEqual(b);

    });
   it('strings equal', () => {
       expect(name1).toEqual(name2);
   });
    it('strings contains', () => {
        expect(name1).toContain(name3);
    });
    it('arrays equal', () => {
        expect(arr1).toEqual(arr2);

    });
    it('arrays of string equal', () => {
        expect(arrStr1).toEqual(arrStr2);
    });
});
