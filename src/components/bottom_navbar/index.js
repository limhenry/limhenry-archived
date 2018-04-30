import { h, Component } from 'preact';
import { Link, Match } from 'preact-router/match';
import style from './style';

export default class BottomNavBar extends Component {
    render() {
        return (
            <div class={style.bottom_navbar}>
                <Link activeClassName={style.active} class={style.nav_item} href="/">
                    <svg>
                        <g>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                        </g>
                    </svg>
                    <span>
                        Home
                    </span>
                </Link>
                <Match path="/stories">
                    {({ path, url }) => (
                        (path.startsWith('/stories/')) ?
                            <Link activeClassName={style.active} class={style.nav_item} href="/stories" path={url}>
                                <svg>
                                    <g>
                                        <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
                                    </g>
                                </svg>
                                <span>Stories</span>
                            </Link>
                            : <Link activeClassName={style.active} class={style.nav_item} href="/stories">
                                <svg>
                                    <g>
                                        <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
                                    </g>
                                </svg>
                                <span>Stories</span>
                            </Link>
                    )}
                </Match>

                <Link activeClassName={style.active} class={style.nav_item} href="/projects">
                    <svg>
                        <g>
                            <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path>
                        </g>
                    </svg>
                    <span>
                        Projects
                    </span>
                </Link>
                <Link activeClassName={style.active} class={style.nav_item} href="/talks">
                    <svg>
                        <g><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
                    </svg>
                    <span>
                        Talks
                    </span>
                </Link>
                <Link activeClassName={style.active} class={style.nav_item} href="/awards">
                    <svg viewBox="0 0 576 512">
                        <g>
                            <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
                        </g>
                    </svg>
                    <span>
                        Awards
                    </span>
                </Link>
            </div>
        );
    }
}