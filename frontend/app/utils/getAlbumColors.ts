const ALBUM_COLORS = {
  "Depeche Mode": {
    "violator": "#5c1212",
    "music-for-the-masses": "#597140",
    "some-great-reward": "#432a80",
    "construction-time-again": "#7d360f",
    "speak-spell": "#c83b3b",
  },
  "The Cure": {
    "kiss-me-kiss-me-kiss-me": "#a14545",
    "boys-dont-cry": "#3d60bf",
    "wish": "#541b1b",
    "disintegration": "#285a76",
    "the-head-on-the-door": "#2aa49c",
    "seventeen-seconds": "#1c195a",
    "japanese-whispers": "#244416",
  },
  "Three Days Grace": {
    "one-x": "#8b0000",
  },
  "Crystal Castles": {
    "crystal-castles": "#2b2b2b",
    "crystal-castles-ii": "#000000",
    "iii": "#4a148c",
  },
  "HIM": {
    "razorblade-romance": "#ff007f",
    "dark-light": "#1a237e",
    "love-metal": "#b71c1c",
    "greatest-lovesongs-vol-666": "#4e342e",
    "screamworks": "#00bcd4",
  },
  "Lady Gaga": {
    "the-fame": "#5c3e86",
    "born-this-way": "#877634",
    "chromatica": "#722461",
  },
  "General": {
    "am": "#000000",
    "parachutes": "#fdd835",
    "hot-fuss": "#b71c1c",
    "default": "#1e1e1e",
  }
};

export const getSongColorByArtist = (artistName: string, album: string): string => {
  const artistColors = ALBUM_COLORS[artistName as keyof typeof ALBUM_COLORS];

  if (artistColors) {
    const color = artistColors[album as keyof typeof artistColors];
    if (color) return color;
  }

  return ALBUM_COLORS["General"][album as keyof typeof ALBUM_COLORS["General"]] || ALBUM_COLORS["General"].default;
};