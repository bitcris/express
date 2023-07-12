const axios = require('axios');


async function getIp(req) {

  try {
    const resposta = await axios.get('http://ip-api.com/json');
    const dados = resposta.data;
    console.log(dados);
    return dados;
  } catch (erro) {
    console.error('Erro ao obter os dados do IP:', erro);
  }
}

module.exports = getIp;

