# photoedit
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A tool for editing photos by removing names or other elements.

## Features
- Extracts a photo without name or other elements using a specified box height, start line, and height of lines to skip
- Supports JPEG format

## Usage
1. Import the `cutNames` function from the `cutNames.js` file:

   ```javascript
   import { cutNames } from "./cutNames.js";
   ```

2. Call the `cutNames` function with the following parameters:
   - `jpgfn`: the input JPEG file path
   - `dstfn`: the output JPEG file path without the removed elements
   - `boxHeight`: the height of the box to extract
   - `skipLineStart`: the starting line to skip
   - `skipLineHeight`: the height of the lines to skip

   Example:
   ```javascript
   cutNames("kosen-incol.jpg", "kosen-incol-noname.jpg", 282, 240, 44);
   ```

## License
This project is licensed under the [MIT License](LICENSE).
