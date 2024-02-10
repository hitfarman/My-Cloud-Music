import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  // 指定组件的子元素,可选属性
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Demo: FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <div>height: {props.height}</div>

      <div>{props.children}</div>
    </div>
  )
}

/*
  1. const Demo: React.FunctionComponent : 指定 Demo 是React函数式组件类型
     但是这样写仅仅是告诉组件是React函数式组件类型了, 还没有约束 props,依然不知道props里有什么

  2. 所以,可以可以通过 泛型接口, 通过一个泛型参数来接收当前函数式组件里面props的类型
     const Demo: React.FunctionComponent<IProps> = (props) => {}

  3. 但是这样写太长了,一般不写成 FunctionComponent , 而是用简写 FC
     const Demo: React.FC<IProps> = (props) => {}

*/
// const Download: React.FunctionComponent = (props) => {
// const Demo: React.FunctionComponent<IProps> = (props) => {
// const Demo: React.FC<IProps> = (props) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//       <div>height: {props.height}</div>
//     </div>
//   )
// }

/* 上面这种写法跟下面写法的区别:
  1. 下面写法,只是直接对 props约束: const Demo = (props: IProps) => {}
    它只知道 Demo是函数类型, 而不知道Demo是函数式组件类型, 这时, 往Demo上多加写属性时(比如: defaultProps),在敲defaultProps时, 是没有提示的.因为只知道Demo是个函数类型,但是不知道Demo具体的类型的

    2. 而如果是指定Demo是函数式组件类型, 可以知道Demo里的其它属性

*/

// Demo.defaultProps = {
//   name: 'why',
//   age: 18,
//   height: 1.88
// }

// const Demo = (props: IProps) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//       <div>height: {props.height}</div>
//     </div>
//   )
// }

export default memo(Demo)
