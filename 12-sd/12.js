var fs = require('fs');

var map = {};

fs.readFile('reviews.csv', 'utf8', function(err,data) {
  if(!err) {
    var inn = data.split('\r\n');
    for(var i=1; i<inn.length; i++) {
      var inp = inn[i].split(',');
      var id = parseInt(inp[1]);
      var val = parseInt(inp[2]);

      if(map[id] == undefined) {
        map[id] = [val];
      } else {
        map[id].push(val);
      }
    }

    var ansval = 0;
    var ansid;

    for(var key in map) {
      var val = map[key];

      var avg = 0;
      for(var i=0; i<val.length; i++) avg += val[i];
      avg /= val.length;

      var sd = 0;
      for(var i=0; i<val.length; i++) {
        sd += Math.pow(val[i] - avg, 2);
      }
      sd = Math.sqrt(sd/val.length);

      if(sd > ansval) {
        ansval = sd;
        ansid = key;
      }
    }

    console.log(ansid);
    console.log(ansval);
  } else {
    console.log(err);
  }
});
