import React from 'react'
import './previewcards.scss'
import { CardsData } from '../../Data/Data'
import DashboardCard from '../DashboardCard/DashboardCard'


const Cards = () => {
  return (
    <div className="cards">
        {CardsData.map((card, id) => {
            return ( 
                <div className="parentContainer">
                    <DashboardCard
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        icon={card.icon}
                        series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards


