import {BiSolidDashboard} from 'react-icons/bi'
import {BsTags, BsCash, BsSearch} from 'react-icons/bs'
import {GrSchedulePlay} from 'react-icons/gr'
import {LuUserSquare2, LuUsers2} from 'react-icons/lu'
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineLike} from 'react-icons/ai'
import {FaBell} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
} from 'recharts'

import './index.css'

const dataBoard = [
  {
    week: 'Week1',
    views1: 200,
    views2: 300,
    views3: 500,
  },
  {
    week: 'Week2',
    views1: 500,
    views2: 600,
    views3: 400,
  },
  {
    week: 'Week3',
    views1: 800,
    views2: 1000,
    views3: 900,
  },
  {
    week: 'Week4',
    views1: 700,
    views2: 100,
    views3: 460,
  },
  {
    week: 'Week5',
    views1: 2000,
    views2: 370,
    views3: 780,
  },
]

const Dashboard = () => (
  <div className="dashboard-container">
    <nav className="sidebar">
      <div className="board-section">
        <h1 className="heading">Board.</h1>
        <ul className="ul-section">
          <li className="li-item">
            <BiSolidDashboard /> <span>Dashboard</span>
          </li>
          <li className="li-item">
            <BsTags />
            <span>Transctions</span>
          </li>
          <li className="li-item">
            <GrSchedulePlay />
            <span>Schedules</span>
          </li>
          <li className="li-item">
            <LuUserSquare2 />
            <span>Users</span>
          </li>
          <li className="li-item">
            <IoSettingsOutline />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </nav>

    <div className="dashboard-section">
      <div className="dashboard-header">
        <h1 className="dashboard-heading">Dashboard</h1>
        <section className="input-section">
          <section className="input-element">
            <input type="search" placeholder="search" className="input" />
            <BsSearch size={15} />
          </section>
          <FaBell />
          <CgProfile />
        </section>
      </div>

      <ul className="dashboard-components">
        <li className="revenue-section">
          <div className="component-section">
            <BsCash className="react-icon" />
            <div>
              <p>Total Revenue</p>
              <h1 className="component-headings">$2,129,430</h1>
            </div>
          </div>
        </li>
        <li className="bussiness-section">
          <div className="component-section">
            <BsTags className="react-icon" />
            <div>
              <p className="business-para">Total Business</p>
              <h1 className="component-headings">1,520</h1>
            </div>
          </div>
        </li>
        <li className="likes-section">
          <div className="component-section">
            <AiOutlineLike className="react-icon" />
            <div>
              <p>Total Likes</p>
              <h1 className="component-headings">9,721</h1>
            </div>
          </div>
        </li>
        <li className="users-section">
          <div className="component-section">
            <LuUsers2 className="react-icon" />
            <div>
              <p>Total Users</p>
              <h1 className="component-headings">892</h1>
            </div>
          </div>
        </li>
      </ul>
      <div className="charts-section">
        <ResponsiveContainer width={700} aspect={3}>
          <LineChart
            data={dataBoard}
            width="300"
            margin={{top: 5, left: 25, bottom: 5, right: 5}}
          >
            <XAxis dataKey="week" />
            <YAxis />
            <Legend />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="views1" stroke="green" />
            <Line type="monotone" dataKey="views2" stroke="red" />
            <Line type="monotone" dataKey="views3" stroke="black" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width={500} aspect={3}>
          <PieChart width={500} height={250}>
            <Pie
              data={dataBoard}
              dataKey="views1"
              fill="green"
              cx="50%"
              cy="50%"
              outerRadius={40}
            />
            <Pie
              data={dataBoard}
              dataKey="views1"
              fill="red"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
)

export default Dashboard
