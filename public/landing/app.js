var webComponentsSupported = ('registerElement' in document 
	&& 'import' in document.createElement('link')
	&& 'content' in document.createElement('template'));

if (!webComponentsSupported) {
    var script = document.createElement('script');
    script.async = true;
    script.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
    script.onload = finishLazyLoading;
    document.head.appendChild(script);
} else {
    finishLazyLoading();
}

function finishLazyLoading() {

}