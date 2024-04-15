import * as React from 'react';
import cs from 'classnames';

export interface MarqueeProps{

}
export default class Marquee extends React.Component<any, any> {

  static defaultProps = {
    direction: 'horizontal',
    width: '100%',
    height: '100%',
    duration: 3000
  }

  static HORIZONTAL: string = 'horizontal'
  static VERTICAL: string = 'vertical'

  _data: any = {}

  rootRef: any = React.createRef()

  innerRef: any = React.createRef()

  componentDidMount() {
    this.init()
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillUnmount() {
    const { it } = this._data
    this._data = undefined
    if (it) clearTimeout(it)
  }

  init() {
    const inner = this.innerRef.current
    const root = this.rootRef.current
    const { width, height } = inner.getBoundingClientRect()
    this._data = { width, height }
    const rect = root.getBoundingClientRect()
    this._data.rootWidth = rect.width
    this._data.rootHeight = rect.height
    const { direction, duration } = this.props
    inner.style.display = 'none'
    this.createTwin()
    this.createTwin(true)
    this._data.movement = 0
    if (direction === 'horizontal') {
      this._data.horizontalSpeed = this._data.rootWidth * 1000 / (duration * 60)
      this.playHorizontal()
    } else {
      setTimeout(this.playVertical, this.props.duration)
    }
  }

  createTwin(next?: boolean) {
    const inner = this.innerRef.current
    const { direction } = this.props
    const { width, height } = this._data
    const ct = inner.cloneNode(true)
    ct.style.display = 'block'
    // if (direction === 'vertical') {
      // ct.className += ' with-transition'
      // ct.title = Date.now()
    // }
    // ct.style.transitionDuration = transitionDuration
    // ct.style.transitionTimingFunction = transitionTimingFunction
    // 水平方向 
    if (next) {
      if (direction === 'horizontal') {
        ct.style.transform = `translate3d(${width}px, 0, 0)`
      } else {
        ct.style.transform = `translate3d(0, ${height}px, 0)`
      }
      this._data.c2 = ct
    } else {
      this._data.c1 = ct
    }
    const root = this.rootRef.current
    root.append(ct)
  }

  playHorizontal = () => {
    if (!this._data) return
    let { c1, c2, width, horizontalSpeed } = this._data
    if (this._data.movement >= width) {
      c1.remove()
      this._data.c1 = c2
      this.createTwin(true)
      c1 = this._data.c1
      c2 = this._data.c2
      this._data.movement = 0
    }
    this._data.movement += horizontalSpeed
    c1.style.transform = `translate3d(${-this._data.movement}px, 0, 0)`
    c2.style.transform = `translate3d(${-this._data.movement + width}px, 0, 0)`
    requestAnimationFrame(this.playHorizontal)
  }

  playVertical = () => {
    if (!this._data) return
    let { c1, c2, height, rootHeight } = this._data
    // 还原位置
    if (this._data.movement >= height) {
      c1.remove()
      this._data.c1 = c2
      this.createTwin(true)
      c1 = this._data.c1
      c2 = this._data.c2
      this._data.movement = 0
    }
    this._data.movement += rootHeight
    c1.style.transform = `translate3d(0, ${-this._data.movement}px, 0)`
    // console.log('start: c2.style.transform: ', c2.style.transform)
    setTimeout(() => {
      if (!this._data) return
      c2.style.transform = `translate3d(0, ${-this._data.movement + height}px, 0)`
    }, 30)
    // console.log('end: c2.style.transform: ', c2.style.transform)
    this._data.it = setTimeout(this.playVertical, this.props.duration)
  }

  render () {
    const { className, direction, children, width, height, style = {}, ...rest } = this.props;
    style.width = width
    style.height = height
    return (
      <div 
        ref={this.rootRef} 
        className={cs(className, `tui-marquee direction-${direction}`)}
        style={style}
        {...rest}
      >
        <div ref={this.innerRef} className="marquee-inner">
          {children}
        </div>
      </div>
    )
  }

};
