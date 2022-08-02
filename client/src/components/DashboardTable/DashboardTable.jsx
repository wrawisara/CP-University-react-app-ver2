import './dashboardtable.scss'
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



function createData(number, product, rate, view, sold) {
  return { number,product, rate, view, sold };
}

const rows = [
  createData(1,"A Day in the Life of Data Analyst",5.0,980,40),
  createData(2,"Chia Tai Business",5.0,885,32),
  createData(3,"Collaborative",5.0,743,25),
  createData(4,"FUR1101 DIY",5.0,563,13),
 
];


// const makeStyle=(status)=>{
//   if(status === 'Approved')
//   {
//     return {
//       background: 'rgb(145 254 159 / 47%)',
//       color: 'green',
//     }
//   }
//   else if(status === 'Pending')
//   {
//     return{
//       background: '#ffadad8f',
//       color: 'red',
//     }
//   }
//   else{
//     return{
//       background: '#59bfff',
//       color: 'white',
//     }
//   }
// }

export default function BasicTable() {
  return (
      <div className="table">
      <h3>Most Popular Courses</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Rate</TableCell>
                <TableCell align="left">View</TableCell>
                <TableCell align="left">sold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.number}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell align="left">{row.rate}</TableCell>
                  <TableCell align="left">{row.view}</TableCell>
                  <TableCell align="left">{row.sold}</TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}