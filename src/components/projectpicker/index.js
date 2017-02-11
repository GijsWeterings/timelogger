import { h, Component } from 'preact';
import style from './style';

export default class ProjectPicker extends Component {
	state = {
		active: false,
		selectedProject: null
	};

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	toggleDropdown() {
		const newState = this.state;
		newState.active = !newState.active;
		this.setState(newState);
		console.log(this.state.active);
	}

	render() {
		let button;
		if (this.state.selectedProject === null) {
			button = (<span>+ Project</span>);
		}
		else {
			button = (<span>{this.state.selectedProject}</span>);
		}
		return (
			<div class={style.taskinput && this.state.active ? style.active : ''}>
				<span onClick={this.toggleDropdown()}>{button}</span>
			</div>
		);
	}
}
