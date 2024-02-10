import React, { PureComponent } from 'react'

/**
 * state:
 * props:
 */

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

class Demo02 extends PureComponent<IProps, IState> {
  state = {
    message: 'hello world',
    counter: 99
  }

  // 这里不写constructor时,默认也会进行super操作的
  // constructor(props: IProps) {
  //   super(props)
  //   // this.state = {
  //   //   message: 'Hello World',
  //   //   counter: 100
  //   // }
  // }

  render(): React.ReactNode {
    return (
      <div>
        name:{this.props.name}
        age: {this.props.age}
        message: {this.state.message}
        counter: {this.state.counter}
      </div>
    )
  }
}

export default Demo02
