import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json'

import Dialog from 'preact-material-components/Dialog';
import 'preact-material-components/Dialog/style.css';


import '../../style';

export default class Talks extends Component {
	toggleDialog = e => {
		console.log(e);
		this.scrollingDlg.MDComponent.show();
	}

	render() {
		return (
			<div id={style.talks}>

				<Dialog class={style.dialog} ref={scrollingDlg => { this.scrollingDlg = scrollingDlg; }}>
					<div class={style.dialog_header}>
						<Dialog.FooterButton class={style.back} accept={true}>
							<svg>
								<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
							</svg>
						</Dialog.FooterButton>
						<div class={style.header_text}>[Office Hour] Building websites with AMP and PWA</div>
					</div>
					<div class={style.dialog_body} scrollable={true}>
						<p>Come learn how AMP combined with Progressive Web Apps (PWA) enables instant user journeys across your entire site, and ask the team behind APIs like and the Shadow AMP API any questions to unblock you in your development journey. Note: Office Hours are staffed with multiple Googlers and are available first-come, first-served onsite. Pixelbooks will be on hand for attendees to leave questions and their contact info in case we're not able to meet with all interested attendees within the assigned timeslots. All attendees who submit questions will get a response after I/O over email.</p>
					</div>
					<Dialog.Footer class={style.dialog_footer}>
						<div class={style.share}>
							<svg>
								<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
							</svg>
						</div>
						<div class={style.fab}>
							<svg>
								<path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
							</svg>
						</div>
					</Dialog.Footer>
				</Dialog>

				<div class="hero">
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

				<Image className="cover" fetchOnDemand alt="em" src="https://res.cloudinary.com/limhenry/image/upload/v1524738839/limhenryxyz/talks.jpg" placeholder="https://res.cloudinary.com/limhenry/image/upload/c_thumb,w_10/v1524738839/limhenryxyz/talks.jpg" />

				<div class="item_container">
					{data.talks.map(item => (
						<div class={style.item}>
							<div class={style.date}>
								<div class={style.month}>{item.month}</div>
								<div>{item.year}</div>
							</div>
							<div className={[style.content, 'content'].join(' ')} onClick={this.toggleDialog}>
								<div className={[style.item_header, 'item_header'].join(' ')}>{item.description}</div>
								<div className={[style.item_info, 'item_info'].join(' ')}>
									<div class={style.item_description}>{item.header}</div>
									{item.topic.map(item => (
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
