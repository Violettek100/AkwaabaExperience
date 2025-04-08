import React from 'react';
import { Button } from '@/components/ui/button';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: '🏠' },
    { name: 'User Management', href: '/admin/users', icon: '👥' },
    { name: 'Experience Management', href: '/admin/experiences', icon: ':Event' },
    { name: 'Booking Management', href: '/admin/bookings', icon: '📅' },
    { name: 'Order Management', href: '/admin/orders', icon: '📦' },
    { name: 'Product Management', href: '/admin/products', icon: 'merce' },
    { name: 'Payment Transactions', href: '/admin/payments', icon: '💳' },
    { name: 'Reviews Management', href: '/admin/reviews', icon: '⭐' },
    { name: 'Analytics', href: '/admin/analytics', icon: '📈' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Akwaaba Experience Admin</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-5 gap-6">
          <aside className="col-span-1 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="outline"
                className="w-full justify-start text-left px-4 py-2"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Button>
            ))}
          </aside>
          <main className="col-span-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;