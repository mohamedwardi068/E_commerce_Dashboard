import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const recoveryRate = 68.5;
const data = [{ name: "recoveryRate", value: recoveryRate, fill: "var(--primary)" }];

export function UptimeChart() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
      <div>
        <h2 className="text-base font-semibold text-foreground">Cart Recovery Rate</h2>
        <p className="text-xs text-muted-foreground">Last 30 days · across channels</p>
      </div>
      <div className="relative mt-2 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="78%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={20} background={{ fill: "var(--muted)" }} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-foreground">{recoveryRate}%</p>
          <p className="text-xs text-muted-foreground">recovered</p>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          { l: "Email", v: "72%" },
          { l: "SMS", v: "64%" },
          { l: "Retargeting", v: "58%" },
        ].map((r) => (
          <div key={r.l} className="rounded-lg border border-border bg-muted/30 p-2">
            <p className="font-semibold text-foreground">{r.v}</p>
            <p className="text-muted-foreground">{r.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
