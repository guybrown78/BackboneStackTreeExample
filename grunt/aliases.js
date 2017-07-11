module.exports = {
  'clientAdminApp':[
    'requirejs:clientAdmin',
    'sass:clientAdmin',
    'newer:copy:externalLibraries',
   // 'newer:jshint:clientAdmin',
    'newer:cssmin:clientAdmin',
   // 'newer:imagemin:clientAdmin'
  ],
  'clientAdmin':[
      'clientAdminApp',
      'connect:clientAdmin'
  ],
 
  'default': [
      'clientAdminApp',
      'connect:equal'
  ]
};
