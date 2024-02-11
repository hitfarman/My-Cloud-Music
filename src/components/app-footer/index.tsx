import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <div>AppFooter 组件的搭建</div>
}

export default memo(AppFooter)
