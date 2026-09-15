/* ==========================================================================
   NESTORA — products.js
   Central product data + small helpers shared by shop.html, product.html
   and index.html. No framework — plain data + DOM.
   ========================================================================== */

const NESTORA_PRODUCTS = [
  {
    id: "oslo-3-seater-sofa",
    name: "Oslo 3-Seater Sofa",
    category: "Sofas",
    price: 89900,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Designed with clean Scandinavian-inspired lines, deep cushioning and a durable fabric finish. The Oslo brings quiet comfort to any living room without shouting for attention.",
    material: "Premium woven fabric, solid Sheesham wood frame",
    dimensions: "220 × 90 × 85 cm",
    colors: ["Beige", "Charcoal", "Sage"],
    bestseller: true
  },
  {
    id: "verona-lounge-chair",
    name: "Verona Lounge Chair",
    category: "Chairs",
    price: 39500,
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A gently curved backrest and tapered wooden legs give the Verona a quiet, sculptural presence — built for long, unhurried afternoons.",
    material: "Boucle upholstery, solid oak legs",
    dimensions: "78 × 82 × 90 cm",
    colors: ["Ivory", "Terracotta"],
    bestseller: true
  },
  {
    id: "milano-coffee-table",
    name: "Milano Coffee Table",
    category: "Tables",
    price: 24900,
    img: "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A low, honest silhouette in solid walnut — room to rest a tray, a book, and the day's first cup of chai.",
    material: "Solid walnut veneer, tempered glass top",
    dimensions: "110 × 60 × 40 cm",
    colors: ["Walnut"],
    bestseller: true
  },
  {
    id: "nordic-dining-table",
    name: "Nordic Dining Table",
    category: "Dining",
    price: 74900,
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Seats six comfortably. A wide, honest plank top with a matte oil finish that only gets better with years of family dinners.",
    material: "Solid Sheesham wood",
    dimensions: "180 × 90 × 76 cm",
    colors: ["Natural Wood", "Espresso"],
    bestseller: true
  },
  {
    id: "haven-king-bed",
    name: "Haven King Bed",
    category: "Beds",
    price: 119900,
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A tall upholstered headboard and a low platform frame — the Haven is built to make a bedroom feel like the quietest room in the house.",
    material: "Linen-blend upholstery, engineered wood frame",
    dimensions: "200 × 200 × 110 cm",
    colors: ["Oatmeal", "Charcoal"],
    bestseller: true
  },
  {
    id: "nova-tv-console",
    name: "Nova TV Console",
    category: "Storage",
    price: 49900,
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Slim hardware, soft-close drawers and a floating profile that keeps your media wall looking calm and uncluttered.",
    material: "Engineered wood, matte laminate finish",
    dimensions: "160 × 40 × 45 cm",
    colors: ["Walnut", "Charcoal"],
    bestseller: true
  },
  {
    id: "aria-accent-chair",
    name: "Aria Accent Chair",
    category: "Chairs",
    price: 34900,
    img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A single confident curve in velvet — the kind of chair a room gets built around.",
    material: "Velvet upholstery, powder-coated steel legs",
    dimensions: "70 × 75 × 78 cm",
    colors: ["Emerald", "Rust", "Ivory"],
    bestseller: true
  },
  {
    id: "urban-side-table",
    name: "Urban Side Table",
    category: "Tables",
    price: 14900,
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Small enough to tuck beside any armchair, sturdy enough to hold your coffee and your keys.",
    material: "Solid mango wood",
    dimensions: "45 × 45 × 50 cm",
    colors: ["Natural Wood", "Black"],
    bestseller: true
  },
  {
    id: "capri-2-seater-sofa",
    name: "Capri 2-Seater Sofa",
    category: "Sofas",
    price: 64900,
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A compact companion sofa for smaller living rooms and reading corners, without compromising on comfort.",
    material: "Premium fabric, solid wood frame",
    dimensions: "165 × 88 × 85 cm",
    colors: ["Sage", "Ivory"],
    bestseller: false
  },
  {
    id: "marlow-sectional-sofa",
    name: "Marlow Sectional Sofa",
    category: "Sofas",
    price: 149900,
    img: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "An L-shaped anchor for open-plan living rooms, with a deep chaise built for lazy Sunday afternoons.",
    material: "Performance fabric, kiln-dried hardwood frame",
    dimensions: "280 × 165 × 85 cm",
    colors: ["Charcoal", "Beige"],
    bestseller: false
  },
  {
    id: "dune-dining-chair",
    name: "Dune Dining Chair",
    category: "Dining",
    price: 12900,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Woven cane back, solid legs — a dining chair that looks equally at home around a family table or in a reading nook.",
    material: "Cane webbing, solid beech frame",
    dimensions: "48 × 55 × 82 cm",
    colors: ["Natural"],
    bestseller: false
  },
  {
    id: "linen-lounge-sofa",
    name: "Linen Lounge Sofa",
    category: "Sofas",
    price: 94900,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Relaxed linen upholstery over a generously scaled frame — built for stretching out, not just sitting.",
    material: "Washed linen, solid wood frame",
    dimensions: "230 × 95 × 80 cm",
    colors: ["Oatmeal"],
    bestseller: false
  },
  {
    id: "birch-bunk-bed",
    name: "Birch Kids Bunk Bed",
    category: "Beds",
    price: 84900,
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A sturdy, rounded-edge bunk bed built to keep up with growing kids and busy households.",
    material: "Solid pine",
    dimensions: "200 × 100 × 160 cm",
    colors: ["Natural Wood", "White"],
    bestseller: false
  },
  {
    id: "wren-storage-bed",
    name: "Wren Storage Bed",
    category: "Beds",
    price: 99900,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A hydraulic lift-up base hides a full-size storage compartment beneath a clean, upholstered frame.",
    material: "Linen-blend upholstery, engineered wood",
    dimensions: "195 × 210 × 100 cm",
    colors: ["Grey", "Oatmeal"],
    bestseller: false
  },
  {
    id: "kessler-office-desk",
    name: "Kessler Office Desk",
    category: "Storage",
    price: 44900,
    img: "https://images.unsplash.com/photo-1587316745621-e63b6f9a9c46?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587316745621-e63b6f9a9c46?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A slim writing desk with a single soft-close drawer — enough surface for a laptop, a lamp, and a plant.",
    material: "Solid oak, powder-coated steel legs",
    dimensions: "120 × 60 × 75 cm",
    colors: ["Oak", "Black"],
    bestseller: false
  },
  {
    id: "atlas-bookshelf",
    name: "Atlas Bookshelf",
    category: "Storage",
    price: 54900,
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Open, asymmetric shelving for books, plants and the small objects that make a room feel lived-in.",
    material: "Engineered wood, solid wood legs",
    dimensions: "90 × 35 × 180 cm",
    colors: ["Walnut", "Black"],
    bestseller: false
  },
  {
    id: "terra-table-lamp",
    name: "Terra Ceramic Table Lamp",
    category: "Décor",
    price: 8900,
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A hand-finished ceramic base with a warm linen shade — soft, ambient light for reading corners.",
    material: "Ceramic, linen shade",
    dimensions: "28 × 28 × 48 cm",
    colors: ["Sand", "Charcoal"],
    bestseller: false
  },
  {
    id: "hana-floor-mirror",
    name: "Hana Floor Mirror",
    category: "Décor",
    price: 19900,
    img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A gently arched, full-length mirror in a slim wooden frame — leans against any wall.",
    material: "Solid wood frame, mirrored glass",
    dimensions: "50 × 3 × 165 cm",
    colors: ["Natural Wood", "Black"],
    bestseller: false
  },
  {
    id: "willow-jute-rug",
    name: "Willow Jute Rug",
    category: "Décor",
    price: 16900,
    img: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Hand-woven natural jute with a subtle herringbone weave — grounds a room without overwhelming it.",
    material: "100% natural jute",
    dimensions: "200 × 300 cm",
    colors: ["Natural"],
    bestseller: false
  }
];

/* ---- helpers -------------------------------------------------------- */

function nestoraFormatPrice(amount) {
  return "Rs. " + amount.toLocaleString("en-PK");
}

function nestoraGetProduct(id) {
  return NESTORA_PRODUCTS.find((p) => p.id === id);
}

function nestoraGetBestsellers() {
  return NESTORA_PRODUCTS.filter((p) => p.bestseller);
}
