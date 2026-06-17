import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jun 1", current: 30000, previous: 20000 },
  { name: "Jun 3", current: 40000, previous: 25000 },
  { name: "Jun 5", current: 35000, previous: 22000 },
  { name: "Jun 7", current: 60000, previous: 30000 },
  { name: "Jun 9", current: 55000, previous: 35000 },
  { name: "Jun 11", current: 90000, previous: 45000 },
  { name: "Jun 13", current: 85000, previous: 50000 },
  { name: "Jun 15", current: 110000, previous: 60000 },
];

export function RevenueOverTimeChart() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Revenue Over Time</h2>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-foreground">This period</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full border border-primary border-dashed bg-transparent" />
            <span className="text-muted-foreground">Last period</span>
          </div>
        </div>
      </div>
      <div className="h-[250px] w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAnalytics" x1="0" y1="0" x2="0" y2="1">
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
              tickFormatter={(value) => (value >= 1000 ? `$${value / 1000}K` : `$${value}`)}
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
              fill="url(#colorAnalytics)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
