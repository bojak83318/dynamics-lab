'use client';

import '../../../styles/theme_004.css';

const blueprints = [
    {
        icon: 'dns',
        iconColor: '#60a5fa', // blue-400
        title: 'All-Flash NAS',
        features: [
            '2x NVMe (Cache/App Pool)',
            '4x SATA (Bulk Storage)',
            '2.5GbE for SMB Multi.'
        ],
        quote: '"Perfect for TrueNAS Scale. Use the NVMe for apps and L2ARC."',
        image: '/images/nas-board.jpg'
    },
    {
        icon: 'hub',
        iconColor: '#c084fc', // purple-400
        title: 'Proxmox Cluster',
        features: [
            'Ryzen 9 7945HX (16C/32T)',
            '64GB DDR5 Support',
            'Low Idle Power'
        ],
        quote: '"Run 20+ LXC containers and 3-4 heavy VMs without breaking a sweat."',
        image: '/images/proxmox-board.jpg'
    },
    {
        icon: 'router',
        iconColor: '#fb923c', // orange-400
        title: 'Overkill Firewall',
        features: [
            'Ryzen 7 7840HS (Efficient)',
            'Dual 2.5GbE Intel/Realtek',
            'Virtualize OPNsense'
        ],
        quote: '"Why buy a dedicated router when your firewall can also run your media server?"',
        image: '/images/firewall-board.jpg'
    }
];

/**
 * ArchitectureBlueprints_004 - Grid of build architecture cards
 * Uses theme_004.css styling system
 */
export const ArchitectureBlueprints_004 = () => {
    return (
        <section id="use-cases" style={{
            padding: '5rem 0',
            background: 'var(--bg-surface)'
        }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
                <h2 style={{
                    fontSize: '1.875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '2.5rem',
                    borderLeft: '4px solid var(--accent-green-500)',
                    paddingLeft: '1rem'
                }}>Architecture Blueprints</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {blueprints.map((bp, i) => (
                        <div key={i} className="spec-card-004" style={{
                            padding: 0,
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                        }}>
                            {/* Image placeholder with gradient */}
                            <div style={{
                                height: '12rem',
                                overflow: 'hidden',
                                background: `linear-gradient(135deg, var(--bg-surface-light), var(--bg-void))`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontSize: '5rem',
                                        color: bp.iconColor,
                                        opacity: 0.3,
                                        transition: 'opacity 0.3s ease'
                                    }}
                                >{bp.icon}</span>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ color: bp.iconColor }}
                                    >{bp.icon}</span>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        color: 'var(--text-primary)'
                                    }}>{bp.title}</h3>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    marginBottom: '1rem'
                                }}>
                                    {bp.features.map((feat, j) => (
                                        <li key={j} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.875rem',
                                            color: 'var(--text-muted)',
                                            marginBottom: '0.5rem'
                                        }}>
                                            <span
                                                className="material-symbols-outlined"
                                                style={{ fontSize: '1rem', color: 'var(--accent-green-500)' }}
                                            >check</span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <p style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    fontStyle: 'italic',
                                    borderTop: '1px solid var(--border-zinc)',
                                    paddingTop: '0.75rem'
                                }}>{bp.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureBlueprints_004;
