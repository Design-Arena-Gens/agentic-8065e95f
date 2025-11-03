import { DeviceMockup } from "@/components/DeviceMockup";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function Home() {
  const features = [
    {
      title: "Unified Workflows",
      description:
        "Orchestrate workforce scheduling, client commitments, and daily reporting from one intuitive hub.",
      icon: (
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7h14M5 12h14M5 17h8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
    {
      title: "Field-to-Office Sync",
      description:
        "Bridge on-ground activity with HQ in real time using smart automation and context-aware alerts.",
      icon: (
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.364 5.636a9 9 0 1 0 0 12.728"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M9 12l6 6 6-6-6-6-6 6Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
    {
      title: "People-Centric Insights",
      description:
        "Highlight team strengths, track wellbeing, and drive decisions that respect the human behind the role.",
      icon: (
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6 9v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "NEXIFY re-introduced clarity into our distributed teams. The platform feels handcrafted to our workflows.",
      name: "Ananya Prasad",
      role: "Director of Operations, Skyline Services",
    },
    {
      quote:
        "Our clients finally see what our teams deliver in real-time. The transparency is effortless and human.",
      name: "Marcus Chen",
      role: "Client Success Lead, UrbanGrid",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-white via-emerald-50/40 to-transparent" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-200/70 text-lg font-semibold text-emerald-800 shadow-[0_16px_30px_-18px_rgba(55,102,80,0.8)]">
            NE
          </span>
          <div>
            <p className="font-semibold text-emerald-900">NEXIFY</p>
            <p className="text-xs uppercase tracking-[0.26em] text-emerald-800/60">
              By IT SOUQ LLP
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-emerald-900/70 md:flex">
          <a className="transition hover:text-emerald-900" href="#about">
            About
          </a>
          <a className="transition hover:text-emerald-900" href="#features">
            Features
          </a>
          <a className="transition hover:text-emerald-900" href="#journey">
            Journey
          </a>
          <a className="transition hover:text-emerald-900" href="#stories">
            Stories
          </a>
        </nav>
        <a
          className="rounded-full border border-emerald-200/80 bg-white px-5 py-2.5 text-sm font-medium text-emerald-800 shadow-[0_12px_24px_-18px_rgba(55,102,80,0.75)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_30px_-24px_rgba(55,102,80,0.75)]"
          href="#start"
        >
          Get Started
        </a>
      </header>

      <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 md:px-10">
        <section className="grid items-center gap-16 rounded-[40px] bg-white/80 p-8 shadow-[0_30px_90px_-45px_rgba(55,102,80,0.6)] md:grid-cols-[1.1fr_1fr] md:p-12">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">
              Humanized Control
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold text-emerald-950 sm:text-5xl lg:text-6xl">
                NEXIFY: Crafting harmony between teams and clients.
              </h1>
              <p className="text-lg text-emerald-900/75 lg:text-xl">
                Simplify management. Empower your workforce. Transform scattered
                operations into one handcrafted rhythm built to align field and
                office.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a
                className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_25px_40px_-20px_rgba(55,102,80,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/90"
                href="#start"
              >
                Get Started
              </a>
              <a
                className="text-sm font-semibold text-emerald-800/80 transition hover:text-emerald-900"
                href="#features"
              >
                Explore capabilities
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-emerald-900/60">
              <div className="flex items-center gap-3 rounded-2xl bg-emerald-50/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p>Live updates from any field device</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-emerald-50/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p>Built for distributed teams & agencies</p>
              </div>
            </div>
          </div>
          <DeviceMockup />
        </section>

        <section
          className="relative grid gap-10 rounded-[40px] bg-gradient-to-br from-white/90 via-emerald-50/60 to-white/90 p-10 shadow-[0_26px_80px_-50px_rgba(55,102,80,0.7)] md:grid-cols-[1fr_1.4fr]"
          id="about"
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-800/60">
              About NEXIFY
            </p>
            <h2 className="text-3xl text-emerald-950 md:text-4xl">
              The smart workforce and client management platform by IT SOUQ LLP.
            </h2>
            <p className="text-lg text-emerald-900/75">
              NEXIFY was born in the field, engineered with operations teams who
              needed a calmer, more human companion for daily orchestration. It
              keeps leaders grounded in the pulse of work, guiding teams with a
              clear, confident narrative.
            </p>
            <p className="text-lg text-emerald-900/75">
              Developed by IT SOUQ LLP, NEXIFY bridges the gap between field and
              office. Every workflow, handoff, and client milestone lives
              together, creating trust between people and the platforms they
              rely on.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[28px] border border-emerald-100/80 bg-white/80 p-6 shadow-[0_26px_60px_-52px_rgba(55,102,80,0.7)]">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700/80">
                01
              </p>
              <h3 className="mt-4 text-xl text-emerald-950">
                Crafted with people
              </h3>
              <p className="mt-3 text-sm text-emerald-900/70">
                Everyday rituals shaped the experience — from morning standups
                to client recaps. NEXIFY keeps focus on the human flow.
              </p>
            </div>
            <div className="rounded-[28px] border border-emerald-100/80 bg-white/80 p-6 shadow-[0_26px_60px_-52px_rgba(55,102,80,0.7)]">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700/80">
                02
              </p>
              <h3 className="mt-4 text-xl text-emerald-950">
                Purpose-led clarity
              </h3>
              <p className="mt-3 text-sm text-emerald-900/70">
                Keep stakeholders informed with organic, living dashboards that
                explain progress without overwhelming detail.
              </p>
            </div>
            <div className="rounded-[28px] border border-emerald-100/80 bg-white/80 p-6 shadow-[0_26px_60px_-52px_rgba(55,102,80,0.7)]">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700/80">
                03
              </p>
              <h3 className="mt-4 text-xl text-emerald-950">
                Seamless client loops
              </h3>
              <p className="mt-3 text-sm text-emerald-900/70">
                Share curated insights, approvals, and deliverables with
                confidence — every client feels included in the journey.
              </p>
            </div>
            <div className="rounded-[28px] border border-emerald-100/80 bg-white/80 p-6 shadow-[0_26px_60px_-52px_rgba(55,102,80,0.7)]">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700/80">
                04
              </p>
              <h3 className="mt-4 text-xl text-emerald-950">Scales with ease</h3>
              <p className="mt-3 text-sm text-emerald-900/70">
                From boutique teams to multi-city operations, the platform flexes
                without losing warmth or precision.
              </p>
            </div>
          </div>
          <span className="absolute -top-12 right-12 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl" />
          <span className="absolute -bottom-20 left-16 h-32 w-32 rounded-full bg-emerald-100/40 blur-3xl" />
        </section>

        <section className="space-y-12" id="features">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-800/60">
              Capabilities
            </p>
            <h2 className="text-3xl text-emerald-950 md:text-4xl">
              Everything you need to orchestrate empowered teams.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-emerald-900/70">
              NEXIFY delivers a practical balance of structure and intuition,
              enabling teams to thrive while clients stay informed at every
              touchpoint.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section
          className="rounded-[40px] bg-white/85 p-10 shadow-[0_26px_90px_-52px_rgba(55,102,80,0.6)]"
          id="journey"
        >
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-800/60">
                The Nexify Journey
              </p>
              <h2 className="mt-3 text-3xl text-emerald-950">
                A clear path from onboarding to daily momentum.
              </h2>
              <p className="mt-4 text-base text-emerald-900/70">
                Each step is guided with hyper-care so your teams migrate with
                confidence and adopt workflows that feel immediately natural.
              </p>
            </div>
            <div className="flex-1 space-y-6">
              {[
                {
                  title: "Onboard with purpose",
                  description:
                    "Co-create your workspace map with our specialists. We tailor pipelines, reporting cadences, and permissions to match your story.",
                },
                {
                  title: "Empower every role",
                  description:
                    "Team members receive context-aware dashboards while managers see orchestration tools that encourage autonomy and trust.",
                },
                {
                  title: "Amplify client confidence",
                  description:
                    "Deliver real-time client rooms and curated updates that celebrate outcomes without exposing unnecessary noise.",
                },
                {
                  title: "Evolve with insights",
                  description:
                    "Harness trend analysis, wellbeing signals, and capacity mapping to keep momentum healthy as you grow.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-[30px] border border-emerald-100/80 bg-emerald-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-emerald-50/90"
                >
                  <span className="absolute right-6 top-6 text-sm font-semibold text-emerald-800/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl text-emerald-950">{step.title}</h3>
                  <p className="mt-3 text-sm text-emerald-900/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-12" id="stories">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-800/60">
              Stories
            </p>
            <h2 className="text-3xl text-emerald-950 md:text-4xl">
              Trusted by teams who lead with heart and precision.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-emerald-900/70">
              Leaders choose NEXIFY for its warmth, clarity, and ability to keep
              operations transparent without sacrificing pace.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section
          className="rounded-[36px] bg-gradient-to-br from-emerald-500/85 via-emerald-400/70 to-emerald-500/90 p-[1px]"
          id="start"
        >
          <div className="rounded-[36px] bg-white/95 p-10 text-center shadow-[0_30px_60px_-35px_rgba(55,102,80,0.7)]">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-500/80">
              Ready to begin
            </span>
            <h2 className="mt-4 text-3xl text-emerald-950 md:text-4xl">
              Start shaping the way your workforce collaborates today.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-900/70">
              Partner with IT SOUQ LLP to tailor NEXIFY to your people. Launch
              in weeks, not months, with a team that listens and evolves with
              you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_25px_40px_-20px_rgba(55,102,80,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/90"
                href="mailto:hello@itsouqllp.com"
              >
                Connect with IT SOUQ LLP
              </a>
              <a
                className="rounded-full border border-emerald-200/90 bg-white px-8 py-3 text-sm font-semibold text-emerald-800 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-24px_rgba(55,102,80,0.7)]"
                href="#features"
              >
                Review feature suite
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-10 pt-6 text-sm text-emerald-900/60 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} IT SOUQ LLP. Crafted for modern teams.</p>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-emerald-900" href="#about">
            Platform Story
          </a>
          <a className="transition hover:text-emerald-900" href="#journey">
            Implementation
          </a>
          <a className="transition hover:text-emerald-900" href="mailto:hello@itsouqllp.com">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
