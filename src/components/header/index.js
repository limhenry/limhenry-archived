import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link, Match } from 'preact-router/match';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/Toolbar/style.css';
import style from './style';

export default class Header extends Component {

	closeDrawer() {
		this.drawer.MDComponent.open = false;
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	ggg = this.linkTo('/awards');
	goHome = this.linkTo('/');
	goStories = this.linkTo('/stories');
	goProjects = this.linkTo('/projects');
	goTalks = this.linkTo('/talks');
	goAwards = this.linkTo('/awards');

	render() {
		return (
			<div>
				<Toolbar class={style.toolbar}>
					<Toolbar.Row>
						<Toolbar.Section align-start>
							<Toolbar.Title>limhenry.xyz</Toolbar.Title>
						</Toolbar.Section>
						<Toolbar.Section class={style.section} align-end>
							<div class={style.navList}>
								<Link activeClassName={style.active} href="/">Home</Link>
								<Match path="/stories">
									{({ path, url }) => (
										(path.startsWith('/stories/')) ?
											<Link activeClassName={style.active} href="/stories" path={url}>Stories</Link>
											: <Link activeClassName={style.active} href="/stories">Stories</Link>
									)}
								</Match>
								<Link activeClassName={style.active} href="/projects">Projects</Link>
								<Link activeClassName={style.active} href="/talks">Talks</Link>
								<Link activeClassName={style.active} href="/awards">Awards</Link>
							</div>
						</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
				<Drawer.TemporaryDrawer ref={this.drawerRef}>
					<Drawer.TemporaryDrawerContent>
						<div class={style.drawerList}>
							<Link activeClassName={style.active} href="/">Home</Link>
							<Link activeClassName={style.active} href="/stories">Stories</Link>
							<Link activeClassName={style.active} href="/projects">Projects</Link>
							<Link activeClassName={style.active} href="/talks">Talks</Link>
							<Link activeClassName={style.active} href="/awards">Awards</Link>
						</div>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
			</div>
		);
	}
}
