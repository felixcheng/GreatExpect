
var gExApp = angular.module('gExApp', ['ngRoute', 'ngResource', 'gExControllers', 'gExServices', "firebase"]);
// var request= require('request'),
// 	cheerio = require('cheerio');

gExApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/index', {
				templateUrl: 'partials/home.html',
				controller: 'InputCtrl'
			}).
			when('/portfo', {
				templateUrl: 'partials/portfolio.html',
				controller: 'PortfolioCtrl'
			}).
			otherwise({
				redirectTo: '/index'
			})
}]);


// var request= require('request'),
var	cheerio = require('cheerio');
var request= require('request');

// var	urls= []; 
// request('http://www.reddit.com/', function(err,resp,body)
// {
// 	if(!err && resp.statusCode == 200){
// 		var $ = cheerio.load(body);
// 		$('a.title', '#siteTable').each(function(){
			
// 			var url = this.attr('href');
// 			if(url.indexOf('i.imgur.com')!=-1)
// 			{
// 			urls.push(url);
// 			}
// 		}); 
    
// 	};
// 	console.log(urls);
// 	}) 