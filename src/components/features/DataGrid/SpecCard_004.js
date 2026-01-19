'use client';

import '../../../styles/theme_004.css';

/**
 * SpecCard_004 - Product specification card with performance bar
 * Extracted from Gemini Gem visual artifact
 */
export const SpecCard_004 = ({ name, type, cpu, price, cores, score, desc, link }) => {
    const getIcon = () => {
        switch (type) {
            case 'nas': return 'storage';
            case 'firewall': return 'router';
            default: return 'memory';
        }
    };

    return (
        <div className="spec-card-004">
            {/* Header: Icon, Name, Price */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined icon-badge">{getIcon()}</span>
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.875rem' }}>{name}</h3>
                        <div className="cpu-name">{cpu}</div>
                    </div>
                </div>
                <span className="price">${price.toFixed(0)}</span>
            </div>

            {/* Specs */}
            <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-zinc)', paddingBottom: '0.25rem', marginBottom: '0.75rem' }}>
                    <span>Cores</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{cores}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-zinc)', paddingBottom: '0.25rem' }}>
                    <span>Performance</span>
                    <div className="perf-bar-track-004">
                        <div className="perf-bar-fill-004" style={{ width: `${score}%` }}></div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', minHeight: '2.5rem' }}>{desc}</p>

            {/* CTA Link */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    border: '1px solid var(--border-zinc)',
                    color: 'var(--text-secondary)',
                    borderRadius: '0.25rem',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                }}
            >
                View Spec Sheet
            </a>
        </div>
    );
};

export default SpecCard_004;
