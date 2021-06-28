import { JPEG } from "https://taisukef.github.io/jpeg-js-es/JPEG.js";

const cutNamesImage = (img, boxHeight, skipLineStart, skipLineHeight) => {
  const lines = [];
  for (let i = 0; i < img.height; i++) {
    const n = i % boxHeight;
    if (n >= skipLineStart && n < skipLineStart + skipLineHeight) {
      continue;
    }
    lines.push(i);
  }
  
  const width2 = img.width;
  const height2 = lines.length;
  const data2 = new Uint8Array(width2 * height2 * 4);
  const img2 = {
    width: width2,
    height: height2,
    data: data2
  };
  let idx = 0;
  for (let i = 0; i < lines.length; i++) {
    const y = lines[i];
    for (let j = 0; j < width2 * 4; j++) {
      data2[idx++] = img.data[y * width2 * 4 + j];
    }
  }
  return img2;
};

const cutNames = (jpgfn, dstfn, boxHeight, skipLineStart, skipLineHeight) => {
  const jpg = Deno.readFileSync(jpgfn);
  const img = JPEG.decode(jpg);
  console.log(img);
  
  const img2 = cutNamesImage(img, boxHeight, skipLineStart, skipLineHeight);
  const jpg2 = JPEG.encode(img2, 90);
  console.log(jpg2);
  Deno.writeFileSync(dstfn, jpg2.data);
};

export { cutNames, cutNamesImage };



