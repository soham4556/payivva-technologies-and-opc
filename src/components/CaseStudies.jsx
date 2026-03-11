import { useEffect, useRef } from "react";
import {
  TrendingUp,
  Users,
  Globe,
  ShoppingCart,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const caseStudies = [
  {
    category: "E-Commerce",
    icon: ShoppingCart,
    client: "FashionBrand India",
    title: "340% Revenue Growth in 6 Months",
    description:
      "A leading fashion e-commerce brand struggled with poor ROAS on paid ads and low organic traffic. We revamped their full digital strategy — from technical SEO to precision Meta & Google Ads.",
    results: [
      { metric: "340%", label: "Revenue Increase" },
      { metric: "5.2x", label: "ROAS Achieved" },
      { metric: "185%", label: "Organic Traffic" },
    ],
    services: ["SEO", "Google Ads", "Social Media"],
    duration: "6 months",
  },
  {
    category: "Real Estate",
    icon: Globe,
    client: "PropTech Ventures",
    title: "800+ Qualified Leads Per Month",
    description:
      "A real estate developer needed a scalable lead generation system to fill their sales pipeline consistently. We built targeted Facebook & Google Ads funnels combined with a high-converting landing page.",
    results: [
      { metric: "800+", label: "Monthly Leads" },
      { metric: "62%", label: "Cost Reduction" },
      { metric: "4.8x", label: "Lead Volume" },
    ],
    services: ["Lead Generation", "Facebook Ads", "Landing Page"],
    duration: "3 months",
  },
  {
    category: "SaaS",
    icon: TrendingUp,
    client: "TechSaaS Platform",
    title: "1200% Instagram Growth in 90 Days",
    description:
      "A B2B SaaS startup wanted to build brand authority and community on social media. We created a content strategy, managed daily engagement, and deployed influencer collaborations.",
    results: [
      { metric: "1200%", label: "Follower Growth" },
      { metric: "18k+", label: "Avg. Monthly Reach" },
      { metric: "300%", label: "Engagement Rate" },
    ],
    services: ["Social Media", "Brand Promotion", "Content"],
    duration: "90 days",
  },
  {
    category: "Healthcare",
    icon: Users,
    client: "MedClinic Network",
    title: "#1 Google Ranking for 50+ Keywords",
    description:
      "A healthcare provider chain needed to dominate local search to drive appointment bookings. We deployed a comprehensive local SEO and Google Business optimization strategy.",
    results: [
      { metric: "#1", label: "Google Rankings" },
      { metric: "50+", label: "Keywords Ranked" },
      { metric: "220%", label: "Booking Increase" },
    ],
    services: ["SEO", "Local SEO", "Google Ads"],
    duration: "4 months",
  },
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.08 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

export default function CaseStudies() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] section-padding"
      aria-labelledby="case-studies-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">
            Case Studies
          </span>
          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
          >
            Results That
            <span className="gold-text"> Speak for Themselves</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base lg:text-lg">
            Real projects. Real numbers. See how we've helped businesses like
            yours achieve extraordinary digital growth.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <article
                key={i}
                className="glass-card rounded-2xl p-7 lg:p-8 reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
                aria-label={`Case study: ${cs.title}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="text-[#D4AF37]"
                        size={20}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
                        {cs.category}
                      </span>
                      <p className="text-white/50 text-xs">{cs.client}</p>
                    </div>
                  </div>
                  <span className="text-white/30 text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {cs.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  {cs.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {cs.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {cs.results.map((r, j) => (
                    <div
                      key={j}
                      className="text-center p-3 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15"
                    >
                      <p className="text-[#D4AF37] font-black text-xl lg:text-2xl">
                        {r.metric}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5 leading-tight">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Services used */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cs.services.map((s, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-1.5 text-[#D4AF37]/70 hover:text-[#D4AF37] text-sm font-medium transition-colors duration-300 group/link"
                  aria-label={`Get similar results for your business - contact us`}
                >
                  Get Similar Results
                  <ArrowRight
                    size={15}
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-white/40 mb-5 text-sm">
            Want to be our next success story?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            Let's Build Your Story
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
}
