import { getUserFromCookie } from '@/lib/auth';

export default function DashboardPage() {
  const user = getUserFromCookie();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
}