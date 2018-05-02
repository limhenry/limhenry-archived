import { h } from 'preact';
import { Link, Match } from 'preact-router/match';
import style from './style';

const BottomNavBar = () => (
	<div class={style.bottom_navbar}>
		<Link activeClassName={style.active} class={style.nav_item} href="/">
			<svg>
				<g>
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
				</g>
			</svg>
			<span>Home</span>
		</Link>
		<Match path="/stories">
			{({ path, url }) => (
				(path.startsWith('/stories/')) ?
					<Link activeClassName={style.active} class={style.nav_item} href="/stories" path={url}>
						<svg>
							<g>
								<path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" />
							</g>
						</svg>
						<span>Stories</span>
					</Link>
					: <Link activeClassName={style.active} class={style.nav_item} href="/stories">
						<svg>
							<g>
								<path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" />
							</g>
						</svg>
						<span>Stories</span>
					</Link>
			)}
		</Match>

		<Link activeClassName={style.active} class={style.nav_item} href="/projects">
			<svg>
				<g>
					<path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
				</g>
			</svg>
			<span>Projects</span>
		</Link>
		<Link activeClassName={style.active} class={style.nav_item} href="/talks">
			<svg>
				<g><circle cx="9" cy="9" r="4" /><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" />
				</g>
			</svg>
			<span>Talks</span>
		</Link>
		<Link activeClassName={style.active} class={style.nav_item} href="/awards">
			<svg>
				<g>
					<path d="M21.1,5.8h-3.5V4.4c0-0.5-0.4-0.8-0.8-0.8H7.4c-0.5,0-0.9,0.3-0.9,0.8v1.4H3c-0.5,0-0.8,0.3-0.8,0.8v1.9 c0,1.2,0.8,2.5,2.1,3.4c1.1,0.8,2.4,1.3,3.7,1.4c1.1,1.8,2.3,2.5,2.3,2.5v2.5H8.7c-1.2,0-2.2,0.7-2.2,1.9v0.4 c0,0.2,0.2,0.4,0.4,0.4h10.1c0.2,0,0.4-0.2,0.4-0.4v-0.4c0-1.2-1-1.9-2.2-1.9h-1.6v-2.5c0,0,1.3-0.7,2.3-2.5 c1.4-0.2,2.7-0.6,3.7-1.4c1.3-1,2.1-2.2,2.1-3.4V6.6C21.9,6.1,21.6,5.8,21.1,5.8z M5.6,10.1C4.7,9.5,4.4,8.9,4.4,8.5V7.9h2.2 C6.6,9,6.8,10,7,10.8C6.5,10.7,6,10.5,5.6,10.1z M19.7,8.5c0,0.5-0.6,1.2-1.2,1.7c-0.4,0.3-0.9,0.6-1.4,0.7 c0.2-0.9,0.4-1.8,0.4-2.9h2.2V8.5z" />
				</g>
			</svg>
			<span>Awards</span>
		</Link>
	</div>
);

export default BottomNavBar;
