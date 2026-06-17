import { Search } from "lucide-react";
import { HeaderActions } from "@/components/dashboard/HeaderActions";
import { useNavigate } from "@tanstack/react-router";

export function TopBar() {
  const navigate = useNavigate({ from: "/" });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({ to: "/products" });
  };

  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:px-6">
      <div className="ml-12 flex-1 lg:ml-0">
        <form className="relative max-w-md" onSubmit={handleSearch}>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search metrics, users, reports…"
            className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </form>
      </div>
      <HeaderActions />
    </header>
  );
}
