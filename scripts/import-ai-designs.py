"""Create web delivery copies of the supplied artwork; leave source files untouched."""
import json
import re
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r'C:\Users\Lenovo\Downloads\Al mahy\Al mahy designs')
OUT = ROOT / 'public/work/ai-designs'
GROUPS = [
    ('legal', 'Legal services', 'Al mahy for legal'),
    ('corporate', 'Corporate services', 'Al mahy for corprate'),
    ('debt', 'Debt collection', 'Al mahy for dept collection'),
    ('notary', 'Notary services', 'Al mahy for Notary'),
    ('fateh', 'Al Fateh', 'Al Fateh Feasibility'),
]
TOPICS = {
    'legal': {'aug 26': 'Unpaid cheque', 'aug 29': 'Before you notify', 'aug 30': 'Professional legal notice', 'aug 31': 'Working hours explained', 'sep 1': 'Working hours: myth or fact', 'sep 5': 'Visa concierge', 'sep 6': 'Objections and enforcement', 'sep 7': 'Execution dispute vs. underlying rights', 'sep 8': 'Final settlement: myth or fact', 'sep 9': 'Final settlement visual guide', 'poster 3': 'Which court has jurisdiction?'},
    'corporate': {'aug 26': 'Start it right', 'aug 29': 'Corporate correspondence', 'aug 30': 'Professional corporate support', 'aug 31': 'Company structures explained', 'sep 1': 'Company structures: myth or fact', 'sep 4': 'Trade-name document guide', 'sep 5': 'Trade names: myth or fact', 'sep 6': 'Trade-name scenario', 'sep 7': 'Company document checklist', 'sep 8': 'Corporate identity: myth or fact', 'sep 9': 'Corporate compliance visual guide'},
    'debt': {'aug 26': 'Know before you claim', 'aug 29': 'Prepare before you pursue', 'aug 30': 'Is your claim documented?', 'aug 31': 'Payment orders explained', 'sep 5': 'Payment notices: myth or fact', 'sep 6': 'Payment-notice scenario', 'sep 7': 'Payment-order timeline', 'sep 8': 'Recovery timeline: myth or fact', 'sep 9': 'Payment-order visual guide'},
    'notary': {'aug 26': 'Act on your behalf', 'aug 29': 'Formal authority, professional support', 'aug 30': 'Delegate with clarity', 'aug 31': 'Identity verification explained', 'sep 4': 'Notarial document checklist', 'sep 5': 'Document details: myth or fact', 'sep 6': 'Corporate authorisation scenario', 'sep 7': 'Foreign-language document guide', 'sep 8': 'Legal translation: myth or fact', 'sep 9': 'Notarisation visual guide'},
    'fateh': {'aug 26': 'Numbers that make sense', 'aug 29': 'Monthly accounting', 'aug 30': 'Financial records for business', 'aug 31': 'VAT registration explainer', 'sep 5': 'Tax invoices: myth or fact', 'sep 6': 'Tax-invoice scenario', 'sep 7': 'VAT record-keeping guide', 'sep 8': 'VAT records: myth or fact', 'sep 9': 'VAT return visual guide', 'poster 1': 'Know your true profit', 'poster 2': 'Small mistakes, big penalties'},
}
FEATURED = {'legal-aug-26', 'notary-aug-29', 'corporate-sep-9', 'fateh-poster-1', 'debt-aug-29', 'legal-poster-3'}
items = []

def add(path, group, label, title=None):
    slug = re.sub(r'[^a-z0-9]+', '-', path.stem.lower()).strip('-')
    identifier = f'{group}-{slug}'
    if any(x['id'] == identifier for x in items):
        identifier += '-' + path.suffix.lstrip('.')
    folder = OUT / group
    folder.mkdir(parents=True, exist_ok=True)
    image = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    width, height = image.size
    image.save(folder / f'{identifier}.webp', 'WEBP', quality=94, method=6)
    thumb = image.copy()
    thumb.thumbnail((640, 800), Image.Resampling.LANCZOS)
    thumb.save(folder / f'{identifier}-thumb.webp', 'WEBP', quality=87, method=6)
    topic = title or TOPICS[group].get(path.stem.lower(), label + ' campaign design')
    if path.suffix.lower() == '.jpeg' and group == 'fateh':
        topic += ' — alternate layout'
    items.append({'id': identifier, 'group': group, 'category': label, 'title': topic,
                  'src': f'/work/ai-designs/{group}/{identifier}.webp',
                  'thumb': f'/work/ai-designs/{group}/{identifier}-thumb.webp',
                  'width': width, 'height': height, 'featured': identifier in FEATURED,
                  'alt': f'AI-assisted {label.lower()} campaign design: {topic}'})

for group, label, folder in GROUPS:
    for path in sorted((SOURCE / folder).iterdir(), key=lambda x: x.name.lower()):
        if path.suffix.lower() in ('.jpeg', '.jpg', '.png'):
            add(path, group, label)

for filename, group, label, title in [
    ('sep 3.jpeg', 'legal', 'Legal services', 'Working-hours scenario — split-screen layout'),
    ('sep 4.jpeg', 'corporate', 'Corporate services', 'Company-structure scenario — split-screen layout'),
    ('sep 5.jpeg', 'debt', 'Debt collection', 'Payment-order scenario — split-screen layout'),
    ('sep 5 (2).jpeg', 'notary', 'Notary services', 'Identity-verification scenario — split-screen layout'),
]:
    add(SOURCE / filename, group, label, title)

# The visa design belongs to corporate services even though its source folder is legal.
for item in items:
    if item['id'] == 'legal-sep-5':
        item['group'] = 'corporate'
        item['category'] = 'Corporate services'
        item['alt'] = 'AI-assisted corporate-services design: visa concierge'

assert len(items) == 57, len(items)
(ROOT / 'src/data/aiDesigns.json').write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Imported {len(items)} designs in 5 categories; source artwork unchanged.')
