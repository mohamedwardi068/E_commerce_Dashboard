import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const orders = [
  { id: "#1024", name: "John Smith", amount: 129.99, status: "Paid", time: "2m ago" },
  { id: "#1023", name: "Emily Johnson", amount: 89.5, status: "Paid", time: "15m ago" },
  { id: "#1022", name: "Michael Brown", amount: 249.0, status: "Paid", time: "1h ago" },
  { id: "#1021", name: "Sarah Davis", amount: 59.99, status: "Pending", time: "2h ago" },
  { id: "#1020", name: "David Wilson", amount: 199.99, status: "Paid", time: "3h ago" },
];

export function RecentOrders() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5">
      <div>
        <h2 className="text-base font-semibold text-foreground">Recent Orders</h2>
        <p className="text-xs text-muted-foreground">Latest 5 orders</p>
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="font-medium text-muted-foreground">{order.id}</span>
              <span className="text-foreground">{order.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground">${order.amount.toFixed(2)}</span>
              <span
                className={cn(
                  "rounded-md px-2 py-0.5 text-[10px] font-semibold",
                  order.status === "Paid"
                    ? "bg-accent/15 text-accent"
                    : "bg-chart-4/15 text-chart-4", // chart-4 is our warning/orange tone
                )}
              >
                {order.status}
              </span>
              <span className="w-12 text-right text-muted-foreground">{order.time}</span>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/orders"
        className="mt-4 block text-center w-full rounded-lg bg-muted/30 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/50"
      >
        View all orders
      </Link>
    </div>
  );
}
