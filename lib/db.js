'use strict';
var mongoose = require('mongoose');

var db = function(){
    return {
        config: function(conf){
            mongoose.connect('mongodb://sunnykarira:Grocklmfao123@ds019893.mlab.com:19893/tekbooks');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'Connection error'));
            db.once('open', function(){
                console.log('db connection open');
            });
        }
    };
};

module.exports = db();
