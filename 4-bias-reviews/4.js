var fs = require('fs');

var follower = {};
var ever_check = {};
var reviews = [];
var ans = [];

fs.readFile('users.csv', 'utf8', function(err,user_content) {
  if(!err) {
    fs.readFile('reviews.csv', 'utf8', function(err, review_content) {
      if(!err) {

        // code here

        var tmp = user_content.split('\r\n');
        for(var i=1; i<tmp.length; i++) {
          if(tmp[i].length != 0) {
            var dat = tmp[i].split(',');
            follower[Number(dat[0])] = Number(dat[1]);
          }
        }

        tmp = review_content.split('\r\n');
        for(var i=1; i<tmp.length; i++) {
          if(tmp[i].length != 0) {
            var dat = tmp[i].split(',');
            reviews.push({
              review_id : Number(dat[0]),
              user : Number(dat[1]),
              rate : Number(dat[2]),
              txt : dat[3]
            })
          }
        }

        reviews.sort(function(a,b) {
          return a.review_id - b.review_id;
        });

        for(var i=0; i<reviews.length; i++) {
          if(ever_check[reviews[i].user] == undefined) {
            ever_check[reviews[i].user] = 1;
            if(reviews[i].rate == 5 && reviews[i].txt.length <= 100 && follower[reviews[i].user] < 100) {
              ans.push(reviews[i].review_id);
            }
          }
        }

        console.log(ans.join('\n'));
      }
    });
  }
});
