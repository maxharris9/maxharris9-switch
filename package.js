Package.describe({
  summary: "Switch component for Meteor",
  version: "1.0.1",
  git: "https://github.com/max-leportlabs/maxharris9-switch.git",
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');
  api.use(['reactive-var', 'templating', 'maxharris9:template-instance-utils@1.0.3', 'maxharris9:straightsix@1.0.1'], 'client');

  api.addFiles('styles.js', 'client');
  api.addFiles('switch.html', 'client');
  api.addFiles('switch.js', 'client');
  api.export(['switchSetup'], 'client');
});

Package.onTest(function(api) {
  api.use(['maxharris9:switch', 'maxharris9:straightsix', 'tinytest', 'test-helpers']);
  api.addFiles('styles.js', 'client');

  api.export(['switchSetup', 'style', 'css'], 'client');
  api.addFiles('maxharris9:switch-tests.js', ['client']);
});