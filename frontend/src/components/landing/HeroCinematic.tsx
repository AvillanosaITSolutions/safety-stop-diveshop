import { Button } from 'flowbite-react';

export default function HeroCinematic() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a223a] via-[#0e2d4d] to-[#1a3c5a]">
            {/* Cinematic underwater background layers (parallax, particles, rays, fog, islands, diver, wreck, marine life) */}
            <div className="absolute inset-0 z-0">
                {/* TODO: Add parallax layers, animated particles, sun rays, fog, islands, diver, wreck, marine life SVGs/images */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a223a]/90 to-[#1a3c5a]/95" />
            </div>
            {/* Glassmorphism overlay for headline and CTAs */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col items-center text-center">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                    Dive Into Coron’s Legendary <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">WWII Shipwrecks</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-100 font-medium mb-8 max-w-xl">
                    Explore historic Japanese warships transformed into breathtaking underwater worlds beneath the crystal waters of Palawan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button color="info" size="lg" className="rounded-full px-8 py-3 text-base font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 border-0 shadow-lg hover:from-cyan-300 hover:to-cyan-400">
                        Book Your Dive Adventure
                    </Button>
                    <Button color="light" size="lg" className="rounded-full px-8 py-3 text-base font-semibold uppercase tracking-[0.08em] bg-white/30 text-white border border-white/30 shadow-lg hover:bg-white/50 hover:text-cyan-900">
                        Explore Shipwrecks
                    </Button>
                </div>
                {/* Floating trust badges */}
                <div className="flex flex-wrap gap-3 mt-8 justify-center">
                    <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white shadow">PADI Certified</span>
                    <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white shadow">5-Star Dive Experiences</span>
                    <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white shadow">Expert Local Dive Guides</span>
                    <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white shadow">Small Dive Groups</span>
                </div>
            </div>
            {/* TODO: Add smooth parallax, floating particles, underwater lighting, fog, and marine life visuals */}
        </section>
    );
}
