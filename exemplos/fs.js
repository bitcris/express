fs.writeFile('database2.json', dados, (err) => {
    if(err){throw err};
    console.log("DADOS SALVOS");
  })