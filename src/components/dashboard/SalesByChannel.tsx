import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Online Store", value: 648, color: "var(--primary)" },
  { name: "Mobile App", value: 352, color: "var(--accent)" },
  { name: "Marketplace", value: 192, color: "var(--chart-3)" },
  { name: "Social Media", value: 88, color: "var(--chart-4)" },
];

export function SalesByChannel() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5">
      <div>
        <h2 className="text-base font-semibold text-foreground">Sales by Channel</h2>
        <p className="text-xs text-muted-foreground">Last 12 months</p>
      </div>
      <div className="mt-4 flex flex-1 items-center gap-6">
        <div className="relative h-48 w-48 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={65}
                outerRadius={85}
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
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-foreground">$1.28M</p>
            <p className="text-[10px] uppercase text-muted-foreground">Total</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          {data.map((item) => {
            const percentage = ((item.value / 1280) * 100).toFixed(1);
            return (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-foreground">{item.name}</span>
                </div>
                <div className="flex gap-4 text-right">
                  <span className="font-semibold text-foreground">${item.value}K</span>
                  <span className="w-8 text-muted-foreground">{percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-muted/30 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/50">
        View full report
      </button>
    </div>
  );
}
