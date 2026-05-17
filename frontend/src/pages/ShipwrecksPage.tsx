import { FaWhatsapp } from 'react-icons/fa6';
import { HiArrowDown } from 'react-icons/hi2';
import { shipwreckDetailsBySlug, shipwreckFeatureCards, getPadiUrlForShip } from '../data/shipwrecks';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

const difficultyBadge: Record<Difficulty, string> = {
    Beginner: 'bg-emerald-500 text-white',
    Intermediate: 'bg-amber-500 text-white',
    Advanced: 'bg-rose-500 text-white',
};

const shipwrecks = shipwreckFeatureCards
    .map((card) => {
        const details = shipwreckDetailsBySlug[card.slug];
        if (!details) return null;

        const difficulty: Difficulty =
            details.requiredLevel.includes('Advanced') ? 'Advanced' :
            details.requiredLevel.includes('Open Water') || details.requiredLevel.includes('DSD') ? 'Beginner' :
            'Intermediate';

        return { ...card, details, difficulty };
    })
    .filter((w): w is NonNullable<typeof w> => Boolean(w));

const planningTips = [
    {
        number: '01',
        title: 'Match your cert level',
        body: 'Coron has wrecks for every certification — from snorkel-depth gunboats to 43-metre advanced sites. Plan your day around what your card allows.',
    },
    {
        number: '02',
        title: 'Pair shallow with deep',
        body: 'Combine one deep wreck (Kyokuzan, Akitsushima) with a shallower site (Lusong, Morazan) for a full wreck day without pushing your limits.',
    },
    {
        number: '03',
        title: 'Go guided',
        body: 'Our local divemasters know exactly where the bulldozer sits in Kogyo\'s hold, where the crane landed on Akitsushima, and the best light angles on every wreck.',
    },
];

export default function ShipwrecksPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* ── Hero ── */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center md:px-10">
                {/* Ambient glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
                    <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-orange-500/8 blur-[100px]" />
                </div>

                <div className="relative max-w-4xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                        Coron Bay, Palawan &nbsp;·&nbsp; WWII
                    </p>

                    <h1 className="font-display mt-5 text-5xl font-black leading-[1.0] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                        Ten Legendary<br />
                        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                            Shipwrecks.
                        </span>
                        <br />
                        One Historic Bay.
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        On September&nbsp;24,&nbsp;1944, a U.S. air raid sank an entire Japanese fleet in Coron Bay.
                        Today, those vessels rest on the seafloor — extraordinary dive sites frozen in wartime history.
                    </p>

                    {/* Stats row */}
                    <div className="mx-auto mt-10 flex flex-wrap justify-center gap-px overflow-hidden rounded-2xl border border-white/10">
                        {[
                            { label: 'Wrecks', value: '10' },
                            { label: 'Depth range', value: '10 – 43 m' },
                            { label: 'Cert levels', value: 'All levels' },
                            { label: 'Best season', value: 'Nov – May' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-1 min-w-[120px] flex-col items-center bg-white/5 px-5 py-4 backdrop-blur-sm">
                                <p className="text-xl font-black tracking-[-0.02em] text-white sm:text-2xl">{stat.value}</p>
                                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-9 flex flex-wrap justify-center gap-3">
                        <a
                            href="https://wa.me/639760268714?text=Hi%2C%20I'd%20like%20to%20book%20a%20wreck%20dive%20in%20Coron!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400"
                        >
                            <FaWhatsapp className="h-4 w-4" />
                            Book a Wreck Dive
                        </a>
                        <button
                            type="button"
                            onClick={() => document.getElementById('wreck-directory')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white/10"
                        >
                            Browse Wrecks
                            <HiArrowDown className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>

                {/* Scroll cue */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                    <div className="h-8 w-px bg-gradient-to-b from-transparent to-cyan-400" />
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-400">Scroll</p>
                </div>
            </section>

            {/* ── Historical context band ── */}
            <section className="border-y border-white/8 bg-[#030d1a] px-6 py-14 md:px-10">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-14">
                        <div className="shrink-0 text-center md:text-left">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-500">The Date</p>
                            <p className="font-display mt-1 text-4xl font-black leading-none tracking-[-0.03em] text-white sm:text-5xl">Sept</p>
                            <p className="font-display text-7xl font-black leading-none tracking-[-0.04em] text-cyan-400 sm:text-8xl">24</p>
                            <p className="font-display text-4xl font-black leading-none tracking-[-0.03em] text-white sm:text-5xl">1944</p>
                        </div>
                        <div className="space-y-4 pt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                            <p>
                                Operation Musketeer II — a U.S. Navy carrier-based air raid — struck Coron Bay on the morning of September 24, 1944. Within hours, more than a dozen Japanese vessels were sent to the bottom of the bay, the bulk of them supply and support ships that had been using Coron as a staging point.
                            </p>
                            <p>
                                The wrecks that remain today are a remarkable time capsule: cargo holds still packed with construction materials, engine rooms intact, anti-aircraft guns frozen mid-deployment. Marine life has since transformed each hull into an artificial reef — soft corals, schools of batfish, barracuda, and sea turtles now call these steel skeletons home.
                            </p>
                            <p className="text-slate-400">
                                Safety Stop Diveshop offers guided dives to all major wrecks in Coron Bay, tailored to your certification level.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Wreck Directory ── */}
            <section id="wreck-directory" className="px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-500">Wreck Directory</p>
                        <h2 className="font-display mt-2 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                            The Fleet
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                            Each wreck has its own depth profile, history, and personality. Filter by difficulty before you dive.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {shipwrecks.map((wreck, index) => {
                            const isFeatured = index === 0;
                            const padiUrl = wreck.details.padiUrl ? getPadiUrlForShip(wreck.slug, wreck.details) : null;

                            return (
                                <article
                                    key={wreck.slug}
                                    className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)] ${isFeatured ? 'md:col-span-2 xl:col-span-1' : ''}`}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden bg-slate-800">
                                        {wreck.src ? (
                                            <img
                                                src={wreck.src}
                                                alt={wreck.alt}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                                <p className="text-xs text-slate-500">Image coming soon</p>
                                            </div>
                                        )}

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                                        {/* Difficulty badge */}
                                        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${difficultyBadge[wreck.difficulty]}`}>
                                            {wreck.difficulty}
                                        </span>

                                        {/* Depth overlay */}
                                        <div className="absolute bottom-3 left-3">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-300/80">Max Depth</p>
                                            <p className="text-lg font-black leading-none text-white">{wreck.details.maxDepth}</p>
                                        </div>

                                        {/* Length overlay */}
                                        <div className="absolute bottom-3 right-3 text-right">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-300/70">Length</p>
                                            <p className="text-sm font-bold leading-none text-slate-100">{wreck.details.length}</p>
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-500 line-clamp-1">
                                            {wreck.details.vesselType}
                                        </p>
                                        <h3 className="font-display mt-1 text-xl font-black tracking-[-0.02em] text-white">
                                            {wreck.details.name}
                                        </h3>

                                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                                            {wreck.details.description[0]}
                                        </p>

                                        {/* Spec pills */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-[10px] font-semibold text-slate-300">
                                                {wreck.details.requiredLevel}
                                            </span>
                                            {wreck.details.sunk && (
                                                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold text-orange-300">
                                                    {wreck.details.sunk.replace('September 24, 1944', 'Sept 24, 1944')}
                                                </span>
                                            )}
                                        </div>

                                        {/* Historical detail (remaining paragraphs) */}
                                        {wreck.details.description.length > 1 && (
                                            <div className="mt-4 border-t border-white/6 pt-4">
                                                <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
                                                    {wreck.details.description.slice(1).join(' ')}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Card footer */}
                                    <div className="flex items-center justify-between border-t border-white/6 px-5 py-3">
                                        <a
                                            href={`https://wa.me/639760268714?text=Hi%2C%20I'd%20like%20to%20dive%20the%20${encodeURIComponent(wreck.details.name)}!`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-green-400 transition hover:bg-green-500/25"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaWhatsapp className="h-3 w-3" />
                                            Book this dive
                                        </a>
                                        {padiUrl && (
                                            <a
                                                href={padiUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 transition hover:text-cyan-400"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                PADI Site →
                                            </a>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Dive Planning ── */}
            <section className="border-t border-white/8 bg-[#030d1a] px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-500">Before You Dive</p>
                            <h2 className="font-display mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                                Dive Planning Tips
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                                Coron's wrecks span a wide range of depths and conditions. A little planning makes the difference between a good day and an unforgettable one.
                            </p>
                            <a
                                href="https://wa.me/639760268714?text=Hi%2C%20I%20need%20help%20planning%20my%20wreck%20dives%20in%20Coron!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                                Ask Us to Plan Your Trip
                            </a>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-1">
                            {planningTips.map((tip) => (
                                <div key={tip.number} className="flex gap-5 rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm">
                                    <p className="font-display flex-shrink-0 text-3xl font-black leading-none tracking-[-0.04em] text-cyan-500/40">
                                        {tip.number}
                                    </p>
                                    <div>
                                        <p className="font-semibold text-white">{tip.title}</p>
                                        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{tip.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="border-t border-white/8 bg-slate-950 px-6 py-20 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-900 p-10 md:p-14">
                        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">Ready to Dive?</p>
                                <h2 className="font-display mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                                    Make your Coron wreck trip easy to plan
                                </h2>
                                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                                    Safety Stop Diveshop can match you with the best wrecks for your certification, guide you through the highlights, and handle everything from equipment to lunch on the boat.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                                <a
                                    href="https://wa.me/639760268714?text=Hi%2C%20I'd%20like%20to%20book%20a%20wreck%20dive%20in%20Coron!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/25 transition hover:bg-green-400"
                                >
                                    <FaWhatsapp className="h-4 w-4" />
                                    Book via WhatsApp
                                </a>
                                <a
                                    href="tel:+639760268714"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                                >
                                    Call +63 976 026 8714
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
