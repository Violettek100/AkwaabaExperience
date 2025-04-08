export function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-4 bg-white shadow-md rounded-lg">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
