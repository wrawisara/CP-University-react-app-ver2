import React from 'react'
import PreviewCards from '../PreviewCard/PreviewCards'
import './middleside.scss'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import DashboardTable from '../DashboardTable/DashboardTable'

const MiddleSide = () => {
  return (
    <div className="middleside">
        <h1>Dashboard</h1>
        <div className="widgets">
          <DashboardWidget type="view"/>
          <DashboardWidget type="sale" />
          <DashboardWidget type="user"/>
        </div>
        <div className="previewCards">
          <PreviewCards />
        </div>
        <div className="tables">
          <DashboardTable/>
        </div>
    </div>

  )
}

export default MiddleSide