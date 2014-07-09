angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"panel\"><h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p></div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"panel\">\n" +
    "  <h1>Home</h1>\n" +
    "\n" +
    "  <a class=\"button small\" href=\"https://github.com/so0k/ngbp-foundation-libsass\">\n" +
    "    <span class=\"fa fa-github\"></span> View on GitHub\n" +
    "  </a>\n" +
    "\n" +
    "  <span ng-bind=\"someVar\"></span>\n" +
    "  <ul>\n" +
    "      <li ng-repeat=\"item in someList\">{{item}}</li>\n" +
    "  </ul>\n" +
    "  <button class=\"small button round\" ng-click=\"someFunctionUsedByTheHomePage()\">Click Me</button>\n" +
    "</div>\n" +
    "");
}]);
