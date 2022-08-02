import React from 'react'
import './dashboardwidget.scss'
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FaceIcon from '@material-ui/icons/Face';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { green } from '@material-ui/core/colors';

const Widget = ({type,trend}) => {
  let data;

  switch(type){
    case "user":
      data = {
        title: "Total Users",
        icon: FaceIcon ,
        count: "6,078",
        trendIcon: <TrendingUpIcon className="icon"/>,
        per:"30%"

      };
      break;

      case "sale":
      data = {
        title: "Total Sales",
        icon: LoyaltyIcon ,
        count: "30",
        trendIcon: <TrendingDownIcon className="icon"/>,
        per:"10%"

      };
      break;
      
      case "view":
      data = {
        title: "Total Yiews",
        icon: VisibilityIcon ,
        count: "274,806",
        trendIcon: <TrendingUpIcon className="icon"/>,
        per:"70%"

      };
      break;
      default:
        break;
  }

  switch(trend){
    case "positive":
      data = {
        trendIcon: <TrendingUpIcon className="trendpositive"/>,
      };
      break;
      case "negative":
        data = {
          trendIcon: <TrendingDownIcon className="trendnegative"/>,
        };
        break;
      }

  return (
    <div className="innerwidget">
      <div className="left"> 
        <i className="icon"><data.icon/></i>
        <span className="title">{data.title}</span>
      </div>
      <div className="right">
        <div className="trendicon">
          {data.trendIcon}
          <span className="percent">{data.per}</span>
        </div>
        
        <h4 className="count">{data.count}</h4>
      </div> 
    </div>
  )
}

export default Widget