import React from 'react';

export default function TrustSocialProof() {
    return (
        <section className="relative z-10 py-16 bg-gradient-to-b from-[#1a3c5a]/90 to-[#0a223a]/95">
            <div className="max-w-5xl mx-auto px-6">
                <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
                    {/* TODO: Add TripAdvisor, Google, testimonials, underwater photos, years, dives, trust icons */}
                    <div className="flex-1 flex flex-col gap-3 text-white">
                        <h3 className="text-2xl font-bold mb-2">Trusted by Divers Worldwide</h3>
                        <ul className="text-base space-y-1">
                            <li>★★★★★ Tripadvisor & Google Reviews</li>
                            <li>Years operating in Coron</li>
                            <li>Thousands of dives completed</li>
                            <li>International tourist trust</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-4 justify-center items-center">
                        {/* TODO: Add real diver photos, review logos, testimonial cards */}
                        <div className="w-24 h-24 rounded-2xl bg-slate-200/20 border border-white/20 flex items-center justify-center text-white/60 text-xs">Photo</div>
                        <div className="w-24 h-24 rounded-2xl bg-slate-200/20 border border-white/20 flex items-center justify-center text-white/60 text-xs">Review</div>
                        <div className="w-24 h-24 rounded-2xl bg-slate-200/20 border border-white/20 flex items-center justify-center text-white/60 text-xs">Testimonial</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
