import { sidebarMenu, topMenu, user } from './constants';
import Dashboard from 'pageComponents/dashboard';

const CreativesDashboard = () => {
  return (
    <Dashboard
      user={user}
      sidebarMenu={sidebarMenu}
      topMenu={topMenu}
    />
  );
};

export default CreativesDashboard;