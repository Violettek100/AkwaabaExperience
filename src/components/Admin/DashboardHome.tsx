import React from 'react';

const DashboardHome = () => {
  const stats = [
    { title: 'Total Users', value: '2,845', icon: '👥', color: 'bg-blue-100' },
    { title: 'Active Bookings', value: '147', icon: '📅', color: 'bg-green-100' },
    { title: 'Revenue', value: '$52,420', icon: '-commerce', color: 'bg-purple-100' },
    { title: 'Completed Experiences', value: '892', icon: ':Event', color: 'bg-orange-100' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="p-6 rounded-lg border bg-white">
            <div className={`${stat.color} p-3 rounded-full w-fit mb-3`} >
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;