import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jun", current: 500, previous: 300 },
  { name: "Jul", current: 600, previous: 400 },
  { name: "Aug", current: 700, previous: 450 },
  { name: "Sep", current: 650, previous: 420 },
  { name: "Oct", current: 800, previous: 500 },
  { name: "Nov", current: 900, previous: 600 },
  { name: "Dec", current: 1200, previous: 800 },
  { name: "Jan", current: 1100, previous: 750 },
  { name: "Feb", current: 1300, previous: 850 },
  { name: "Mar", current: 1500, previous: 1000 },
  { name: "Apr", current: 1800, previous: 1200 },
  { name: "May", current: 2200, previous: 1400 },
  { name: "Jun", current: 2568, previous: 1600 },
];

export function OrdersOverviewChart() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Orders Overview</h2>
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
          <select className="rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <div className="h-[250px] w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : value)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
                color: "hsl(var(--foreground))",
              }}
              itemStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area
              type="monotone"
              dataKey="previous"
              stroke="var(--primary)"
              strokeDasharray="3 3"
              strokeWidth={2}
              fill="transparent"
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="var(--primary)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorOrders)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
