import { h, Component } from 'preact';
import style from './style';
import * as firebase from 'firebase';

import Task from '../task';

export default class Home extends Component {

	constructor() {
		super();
		this.state = {
			speed: 10
		};
	}

	componentDidMount() {
		this.setState({
			speed: 20
		});
	}

	render() {
		return (
			<div class={style.home}>
				<h1>{this.state.speed}</h1>
				<p>This is the Home component.</p>
				<div class={style.centeredColumn}>
					<Task />
				</div>
			</div>
		);
	}
}
