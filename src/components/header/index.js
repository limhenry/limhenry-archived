import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
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
							<svg onClick={this.openDrawer} class={style.icon} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
								<g>
									<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
								</g>
							</svg>
							<Toolbar.Title>limhenry.xyz</Toolbar.Title>
						</Toolbar.Section>
						<Toolbar.Section class={style.section} align-end>
							<div class={style.navList}>
								<Link activeClassName={style.active} href="/">Home</Link>
								<Link activeClassName={style.active} href="/stories">Stories</Link>
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
