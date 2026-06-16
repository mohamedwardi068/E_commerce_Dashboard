import { Headphones, Watch, Briefcase, Footprints, Shirt } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  { id: 1, name: "Wireless Headphones", sku: "WH-1000XM5", category: "Electronics", price: "$199.99", inventory: 120, sold: 432, revenue: "$86,391", status: "In Stock", icon: Headphones },
  { id: 2, name: "Smart Watch Series 8", sku: "SW-8-45", category: "Electronics", price: "$249.99", inventory: 85, sold: 312, revenue: "$77,997", status: "In Stock", icon: Watch },
  { id: 3, name: "Leather Backpack", sku: "LB-2024", category: "Fashion", price: "$129.99", inventory: 60, sold: 289, revenue: "$37,567", status: "Low Stock", icon: Briefcase },
  { id: 4, name: "Running Shoes", sku: "RS-2024", category: "Sports", price: "$89.99", inventory: 0, sold: 156, revenue: "$14,034", status: "Out of Stock", icon: Footprints },
  { id: 5, name: "Denim Jacket", sku: "DJ-501", category: "Fashion", price: "$79.99", inventory: 15, sold: 132, revenue: "$10,555", status: "Low Stock", icon: Shirt },
];

const statusStyles = {
  "In Stock": "bg-emerald-500/10 text-emerald-500",
  "Low Stock": "bg-orange-500/10 text-orange-500",
  "Out of Stock": "bg-red-500/10 text-red-500",
};

export function TopProductsList() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Top Products</h2>
        <button className="text-xs font-medium text-primary hover:text-primary/80">View all products</button>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-xs text-muted-foreground">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 font-medium">PRODUCT</th>
              <th className="pb-3 font-medium">SKU</th>
              <th className="pb-3 font-medium">CATEGORY</th>
              <th className="pb-3 font-medium text-right">PRICE</th>
              <th className="pb-3 font-medium text-right">INVENTORY</th>
              <th className="pb-3 font-medium text-right">SOLD (30D)</th>
              <th className="pb-3 font-medium text-right">REVENUE (30D)</th>
              <th className="pb-3 font-medium text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr key={product.id} className="transition-colors hover:bg-muted/50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-md bg-muted text-muted-foreground">
                      <product.icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-foreground">{product.name}</span>
                  </div>
                </td>
                <td className="py-3">{product.sku}</td>
                <td className="py-3">{product.category}</td>
                <td className="py-3 text-right">{product.price}</td>
                <td className="py-3 text-right">{product.inventory}</td>
                <td className="py-3 text-right">{product.sold}</td>
                <td className="py-3 text-right font-medium text-foreground">{product.revenue}</td>
                <td className="py-3 text-right">
                  <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", statusStyles[product.status as keyof typeof statusStyles])}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
