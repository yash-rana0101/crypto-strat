import type { DbBlog, DbChangelog, DbDoc } from './content';

// Remote articles predate the crypto product. Publish only vetted topics.
const CRYPTO_TOPIC = /\b(?:crypto(?:currency)?|bitcoin|ethereum|btc|eth|perpetual(?:s| futures)?|on-chain|blockchain)\b/i;
const LEGACY_TOPIC = /\b(?:wages?|salar(?:y|ies)|payroll|NSE|BSE|Nifty|Banknifty|Sensex|SEBI|India(?:n)?|stocks?|equities|equity|F&O)\b/i;

function isCryptoOnly(text: string): boolean {
	return CRYPTO_TOPIC.test(text) && !LEGACY_TOPIC.test(text);
}

export function cryptoBlogs(blogs: DbBlog[]): DbBlog[] {
	return blogs.filter((blog) =>
		isCryptoOnly([
			blog.title,
			blog.excerpt,
			blog.content,
			blog.category,
			...(Array.isArray(blog.tags) ? blog.tags : []),
		].join(' '))
	);
}

export function cryptoDocs(docs: DbDoc[]): DbDoc[] {
	return docs.filter((doc) =>
		isCryptoOnly([doc.title, doc.summary, doc.content, doc.category].join(' '))
	);
}

export function cryptoChangelogs(changelogs: DbChangelog[]): DbChangelog[] {
	return changelogs.filter((item) =>
		isCryptoOnly([
			item.title,
			item.summary,
			...(Array.isArray(item.changes) ? item.changes : []),
		].join(' '))
	);
}
