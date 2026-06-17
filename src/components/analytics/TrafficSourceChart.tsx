import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Direct", value: 22342, color: "#3b82f6", percentage: "39.6%" },
  { name: "Organic Search", value: 16125, color: "#10b981", percentage: "28.6%" },
  { name: "Social Media", value: 8342, color: "#a855f7", percentage: "14.8%" },
  { name: "Referral", value: 6321, color: "#f59e0b", percentage: "11.2%" },
  { name: "Email", value: 3212, color: "#ef4444", percentage: "5.7%" },
];

export function TrafficSourceChart() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Traffic Source</h2>
      <div className="flex flex-1 items-center gap-4">
        <div className="relative h-32 w-32 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="text-sm font-bold text-foreground">56,342</p>
              <p className="text-[10px] text-muted-foreground">Sessions</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-muted-foreground">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">{item.value.toLocaleString()}</span>
                <span className="text-[10px] text-muted-foreground">({item.percentage})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
