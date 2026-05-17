
const experiences = [
    {
        title: 'WWII Shipwreck Diving',
        difficulty: 'Intermediate',
        depth: '10-40m',
        marineLife: 'Batfish, Lionfish, Barracuda',
        duration: '2-3 dives',
        price: '₱6,500+',
    },
    {
        title: 'Barracuda Lake Diving',
        difficulty: 'Beginner',
        depth: '5-35m',
        marineLife: 'Barracuda, Shrimps, Catfish',
        duration: '1 dive',
        price: '₱3,500+',
    },
    {
        title: 'Coral Reef Diving',
        difficulty: 'Beginner',
        depth: '5-18m',
        marineLife: 'Clownfish, Turtles, Coral',
        duration: '1-2 dives',
        price: '₱3,000+',
    },
    {
        title: 'Night Diving',
        difficulty: 'Advanced',
        depth: '10-25m',
        marineLife: 'Crustaceans, Octopus, Eels',
        duration: '1 dive',
        price: '₱4,000+',
    },
    {
        title: 'Discover Scuba Diving',
        difficulty: 'Beginner',
        depth: '5-12m',
        marineLife: 'Reef Fish, Coral',
        duration: '1 dive',
        price: '₱3,200+',
    },
    {
        title: 'Freediving Adventures',
        difficulty: 'All Levels',
        depth: '5-20m',
        marineLife: 'Various',
        duration: '1-2 dives',
        price: '₱2,800+',
    },
];

export default function FeaturedDiveExperiences() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#0a223a]/95 to-[#1a3c5a]/90">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">Featured Dive Experiences</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp) => (
                        <div key={exp.title} className="group rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/20">
                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow">{exp.title}</h3>
                            <ul className="text-slate-100 text-sm mb-4 space-y-1">
                                <li><b>Difficulty:</b> {exp.difficulty}</li>
                                <li><b>Dive Depth:</b> {exp.depth}</li>
                                <li><b>Marine Life:</b> {exp.marineLife}</li>
                                <li><b>Duration:</b> {exp.duration}</li>
                                <li><b>Starting Price:</b> {exp.price}</li>
                            </ul>
                            {/* TODO: Add cinematic hover animation, imagery, glassmorphism overlays */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
