import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from 'async!../routes/home';
import Stories from 'async!../routes/stories';
import StoriesPost from 'async!../routes/stories-post';
import Projects from 'async!../routes/projects';
import Talks from 'async!../routes/talks';
import Awards from 'async!../routes/awards';
import Footer from './footer';
import BottomNavBar from './bottom_navbar';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
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
					<Projects path="/projects/:id" />
					<Talks path="/talks" />
					<Talks path="/talks/:id" />
					<Awards path="/awards" />
				</Router>
				{/* <Footer /> */}
				<BottomNavBar />
			</div>
		);
	}
}
