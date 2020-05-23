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
    }

    const akk = {
        init() {
            console.log("init")
            this.loadCss("https://kelturio.github.io/th/style5.css")
            this.addPathsToRequire()
            require(["lodash", "sugar"], (lodash) => {
                console.log("lodash, sugar ready", [this, lodash])
                this.particle.init()
            })
        },
        cfg: {
            paths,
        },
        particle: {
            cfg: {},
            init() {
                console.log("particle.init")
                require(["particles"], (particlesJS) => {
                    console.log("particlesJS ready", [this, particlesJS])
                    //this.cfg.triangle = cfg
                    require(["particleCfgTriangle1"], (cfg) => {
                        console.log("particleCfgTriangle ready", [this, cfg])
                        this.cfg.triangle = cfg
                        akk.addDiv(document.body, "particleTriangle")
                        particlesJS("particleTriangle", this.cfg.triangle);
                    })
                    require(["particleCfgCircle1"], (cfg) => {
                        console.log("particleCfgCircle ready", [this, cfg])
                        this.cfg.circle = cfg
                        akk.addDiv(document.body, "particleCircle")
                        particlesJS("particleCircle", this.cfg.triangle);
                    })
                    require(["particleCfgStar1"], (cfg) => {
                        console.log("particleCfgStar ready", [this, cfg])
                        this.cfg.star = cfg
                        akk.addDiv(document.body, "particleStar")
                        particlesJS("particleStar", this.cfg.triangle);
                    })
                })
            }
        },
        addPathsToRequire() {
            console.log('addPathsToRequire', this)
            requirejs.config({
                paths: this.cfg.paths,
            })
        },
        loadCss(url) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        },
        addDiv(target, id) {
            console.log('addDiv', this)
            var newDiv = document.createElement("div");
            //var t = document.createTextNode("This is a paragraph.");
            //newDiv.appendChild(t);
            newDiv.id = id
            target["appendChild"](newDiv);
        },
        startParticleAnim() {
            console.log('startParticleAnim', this)
            particlesJS("particles-js3", "");
        },
    }

    top.akk = akk
    akk.init()
}())
