import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import Dialog from '../../components/dialog';
import data from '../../data/data.json'
import '../../style';

export default class Awards extends Component {
	toggleDialog = (item) => {
		this.dialog.toggle(item);
	}

	constructor(props) {
		super(props);
		if (typeof window !== "undefined") {
			document.title = 'Awards - Henry Lim';
		}
	}

	render() {
		return (
			<div id={style.awards}>
				<Dialog ref={dialog => { this.dialog = dialog; }}/>

				<div class="hero">
					<div class="hero_title">Awards and Honors</div>
					<div class="hero_description">
						<p>(Drum roll) and the winner goes to ...</p>
					</div>
				</div>

				{/* <div class="cover" style="background-image:url(https://res.cloudinary.com/limhenry/image/upload/v1524738836/limhenryxyz/firebass.jpg)">
					<div class="cover_label">
						<span>Winner of Google's Firebass Challenge @ Google I/O 2017</span>
					</div> */}
				{/* </div> */}

				{/* <Image className="cover" fetchOnDemand alt="em" src="https://res.cloudinary.com/limhenry/image/upload/v1524738836/limhenryxyz/firebass.jpg" placeholder="https://res.cloudinary.com/limhenry/image/upload/c_thumb,w_10/v1524738836/limhenryxyz/firebass.jpg"/> */}

				{/* <div class="item_container">
					{ data.awards.map(item => (
						<div class="item" onClick={() => this.toggleDialog(item)}>
							<div class="item_header">{item.header}</div>
							<div class="item_info">{item.info} | {item.date}</div>
							<div class="item_description">{item.description}</div>
						</div>
					))}
				</div> */}

				<div class="item_container">
					{data.awards.map(item => (
						<div class="item" onClick={() => this.toggleDialog(item)}>
							<div class="date">
								<div class="month">{item.month}</div>
								<div>{item.year}</div>
							</div>
							<div class="content">
								<div class="item_header">{item.header}</div>
								<div class="item_info">
									<div class="item_description">{item.info}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
