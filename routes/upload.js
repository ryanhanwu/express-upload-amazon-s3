 var _ = require('underscore'),
     AWS = require('aws-sdk'),
     fs = require('fs'),
     flow = require('flow');
 AWS.config.loadFromPath(__dirname + '/../config.json');

 exports.s3 = function(req, res) {

     var s3 = new AWS.S3(),
         files = _.toArray(req.files),
         uploadNumber = files.length,
         result = {
            error : 0,
            uploaded : []
         };

     _.each(files, function(file) {
         flow.exec(
         function() { // Read temp File
             fs.readFile(file.path, this);
         }, function(err, data) { // Upload file to S3
             s3.client.putObject({
                 Bucket: 'XXXXX Bucket Name', //Bucket Name
                 Key: file.name, //File Name
                 Body: data
             }, this);
         }, function(err, data) { //Upload Callback
             if(err) {
                 console.dir('Error : ' + err);
                 result.error++;
             }
             result.uploaded.push(data.ETag);
             this();
         }, function() {
             if(--uploadNumber === 0) {
                 res.render("result", {
                     title: "Upload Result",
                     message: result.error > 0 ? "Something is wroing, Check the log" : "Success!!",
                     entitiyIDs : result.uploaded
                 });
             }
         });
     });
 };