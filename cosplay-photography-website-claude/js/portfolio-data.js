/* ============================================================================
   PORTFOLIO DATA — this is the ONLY file you need to edit to manage your
   gallery.

   HOW TO ADD A PHOTO:
   1. Drop the image into  Assets/images/portfolio/
   2. Copy one of the blocks below and fill it in.

   FIELDS:
   - src         : path to the image (keep the folder prefix)
   - alt         : REQUIRED for accessibility/SEO — describe the character
                   and scene, e.g. "Frieren cosplayer walking past a stone
                   wall holding her staff"
   - w, h        : the image's pixel width/height. Lets the browser reserve
                   the right amount of space before the photo loads (no
                   layout jumping). If you don't know them, right-click the
                   file → Properties → Details, or just omit both — the
                   gallery reads the real size once the photo loads and
                   corrects the layout, so a wrong number only causes a brief
                   flicker, never a permanently stretched photo.
   - cosplayer   : the cosplayer's name/handle, e.g. "@stardust.cos"
   - character   : who they're cosplaying, e.g. "Frieren"
   - event       : where it was shot, e.g. "Comic Con Vienna 2025" or
                   "Location shoot"
   - type        : the shoot CATEGORY — this powers the filter buttons on the
                   Portfolio page. Keep the spelling consistent so photos
                   group together. Suggested values:
                     "Convention Shoot"  (shot at a con)
                     "Photo Event"       (dedicated cosplay photo meet)
                     "Private Shoot"     (studio / location commission)
                   Add your own categories freely — a new value automatically
                   becomes a new filter button.

   Captions (on hover and in the photo viewer) show: cosplayer first,
   then character, then event. Fields left as "" are simply skipped.

   NOTE: the `type` values below were auto-filled from each photo's `event`
   as a starting point — adjust any that aren't quite right.
   ============================================================================ */

const PORTFOLIO = [
  {
    src: "Assets/images/portfolio/DSC09232-Edit.jpg",
    w: 5144, h: 3429,
    cosplayer: "@mila.jaeger_coser",
    character: "Frieren (Frieren: Beyond Journey's End)",
    event: "PixelMania 2k25",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC00615-Edit-Edit.jpg",
    w: 3872, h: 5808,
    cosplayer: "@asti_cosplays",
    character: "Fischl (Genshin Impact)",
    event: "Game City Vienna 225",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC00741-Edit-Edit.jpg",
    w: 4000, h: 6000,
    cosplayer: "@ameriix_cos",
    character: "Rias Gremory (Highschool DxD)",
    event: "Private Outdoor shoot",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC00803-Edit-Edit-nooniric.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5783, h: 3855,
    cosplayer: "@menniphi",
    character: "Yuki Kuran (Vampire Knight)",
    event: "Game City Vienna 20025",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC03749-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 4000, h: 6000,
    cosplayer: "@_sayory_", character: "Lynae (Wuthering Waves)", event: "PixelMania 2K26",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC02056-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 4000, h: 6000,
    cosplayer: "@zumz.deni", character: "Aerith (Final Fantasy VII)", event: "PixelMania 2K26",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC01434-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3689, h: 5533,
    cosplayer: "@kyuubivi", character: "Bloom (Winx Club)", event: "Dokomi 2026",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC01527-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@mirana_cos", character: "Zero (Drakengard 3)", event: "Dokomi 2026",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC01795-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5734, h: 3823,
    cosplayer: "@suika_misa", character: "Regensburg (Azur Lane)", event: "Dokomi 2026",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC01893-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5339, h: 3559,
    cosplayer: "@sabrafish & @menace.cosplay", character: "Marcille & Falin (Dungeon Meshi)", event: "Private Outdoor shoot",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC02810-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5573, h: 3715,
    cosplayer: "@adinyan_", character: "Little Mermaid (Goddess of Victory: Nikke)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC02507-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5719, h: 3813,
    cosplayer: "@sabrafish", character: "Makima (Chainsaw Man)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC09453-Edit-Edit-nowatermark.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3827, h: 5740,
    cosplayer: "@goldberry.cosplay", character: "Yor (Spy x Family)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC09272-Edit-Edit-nowatermark.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3658, h: 5487,
    cosplayer: "@goldberry.cosplay", character: "Yor (Spy x Family)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC02035.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 1334, h: 2000,
    cosplayer: "@menace.cosplay", character: "Haruko Haruhara (FLCL)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC09910-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5719, h: 3813,
    cosplayer: "@kurisutinaforreal", character: "Shizuku Tan (My Dress Up Darling)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC03119-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3921, h: 5882,
    cosplayer: "@faithcosplay", character: "Bayonetta (Bayonetta)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC03532-Edit-Edit-nowatermark.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@brie.cos", character: "Nicole (Zenless Zone Zero)", event: "Private Outdoor shoot",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC04905-Edit-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3715, h: 5572,
    cosplayer: "@michal.cosplay", character: "Reina (Tekken 8)", event: "Private Outdoor shoot",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC07918-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "inked.nyx", character: "Aurora (League of Legends)", event: "Private Studio Shoot",
    type: "Studio shoot",
  },
  {
    src: "Assets/images/portfolio/DSC08081-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@kona_fraubow", character: "Shore Keeper (Wuthering Waves)", event: "PixelMania 2k25",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC08168-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3445, h: 5168,
    cosplayer: "@_sayory_ & @_kisharu_", character: "Tingyun & Fugue (Honkai Star Rail)", event: "PixelMania 2k25",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC08426-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5142, h: 3428,
    cosplayer: "@annie.note", character: "Ganon (Legend of Zelda)", event: "PixelMania 2k25",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC08854-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5493, h: 3662,
    cosplayer: "@menniphi", character: "A2 (Nier: Automata)", event: "PixelMania 2k25",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC08987-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3949, h: 2633,
    cosplayer: "@its_antartide", character: "Bunny Splicer (BioShock)", event: "PixelMania 2k25",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC09028-Edit-2-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5426, h: 3617,
    cosplayer: "@cata_koo", character: "Caitlyn (Arcane)", event: "Private Outdoor shoot",
    type: "Location Photoshoot",
  },
  {
    src: "Assets/images/portfolio/DSC03476-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5410, h: 3607,
    cosplayer: "@mirana_cos", character: "MC Dragon (Love and Deep Space)", event: "PixelMania 2k26",
    type: "Location Photoshoot",
  },
];
