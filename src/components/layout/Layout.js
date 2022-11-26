import { Outlet } from 'react-router-dom';
import classes from './Layou.module.scss';

export const Layout = () => (
  <div className={classes.block}>
    <Outlet />
  </div>
);