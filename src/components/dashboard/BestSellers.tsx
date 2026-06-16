import { Headphones, Watch, Briefcase, Footprints, Shirt } from "lucide-react";

const products = [
  { id: 1, name: "Wireless Headphones", revenue: 96432, max: 100000, icon: Headphones },
  { id: 2, name: "Smart Watch Series 8", revenue: 78521, max: 100000, icon: Watch },
  { id: 3, name: "Leather Backpack", revenue: 62245, max: 100000, icon: Briefcase },
  { id: 4, name: "Running Shoes", revenue: 48112, max: 100000, icon: Footprints },
  { id: 5, name: "Denim Jacket", revenue: 36879, max: 100000, icon: Shirt },
];

export function BestSellers() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5">
      <div>
        <h2 className="text-base font-semibold text-foreground">Best Sellers</h2>
        <p className="text-xs text-muted-foreground">Top 5 products by revenue</p>
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-center gap-4">
        {products.map((product, idx) => {
          const width = `${(product.revenue / product.max) * 100}%`;
          const Icon = product.icon;
          return (
            <div key={product.id} className="flex items-center gap-3 text-xs">
              <span className="w-4 text-center font-bold text-muted-foreground">{idx + 1}</span>
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted/50 text-foreground">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-foreground">{product.name}</p>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-muted/30">
                  <div className="h-full rounded-full bg-primary" style={{ width }} />
                </div>
              </div>
              <span className="font-semibold text-foreground">
                ${product.revenue.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
      <button className="mt-4 w-full rounded-lg bg-muted/30 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/50">
        View all products
      </button>
    </div>
  );
}
