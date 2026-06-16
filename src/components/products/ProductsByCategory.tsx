import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Electronics", value: 312, color: "#3b82f6", percentage: "25.0%" }, // blue-500
  { name: "Fashion", value: 256, color: "#10b981", percentage: "20.5%" }, // emerald-500
  { name: "Home & Living", value: 198, color: "#a855f7", percentage: "15.9%" }, // purple-500
  { name: "Beauty", value: 154, color: "#ec4899", percentage: "12.3%" }, // pink-500
  { name: "Sports", value: 128, color: "#f59e0b", percentage: "10.3%" }, // amber-500
  { name: "Other", value: 200, color: "#8b5cf6", percentage: "16.0%" }, // violet-500
];

export function ProductsByCategory() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Products by Category</h2>
      <div className="flex flex-1 items-center gap-4">
        <div className="relative h-28 w-28 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="text-sm font-bold text-foreground">1,248</p>
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
