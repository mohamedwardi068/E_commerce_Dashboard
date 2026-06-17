const categories = [
  { name: "Electronics", value: "$512K", width: "90%" },
  { name: "Fashion", value: "$225K", width: "45%" },
  { name: "Home & Living", value: "$215K", width: "42%" },
  { name: "Beauty", value: "$128K", width: "25%" },
  { name: "Sports", value: "$98K", width: "18%" },
];

export function TopSellingCategories() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Top Selling Categories</h2>
      <div className="flex flex-1 flex-col justify-between space-y-3">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center gap-3">
            <div className="w-24 shrink-0 text-xs text-muted-foreground">{category.name}</div>
            <div className="flex h-2 flex-1 items-center rounded-full bg-muted/50">
              <div className="h-full rounded-full bg-blue-500" style={{ width: category.width }} />
            </div>
            <div className="w-12 text-right text-xs font-medium text-foreground">
              {category.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
