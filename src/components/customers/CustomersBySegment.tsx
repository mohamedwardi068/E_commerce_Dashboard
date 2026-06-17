import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "VIP", value: 3245, color: "#3b82f6", percentage: "13.2%" }, // blue
  { name: "Repeat Customers", value: 8912, color: "#10b981", percentage: "36.3%" }, // emerald
  { name: "Regular Customers", value: 9453, color: "#a855f7", percentage: "38.5%" }, // purple
  { name: "New Customers", value: 2922, color: "#f59e0b", percentage: "11.9%" }, // amber
];

export function CustomersBySegment() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Customers by Segment</h2>
      <div className="flex flex-1 items-center gap-4">
        <div className="relative h-28 w-28 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={35}
                outerRadius={55}
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
              <p className="text-sm font-bold text-foreground">24,532</p>
              <p className="text-[10px] text-muted-foreground">Total</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
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
