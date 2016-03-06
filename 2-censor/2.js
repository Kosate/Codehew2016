var fs = require('fs');

var N = 991;
var rude = [];
var cen = "#]!(&@%?#]!(&@%?#]!(";

fs.readFile('rude-words.txt', 'utf8', function(err,dat) {
  if(!err) {
    rude = dat.split('\r\n');

    for(var i=0; i<=N; i++) {
      (function(i) {
        fs.readFile('./review/'+i+'.txt', 'utf8', function(err, data) {
          if(!err) {
            var has = false;
            for(var j=0; j<rude.length; j++) {
              if(data.indexOf(rude[j]) == -1 || rude[j] === '') continue;
              has = true;
              data = data.replace(new RegExp(rude[j], 'g'), cen.substr(0,rude[j].length));
            }
            if(has) {
              fs.writeFile('./out/censored-'+i+'.txt', data);
            }
          }
        });
      })(i);
    }
  }
});
