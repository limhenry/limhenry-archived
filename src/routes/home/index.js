import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json';
import '../../style';

export default class Home extends Component {

	constructor(props) {
		super(props);
		if (typeof window !== 'undefined') {
			document.title = 'Henry Lim';
		}
	}

	render() {
		return (
			<div id={style.home}>
				<div className={[style.hero, 'hero'].join(' ')}>
					<div class="hero_title">I'm Henry Lim</div>
					<div className={[style.hero_description, 'hero_description'].join(' ')}>
						<p>I am a <a href="https://developers.google.com/experts/" target="_blank" rel="noopener noreferrer">Google Developer Expert</a> in Web Technologies. I am making the web great again with Polymer, Web Components, Progressive Web Apps and Firebase.</p>
						<p>Also, I am a community co-organizer at <a href="https://facebook.com/GDGKualaLumpur/" target="_blank" rel="noopener noreferrer">Google Developer Group Kuala Lumpur</a>. We organize conferences, meetups, workshops, and bringing all the latest Google technologies into the town.</p>
					</div>
				</div>

				<h2>My Stories</h2>
				<div class="card_container">
					{data.stories.featured_stories.map(item => (
						<a class="card" href={'/stories/' + item.id}>
							<Image fetchOnDemand alt={item.header} className="card_header" src={item.image} placeholder={item.placeholder} />
							<div class="card_content">
								<div class="title">{item.header}</div>
								<div class="date">{item.date} | {item.author}</div>
							</div>
							<div class="card_footer">
								<span>Read More</span>
								{/* <iron-icon icon="henry-icons:arrow-forward"></iron-icon> */}
							</div>
						</a>
					))}
				</div>

				<a class={style.read_more} href="[[rootPath]]stories/">
					<span>More Stories</span>
					{/* <iron-icon icon="henry-icons:add-circle"></iron-icon> */}
				</a>

				<h2>My Projects</h2>
				<div class="card_container">
					{data.projects.featured_projects.map(item => (
						<a class="card" href={item.link} target="_blank" rel="noopener">
							<Image fetchOnDemand alt={item.header} className="card_header" src={item.image} placeholder={item.placeholder} />
							<div class="card_content">
								<div class="title">{item.header}</div>
								<div class="description">{item.description}</div>
							</div>
							<div class="card_footer">
								<span>Read More</span>
								{/* <iron-icon icon="henry-icons:arrow-forward"></iron-icon> */}
							</div>
						</a>
					))}
				</div>

				<a class={style.read_more} href="[[rootPath]]projects/">
					<span>More Projects</span>
					{/* <iron-icon icon="henry-icons:add-circle"></iron-icon> */}
				</a>
			</div>
		);
	}
}
