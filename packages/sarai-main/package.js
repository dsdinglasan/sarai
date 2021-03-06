Package.describe({
  name: 'sarai:sarai-main',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    "sarai:sarai-lib",
    "sarai:sarai-user",
    "sarai:sarai-admin",
    "sarai:sarai-layout",
    "sarai:sarai-main-data",
    "sarai:sarai-services-data",
    "sarai:sarai-blog-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-home/index.html",
    "client/components/sarai-home/events.js",
    "client/components/sarai-home/includes/banner/banner-events.js",
    "client/components/sarai-home/includes/banner/banner.html",
    "client/components/sarai-home/includes/banner/banner.js",
    "client/components/sarai-home/includes/banner/banner.less",
    "client/components/sarai-home/includes/crop-list/crop-list.html",
    "client/components/sarai-home/includes/crop-list/crop-list.js",
    "client/components/sarai-home/includes/crop-list/crop-list.less",
    "client/components/sarai-home/includes/services-list/services-list.html",
    "client/components/sarai-home/includes/services-list/services-list.js",
    "client/components/sarai-home/includes/services-list/services-list.less",
    "client/components/sarai-home/includes/reports/reports.html",
    "client/components/sarai-home/includes/reports/reports.js",
    "client/components/sarai-home/includes/reports/reports.less",
    "client/components/sarai-home/includes/blog-list/blog-list.html",
    "client/components/sarai-home/includes/blog-list/blog-list.js",
    "client/components/sarai-home/includes/blog-list/blog-list.less",
    "client/components/sarai-home/route.js",
    "client/components/sarai-home/helpers.js",
    "client/components/sarai-home/on-created.js"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    //"public/images/pest_banner.png"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-main');
});
