import os, re, urllib.request, time

BASE = "https://www.chunkbase.com"
LOCAL = r"C:/Users/admin/WorkBuddy/2026-07-29-23-49-38/chunkbase_seedmap"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# Bulletproof: any relative or _astro absolute .js string literal is an import in bundled code.
JS_IMPORT_RES = [
    re.compile(r'["\']((?:\./|\.\./|/_astro/)[^"\']+\.js)["\']'),
]
CSS_IMPORT_RE = re.compile(r'@import\s*["\']([^"\']+)["\']')
CSS_URL_RE = re.compile(r'url\(\s*["\']?([^"\'()\s]+\.(?:png|jpe?g|webp|svg|gif|woff2?|ttf|eot|json|css|ico))["\']?\s*\)')
HTML_JS_RE = re.compile(r'<script[^>]*src=["\']([^"\']+\.js)["\']')
HTML_CSS_RE = re.compile(r'<link[^>]*href=["\']([^"\']+\.css)["\']')

def resolve(ref, referrer_local):
    if ref.startswith(('http://', 'https://')):
        return None
    ref_dir = os.path.dirname(referrer_local)
    if ref.startswith('/'):
        rel = ref.lstrip('/')
        url = BASE + '/' + rel
        local = os.path.join(LOCAL, rel)
    else:
        joined = os.path.normpath(os.path.join(ref_dir, ref))
        rel = os.path.relpath(joined, LOCAL).replace('\\', '/')
        url = BASE + '/' + rel
        local = joined
    return url, local

def extract(path, content):
    refs = []
    if path.endswith('.js'):
        for r in JS_IMPORT_RES:
            refs += r.findall(content)
    elif path.endswith('.css'):
        refs += CSS_IMPORT_RE.findall(content)
        refs += CSS_URL_RE.findall(content)
    elif path.endswith('.html'):
        refs += HTML_JS_RE.findall(content)
        refs += HTML_CSS_RE.findall(content)
        refs += CSS_URL_RE.findall(content)
    return refs

def download(url, local):
    os.makedirs(os.path.dirname(local), exist_ok=True)
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        with open(local, 'wb') as f:
            f.write(data)
        return len(data)
    except Exception as e:
        # leave a 0-byte marker? no, just report
        print(f"  FAIL {url} -> {e}")
        return None

visited = set()
to_scan = []
def enqueue(local):
    if local in visited:
        return
    visited.add(local)
    to_scan.append(local)

# seed: all existing js/css/html in mirror
for root, _, files in os.walk(os.path.join(LOCAL, '_astro')):
    for f in files:
        if f.endswith(('.js', '.css')):
            enqueue(os.path.join(root, f))
for h in ('index.html', 'raw.html'):
    p = os.path.join(LOCAL, h)
    if os.path.exists(p):
        enqueue(p)

count_new = 0
while to_scan:
    p = to_scan.pop()
    if not os.path.exists(p):
        continue
    with open(p, 'r', encoding='utf-8', errors='ignore') as fh:
        content = fh.read()
    for ref in extract(p, content):
        res = resolve(ref, p)
        if not res:
            continue
        url, local = res
        if not os.path.exists(local):
            n = download(url, local)
            if n:
                count_new += 1
                print(f"  + {os.path.relpath(local, LOCAL)} ({n}B)")
                if local.endswith(('.js', '.css', '.html')):
                    enqueue(local)

print(f"DONE. New files downloaded: {count_new}")
print(f"Total _astro js: {len([1 for r,_,fs in os.walk(os.path.join(LOCAL,'_astro')) for f in fs if f.endswith('.js')])}")
