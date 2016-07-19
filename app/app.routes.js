"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var what_we_do_component_1 = require('./what-we-do.component');
var contact_us_component_1 = require('./contact-us.component');
var routes = [
    { path: 'home', component: home_component_1.Home },
    { path: 'what-we-do', component: what_we_do_component_1.WhatWeDo },
    { path: 'contact-us', component: contact_us_component_1.ContactUs }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map