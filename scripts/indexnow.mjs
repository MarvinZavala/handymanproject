// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).
// Usage: node scripts/indexnow.mjs   (run after a production deploy)
const HOST = 'www.twinhandymanplumbing.com';
const KEY = '4aa36004ea06d3c81eb7c004d165f80c';

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} – ${urlList.length} URLs submitted`);
