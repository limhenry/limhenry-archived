import { h, Component } from 'preact';
import { route } from 'preact-router';
import Dialog from 'preact-material-components/Dialog';
import 'preact-material-components/Dialog/style.css';
import style from './style';

export default class CustomDialog extends Component {
    state = {
        eventInfo: {
            tags: []
        }
    }

    share(id, eventInfo, type) {
        if (navigator.share) {
            navigator.share({
                title: eventInfo.talk_title,
                text: eventInfo.event_name,
                url: 'https://limhenryxyz.firebaseapp.com/' + type + '/' + id,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
        else {
            console.log('cannot');
        }
    }

    onClose(type) {
        if (typeof window !== "undefined") {
            if (type === 'talks') {
                document.title = 'Talks - Henry Lim';
            }
            if (type === 'projects') {
                document.title = 'Projects - Henry Lim';
            }
        }
        
        route('/' + type);
    }

    toggle(id, item, type) {
        this.setState({ 'eventInfo': item, 'id': id, 'type': type });
        this.scrollingDlg.MDComponent.show();
        route('/' + type + '/' + id);
    }

    constructor(props) {
        super();
	}

    render({ }, { id, eventInfo, type }) {
        return (
            <Dialog onCancel={() => this.onClose(type)} onAccept={() => this.onClose(type)} class={style.dialog} ref={scrollingDlg => { this.scrollingDlg = scrollingDlg; }}>
                <div class={style.dialog_header}>
                    <Dialog.FooterButton class={style.back} accept={true}>
                        <svg>
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                    </Dialog.FooterButton>
                    <div class={style.header_text}>{eventInfo.title}</div>
                </div>
                <div class={style.dialog_body} scrollable={true}>
                    <div>{eventInfo.date}</div>
                    <div>{eventInfo.subtitle}</div>
                    <p>{eventInfo.description}</p>
                    <div class={style.event_topic}>
                        {eventInfo.tags.map(item => (
                            <div class="item_tag">
                                <div class="item_circle" id={item.id}></div>
                                <span>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Dialog.Footer class={style.dialog_footer}>
                    <div class={style.share} onClick={() => this.share(id, eventInfo, type)}>
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
        );
    }
}