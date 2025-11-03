export function DeviceMockup() {
  return (
    <div className="relative flex w-full justify-center">
      <div className="relative w-full max-w-xl rounded-[36px] bg-white/70 p-6 shadow-[0_25px_60px_-30px_rgba(55,102,80,0.45)] backdrop-blur">
        <div className="rounded-[28px] border border-emerald-100/70 bg-gradient-to-br from-white via-emerald-50/50 to-emerald-100/20 p-3">
          <div className="rounded-3xl border border-emerald-100/80 bg-white p-4 shadow-inner">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="h-2 w-16 rounded-full bg-emerald-200/80" />
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-200/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-200/60" />
                  <span className="h-2 w-2 rounded-full bg-emerald-200/40" />
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-2xl border border-emerald-50/70 bg-emerald-50/40 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-20px_rgba(55,102,80,0.6)]"
                  >
                    <span className="mb-3 h-2.5 w-10 rounded-full bg-emerald-200/80" />
                    <div className="flex-1 rounded-xl bg-gradient-to-br from-emerald-200/70 via-white to-emerald-50/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-12 -bottom-12 hidden h-48 w-40 rounded-[32px] border border-emerald-100/80 bg-white p-4 shadow-[0_25px_40px_-28px_rgba(55,102,80,0.55)] sm:block">
          <div className="flex h-full flex-col gap-4 rounded-[24px] border border-emerald-50/70 bg-gradient-to-br from-emerald-50/60 via-white to-emerald-100/40 p-3">
            <span className="h-2 w-20 rounded-full bg-emerald-200/80" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-2xl bg-emerald-100/80" />
                <div className="flex flex-1 flex-col gap-1">
                  <span className="h-2 w-14 rounded-full bg-emerald-200/80" />
                  <span className="h-1.5 w-10 rounded-full bg-emerald-200/50" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-2xl bg-emerald-100/80" />
                <div className="flex flex-1 flex-col gap-1">
                  <span className="h-2 w-12 rounded-full bg-emerald-200/80" />
                  <span className="h-1.5 w-9 rounded-full bg-emerald-200/50" />
                </div>
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-2">
              <span className="h-2 w-full rounded-full bg-emerald-200/80" />
              <span className="h-2 w-10 rounded-full bg-emerald-200/60 self-end" />
            </div>
          </div>
        </div>
        <span className="absolute -left-10 -top-10 hidden h-28 w-28 rounded-full bg-emerald-100/40 blur-xl sm:block" />
        <span className="absolute -right-16 top-12 hidden h-24 w-24 rounded-full bg-emerald-200/40 blur-3xl md:block" />
      </div>
    </div>
  );
}
