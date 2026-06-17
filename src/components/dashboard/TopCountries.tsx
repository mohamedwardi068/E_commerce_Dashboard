import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import USFlag from "../../assets/US.png";
import CAFlag from "../../assets/CA.png";
import GBFlag from "../../assets/GB.png";
import DEFlag from "../../assets/DE.png";
import AUFlag from "../../assets/AU.png";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = [
  "United States of America",
  "Canada",
  "United Kingdom",
  "Germany",
  "Australia",
];

export function TopCountries() {
  const countries = [
    { name: "United States", flag: USFlag, value: "352K" },
    { name: "Canada", flag: CAFlag, value: "98K" },
    { name: "United Kingdom", flag: GBFlag, value: "87K" },
    { name: "Germany", flag: DEFlag, value: "74K" },
    { name: "Australia", flag: AUFlag, value: "63K" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 h-full">
      <div>
        <h2 className="font-semibold text-base">Top Countries</h2>
        <p className="text-xs text-muted-foreground">By sales</p>
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        {/* Map */}
        <div className="flex-1">
          <ComposableMap
            projectionConfig={{ scale: 180 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      highlightedCountries.includes(geo.properties.name) ? "#3B82F6" : "#1E293B"
                    }
                    stroke="#334155"
                    strokeWidth={0.3}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Countries */}
        <div className="flex flex-col gap-4 flex-1">
          {countries.map((country) => (
            <div key={country.name} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-6 h-4 object-cover rounded-[2px]"
                />
                <span>{country.name}</span>
              </div>

              <span className="font-semibold">${country.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
