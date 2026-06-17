import { PackageCheck, ArrowDownLeft, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    label: "Fulfillment Rate",
    value: "96.2%",
    delta: "+ 2.4%",
    isPositive: true,
    icon: PackageCheck,
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    label: "Return Rate",
    value: "4.8%",
    delta: "- 0.6%",
    isPositive: false,
    icon: ArrowDownLeft,
    colorClass: "text-red-500",
    bgClass: "bg-red-500/10",
  },
  {
    label: "On-time Delivery",
    value: "92.1%",
    delta: "+ 3.1%",
    isPositive: true,
    icon: Clock,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    label: "Cancellation Rate",
    value: "5.1%",
    delta: "- 0.3%",
    isPositive: false,
    icon: XCircle,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
];

export function OrderMetricsList() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Order Metrics</h2>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {metrics.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "grid h-6 w-6 place-items-center rounded-md",
                  item.bgClass,
                  item.colorClass,
                )}
              >
                <item.icon className="h-3.5 w-3.5" />
              </div>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground">{item.value}</span>
              <span
                className={cn(
                  "w-10 text-right text-[10px] font-medium",
                  item.isPositive ? "text-emerald-500" : "text-red-500",
                )}
              >
                {item.delta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
