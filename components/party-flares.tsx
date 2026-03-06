"use client";

export function PartyFlares({ active }: { active: boolean }) {
  if (!active) {
    return null;
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-36 overflow-hidden">
        {Array.from({ length: 16 }).map((_, idx) => (
          <span
            key={`left-${idx}`}
            className="flare absolute"
            style={{
              left: `${(idx % 4) * 18 + 8}%`,
              bottom: `${(idx % 6) * 10 + 5}%`,
              animationDelay: `${(idx % 8) * 0.18}s`
            }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-36 overflow-hidden">
        {Array.from({ length: 16 }).map((_, idx) => (
          <span
            key={`right-${idx}`}
            className="flare absolute"
            style={{
              right: `${(idx % 4) * 18 + 8}%`,
              bottom: `${(idx % 6) * 10 + 5}%`,
              animationDelay: `${(idx % 8) * 0.2}s`
            }}
          />
        ))}
      </div>
    </>
  );
}
