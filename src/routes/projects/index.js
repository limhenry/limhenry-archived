import { h, Component } from 'preact';
import { route } from 'preact-router';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json';
import projects from '../../data/projects.json';
import Dialog from '../../components/dialog';
import '../../style';

export default class Projects extends Component {
	toggleDialog = (id, item) => e => {
		if (typeof window !== 'undefined') {
			document.title = item.title + ' - Projects - Henry Lim';
		}
		this.dialog.toggle(id, item, 'projects');
	}

	constructor(props) {
		super(props);
		if (typeof window !== 'undefined') {
			document.title = 'Projects - Henry Lim';
		}
		this.id = props.id;
	}

	componentDidMount() {
		if (this.id && projects[this.id]) {
			if (typeof window !== 'undefined') {
				document.title = projects[this.id].title + ' - Projects - Henry Lim';
			}
			this.dialog.toggle(this.id, projects[this.id], 'projects');
		}
		else {
			route('/projects');
		}
	}

	render() {
		return (
			<div id={style.projects}>

				<Dialog ref={dialog => { this.dialog = dialog; }} />

				<div className={[style.hero, 'hero'].join(' ')}>
					<div class="hero_title">Projects</div>
					<div class="hero_description">
						<p>I am trying to make the web great again with Polymer, Progressive Web Apps and Firebase.</p>
					</div>
				</div>

				<h2>Featured Projects</h2>
				<div class="card_container">
					{ data.projects.featured_projects.map(item => (
						<a class="card" href={item.link} target="blank">
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

				<h2>All Projects</h2>

				<div class="item_container">
					{ Object.keys(projects).map(item => (
						<div class="item" onClick={this.toggleDialog(item, projects[item])}>
							<div class="content">
								<div class="item_header">{projects[item].title}</div>
								<div class={style.item_description}>{projects[item].description}</div>
								<div class="item_info">
									{projects[item].tags.map(item => (
										<div class="item_tag">
											<div class="item_circle" id={item.id} />
											<span>{item.value}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
