// parser.js

function parseUserAgent(text) {
    const browsers = [
      { name: 'Chrome', system: 'Windows' },
      { name: 'Chrome', system: 'Linux' },
      { name: 'Chrome', system: 'Mac' },
      { name: 'Firefox', system: 'Windows' },
      { name: 'Firefox', system: 'Linux' },
      { name: 'Firefox', system: 'Mac' },
      { name: 'Safari', system: 'Mac' },
      { name: 'Edge', system: 'Windows' },
      { name: 'Opera', system: 'Windows' },
      { name: 'Opera', system: 'Linux' },
      { name: 'Opera', system: 'Mac' },
    ];
  
    let navegador = 'Não identificado';
    let sistemaOperacional = 'Não identificado';
  
    for (const browser of browsers) {
      const browserName = browser.name;
      const systemName = browser.system;
  
      if (text.includes(browserName)) {
        navegador = browserName;
        sistemaOperacional = systemName;
        break;
      }
    }
  
    const result = {
      navegador,
      sistemaOperacional
    };
  
    return result;
  }
  
  module.exports = parseUserAgent;
  