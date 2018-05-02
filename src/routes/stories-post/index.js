import { h, Component } from 'preact';
import style from './style';
import { route } from 'preact-router';
import Markdown from 'preact-markdown';
import '../../style';

export default class StoriesPost extends Component {

	state = {
		story: {
			post: ''
		}
	}

	constructor(props) {
		super(props);
		this.id = props.id;

		import('../../data/story/' + this.id + '.json').then((e) => {
			this.setState({ story: e });
			if (typeof window !== 'undefined') {
				document.title = e.header + ' - Henry Lim';
			}
		}).catch(error => {
			route('/stories');
		});
	}

	render({ id }, { story }) {
		return (
			<div id={style.storiesPost}>
				<div class={style.story_container}>
					<h1 class={style.story_title}>{story.header}</h1>
					<div class={style.story_author}>{story.author} - {story.publisher}</div>
					<div class={style.story_date}>Published {story.date}</div>
					<div class={style.story_content}>
						<Markdown markdown={story.post} />
					</div>

					<div class={style.story_origin}>
						<div class={style.box} />Originally posted on: <a href={story.link} target="_blank" rel="noopener noreferrer">{story.publisher}</a>
					</div>
				</div>
			</div>
		);
	}
}
