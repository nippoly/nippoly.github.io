# 概要
nippolyにLPを作成する

## 始め方
1. 大元のフォルダを一個作る
1. 一個クローンしてフォルダの名前をpublicに変更する
1. もう一回クローンする。こっちのブランチをdevに変更する
1. devブランチにしてあるほうでgulpをビルドする
  1. nodeをダウンロード
  1. `npm install gulp -g`
  1. `npm install`
  1. `gulp`

これでオートコンパイルとオートリロードされていれば大丈夫です。

## 対応してること
ES6 / SCSS / のコンパイル

## 開発のやり方

- html publicのindexに直接書く
- css src/stylesから適宜
- js  src/js/index.jsが基本で適宜
