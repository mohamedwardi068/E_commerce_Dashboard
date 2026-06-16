const topCustomers = [
  { id: 1, name: "Sarah Johnson", value: "$1,245.50", width: "95%", avatar: "SJ" },
  { id: 2, name: "Jessica Miller", value: "$987.20", width: "75%", avatar: "JM" },
  { id: 3, name: "Michael Brown", value: "$892.30", width: "68%", avatar: "MB" },
  { id: 4, name: "David Wilson", value: "$765.40", width: "55%", avatar: "DW" },
  { id: 5, name: "Emily Davis", value: "$456.80", width: "35%", avatar: "ED" },
];

export function TopCustomersByRevenue() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Top Customers by Revenue</h2>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {topCustomers.map((customer, index) => (
          <div key={customer.id} className="flex items-center gap-3">
            <span className="w-4 text-xs font-medium text-muted-foreground">{index + 1}</span>
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-[8px] font-bold text-primary">
              {customer.avatar}
            </div>
            <div className="w-24 shrink-0 truncate text-xs font-medium text-foreground">{customer.name}</div>
            <div className="flex h-2 flex-1 items-center rounded-full bg-muted/50">
              <div className="h-full rounded-full bg-blue-500" style={{ width: customer.width }} />
            </div>
            <div className="w-16 text-right text-xs font-medium text-foreground">{customer.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-border pt-4 text-center">
        <button className="text-xs font-medium text-primary hover:text-primary/80">View full report</button>
      </div>
    </div>
  );
}
