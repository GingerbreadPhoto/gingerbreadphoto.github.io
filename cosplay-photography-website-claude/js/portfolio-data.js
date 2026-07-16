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
                   file → Properties → Details, or just omit both.
   - cosplayer   : the cosplayer's name/handle, e.g. "@stardust.cos"
   - character   : who they're cosplaying, e.g. "Frieren"
   - event       : where it was shot, e.g. "Comic Con Vienna 2025" or
                   "Location shoot"

   Captions (on hover and in the photo viewer) show: cosplayer first,
   then character, then event. Fields left as "" are simply skipped.

   The first two entries are filled in as EXAMPLES (verify they're right!).
   Everything below is tagged "EDIT ME" — replace with your real info.
   ============================================================================ */

const PORTFOLIO = [
  {
    src: "Assets/images/portfolio/DSC09270-Edit-Edit.jpg",
    w: 5144, h: 3429,
    cosplayer: "@mila.jaeger_coser",
    character: "Frieren (Frieren: Beyond Journey's End)",
    event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC00615-Edit-Edit.jpg",
    w: 3872, h: 5808,
    cosplayer: "@asti_cosplays",
    character: "Fischl (Genshin Impact)",
    event: "Game City Vienna 225",
  },
  {
    src: "Assets/images/portfolio/DSC00741-Edit-Edit.jpg",
    w: 4000, h: 6000,
    cosplayer: "@ameriix_cos", 
    character: "Rias Gremory (Highschool DxD)", 
    event: "Private shoot",
  },
  {
    src: "Assets/images/portfolio/DSC00803-Edit-Edit-nooniric.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5783, h: 3855,
    cosplayer: "@menniphi",
    character: "Yuki Kuran (Vampire Knight)", 
    event: "Game City Vienna 20025",
  },
  {
    src: "Assets/images/portfolio/DSC01336-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 4000, h: 6000,
    cosplayer: "@_sayory_", character: "Chen Qianyu (Arknights Endfield)", event: "Dokomi 2026",
  },
  {
    src: "Assets/images/portfolio/DSC01434-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3689, h: 5533,
    cosplayer: "@kyuubivi", character: "Bloom (Winx Club)", event: "Dokomi 2026",
  },
  {
    src: "Assets/images/portfolio/DSC01527-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@mirana_cos", character: "Zero (Drakengard 3)", event: "Dokomi 2026",
  },
  {
    src: "Assets/images/portfolio/DSC01795-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5734, h: 3823,
    cosplayer: "@suika_misa", character: "Regensburg (Azur Lane)", event: "Dokomi 2026",
  },
  {
    src: "Assets/images/portfolio/DSC01893-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5339, h: 3559,
    cosplayer: "@sabrafish & @menace.cosplay", character: "Marcille & Falin (Dungeon Meshi)", event: "Private shoot",
  },
  {
    src: "Assets/images/portfolio/DSC02507-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5719, h: 3813,
    cosplayer: "@sabrafish", character: "Makima (Chainsaw Man)", event: "Private Studio Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC09910-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5719, h: 3813,
    cosplayer: "@kurisutinaforreal", character: "Shizuku Tan (My Dress Up Darling)", event: "Private Location Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC02810-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5573, h: 3715,
    cosplayer: "@adinyan_", character: "Little Mermaid (Goddess of Victory: Nikke)", event: "Private Studio Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC03119-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3921, h: 5882,
    cosplayer: "@faithcosplay", character: "Bayonetta (Bayonetta)", event: "Private Studio Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC03532-Edit-Edit-nowatermark.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@brie.cos", character: "Nicole (Zenless Zone Zero)", event: "Private Location Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC04592-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@sabrafish", character: "Zelda (Legend of Zelda: Echoes of Wisdom)", event: "Private Location Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC04905-Edit-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3715, h: 5572,
    cosplayer: "michal.cosplay", character: "Reina (Tekken 8)", event: "Private Location Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC07918-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "inked.nyx", character: "Aurora (League of Legends)", event: "Private Studio Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC08081-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 6000, h: 4000,
    cosplayer: "@kona_fraubow", character: "Shore Keeper (Wuthering Waves)", event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC08168-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3445, h: 5168,
    cosplayer: "@_sayory_ & @_kisharu_", character: "Tingyun & Fugue (Honkai Star Rail)", event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC08426-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5142, h: 3428,
    cosplayer: "@annie.note", character: "Ganon (Legend of Zelda)", event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC08854-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5493, h: 3662,
    cosplayer: "@menniphi", character: "A2 (Nier: Automata)", event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC08987-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 3949, h: 2633,
    cosplayer: "@its_antartide", character: "Bunny Splicer (BioShock)", event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC09028-Edit-2-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5426, h: 3617,
    cosplayer: "@cata_koo", character: "Caitlyn (Arcane)", event: "Private Location Shoot",
  },
  {
    src: "Assets/images/portfolio/DSC09056-Edit-Edit.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5410, h: 3607,
    cosplayer: "@pixapepi & @fluremingu", character: "Koleda & Nicole (Zenless Zone Zero)", event: "PixelMania 2k25",
  },
  {
    src: "Assets/images/portfolio/DSC09453-Edit-Edit-nowatermark.jpg",
    alt: "EDIT ME: describe the character and scene",
    w: 5699, h: 3799,
    cosplayer: "@goldberry.cosplay", character: "Yor (Spy x Family)", event: "Private Studio Shoot",
  },
];
