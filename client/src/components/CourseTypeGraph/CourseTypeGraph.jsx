import React,{ useState, useEffect } from 'react'
import  Chart  from "react-apexcharts";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import "./coursetypegraph.scss"
import Vue from 'vue'
import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'

 function CourseTypeGraph()
 {
  // const data = [
  //       {name:"ผู้ประกอบการยุคใหม่", value: 100},
  //       {name:"ก้าวสู่โลกอุตสาหกรรมแห่งอนาคต", value: 100},
  //       {name:"นวัตกรรมเพื่ออนาคต", value: 100},
  //       {name:"การเสริมสร้างทักษะทางวิชาชีพ", value: 100},
  //       {name:"การสร้างพื้นฐานความเป็นผู้นำ", value: 100},
  //       {name:"เรียนรู้ธุรกิจเครือซีพี", value: 100},
  //       {name:"การสร้างผลลัพธ์ในการทำงาน", value: 100},
  //       {name:"ความรู้ที่จำเป็นในยุคดิจิทัล", value: 100},
  //       {name:"ทักษะภาษาเพื่ออาชีพ", value: 100},
  //       {name:"ศูนย์ประเมินสมรรถนะเพื่อการทำงาน", value: 100},
  // ]
    // const [stdudentSubject, setStudentsubject]= useState([]);
    // const [studentMarks, setStudentMarks]= useState([]);
 
    // useEffect( ()=>{
    //     const sSubject=[];
    //     const sMarks=[];
    //     const getStudentdata= async()=>{
    //     const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
    //     const resData= await reqData.json();       
    //     for(let i=0; i< resData.length; i++)
    //     {
    //      sSubject.push(resData[i].subject);
    //      sMarks.push(parseInt(resData[i].marks));
    //     }
    //     setStudentsubject(sSubject);
    //     setStudentMarks(sMarks);
    //      //console.log(resData); 
    //     }
 
    //  getStudentdata();
 
    // },[]);
 
     return(
         <React.Fragment>
          <h1 className="title">Most Popular Categories</h1>
             <div className="piechart">
                 <Chart 
                 type="pie"
                 width={1000}
                 height={550}
                 series={[4,6,5,9,10,18,15,10,10,15]}
                              
                
                 options={{
                 
                  noData:{text:"Empty Data"},
                 labels:['ผู้ประกอบการยุคใหม่','ก้าวสู่โลกอุตสาหกรรมแห่งอนาคต','นวัตกรรมเพื่ออนาคต','การเสริมสร้างทักษะทางวิชาชีพ','การสร้างพื้นฐานความเป็นผู้นำ',
                 'เรียนรู้ธุรกิจเครือซีพี',
                 'การสร้างผลลัพธ์ในการทำงาน',
                 'ความรู้ที่จำเป็นในยุคดิจิทัล',
                 'ทักษะภาษาเพื่ออาชีพ',
                 'ศูนย์ประเมินสมรรถนะเพื่อการทำงาน']


                  }}
                 >
                 </Chart>
             </div>
         </React.Fragment>
     );
 }
 export default CourseTypeGraph;





// const CourseTypeGraph = () => {
      
//   // const data = [
// //     {name:"ผู้ประกอบการยุคใหม่", value: 100},
// //     {name:"ก้าวสู่โลกอุตสาหกรรมแห่งอนาคต", value: 100},
// //     {name:"นวัตกรรมเพื่ออนาคต", value: 100},
// //     {name:"การเสริมสร้างทักษะทางวิชาชีพ", value: 100},
// //     {name:"การสร้างพื้นฐานความเป็นผู้นำ", value: 100},
// //     {name:"เรียนรู้ธุรกิจเครือซีพี", value: 100},
// //     {name:"การสร้างผลลัพธ์ในการทำงาน", value: 100},
// //     {name:"ความรู้ที่จำเป็นในยุคดิจิทัล", value: 100},
// //     {name:"ทักษะภาษาเพื่ออาชีพ", value: 100},
// //     {name:"ศูนย์ประเมินสมรรถนะเพื่อการทำงาน", value: 100},

// //   ]
// //   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// //   const RADIAN = Math.PI / 180;
// //   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
// //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
// //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

// //   return (
// //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
// //       {`${(percent * 100).toFixed(0)}%`}
// //     </text>
// //   );
// // };

//     return (
    
//       // <ResponsiveContainer width="100%" height="100%">
//       //   <PieChart width={400} height={400}>
//       //     <Pie
//       //       data={data}
//       //       cx="50%"
//       //       cy="50%"
//       //       labelLine={false}
//       //       label={renderCustomizedLabel}
//       //       outerRadius={80}
//       //       fill="#8884d8"
//       //       dataKey="value"
//       //     >
//       //       {data.map((entry, index) => (
//       //         <Tooltip key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//       //       ))}
//       //     </Pie>
//       //   </PieChart>
//       // </ResponsiveContainer>
      
//     );
   
// //   }
// // }

// }
// export default CourseTypeGraph