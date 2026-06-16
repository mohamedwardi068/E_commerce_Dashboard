import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart, DollarSign, TrendingUp, Calendar, Search, Bell, ChevronDown, Download, Plus, ChevronRight } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { OrdersOverviewChart } from "@/components/orders/OrdersOverviewChart";
import { FullOrdersList } from "@/components/orders/FullOrdersList";
import { OrdersByStatus } from "@/components/orders/OrdersByStatus";
import { OrdersByChannel } from "@/components/orders/OrdersByChannel";
import { TopSellingCategories } from "@/components/orders/TopSellingCategories";
import { OrderMetricsList } from "@/components/orders/OrderMetricsList";
import { HeaderActions } from "@/components/dashboard/HeaderActions";

export const Route = createFileRoute("/orders")({
  component: OrdersPage,
});

const spark = (seed: number) =>
  Array.from({ length: 12 }, (_, i) => ({ v: Math.round(50 + Math.sin(i + seed) * 12 + i * 3) }));

function OrdersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Sidebar />
      <div className="lg:pl-64">
        {/* Top Header - Simulating the exact layout in the image */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:px-6">
          <div className="ml-12 lg:ml-0 flex-1 max-w-md relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search orders, customers, products..."
              className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <HeaderActions />
        </header>

        <main className="space-y-6 p-4 sm:p-6">
          {/* Page Title & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Orders</h1>
              <p className="text-sm text-muted-foreground">Track, manage and fulfill customer orders.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4" /> Export
              </button>
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                All Channels <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-600">
                <Plus className="h-4 w-4" /> Create Order
              </button>
            </div>
          </div>

          {/* Top Metrics */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard label="Total Orders" value="2,568" delta={18.7} icon={ShoppingCart} spark={spark(1)} tone="primary" />
            <MetricCard label="Total Revenue" value="$1.28M" delta={12.4} icon={DollarSign} spark={spark(2)} tone="accent" />
            <MetricCard label="Average Order Value" value="$89.41" delta={8.6} icon={TrendingUp} spark={spark(4)} tone="warning" />
            <MetricCard label="Orders This Month" value="732" delta={15.3} icon={Calendar} spark={spark(5)} tone="chart-3" />
          </div>

          {/* Middle Charts */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <OrdersOverviewChart />
            </div>
            <div className="lg:col-span-2">
              <FullOrdersList />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <OrdersByStatus />
            <OrdersByChannel />
            <TopSellingCategories />
            <OrderMetricsList />
          </div>
        </main>
      </div>
    </div>
  );
}
