function GetHeader(req) {

  var ip = 'Não identificado'
  const base = require('./teste.js')
  //console.log(req.rawHeaders)


  
  
  return function(req, res, next) {

    req.data1 = base.headers['cf-connecting-ip']
    
    data2 = {
      ip: ip
    }
    next();
  };
}

module.exports = GetHeader;

  