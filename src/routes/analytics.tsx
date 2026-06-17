import { createFileRoute } from "@tanstack/react-router";
import {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart,
  Search,
  Bell,
  ChevronDown,
  Filter,
  Calendar,
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CustomerBehaviorFunnel } from "@/components/analytics/CustomerBehaviorFunnel";
import { TrafficSourceChart } from "@/components/analytics/TrafficSourceChart";
import { TopPages } from "@/components/analytics/TopPages";
import { AnalyticsInsights } from "@/components/analytics/AnalyticsInsights";
import { RevenueOverTimeChart } from "@/components/analytics/RevenueOverTimeChart";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

const spark = (seed: number) =>
  Array.from({ length: 12 }, (_, i) => ({ v: Math.round(50 + Math.sin(i + seed) * 12 + i * 3) }));

function AnalyticsPage() {
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
              placeholder="Search metrics, users, reports..."
              className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              aria-label="Notifications"
              className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 grid h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                3
              </span>
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card/50 py-1.5 pl-1.5 pr-2 sm:pr-3">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                AM
              </span>
              <div className="hidden text-left sm:block">
                <p className="text-xs font-semibold text-foreground">Aida Morgan</p>
                <p className="text-[10px] text-muted-foreground">Admin</p>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
            </button>
          </div>
        </header>

        <main className="space-y-6 p-4 sm:p-6">
          {/* Page Title & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Analytics</h1>
              <p className="text-sm text-muted-foreground">
                Dive deep into your store performance and customer behavior.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                Jun 1 - Jun 12, 2024 <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                <Filter className="h-4 w-4" /> Filters
              </button>
            </div>
          </div>

          {/* Top Metrics - 5 columns */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <MetricCard
              label="Total Revenue"
              value="$1.28M"
              delta={12.4}
              icon={DollarSign}
              spark={spark(1)}
              tone="primary"
            />
            <MetricCard
              label="Total Sessions"
              value="56,342"
              delta={8.7}
              icon={Users}
              spark={spark(2)}
              tone="chart-3"
            />
            <MetricCard
              label="Conversion Rate"
              value="3.2%"
              delta={1.3}
              icon={TrendingUp}
              spark={spark(3)}
              tone="accent"
            />
            <MetricCard
              label="Average Order Value"
              value="$89.41"
              delta={8.6}
              icon={ShoppingCart}
              spark={spark(4)}
              tone="warning"
            />
            <MetricCard
              label="Total Customers"
              value="2,543"
              delta={11.2}
              icon={Users}
              spark={spark(5)}
              tone="chart-3"
            />
          </div>

          {/* Middle Charts */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <RevenueOverTimeChart />
            </div>
            <div className="lg:col-span-1">
              <TrafficSourceChart />
            </div>
            <div className="lg:col-span-1">
              <TopPages />
            </div>
            <div className="lg:col-span-1">
              <CustomerBehaviorFunnel />
            </div>
          </div>

          {/* Bottom Insights */}
          <AnalyticsInsights />
        </main>
      </div>
    </div>
  );
}
