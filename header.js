function GetHeader(req) {

  var ip = 'Não identificado'
  //console.log(req.rawHeaders)


  
  
  return function(req, res, next) {

    req.data1 = 'GG-65363'
    
    data2 = {
      ip: ip
    }
    next();
  };
}

module.exports = GetHeader;

  