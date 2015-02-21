Package.describe({
  summary: "Switch component for Meteor",
  version: "1.0.0",
  git: "https://github.com/maxharris9/maxharris9-switch.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');
  api.use(['reactive-var', 'templating', 'underscore', 'maxharris9:template-instance-utils'], 'client');

  api.addFiles('styles.js', 'client');
  api.addFiles('switch.html', 'client');
  api.addFiles('switch.js', 'client');
  api.export(['switchSetup'], 'client');
});

Package.onTest(function(api) {
  api.use(['maxharris9:switch', 'tinytest', 'test-helpers']);
  api.addFiles('maxharris9:switch-tests.js', ['client', 'server']);
});