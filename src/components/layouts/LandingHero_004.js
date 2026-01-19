'use client';

import Link from 'next/link';
import '../../styles/theme_004.css';

/**
 * LandingHero_004 - Hero section with MODT gradient text and persona card
 * Extracted from Gemini Gem visual artifact
 */
export const LandingHero_004 = () => {
    return (
        <>
            {/* Navigation */}
            <nav className="nav-glass-004">
                <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--accent-green-500)' }}>memory</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
                                MODT<span style={{ color: 'var(--accent-green-500)' }}>_LAB</span>
                            </span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Link href="#research">Data</Link>
                            <Link href="#configurator">Configurator</Link>
                            <Link href="#use-cases">Architect</Link>
                            <Link href="#verdict">Prof&apos;s Verdict</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
                {/* Background Image Layer */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom right, #18181b, #0a0a0a, #18181b)',
                        opacity: 0.8
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.8), transparent)'
                    }}></div>
                </div>

                <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
                    {/* Status Badge */}
                    <div className="status-badge-004" style={{ marginBottom: '1.5rem' }}>
                        <span className="pulse-dot"></span>
                        <span className="text">Research Complete • Jan 2026</span>
                    </div>

                    {/* Main Title */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.025em',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        The <span className="modt-gradient-004 neon-text-004">MODT</span> Revolution
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        maxWidth: '42rem',
                        margin: '1rem auto',
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        fontWeight: 300
                    }}>
                        Mobile on Desktop. 16 Cores. &lt; 20W Idle.
                        <br />
                        The paradigm shift for high-density homelabs is here.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#configurator" className="btn-primary-004">
                            <span className="material-symbols-outlined">build</span>
                            Start Configurator
                        </a>
                        <a href="#research" className="btn-secondary-004">
                            <span className="material-symbols-outlined">table_chart</span>
                            View Raw Data
                        </a>
                    </div>

                    {/* Persona Card */}
                    <div className="persona-card-004" style={{ marginTop: '4rem', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div className="avatar">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div>
                                <h3 className="title">From the Desk of Prof. X</h3>
                                <p className="subtitle">MIT Dept of CS (25 Years) | DevOps Architect (30 Years)</p>
                                <p className="quote">
                                    &quot;I&apos;ve spent decades in data centers. The efficiency we&apos;re seeing with these &apos;dragon range&apos; mobile chips on ITX boards is unprecedented.
                                    We are talking about 7950X-class multi-thread performance at a fraction of the power budget.
                                    But be warned—this is bleeding edge Chinese engineering. The BIOS is raw, but the silicon is gold.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingHero_004;
