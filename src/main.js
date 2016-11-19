// we want font-awesome to load as soon as possible to show the fa-spinner
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('components')
    // .plugin('aurelia-google-maps', config => {
    //   config.options({
    //     apiKey: 'AIzaSyAnr_bI-x5psOiRkTsLGwJa385BiyANX4Y',
    //     apiLibraries: 'drawing, geometry', //get optional libraries like drawing, geometry, ... - comma seperated list
    //     options: { panControl: true, panControlOptions: { position: 9 } } //add google.maps.MapOptions on construct (https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
    //   });
    // })
    // .plugin('aurelia-api', config => {
    //   // Register an authentication hostsconfigure
    //   config
    //     .registerEndpoint('auth', 'https://myapi.org/auth')
    //     .registerEndpoint('protected-api', 'https://myapi.org/protected-api')
    //     .registerEndpoint('public-api', 'http://myapi.org/public-api');
    // })
    // /* configure aurelia-authentication */
    // .plugin('aurelia-authentication', baseConfig => {
    //   var authConfig = require('../auth-config');
    //   baseConfig.configure(authConfig);
    // });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}