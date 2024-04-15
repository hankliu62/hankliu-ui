---
order: 1
title: 月份范围选择
---

月份范围选择的用法。

````jsx
import { SimpleMonthPicker } from '@hankliu/hankliu-ui';


class MonthPickerDemo extends React.Component {

  state = {}

  handleStartChange = (value) => {
    let { startM, startY, endM, endY } = this.state;
    startM = value.month;
    startY = value.year;
    if (endM && endY) {
      if (endY < startY) {
        endY = undefined;
        endM = undefined;
      } else if (endY === startY && endM < startM) {
        endY = undefined;
        endM = undefined;
      }
    }
    this.setState({startM, startY, endM, endY})
  }

  handleEndChange = (value) => {
    let { endM, endY, hitherto } = this.state;
    if (value.hitherto) {
      hitherto = true;
      endY = undefined;
      endM = undefined;
    } else {
      endY = value.year;
      endM = value.month;
      hitherto = false;
    }
    this.setState({hitherto, endM, endY})
  }

  render() {
    const { startM, startY, endM, endY, hitherto } = this.state ;
    return (
      <div>
        <SimpleMonthPicker
          startYear={1980}
          onChange={this.handleStartChange}
          value={{
            month: startM,
            year: startY
          }}
        />
        <span>  至  </span>
        <SimpleMonthPicker
          placeholder="日期选择器"
          hitherto={true}
          value={{
            month: endM,
            year: endY,
            hitherto
          }}
          disableYear={(year)=> {
            if (startY) {
              return year < startY;
            }
            return false;
          }}
          disableMonth={(month, year)=> {
            if (startY && startM) {
              if (year < startY) {
                return true;
              } else if (year === startY) {
                return month < startM;
              }
            }
            return false;
          }}
          onChange={this.handleEndChange}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <MonthPickerDemo />
  , mountNode);





````
