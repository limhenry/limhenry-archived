import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style';
import Dialog from '../../components/dialog';
import awards from '../../data/awards.json';
import '../../style';

export default class Awards extends Component {
	toggleDialog = (id, item) => e => {
		if (typeof window !== 'undefined') {
			document.title = item.title + ' - Awards - Henry Lim';
		}
		route('/awards/' + id);
		this.dialog.toggle(id, item, 'awards');
	}

	constructor(props) {
		super(props);
		if (typeof window !== 'undefined') {
			document.title = 'Awards - Henry Lim';
		}
		this.id = props.id;
	}

	componentDidMount() {
		if (this.id && awards[this.id]) {
			if (typeof window !== 'undefined') {
				document.title = awards[this.id].title + ' - Awards - Henry Lim';
			}
			this.dialog.toggle(this.id, awards[this.id], 'awards');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			if (nextProps.id) {
				this.dialog.toggle(nextProps.id, awards[nextProps.id], 'awards');
			}
			else {
				this.dialog.close();
			}
		}
	}

	render() {
		return (
			<div id={style.awards}>
				<Dialog ref={dialog => { this.dialog = dialog; }} />

				<div className={[style.hero, 'hero'].join(' ')}>
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

				<div class="item_container">
					{Object.keys(awards).map(item => (
						<div class="item" onClick={this.toggleDialog(item, awards[item])}>
							<div class="date">
								<div class="month">{awards[item].month}</div>
								<div>{awards[item].year}</div>
							</div>
							<div class="content">
								<div class="item_header">{awards[item].title}</div>
								<div class="item_info">
									<div class="item_description">{awards[item].info}</div>
									{awards[item].tags.map(item => (
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
