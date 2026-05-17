import React from 'react';
import { Button } from 'flowbite-react';

export default function FinalCTASection() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a223a] via-[#1a3c5a] to-[#0a223a]">
            {/* TODO: Add massive cinematic underwater wreck scene, divers disappearing into blue depths, emotional copy */}
            <div className="absolute inset-0 z-0">
                {/* Cinematic underwater background, parallax, fog, rays, particles */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a223a]/90 to-[#1a3c5a]/95" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col items-center text-center">
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
                    Some histories are not found in museums — they rest beneath the waters of Coron waiting to be explored.
                </h2>
                <Button color="info" size="lg" className="rounded-full px-8 py-3 text-base font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 border-0 shadow-lg hover:from-cyan-300 hover:to-cyan-400 mt-6">
                    Book Your Coron Dive Adventure
                </Button>
            </div>
        </section>
    );
}
