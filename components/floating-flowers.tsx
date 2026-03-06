"use client";

const flowers = [
  { id: 1, left: "5%", delay: "0s", duration: "6.2s", size: "text-2xl" },
  { id: 2, left: "17%", delay: "1s", duration: "7.5s", size: "text-xl" },
  { id: 3, left: "30%", delay: "2.2s", duration: "6.8s", size: "text-3xl" },
  { id: 4, left: "43%", delay: "0.6s", duration: "7.1s", size: "text-xl" },
  { id: 5, left: "58%", delay: "1.8s", duration: "8s", size: "text-2xl" },
  { id: 6, left: "70%", delay: "0.3s", duration: "6.6s", size: "text-xl" },
  { id: 7, left: "83%", delay: "2.5s", duration: "7.4s", size: "text-2xl" },
  { id: 8, left: "92%", delay: "1.3s", duration: "6.9s", size: "text-xl" }
];

export function FloatingFlowers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flowers.map((flower) => (
        <span
          key={flower.id}
          className={`absolute bottom-[-8%] ${flower.size} opacity-80`}
          style={{
            left: flower.left,
            animation: `flowerRise ${flower.duration} linear ${flower.delay} infinite`
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
