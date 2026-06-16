import { TrendingUp, Smartphone, Monitor, ShoppingCart, Headphones } from "lucide-react";

const insights = [
  {
    title: "Revenue is up 12.4%",
    description: "Your revenue has increased compared to May 1 - May 12.",
    icon: TrendingUp,
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Mobile traffic increased",
    description: "Mobile sessions are up 18.7% this period.",
    icon: Smartphone,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    title: "Top converting source",
    description: "Direct traffic has the highest conversion rate at 3.8%.",
    icon: Monitor,
    colorClass: "text-purple-500",
    bgClass: "bg-purple-500/10",
  },
  {
    title: "Cart abandonment",
    description: "68.3% of users abandon their cart before completing checkout.",
    icon: ShoppingCart,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
  {
    title: "Best selling product",
    description: "Wireless Headphones is your top selling product.",
    icon: Headphones,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
  },
];

export function AnalyticsInsights() {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Insights</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {insights.map((item) => (
          <div key={item.title} className="flex gap-3">
            <div className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${item.bgClass} ${item.colorClass}`}>
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
