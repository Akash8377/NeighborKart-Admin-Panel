import React from 'react'
import { Breadcrumb } from 'antd';

const Breadcramp = ({title}) => {
  return (
    <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: `${title}`,
      },
    ]}
  />
  )
}

export default Breadcramp