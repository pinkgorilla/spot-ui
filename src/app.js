import { Aurelia, inject } from 'aurelia-framework';
import { Session } from './utils/session';

@inject(Session)
export class App {
  constructor(session) {
    this.session = session;
  }

  configureRouter(config, router) {
    config.title = '';
    var routes = [
      { route: ['', 'Welcome'], name: 'welcome', moduleId: './welcome', nav: false, title: 'Home' },
      { route: 'spots',                              name: 'spots',                                   moduleId: './modules/spot/index',                                             nav: true,  title: 'spot',                       settings: { group:"master",       roles:["admin"] }},      
    ];

    if (!this.session.isAuthenticated)
      routes = [
        { route: ['', 'login'], name: 'login', moduleId: './login', nav: false, title: 'login' }
      ]
    else {
      routes = routes.filter(route => {
        if (route.settings && route.settings.roles)
          return route.settings.roles.find(role => {
            return this.session.roles.indexOf(role) != -1;
          }) != undefined;
        else
          return true;
      });
    }

    config.map(routes);
    this.router = router;
  }
}

