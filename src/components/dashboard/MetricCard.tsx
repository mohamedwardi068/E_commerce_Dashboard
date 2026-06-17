import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string;
  delta: number;
  icon: LucideIcon;
  spark: { v: number }[];
  tone?: "primary" | "accent" | "chart-3" | "warning";
}

const toneToHex: Record<NonNullable<Props["tone"]>, string> = {
  primary: "var(--primary)",
  accent: "var(--accent)",
  "chart-3": "var(--chart-3)",
  warning: "var(--chart-4)",
};

export function MetricCard({ label, value, delta, icon: Icon, spark, tone = "primary" }: Props) {
  const positive = delta >= 0;
  const color = toneToHex[tone];
  const gradId = `mg-${label.replace(/\s+/g, "")}`;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{value}</p>
        </div>
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
          style={{ backgroundColor: `color-mix(in oklab, ${color} 18%, transparent)`, color }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
            positive ? "bg-accent/15 text-accent" : "bg-destructive/15 text-destructive",
          )}
        >
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {positive ? "+" : ""}
          {delta}% <span className="font-normal text-muted-foreground">vs last month</span>
        </div>
        <div className="h-12 w-24 sm:w-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spark}>
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.6} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={color}
                strokeWidth={2}
                fill={`url(#${gradId})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
