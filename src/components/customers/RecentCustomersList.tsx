import { cn } from "@/lib/utils";

const customers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    orders: 8,
    spent: "$1,245.50",
    lastOrder: "Jun 12, 2024",
    status: "VIP",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, USA",
    orders: 5,
    spent: "$892.30",
    lastOrder: "Jun 11, 2024",
    status: "Repeat",
    avatar: "MB",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, USA",
    orders: 3,
    spent: "$456.80",
    lastOrder: "Jun 10, 2024",
    status: "Regular",
    avatar: "ED",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@email.com",
    phone: "+1 (555) 456-7890",
    location: "Houston, USA",
    orders: 2,
    spent: "$234.60",
    lastOrder: "Jun 9, 2024",
    status: "New",
    avatar: "DW",
  },
  {
    id: 5,
    name: "Jessica Miller",
    email: "jessica.miller@email.com",
    phone: "+1 (555) 567-8901",
    location: "Miami, USA",
    orders: 6,
    spent: "$987.20",
    lastOrder: "Jun 8, 2024",
    status: "Repeat",
    avatar: "JM",
  },
];

const statusStyles = {
  VIP: "text-purple-500",
  Repeat: "text-emerald-500",
  Regular: "text-blue-500",
  New: "text-amber-500",
};

export function RecentCustomersList() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Recent Customers</h2>
        <button className="text-xs font-medium text-primary hover:text-primary/80">
          View all customers
        </button>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full min-w-[800px] text-left text-xs text-muted-foreground">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 font-medium">CUSTOMER</th>
              <th className="pb-3 font-medium">EMAIL</th>
              <th className="pb-3 font-medium">PHONE</th>
              <th className="pb-3 font-medium">LOCATION</th>
              <th className="pb-3 font-medium text-center">TOTAL ORDERS</th>
              <th className="pb-3 font-medium text-right">TOTAL SPENT</th>
              <th className="pb-3 font-medium text-right">LAST ORDER</th>
              <th className="pb-3 font-medium text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {customers.map((customer) => (
              <tr key={customer.id} className="transition-colors hover:bg-muted/50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                      {customer.avatar}
                    </div>
                    <span className="font-medium text-foreground">{customer.name}</span>
                  </div>
                </td>
                <td className="py-3">{customer.email}</td>
                <td className="py-3">{customer.phone}</td>
                <td className="py-3">{customer.location}</td>
                <td className="py-3 text-center">{customer.orders}</td>
                <td className="py-3 text-right font-medium text-foreground">{customer.spent}</td>
                <td className="py-3 text-right">{customer.lastOrder}</td>
                <td className="py-3 text-right">
                  <span
                    className={cn(
                      "font-medium",
                      statusStyles[customer.status as keyof typeof statusStyles],
                    )}
                  >
                    {customer.status}
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
