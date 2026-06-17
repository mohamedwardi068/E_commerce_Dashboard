const data = [
  {
    name: "Sessions",
    value: 56342,
    fill: "#3b82f6",
    percentage: "",
    points: "0,0 200,0 186,35 14,35",
  },
  {
    name: "View Product",
    value: 18742,
    fill: "#10b981",
    percentage: "(33.2%)",
    points: "16,40 184,40 170,75 30,75",
  },
  {
    name: "Add to Cart",
    value: 8421,
    fill: "#a855f7",
    percentage: "(14.9%)",
    points: "32,80 168,80 154,115 46,115",
  },
  {
    name: "Checkout",
    value: 3215,
    fill: "#f59e0b",
    percentage: "(5.7%)",
    points: "48,120 152,120 138,155 62,155",
  },
  {
    name: "Purchase",
    value: 1801,
    fill: "#ef4444",
    percentage: "(3.2%)",
    points: "64,160 136,160 122,195 78,195",
  },
];

export function CustomerBehaviorFunnel() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-6 text-sm font-semibold text-foreground">Customer Behavior</h2>
      <div className="flex flex-1 items-center gap-6">
        <div className="flex h-[200px] flex-1 items-center justify-center">
          <svg viewBox="0 0 200 195" className="h-full w-full max-w-[200px]">
            {data.map((item, index) => (
              <g key={index}>
                <polygon points={item.points} fill={item.fill} />
                <text
                  x="100"
                  y={index * 40 + 20}
                  fill="#fff"
                  fontSize="12"
                  fontWeight="500"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {item.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="w-[160px] space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{item.name}</span>
              <div className="text-right">
                <span className="font-medium text-foreground">{item.value.toLocaleString()}</span>
                {item.percentage && (
                  <span className="ml-1 text-[10px] text-muted-foreground">{item.percentage}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
