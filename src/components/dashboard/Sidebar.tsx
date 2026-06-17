import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  ShoppingCart,
  Package,
  Zap,
  Megaphone,
  Tags,
  FileText,
  HelpCircle,
  LogOut,
  ShoppingCartIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: ShoppingCart, label: "Orders", to: "/orders" },
  { icon: Package, label: "Products", to: "/products" },
  { icon: Users, label: "Customers", to: "/customers" },
  { icon: BarChart3, label: "Analytics", to: "/analytics" },
  { icon: Megaphone, label: "Marketing", to: "/marketing" },
  { icon: Tags, label: "Discounts", to: "/discounts" },
  { icon: FileText, label: "Reports", to: "/reports" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-lg border border-sidebar-border bg-sidebar text-sidebar-foreground lg:hidden"
      >
        <BarChart3 className="h-5 w-5" />
      </button>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/60 lg:hidden" />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-sidebar-border bg-sidebar p-4 transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <ShoppingCartIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-sidebar-foreground">Swoo</p>
            <p className="truncate text-xs text-muted-foreground">E-Commerce</p>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {items.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              activeProps={{
                className:
                  "bg-sidebar-primary/15 text-sidebar-primary shadow-[inset_0_0_0_1px] shadow-sidebar-primary/30",
              }}
              inactiveProps={{
                className:
                  "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
              }}
              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="rounded-xl border border-sidebar-border bg-gradient-to-br from-primary/15 to-accent/10 p-4 mb-4">
          <p className="text-sm font-semibold text-sidebar-foreground">Store Upgrade</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Unlock advanced inventory and custom reports.
          </p>
          <button className="mt-3 w-full rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90">
            Upgrade
          </button>
        </div>
        <div className="flex flex-col gap-1 border-t border-sidebar-border pt-4">
          <button className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <HelpCircle className="h-4 w-4" />
            Help Center
          </button>
          <button className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
