import { TrendingUp, Star, Target, ShieldCheck } from "lucide-react";

const insights = [
  {
    title: "Revenue from returning customers increased",
    description: "23.5% compared to last month",
    icon: TrendingUp,
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "VIP customers generate",
    description: "42% of total revenue",
    icon: Star,
    colorClass: "text-purple-500",
    bgClass: "bg-purple-500/10",
  },
  {
    title: "New customer acquisition cost decreased by",
    description: "18% this month",
    icon: Target,
    colorClass: "text-amber-500",
    bgClass: "bg-amber-500/10",
  },
  {
    title: "Customer retention rate improved by",
    description: "15% compared to last month",
    icon: ShieldCheck,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
];

export function CustomerInsights() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Customer Insights</h2>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {insights.map((item) => (
          <div key={item.title} className="flex gap-3">
            <div
              className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${item.bgClass} ${item.colorClass}`}
            >
              <item.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
