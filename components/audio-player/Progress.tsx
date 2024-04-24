import React, { Component } from 'react';

export interface ProgressProps {
  value: any;
  loaded?: any;
  progressChange: (e: any) => void;
}

class Progress extends Component<ProgressProps, any> {
  onChange = (e: any) => {
    const { progressChange } = this.props;
    progressChange && progressChange(e);
  };

  render() {
    const { value = 0, loaded = 0 } = this.props;
    return (
      <div className="control-progress hlui-audio-control-progress">
        <div className="progress-bg" />
        <div style={{ width: `${loaded * 100}%` }} className="progress-loaded" />
        <div style={{ width: `${value * 100}%` }} className="progress-value" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          autoComplete="off"
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Progress;
