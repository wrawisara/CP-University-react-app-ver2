import React from 'react'
import CourseTypeGraph from './components/CourseTypeGraph/CourseTypeGraph'
import Navbar from './components/Navbar/Navbar'
import './chartpage.scss'

const ChartPage = () => {
  return (
    <div className="chartpage">
        <div className="chartpageglass">
            <Navbar/>
            <div className="graph">
                <CourseTypeGraph/>
            </div> 
        </div>
    </div>
  )
}

export default ChartPage