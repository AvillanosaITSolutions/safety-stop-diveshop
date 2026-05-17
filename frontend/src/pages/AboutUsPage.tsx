import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';
import { HiCheckCircle } from 'react-icons/hi2';
import padiLogo from '../assets/padi.webp';
import sdiLogo from '../assets/sdi.png';
import dotBadge from '../assets/dot.png';

const certifications = [
    {
        logo: dotBadge,
        alt: 'DOT Accreditation',
        label: 'DOT Accredited',
        note: 'Department of Tourism',
    },
    {
        logo: padiLogo,
        alt: 'PADI Logo',
        label: 'PADI Certified',
        note: 'Professional Association of Diving Instructors',
    },
    {
        logo: sdiLogo,
        alt: 'SDI Logo',
        label: 'SDI Certified',
        note: 'Scuba Diving International',
    },
];

const highlights = [
    'First locally-owned dive shop in Coron, Palawan',
    'Expert local knowledge of Coron Bay and its dive sites',
    'Friendly, certified instructors and divemasters',
    'Courses for all levels — from first-timers to dive pros',
    'WWII wreck dives, reef dives, lake dives, and more',
    'Small-group focus for a personalised experience',
];

const contactItems = [
    {
        icon: FaMapMarkerAlt,
        label: 'Address',
        value: 'Brgy. 5 National Road, Coron, Palawan, Philippines',
        href: 'https://maps.google.com/?q=Safety+Stop+Diveshop+Coron+Palawan',
    },
    {
        icon: FaPhone,
        label: 'Phone / WhatsApp',
        value: '+63 976 026 8714',
        href: 'tel:+639760268714',
    },
    {
        icon: FaPhone,
        label: 'Phone / WhatsApp',
        value: '+63 936 945 7260',
        href: 'tel:+639369457260',
    },
    {
        icon: FaEnvelope,
        label: 'Email',
        value: 'safetystopdiveshop@gmail.com',
        href: 'mailto:safetystopdiveshop@gmail.com',
    },
];

const socialLinks = [
    {
        icon: FaWhatsapp,
        label: 'WhatsApp',
        href: 'https://wa.me/639760268714?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Safety%20Stop%20Diveshop!',
        className: 'bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/25',
    },
    {
        icon: FaFacebookF,
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100057245747788',
        className: 'bg-[#1877F2] hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25',
    },
    {
        icon: FaInstagram,
        label: 'Instagram',
        href: 'https://www.instagram.com/safetystopdiveshop_/',
        className: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 text-white shadow-lg shadow-pink-500/25',
    },
    {
        icon: SiTripadvisor,
        label: 'TripAdvisor',
        href: 'https://www.tripadvisor.com.ph/Attraction_Review-g729733-d13456838-Reviews-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
        className: 'bg-[#34E0A1] hover:bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-500/25',
    },
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fdff_0%,#eef8ff_38%,#ffffff_100%)] text-slate-900">

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-cyan-200/50">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(251,146,60,0.12),transparent_34%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">Coron, Palawan</p>
                            <h1 className="font-display mt-3 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl">
                                Your Local Dive Home in Coron
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                                Safety Stop Diveshop is the first dive shop owned by a dedicated local in Coron, Palawan. We exist to share the underwater wonders of this extraordinary destination with every diver who visits.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/639760268714?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Safety%20Stop%20Diveshop!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400"
                                >
                                    <FaWhatsapp className="h-4 w-4" />
                                    Message Us
                                </a>
                                <a
                                    href="tel:+639760268714"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="grid gap-4">
                            {certifications.map((cert) => (
                                <div key={cert.label} className="flex items-center gap-4 rounded-2xl border border-cyan-200/50 bg-white/85 p-5 shadow-[0_8px_30px_rgba(14,165,233,0.07)] backdrop-blur-sm">
                                    <img
                                        src={cert.logo}
                                        alt={cert.alt}
                                        className="h-14 w-14 flex-shrink-0 rounded-lg object-contain"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-700">{cert.label}</p>
                                        <p className="mt-0.5 text-sm font-semibold text-slate-800">{cert.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="border-b border-slate-200 bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">Our Story</p>
                            <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl">
                                Rooted in Coron, Driven by the Sea
                            </h2>
                        </div>
                        <div className="space-y-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                            <p>
                                Safety Stop Diveshop was founded with one mission: to share the extraordinary underwater world of Coron with every diver who walks through our door. As the first locally-owned dive shop here, we bring something no visitor can replicate — a deep personal connection to these waters.
                            </p>
                            <p>
                                We are based in the beautiful town of Coron, Palawan, and pride ourselves on our warm, experienced team of instructors and divemasters. Whether you're taking your very first breath underwater or hunting the shipwrecks of World War II, our team is here to make your dive trip unforgettable.
                            </p>
                            <p>
                                We believe in small groups, personalised guidance, and diving done right — safely and with genuine excitement for the ocean.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="border-b border-slate-200 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-10 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">Why Dive With Us</p>
                        <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl">
                            What Sets Us Apart
                        </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {highlights.map((item) => (
                            <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_16px_rgba(2,12,27,0.04)]">
                                <HiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
                                <p className="text-sm font-medium leading-snug text-slate-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="border-b border-slate-200 bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">Get In Touch</p>
                            <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-slate-900 sm:text-5xl">
                                We're Ready to Plan Your Trip
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                                Have questions about courses, schedules, or which dive sites to visit? Reach out — we're happy to help you plan the perfect Coron dive trip.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label}
                                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition duration-200 ${link.className}`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {contactItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-200 hover:bg-white hover:shadow-[0_8px_24px_rgba(14,165,233,0.10)]"
                                    >
                                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition group-hover:border-cyan-200 group-hover:shadow-cyan-100">
                                            <Icon className="h-5 w-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                                            <p className="mt-0.5 text-sm font-semibold text-slate-800 break-all">{item.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map CTA */}
            <section className="bg-slate-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">Find Us</p>
                            <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                                Visit Us in Coron, Palawan
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                                We're located along the National Road in Brgy. 5, Coron — easy to find and always ready to welcome you.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                            <a
                                href="https://maps.google.com/?q=Safety+Stop+Diveshop+Coron+Palawan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-cyan-400"
                            >
                                Open in Google Maps
                            </a>
                            <a
                                href="https://wa.me/639760268714?text=Hi%2C%20how%20do%20I%20find%20Safety%20Stop%20Diveshop?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                                Ask for Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
