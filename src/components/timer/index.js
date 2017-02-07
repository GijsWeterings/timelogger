import { h, Component } from 'preact';
import style from './style';

export default class Timer extends Component {
	state = {
		active: true,
		startTime: performance.now(),
		seconds: 0
	};

	startInterval() {
		setInterval(this.calculateSeconds.bind(this), 1000);
	}

	componentDidMount() {
		// this.state.startTime = performance.now();
		this.setState(this.state);
		if (this.state.active) {
			this.startInterval();
		}
	}

	componentWillUnmount() {
		clearInterval();
	}

	calculateSeconds() {
		const newState = this.state;
		newState.seconds = Math.floor((performance.now() - newState.startTime) / 1000);
		this.setState(newState);
	}

	static formatTime(seconds) {
		const hours = Math.floor(seconds / 3600);
		seconds -= (hours * 3600);
		const minutes = Math.floor(seconds / 60);
		seconds -= (minutes * 60);
		return (hours < 10 ? "0" + hours : hours)
			+ ":" + (minutes < 10 ? "0" + minutes : minutes)
			+ ":" + (seconds  < 10 ? "0" + seconds : seconds);
	}

	render() {
		return (
			<span class={style.timer}>{Timer.formatTime(this.state.seconds)}</span>
		);
	}
}
