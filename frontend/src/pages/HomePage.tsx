import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { SiTripadvisor } from 'react-icons/si';
import { HiClock, HiArrowRight, HiStar } from 'react-icons/hi2';
import { FaEnvelope } from 'react-icons/fa';
import heroBackground from '../assets/hero-bg.gif';
import padiLogo from '../assets/padi.webp';
import sdiLogo from '../assets/sdi.png';
import dotBadge from '../assets/dot.png';
import tripadvisorLogo from '../assets/tripadvisor.png';
import { shipwreckDetailsBySlug, shipwreckDisplayOrder, shipwreckFeatureCards } from '../data/shipwrecks';

const diveCourses = [
    { id: '1', title: 'Open Water', duration: '2–3 Days', details: '4 Dives', slug: 'open-water' },
    { id: '2', title: 'Advanced Open Water', duration: '2 Days', details: '5 Dives', slug: 'advanced-open-water' },
    { id: '3', title: 'Fun Dives', duration: '1 Day', details: 'For Licensed Divers', slug: 'fun-dives' },
    { id: '4', title: 'Scuba Discovery', duration: '1 Day', details: 'For Beginners', slug: 'scuba-discovery' },
];

const tripadvisorReviewLinksByCardNumber: Record<number, string> = {
    1: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r945823183-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    2: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r944470314-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    3: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r943585842-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    4: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r939126321-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    5: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r938777677-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    6: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r938486427-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    7: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r927458156-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
    8: 'https://www.tripadvisor.com.ph/ShowUserReviews-g729733-d13456838-r956791126-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
};

const tripadvisorTestimonialCards = Object.entries(
    import.meta.glob('../assets/testimonials/*.{png,jpg,jpeg,webp}', { eager: true }),
)
    .filter(([filePath]) => !filePath.includes('tripadvisor.png'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([filePath, module], index) => {
        const filename = filePath.split('/').pop() ?? `testimonial-${index + 1}`;
        const cardNumberMatch = filename.match(/testimonial(\d+)/i);
        const cardNumber = cardNumberMatch ? Number(cardNumberMatch[1]) : index + 1;
        return {
            src: (module as { default: string }).default,
            alt: `TripAdvisor review ${index + 1}`,
            reviewUrl:
                tripadvisorReviewLinksByCardNumber[cardNumber]
                ?? 'https://www.tripadvisor.com.ph/Attraction_Review-g729733-d13456838-Reviews-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
        };
    });

const shipwreckNames = shipwreckDisplayOrder
    .map((slug) => shipwreckDetailsBySlug[slug]?.name)
    .filter((n): n is string => Boolean(n));

const featuredWrecks = shipwreckFeatureCards.slice(0, 3).map((card) => ({
    ...card,
    details: shipwreckDetailsBySlug[card.slug],
})).filter((w) => Boolean(w.details));

const socialLinks = [
    {
        label: 'TripAdvisor',
        href: 'https://www.tripadvisor.com.ph/Attraction_Review-g729733-d13456838-Reviews-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
        icon: SiTripadvisor,
        color: 'text-[#34E0A1]',
        bg: 'hover:bg-[#34E0A1]/10',
        sub: 'See Reviews',
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100057245747788',
        icon: FaFacebookF,
        color: 'text-[#1877F2]',
        bg: 'hover:bg-blue-50',
        sub: 'SafetyStopDiveshop',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/safetystopdiveshop_/',
        icon: FaInstagram,
        color: 'text-pink-500',
        bg: 'hover:bg-pink-50',
        sub: '@safetystopdiveshop_',
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/639760268714',
        icon: FaWhatsapp,
        color: 'text-green-500',
        bg: 'hover:bg-green-50',
        sub: 'Chat with us',
    },
    {
        label: 'Email',
        href: 'mailto:safetystopdiveshop@gmail.com',
        icon: FaEnvelope,
        color: 'text-red-500',
        bg: 'hover:bg-red-50',
        sub: 'Send a message',
    },
];

const usps = [
    {
        label: 'Locally Owned',
        desc: 'The first dive shop in Coron owned by a dedicated local — we know these waters better than anyone.',
    },
    {
        label: 'All Experience Levels',
        desc: 'From complete beginners to certified divers — we have courses, fun dives, and expeditions for everyone.',
    },
    {
        label: 'Safety First',
        desc: 'PADI & SDI certified instructors with DOT accreditation. Your safety is never an afterthought.',
    },
];

function TestimonialCard({ item }: { item: { src: string; alt: string; reviewUrl: string } }) {
    const [hovering, setHovering] = useState(false);
    return (
        <a
            href={item.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open review on TripAdvisor"
            className="group relative block overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(2,12,27,0.08)] transition duration-300"
            style={{ transform: hovering ? 'translateY(-6px) scale(1.025)' : 'none', zIndex: hovering ? 10 : 1 }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <span className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Click to see review
            </span>
            <img src={item.src} alt={item.alt} className="h-full w-full object-contain" loading="lazy" decoding="async" />
            <div className="absolute bottom-3 right-3">
                <img src={tripadvisorLogo} alt="TripAdvisor" className="h-12 w-12 object-contain drop-shadow" />
            </div>
        </a>
    );
}

export default function HomePage() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('home');

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'dive-courses', label: 'Courses' },
        { id: 'shipwrecks', label: 'Shipwrecks' },
        { id: 'reviews', label: 'Reviews' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY + 120;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && offset >= el.offsetTop) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="home" className="bg-white text-slate-900">

            {/* Section dots — desktop only */}
            <div className="hidden lg:fixed lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:z-40 lg:flex lg:flex-col lg:gap-5">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                        title={s.label}
                        aria-label={`Go to ${s.label}`}
                        className={`group relative rounded-full transition-all duration-300 ${activeSection === s.id ? 'h-3 w-8 bg-cyan-500 shadow-lg shadow-cyan-500/40' : 'h-3 w-3 bg-slate-300 hover:bg-slate-400'}`}
                    >
                        <span className="absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-md group-hover:block">
                            {s.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* ── Hero ── */}
            <section className="relative overflow-hidden">
                <img
                    src={heroBackground}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-center"
                    style={{ filter: 'brightness(0.95) contrast(1.06) saturate(1.05)' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(2,6,23,0.70)_0%,rgba(5,20,50,0.52)_55%,rgba(10,30,60,0.62)_100%)]" />

                <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center md:px-10 md:pt-40 lg:min-h-screen">

                    {/* Eyebrow */}
                    <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                            PADI &amp; SDI Certified
                        </span>
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                            DOT Accredited
                        </span>
                        <span className="rounded-full border border-orange-400/40 bg-orange-400/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300 backdrop-blur-sm">
                            Coron, Palawan
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-display max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                        Learn to Scuba Dive &amp;<br />
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-orange-400 bg-clip-text text-transparent"
                            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Discover Coron, Palawan
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
                        Dive the legendary WWII shipwrecks, pristine coral reefs, and crystal lakes — with the first locally-owned dive shop in Coron.
                    </p>

                    {/* CTAs */}
                    <div className="mt-9 flex flex-wrap justify-center gap-3">
                        <a
                            href="https://wa.me/639760268714?text=Hi%2C%20I'd%20like%20to%20book%20a%20dive%20in%20Coron!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-xl shadow-green-500/30 transition hover:bg-green-400"
                        >
                            <FaWhatsapp className="h-4 w-4" />
                            Book via WhatsApp
                        </a>
                        <button
                            type="button"
                            onClick={() => document.getElementById('dive-courses')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            Explore Courses
                        </button>
                    </div>

                    {/* Trust logos */}
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-6 opacity-75">
                        {[
                            { src: padiLogo, alt: 'PADI', label: 'PADI Certified' },
                            { src: sdiLogo, alt: 'SDI', label: 'SDI Certified' },
                            { src: dotBadge, alt: 'DOT', label: 'DOT Accredited' },
                        ].map((badge) => (
                            <div key={badge.alt} className="flex items-center gap-2">
                                <img src={badge.src} alt={badge.alt} className="h-8 w-8 object-contain" loading="lazy" />
                                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/80">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Social / Contact Strip ── */}
            <section className="relative z-20 bg-white px-6 md:px-10">
                <div className="mx-auto max-w-5xl -mt-10 mb-16">
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_40px_rgba(2,12,27,0.10)]">
                        <div className="border-b border-slate-100 px-6 py-3 text-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Get In Touch — We're Ready to Plan Your Trip</p>
                        </div>
                        <div className="flex flex-wrap items-stretch divide-x divide-slate-100">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                        className={`group flex flex-1 min-w-[100px] flex-col items-center gap-1.5 px-4 py-4 text-center transition ${link.bg}`}
                                    >
                                        <Icon className={`h-5 w-5 ${link.color}`} />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">{link.label}</span>
                                        <span className="text-[10px] font-medium leading-tight text-slate-400 break-all">{link.sub}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Safety Stop ── */}
            <section className="border-y border-slate-100 bg-slate-50 py-14 md:py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid gap-6 sm:grid-cols-3">
                        {usps.map((usp, i) => (
                            <div key={i} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-black text-cyan-600">
                                    {i + 1}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{usp.label}</p>
                                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{usp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Dive Courses ── */}
            <section id="dive-courses" className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-600">PADI &amp; SDI Certified</p>
                            <h2 className="font-display mt-1 text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl">
                                Dive Courses
                            </h2>
                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                                Tailored for beginners and experienced divers alike — from your first breath underwater to advanced certifications.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => navigate('/courses')}
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
                        >
                            All Courses <HiArrowRight className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {diveCourses.map((course) => (
                            <div
                                key={course.id}
                                onClick={() => navigate(`/courses/${course.slug}`)}
                                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(2,12,27,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_12px_36px_rgba(14,165,233,0.14)]"
                            >
                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.02em] text-slate-900 transition-colors group-hover:text-cyan-700">
                                        {course.title}
                                    </h3>
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                                            <HiClock className="h-3 w-3" />
                                            {course.duration}
                                        </span>
                                        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-700">
                                            {course.details}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-600">View details</span>
                                    <HiArrowRight className="h-3.5 w-3.5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Shipwrecks Teaser ── */}
            <section id="shipwrecks" className="border-y border-cyan-100 bg-[#f0fbff] py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-10 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-600">WWII · Coron Bay</p>
                        <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl">
                            Explore Shipwrecks
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                            Coron is home to some of the world's most iconic WWII dive sites — cargo holds, engine rooms, and reef-covered decks frozen in 1944.
                        </p>
                    </div>

                    {/* Featured wreck image cards */}
                    {featuredWrecks.length > 0 && (
                        <div className="mb-8 grid gap-4 sm:grid-cols-3">
                            {featuredWrecks.map((wreck) => (
                                <div
                                    key={wreck.slug}
                                    onClick={() => navigate('/shipwrecks')}
                                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-cyan-200/50 shadow-[0_8px_30px_rgba(14,165,233,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(14,165,233,0.18)]"
                                >
                                    <div className="aspect-video overflow-hidden bg-slate-200">
                                        <img
                                            src={wreck.src}
                                            alt={wreck.alt}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-300">{wreck.details?.vesselType.split(' ').slice(0, 3).join(' ')}</p>
                                        <p className="font-display mt-0.5 text-base font-bold text-white">{wreck.details?.name}</p>
                                        <p className="text-[10px] text-slate-300">Max depth: {wreck.details?.maxDepth}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Marquee */}
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-cyan-300/40 bg-[#012b56] py-3 shadow-[0_10px_30px_rgba(2,28,65,0.18)]">
                        <div className="whitespace-nowrap">
                            <div className="inline-block min-w-full animate-[shipwreck-marquee_34s_linear_infinite]">
                                {[...shipwreckNames, ...shipwreckNames].map((name, i) => (
                                    <span key={`${name}-${i}`} className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400 sm:text-xs">
                                        <span className="mx-3 text-orange-500">•</span>
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="button"
                            onClick={() => navigate('/shipwrecks')}
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50"
                        >
                            See All Shipwrecks <HiArrowRight className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
                <style>{`@keyframes shipwreck-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
            </section>

            {/* ── Reviews ── */}
            <section id="reviews" className="bg-slate-50 py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-14 text-center">
                        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#34E0A1]/40 bg-[#34E0A1]/10 px-4 py-1.5">
                            {[...Array(5)].map((_, i) => (
                                <HiStar key={i} className="h-4 w-4 text-[#34E0A1]" />
                            ))}
                            <span className="ml-1 text-xs font-bold text-emerald-700">5.0 on TripAdvisor</span>
                        </div>
                        <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
                            What Our Guests Say
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
                            Hundreds of divers have trusted us with their Coron adventure. Here's what some of them shared.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
                        {tripadvisorTestimonialCards.map((item, i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <a
                            href="https://www.tripadvisor.com.ph/Attraction_Review-g729733-d13456838-Reviews-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow"
                        >
                            <img src={tripadvisorLogo} alt="TripAdvisor" className="h-4 w-4 object-contain" />
                            Read All Reviews on TripAdvisor
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Contact CTA ── */}
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl border border-cyan-200/60 bg-gradient-to-br from-white to-cyan-50/60 p-7 shadow-[0_24px_80px_rgba(14,165,233,0.10)] sm:p-10 md:grid-cols-[1.15fr_1fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">Get In Touch</p>
                            <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.02em] text-slate-900 sm:text-4xl">
                                Plan Your Coron Dive Trip With Us
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                                Need help choosing a course or checking availability? Reach out — our team will guide you through the best options for your adventure.
                            </p>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/639760268714?text=Hi%2C%20I'd%20like%20to%20plan%20a%20dive%20trip%20in%20Coron!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/25 transition hover:bg-green-400"
                                >
                                    <FaWhatsapp className="h-3.5 w-3.5" />
                                    WhatsApp Us
                                </a>
                                <a
                                    href="tel:+639760268714"
                                    className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-50"
                                >
                                    Call Now
                                </a>
                                <button
                                    type="button"
                                    onClick={() => navigate('/courses')}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-300"
                                >
                                    Browse Courses
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:col-span-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-700">Address</p>
                                <p className="mt-1.5 text-sm text-slate-800">Brgy. 5 National Road, Coron, Palawan</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-700">Phone</p>
                                <p className="mt-1.5 text-sm text-slate-800">+63 976 026 8714</p>
                                <p className="text-sm text-slate-800">+63 936 945 7260</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-700">Email</p>
                                <p className="mt-1.5 text-sm text-slate-800 break-all">safetystopdiveshop@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
