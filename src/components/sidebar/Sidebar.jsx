import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Logo</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>Lists</p>
          <li>
            <PersonIcon className='icon'></PersonIcon>
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className='icon'></Inventory2Icon>
            <span>Products</span>
          </li>
          <li>
            <GradingIcon className='icon'></GradingIcon>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'></LocalShippingIcon>
            <span>Delivery</span>
          </li>
          <p className='title'>useful</p>
          <li>
            <QueryStatsIcon className='icon'></QueryStatsIcon>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'></NotificationsIcon>
            <span>Notifications</span>
          </li>
          <p className='title'>service</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon'></SettingsSystemDaydreamIcon>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'></PsychologyIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon className='icon'></SettingsSystemDaydreamIcon>
            <span>Settings</span>
          </li>
          <p className='title'>user</p>
          <li>
            <AccountBoxOutlinedIcon className='icon'></AccountBoxOutlinedIcon>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'></LogoutOutlinedIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;