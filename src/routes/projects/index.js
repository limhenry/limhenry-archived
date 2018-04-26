import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json'
import '../../style';

export default class Projects extends Component {
	componentDidMount() {
		this.setState({data: data});
	}

	render() {
		return (
			<div>
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
							<Image fetchOnDemand alt={item.header} id="card_header" src={item.image} placeholder={item.placeholder}/>
							<div class="card_content">
								<div class="title">{item.header}</div>
								<div class="description">{item.description}</div>
							</div>
							<div class="card_footer">
								<span>Read More</span>
								<iron-icon icon="henry-icons:arrow-forward"></iron-icon>
							</div>
						</a>
					))}
				</div>

				<h2>All Projects</h2>
				<div className={[style.item_container, 'item_container'].join(' ')}>
					{ data.projects.all_projects.map(item => (
						<a className={[style.item, 'item'].join(' ')} href={item.link} target="blank">
							<iron-icon icon="henry-icons:open-in-new"></iron-icon>
							<div class="item_header">{item.header}</div>
							<div class="item_info">
							{ item.techs.map(item => (
								<div class="item_tag">
									<div class="item_circle" id={item.id}></div>
									<span>{item.value}</span>
								</div>
							))}
							</div>
							<div class="item_description">{item.description}</div>
						</a>
					))}
				</div>
			</div>
		);
	}
}
