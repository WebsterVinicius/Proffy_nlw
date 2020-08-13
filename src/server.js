
const express = require('express');
const server = express();
const { pageLanding, pageGiveClasses, pageStudy, pageSuccess, saveClasses } = require('./pages');

// configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});


server
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, js, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success", pageSuccess)
.post("/save-classes", saveClasses)
.listen(5500)