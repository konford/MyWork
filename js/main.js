var isChrome = !!window.chrome;
if (isChrome) {
var $ = document;
var cssId = 'myCss';
var head = $.getElementsByTagName('head')[0];
var link = $.createElement('link');
link.id = cssId;
link.rel = 'stylesheet';
link.type = 'text/css'; 
link.href = 'styles/chrome.css'; //путь к файлу стилей только для Chrome
link.media = 'all';
head.appendChild(link);
};




		
