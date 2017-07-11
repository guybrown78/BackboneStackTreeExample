module.exports = {
    equal:{
        options:{
            base:'build',
            hostname:'localhost',
            keepalive:true,
            /*protocol: 'https', // or 'http2'
            port: 8443,
            key: grunt.file.read('server.key').toString(),
            cert: grunt.file.read('server.crt').toString(),
            ca: grunt.file.read('ca.crt').toString()*/
            open:{
                target: 'http://localhost:8000/admin/client.html',
                appName: 'Chrome'
            }
        }
    },
    
    clientAdmin:{
        options:{
            base:'build',
            hostname:'localhost',
            keepalive:true,
            open:{
                target: 'http://localhost:8000/admin/client.html',
                appName: 'Chrome'
            }
        }
    }
   
    
};
