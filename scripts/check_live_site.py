import urllib.request
import re

url = "https://localvillageminers.com/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print("Page Status:", resp.status)
        
        css_links = re.findall(r'href=["\']([^"\']+\.css[^"\']*)["\']', html)
        print("Found CSS links:", css_links)
        for link in css_links:
            target = link if link.startswith('http') else ("https://localvillageminers.com" + ("" if link.startswith("/") else "/") + link)
            try:
                with urllib.request.urlopen(urllib.request.Request(target, headers=headers)) as c_resp:
                    print("CSS OK:", target, c_resp.status, len(c_resp.read()))
            except Exception as e:
                print("CSS FAIL:", target, e)
                
        js_links = re.findall(r'src=["\']([^"\']+\.js[^"\']*)["\']', html)
        print("\nFound JS links:", js_links[:5])
        for link in js_links[:3]:
            target = link if link.startswith('http') else ("https://localvillageminers.com" + ("" if link.startswith("/") else "/") + link)
            try:
                with urllib.request.urlopen(urllib.request.Request(target, headers=headers)) as j_resp:
                    print("JS OK:", target, j_resp.status)
            except Exception as e:
                print("JS FAIL:", target, e)
                
        img_links = re.findall(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|webp))["\']', html)
        print("\nFound Img links:", img_links[:5])
        for img in img_links[:3]:
            target = img if img.startswith('http') else ("https://localvillageminers.com" + ("" if img.startswith("/") else "/") + img)
            try:
                with urllib.request.urlopen(urllib.request.Request(target, headers=headers)) as i_resp:
                    print("IMG OK:", target, i_resp.status)
            except Exception as e:
                print("IMG FAIL:", target, e)

except Exception as e:
    print("Failed to open page:", e)
