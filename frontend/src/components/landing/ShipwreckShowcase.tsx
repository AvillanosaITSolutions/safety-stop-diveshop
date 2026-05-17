
const wrecks = [
    {
        name: 'Irako Maru',
        depth: '28-42m',
        visibility: '15-25m',
        biodiversity: 'Batfish, Groupers, Soft Corals',
        penetration: 'Yes',
        difficulty: 'Advanced',
        story: 'A Japanese refrigeration ship sunk in 1944, now a haven for marine life and advanced divers.',
    },
    {
        name: 'Akitsushima',
        depth: '22-36m',
        visibility: '10-20m',
        biodiversity: 'Snappers, Barracuda, Hard Corals',
        penetration: 'Yes',
        difficulty: 'Advanced',
        story: 'A seaplane tender with dramatic wreckage and rich WWII history, popular for penetration dives.',
    },
    {
        name: 'Okikawa Maru',
        depth: '10-26m',
        visibility: '10-18m',
        biodiversity: 'Fusiliers, Sweetlips, Sponges',
        penetration: 'Yes',
        difficulty: 'Intermediate',
        story: 'A large oil tanker, now a coral-encrusted artificial reef teeming with life.',
    },
    {
        name: 'Lusong Gunboat',
        depth: '5-12m',
        visibility: '10-15m',
        biodiversity: 'Juvenile Fish, Corals',
        penetration: 'No',
        difficulty: 'Beginner',
        story: 'A shallow WWII gunboat, perfect for snorkelers and beginner divers.',
    },
    {
        name: 'Skeleton Wreck',
        depth: '5-22m',
        visibility: '8-15m',
        biodiversity: 'Lionfish, Nudibranchs, Coral',
        penetration: 'Partial',
        difficulty: 'Beginner',
        story: 'A small wreck with a dramatic skeleton hull, accessible to all levels.',
    },
];

export default function ShipwreckShowcase() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#1a3c5a]/95 to-[#0a223a]/95">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Coron’s WWII Shipwrecks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {wrecks.map((wreck) => (
                        <div key={wreck.name} className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-8 flex flex-col gap-2 hover:bg-white/20 transition">
                            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow">{wreck.name}</h3>
                            <p className="text-slate-100 text-sm mb-2 italic">{wreck.story}</p>
                            <ul className="text-slate-100 text-sm mb-2 space-y-1">
                                <li><b>Dive Depth:</b> {wreck.depth}</li>
                                <li><b>Visibility:</b> {wreck.visibility}</li>
                                <li><b>Marine Biodiversity:</b> {wreck.biodiversity}</li>
                                <li><b>Wreck Penetration:</b> {wreck.penetration}</li>
                                <li><b>Difficulty:</b> {wreck.difficulty}</li>
                            </ul>
                            {/* TODO: Add underwater imagery, interactive map, atmospheric UI, cinematic effects */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
