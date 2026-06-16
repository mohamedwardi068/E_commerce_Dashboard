import { Headphones, Watch, Briefcase, Footprints, Shirt } from "lucide-react";

const topSelling = [
  { id: 1, name: "Wireless Headphones", value: 432, width: "95%", icon: Headphones },
  { id: 2, name: "Smart Watch Series 8", value: 312, width: "70%", icon: Watch },
  { id: 3, name: "Leather Backpack", value: 289, width: "65%", icon: Briefcase },
  { id: 4, name: "Running Shoes", value: 156, width: "35%", icon: Footprints },
  { id: 5, name: "Denim Jacket", value: 132, width: "30%", icon: Shirt },
];

export function TopSellingProducts() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Top Selling Products</h2>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {topSelling.map((product, index) => (
          <div key={product.id} className="flex items-center gap-3">
            <span className="w-4 text-xs font-medium text-muted-foreground">{index + 1}</span>
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground">
              <product.icon className="h-3 w-3" />
            </div>
            <div className="w-32 shrink-0 truncate text-xs font-medium text-foreground">{product.name}</div>
            <div className="flex h-2 flex-1 items-center rounded-full bg-muted/50">
              <div className="h-full rounded-full bg-blue-500" style={{ width: product.width }} />
            </div>
            <div className="w-8 text-right text-xs font-medium text-foreground">{product.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-border pt-4 text-center">
        <button className="text-xs font-medium text-primary hover:text-primary/80">View full report</button>
      </div>
    </div>
  );
}
