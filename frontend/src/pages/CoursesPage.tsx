import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiClock, HiArrowRight } from 'react-icons/hi2';

type CourseItem = {
    id: string;
    title: string;
    duration?: string;
    details?: string;
    slug: string;
};

type CourseGroup = {
    id: string;
    title: string;
    description: string;
    items: CourseItem[];
};

const courseGroups: CourseGroup[] = [
    {
        id: 'daily-dive-offers',
        title: 'Daily Dive Offers',
        description: 'Perfect for beginners and licensed divers looking for a single-day experience.',
        items: [
            { id: 'daily-1', title: 'Scuba Discovery', duration: '1 Day', details: 'For Beginners', slug: 'scuba-discovery' },
            { id: 'daily-2', title: 'Fun Dives', duration: '1 Day', details: 'For Licensed Divers', slug: 'fun-dives' },
            { id: 'daily-3', title: 'Refresher Course', duration: '1 Day', details: 'For Licensed Divers', slug: 'refresher-course' },
            { id: 'daily-4', title: 'Nitrox Dive', duration: '12 ltrs. tank / Per Dive', slug: 'nitrox-dive' },
        ],
    },
    {
        id: 'special-trips-offers',
        title: 'Special Trip Offers',
        description: 'Unique multi-dive expeditions to Coron\'s most iconic underwater destinations.',
        items: [
            { id: 'trip-1', title: 'Dugong Watching', duration: '1 Day', details: '2 Dives', slug: 'dugong-watching' },
            { id: 'trip-2', title: 'Apo Reef Expedition', duration: '3 Days & 2 Nights', details: '9 Day Dives + 2 Night Dives', slug: 'apo-reef-expedition' },
        ],
    },
    {
        id: 'package-courses',
        title: 'Package Courses',
        description: 'Get more certifications at a discounted combined rate.',
        items: [
            { id: 'pkg-1', title: 'Intro Dives to Open Water Certified', duration: '3 Days', details: '4 Dives', slug: 'dsd-open-water' },
            { id: 'pkg-2', title: 'Open Water & Advanced Open Water', duration: '4–5 Days', details: '10 Dives', slug: 'open-water-advanced-open-water' },
            { id: 'pkg-3', title: 'Advanced Open Water & Nitrox Diver', duration: '2 Days', details: '6 Dives', slug: 'advanced-open-water-nitrox-2' },
            { id: 'pkg-4', title: 'Advanced Open Water & Wreck Diver', duration: '2 Days', details: '6 Dives', slug: 'advanced-open-water-wreck-diver' },
            { id: 'pkg-5', title: 'Advanced Diver & Deep', duration: '2 Days', details: '6 Dives', slug: 'advance-diver-ems' },
            { id: 'pkg-6', title: 'Deep Diver & Nitrox Diver Specialty', duration: '2 Days', details: '4 Dives', slug: 'deep-and-nitrox' },
            { id: 'pkg-7', title: 'Wreck Diver & Nitrox Specialty', duration: '2 Days', details: '4 Dives', slug: 'wreck-and-nitrox' },
            { id: 'pkg-8', title: 'Rescue Diver & Emergency First Response', duration: '2 Days', details: '5 Dives', slug: 'rescue-diver-ems-2' },
        ],
    },
    {
        id: 'diving-courses',
        title: 'Diving Courses',
        description: 'Earn your certification with PADI or SDI — from beginner through professional.',
        items: [
            { id: 'diving-1', title: 'Open Water', duration: '2–3 Days', details: '4 Dives', slug: 'open-water' },
            { id: 'diving-2', title: 'Advanced Open Water', duration: '2 Days', details: '5 Dives', slug: 'advanced-open-water' },
            { id: 'diving-3', title: 'Rescue Diver', duration: '2–3 Days', details: '4 Dives', slug: 'rescue-diver' },
            { id: 'diving-4', title: 'Divemaster', duration: '21–30 Days', slug: 'divemaster' },
        ],
    },
    {
        id: 'specialty-courses',
        title: 'Specialty Courses',
        description: 'Expand your skills with focused training in specific dive disciplines.',
        items: [
            { id: 'spec-1', title: 'First Response', duration: '1 Day', slug: 'first-response' },
            { id: 'spec-2', title: 'Deep Diver', duration: '2 Days', details: '4 Dives', slug: 'deep-diver' },
            { id: 'spec-3', title: 'Wreck Diver', duration: '2 Days', details: '4 Dives', slug: 'wreck-diver' },
            { id: 'spec-4', title: 'Nitrox Diver', duration: '1 Day', details: '2 Dives', slug: 'nitrox-diver' },
            { id: 'spec-5', title: 'Sidemount Diver', duration: '2 Days', details: '4 Dives', slug: 'sidemount-diver' },
            { id: 'spec-6', title: 'Equipment Specialist', duration: '1 Day', slug: 'equipment-specialist' },
        ],
    },
];

export default function CoursesPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fdff_0%,#eef8ff_38%,#ffffff_100%)] text-slate-900">

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-cyan-200/50">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(251,146,60,0.12),transparent_34%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">PADI &amp; SDI Certified Dive Center</p>
                    <h1 className="font-display mt-3 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                        Dive Courses in Coron, Palawan
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        From your first breath underwater to advanced wreck diving — our experienced local instructors guide you every step of the way.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://wa.me/639760268714?text=Hi%2C%20I'm%20interested%20in%20your%20dive%20courses!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400"
                        >
                            <FaWhatsapp className="h-4 w-4" />
                            Book via WhatsApp
                        </a>
                        <a
                            href="tel:+639760268714"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                        >
                            Call Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Course Groups */}
            <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                <div className="space-y-16">
                    {courseGroups.map((group) => (
                        <div key={group.id}>
                            <div className="mb-2 flex items-center gap-4">
                                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-slate-900 sm:text-3xl">
                                    {group.title}
                                </h2>
                                <div className="flex-1 border-t border-slate-200" />
                            </div>
                            <p className="mb-6 text-sm text-slate-500">{group.description}</p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {group.items.map((course) => (
                                    <article
                                        key={course.id}
                                        onClick={() => navigate(`/courses/${course.slug}`)}
                                        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(2,12,27,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_12px_36px_rgba(14,165,233,0.14)]"
                                    >
                                        <div className="flex flex-1 flex-col p-5">
                                            <h3 className="text-sm font-bold uppercase tracking-[0.02em] text-slate-900 transition-colors group-hover:text-cyan-700">
                                                {course.title}
                                            </h3>
                                            {(course.duration || course.details) && (
                                                <div className="mt-3 flex flex-wrap items-center gap-2">
                                                    {course.duration && (
                                                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                                                            <HiClock className="h-3 w-3" />
                                                            {course.duration}
                                                        </span>
                                                    )}
                                                    {course.details && (
                                                        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-700">
                                                            {course.details}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-600">
                                                View details
                                            </span>
                                            <HiArrowRight className="h-3.5 w-3.5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-slate-200 bg-slate-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">Ready to Dive?</p>
                            <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                                Not sure which course is right for you?
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                                Message us on WhatsApp and our team will help you choose the perfect course for your experience level and goals.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                            <a
                                href="https://wa.me/639760268714?text=Hi%2C%20I'm%20interested%20in%20your%20dive%20courses!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                                Chat on WhatsApp
                            </a>
                            <a
                                href="tel:+639760268714"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                            >
                                Call +63 976 0268 714
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
