'use client';

import { useState } from 'react';
import { LandingHero_004 } from '../src/components/layouts/LandingHero_004';
import { SpecCard_004 } from '../src/components/features/DataGrid/SpecCard_004';
import { FilterBar_004 } from '../src/components/features/DataGrid/FilterBar_004';
import { Configurator_004 } from '../src/components/features/Configurator/Configurator_004';
import { ArchitectureBlueprints_004 } from '../src/components/features/Configurator/ArchitectureBlueprints_004';
import { ProfsVerdict_004 } from '../src/components/features/Verdict/ProfsVerdict_004';
import '../src/styles/theme_004.css';

// Product data
const products = [
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 5 7645HX", price: 204.27, cores: "6C/12T", score: 60, desc: "Cheapest entry point. Good for basic docker.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 7 7745HX", price: 246.15, cores: "8C/16T", score: 75, desc: "Solid 8-core balance. Great for gaming VMs.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 9 7845HX", price: 322.14, cores: "12C/24T", score: 85, desc: "12-Core monster value. Sweet spot for price/perf.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC Gaming Board", type: "gaming", cpu: "Ryzen 9 7945HX", price: 436.18, cores: "16C/32T", score: 98, desc: "Top tier Zen 4 mobile. Desktop 7950X rival.", link: "https://www.aliexpress.us/item/3256810089492334.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 5 7645HX", price: 220.48, cores: "6C/12T", score: 60, desc: "NAS layout with 6 cores. Plenty for ZFS.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 7 7745HX", price: 265.69, cores: "8C/16T", score: 75, desc: "High performance NAS/App server.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "TOPC NAS Board", type: "nas", cpu: "Ryzen 9 7945HX", price: 470.80, cores: "16C/32T", score: 98, desc: "The ultimate converged homelab server.", link: "https://www.aliexpress.us/item/3256810445986936.html" },
    { name: "Topton N17 Firewall", type: "firewall", cpu: "Ryzen 7 7840HS", price: 291.32, cores: "8C/16T", score: 80, desc: "HS series = lower TDP (35-54W). Efficient.", link: "https://www.aliexpress.us/item/3256810118657214.html" },
    { name: "Topton N17 Firewall", type: "firewall", cpu: "Ryzen 9 8945HS", price: 388.75, cores: "8C/16T", score: 84, desc: "Top tier HS series with NPU.", link: "https://www.aliexpress.us/item/3256810118657214.html" }
];

export default function Preview004Page() {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.type === filter);

    return (
        <div className="grid-bg-004" style={{ minHeight: '100vh', position: 'relative' }}>
            {/* CRT Overlay */}
            <div className="crt-overlay-004"></div>

            {/* Landing Hero */}
            <LandingHero_004 />

            {/* Data Explorer Section */}
            <section id="research" style={{ padding: '5rem 0', background: 'rgba(24, 24, 27, 0.3)' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Collected Research Data</h2>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '42rem' }}>
                                Comprehensive extraction of AliExpress listings for TOPC and Topton boards.
                            </p>
                        </div>
                        <FilterBar_004 activeFilter={filter} onFilterChange={setFilter} />
                    </div>

                    {/* Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {filteredProducts.map((product, i) => (
                            <SpecCard_004 key={`${product.cpu}-${i}`} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Configurator Section */}
            <Configurator_004 />

            {/* Architecture Blueprints Section */}
            <ArchitectureBlueprints_004 />

            {/* Prof's Verdict Section */}
            <ProfsVerdict_004 />
        </div>
    );
}
