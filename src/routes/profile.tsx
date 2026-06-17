import { createFileRoute } from "@tanstack/react-router";
import { Search, Mail, Phone, MapPin, Building, Calendar, Edit } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { HeaderActions } from "@/components/dashboard/HeaderActions";
import { DailyLogs } from "@/components/profile/DailyLogs";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
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
              placeholder="Search..."
              className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <HeaderActions />
        </header>

        <main className="space-y-6 p-4 sm:p-6 max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold text-primary-foreground shadow-lg">
              AM
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground">Aida Morgan</h1>
                  <p className="text-sm font-medium text-primary">Senior Store Administrator</p>
                </div>
                <button className="flex items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors">
                  <Edit className="h-3 w-3" /> Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>aida.morgan@Swoo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+1 (555) 019-2834</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 shrink-0" />
                  <span>Swoo E-Commerce HQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>Joined January 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Logs */}
          <DailyLogs />
        </main>
      </div>
    </div>
  );
}
