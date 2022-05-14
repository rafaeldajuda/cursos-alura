#!/usr/bin/env node

// import chalk from 'chalk'
// import { pegaArquivo } from './index.js'
// import { validaURLs } from './http-validacao.js';

const chalk = require('chalk');
const {pegaArquivo} = require('./index');
const {validaURLs} = require('./http-validacao.js');


const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    resultado.forEach(async listaLink => {
        if(caminho[3] === 'validar') {
            console.log(chalk.yellow('links validados'), await validaURLs(listaLink));
        } else {
            console.log(chalk.yellow('lista de links'), resultado);
        }
    });
}

processaTexto(caminho); 