import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-[28px] border border-emerald-100/70 bg-white/80 p-8 shadow-[0_24px_60px_-32px_rgba(55,102,80,0.55)] transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200/80 hover:shadow-[0_30px_60px_-30px_rgba(55,102,80,0.55)]">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100/70 text-emerald-600">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-emerald-900">{title}</h3>
      <p className="text-base text-emerald-900/70">{description}</p>
      <span className="absolute inset-x-6 bottom-6 h-1 rounded-full bg-gradient-to-r from-emerald-200/0 via-emerald-300/60 to-emerald-200/0 opacity-0 transition duration-300 group-hover:opacity-100" />
    </div>
  );
}
