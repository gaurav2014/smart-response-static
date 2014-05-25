var JSFtp = require("jsftp"),
    fs = require('fs');

var Ftp = new JSFtp({
    host: process.argv[4],
    user: process.argv[2],
    pass: process.argv[3]
});

var traverseFileSystem = function (currentPath) {
    console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
        var currentFile = currentPath + '/' + files[i];
        var stats = fs.statSync(currentFile);
        if (stats.isFile()) {
            console.log(currentFile);
            uploadFile(currentFile);
        }
        else if (stats.isDirectory()) {
            Ftp.raw.mkd("/" + process.argv[5] + '/' + currentFile, function(err, data) {
                if (err) return console.error(err);

                console.log(data.text); // Show the FTP response text to the user
                console.log(data.code); // Show the FTP response code to the user

                traverseFileSystem(currentFile);

            });

        }
    }
};

Ftp.auth(process.argv[2], process.argv[3], function(err,data){
    if (err) return console.error(err);
    console.log('checking for folder');
    Ftp.ls(process.argv[5],function(err,data){
        if(err) console.log(err);
        console.log(data);
        if(!data.length){
            console.log('folder does not exist');
            makeDir();
        } else {
            Ftp.raw.rmd('process.argv[5]',function(err,data){
                if(err) console.log(err);
                makeDir();
            })
        }
    });
});


function makeDir(){
    Ftp.raw.mkd("/" + process.argv[5], function(err, data) {
        if (err) return console.error(err);

        console.log(data.text); // Show the FTP response text to the user
        console.log(data.code); // Show the FTP response code to the user

        traverseFileSystem('dist');

    });
}

function uploadFile(file){
    Ftp.put(file, process.argv[5] + "/" + file, function(err) {
        if (err) return console.error(err);
        if (!err)
            console.log("File transferred successfully!");
    });
}

function quit(){
    Ftp.raw.quit(function(err, data) {
        if (err) return console.error(err);

        console.log("Bye!");
    });
}


