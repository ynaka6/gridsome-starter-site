![gridsome-starter-site - スクショ](https://github.com/nakanakamu0828/gridsome-starter-site/blob/master/screenshot.png)

# Default starter for Gridsome
[![Netlify Status](https://api.netlify.com/api/v1/badges/a9b61872-e69b-4ae3-a881-a67309ffcb18/deploy-status)](https://app.netlify.com/sites/gridsome-starter-site/deploys)

Gridsomeの入門としてmarkdown形式のブログを構築しています。
サンプルとして利用できるように改善していきます。

## 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

## 2. Create a Gridsome project

1. `gridsome create gridsome-starter-site` to install default starter </li>
2. `cd gridsome-starter-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌


## 環境変数（.env）
``` bash
$ cat <<EOF > .env
GRIDSOME_JUST_COMMENTS_APY_KEY=
EOF
```

環境変数名    |説明
--------------|----------------------------
GRIDSOME_JUST_COMMENTS_APY_KEY | JustCommentsのAPI Key - ブログへのコメント投稿のサンプルとして用意

# Licence
[MIT](http://opensource.org/licenses/MIT)

# Authors
[@nakanakamu0828](https://twitter.com/nakanakamu0828)



