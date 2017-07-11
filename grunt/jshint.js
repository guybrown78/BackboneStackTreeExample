module.exports = {
    equal: {
        options: {
            '-W058': true,
            globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true
            }
        },
        files: {
            src: ['development/js/**/*.js']
        }
    },
   
    clientAdmin: {
        options: {
            '-W058': true,
            globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true
            }
        },
        files: {
            src: ['development/admin/js/**/*.js']
        }
    }
};