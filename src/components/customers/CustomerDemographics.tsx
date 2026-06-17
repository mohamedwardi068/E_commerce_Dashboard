import { User, UserCheck } from "lucide-react";

const ageGroups = [
  { group: "18-24", value: "18%", width: "18%" },
  { group: "25-34", value: "35%", width: "35%" },
  { group: "35-44", value: "28%", width: "28%" },
  { group: "45-54", value: "12%", width: "12%" },
  { group: "55+", value: "7%", width: "7%" },
];

export function CustomerDemographics() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-4 text-sm font-semibold text-foreground">Customer Demographics</h2>
      <div className="flex flex-1 flex-col justify-between">
        {/* Gender Split */}
        <div className="flex items-center justify-around mb-6 mt-2">
          <div className="flex flex-col items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-purple-500/20 text-purple-500">
              <User className="h-5 w-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground">Female</p>
              <p className="text-sm font-bold text-foreground">56.2%</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-500/20 text-blue-500">
              <UserCheck className="h-5 w-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground">Male</p>
              <p className="text-sm font-bold text-foreground">43.8%</p>
            </div>
          </div>
        </div>

        {/* Age Groups */}
        <div className="space-y-3">
          <p className="text-[10px] font-medium text-muted-foreground">Age Group</p>
          {ageGroups.map((age) => (
            <div key={age.group} className="flex items-center gap-3">
              <div className="w-10 text-xs text-muted-foreground">{age.group}</div>
              <div className="flex h-2 flex-1 items-center rounded-full bg-muted/50">
                <div className="h-full rounded-full bg-blue-500" style={{ width: age.width }} />
              </div>
              <div className="w-8 text-right text-xs font-medium text-foreground">{age.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
