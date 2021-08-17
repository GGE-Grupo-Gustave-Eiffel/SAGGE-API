describe('Bloco do teste de sanidade', () => {

    const numbers : number[] = [1,2];
    it(`${numbers[0]} + ${numbers[1]} deve ser igual a ${numbers[0] + numbers[1]}`, () => {
        expect(1+1).toEqual(2);
    });

    it(`este teste de sanidade está a ser colocado só para estimular um build no TravisCI`, ()=>{
        expect(true).toBe(true);
    });
});