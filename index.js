var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    username: process.argv[2],
    password: process.argv[3], // optional, prompted if none given
    host: process.argv[4],
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: process.argv[5] ,
    exclude: ['.git', '.idea', 'tmp/*']
}

config.continueOnError = true;

ftpDeploy.on('upload-error', function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});







