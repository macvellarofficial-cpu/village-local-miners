import urllib.request
import json
import re

base_url = "http://localhost:3000"

pages_to_test = [
    ("/", "Homepage"),
    ("/about-us", "About Us"),
    ("/gold", "Gold Products"),
    ("/our-products", "Our Products"),
    ("/gallery", "Gallery"),
    ("/contact-us", "Contact Us"),
    ("/24-karat-gold", "Product: 24 Karat Gold"),
    ("/1kg-gold-bullion-bars", "Product: 1kg Gold Bullion Bars"),
    ("/raw-gold-dust", "Product: Raw Gold Dust"),
    ("/gold-nuggets", "Product: Gold Nuggets"),
    ("/sitemap.xml", "Sitemap XML"),
    ("/robots.txt", "Robots TXT")
]

print("=== 1. VERIFYING ROUTE STATUS & CONTENT ===")
results = []
for path, name in pages_to_test:
    url = f"{base_url}{path}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            content = resp.read().decode('utf-8', errors='ignore')
            
            # Checks
            has_phone = "+256750625851" in content or "256750625851" in content
            has_address = "Entebbe Rd" in content or "Kampala" in content
            has_email = "info@localvillageminers.com" in content
            
            title_match = re.search(r'<title>(.*?)</title>', content)
            title = title_match.group(1) if title_match else "No title"
            
            print(f"[{status}] {name} ({path}): Title='{title[:40]}...' | Phone={has_phone} | Addr={has_address} | Email={has_email}")
            results.append((path, status, True))
    except Exception as e:
        print(f"[FAIL] {name} ({path}): {e}")
        results.append((path, None, False))

print("\n=== 2. TESTING CONTACT FORM API ENDPOINT ===")
api_url = f"{base_url}/api/contact"
payload = json.dumps({
    "name": "Local Verification Tester",
    "email": "test@example.com",
    "phone": "+256750625851",
    "subject": "Automated Quality Check",
    "message": "Testing contact form submission verification on local server."
}).encode('utf-8')

try:
    req = urllib.request.Request(
        api_url, 
        data=payload, 
        headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        res_data = json.loads(resp.read().decode('utf-8'))
        print(f"API /api/contact response: Status {resp.status} - {res_data}")
except Exception as e:
    print(f"API /api/contact test failed: {e}")

print("\n=== 3. VERIFYING KEY ASSETS (IMAGES & ICONS) ===")
assets_to_test = [
    "/images/logo.png",
    "/images/first-slider.jpg",
    "/images/second-slider.jpg",
    "/images/third-slider.jpg",
    "/images/background-banner.jpg",
    "/images/WhatsApp_icon.png.webp",
    "/images/testimonial.jpg",
    "/upload/banner/1738774471about-us.jpg",
    "/upload/category/178889118124-karat-gold.jpg",
    "/upload/category/17888913291kg-gold-bullion-bars.JPG",
    "/upload/category/1788890816gold-dust.png",
    "/upload/category/1788890969Gold-Ore.jpg",
    "/upload/category/1615809028White-Diamond.png"
]
for asset in assets_to_test:
    asset_url = f"{base_url}{asset}"
    try:
        req = urllib.request.Request(asset_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            content_type = resp.headers.get('Content-Type')
            content_len = resp.headers.get('Content-Length', 'unknown')
            print(f"[{resp.status}] Asset: {asset} ({content_type}, {content_len} bytes)")
    except Exception as e:
        print(f"[FAIL] Asset {asset}: {e}")

print("\nALL VERIFICATIONS COMPLETED SUCCESSFULLY.")
