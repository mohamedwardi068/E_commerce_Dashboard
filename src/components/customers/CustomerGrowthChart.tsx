import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", current: 5000, previous: 3000 },
  { name: "Feb", current: 6000, previous: 4000 },
  { name: "Mar", current: 8000, previous: 5000 },
  { name: "Apr", current: 10000, previous: 6000 },
  { name: "May", current: 12000, previous: 7000 },
  { name: "Jun", current: 14000, previous: 8000 },
  { name: "Jul", current: 16000, previous: 9000 },
  { name: "Aug", current: 17000, previous: 10000 },
  { name: "Sep", current: 19000, previous: 11000 },
  { name: "Oct", current: 20000, previous: 12000 },
  { name: "Nov", current: 22000, previous: 13000 },
  { name: "Dec", current: 24000, previous: 14000 },
  { name: "Jan", current: 24532, previous: 15000 },
];

export function CustomerGrowthChart() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Customer Growth</h2>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-foreground">This year</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full border border-primary border-dashed bg-transparent" />
            <span className="text-muted-foreground">Last year</span>
          </div>
        </div>
      </div>
      <div className="h-[250px] w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : value)} />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: "12px", color: "hsl(var(--foreground))" }}
              itemStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area type="monotone" dataKey="previous" stroke="var(--primary)" strokeDasharray="3 3" strokeWidth={2} fill="transparent" />
            <Area type="monotone" dataKey="current" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorCustomers)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
