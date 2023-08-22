import React from 'react'
import { Breadcrumb } from 'antd';

const Breadcramp = ({name) => {
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
        title: {name},
      },
    ]}
  />
  )
}

export default Breadcramp