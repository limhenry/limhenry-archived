import { h, Component } from 'preact';
import { route } from 'preact-router';
import Dialog from 'preact-material-components/Dialog';
import 'preact-material-components/Dialog/style.css';
import style from './style';

export default class CustomDialog extends Component {
	state = {
		data: {
			tags: []
		}
	}

	share = (dataId, data, type) => e => {
		if (navigator.share) {
			navigator.share({
				title: data.talk_title,
				text: data.event_name,
				url: 'https://limhenryxyz.firebaseapp.com/' + type + '/' + dataId
			})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
		}
		else {
			console.log('cannot');
		}
	}

	onClose = type => e => {
		if (typeof window !== 'undefined') {
			if (type === 'talks') {
				document.title = 'Talks - Henry Lim';
			}
			if (type === 'projects') {
				document.title = 'Projects - Henry Lim';
			}
			if (type === 'awards') {
				document.title = 'Awards - Henry Lim';
			}
		}

		route('/' + type);
	}

	toggle(dataId, dataItem, dataType) {
		this.setState({ data: dataItem, id: dataId, type: dataType });
		this.scrollingDlg.MDComponent.show();
	}

	close() {
		this.scrollingDlg.MDComponent.close();
	}

	constructor(props) {
		super();
	}

	render({ }, { id, data, type }) {
		return (
			<Dialog onCancel={this.onClose(type)} onAccept={this.onClose(type)} class={style.dialog} ref={scrollingDlg => { this.scrollingDlg = scrollingDlg; }}>
				<div class={style.dialog_header}>
					<Dialog.FooterButton class={style.back} accept>
						<svg>
							<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
						</svg>
					</Dialog.FooterButton>
					<div class={style.header_text}>{data.title}</div>
				</div>
				<div class={style.dialog_body} scrollable>
					{data.date &&
						<div>{data.date}</div>
					}
					{data.subtitle &&
						<div class={style.subtitle}>{data.subtitle}</div>
					}
					{data.description &&
						<p>{data.description}</p>
					}
					<div class={style.event_topic}>
						{data.tags.map(item => (
							<div class="item_tag">
								<div class="item_circle" id={item.id} />
								<span>{item.value}</span>
							</div>
						))}
					</div>
					{data.related &&
						<div class={style.related}>
							<div class={style.related_title}>Related</div>
							<div class={style.related_item_container}>
								{data.related.map(item => (
									<a class={style.related_item} href={item.url}>
										<div class={style.related_item_title}>{item.title}</div>
										{item.description &&
											<div class={style.related_item_description}>{item.description}</div>
										}
										<div class={style.related_item_info}>
											{item.subtitle &&
												<div class={style.related_item_subtitle}>{item.subtitle}</div>
											}
											<div class={style.related_item_topic}>
												{item.tags.map(item => (
													<div class="item_tag">
														<div class="item_circle" id={item.id} />
														<span>{item.value}</span>
													</div>
												))}
											</div>
										</div>
									</a>
								))}
							</div>
						</div>
					}
				</div>
				<Dialog.Footer class={style.dialog_footer}>
					<div class={style.share} onClick={this.share(id, data, type)}>
						<svg>
							<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
						</svg>
					</div>
					{data.link &&
						<a class={style.fab} href={data.link} target="_blank" rel="noopener">
							<svg>
								<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
							</svg>
						</a>
					}
				</Dialog.Footer>
			</Dialog>
		);
	}
}