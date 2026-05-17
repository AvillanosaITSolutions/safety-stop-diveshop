
export default function UnderwaterGallery() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#0a223a]/95 to-[#1a3c5a]/90">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">Underwater Gallery</h2>
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {/* TODO: Map real underwater wreck/diver images, GoPro previews, Instagram reels */}
                    <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg aspect-[3/4] w-full h-72 flex items-center justify-center text-white/60 text-xs">Photo 1</div>
                    <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg aspect-[4/3] w-full h-60 flex items-center justify-center text-white/60 text-xs">Photo 2</div>
                    <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg aspect-[1/1] w-full h-64 flex items-center justify-center text-white/60 text-xs">Photo 3</div>
                    <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg aspect-[3/2] w-full h-56 flex items-center justify-center text-white/60 text-xs">Photo 4</div>
                    <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-lg aspect-[2/3] w-full h-72 flex items-center justify-center text-white/60 text-xs">Photo 5</div>
                </div>
            </div>
        </section>
    );
}
