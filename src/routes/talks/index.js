import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json'
import '../../style';

export default class Talks extends Component {
	render() {
		return (
			<div>
				<div class="hero">
					<div class="hero_title">Presentations and Talks</div>
					<div class="hero_description">
						<p>I love to share all the Google's cutting-edge web technologies to everyone around me.</p>
					</div>
				</div>

				<div class="cover" style="background-image:url([[rootPath]]images/talks.jpg)">
					<div class="cover_label">
						<span>Tech Talk Thursday with Google and GDGKL @ Multimedia University, Cyberjaya</span>
					</div>
				</div>

				<div class="item_container">
					{ data.talks.map(item => (
						<div class="item">
							<div class="item_header">{item.header}</div>
							<div class="item_info">{item.info} | {item.date}</div>
							<div class="item_info">
								{ item.topic.map(item => (
									<div class="item_tag">
										<div class="item_circle" id={item.id}></div>
										<span>{item.value}</span>
									</div>
								))}
							</div>
							<div class="item_description">Topic: {item.description}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
