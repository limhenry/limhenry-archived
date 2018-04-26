import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json'
import { route } from 'preact-router';
// import story from '../../data/i-am-now-a-google-developer-expert-in-web-technologies.json'
import Markdown from 'preact-markdown';
import '../../style';

export default class StoriesPost extends Component {

	state = {
		story: {
			"post": ""
		}
	}

	constructor(props) {
		super(props);
		this.id = props.id;

		import('../../data/' + this.id + '.json').then((e) => {
			this.setState({ 'story': e });
		}).catch(error => {
			// route('/stories');
		})
	}

	render({ id }, { story }) {
		return (
			<div>
				<div class={style.story_container}>
					<h1 class={style.story_title}>{story.header}</h1>
					<div class={style.story_author}>{story.author} - {story.publisher}</div>
					<div class={style.story_date}>Published {story.date}</div>
					<div class={style.story_content}>
						<Markdown markdown={story.post} />
					</div>

					<div class={style.story_origin}>
						<div class={style.box}></div>Originally posted on:
                        <a href={data.link} target="_blank">{story.publisher}</a>
					</div>
				</div>
			</div>
		);
	}
}
