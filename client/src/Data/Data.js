import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import HelpIcon from "@material-ui/icons/Help";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import GradeIcon from '@material-ui/icons/Grade';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'
import img4 from '../imgs/img4.jpg'

import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FaceIcon from '@material-ui/icons/Face';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import VisibilityIcon from '@material-ui/icons/Visibility';


export const NavbarData = [
    
    {   icon: HomeIcon, 
        heading: "Dashboard" 
    },
    {   icon: AccountBoxIcon, 
        heading: "Account" 
    },
    {   icon: ShowChartIcon, 
        heading: "Chart" 
    },
    {   icon: HelpIcon, 
        heading: "Support" 
    }

];

export const CardsData = [
   {
        title : "New Users",
        color : {
            backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue:30,
        value:"416",
        icon: PersonAddIcon,
        series: [
            {
                name: "New Users",
                data: [20, 41, 69, 100, 87, 99, 0,0,0,0,0,0],
            },
        ],
   },
   {
    title : "Active Users",
    color : {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:90,
    value:"2,000",
    icon: PeopleIcon,
    series: [
        {
            name: "Active Users",
            data: [20, 41, 199, 240, 500, 1000, 0,0,0,0,0,0],
        },
    ],
},
{
    title : "Sales Course",
    color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
    barValue:90,
    value:"5000",
    icon: AttachMoneyIcon,
    series: [
        {
            name: "New Users",
            data: [20, 41, 199, 240, 500, 1000, 0,0,0,0,0,0],
        },
    ],
},

   
]

// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Tua Lueng ",
      noti: "has applied for a course",
      time: "25 seconds ago",
    },
    {
        img: img2,
        name: "Pak Gard ",
        noti: "is now a new user",
        time: "10 minutes ago",
      },
      {
        img: img3,
        name: "Tu Na ",
        noti: "has rate a course",
        time: "2 hours ago",
      },
      {
        img: img4,
        name: "Big Som ",
        noti: "has applied for a course",
        time: "6 hours ago",
      },
  ];



// export const WidgetsData = [
//     {
//         icon: VisibilityIcon ,
//         count: "274,806",
//         title: "Total Views",
//         trendIcon: TrendingUpIcon,
//         per:"70%"

//     },
//     {
//         icon: LoyaltyIcon ,
//         count: "30",
//         title: "Total Sales",
//         trendIcon: TrendingDownIcon,
//         per:"10%"

//     },
//     {
//         icon: FaceIcon ,
//         count: "6,078",
//         title: "Total Users",
//         trendIcon: TrendingUpIcon,
//         per:"30%"

//     }
// ]
