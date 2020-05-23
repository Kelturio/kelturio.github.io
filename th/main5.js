(function iife() {
    'use strict'

    console.log("main.js")

    const paths = {
        'blueimp-md5': ['https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.min', ],
        'localforage': ['https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min', ],
        'lodash': ['https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min', ],
        'ramda': ['https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min', ],
        'sugar': ['https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min', ],
    }

    const akk = {
        cfg: {
            paths,
        },
        particle: {
            cfg: {},
            init() {
                console.log("particle.init")
                require(["particleCfgTriangle1"], (cfg) => {
                    console.log("particleCfgTriangle ready", [this, cfg])
                    this.cfg.triangle = cfg
                    akk.addDiv(document.body, "particleTriangle")
                    particlesJS("particleTriangle", this.cfg.triangle);
                })
                require(["particleCfgCircle1"], (cfg) => {
                    console.log("particleCfgCircle ready", [this, cfg])
                    this.cfg.circle = cfg
                })
                require(["particleCfgStar1"], (cfg) => {
                    console.log("particleCfgStar ready", [this, cfg])
                    this.cfg.star = cfg
                })
            }
        },
        init() {
            console.log("init")
            this.addPathsToRequire()
            require(["lodash", "sugar"], (lodash) => {
                console.log("lodash, sugar ready", [this, lodash])
                this.particle.init()
            })
        },
        addPathsToRequire() {
            console.log('addPathsToRequire', this)
            requirejs.config({
                paths: this.cfg.paths,
            })
        },
        addDiv(target, id) {
            console.log('addDiv', this)
            var newDiv = document.createElement("div");
            var t = document.createTextNode("This is a paragraph.");
            newDiv.appendChild(t);
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
