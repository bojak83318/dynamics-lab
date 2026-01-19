'use client';

import '../../../styles/theme_004.css';

const filters = [
    { type: 'all', label: 'All' },
    { type: 'nas', label: 'NAS' },
    { type: 'gaming', label: 'Gaming' },
    { type: 'firewall', label: 'Firewall' }
];

/**
 * FilterBar_004 - Filter button bar with active green state
 * Extracted from Gemini Gem visual artifact
 */
export const FilterBar_004 = ({ activeFilter, onFilterChange }) => {
    return (
        <div className="filter-bar-004">
            {filters.map(f => (
                <button
                    key={f.type}
                    onClick={() => onFilterChange(f.type)}
                    className={`filter-btn-004 ${activeFilter === f.type ? 'active' : ''}`}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
};

export default FilterBar_004;
