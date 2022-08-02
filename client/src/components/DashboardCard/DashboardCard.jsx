import React from 'react'
import { useState } from 'react'
import { AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './dashboardcard.css'
import CloseIcon from '@material-ui/icons/Close';
import Chart from 'react-apexcharts'
import { motion } from 'framer-motion';


const Card = (props) => {
    const[expanded, setExpanded] = useState(false )
    return (
        <AnimateSharedLayout>
          {expanded ? (
            <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
          ) : (
            <CompactCard param={props} setExpanded={() => setExpanded(true)} />
          )}
        </AnimateSharedLayout>
      );
    };
    



function CompactCard({param, setExpanded}){
    return(
        <motion.div className="compactCard"
        style={{
          background : param.color.backGround ,
          boxShadow : param.color.boxShadow
        }}
        onClick={setExpanded}
        layoutId="expandableCard"
        >
            <div className="radialBar">
              <CircularProgressbar
              value={param.barValue}
              text={`${param.barValue}%`}
              />
              <span>{param.title}</span>  
            </div>
            <div className="detail">
                <i className="icon"><param.icon/></i>
                <span>{param.value}</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard({param, setExpanded}) {
    const data = {
        options: {

            charts:{
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: "gradient"
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                  format: "dd/MM/yy HH:mm",
                },
              },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'category',
                categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                tickPlacement: 'between',
                position: 'bottom',
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: [],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    format: undefined,
                    formatter: undefined,
                    datetimeUTC: true,
                    datetimeFormatter: {
                        year: 'numeric',
                        month: "long",
                        day: '2-digit',
                        hour: 'HH:mm',
                    },
                },
            },
    }
};

    return(
        <motion.div 
        className="ExpandedCard"
        style={{ 
            background: param.color.backGround,
            boxShadow : param.color.boxShadow,
        }}
        layoutId="expandableCard"
        >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
            <CloseIcon onClick={setExpanded} />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
            <Chart series ={param.series} type='area' options={data.options}/>
        </div>
        <span>Last 24 hours</span>
        </motion.div>
    );
}



export default Card












// return(
//     <div className="status-card">
//      <div className="logo-part">
//          <item.icon/>
//          <span>
//              {item.title}
//          </span>
//      </div>
//      <div className="percent-part">
//          <item.trendIcon/>
//          <span>
//              {item.per}
//          </span>
//      </div>
//      <div className="count-part">
//          <span>
//              {item.count}
//          </span>
//      </div>
//     </div>
// )