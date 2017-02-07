import { h, Component } from 'preact';
import style from './style';

import Timer from '../timer';

export default class Task extends Component {
	showOwnerImage = true;
	state = {
		name: "task component task component ",
		owner: {
			name: "Gijs Weterings",
			profile_img: "//scontent.xx.fbcdn.net/v/t1.0-1/p40x40/14724440_1339634536076772_5967937784317218658_n.jpg?oh=b7d4ec1fa004d2504c4d10d84d82e6fa&oe=59472565"
		},
		time_sessions: [
			{
				start_time: performance.now(),
				end_time: performance.now() + 3600
			}
		],
		active: false,
		project: "Timelogger.me"
	};

	componentDidMount() {
		console.log('i');
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div class={style.task}>
				{this.showOwnerImage ? (<img class={style.profileImg} src={this.state.owner.profile_img} alt={this.state.owner.name || "A user"}></img>) : ''}
				<span class={style.taskName}>{this.state.name}</span>

				<div class={style.taskDescription}></div>
				<span class={style.totalTime}><Timer /></span>
				<div class={style.actions}>

				</div>
			</div>
		);
	}
}
