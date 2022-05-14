// import fetch from 'node-fetch';
const fetch = require('node-fetch');

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
        // promises async await
        const arrayStatus = Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url);
                    return `${res.status} - ${res.statusText}`;
        }));
        return arrayStatus;
    } catch (erro) {
        manejaErros(erro);
    }
}

function geraArrayURLs(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join()
    );
}

async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);

    // spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }));

    return resultados;
}

// export { validaURLs }
module.exports = { validaURLs }