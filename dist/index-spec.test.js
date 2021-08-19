describe('Bloco do teste de sanidade', () => {
    const numbers = [1, 2];
    it(`${numbers[0]} + ${numbers[1]} deve ser igual a ${numbers[0] + numbers[1]}`, () => {
        expect(1 + 1).toEqual(2);
    });
    it(`este teste de sanidade está a ser colocado só para estimular um build no TravisCI`, () => {
        expect(true).toBe(true);
    });
    it(`deve falhar e não activar o deploy deste app no heroku`, () => {
        expect(1 + 1).toEqual(0);
    });
});
//# sourceMappingURL=index-spec.test.js.map