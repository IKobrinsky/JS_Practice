const mapColors = new Map();
mapColors.set("green", [0,255,0]);
mapColors.set("blue", [0,0,255]);
mapColors.set("red", [255,0,0]);

mapColors.forEach((value, key, map) => {
    console.log(`Ключ - ${key}, значние - ${value}`);
  });