const pages = [
  { name: "/", views: "18,742", width: "95%" },
  { name: "/collections/all", views: "12,432", width: "65%" },
  { name: "/products/product-1", views: "8,421", width: "45%" },
  { name: "/products/product-2", views: "6,231", width: "35%" },
  { name: "/cart", views: "4,125", width: "22%" },
];

export function TopPages() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Top Pages</h2>
      </div>
      <div className="mb-2 flex items-center justify-between text-[10px] font-medium text-muted-foreground">
        <span>PAGE</span>
        <span>VIEWS</span>
      </div>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {pages.map((page) => (
          <div key={page.name} className="flex items-center gap-3">
            <div className="w-28 shrink-0 truncate text-xs text-muted-foreground">{page.name}</div>
            <div className="flex h-2 flex-1 items-center rounded-full bg-muted/50">
              <div className="h-full rounded-full bg-blue-500" style={{ width: page.width }} />
            </div>
            <div className="w-12 text-right text-xs font-medium text-foreground">{page.views}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border text-center">
        <button className="text-xs font-medium text-primary hover:text-primary/80">
          View all pages
        </button>
      </div>
    </div>
  );
}
