/**
 * NESTORA - Modern Furniture E-Commerce
 * "Furniture That Feels Like Home"
 * 
 * Client Demo Front-End Engine
 * Built with HTML5, CSS3 & Vanilla JavaScript
 */

// ==========================================================================
// CONFIGURATION & GLOBAL SETTINGS
// ==========================================================================

// DEMO CONTENT NOTE:
// Replace this placeholder with Nestora's real WhatsApp number before production.
const whatsappNumber = "923001234567";

// Flat delivery charge across active delivery zones (PKR)
const DEFAULT_DELIVERY_FEE = 2000;

// LocalStorage Keys
const CART_STORAGE_KEY = "nestoraCart";
const WISHLIST_STORAGE_KEY = "nestoraWishlist";
const LAST_ORDER_KEY = "nestoraLastOrder";

// ==========================================================================
// MASTER PRODUCT CATALOGUE
// (DEMO DATA — Easy to update or replace from this single source)
// ==========================================================================

const products = [
  {
    id: 1,
    name: "Oslo 3-Seater Sofa",
    category: "Living Room",
    price: 89000,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 38,
    badge: "BEST SELLER",
    inStock: true,
    material: "Fabric",
    colors: [
      { name: "Warm Beige", hex: "#D8C7B5" },
      { name: "Charcoal Grey", hex: "#3B3D3E" },
      { name: "Muted Olive", hex: "#636F57" }
    ],
    sizes: [
      { label: "2-Seater", priceDelta: -12000 },
      { label: "3-Seater", priceDelta: 0 },
      { label: "4-Seater", priceDelta: 18000 }
    ],
    shortDesc: "A masterclass in modern Scandinavian proportion, designed with high-resilience foam and textured woven linen upholstery.",
    fullDesc: "The Oslo 3-Seater Sofa is the anchor of any serene living space. Crafted on an FSC-certified solid oak inner frame with reinforced corner blocks, this sofa combines clean Scandinavian geometry with deep, inviting softness. Dual-density cushioning enveloped in soft down-blend ticking delivers enduring ergonomics for long evenings with family.",
    specs: {
      "Frame": "Kiln-dried solid beech and oak",
      "Upholstery": "Heavyweight linen-cotton blend (40,000 Martindale rubs)",
      "Cushion Fill": "High-resiliency foam with hypoallergenic fiber wrap",
      "Legs": "Solid American Walnut with matte protective lacquer",
      "Assembly": "Light leg attachment required (tools included)"
    },
    dimensions: {
      "Width": "210 cm",
      "Depth": "88 cm",
      "Height": "82 cm",
      "Seat Height": "44 cm",
      "Seat Depth": "58 cm"
    },
    care: "Vacuum regularly using a soft brush attachment. Blot spills immediately with an absorbent undyed cloth. Professional upholstery cleaning recommended annually.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 2,
    name: "Haven L-Shape Sofa",
    category: "Living Room",
    price: 145000,
    originalPrice: 158000,
    rating: 5.0,
    reviewsCount: 24,
    badge: "NEW",
    inStock: false,
    material: "Fabric",
    colors: [
      { name: "Cream Bouclé", hex: "#EBE5DB" },
      { name: "Soft Taupe", hex: "#A89F91" },
      { name: "Graphite", hex: "#2C2C2E" }
    ],
    sizes: [
      { label: "Standard (Left Chaise)", priceDelta: 0 },
      { label: "Standard (Right Chaise)", priceDelta: 0 },
      { label: "Grand XL Sectional", priceDelta: 32000 }
    ],
    shortDesc: "Expansive relaxation meets tailored architectural contours, wrapped in tactile bouclé with a generous reversible chaise lounge.",
    fullDesc: "Engineered for generous living rooms and modern family entertainment, the Haven L-Shape sofa envelops you in tactile comfort. The generous chaise invites relaxed lounging, while low-profile walnut feet ground the silhouette in subtle luxury.",
    specs: {
      "Frame": "Kiln-dried hardwood with steel web suspension",
      "Upholstery": "Textured luxury bouclé fabric with water-resistant finish",
      "Cushion Fill": "Multi-density pocket-spring core with memory foam crown",
      "Chaise Orientation": "Configurable (left or right return)",
      "Origin": "Handcrafted by master furniture artisans"
    },
    dimensions: {
      "Width": "285 cm",
      "Chaise Depth": "165 cm",
      "Height": "78 cm",
      "Seat Depth": "64 cm"
    },
    care: "Spot clean with mild water-free solvent. Rotate and fluff back pillows weekly to maintain loft.",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 3,
    name: "Aria Accent Chair",
    category: "Living Room",
    price: 32500,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 19,
    badge: null,
    inStock: true,
    material: "Fabric",
    colors: [
      { name: "Oatmeal Chenille", hex: "#D6CFC4" },
      { name: "Olive Velvet", hex: "#5C6B56" },
      { name: "Burnt Ochre", hex: "#A86538" }
    ],
    sizes: [
      { label: "Standard Accent", priceDelta: 0 }
    ],
    shortDesc: "A sculptural focal point featuring continuous curved armrests and an organic solid ash timber frame.",
    fullDesc: "The Aria Accent Chair introduces fluid organic contours to reading corners and seating groups. Its gently curved silhouette supports natural posture, balancing warm natural woods with touchable bouclé and chenille textiles.",
    specs: {
      "Frame": "Hand-shaped solid natural ash wood",
      "Finish": "Low-sheen organic matte wax seal",
      "Upholstery": "High-grade textured chenille",
      "Joints": "Traditional mortise and tenon joinery"
    },
    dimensions: {
      "Width": "74 cm",
      "Depth": "80 cm",
      "Height": "76 cm",
      "Seat Height": "42 cm"
    },
    care: "Dust timber surfaces with a dry microfiber cloth. Avoid prolonged direct midday sunlight.",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 4,
    name: "Verona Coffee Table",
    category: "Living Room",
    price: 28000,
    originalPrice: 32000,
    rating: 4.9,
    reviewsCount: 42,
    badge: "SALE",
    inStock: true,
    material: "Wood",
    colors: [
      { name: "Natural Walnut", hex: "#5A3D28" },
      { name: "Light White Oak", hex: "#C7B299" },
      { name: "Ebonized Black", hex: "#1E1E1E" }
    ],
    sizes: [
      { label: "Diameter 80cm", priceDelta: 0 },
      { label: "Diameter 100cm", priceDelta: 6000 }
    ],
    shortDesc: "Minimalist circular coffee table with a softly chamfered top edge and fluted tripod cylindrical legs.",
    fullDesc: "Verona marries grounded simplicity with refined craft. Featuring fluted pillar legs and a reverse-bevel perimeter, this table serves as an understated platform for art monographs, ceramic vessels and warm morning coffee.",
    specs: {
      "Material": "Solid walnut top with fluted solid hardwood core",
      "Coating": "Matte water-resistant polyurethane protective coat",
      "Weight Capacity": "65 kg evenly distributed"
    },
    dimensions: {
      "Diameter": "80 cm / 100 cm",
      "Height": "40 cm",
      "Tabletop Thickness": "3.2 cm"
    },
    care: "Always use coasters under warm or chilled drinkware. Wipe immediately with a damp cloth.",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 5,
    name: "Nova TV Console",
    category: "Living Room",
    price: 42000,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 15,
    badge: null,
    inStock: true,
    material: "Engineered Wood",
    colors: [
      { name: "Walnut & Matte Slate", hex: "#4C3829" },
      { name: "Natural Oak & White", hex: "#BEAA8F" }
    ],
    sizes: [
      { label: "180 cm (Up to 75” TV)", priceDelta: 0 },
      { label: "210 cm (Up to 85” TV)", priceDelta: 7500 }
    ],
    shortDesc: "Fluted sliding tambour doors and integrated concealed cable management for seamless media organization.",
    fullDesc: "Designed to keep living rooms clutter-free, the Nova Media Console showcases whisper-quiet slatted sliding doors that permit infrared remote signals while masking AV equipment, gaming consoles and cabling.",
    specs: {
      "Body": "Architectural oak veneer over high-density fiberboard",
      "Hardware": "Soft-close German ball-bearing runners",
      "Cable Ports": "3 recessed grommets in rear partition"
    },
    dimensions: {
      "Width": "180 cm",
      "Depth": "45 cm",
      "Height": "52 cm"
    },
    care: "Wipe with a soft lint-free microfiber cloth along the direction of the wood grain.",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 6,
    name: "Haven King Bed",
    category: "Bedroom",
    price: 115000,
    originalPrice: 125000,
    rating: 4.9,
    reviewsCount: 53,
    badge: "BEST SELLER",
    inStock: true,
    material: "Fabric",
    colors: [
      { name: "Oatmeal Linen", hex: "#DFD7CA" },
      { name: "Muted Clay", hex: "#9E7B66" },
      { name: "Deep Charcoal", hex: "#323334" }
    ],
    sizes: [
      { label: "Queen (60x78 in)", priceDelta: -10000 },
      { label: "King (72x78 in)", priceDelta: 0 },
      { label: "Super King (78x84 in)", priceDelta: 12000 }
    ],
    shortDesc: "Cocoon-like padded headboard with gentle wrap-around wings and a squeak-free hardwood sprung slat platform.",
    fullDesc: "Turn your bedroom into a sanctuary of calm. The Haven Bed pairs an oversized upholstered headboard with an acoustic-dampened solid timber base. Generous flange stitching and plush down-fill lining make reading in bed an everyday ritual.",
    specs: {
      "Headboard": "High-density polyfoam with upholstered surround",
      "Base": "Sprung solid birch slat system (no box spring required)",
      "Centre Rail": "Steel beam with adjustable double centre legs"
    },
    dimensions: {
      "Length": "218 cm",
      "Width": "194 cm (King)",
      "Headboard Height": "118 cm",
      "Under-bed Clearance": "16 cm"
    },
    care: "Vacuum fabric using gentle suction. Spot clean headboard with foam upholstery cleaner.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 7,
    name: "Luna Bedside Table",
    category: "Bedroom",
    price: 18500,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 29,
    badge: null,
    inStock: true,
    material: "Wood",
    colors: [
      { name: "American Walnut", hex: "#5C3E28" },
      { name: "Natural Ash", hex: "#CDBFA8" },
      { name: "Smoked Espresso", hex: "#2B211A" }
    ],
    sizes: [
      { label: "Single Drawer", priceDelta: 0 },
      { label: "Double Drawer", priceDelta: 4500 }
    ],
    shortDesc: "Curved cylindrical nightstand featuring a concealed touch-latch drawer and an open display alcove.",
    fullDesc: "Luna softens the bedroom geometry with its cylindrical silhouette. The integrated push-to-open drawer provides stealth storage for bedside essentials, while the bottom alcove holds your current nighttime reads.",
    specs: {
      "Timber": "FSC solid ash top and architectural walnut veneer",
      "Drawer Slides": "Undermount soft-close push mechanisms",
      "Cord Management": "Discreet rear pass-through notch"
    },
    dimensions: {
      "Diameter": "44 cm",
      "Height": "52 cm"
    },
    care: "Wipe with clean dry microfiber. Keep out of direct path of room humidifiers.",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 8,
    name: "Milano 6-Seater Dining Table",
    category: "Dining",
    price: 78000,
    originalPrice: 85000,
    rating: 4.9,
    reviewsCount: 31,
    badge: "BEST SELLER",
    inStock: true,
    material: "Wood",
    colors: [
      { name: "Smoked Walnut", hex: "#463022" },
      { name: "Organic Honey Oak", hex: "#AF916D" }
    ],
    sizes: [
      { label: "6-Seater (180 cm)", priceDelta: 0 },
      { label: "8-Seater (220 cm)", priceDelta: 16000 }
    ],
    shortDesc: "Solid hardwood dining table with sculpted double pedestal trestle base and soft curved capsule tabletop.",
    fullDesc: "The Milano Dining Table brings warmth and celebratory grandeur to shared dining. Crafted from sustainably harvested wood, the pill-shaped top rests on architectural fluted pedestal columns that maximize legroom for every guest.",
    specs: {
      "Tabletop": "Solid 35mm thick timber with rounded capsule edges",
      "Bases": "Dual fluted pillar pedestals with internal steel anchors",
      "Capacity": "Comfortably seats 6 to 8 people"
    },
    dimensions: {
      "Length": "180 cm / 220 cm",
      "Width": "90 cm",
      "Height": "75 cm"
    },
    care: "Clean with mild organic wood soap and water. Polish every 6 months with natural beeswax balm.",
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 9,
    name: "Siena Dining Chair",
    category: "Dining",
    price: 14500,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 46,
    badge: null,
    inStock: true,
    material: "Wood",
    colors: [
      { name: "Walnut & Natural Cord", hex: "#634731" },
      { name: "Black Ash & Charcoal", hex: "#222222" },
      { name: "Oak & Sand Fabric", hex: "#C7B298" }
    ],
    sizes: [
      { label: "Standard Dining", priceDelta: 0 },
      { label: "Set of 2 (Special)", priceDelta: 13500 }
    ],
    shortDesc: "Timeless handcrafted dining chair with woven paper cord seating and steam-bent ergonomic curved backrest.",
    fullDesc: "A tribute to mid-century Danish design, the Siena Dining Chair features steam-bent solid wood curves that hug the spine. The hand-woven seating conforms to the body, growing more comfortable with every dinner party.",
    specs: {
      "Frame": "FSC Solid Beech steam-bent by hand",
      "Seat": "Three-ply twisted Danish paper cord (unbleached)",
      "Floor Protectors": "Pre-installed high-density wool felt pads"
    },
    dimensions: {
      "Width": "52 cm",
      "Depth": "54 cm",
      "Height": "78 cm",
      "Seat Height": "45 cm"
    },
    care: "Vacuum cord lightly. Wipe wooden elements with a dry or barely damp soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 10,
    name: "Executive Oak Desk",
    category: "Office",
    price: 52000,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 22,
    badge: "NEW",
    inStock: true,
    material: "Wood",
    colors: [
      { name: "Natural White Oak", hex: "#C7B299" },
      { name: "Roasted Walnut", hex: "#4C3322" }
    ],
    sizes: [
      { label: "Medium (140x65 cm)", priceDelta: 0 },
      { label: "Executive (170x75 cm)", priceDelta: 9000 }
    ],
    shortDesc: "Refined workstation with chamfered perimeter, integrated wireless desk-charger slot and felt-lined drawer.",
    fullDesc: "Designed for focused productivity, the Executive Oak Desk pairs generous workspace with serene minimalist aesthetics. Two slimline drawers glide quietly on concealed soft-close runners, lined in protective wool felt for laptops and notebooks.",
    specs: {
      "Desk Top": "Solid European white oak with matte UV anti-fingerprint seal",
      "Drawers": "2 full-extension felt-lined stationary compartments",
      "Cable Tray": "Undermount steel cable spine and surge protector basket"
    },
    dimensions: {
      "Width": "140 cm / 170 cm",
      "Depth": "65 cm / 75 cm",
      "Height": "76 cm"
    },
    care: "Clean desktop with wood-friendly natural spray. Avoid direct contact with hot mugs or sharp metallic edges.",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 11,
    name: "Oslo Office Chair",
    category: "Office",
    price: 29000,
    originalPrice: 34000,
    rating: 4.8,
    reviewsCount: 34,
    badge: null,
    inStock: true,
    material: "Fabric",
    colors: [
      { name: "Charcoal Wool", hex: "#38393B" },
      { name: "Warm Taupe", hex: "#9E9385" },
      { name: "Sage Olive", hex: "#5C6A57" }
    ],
    sizes: [
      { label: "Standard Ergonomic", priceDelta: 0 }
    ],
    shortDesc: "Ergonomic executive desk chair combining breathable tailored wool upholstery with 360° brushed aluminum swivel.",
    fullDesc: "Proof that office chairs can be beautiful. Oslo features lumbar-cradling internal curvature, smooth pneumatic height adjustment and a silent 5-star swivel base equipped with hardwood-friendly castors.",
    specs: {
      "Base": "Die-cast brushed matte aluminum with 360-degree silent swivel",
      "Gas Lift": "Class-4 heavy duty nitrogen cylinder (TÜV certified)",
      "Castors": "Polyurethane-wrapped silent rolling wheels for wooden floors"
    },
    dimensions: {
      "Width": "66 cm",
      "Depth": "66 cm",
      "Total Height": "88 - 98 cm",
      "Seat Height": "45 - 55 cm"
    },
    care: "Spot clean fabric with warm water and wool detergent. Clean castors periodically to remove dust.",
    images: [
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 12,
    name: "Walnut Storage Cabinet",
    category: "Storage",
    price: 46000,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 17,
    badge: null,
    inStock: true,
    material: "Wood",
    colors: [
      { name: "Warm Walnut", hex: "#4E3524" },
      { name: "Natural Smoked Oak", hex: "#8F7D6B" }
    ],
    sizes: [
      { label: "2-Door (90x110 cm)", priceDelta: 0 },
      { label: "3-Door (135x110 cm)", priceDelta: 14000 }
    ],
    shortDesc: "Multi-purpose sideboard with slatted relief doors, adjustable interior shelving and brass accent handles.",
    fullDesc: "A versatile storage statement piece suited for the dining room, lounge or entryway. Hand-laid slatted door panels create dynamic play of light and shadow while internal adjustable shelving accommodates tableware, linens or bar accessories.",
    specs: {
      "Construction": "American Walnut veneer and solid timber frame",
      "Doors": "Soft-close concealed European hinges with 110-degree opening",
      "Shelving": "3 adjustable height tiers per bay"
    },
    dimensions: {
      "Width": "90 cm / 135 cm",
      "Depth": "42 cm",
      "Height": "110 cm"
    },
    care: "Wipe with soft lint-free dry cloth. Use non-wax furniture polish annually to nourish natural grain.",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 13,
    name: "Kyoto Outdoor Lounge Set",
    category: "Outdoor",
    price: 98000,
    originalPrice: 110000,
    rating: 4.9,
    reviewsCount: 21,
    badge: "NEW",
    inStock: false,
    material: "Mixed Materials",
    colors: [
      { name: "Teak & Sand Cushions", hex: "#CDB28C" },
      { name: "Weathered Charcoal", hex: "#4A4744" }
    ],
    sizes: [
      { label: "Lounge Bench + 2 Chairs", priceDelta: 0 },
      { label: "Complete 4-Piece + Table", priceDelta: 22000 }
    ],
    shortDesc: "Weatherproof Grade-A teak framing with all-weather quick-dry foam and UV-resistant outdoor fabric.",
    fullDesc: "Bring indoor refinement out into open air. Crafted from sustainably harvested Grade-A teak that weathers to a noble silvery patina, complemented by water-shedding Sunbrella-grade outdoor cushions.",
    specs: {
      "Wood": "Kiln-dried plantation teak with marine-grade stainless hardware",
      "Textile": "Solution-dyed acrylic fabric (UV resistant, water repellent)",
      "Foam": "Reticulated open-cell outdoor quick-dry foam"
    },
    dimensions: {
      "Bench Width": "160 cm",
      "Chair Width": "72 cm",
      "Height": "74 cm"
    },
    care: "Store cushions in dry storage during extreme monsoon or winter seasons. Teak can be oiled or left to silver naturally.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 14,
    name: "Kanso Minimalist Bookshelf",
    category: "Storage",
    price: 38000,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 14,
    badge: null,
    inStock: true,
    material: "Wood",
    colors: [
      { name: "Smoked Oak & Matte Black", hex: "#635345" },
      { name: "Pure Bleached Ash", hex: "#D6C7B2" }
    ],
    sizes: [
      { label: "4-Tier (80x160 cm)", priceDelta: 0 },
      { label: "5-Tier (100x190 cm)", priceDelta: 9500 }
    ],
    shortDesc: "Open-profile architectural shelving featuring asymmetrical dividers and solid steel framing.",
    fullDesc: "Kanso transforms book storage into curatorial art. Varied vertical dividers create natural bookends and framed resting spots for ceramics, plants and personal artifacts without visually crowding the room.",
    specs: {
      "Frame": "Laser-cut 20mm steel tube with textured matte powder coat",
      "Shelves": "25mm European oak timber with rounded edge profiles",
      "Wall Anchor": "Concealed heavy-duty safety bracket kit included"
    },
    dimensions: {
      "Width": "80 cm / 100 cm",
      "Depth": "34 cm",
      "Height": "160 cm / 190 cm"
    },
    care: "Dust with dry cloth. Do not exceed 25kg weight load per individual shelf tier.",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

function formatPKR(amount) {
  return "PKR " + Number(amount).toLocaleString("en-PK");
}

function getProductById(id) {
  return products.find(p => p.id === Number(id));
}

// Generate unique line key for product variant combination
function getCartItemKey(productId, colorName, sizeLabel) {
  return `${productId}_${encodeURIComponent(colorName || "default")}_${encodeURIComponent(sizeLabel || "default")}`;
}

// ==========================================================================
// CART ENGINE (localStorage: nestoraCart)
// ==========================================================================

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Cart storage error:", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
    document.dispatchEvent(new CustomEvent("nestora:cart:updated"));
  } catch (e) {
    console.error("Error saving cart:", e);
  }
}

function addToCart(productId, selectedColor, selectedSize, qty = 1, showNotification = true) {
  const product = getProductById(productId);
  if (!product) return false;

  const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
  
  let sizeObj = { label: "Standard", priceDelta: 0 };
  if (typeof selectedSize === "object" && selectedSize !== null && selectedSize.label) {
    sizeObj = selectedSize;
  } else if (typeof selectedSize === "string") {
    const matched = product.sizes?.find(s => s.label.toLowerCase() === selectedSize.toLowerCase());
    sizeObj = matched || { label: selectedSize, priceDelta: 0 };
  } else if (product.sizes && product.sizes.length > 0) {
    sizeObj = product.sizes[0];
  }
  
  const finalUnitPrice = product.price + (sizeObj.priceDelta || 0);
  const cart = getCart();
  const itemKey = getCartItemKey(product.id, color, sizeObj.label);

  const existingIndex = cart.findIndex(item => item.key === itemKey);

  if (existingIndex > -1) {
    // Increase quantity of existing line
    cart[existingIndex].qty += Number(qty);
  } else {
    // Add new line
    cart.push({
      key: itemKey,
      productId: product.id,
      name: product.name,
      category: product.category,
      price: finalUnitPrice,
      basePrice: product.price,
      color: color,
      size: sizeObj.label,
      image: product.images[0],
      qty: Number(qty)
    });
  }

  saveCart(cart);

  if (showNotification) {
    showToast(`✓ ${product.name} (${color}) added to your cart.`);
  }

  return true;
}

function updateCartQuantity(itemKey, delta) {
  const cart = getCart();
  const index = cart.findIndex(item => item.key === itemKey);

  if (index > -1) {
    if (delta < 0 && cart[index].qty <= 1) {
      // Quantity must never go below 1 via minus button
      return;
    }
    cart[index].qty += delta;
    saveCart(cart);
  }
}

function removeCartItem(itemKey) {
  let cart = getCart();
  const index = cart.findIndex(item => item.key === itemKey);
  if (index > -1) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart(cart);
    showToast(`✓ Removed ${item.name} from cart`);
  }
}

function clearCart() {
  saveCart([]);
  showToast("✓ Cart cleared");
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = cart.length > 0 ? DEFAULT_DELIVERY_FEE : 0;
  const total = subtotal + delivery;
  const totalCount = cart.reduce((count, item) => count + item.qty, 0);

  return { subtotal, delivery, total, totalCount, items: cart };
}

function updateCartBadges() {
  const { totalCount } = getCartTotals();
  const elements = document.querySelectorAll(".cart-count-badge");
  elements.forEach(el => {
    el.textContent = totalCount;
    if (totalCount > 0) {
      el.classList.add("has-items");
    } else {
      el.classList.remove("has-items");
    }
  });

  const cartTextBadges = document.querySelectorAll(".cart-text-count");
  cartTextBadges.forEach(el => {
    el.textContent = `Cart (${totalCount})`;
  });
}

// ==========================================================================
// WISHLIST ENGINE (localStorage: nestoraWishlist)
// ==========================================================================

function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
    updateWishlistBadges();
  } catch (e) {}
}

function isInWishlist(productId) {
  const list = getWishlist();
  return list.includes(Number(productId));
}

function toggleWishlist(productId, btnEl = null) {
  const id = Number(productId);
  let list = getWishlist();
  const index = list.indexOf(id);
  const product = getProductById(id);

  if (index > -1) {
    list.splice(index, 1);
    showToast(`✓ Removed ${product ? product.name : "item"} from wishlist`);
  } else {
    list.push(id);
    showToast(`✓ Added ${product ? product.name : "item"} to wishlist`);
  }

  saveWishlist(list);
  updateWishlistUI();

  if (btnEl) {
    btnEl.classList.toggle("active", isInWishlist(id));
  }
}

function updateWishlistBadges() {
  const list = getWishlist();
  const count = list.length;
  document.querySelectorAll(".wishlist-count-badge").forEach(el => {
    el.textContent = count;
    el.classList.toggle("has-items", count > 0);
  });
}

function updateWishlistUI() {
  updateWishlistBadges();
  document.querySelectorAll(".btn-wishlist[data-product-id]").forEach(btn => {
    const pid = Number(btn.getAttribute("data-product-id"));
    btn.classList.toggle("active", isInWishlist(pid));
  });
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================

function initToastContainer() {
  if (!document.getElementById("nestora-toast-container")) {
    const container = document.createElement("div");
    container.id = "nestora-toast-container";
    container.className = "nestora-toast-container";
    document.body.appendChild(container);
  }
}

function showToast(message, type = "info") {
  initToastContainer();
  const container = document.getElementById("nestora-toast-container");
  
  const toast = document.createElement("div");
  toast.className = `nestora-toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-msg">${message}</span>
    </div>
    <button class="toast-close" aria-label="Close">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.add("toast-hiding");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add("toast-visible");
  });

  // Auto remove
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add("toast-hiding");
      setTimeout(() => toast.remove(), 350);
    }
  }, 4000);
}

// ==========================================================================
// RENDER PRODUCT CARD COMPONENT
// ==========================================================================

function renderProductCard(product) {
  const inWish = isInWishlist(product.id);
  const badgeHTML = product.badge 
    ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}">${product.badge}</span>` 
    : '';

  const saleHTML = product.originalPrice
    ? `<span class="price-original">${formatPKR(product.originalPrice)}</span>`
    : '';

  return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}" data-price="${product.price}" data-material="${product.material}">
      <div class="product-card-media">
        <a href="product.html?id=${product.id}" class="product-card-link" aria-label="View ${product.name}">
          <img src="${product.images[0]}" alt="${product.name} - ${product.category} Furniture" loading="lazy" class="product-image-main">
          ${product.images[1] ? `<img src="${product.images[1]}" alt="${product.name} Interior Angle" loading="lazy" class="product-image-hover">` : ''}
        </a>
        ${badgeHTML}
        <button class="btn-wishlist ${inWish ? 'active' : ''}" data-product-id="${product.id}" aria-label="Save to Wishlist" title="Save to Wishlist">
          <svg class="heart-icon" viewBox="0 0 24 24" width="18" height="18">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <div class="product-card-actions">
          <button type="button" class="btn-quick-view" data-product-id="${product.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Quick View
          </button>
          <button type="button" class="btn-card-add-cart" data-product-id="${product.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          <div class="stars" aria-label="${product.rating} stars">
            ★ ★ ★ ★ ★
          </div>
          <span class="rating-val">${product.rating} (${product.reviewsCount})</span>
        </div>
        <div class="product-price-row">
          <span class="price-current">${formatPKR(product.price)}</span>
          ${saleHTML}
        </div>
      </div>
    </article>
  `;
}

// ==========================================================================
// QUICK VIEW MODAL
// ==========================================================================

function openQuickViewModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modalEl = document.getElementById("quick-view-modal");
  if (!modalEl) return;

  const colorSwatchesHTML = (product.colors || []).map((c, i) => `
    <button type="button" class="swatch-btn ${i === 0 ? 'selected' : ''}" data-color-name="${c.name}" style="background-color: ${c.hex};" title="${c.name}">
      <span class="sr-only">${c.name}</span>
    </button>
  `).join('');

  const sizesHTML = (product.sizes || []).map((s, i) => `
    <button type="button" class="size-pill-btn ${i === 0 ? 'selected' : ''}" data-size-label="${s.label}" data-price-delta="${s.priceDelta || 0}">
      ${s.label}
    </button>
  `).join('');

  modalEl.querySelector(".modal-body-container").innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-product-media">
        <div class="modal-main-image-wrap">
          <img id="qv-main-img" src="${product.images[0]}" alt="${product.name}">
        </div>
        ${product.images.length > 1 ? `
          <div class="modal-thumb-row">
            ${product.images.map((img, i) => `
              <button type="button" class="modal-thumb-btn ${i === 0 ? 'active' : ''}" data-img="${img}">
                <img src="${img}" alt="Angle ${i+1}">
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>
      <div class="modal-product-info">
        <span class="modal-category">${product.category}</span>
        <h2 class="modal-product-title">${product.name}</h2>
        <div class="modal-rating">
          <span class="stars">★ ★ ★ ★ ★</span>
          <span>${product.rating} (${product.reviewsCount} customer reviews)</span>
        </div>
        <div class="modal-price-wrap">
          <span class="modal-price" id="qv-display-price">${formatPKR(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPKR(product.originalPrice)}</span>` : ''}
        </div>
        <p class="modal-desc">${product.shortDesc}</p>
        
        <div class="modal-options-block">
          <div class="option-label">Color: <strong id="qv-selected-color-name">${product.colors[0]?.name || 'Standard'}</strong></div>
          <div class="swatch-group" id="qv-colors-group">
            ${colorSwatchesHTML}
          </div>
        </div>

        ${product.sizes && product.sizes.length > 0 ? `
          <div class="modal-options-block">
            <div class="option-label">Size / Configuration: <strong id="qv-selected-size-label">${product.sizes[0].label}</strong></div>
            <div class="size-group" id="qv-sizes-group">
              ${sizesHTML}
            </div>
          </div>
        ` : ''}

        <div class="modal-actions-block">
          <div class="qty-selector">
            <button type="button" class="qty-btn" id="qv-qty-minus" aria-label="Decrease">&minus;</button>
            <input type="number" id="qv-qty-input" value="1" min="1" max="99" readonly>
            <button type="button" class="qty-btn" id="qv-qty-plus" aria-label="Increase">+</button>
          </div>
          <button type="button" class="btn btn-primary btn-add-cart-qv" id="qv-add-cart-btn">
            Add to Cart
          </button>
        </div>

        <div class="modal-secondary-actions">
          <button type="button" class="btn-whatsapp-inquire" id="qv-whatsapp-inquire-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.07 16.3C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.69C8.02 10.9 8.9 12.07 9.02 12.24C9.15 12.4 10.74 14.86 13.18 15.91C13.76 16.16 14.21 16.31 14.56 16.42C15.14 16.61 15.67 16.58 16.09 16.52C16.56 16.45 17.53 15.93 17.73 15.36C17.94 14.79 17.94 14.3 17.88 14.2C17.82 14.1 17.65 14.04 17.39 13.91C17.13 13.79 15.86 13.16 15.63 13.08C15.39 12.99 15.22 12.95 15.05 13.2C14.88 13.45 14.39 14.04 14.24 14.2C14.09 14.37 13.95 14.4 13.69 14.27C13.43 14.15 12.6 13.87 11.61 12.99C10.84 12.3 10.32 11.45 10.17 11.2C10.02 10.95 10.15 10.81 10.28 10.68C10.4 10.56 10.55 10.37 10.68 10.22C10.81 10.07 10.85 9.96 10.94 9.79C11.03 9.62 10.98 9.48 10.92 9.35C10.86 9.23 10.37 8.03 10.17 7.54C9.97 7.07 9.77 7.13 9.62 7.12C9.48 7.12 9.31 7.12 9.14 7.12L9.53 7.34Z"/></svg>
            WhatsApp Inquiry
          </button>
          <a href="product.html?id=${product.id}" class="modal-view-full-details">
            Full Details &amp; Dimensions &rarr;
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach interactive events inside modal
  let selectedColor = product.colors[0]?.name || "Standard";
  let selectedSize = product.sizes && product.sizes[0] ? product.sizes[0] : { label: "Standard", priceDelta: 0 };
  let currentQty = 1;

  // Thumbnails
  modalEl.querySelectorAll(".modal-thumb-btn").forEach(thumb => {
    thumb.addEventListener("click", () => {
      modalEl.querySelectorAll(".modal-thumb-btn").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const imgUrl = thumb.getAttribute("data-img");
      modalEl.querySelector("#qv-main-img").src = imgUrl;
    });
  });

  // Color Swatches
  modalEl.querySelectorAll("#qv-colors-group .swatch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modalEl.querySelectorAll("#qv-colors-group .swatch-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedColor = btn.getAttribute("data-color-name");
      modalEl.querySelector("#qv-selected-color-name").textContent = selectedColor;
    });
  });

  // Sizes & Price delta
  modalEl.querySelectorAll("#qv-sizes-group .size-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modalEl.querySelectorAll("#qv-sizes-group .size-pill-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      const label = btn.getAttribute("data-size-label");
      const delta = Number(btn.getAttribute("data-price-delta")) || 0;
      selectedSize = { label, priceDelta: delta };
      modalEl.querySelector("#qv-selected-size-label").textContent = label;
      
      const newPrice = product.price + delta;
      modalEl.querySelector("#qv-display-price").textContent = formatPKR(newPrice);
    });
  });

  // Quantity controls
  const qtyInput = modalEl.querySelector("#qv-qty-input");
  modalEl.querySelector("#qv-qty-minus").addEventListener("click", () => {
    if (currentQty > 1) {
      currentQty--;
      qtyInput.value = currentQty;
    }
  });
  modalEl.querySelector("#qv-qty-plus").addEventListener("click", () => {
    currentQty++;
    qtyInput.value = currentQty;
  });

  // Add to cart inside modal
  modalEl.querySelector("#qv-add-cart-btn").addEventListener("click", () => {
    addToCart(product.id, selectedColor, selectedSize, currentQty);
    closeQuickViewModal();
  });

  // WhatsApp inquiry inside modal
  modalEl.querySelector("#qv-whatsapp-inquire-btn").addEventListener("click", () => {
    triggerProductInquiry(product, selectedColor, selectedSize.label);
  });

  // Open modal
  modalEl.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeQuickViewModal() {
  const modalEl = document.getElementById("quick-view-modal");
  if (modalEl) {
    modalEl.classList.remove("active");
  }
  document.body.classList.remove("modal-open");
}

// ==========================================================================
// WHATSAPP INQUIRY GENERATOR (Product Specific)
// ==========================================================================

function triggerProductInquiry(product, color = "Standard", size = "Standard") {
  const finalPrice = product.price;
  
  let sizeText = "";
  if (size && size !== "Standard") {
    sizeText = `\nSize: ${size}`;
  }

  const rawMessage = `Hello Nestora,

I am interested in this product:

Product: ${product.name}
Price: ${formatPKR(finalPrice)}
Color: ${color}${sizeText}

Is this product available?

Thank you.`;

  const encoded = encodeURIComponent(rawMessage);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

// ==========================================================================
// WHATSAPP ORDER CONFIRMATION FLOW (Checkout)
// ==========================================================================

function generateOrderNumber() {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `NST-2026-${randomSuffix}`;
}

function sendWhatsAppOrder(orderDetails) {
  const { customer, items, subtotal, delivery, total, orderNumber } = orderDetails;

  let itemsListText = "";
  items.forEach((item, index) => {
    itemsListText += `\n${index + 1}. ${item.name}\nColor: ${item.color || 'Standard'}${item.size && item.size !== 'Standard' ? `\nSize: ${item.size}` : ''}\nQuantity: ${item.qty}\nPrice: ${formatPKR(item.price * item.qty)}\n`;
  });

  const notesText = customer.notes && customer.notes.trim() !== "" ? customer.notes.trim() : "None";

  const message = `Hello Nestora,

I would like to place an order.

Order Reference: ${orderNumber}

Customer Details:
Name: ${customer.fullName}
Phone: ${customer.phone}
WhatsApp: ${customer.whatsapp || customer.phone}
City: ${customer.city}
Area: ${customer.area}
Address: ${customer.address}

Order:
${itemsListText}
Subtotal: ${formatPKR(subtotal)}
Delivery: ${formatPKR(delivery)}

Total: ${formatPKR(total)}

Order Notes:
${notesText}

Please confirm my order.

Thank you,
Nestora Customer`;

  // Encode for WhatsApp URI
  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

  // Store last order in localStorage for confirmation screen
  try {
    localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(orderDetails));
  } catch (e) {}

  // Open in new tab
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

// ==========================================================================
// SEARCH OVERLAY ENGINE
// ==========================================================================

function initSearchOverlay() {
  const overlay = document.getElementById("search-overlay");
  const openBtns = document.querySelectorAll(".btn-open-search");
  const closeBtn = document.getElementById("btn-close-search");
  const searchInput = document.getElementById("site-search-input");
  const resultsContainer = document.getElementById("search-results-grid");

  if (!overlay || !searchInput) return;

  function openSearch() {
    overlay.classList.add("active");
    document.body.classList.add("modal-open");
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
    searchInput.value = "";
    if (resultsContainer) resultsContainer.innerHTML = "";
  }

  openBtns.forEach(btn => btn.addEventListener("click", openSearch));
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeSearch();
    }
  });

  // Dynamic filter as user types
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!resultsContainer) return;

    if (q.length < 2) {
      resultsContainer.innerHTML = `
        <div class="search-empty-prompt">
          <p>Type at least 2 characters to search across our luxury collections...</p>
        </div>
      `;
      return;
    }

    const matches = products.filter(p => {
      return p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.material.toLowerCase().includes(q) ||
             p.shortDesc.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <p class="no-res-title">No products found</p>
          <p class="no-res-subtitle">We couldn't find matches for "${e.target.value}". Try searching "sofa", "bed", "table", or "dining".</p>
        </div>
      `;
    } else {
      resultsContainer.innerHTML = `
        <div class="search-count-header">${matches.length} piece${matches.length > 1 ? 's' : ''} found:</div>
        <div class="search-cards-grid">
          ${matches.map(p => `
            <a href="product.html?id=${p.id}" class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('active')">
              <img src="${p.images[0]}" alt="${p.name}">
              <div class="search-result-info">
                <span class="sr-category">${p.category}</span>
                <span class="sr-title">${p.name}</span>
                <span class="sr-price">${formatPKR(p.price)}</span>
              </div>
            </a>
          `).join('')}
        </div>
      `;
    }
  });
}

// ==========================================================================
// FAQ ACCORDION ENGINE
// ==========================================================================

function initFaqAccordions() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-question");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      
      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const ans = other.querySelector(".faq-answer");
          if (ans) ans.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove("active");
        const ans = item.querySelector(".faq-answer");
        if (ans) ans.style.maxHeight = null;
      } else {
        item.classList.add("active");
        const ans = item.querySelector(".faq-answer");
        if (ans) ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });
}

// ==========================================================================
// MOBILE NAVIGATION & STICKY HEADER
// ==========================================================================

function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle-btn");
  const mobileMenu = document.querySelector(".mobile-nav-drawer");
  const closeMenu = document.querySelector(".btn-close-mobile-nav");
  const backdrop = document.querySelector(".mobile-nav-backdrop");

  function openNav() {
    if (mobileMenu) mobileMenu.classList.add("open");
    if (backdrop) backdrop.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeNav() {
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (backdrop) backdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  if (navToggle) navToggle.addEventListener("click", openNav);
  if (closeMenu) closeMenu.addEventListener("click", closeNav);
  if (backdrop) backdrop.addEventListener("click", closeNav);

  // ---- Active Nav Link Detection ----
  // Uses full href (pathname + search) for category links, pathname-only for plain pages.
  // This ensures "Living Room" wins over "Shop" when ?category=Living+Room is in the URL.
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentSearch = window.location.search; // e.g. "?category=Living+Room"

  const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-links a");

  allNavLinks.forEach(link => {
    link.classList.remove("active");

    const linkHref = link.getAttribute("href") || "";
    const linkUrl = new URL(linkHref, window.location.href);
    const linkPath = linkUrl.pathname.split("/").pop();
    const linkSearch = linkUrl.search;

    if (linkSearch) {
      // For links that include a query string (e.g. ?category=...), require full match
      if (linkPath === currentPath && linkSearch === currentSearch) {
        link.classList.add("active");
      }
    } else {
      // For plain page links, match on pathname only — but NOT if the current URL
      // has a query string that would be better matched by a more specific link above.
      // Check if any more-specific (query-bearing) link already matched.
      const hasSpecificMatch = [...allNavLinks].some(l => {
        const lUrl = new URL(l.getAttribute("href") || "", window.location.href);
        return lUrl.search && lUrl.pathname.split("/").pop() === currentPath && lUrl.search === currentSearch;
      });

      if (!hasSpecificMatch && linkPath === currentPath) {
        link.classList.add("active");
      }
    }
  });

  // Sticky header behavior
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }, { passive: true });
  }

  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================================================
// NEWSLETTER HANDLER
// ==========================================================================

function initNewsletter() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value.trim()) {
        showToast("✓ Thanks for subscribing! Welcome to the Nestora family.");
        input.value = "";
      }
    });
  });
}

// ==========================================================================
// GLOBAL EVENT DELEGATION (Cards, Quick View, Wishlist, Cart)
// ==========================================================================

function initGlobalDelegates() {
  document.addEventListener("click", (e) => {
    // Quick View button
    const qvBtn = e.target.closest(".btn-quick-view");
    if (qvBtn) {
      e.preventDefault();
      const pid = qvBtn.getAttribute("data-product-id");
      openQuickViewModal(pid);
      return;
    }

    // Wishlist button
    const wlBtn = e.target.closest(".btn-wishlist");
    if (wlBtn) {
      e.preventDefault();
      e.stopPropagation();
      const pid = wlBtn.getAttribute("data-product-id");
      toggleWishlist(pid, wlBtn);
      return;
    }

    // Direct Card Add-to-cart button
    const addCartBtn = e.target.closest(".btn-card-add-cart");
    if (addCartBtn) {
      e.preventDefault();
      const pid = addCartBtn.getAttribute("data-product-id");
      const prod = getProductById(pid);
      if (prod) {
        const defaultColor = prod.colors && prod.colors[0] ? prod.colors[0].name : "Standard";
        const defaultSize = prod.sizes && prod.sizes[0] ? prod.sizes[0] : { label: "Standard", priceDelta: 0 };
        addToCart(prod.id, defaultColor, defaultSize, 1);
      }
      return;
    }

    // Modal close button or clicking outside
    const modalClose = e.target.closest(".modal-close-btn");
    if (modalClose) {
      closeQuickViewModal();
      return;
    }

    const modal = document.getElementById("quick-view-modal");
    if (modal && e.target === modal) {
      closeQuickViewModal();
      return;
    }
  });

  // Modal Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickViewModal();
    }
  });
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS
// ==========================================================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".product-card, .category-card, .feature-box, .testimonial-card, " +
    ".faq-item, .inspiration-card, .contact-info-card, .about-editorial-grid"
  );

  revealElements.forEach((el, index) => {
    el.classList.add("reveal-on-scroll");
    // Stagger delays for grid children
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.querySelectorAll(":scope > *"));
      const i = siblings.indexOf(el);
      if (i > 0 && i <= 6) {
        el.classList.add(`reveal-delay-${i}`);
      }
    }
  });

  if (!("IntersectionObserver" in window)) {
    // Fallback: just show everything
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// LAZY IMAGE FADE-IN
// ==========================================================================

function initLazyImageFade() {
  if (!("IntersectionObserver" in window)) return;

  const lazyImgs = document.querySelectorAll("img[loading='lazy']");
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
        if (img.complete) img.classList.add("loaded");
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: "200px 0px" });

  lazyImgs.forEach(img => imgObserver.observe(img));
}

// ==========================================================================
// CART BADGE POP ANIMATION TRIGGER
// ==========================================================================

function triggerCartBadgePop() {
  document.querySelectorAll(".badge-count").forEach(el => {
    el.classList.remove("pop");
    void el.offsetWidth; // Reflow to restart animation
    el.classList.add("pop");
  });
}

// Override addToCart to trigger badge pop
const _originalAddToCart = addToCart;
// Wrap addToCart to trigger badge pop animation post-add
document.addEventListener("nestora:cart:updated", () => {
  triggerCartBadgePop();
});

// ==========================================================================
// MOBILE STICKY BUY BAR (Product Pages)
// ==========================================================================

function initMobileStickBuyBar() {
  const productTitle = document.getElementById("p-title");
  if (!productTitle) return; // Only on product.html

  const existingBar = document.querySelector(".mobile-sticky-buy-bar");
  if (existingBar) return;

  const bar = document.createElement("div");
  bar.className = "mobile-sticky-buy-bar";
  bar.innerHTML = `
    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-detail-whatsapp-inquire')?.click()">
      Inquire
    </button>
    <button type="button" class="btn btn-primary" onclick="document.getElementById('btn-detail-add-cart')?.click()">
      Add to Cart
    </button>
  `;

  document.body.appendChild(bar);

  // Show/hide based on whether native buttons are in view
  const nativeBuyRow = document.querySelector(".purchase-row");
  if (!nativeBuyRow) return;

  const rowObserver = new IntersectionObserver((entries) => {
    const inView = entries[0].isIntersecting;
    bar.style.display = inView ? "none" : "flex";
    document.body.classList.toggle("has-sticky-buy-bar", !inView);
  }, { threshold: 0.2 });

  rowObserver.observe(nativeBuyRow);
}

// ==========================================================================
// SCROLL INDICATOR ARROW (Hero)
// ==========================================================================

function initHeroScrollIndicator() {
  const hero = document.querySelector(".hero-section");
  if (!hero) return;

  const indicator = document.createElement("div");
  indicator.className = "hero-scroll-indicator";
  indicator.setAttribute("aria-hidden", "true");
  indicator.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  `;
  indicator.style.cursor = "pointer";
  indicator.addEventListener("click", () => {
    const target = document.getElementById("cat-heading") || document.getElementById("featured");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
  hero.appendChild(indicator);

  // Hide on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      indicator.style.opacity = "0";
      indicator.style.pointerEvents = "none";
    } else {
      indicator.style.opacity = "1";
      indicator.style.pointerEvents = "auto";
    }
  }, { passive: true });
}

// ==========================================================================
// INITIALIZATION ON DOM READY
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSearchOverlay();
  initFaqAccordions();
  initNewsletter();
  initGlobalDelegates();
  updateCartBadges();
  updateWishlistUI();

  // Enhanced UX
  initScrollReveal();
  initLazyImageFade();
  initHeroScrollIndicator();

  // Only on mobile viewports
  if (window.innerWidth <= 640) {
    initMobileStickBuyBar();
  }
});
