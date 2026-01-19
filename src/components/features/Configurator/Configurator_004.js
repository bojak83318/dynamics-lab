'use client';

import { useState, useMemo } from 'react';
import '../../../styles/theme_004.css';

// Product data for recommendations
const products = [
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 5 7645HX", price: 204.27, cores: "6C/12T", score: 60, desc: "Cheapest entry point.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 7 7745HX", price: 246.15, cores: "8C/16T", score: 75, desc: "Solid 8-core balance.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 9 7845HX", price: 322.14, cores: "12C/24T", score: 85, desc: "12-Core monster.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 9 7940HX", price: 379.02, cores: "16C/32T", score: 92, desc: "16 Cores.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 9 7945HX", price: 436.18, cores: "16C/32T", score: 98, desc: "Top tier.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 5 7645HX", price: 220.48, cores: "6C/12T", score: 60, desc: "NAS layout.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 7 7745HX", price: 265.69, cores: "8C/16T", score: 75, desc: "High perf NAS.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 9 7845HX", price: 347.71, cores: "12C/24T", score: 85, desc: "Converged.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 9 7945HX", price: 470.80, cores: "16C/32T", score: 98, desc: "Ultimate.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "Topton N17 Firewall", type: "firewall", cpu: "Ryzen 7 7840HS", price: 291.32, cores: "8C/16T", score: 80, desc: "Efficient.", link: "https://www.aliexpress.us/item/3256810118657214.html" },
    { name: "Topton N17 Firewall", type: "firewall", cpu: "Ryzen 9 7940HS", price: 349.75, cores: "8C/16T", score: 82, desc: "Higher clocks.", link: "https://www.aliexpress.us/item/3256810118657214.html" },
    { name: "Topton N17 Firewall", type: "firewall", cpu: "Ryzen 9 8945HS", price: 388.75, cores: "8C/16T", score: 84, desc: "Top HS w/ NPU.", link: "https://www.aliexpress.us/item/3256810118657214.html" }
];

const profNotes = {
    nas: { score: 99, text: "Excellent choice. This board exposes all SATA lanes directly. Pair with TrueNAS Scale." },
    vm: { score: 98, text: "This CPU has enough threads to run a full lab. Reserve 2 cores for the hypervisor." },
    router: { score: 99, text: "Overkill? Maybe. But you'll never throttle on VPN encryption with this." }
};

const workloads = [
    { id: 'nas', icon: 'storage', title: 'High-Density NAS', subtitle: 'Focus: SATA, NVMe, Low Power' },
    { id: 'vm', icon: 'dns', title: 'Proxmox Cluster', subtitle: 'Focus: Cores, RAM, 16C/32T' },
    { id: 'router', icon: 'security', title: 'Edge Router / Firewall', subtitle: 'Focus: Dual 2.5G, AES-NI, Efficiency' }
];

/**
 * Configurator_004 - Interactive MODT configurator with workload selection and budget slider
 * Uses theme_004.css styling system
 */
export const Configurator_004 = () => {
    const [mode, setMode] = useState(null);
    const [budget, setBudget] = useState(350);

    const recommendation = useMemo(() => {
        if (!mode) return null;

        const relevantType = mode === 'vm' ? 'gaming' : (mode === 'router' ? 'firewall' : 'nas');
        const candidates = products
            .filter(p => p.type === relevantType && p.price <= budget)
            .sort((a, b) => b.price - a.price);

        return candidates[0] || null;
    }, [mode, budget]);

    const sliderPercent = ((budget - 200) / 300) * 100;

    return (
        <section id="configurator" style={{
            padding: '5rem 0',
            position: 'relative',
            borderTop: '1px solid var(--border-zinc)',
            borderBottom: '1px solid var(--border-zinc)',
            background: 'var(--bg-void)'
        }}>
            {/* Background gradient overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                background: 'linear-gradient(45deg, rgba(34,197,94,0.1) 0%, transparent 50%)'
            }}></div>

            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-green-500)'
                    }}>Build Your Stack</span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginTop: '0.5rem'
                    }}>The MODT Configurator</h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Select your parameters to find the optimal homelab node.
                    </p>
                </div>

                {/* Main Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    {/* Step 1: Workload Selector */}
                    <div style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-zinc)',
                        borderRadius: '0.75rem',
                        padding: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '0.25rem',
                                background: 'rgba(34, 197, 94, 0.2)',
                                color: 'var(--accent-green-500)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700
                            }}>1</div>
                            <h3 style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Primary Workload</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {workloads.map(w => (
                                <button
                                    key={w.id}
                                    onClick={() => setMode(w.id)}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        border: mode === w.id
                                            ? '1px solid var(--accent-green-500)'
                                            : '1px solid var(--border-zinc)',
                                        background: mode === w.id
                                            ? 'rgba(34, 197, 94, 0.1)'
                                            : 'rgba(39, 39, 42, 0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <span
                                        className="material-symbols-outlined"
                                        style={{
                                            color: mode === w.id ? 'var(--accent-green-500)' : 'var(--text-muted)'
                                        }}
                                    >{w.icon}</span>
                                    <div>
                                        <div style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>{w.title}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{w.subtitle}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Budget Slider */}
                    <div style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-zinc)',
                        borderRadius: '0.75rem',
                        padding: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '0.25rem',
                                background: 'rgba(34, 197, 94, 0.2)',
                                color: 'var(--accent-green-500)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700
                            }}>2</div>
                            <h3 style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Budget (Board + CPU)</h3>
                        </div>
                        <div style={{ padding: '0 0.5rem' }}>
                            {/* Custom slider track */}
                            <div style={{ position: 'relative', height: '0.5rem', marginBottom: '0.5rem' }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'var(--bg-surface-light)',
                                    borderRadius: '9999px'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: `${sliderPercent}%`,
                                    background: 'var(--accent-green-500)',
                                    borderRadius: '9999px'
                                }}></div>
                                <input
                                    type="range"
                                    min="200"
                                    max="500"
                                    value={budget}
                                    onChange={(e) => setBudget(parseInt(e.target.value))}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0,
                                        cursor: 'pointer'
                                    }}
                                />
                                {/* Thumb indicator */}
                                <div style={{
                                    position: 'absolute',
                                    left: `${sliderPercent}%`,
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '1rem',
                                    height: '1rem',
                                    background: 'var(--accent-green-500)',
                                    borderRadius: '9999px',
                                    pointerEvents: 'none',
                                    boxShadow: '0 0 10px var(--accent-green-glow)'
                                }}></div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)'
                            }}>
                                <span>$200</span>
                                <span style={{ color: 'var(--accent-green-400)', fontWeight: 700 }}>${budget}</span>
                                <span>$500+</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Panel */}
                    <div style={{
                        background: 'rgba(24, 24, 27, 0.8)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid var(--border-zinc)',
                        borderRadius: '0.75rem',
                        padding: '2rem',
                        minHeight: '20rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: mode ? 'stretch' : 'center',
                        justifyContent: mode ? 'flex-start' : 'center',
                        textAlign: mode ? 'left' : 'center'
                    }}>
                        {!mode ? (
                            <>
                                <span className="material-symbols-outlined" style={{
                                    fontSize: '4rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: '1rem'
                                }}>radio_button_unchecked</span>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Awaiting Input</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Select a workload to generate Prof. X&apos;s recommendation.</p>
                            </>
                        ) : !recommendation ? (
                            <>
                                <span className="material-symbols-outlined" style={{
                                    fontSize: '2.5rem',
                                    color: '#eab308',
                                    marginBottom: '0.5rem'
                                }}>sentiment_dissatisfied</span>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>Budget Too Low</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>No valid boards found under ${budget} for this workload.</p>
                            </>
                        ) : (
                            <>
                                {/* Recommendation Header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <span style={{
                                        background: 'var(--accent-green-500)',
                                        color: '#000',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '0.25rem'
                                    }}>RECOMMENDED BUILD</span>
                                    <span style={{
                                        color: 'var(--accent-green-400)',
                                        fontSize: '0.75rem',
                                        fontFamily: 'var(--font-mono)'
                                    }}>CONFIDENCE: 98%</span>
                                </div>

                                {/* Content Grid */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    {/* Left: Product Info */}
                                    <div>
                                        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                                            {recommendation.name}
                                        </h2>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontFamily: 'var(--font-mono)',
                                            color: 'var(--accent-green-500)',
                                            marginTop: '0.25rem'
                                        }}>{recommendation.cpu}</h3>
                                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                                            <span style={{
                                                background: 'var(--bg-surface-light)',
                                                border: '1px solid var(--border-zinc)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '0.25rem',
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)'
                                            }}>{recommendation.cores}</span>
                                            <span style={{
                                                background: 'var(--bg-surface-light)',
                                                border: '1px solid var(--border-zinc)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '0.25rem',
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)'
                                            }}>${recommendation.price.toFixed(2)}</span>
                                        </div>

                                        {/* Prof's Note */}
                                        <div style={{
                                            marginTop: '1.5rem',
                                            background: 'rgba(34, 197, 94, 0.1)',
                                            border: '1px solid rgba(34, 197, 94, 0.3)',
                                            padding: '1rem',
                                            borderRadius: '0.5rem'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)',
                                                    fontWeight: 700,
                                                    color: 'var(--accent-green-400)',
                                                    fontSize: '1.25rem'
                                                }}>{profNotes[mode].score}</span>
                                                <p style={{
                                                    color: 'var(--text-secondary)',
                                                    fontStyle: 'italic',
                                                    fontSize: '0.875rem',
                                                    lineHeight: 1.5
                                                }}>{profNotes[mode].text}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Tech Specs */}
                                    <div style={{
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        borderRadius: '0.5rem',
                                        padding: '1rem',
                                        border: '1px solid var(--border-zinc)'
                                    }}>
                                        <h4 style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            marginBottom: '1rem'
                                        }}>Technical Specifications</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            {[
                                                { label: 'TDP (Configurable)', value: '45W - 75W' },
                                                { label: 'Memory Support', value: 'DDR5 SODIMM x2' },
                                                { label: 'Storage', value: mode === 'nas' ? '4x SATA + 2x NVMe' : '2x NVMe + 4x SATA' },
                                                { label: 'Networking', value: 'Dual 2.5GbE' }
                                            ].map((spec, i) => (
                                                <li key={i} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    borderBottom: '1px solid var(--border-zinc)',
                                                    paddingBottom: '0.5rem',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    color: 'var(--text-secondary)'
                                                }}>
                                                    <span>{spec.label}</span>
                                                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{spec.value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href={recommendation.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'block',
                                                width: '100%',
                                                marginTop: '1rem',
                                                padding: '0.75rem',
                                                background: '#fff',
                                                color: '#000',
                                                textAlign: 'center',
                                                fontWeight: 700,
                                                borderRadius: '0.25rem',
                                                textDecoration: 'none',
                                                transition: 'background 0.2s ease'
                                            }}
                                        >View on AliExpress</a>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Configurator_004;
