import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  type TooltipProps,
} from "recharts";

const data = [
  { m: "Jul", mrr: 42, last: 36 },
  { m: "Aug", mrr: 48, last: 40 },
  { m: "Sep", mrr: 51, last: 44 },
  { m: "Oct", mrr: 58, last: 47 },
  { m: "Nov", mrr: 62, last: 50 },
  { m: "Dec", mrr: 70, last: 55 },
  { m: "Jan", mrr: 76, last: 60 },
  { m: "Feb", mrr: 81, last: 65 },
  { m: "Mar", mrr: 88, last: 71 },
  { m: "Apr", mrr: 96, last: 78 },
  { m: "May", mrr: 104, last: 84 },
  { m: "Jun", mrr: 118, last: 92 },
];

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover/95 px-3 py-2 text-xs shadow-xl backdrop-blur">
      <p className="font-semibold text-foreground">{label} 2026</p>
      {payload.map((p) => (
        <p key={p.dataKey as string} className="mt-1 flex items-center gap-2 text-muted-foreground">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
          {p.dataKey === "mrr" ? "This year" : "Last year"}:{" "}
          <span className="font-semibold text-foreground">${p.value}k</span>
        </p>
      ))}
    </div>
  );
}

export function RevenueChart() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-foreground">Monthly Sales Overview</h2>
          <p className="text-xs text-muted-foreground">Last 12 months · USD thousands</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> This year
          </span>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/60" /> Last year
          </span>
        </div>
      </div>
      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, right: 10, top: 10 }}>
            <defs>
              <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 6" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="m"
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v}k`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "var(--primary)", strokeOpacity: 0.3 }}
            />
            <Area
              type="monotone"
              dataKey="last"
              stroke="var(--muted-foreground)"
              strokeOpacity={0.6}
              strokeDasharray="4 4"
              fill="transparent"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="mrr"
              stroke="var(--primary)"
              strokeWidth={2.5}
              fill="url(#mrrGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
