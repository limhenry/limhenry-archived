import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from 'async!../routes/home';
import Stories from 'async!../routes/stories';
import StoriesPost from 'async!../routes/stories-post';
import Projects from 'async!../routes/projects';
import Talks from 'async!../routes/talks';
import Awards from 'async!../routes/awards';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Stories path="/stories" />
					<StoriesPost path="/stories/:id" />
					<Projects path="/projects" />
					<Talks path="/talks" />
					<Awards path="/awards" />
					{/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
				</Router>
			</div>
		);
	}
}
