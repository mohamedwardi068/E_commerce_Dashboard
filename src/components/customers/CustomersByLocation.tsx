import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = [
  "United States of America",
  "Canada",
  "United Kingdom",
  "Germany",
  "Australia",
];

const locations = [
  { name: "United States", value: "8,452", percentage: "(34.5%)", flag: "🇺🇸", color: "#3b82f6" },
  { name: "Canada", value: "2,845", percentage: "(11.6%)", flag: "🇨🇦", color: "#10b981" },
  { name: "United Kingdom", value: "2,125", percentage: "(8.7%)", flag: "🇬🇧", color: "#ef4444" },
  { name: "Germany", value: "1,984", percentage: "(8.1%)", flag: "🇩🇪", color: "#f59e0b" },
  { name: "Australia", value: "1,652", percentage: "(6.7%)", flag: "🇦🇺", color: "#3b82f6" },
  { name: "Others", value: "7,474", percentage: "(30.4%)", flag: "🌍", color: "#64748b" },
];

export function CustomersByLocation() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Customers by Location</h2>
      <div className="mt-2 flex flex-col gap-6 lg:flex-row items-center">
        {/* Map */}
        <div className="w-full lg:w-1/2">
          <ComposableMap projectionConfig={{ scale: 180 }} style={{ width: "100%", height: "100%" }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={highlightedCountries.includes(geo.properties.name) ? "#3B82F6" : "#1E293B"}
                    stroke="#334155"
                    strokeWidth={0.3}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#60A5FA" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Countries */}
        <div className="flex flex-col gap-3 w-full lg:w-1/2">
          {locations.map((loc) => (
            <div key={loc.name} className="flex justify-between items-center text-xs">
              <div className="flex gap-2 items-center">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: loc.color }} />
                <span className="text-muted-foreground">{loc.name}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold text-foreground">{loc.value}</span>
                <span className="text-[10px] text-muted-foreground">{loc.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
