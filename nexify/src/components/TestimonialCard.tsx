type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-[32px] border border-emerald-100/70 bg-white/80 p-8 text-left shadow-[0_24px_60px_-35px_rgba(55,102,80,0.6)]">
      <blockquote className="text-lg text-emerald-900/80">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
        <div>
          <p className="font-semibold text-emerald-900">{name}</p>
          <p className="text-sm text-emerald-800/70">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
