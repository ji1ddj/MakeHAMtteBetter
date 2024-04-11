const body = document.querySelector("body")

const hoge = document.createElement("link")
hoge.setAttribute("rel", "preconnect")
hoge.setAttribute("href", "https://fonts.googleapis.com")
body.appendChild(hoge)

const fuga = document.createElement("link")
fuga.setAttribute("rel", "preconnect")
fuga.setAttribute("href", "https://fonts.gstatic.com")
fuga.setAttribute("crossorigin", "")
body.appendChild(fuga)

const moge = document.createElement("link")
moge.setAttribute("rel", "stylesheet")
moge.setAttribute("href", "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap")
body.appendChild(moge)

const style = document.createElement("style")
style.textContent = 'html[lang="ja"] { font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif; }'
body.appendChild(style)
