# Denoで作成するCLIツールのサンプル

以下のコマンドを実行するとgrepコマンドのようにファイルを読み込みファイル内の文字列を検索する

deno run --allow-read main.ts [検索したい文字列] [検索対象ディレクトリ]

以下コマンドでdeno_sample_grepをコマンドとして使用できるようにする

deno install --allow-read main.ts

.deno/bin以下にdeno run --allow-read main.tsを実行するシェルスクリプトを生成する