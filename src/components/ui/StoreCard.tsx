import { LucideIcon } from "lucide-react";

interface StoreCardProps {
  name: string;
  category: string;
  Icon: LucideIcon;
  rotation?: number;
  zIndex?: number;
}

export default function StoreCard({
  name,
  category,
  Icon,
  rotation = 0,
  zIndex = 0,
}: StoreCardProps) {
  return (
    <div
      className="absolute w-44 bg-paper rounded-xl shadow-md border border-line overflow-hidden select-none"
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex,
      }}
    >
      {/* Tendal ratllat */}
      <div
        className="h-3 w-full"
        style={{
          background:
            "repeating-linear-gradient(90deg, var(--amber) 0px, var(--amber) 8px, var(--amber-deep) 8px, var(--amber-deep) 16px)",
        }}
        aria-hidden="true"
      />
      <div className="p-3 flex flex-col gap-2">
        <div className="w-9 h-9 rounded-lg bg-olive-soft flex items-center justify-center">
          <Icon size={18} strokeWidth={1.5} className="text-olive" aria-hidden="true" />
        </div>
        <div>
          <p className="text-ink text-sm font-medium leading-tight">{name}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone mt-0.5">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}