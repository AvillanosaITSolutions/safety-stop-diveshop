import appLogo from '../assets/app_logo.png';

export default function PortfolioChip() {
    return (
        <a
            href="https://itsavillanosa.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built by itsAvillanosa"
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-2 shadow-[0_4px_20px_rgba(2,12,27,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,12,27,0.16)]"
        >
            <img
                src={appLogo}
                alt="itsAvillanosa logo"
                className="h-5 w-5 flex-shrink-0 object-contain"
                loading="eager"
            />
            <span className="text-[11px] font-bold tracking-tight text-slate-700">
                itsAvillanosa
            </span>
        </a>
    );
}
