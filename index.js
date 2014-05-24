var JSFtp = require("jsftp");

var Ftp = new JSFtp({
    host: process.argv[4],
    user: process.argv[2],
    pass: process.argv[3]
});

Ftp.raw.mkd("/" + process.argv[4], function(err, data) {
    if (err) return console.error(err);

    console.log(data.text); // Show the FTP response text to the user
    console.log(data.code); // Show the FTP response code to the user

    Ftp.put('dist', "/" + process.argv[4], function(hadError) {
        if (!hadError)
            console.log("Files transferred successfully!");
    });

});