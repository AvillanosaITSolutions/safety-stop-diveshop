import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiCheckCircle, HiClock } from 'react-icons/hi2';

type CourseDetails = {
    title: string;
    duration?: string;
    description: string;
    learnItems: string[];
    inclusionItems: string[];
    bookingOptions: Array<{
        label: string;
        price: string;
        accent?: 'padi' | 'sdi' | 'none';
    }>;
};

const openWaterCourse: CourseDetails = {
    title: 'OPEN WATER DIVER COURSE',
    duration: '2-3 DAYS / 4 DIVES',
    description: 'The beginning of your freedom in scuba diving. Develop your scuba diving skills, learn at your own pace online, and feel the excitement of open-water dives.',
    learnItems: [
        'Set up and use scuba equipment.',
        'Control your bouyancy.',
        'Solve common problems.',
        'Become a skilled and confident diver.',
        'Treat marine life with respect.',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials and Certification',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '23,500', accent: 'padi' },
        { label: 'Book Now With SDI', price: '22,000', accent: 'sdi' },
    ],
};

const advancedOpenWaterCourse: CourseDetails = {
    title: 'ADVANCED DIVER COURSE',
    duration: '2 DAYS / 5 DIVES',
    description: 'The Advanced Diver course is all about improving your abilities. You’ll practice navigation and buoyancy, try deep diving, and complete three specialty dives of your choice.',
    learnItems: [
        'Make use of a compass for navigation.',
        'Improve your bouyancy.',
        'Exploration below 18 meters/60 feet.',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials and Certification',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '20,500', accent: 'padi' },
        { label: 'Book Now With SDI', price: '18,500', accent: 'sdi' },
    ],
};

const funDivesCourse: CourseDetails = {
    title: 'FUN DIVES',
    description: 'For those who are certified divers that want to explore!',
    learnItems: [],
    inclusionItems: [
        'Basic set of Equipment',
        'Lunch & Drinks',
        'Boat',
        'Divemaster Service',
    ],
    bookingOptions: [
        { label: 'Book Now for 2 Dives', price: '5,000', accent: 'none' },
        { label: 'Book Now for 3 Dives', price: '5,500', accent: 'none' },
    ],
};

const scubaDiscoveryCourse: CourseDetails = {
    title: 'INTRO DIVES',
    duration: '2 DIVES',
    description: 'For those who want to try scuba, this is the course for you!',
    learnItems: [
        'Equalizing',
        'Mask Removal',
        'Regulator Recover',
        'Bouyancy Control',
        'Unerwater Communication',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'BOOK NOW', price: '6,500', accent: 'none' },
    ],
};

const advancedDiverDeepCourse: CourseDetails = {
    title: 'ADVANCED DIVER & DEEP',
    duration: '2 Days / 6 Dives',
    description: 'Become a certified advanced diver with Deep Specialty in Discounted price.',
    learnItems: [
        'Make use of a compass for navigation',
        'Improve your buoyancy',
        'Exploration below 18 meters/60 feet',
        'Manage your air supply',
        'Emergency procedures for deep diving and first aid',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '37,000', accent: 'padi' },
        { label: 'Book Now With SDI', price: '32,500', accent: 'sdi' },
    ],
};

const advancedOpenWaterNitroxCourse: CourseDetails = {
    title: 'ADVANCED OPEN WATER & NITROX DIVER',
    duration: '2 Days / 6 Dives',
    description: 'Become a certified Advanced Diver with Nitrox Specialty in Discounted price.',
    learnItems: [
        'Make use of a compass for navigation',
        'Improve your buoyancy',
        'Exploration below 18 meters/60 feet',
        'Utilize an oxygen air analyzer',
        'Dive with nitrox',
        'Set your dive computer',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '33,000', accent: 'padi' },
        { label: 'Book Now With SDI', price: '28,500', accent: 'sdi' },
    ],
};

const advancedOpenWaterWreckCourse: CourseDetails = {
    title: 'ADVANCED OPEN WATER & WRECK DIVER',
    duration: '2 Days / 6 Dives',
    description: 'Become a certified Advanced Diver with Wreck Specialty in Discounted price.',
    learnItems: [
        'Make use of a compass for navigation',
        'Improve your buoyancy',
        'Exploration below 18 meters/60 feet',
        'Proper use of lines and reels',
        'Mapping wrecks',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '37,000', accent: 'padi' },
        { label: 'Book Now With SDI', price: '32,500', accent: 'sdi' },
    ],
};

const rescueDiverEmsCourse: CourseDetails = {
    title: 'RESCUE DIVER & EMERGENCY FIRST RESPONSE',
    duration: '2 Days / 5 Dives',
    description: 'The Rescue Diver Course will take you on a journey of adventure and safety. Gain the confidence and skills to become the diver everyone trusts, capable of handling dive emergencies and providing critical first aid. Develop the skills and confidence to save someone\'s life.',
    learnItems: [
        'First Aiding',
        'Use an emergency oxygen kit',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '38,500', accent: 'padi' },
        { label: 'Book Now With SDI', price: '32,500', accent: 'sdi' },
    ],
};

const openWaterAdvancedCourse: CourseDetails = {
    title: 'OPEN WATER & ADVANCED OPEN WATER',
    duration: '4-5 Days / 10 Dives',
    description: 'For those who want to become a Certified Diver to Advanced Diver in Discounted price.',
    learnItems: [
        'Equalizing',
        'Underwater Communication',
        'Set up and use scuba equipment',
        'Control your buoyancy',
        'Solve common problems',
        'Become a skilled and confident diver',
        'Treat marine life with respect',
        'Make use of a compass for navigation',
        'Improve your buoyancy',
        'Exploration below 18 meters/60 feet',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '42,000', accent: 'padi' },
        { label: 'Book Now With SDI', price: '37,500', accent: 'sdi' },
    ],
};

const dsdOpenWaterCourse: CourseDetails = {
    title: 'INTRO DIVES TO OPEN WATER CERTIFIED',
    duration: '3 Days / 4 Dives',
    description: 'For those who want to try scuba and decided to become a certified diver this is the course for you!',
    learnItems: [
        'Equalizing',
        'Mask Removal',
        'Regulator Recovery',
        'Underwater Communication',
        'Set up and use scuba equipment',
        'Control your buoyancy',
        'Solve common problems',
        'Become a skilled and confident diver',
        'Treat marine life with respect',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '23,500', accent: 'padi' },
        { label: 'Book Now With SDI', price: '22,000', accent: 'sdi' },
    ],
};

const equipmentSpecialistCourse: CourseDetails = {
    title: 'EQUIPMENT SPECIALIST COURSE',
    duration: '1 DAY',
    description: 'This course will provide an in-depth look at how dive equipment works. It will cover general repairs and maintenance on a variety of wet suits, BCDs, regulators, and other equipment.',
    learnItems: [
        'Clean and maintain your gear',
        'Fix equipment problems',
    ],
    inclusionItems: [],
    bookingOptions: [
        { label: 'BOOK NOW', price: '17,500', accent: 'none' },
    ],
};

const deepNitroxCourse: CourseDetails = {
    title: 'DEEP DIVER & NITROX DIVER SPECIALTY',
    duration: '2 DAYS / 4 DIVES',
    description: 'The Deep Diver Specialty equips divers with the skills and knowledge to safely explore greater depths. The course focuses on deep diving techniques, gas management, navigation, and handling potential challenges. Dive longer and safer with Nitrox certification.',
    learnItems: [
        'Manage your air supply',
        'Emergency procedures for deep diving and first aid',
        'Utilize an oxygen air analyzer',
        'Dive with nitrox',
        'Set your dive computer',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials and Certification',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '31,000', accent: 'padi' },
        { label: 'Book Now With SDI', price: '26,000', accent: 'sdi' },
    ],
};

const wreckNitroxCourse: CourseDetails = {
    title: 'WRECK DIVER AND NITROX SPECIALTY',
    duration: '2 DAYS / 4 DIVES',
    description: 'The Wreck Diving Specialty is an exciting scuba diving course that trains divers to safely explore underwater shipwrecks. It covers essential skills such as wreck navigation, assessing structural integrity, and handling potential hazards. Dive longer and safer with Nitrox certification.',
    learnItems: [
        'Proper use of lines and reels',
        'Mapping wrecks',
        'Analyzing nitrox tank',
        'Utilize an oxygen air analyzer',
        'Dive with nitrox',
        'Set your dive computer',
    ],
    inclusionItems: [
        'Basic set of Equipment',
        'Learning Materials and Certification',
        'Lunch & Drinks',
        'Boat',
        'Instructor Service',
    ],
    bookingOptions: [
        { label: 'Book Now With PADI', price: '31,000', accent: 'padi' },
        { label: 'Book Now With SDI', price: '26,000', accent: 'sdi' },
    ],
};

const courseDetailsBySlug: Record<string, CourseDetails> = {
    'open-water': openWaterCourse,
    'course': openWaterCourse,
    'advanced-open-water': advancedOpenWaterCourse,
    'fun-dives': funDivesCourse,
    'scuba-discovery': scubaDiscoveryCourse,
    'advance-diver-ems': advancedDiverDeepCourse,
    'advanced-open-water-nitrox-2': advancedOpenWaterNitroxCourse,
    'advanced-open-water-wreck-diver': advancedOpenWaterWreckCourse,
    'rescue-diver-ems-2': rescueDiverEmsCourse,
    'open-water-advanced-open-water': openWaterAdvancedCourse,
    'dsd-open-water': dsdOpenWaterCourse,
    'equipment-specialist': equipmentSpecialistCourse,
    'deep-and-nitrox': deepNitroxCourse,
    'wreck-and-nitrox': wreckNitroxCourse,
};

export default function CourseDetailsPage() {
    const { courseSlug = '' } = useParams();
    const course = courseDetailsBySlug[courseSlug];

    if (!course) {
        return (
            <div className="min-h-screen bg-[linear-gradient(180deg,#f8fdff_0%,#ffffff_100%)] px-6 pb-16 pt-28 text-slate-900 md:px-10">
                <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgba(2,12,27,0.06)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-600">Coming Soon</p>
                    <h1 className="font-display mt-3 text-3xl font-black tracking-[-0.02em] text-slate-900">Course Page Coming Soon</h1>
                    <p className="mt-4 text-base text-slate-600">
                        Details for this course are being prepared. Message us on WhatsApp for pricing and availability.
                    </p>
                    <a
                        href={`https://wa.me/639760268714?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(courseSlug)}%20course!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400"
                    >
                        <FaWhatsapp className="h-4 w-4" />
                        Ask via WhatsApp
                    </a>
                </div>
            </div>
        );
    }

    const waMessage = encodeURIComponent(`Hi, I'm interested in the ${course.title} course! Could you share more details?`);

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fdff_0%,#eef8ff_38%,#ffffff_100%)] pt-28 text-slate-900">
            <div className="px-6 pb-16 md:px-10">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* Course Info */}
                    <section>
                        {course.duration && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 shadow-sm">
                                <HiClock className="h-3 w-3 text-cyan-500" />
                                {course.duration}
                            </span>
                        )}
                        <h1 className="font-display mt-4 text-4xl font-black tracking-[-0.03em] text-slate-900 sm:text-5xl">
                            {course.title}
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            {course.description}
                        </p>

                        {course.learnItems.length > 0 && (
                            <div className="mt-10">
                                <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-slate-900">What You'll Learn</h2>
                                <ul className="mt-4 space-y-2.5">
                                    {course.learnItems.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <HiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {course.inclusionItems.length > 0 && (
                            <div className="mt-10">
                                <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-slate-900">What's Included</h2>
                                <ul className="mt-4 space-y-2.5">
                                    {course.inclusionItems.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <HiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Booking Sidebar */}
                    <aside className="lg:sticky lg:top-28 self-start">
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(2,12,27,0.08)]">
                            <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Course Pricing</p>
                            </div>

                            <div className="divide-y divide-slate-100 px-6">
                                {course.bookingOptions.map((option) => {
                                    const label =
                                        option.accent === 'padi' ? 'Book with PADI' :
                                        option.accent === 'sdi' ? 'Book with SDI' :
                                        option.label;
                                    const accentColor =
                                        option.accent === 'padi' ? 'text-blue-600' :
                                        option.accent === 'sdi' ? 'text-indigo-600' :
                                        'text-slate-900';

                                    return (
                                        <div key={option.label} className="py-5">
                                            <p className={`text-sm font-semibold uppercase tracking-[0.06em] ${accentColor}`}>{label}</p>
                                            <p className="mt-1 text-3xl font-black tracking-[-0.03em] text-slate-900">
                                                ₱{option.price}
                                            </p>
                                            <a
                                                href={`https://wa.me/639760268714?text=${waMessage}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md shadow-green-500/25 transition hover:bg-green-400"
                                            >
                                                <FaWhatsapp className="h-4 w-4" />
                                                Book via WhatsApp
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
                                <p className="text-[10px] leading-relaxed text-slate-400">
                                    Prices are in Philippine Peso (₱). Contact us for group rates or to check availability.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-semibold text-slate-700">Have questions?</p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-500">Our team is happy to help you choose the right course.</p>
                            <a
                                href="tel:+639760268714"
                                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:bg-slate-100"
                            >
                                Call +63 976 0268 714
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}