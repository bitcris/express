
//Uso da classe filter
const db = fs.readFile('database.json', (err, data) => {
    if(err){console.log('ERRO')}
    var database = JSON.parse(data);
    const pos = database.filter((item) => {return item.username === 'mike'})
    console.log(pos);
  });