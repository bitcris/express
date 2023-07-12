function GetHeader(req) {

  var ip = 'Não identificado'
  console.log(req)
  
  
  return function(req, res, next) {

    req.data1 = req.rawHeaders
    
    data2 = {
      ip: ip
    }
    next();
  };
}

module.exports = GetHeader;

  