import { cn } from "@/lib/utils";

const orders = [
  { id: "#1024", customer: "John Smith", avatar: "JS", date: "Jun 12, 2024", status: "Delivered", total: "$129.99", payment: "Visa" },
  { id: "#1023", customer: "Emily Johnson", avatar: "EJ", date: "Jun 12, 2024", status: "Paid", total: "$89.50", payment: "Mastercard" },
  { id: "#1022", customer: "Michael Brown", avatar: "MB", date: "Jun 11, 2024", status: "Shipped", total: "$249.00", payment: "PayPal" },
  { id: "#1021", customer: "Sarah Davis", avatar: "SD", date: "Jun 11, 2024", status: "Pending", total: "$59.99", payment: "Visa" },
  { id: "#1020", customer: "David Wilson", avatar: "DW", date: "Jun 10, 2024", status: "Cancelled", total: "$199.99", payment: "Mastercard" },
];

const statusStyles = {
  Delivered: "bg-emerald-500/10 text-emerald-500",
  Paid: "bg-emerald-500/10 text-emerald-500",
  Shipped: "bg-blue-500/10 text-blue-500",
  Pending: "bg-orange-500/10 text-orange-500",
  Cancelled: "bg-red-500/10 text-red-500",
};

export function FullOrdersList() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Recent Orders</h2>
        <button className="text-xs font-medium text-primary hover:text-primary/80">View all orders</button>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left text-xs text-muted-foreground">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 font-medium">ORDER ID</th>
              <th className="pb-3 font-medium">CUSTOMER</th>
              <th className="pb-3 font-medium">DATE</th>
              <th className="pb-3 font-medium">STATUS</th>
              <th className="pb-3 font-medium text-right">TOTAL</th>
              <th className="pb-3 font-medium text-right">PAYMENT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order) => (
              <tr key={order.id} className="transition-colors hover:bg-muted/50">
                <td className="py-3 font-medium text-foreground">{order.id}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                      {order.avatar}
                    </div>
                    <span className="font-medium text-foreground">{order.customer}</span>
                  </div>
                </td>
                <td className="py-3">{order.date}</td>
                <td className="py-3">
                  <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", statusStyles[order.status as keyof typeof statusStyles])}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-right font-medium text-foreground">{order.total}</td>
                <td className="py-3 text-right">{order.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
