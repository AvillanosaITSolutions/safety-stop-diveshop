import React from 'react';
import { Button } from 'flowbite-react';

export default function BookingSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#1a3c5a]/95 to-[#0a223a]/95">
            <div className="max-w-4xl mx-auto px-6">
                <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-8 flex flex-col gap-6 items-center text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 drop-shadow-lg">Book Your Dive Adventure</h2>
                    <p className="text-slate-100 text-base mb-4">Reserve your spot now. Flexible schedules, reserve now pay later, and quick inquiry available.</p>
                    <form className="w-full max-w-md mx-auto flex flex-col gap-4">
                        <input className="rounded-full px-4 py-2 bg-white/30 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Name" />
                        <input className="rounded-full px-4 py-2 bg-white/30 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email or Messenger/WhatsApp" />
                        <input className="rounded-full px-4 py-2 bg-white/30 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Preferred Dive Date(s)" />
                        <Button type="submit" color="info" className="rounded-full px-8 py-3 text-base font-semibold uppercase tracking-[0.08em] bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 border-0 shadow-lg hover:from-cyan-300 hover:to-cyan-400">Reserve Now</Button>
                    </form>
                    <div className="flex flex-wrap gap-3 mt-6 justify-center">
                        <Button color="light" className="rounded-full px-6 py-2 text-base font-semibold bg-white/30 text-white border border-white/30 shadow hover:bg-white/50 hover:text-cyan-900">Messenger</Button>
                        <Button color="light" className="rounded-full px-6 py-2 text-base font-semibold bg-white/30 text-white border border-white/30 shadow hover:bg-white/50 hover:text-cyan-900">WhatsApp</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
