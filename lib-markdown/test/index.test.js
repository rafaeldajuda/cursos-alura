const pegaArquivo = require('../index.js');

const arrayResult = [
    [
        {
            FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
        }
    ]
]

const arrayResultSemLinks = [
    "não há links"
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar array com resulstados', async () => {
        const resultado = await pegaArquivo('/test/arquivos1');
        expect(resultado).toEqual(arrayResult);
    });
    it('deve retornar mensagem "[não há links]"', async () => {
        const resultado = await pegaArquivo('/test/arquivos2');
        expect(resultado).toEqual(arrayResultSemLinks);
    });
});