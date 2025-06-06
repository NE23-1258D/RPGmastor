# ベースイメージとして軽量なNginxを使用
FROM nginx:alpine

# コンテナ内のNginxのデフォルト設定ファイルを削除
RUN rm /etc/nginx/conf.d/default.conf

# ローカルのHTML、CSS、JS、画像ファイルをコンテナ内のNginxのWebルートにコピー
# Webサイトのファイルがmy-rpg-siteディレクトリの直下にある場合
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./script.js /usr/share/nginx/html/script.js
COPY ./irasuto.png /usr/share/nginx/html/irasuto.png
COPY ./yousei.png /usr/share/nginx/html/yousei.png

# Nginxの設定ファイルをコピー (新しいファイルを作成します)
COPY nginx.conf /etc/nginx/conf.d/

# Nginxをフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]