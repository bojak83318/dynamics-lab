'use client';

import React from 'react';

// Recommended product data based on screenshot_9
const recommendedProduct = {
    name: "Topton N17 Firewall",
    cpu: "Ryzen 9 7940HS",
    cores: "8C/16T",
    price: 349.75,
    confidence: 98,
    score: 99,
    commentary: "Overkill? Maybe. But you'll never throttle on VPN encryption with this.",
    specs: {
        tdp: "45W - 75W",
        memory: "DDR5 SODIMM x2",
        storage: "2x NVMe + 4x SATA",
        networking: "Dual 2.5GbE"
    },
    link: "https://www.aliexpress.us/item/3256810118657214.html"
};

export function ProfsVerdict_004() {
    return (
        <section className="verdict-section-004" style={{
            padding: '5rem 0',
            background: 'rgba(24, 24, 27, 0.5)'
        }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
                {/* Header Row */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    borderBottom: '1px solid var(--border-zinc)',
                    paddingBottom: '1rem'
                }}>
                    <span className="verdict-badge-004">RECOMMENDED BUILD</span>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--accent-green-400)'
                    }}>
                        CONFIDENCE: {recommendedProduct.confidence}%
                    </span>
                </div>

                {/* Main Content - Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column - Product Info */}
                    <div>
                        {/* Product Name */}
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            {recommendedProduct.name}
                        </h2>

                        {/* CPU Model */}
                        <p style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1rem',
                            color: 'var(--accent-green-400)',
                            marginBottom: '1.5rem'
                        }}>
                            {recommendedProduct.cpu}
                        </p>

                        {/* Spec Badges */}
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
                            <span className="verdict-spec-badge-004">{recommendedProduct.cores}</span>
                            <span className="verdict-spec-badge-004">${recommendedProduct.price.toFixed(2)}</span>
                        </div>

                        {/* Prof's Score and Commentary */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <span style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: 'var(--accent-green-400)',
                                lineHeight: 1
                            }}>
                                {recommendedProduct.score}
                            </span>
                            <p style={{
                                fontStyle: 'italic',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                maxWidth: '280px'
                            }}>
                                "{recommendedProduct.commentary}"
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Tech Specs Table */}
                    <div>
                        <h3 style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            borderBottom: '1px solid var(--border-zinc)',
                            paddingBottom: '0.5rem'
                        }}>
                            TECHNICAL SPECIFICATIONS
                        </h3>

                        <table className="verdict-specs-table-004">
                            <tbody>
                                <tr>
                                    <td className="label">TDP (Configurable)</td>
                                    <td className="value">{recommendedProduct.specs.tdp}</td>
                                </tr>
                                <tr>
                                    <td className="label">Memory Support</td>
                                    <td className="value">{recommendedProduct.specs.memory}</td>
                                </tr>
                                <tr>
                                    <td className="label">Storage</td>
                                    <td className="value">{recommendedProduct.specs.storage}</td>
                                </tr>
                                <tr>
                                    <td className="label">Networking</td>
                                    <td className="value">{recommendedProduct.specs.networking}</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* CTA Button */}
                        <a
                            href={recommendedProduct.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="verdict-cta-004"
                        >
                            View on AliExpress
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
