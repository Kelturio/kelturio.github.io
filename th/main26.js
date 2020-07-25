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
        'uumap': ['uumap', ],
        'uumapHidden': ['uumapHidden', ],
    }

    const akk = {
        init() {
            console.log("init")
            this.loadCss("https://cdn.jsdelivr.net/gh/kelturio/kelturio.github.io@latest/th/style4.css")
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
        uumap: {
            init() {
                console.log("uumap.init")
                require(["uumap"], (data) => {
                    require(["uumapHidden"], (hidden) => {
                        console.log("uumap ready open the object below")
                        this._hosts.obj = data
                        this._hosts.hidden = hidden
                        this.all = Object.keys(data).map(e => {
                            data[e].name = e;
                            return data[e]
                        }).sort((a, b) => {
                            if (a.name < b.name) return -1
                            if (a.name > b.name) return 1
                            return 0
                        })
                        this.byOs = this.all.groupBy("os")
                        this.byConn = this.all.groupBy("c.length")
                        this.byNameLen = this.all.groupBy("name.length")
                        this.byFChar = this.all.groupBy((e) => e.name.at(0))
                        this.hiddenDial = this.all.filter(e => e.c.length === 0 && e.os !== "BBS")
                        console.dir(this)
                        console.log("filter querys could look like this:")
                        console.log('result = akk.uumap.all.filter(e => e.c.length >= 135)')
                        console.log('result = akk.uumap.all.filter(e => e.c.length > 5 && e.os === "BBS")')
                        console.log("mapping:")
                        console.log('akk.uumap.byOs.MIL.map("name")')
                        console.log('mapped = result.map(e => `${e.c.length.toString().padLeft(4)} ${e.name.padRight(16)} ${e.os}`)')
                        console.log("printing the results:")
                        console.log('mapped.map(e => console.log(e))')
                        console.log("printing a table:")
                        console.table(akk.uumap.all.filter(e => e.c.length >= 135 && e.os !== "BBS")
                        .map(e => ({name: e.name, conn: e.c.length, os: e.os})))
                        console.log("you can click the column headers to sort.")
                        console.log('console.table(result)')
                        console.log("sorting arrays with objects:")
                        console.log('result.sort((a, b) => b.c.length - a.c.length)')
                        console.log('result.sort((a, b) => {if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0;})')
                        console.log("just an example:")
                        console.log('console.table([...akk.uumap.byConn[42], ...akk.uumap.all.shuffle().last(10), ...akk.uumap.hiddenDial.shuffle().last(10), ...akk.uumap.byOs.MIL.shuffle().last(10), ...akk.uumap.byNameLen[2].shuffle().last(10), ...akk.uumap.all.filter(e => "SECOS,OSES,ENCOM,RELIC,TEL/OS,WOPR".split(",").includes(e.os))].map(e => ({name: e.name, conn: e.c.length, os: e.os})).sort((a, b) => {if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0;}))')
                    })
                })
            },
            _hosts: {
                "warning": "do not try to open the obj takes to long..."
            },
            getHost(name) {
                return this._hosts.obj[name]
            }
        },
        addPathsToRequire() {
            console.log('addPathsToRequire', this)
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
