import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  UserPlus,
  UserCheck,
  Star,
  DollarSign,
  Search,
  Bell,
  ChevronDown,
  Download,
  Plus,
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CustomerGrowthChart } from "@/components/customers/CustomerGrowthChart";
import { CustomersByLocation } from "@/components/customers/CustomersByLocation";
import { CustomersBySegment } from "@/components/customers/CustomersBySegment";
import { CustomerDemographics } from "@/components/customers/CustomerDemographics";
import { RecentCustomersList } from "@/components/customers/RecentCustomersList";
import { TopCustomersByRevenue } from "@/components/customers/TopCustomersByRevenue";
import { CustomerInsights } from "@/components/customers/CustomerInsights";
import { HeaderActions } from "@/components/dashboard/HeaderActions";

export const Route = createFileRoute("/customers")({
  component: CustomersPage,
});

const spark = (seed: number) =>
  Array.from({ length: 12 }, (_, i) => ({ v: Math.round(50 + Math.sin(i + seed) * 12 + i * 3) }));

function CustomersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Sidebar />
      <div className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:px-6">
          <div className="ml-12 lg:ml-0 flex-1 max-w-md relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search customers, email, phone..."
              className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <HeaderActions />
        </header>

        <main className="space-y-6 p-4 sm:p-6">
          {/* Page Title & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Customers</h1>
              <p className="text-sm text-muted-foreground">
                Understand your customers and build stronger relationships.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4" /> Export
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-600">
                <Plus className="h-4 w-4" /> Add Customer
              </button>
            </div>
          </div>

          {/* Top Metrics - 5 columns */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <MetricCard
              label="Total Customers"
              value="24,532"
              delta={16.3}
              icon={Users}
              spark={spark(1)}
              tone="primary"
            />
            <MetricCard
              label="New Customers (30D)"
              value="2,543"
              delta={12.8}
              icon={UserPlus}
              spark={spark(2)}
              tone="accent"
            />
            <MetricCard
              label="Returning Customers"
              value="21,989"
              delta={17.2}
              icon={UserCheck}
              spark={spark(3)}
              tone="accent"
            />
            <MetricCard
              label="Customer Satisfaction"
              value="4.8 / 5"
              delta={0.2}
              icon={Star}
              spark={spark(4)}
              tone="chart-3"
            />
            <MetricCard
              label="Customer Lifetime Value"
              value="$356.78"
              delta={8.7}
              icon={DollarSign}
              spark={spark(5)}
              tone="warning"
            />
          </div>

          {/* Middle Charts */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <CustomerGrowthChart />
            </div>
            <div className="lg:col-span-1">
              <CustomersByLocation />
            </div>
            <div className="lg:col-span-1">
              <CustomersBySegment />
            </div>
            <div className="lg:col-span-1">
              <CustomerDemographics />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <RecentCustomersList />
            </div>
            <div className="lg:col-span-1">
              <TopCustomersByRevenue />
            </div>
            <div className="lg:col-span-1">
              <CustomerInsights />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
