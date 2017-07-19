import React, { Component } from 'react';

import ClockDiv from './ClockDiv';
import styles from './styles';

class Counter extends Component {
  constructor() {
    super();
    this.state = { selectedDays: '', selectedHours: '', selectedMinutes: '', selectedSeconds: ''};
    this.updateClock = this.updateClock.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateClock() {
    const end = new Date('09/01/2017 12:0 AM');
    const total = Date.parse(end) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    this.setState({
      selectedDays: ('0' + days).slice(-2),
      selectedHours: ('0' + hours).slice(-2),
      selectedMinutes: ('0' + minutes).slice(-2),
      selectedSeconds: ('0' + seconds).slice(-2),
    });

  }
  render() {
    const items = [
      { id: 1, label: "days", value: this.state.selectedDays },
      { id: 2, label: "Hours", value: this.state.selectedHours },
      { id: 3, label: "Minutes", value: this.state.selectedMinutes },
      { id: 4, label: "Seconds", value: this.state.selectedSeconds },
    ];
    return (
      <div style={styles.container}>
      {
        items.map(item =>
          <ClockDiv key={item.id} label={item.label} value={item.value} />,
        )
      }
      </div>
    );
  }
}

export default Counter;
