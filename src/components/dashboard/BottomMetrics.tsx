import { Users, UserPlus, RotateCcw, Star, Package, AlertTriangle } from "lucide-react";

const metrics = [
  { label: "Total Customers", value: "24,532", delta: "+ 16.3%", icon: Users, tone: "primary" },
  { label: "New Customers", value: "2,543", delta: "+ 12.8%", icon: UserPlus, tone: "accent" },
  { label: "Returning Customers", value: "21,989", delta: "+ 17.2%", icon: RotateCcw, tone: "accent" },
  { label: "Customer Satisfaction", value: "4.8/5", delta: "+ 0.2", icon: Star, tone: "chart-3" },
  { label: "Total Products", value: "1,248", delta: "+ 8.1%", icon: Package, tone: "chart-3" },
  { label: "Low Stock Items", value: "23", delta: "- 4", icon: AlertTriangle, tone: "destructive" },
];

const toneToHex: Record<string, string> = {
  primary: "var(--primary)",
  accent: "var(--accent)",
  "chart-3": "var(--chart-3)",
  warning: "var(--chart-4)",
  destructive: "var(--destructive)",
};

export function BottomMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {metrics.map((metric) => {
        const color = toneToHex[metric.tone];
        const Icon = metric.icon;
        const isNegative = metric.delta.startsWith("-");
        
        return (
          <div key={metric.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
              style={{ backgroundColor: `color-mix(in oklab, ${color} 15%, transparent)`, color }}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[10px] uppercase text-muted-foreground">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-foreground">{metric.value}</span>
                <span className={`text-[10px] font-semibold ${isNegative ? "text-destructive" : "text-accent"}`}>
                  {metric.delta}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
