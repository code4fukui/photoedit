# photoedit
[README.ja.md](README.ja.md)にて日本語のREADMEをご覧ください。

写真から名前やその他の要素を削除するためのツールです。

以下は英語の README マークダウンチャンクを日本語に翻訳したものです:

## 機能
- 指定されたボックスの高さ、開始行、飛ばす行の高さを使用して、名前やその他の要素のない写真を抽出します
- JPEG 形式をサポートしています

## 使用方法
1. `cutNames.js`ファイルから`cutNames`関数をインポートします:

   ```javascript
   import { cutNames } from "./cutNames.js";
   ```

2. `cutNames`関数を次のパラメーターで呼び出します:
   - `jpgfn`: 入力JPEGファイルのパス
   - `dstfn`: 削除された要素を含まない出力JPEGファイルのパス
   - `boxHeight`: 抽出するボックスの高さ
   - `skipLineStart`: スキップする開始行
   - `skipLineHeight`: スキップする行の高さ

   例:
   ```javascript
   cutNames("kosen-incol.jpg", "kosen-incol-noname.jpg", 282, 240, 44);
   ```

Here is the markdown chunk translated to Japanese:

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
