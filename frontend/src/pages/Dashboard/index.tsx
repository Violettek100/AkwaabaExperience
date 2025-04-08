export { default as DashboardHome } from './index';
export { default as ProfilePage } from './Profile';
export { default as BookingHistory } from './BookingHistory';
export { default as PurchaseHistory } from './PurchaseHistory';
const Dashboard = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-800">Welcome to Your Dashboard</h1>
      </div>
    );
  };
  export default Dashboard;
  