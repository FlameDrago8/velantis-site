import driveReport from "@/images/drive/drive-report.png";
import weeklyTrend from "@/images/drive/weekly-trend.png";
import achievements from "@/images/drive/achievements.png";
import leaderboard from "@/images/drive/leaderboard.png";
import driverCard from "@/images/drive/driver-card.png";

import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";

/**
 * Real screens from the shipping app, ordered as a driver meets them:
 * finish a drive, read the week, earn the badge, find your rank, carry the
 * card. The rail bleeds past the container on small screens so the cut-off
 * phone advertises that there is more to scroll.
 */
const screens = [
  {
    src: driveReport,
    label: "Drive Report",
    body: "Every trip scored, mapped, and broken down by channel.",
  },
  {
    src: weeklyTrend,
    label: "Weekly Trend",
    body: "Seven days of scores, and where the week's routes ran.",
  },
  {
    src: achievements,
    label: "Achievements",
    body: "Badges that track hours, consistency, and clean drives.",
  },
  {
    src: leaderboard,
    label: "Leaderboard",
    body: "Where you stand against the drivers you know.",
  },
  {
    src: driverCard,
    label: "Driver Card",
    body: "A shareable snapshot of your driving identity.",
  },
];

export default function DriveScreens() {
  return (
    <div className="mt-24 border-t border-hairline pt-14">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          Inside the app
        </p>
      </Reveal>

      <Reveal delay={80}>
        {/* Focusable so the rail is scrollable by keyboard where it overflows. */}
        <div
          className="rail -mx-6 mt-10 snap-x snap-mandatory overflow-x-auto px-6 [scroll-padding-inline:1.5rem]"
          tabIndex={0}
          role="region"
          aria-label="Drive app screens"
        >
          <ul className="flex gap-6">
            {screens.map((screen) => (
              <li
                key={screen.label}
                className="w-[188px] shrink-0 snap-start md:w-[196px]"
              >
                <PhoneFrame
                  src={screen.src}
                  alt={`Drive app — ${screen.label} screen`}
                  sizes="196px"
                />
                <p className="mt-5 font-mono text-[10px] tracking-[0.22em] text-xenon uppercase">
                  {screen.label}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {screen.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
