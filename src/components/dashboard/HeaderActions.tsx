import {
  Bell,
  ChevronDown,
  ShoppingCart,
  AlertTriangle,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function HeaderActions() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3" ref={containerRef}>
      {/* Notifications Dropdown */}
      <div className="relative">
        <button
          aria-label="Notifications"
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowProfile(false);
          }}
          className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 grid h-4 min-w-4 place-items-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
            3
          </span>
        </button>

        {showNotifications && (
          <div className="absolute right-0 top-full mt-2 w-80 overflow-hidden rounded-xl border border-border bg-card shadow-lg backdrop-blur-xl">
            <div className="border-b border-border bg-muted/20 px-4 py-3">
              <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
            </div>
            <div className="flex flex-col divide-y divide-border">
              <div className="flex items-start gap-3 p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-blue-500/10 text-blue-500">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">New Order #1025</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    Order received from Jane Doe.
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-muted-foreground">2m ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-blue-500/10 text-blue-500">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">New Order #1026</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    Order received from Mark Smith.
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-muted-foreground">15m ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-orange-500/10 text-orange-500">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Out of Stock</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    Running Shoes (RS-2024) is out of stock.
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-muted-foreground">1h ago</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => {
            setShowProfile(!showProfile);
            setShowNotifications(false);
          }}
          className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card/50 py-1.5 pl-1.5 pr-2 transition-colors hover:bg-muted/50 sm:pr-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
            MO
          </span>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-foreground">Mohamed El Ouardi</p>
            <p className="text-[10px] text-muted-foreground">Admin</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
        </button>

        {showProfile && (
          <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-border bg-card shadow-lg backdrop-blur-xl">
            <div className="flex flex-col p-1">
              <Link
                to="/profile"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                <User className="h-4 w-4" />
                My Profile
              </Link>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <div className="my-1 border-t border-border" />
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs font-medium text-red-500 hover:bg-red-500/10">
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
