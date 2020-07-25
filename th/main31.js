(function iife() {
    'use strict'

    console.log("main.js")

    const paths = {
        'blueimp-md5': ['https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.min', ],
        'localforage': ['https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min', ],
        'lodash': ['https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min', ],
        'ramda': ['https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min', ],
        'sugar': ['https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min', ],
        'particles': ['https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min', ],
        'matrix': ['matrix', ],
    }

    const akk = {
        init() {
            console.log("init")
            this.loadCss("https://cdn.jsdelivr.net/gh/kelturio/kelturio.github.io@latest/th/style.css")
            this.addPathsToRequire()
            require(["lodash", "sugar"], (lodash) => {
                console.log("lodash, sugar ready", [this, lodash])
                Sugar.extend()
                this.addImg(document.body, "xkcd", "https://i.imgur.com/8rH20Pn.png")
                this.addImg(document.body, "hackerman", "https://i.giphy.com/media/RyXVu4ZW454IM/giphy.gif")
                this.particle.init()
                this.matrix.init()
            })
        },
        cfg: {
            build: "dXVtYXA",
            paths,
        },
        particle: {
            cfg: {},
            init() {
                console.log("particle.init")
                require(["particles"], () => {
                    console.log("particlesJS ready", [this, particlesJS])
                    this.loadCfg("particleCfgTriangle", "triangle", "particleTriangle")
                    this.loadCfg("particleCfgCircle", "circle", "particleCircle")
                    this.loadCfg("particleCfgStar", "star", "particleStar")
                })
            },
            loadCfg(file, key, id) {
                require([file], (cfg) => {
                    console.log(file + " ready", [this, cfg])
                    this.cfg[key] = cfg
                    akk.addDiv(document.body, id)
                    particlesJS(id, this.cfg[key]);
                })
            },
        },
        matrix: {
            init() {
                console.log("matrix.init")
                require(["matrix"], (M) => {
                    console.log("matrix ready", [this, M])
                    this.M = M
                    akk.addCanvas(document.body, "matrixCanvas")
                    this.M.init()
                })
            },
        },
        addPathsToRequire() {
            console.log('addPathsToRequire', this)
            let build = atob(this.cfg.build + "="), ver = "C"
            this[build] = {init() {require([build + ver])}}
            this.cfg.paths[build] = [build, ]
            this.cfg.paths[build + ver] = [build + ver, ]
            requirejs.config({
                paths: this.cfg.paths,
            })
        },
        loadCss(url) {
            var link = document.createElement("link")
            link.type = "text/css"
            link.rel = "stylesheet"
            link.href = url
            document.getElementsByTagName("head")[0].appendChild(link)
        },
        addDiv(target, id) {
            console.log('addDiv', this)
            var newDiv = document.createElement("div")
            //var t = document.createTextNode("This is a paragraph.");
            //newDiv.appendChild(t);
            newDiv.id = id
            target["appendChild"](newDiv)
        },
        addImg(target, id, src) {
            console.log('addImg', this)
            var img = document.createElement("img")
            img.id = id
            img.src = src
            target["appendChild"](img)
        },
        addCanvas(target, id) {
            console.log('addImg', this)
            var canvas = document.createElement("canvas")
            canvas.id = id
            target["appendChild"](canvas)
        },
    }

    top.akk = akk
    akk.init()
}())
