// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import { firebaseConfig } from 'firebaseConfig';
import * as firebase from 'firebase';
import './style';

let root;
function init() {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
	let App = require('./components/app').default;
	root = render(<App />, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === 'production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	// require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
