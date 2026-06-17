import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { product: "Phone", income: 125 },
  { product: "Tablet", income: 110 },
  { product: "AirPods", income: 95 },
  { product: "Laptop", income: 85 },
  { product: "Watch", income: 70 },
  { product: "Monitor", income: 60 },
  { product: "Keyboard", income: 45 },
  { product: "Mouse", income: 35 },
  { product: "Charger", income: 25 },
  { product: "Case", income: 15 },
];

export function RetentionChart() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-foreground">Best Sellers</h2>
          <p className="text-xs text-muted-foreground">Top 10 products by revenue</p>
        </div>
      </div>
      <div className="mt-5 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 10 }}>
            <CartesianGrid strokeDasharray="3 6" stroke="var(--border)" horizontal={false} />
            <XAxis
              type="number"
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v}k`}
            />
            <YAxis
              dataKey="product"
              type="category"
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={70}
            />
            <Tooltip
              cursor={{ fill: "var(--muted)", opacity: 0.3 }}
              contentStyle={{
                background: "var(--popover)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(value) => [`$${value}k`, "Revenue"]}
            />
            <Bar dataKey="income" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
