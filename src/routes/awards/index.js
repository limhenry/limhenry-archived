import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json'
import '../../style';

export default class Awards extends Component {
	render() {
		return (
			<div>
				<div class="hero">
					<div class="hero_title">Awards and Honors</div>
					<div class="hero_description">
						<p>(Drum roll) and the winner goes to ...</p>
					</div>
				</div>

				<div class="cover" style="background-image:url([[rootPath]]images/firebass.jpg)">
					<div class="cover_label">
						<span>Winner of Google's Firebass Challenge @ Google I/O 2017</span>
					</div>
				</div>

				<div class="item_container">
					{ data.awards.map(item => (
						<div class="item">
							<div class="item_header">{item.header}</div>
							<div class="item_info">{item.info} | {item.date}</div>
							<div class="item_description">{item.description}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
