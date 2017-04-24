# 概要
nippolyにLPを作成する

## 始め方
- nodeをダウンロード
- `npm install gulp -g`
- `npm install`
- `gulp`
これでオートコンパイルとオートリロードされていれば大丈夫です。

## 対応してること
ES6 / SCSS / のコンパイル

## 開発のやり方

- 大元のフォルダを一個作る
- 一個クローンしてフォルダの名前をpublicに変更する
- もう一回クローンする。こっちのブランチをdevに変更する
- devブランチにしてあるほうでgulpを走らせる

html publicのindexに直接書く
css src/stylesから適宜
js  src/js/index.jsが基本で適宜
