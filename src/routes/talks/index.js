import { h, Component } from 'preact';
import style from './style';
import { route } from 'preact-router';
import talks from '../../data/talks.json';
import Dialog from '../../components/dialog';
import '../../style';

export default class Talks extends Component {
	toggleDialog = (id, item) => {
		if (typeof window !== "undefined") {
			document.title = item.title + ' - Talks - Henry Lim';
		}
		this.dialog.toggle(id, item, 'talks');
	}

	componentDidMount() {
		if (this.id && talks[this.id]) {
			if (typeof window !== "undefined") {
				document.title = talks[this.id].title + ' - Talks - Henry Lim';
			}
			this.dialog.toggle(this.id, talks[this.id], 'talks');
		}
		else {
			route('/talks');
		}
	}

	constructor(props) {
		super(props);
		if (typeof window !== "undefined") {
			document.title = 'Talks - Henry Lim';
		}
		this.id = props.id;
	}

	render({id}) {
		return (
			<div id={style.talks}>

				<Dialog ref={dialog => { this.dialog = dialog; }}/>

				<div className={[style.hero, 'hero'].join(' ')}>
					<div class="hero_title">Presentations and Talks</div>
					<div class="hero_description">
						<p>I love to share all the Google's cutting-edge web technologies to everyone around me.</p>
					</div>
				</div>

				{/* <div class="cover" style="background-image:url([[rootPath]]images/talks.jpg)">
					<div class="cover_label">
						<span>Tech Talk Thursday with Google and GDGKL @ Multimedia University, Cyberjaya</span>
					</div>
				</div> */}

				{/* <Image className="cover" fetchOnDemand alt="em" src="https://res.cloudinary.com/limhenry/image/upload/v1524738839/limhenryxyz/talks.jpg" placeholder="https://res.cloudinary.com/limhenry/image/upload/c_thumb,w_10/v1524738839/limhenryxyz/talks.jpg" /> */}

				<div class="item_container">
					{Object.keys(talks).map(item => (
						<div class="item" onClick={() => this.toggleDialog(item, talks[item])}>
							<div class="date">
								<div class="month">{talks[item].month}</div>
								<div>{talks[item].year}</div>
							</div>
							<div class="content">
								<div class="item_header">{talks[item].title}</div>
								<div class="item_info">
									<div class="item_description">{talks[item].subtitle}</div>
									{talks[item].tags.map(item => (
										<div class="item_tag">
											<div class="item_circle" id={item.id}></div>
											<span>{item.value}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}
