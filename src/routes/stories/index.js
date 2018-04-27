import { h, Component } from 'preact';
import Image from 'pimg';
import style from './style';
import data from '../../data/data.json'
import '../../style';

export default class Stories extends Component {
	render() {
		return (
			<div>
				<div className={[style.hero, 'hero'].join(' ')}>
					<div class="hero_title">Stories</div>
					<div class="hero_description">
						<p>Once upon a time, there was a boy who loved to code ...</p>
					</div>
				</div>

				<h2>News &amp; Interviews</h2>
				<div class="card_container">
					{ data.stories.news_interview.map(item => (
						<a class="card" href={'/stories/' + item.id}>
							<Image fetchOnDemand alt={item.header} className="card_header" src={item.image} placeholder={item.placeholder}/>
							<div class="card_content">
								<div class="title">{item.header}</div>
								<div class="date">{item.date} | {item.author}</div>
							</div>
							<div class="card_footer">
								<span>Read More</span>
								<iron-icon icon="henry-icons:arrow-forward"></iron-icon>
							</div>
						</a>
					))}
				</div>

				<h2>Top Stories</h2>
				<div class="card_container">
					{ data.stories.top_stories.map(item => (
						<a class="card" href={'/stories/' + item.id}>
							<Image fetchOnDemand alt={item.header} className="card_header" src={item.image} placeholder={item.placeholder}/>
							<div class="card_content">
								<div class="title">{item.header}</div>
								<div class="date">{item.date} | {item.author}</div>
							</div>
							<div class="card_footer">
								<span>Read More</span>
								<iron-icon icon="henry-icons:arrow-forward"></iron-icon>
							</div>
						</a>
					))}
				</div>

				<a class={style.read_more} href="https://medium.com/@limhenry/" target="_blank">
					<span>Read More on Medium.com</span>
					<iron-icon icon="henry-icons:add-circle"></iron-icon>
				</a>
			</div>
		);
	}
}
