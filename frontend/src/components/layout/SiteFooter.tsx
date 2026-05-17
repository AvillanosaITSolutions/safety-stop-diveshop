import { useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa6';
import { SiTripadvisor } from 'react-icons/si';
import dotBadge from '../../assets/dot.png';
import padiLogo from '../../assets/padi.webp';
import sdiLogo from '../../assets/sdi.png';

const quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Best Offers', sectionId: 'dive-courses' },
    { label: 'Dive Gallery', sectionId: 'dive-gallery' },
    { label: 'Reviews', sectionId: 'reviews' },
];

const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/SafetyStopDiveshop',
        icon: FaFacebookF,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/safetystopdiveshop_/',
        icon: FaInstagram,
    },
    {
        label: 'Email',
        href: 'mailto:safetystopdiveshop@gmail.com',
        icon: FaEnvelope,
    },
    {
        label: 'Trip Advisor',
        href: 'https://www.tripadvisor.com.ph/Attraction_Review-g729733-d13456838-Reviews-Safety_Stop_Diveshop-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html',
        icon: SiTripadvisor,
    },
    {
        label: 'Google Reviews',
        href: 'https://www.google.com/search?q=Safety+Stop+Diveshop+Coron+Palawan+reviews',
        icon: FaGoogle,
    },
] as const;

export default function SiteFooter() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToHomeSection = (sectionId: string) => {
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        navigate('/');
        window.setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
    };

    return (
        <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.22),transparent_42%),radial-gradient(circle_at_85%_15%,rgba(251,146,60,0.16),transparent_36%)]" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">Safety Stop Diveshop</p>
                    <h3 className="font-display mt-3 text-2xl font-bold tracking-[-0.02em] text-white">Dive Deeper In Coron</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                        Learn scuba diving, explore iconic WWII shipwrecks, and enjoy guided underwater experiences designed for both beginners and certified divers.
                    </p>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">Quick Links</p>
                    <div className="mt-4 flex flex-col gap-2 text-sm">
                        {quickLinks.map((link) => (
                            <button
                                key={link.sectionId}
                                type="button"
                                className="w-fit text-left transition hover:text-cyan-200"
                                onClick={() => goToHomeSection(link.sectionId)}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="w-fit text-left transition hover:text-cyan-200"
                            onClick={() => navigate('/courses')}
                        >
                            Courses Page
                        </button>
                    </div>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">Contact</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-300">
                        <p>Brgy. 5 National Road Coron, Palawan</p>
                        <p>+63 976 0268 714</p>
                        <p>+63 936 9457 260</p>
                        <p className="break-all">safetystopdiveshop@gmail.com</p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                                    aria-label={`Open ${link.label}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                                >
                                    <Icon className="h-4 w-4 text-cyan-200" />
                                    <span>{link.label}</span>
                                </a>
                            );
                        })}
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 px-3 py-2">
                            <img
                                src={dotBadge}
                                alt="Department of Tourism accreditation badge"
                                className="h-10 w-10 flex-shrink-0 rounded object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="flex-1">
                                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-300">Accredited By</p>
                                <p className="text-xs font-semibold text-white">Department of Tourism</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 px-3 py-2">
                            <img
                                src={padiLogo}
                                alt="PADI Logo"
                                className="h-10 w-10 flex-shrink-0 rounded object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="flex-1">
                                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-300">Training Standard</p>
                                <p className="text-xs font-semibold text-white">PADI Certified</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 px-3 py-2">
                            <img
                                src={sdiLogo}
                                alt="SDI Logo"
                                className="h-10 w-10 flex-shrink-0 rounded object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="flex-1">
                                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-300">Training Standard</p>
                                <p className="text-xs font-semibold text-white">SDI Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative border-t border-white/10 px-6 py-4 text-center text-xs text-slate-400 md:px-10">
                © {new Date().getFullYear()} Safety Stop Diveshop. All rights reserved.
            </div>
        </footer>
    );
}
