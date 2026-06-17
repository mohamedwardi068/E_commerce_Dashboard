import { createFileRoute } from "@tanstack/react-router";
import {
  Package,
  ShieldCheck,
  AlertCircle,
  DollarSign,
  AlertTriangle,
  Search,
  Bell,
  ChevronDown,
  Download,
  Upload,
  Plus,
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ProductsOverviewChart } from "@/components/products/ProductsOverviewChart";
import { ProductsByCategory } from "@/components/products/ProductsByCategory";
import { InventoryStatus } from "@/components/products/InventoryStatus";
import { TopProductsList } from "@/components/products/TopProductsList";
import { LowStockAlerts } from "@/components/products/LowStockAlerts";
import { TopSellingProducts } from "@/components/products/TopSellingProducts";
import { HeaderActions } from "@/components/dashboard/HeaderActions";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

const spark = (seed: number) =>
  Array.from({ length: 12 }, (_, i) => ({ v: Math.round(50 + Math.sin(i + seed) * 12 + i * 3) }));

function ProductsPage() {
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
              placeholder="Search products, SKU, categories..."
              className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <HeaderActions />
        </header>

        <main className="space-y-6 p-4 sm:p-6">
          {/* Page Title & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Products</h1>
              <p className="text-sm text-muted-foreground">
                Manage your store inventory and track product performance.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4" /> Export
              </button>
              <button className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                <Upload className="h-4 w-4" /> Import
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-600">
                <Plus className="h-4 w-4" /> Add Product
              </button>
            </div>
          </div>

          {/* Top Metrics - 5 columns */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <MetricCard
              label="Total Products"
              value="1,248"
              delta={8.6}
              icon={Package}
              spark={spark(1)}
              tone="primary"
            />
            <MetricCard
              label="Active Products"
              value="1,102"
              delta={7.3}
              icon={ShieldCheck}
              spark={spark(2)}
              tone="accent"
            />
            <MetricCard
              label="Out of Stock"
              value="46"
              delta={-12.5}
              icon={AlertCircle}
              spark={spark(3)}
              tone="warning"
            />
            <MetricCard
              label="Total Inventory Value"
              value="$324.6K"
              delta={11.4}
              icon={DollarSign}
              spark={spark(4)}
              tone="chart-3"
            />
            <MetricCard
              label="Low Stock Items"
              value="78"
              delta={-5.1}
              icon={AlertTriangle}
              spark={spark(5)}
              tone="warning"
            />
          </div>

          {/* Middle Charts */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <ProductsOverviewChart />
            </div>
            <div className="lg:col-span-1">
              <ProductsByCategory />
            </div>
            <div className="lg:col-span-1">
              <InventoryStatus />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <TopProductsList />
            </div>
            <div className="lg:col-span-1">
              <LowStockAlerts />
            </div>
            <div className="lg:col-span-1">
              <TopSellingProducts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
