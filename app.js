const colors = ["green", "red", "yellow", "blue", "orange",
  "cyan", "white", "black", "teal", "gray", "brown", "darkblue",
  "darkred", "darkgreen", "darkorange", "aqua", "blueviolet",
  "chocolate", "gold", "lawngreen", "tan", "seagreen", "darkgray",
  "violet", "darkviolet", "purple", "aliceblue", "antiquewhite",
  "aquamarine", "azure", "beige", "bisque", "blanchedalmond",
  "burlywood", "cadetblue", "chartreuse", "coral", "cornflowerblue",
  "cornsilk", "crimson", "darkcyan", "darkgoldenrod", "darkkhaki",
  "darkmagenta", "darkolivegreen", "darkorchid", "darksalmon",
  "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise",
  "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
  "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
  "goldenrod", "greenyellow", "honeydrew", "hotpink", "indianred",
  "indigo", "ivory", "khaki", "lavender", "lavenderbush", "lemonchiffon",
  "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
  "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen",
  "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow",
  "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine",
  "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
  "mediumslateblue", "mediumspringgreen", "mediumturquoise",
  "mediumvioletred", "midnightblue", "mintcream", "mistyrose",
  "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab",
  "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
  "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum",
  "powderblue", "purple", "rebeccapurple", "rosybrown", "royalblue",
  "saddlebrown", "salmon", "sandybrown", "seashell", "sienna", "silver",
  "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue",
  "thistle", "tomato", "turquoise", "wheat", "whitesmoke", "yellowgreen"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  //Get random number between 0 and (colors.length - 1)
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}