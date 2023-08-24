import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <span>
        <Outlet></Outlet>
      </span>
    </div>
  );
};

export default Layout;
