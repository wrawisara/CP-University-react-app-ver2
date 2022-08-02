import './rightside.scss'
import React from 'react'
import { UserUpdate } from '../UserUpdate/UserUpdate'
import DailyUsers from '../DailyUsers/DailyUsers'

const RightSide = () => {
  return (
    <div className="rightside">
      <div className="userupdate">
        <h3>Updates</h3>
        <UserUpdate />
      </div>
      <div className="custumerreview">
        <h3>Daily Users</h3>
        <DailyUsers/>
      </div>
    </div>
  )
}

export default RightSide