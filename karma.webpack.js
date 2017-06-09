// Dynamically find test files in src folder
var context = require.context('./src', true, /-spec\.js$/);
context.keys().forEach(context);
