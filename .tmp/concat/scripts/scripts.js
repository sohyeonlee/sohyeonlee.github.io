'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngResource',
    'ngRoute'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ridemate', {
        templateUrl: 'views/ridemate.html',
        controller: 'RidemateCtrl',
        controllerAs: 'ridemate'
      })
      .when('/miisik', {
        templateUrl: 'views/miisik.html',
        controller: 'MiisikCtrl',
        controllerAs: 'miisik'
      })
      .when('/tastehome', {
        templateUrl: 'views/tastehome.html',
        controller: 'TastehomeCtrl',
        controllerAs: 'tastehome'
      })
      .when('/expedia', {
        templateUrl: 'views/expedia.html',
        controller: 'ExpediaCtrl',
        controllerAs: 'expedia'
      })
      .when('/pickeat', {
        templateUrl: 'views/pickeat.html',
        controller: 'PickeatCtrl',
        controllerAs: 'pickeat'
      })
      .when('/cs61as-quiz-system', {
        templateUrl: 'views/cs.html',
        controller: 'CsCtrl',
        controllerAs: 'cs'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name app.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"center\"> <img src=\"images/me.png\"><br><br> Hello my name is Sohyeon. I go by “Irene”.<br> <br> I study computer science in school and I love building and experimenting new technologies.<br> <br> I am passionate about solving problems that can create a value to society.<br> <br> <div class=\"sns\"> <a href=\"https://www.facebook.com/sohyeonl00\" class=\"sns-icons\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a> <a href=\"https://www.linkedin.com/in/sohyeonlee\" class=\"sns-icons\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a> <a href=\"https://www.github.com/sohyeonlee\" class=\"sns-icons\" target=\"_blank\"><i class=\"fa fa-github\"></i></a> </div> </div>"
  );


  $templateCache.put('views/cs.html',
    "will be updated soon!"
  );


  $templateCache.put('views/expedia.html',
    "<div class=\"center\"> <div class=\"proj-contents\"> <img src=\"images/expedia.jpeg\" class=\"proj-img\"> <h3><u> Software Engineering Intern at <a href=\"https://www.expedia.com\" target=\"_blank\">Expedia</a></u></h3><br> <h4> What I did </h4> During summer of 2015, I worked as an intern at expedia - San Francisco office. I worked closely with Itinerary and Storefront team. I worked on building the API for the next trip information, fetching right data and displaying it on the main page.<br> <br> I also worked on several other projects, such as internal customer service app and internal customer monitoring dashboard page. All my projects are live now.<br> <br> <h4> Technology and Lessons I learned </h4> I worked mostly with Java Spring framework and little bit of Javascript(with handlebar) with the website. It was my first time building something that millions of users will use, so the importance of test coverage was once again emphasized. Showing that the features I built are actually giving some influence to the company is really amazing. And I had such nice experience with the whole team who were super helpful. </div><br> <div class=\"btn btn-main btn-lg\"><a href=\"www.findridemate.com\" target=\"_blank\"><span style=\"color:white; text-decoration: none\"> Visit Expedia </span></a></div> </div>"
  );


  $templateCache.put('views/header.html',
    "<div class=\"header\"> <div class=\"navbar navbar-default\" role=\"navigation\"> <a href=\"#/\"><img src=\"images/logo.png\" id=\"logo\" class=\"pull-left\"></a> <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\"> <ul class=\"nav navbar-nav pull-right\"> <li class=\"active\"><a href=\"#/\">WORK</a></li> <li><a ng-href=\"#/about\">ABOUT</a></li> </ul> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"row\"> <div class=\"col-md-4 col-sm-6 col-xs-12 center\"> <div class=\"card\"> <div class=\"card-img\"> <a href=\"#/ridemate\"> <img src=\"images/ridemate.png\" class=\"portfolio\"> </a> </div> <div class=\"card-content\"> <h4>Ridemate</h4> <h5 style=\"font-weight: normal\">Ride matching application for college students</h5> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 center\"> <div class=\"card\"> <a href=\"#/miisik\"> <img src=\"images/miisik.png\" class=\"portfolio\"> </a> <br> <h4>Miisik</h4> <h5 style=\"font-weight: normal\">Ride matching application for college students</h5> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 center\"> <div class=\"card\"> <a href=\"#/expedia\"> <img src=\"images/expedia.jpeg\" class=\"portfolio\"> </a> <br> <h4>Expedia</h4> <h5 style=\"font-weight: normal\">Ride matching application for college students</h5> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 center\"> <div class=\"card\"> <a href=\"#/tastehome\"> <img src=\"images/tastehome.png\" class=\"portfolio\"> </a> <br> <h4>Tastehome</h4> <h5 style=\"font-weight: normal\">Ride matching application for college students</h5> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 center\"> <div class=\"card\"> <a href=\"#/pickeat\"> <img src=\"images/pickeat-b.png\" class=\"portfolio\"> </a> <br> <h4>PickEat</h4> <h5 style=\"font-weight: normal\">Ride matching application for college students</h5> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 center\"> <div class=\"card\"> <a href=\"#/cs61as-quiz-system\"> <img src=\"images/cs.png\" class=\"portfolio\"> </a> <br> <h4> CS61AS Quiz System </h4> <h5 style=\"font-weight: normal\">Ride matching application for college students</h5> </div> </div> </div>"
  );


  $templateCache.put('views/miisik.html',
    "<div class=\"center\"> <div class=\"proj-contents\"> <img src=\"images/miisik.png\" class=\"proj-img\"> <h3><u> Miisik - Korean style ready-to-cook meal kit </u></h3><br> <h4> What is Miisik? </h4> Miisik is a Korean style meal kit that lets you cook delicious and healthy meal within 15 minutes. We operated in Bay Area where many people could not afford time to cook since they were too busy. <br> <h4> What was it like </h4> <img src=\"images/miisik-d.png\" class=\"proj-img\"> </div> will be updated with more information! <div class=\"btn btn-main btn-lg\"><a href=\"http://www.miisik.com\" target=\"_blank\"><span style=\"color:white; text-decoration: none !important\">Visit Miisik </span></a></div></div>"
  );


  $templateCache.put('views/pickeat.html',
    "will be updated with more information!"
  );


  $templateCache.put('views/ridemate.html',
    "<div class=\"center\"> <div class=\"proj-contents\"> <img src=\"images/ridemate.png\" class=\"proj-img\"> <h3><u> Project - Ridemate </u></h3><br> <h4> Ideation: </h4> As a college student myself, coming back or going to the airport after breaks is really troublesome. It costs a lot to uber/lyft/whatever such long distance. Right before college students were heading back to school on January, I saw many posts on Facebook groups something like: \"Can anyone going to Berkeley on the 14th share uber with me?\", I thought it would be nice to have a website with all that ride requests together. <br> <img src=\"images/ridemate-result.png\" class=\"proj-img\"><br> <h4> So what does it do? </h4> As you enter your information, it will display a list of people going to the same direction as you. This is how it will look like. Next to each ride results, you can send message to that person if you want to share a ride with him/her. </div><br> <img src=\"images/ridemate-msg.png\"><br><br> <div class=\"proj-contents\"> <h4> What now? </h4> I am currently trying to optimize this search functionality for better user experience. Also I got some feedbacks from people who have been using it, so I am looking forward to release the next version before Spring break! (yes, when everyone is again heading to the airport) </div><br> <div class=\"btn btn-main btn-lg\"><a href=\"https://www.findridemate.com\" target=\"_blank\"><span style=\"color:white; text-decoration: none\"> Check it out here </span></a></div> </div>"
  );


  $templateCache.put('views/tastehome.html',
    "<div class=\"center\"> <div class=\"proj-contents\"> <img src=\"images/tastehome.png\" class=\"proj-img\"> <h3><u> Tastehome </u></h3><br> <h4> What is Tastehome? </h4> Tastehome is a market place for home-cooked meals. People can apply to be cooks and have their online restaurants through the website. </div> will be updated with more information! </div>"
  );

}]);
