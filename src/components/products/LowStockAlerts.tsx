import { Wallet, Speaker, Glasses, Activity } from "lucide-react";

const alerts = [
  { id: 1, name: "Leather Wallet", sku: "LW-001", stock: 5, icon: Wallet },
  { id: 2, name: "Bluetooth Speaker", sku: "BS-200", stock: 7, icon: Speaker },
  { id: 3, name: "Sunglasses Classic", sku: "SG-C-101", stock: 8, icon: Glasses },
  { id: 4, name: "Yoga Mat", sku: "YM-01", stock: 6, icon: Activity },
];

export function LowStockAlerts() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Low Stock Alerts</h2>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-muted text-muted-foreground">
                <alert.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">{alert.name}</p>
                <p className="text-[10px] text-muted-foreground">SKU: {alert.sku}</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-red-500">Stock: {alert.stock}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-border pt-4 text-center">
        <button className="text-xs font-medium text-primary hover:text-primary/80">View all low stock items</button>
      </div>
    </div>
  );
}
