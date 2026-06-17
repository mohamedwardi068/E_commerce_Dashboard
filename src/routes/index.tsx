import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Users, TrendingUp, ShoppingCart } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { SalesByChannel } from "@/components/dashboard/SalesByChannel";
import { BestSellers } from "@/components/dashboard/BestSellers";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { TopCountries } from "@/components/dashboard/TopCountries";
import { BottomMetrics } from "@/components/dashboard/BottomMetrics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swoo E-Commerce — Dashboard" },
      {
        name: "description",
        content: "Real-time analytics dashboard for e-commerce sales, retention, and conversion.",
      },
    ],
  }),
  component: Dashboard,
});

const spark = (seed: number) =>
  Array.from({ length: 12 }, (_, i) => ({ v: Math.round(50 + Math.sin(i + seed) * 12 + i * 3) }));

function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Sidebar />
      <div className="lg:pl-64">
        <TopBar />
        <main className="space-y-6 p-4 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Store Overview</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back — here's how your store is performing today.
              </p>
            </div>
            <div className="flex gap-2 text-xs">
              {["7d", "30d", "90d", "12m", "Custom"].map((r, i) => (
                <button
                  key={r}
                  className={
                    r === "12m"
                      ? "rounded-md bg-primary px-3 py-1.5 font-semibold text-primary-foreground"
                      : "rounded-md border border-border bg-card/50 px-3 py-1.5 text-muted-foreground hover:text-foreground"
                  }
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              label="Total Sales"
              value="$1.28M"
              delta={12.6}
              icon={DollarSign}
              spark={spark(1)}
              tone="primary"
            />
            <MetricCard
              label="Conversion Rate"
              value="3.2%"
              delta={1.5}
              icon={TrendingUp}
              spark={spark(2)}
              tone="accent"
            />
            <MetricCard
              label="Active Sessions"
              value="1,432"
              delta={-2.1}
              icon={Users}
              spark={spark(3)}
              tone="chart-3"
            />
            <MetricCard
              label="Average Order Value"
              value="$89.41"
              delta={8.7}
              icon={ShoppingCart}
              spark={spark(4)}
              tone="warning"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RevenueChart />
            </div>
            <div className="lg:col-span-2">
              <SalesByChannel />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <BestSellers />
            <RecentOrders />
            <TopCountries />
          </div>

          <BottomMetrics />
        </main>
      </div>
    </div>
  );
}
