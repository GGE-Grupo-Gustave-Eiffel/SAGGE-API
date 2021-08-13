describe('Bloco do teste de sanidade', () => {

    const numbers : Array<number> = [1,2];
    it(`${numbers[0]} + ${numbers[1]} deve ser igual a ${numbers[0] + numbers[1]}`, () => {
        expect(1+1).toEqual(2);
    });
});