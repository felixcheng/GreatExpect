var gExServices = angular.module('gExServices', ['ngResource']);

gExServices.factory('Shares', ['$resource',
	function($resource){
		return $resource("https://resplendent-fire-8717.firebaseio.com", {}, {
			query: {method: 'GET'}
		});
	}
	]);

var request= require('request'),
	cheerio = require('cheerio'),

	urls= []; // urls is a variable to store the urls of the pictures. 
request('http://www.reddit.com/', function(err,resp,body)
{
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		$('a.title', '#siteTable').each(function(){
			
			var url = this.attr('href');
			if(url.indexOf('i.imgur.com')!=-1)
			{
			urls.push(url);
			}
		}); 
    
	};
	}) 