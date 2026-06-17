import { useMemo } from "react";

function generateLogs() {
  const logs = [];
  const messageCoords = [
    // H
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 3],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
    // I
    [5, 1],
    [6, 1],
    [7, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [5, 5],
    [6, 5],
    [7, 5],
    // R
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4],
    [9, 5],
    [10, 1],
    [10, 3],
    [11, 1],
    [11, 3],
    [11, 4],
    [12, 2],
    [12, 5],
    // E
    [14, 1],
    [14, 2],
    [14, 3],
    [14, 4],
    [14, 5],
    [15, 1],
    [15, 3],
    [15, 5],
    [16, 1],
    [16, 3],
    [16, 5],
    [17, 1],
    [17, 5],
    // M (shifted by 10 from previous E + 3 space = 17 + 4 = 21)
    [21, 1],
    [21, 2],
    [21, 3],
    [21, 4],
    [21, 5],
    [22, 2],
    [23, 3],
    [24, 2],
    [25, 1],
    [25, 2],
    [25, 3],
    [25, 4],
    [25, 5],
    // E
    [27, 1],
    [27, 2],
    [27, 3],
    [27, 4],
    [27, 5],
    [28, 1],
    [28, 3],
    [28, 5],
    [29, 1],
    [29, 3],
    [29, 5],
    [30, 1],
    [30, 5],
  ];

  const offsetX = 10;
  const messageSet = new Set(messageCoords.map(([c, r]) => `${c + offsetX},${r}`));

  for (let c = 0; c < 52; c++) {
    for (let r = 0; r < 7; r++) {
      let level = 0;
      if (messageSet.has(`${c},${r}`)) {
        level = 4;
      } else {
        // Light background noise
        const rand = Math.random();
        if (rand > 0.98) level = 2;
        else if (rand > 0.9) level = 1;
      }
      logs.push({ id: c * 7 + r, level });
    }
  }
  return logs;
}

const colorMap = {
  0: "bg-muted/30 dark:bg-muted/10",
  1: "bg-emerald-500/30",
  2: "bg-emerald-500/50",
  3: "bg-emerald-500/70",
  4: "bg-emerald-500",
};

export function DailyLogs() {
  const logs = useMemo(() => generateLogs(), []);

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card/50 p-6 backdrop-blur">
      <h2 className="mb-6 text-sm font-semibold text-foreground">Activity Logs</h2>

      <div className="flex w-full overflow-x-auto pb-4">
        <div className="grid grid-flow-col grid-rows-7 gap-1">
          {logs.map((log) => (
            <div
              key={log.id}
              className={`h-3 w-3 rounded-sm ${colorMap[log.level as keyof typeof colorMap]}`}
              title={`Activity level: ${log.level}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
        <span>Less</span>
        <div className={`h-3 w-3 rounded-sm ${colorMap[0]}`} />
        <div className={`h-3 w-3 rounded-sm ${colorMap[1]}`} />
        <div className={`h-3 w-3 rounded-sm ${colorMap[2]}`} />
        <div className={`h-3 w-3 rounded-sm ${colorMap[3]}`} />
        <div className={`h-3 w-3 rounded-sm ${colorMap[4]}`} />
        <span>More</span>
      </div>
    </div>
  );
}
