/** Join a site-relative path to the GitHub Pages base (`/level2-chargers/`). */
export function withBase(path = ''): string {
	const base = import.meta.env.BASE_URL;
	const trimmed = path.replace(/^\/+/, '');
	if (!trimmed) {
		return base.endsWith('/') ? base : `${base}/`;
	}
	const prefix = base.endsWith('/') ? base : `${base}/`;
	return `${prefix}${trimmed}`;
}

export function formatDate(date: Date): string {
	// YAML date-only values coerce to UTC midnight. Format that calendar
	// date so 2026-11-05 does not display as November 4 in US time zones.
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC',
	});
}

export function connectorLabel(connector: 'NACS' | 'J1772' | 'both'): string {
	if (connector === 'both') return 'NACS or J1772';
	return connector;
}
