akk.uumap = {
    init() {
        console.clear()
        console.log("uumap.init")
        require(["uumap"], (data) => {
            console.log("uumap ready open the object below or with akk.uumap")
            this._hosts.obj = data
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
            console.info("filter querys could look like this:")
            console.log('    result = akk.uumap.all.filter(e => e.c.length >= 135)')
            console.log('    result = akk.uumap.all.filter(e => e.c.length > 5 && e.os === "BBS")')
            console.info("mapping:")
            console.log('    akk.uumap.byOs.MIL.map("name")')
            console.log('    mapped = result.map(e => `${e.c.length.toString().padLeft(4)}  ${e.name.padRight(16)} ${e.os}`)')
            console.info("printing the results:")
            console.log('    mapped.map(e => console.log(e))')
            akk.uumap.all.filter(e => e.c.length >= 135).map(e => `${e.c.length.toString().padLeft(4)}  ${e.name.padRight(16)} ${e.os}`).map(e => console.log(e))
            console.info("printing a table:")
            console.info("you can click the column headers to sort.")
            console.log('    console.table(result)')
            console.table(akk.uumap.all.filter(e => e.c.length >= 135).map(e => ({name: e.name, conn: e.c.length, os: e.os})))
            console.info("sorting arrays with objects:")
            console.log('    result.sortBy("os")')
            console.log('    result.sort((a, b) => b.c.length - a.c.length)')
            console.log('    result.sort((a, b) => {if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0;})')
            console.info("group by:")
            console.log('    result.groupBy("os")')
            console.info("intersect two results:")
            console.log('    result.intersect(anotherResult)')
            console.info("union two results:")
            console.log('    result.union(anotherResult)')
            console.info("combineing multiple results:")
            console.log('    [...resultA, ...resultB, ...resultC]')
            console.info("just an example:")
            console.log('    console.table([...akk.uumap.all.groupBy("c.length")[42], ...akk.uumap.all.shuffle().last(10), ...akk.uumap.hiddenDial.shuffle().last(10), ...akk.uumap.byOs.MIL.shuffle().last(10), ...akk.uumap.byNameLen[2].shuffle().last(10), ...akk.uumap.all.filter(e => "SECOS,OSES,ENCOM,RELIC,TEL/OS,WOPR".split(",").includes(e.os))].map(e => ({name: e.name, conn: e.c.length, os: e.os})).sort((a, b) => {if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0;}))')
        })
    },
    _hosts: {
        "warning": "do not try to open the obj takes to long..."
    },
    getHost(name) {
        return this._hosts.obj[name]
    },
    getSample(num) {
        return this.all.sample(num)
    },
}

akk.uumap._hosts.hidden = [
    "abacab",
    "abqord",
    "ackpfft",
    "acppkv",
    "acpwjc",
    "acpwvw",
    "adec23",
    "adnov",
    "aeolus",
    "agsc",
    "ahe3b1",
    "aitt",
    "ajcs",
    "ajmcc",
    "alexiss",
    "alton",
    "amaag",
    "amgddf",
    "amsoft",
    "andor",
    "anicon",
    "answer",
    "apalcp",
    "apples",
    "apus",
    "aquiline",
    "ardva",
    "atbch",
    "atw386",
    "aura",
    "auspyr",
    "baggins",
    "bakerst",
    "baldom",
    "baustin",
    "bdk",
    "beep",
    "berick",
    "best",
    "bgrkl",
    "bhpi00",
    "bigdrive",
    "bimbo",
    "blacklab",
    "blilly",
    "blitter",
    "blkbox",
    "bmhalh",
    "bolero",
    "bootes",
    "brainiac",
    "brandx",
    "breum",
    "bts",
    "bty",
    "butch",
    "butkus",
    "c-art",
    "caligula",
    "cambria",
    "carssdf",
    "carter",
    "caspian",
    "centera",
    "cetacea",
    "cetem",
    "cgj3b1",
    "chaos1",
    "chatham",
    "chemo",
    "circec",
    "cjsysv",
    "claxen",
    "cmac01",
    "comhex",
    "comhex",
    "cooksys",
    "coraki",
    "cormom",
    "cormom",
    "critz",
    "csb",
    "ctc3b5",
    "culler",
    "cultnet",
    "curlew",
    "cvbnet",
    "dadstoy",
    "dansil",
    "daver",
    "dawggon",
    "dbase",
    "dbest",
    "deg",
    "degang",
    "deliver",
    "dentaro",
    "devious",
    "dgbt",
    "dic",
    "dinadan",
    "dinosaur",
    "distopia",
    "dmarsh",
    "dogface",
    "dojo",
    "dpanda",
    "dpd",
    "drache",
    "drifter",
    "drsch",
    "dulang",
    "dynasoft",
    "eaglet",
    "edgar",
    "elephant",
    "elm",
    "elric",
    "enelyn",
    "ephsa",
    "erinpub",
    "ers",
    "escher",
    "espera",
    "etb",
    "ether",
    "ethz-inf",
    "eti",
    "eyeball",
    "fcknfst",
    "fcomp",
    "fenchurch",
    "ferus",
    "fl2",
    "flatland",
    "fluffy",
    "flyer",
    "forum",
    "fredsv",
    "fubar",
    "gaboon",
    "gammon",
    "gavdos",
    "gbm-at",
    "gelac",
    "gelag",
    "genat",
    "gencal",
    "geog-i",
    "geovision",
    "ghia",
    "ghost",
    "giau01",
    "gizzmo",
    "glider",
    "gnosys",
    "golf",
    "gompa",
    "gordon01",
    "grianach",
    "gsps2",
    "gubba",
    "guinness",
    "gumbo",
    "hamlet",
    "harlie",
    "harvs",
    "highspl",
    "hite386",
    "hobbit",
    "hpr",
    "hq4af",
    "hrothgar",
    "hunter",
    "huracan",
    "hutto",
    "hydepark",
    "hypatia",
    "ibasun1",
    "icdi20",
    "ice9",
    "idcmp",
    "iicux1",
    "iitbdv",
    "imatic",
    "imladris",
    "imtsrv",
    "infcl1",
    "innova",
    "instru2",
    "inteloa",
    "inter",
    "invapba",
    "iosys",
    "isaac",
    "iseesun",
    "iskye",
    "ism70",
    "j486bdm",
    "jagat",
    "jalhome",
    "janhh",
    "jelal",
    "jessie",
    "jjmhome",
    "josquin",
    "jumbo",
    "kachun",
    "kali",
    "karla",
    "katylied",
    "kavee",
    "kc2yu",
    "kcrover",
    "kdjsys",
    "kellera",
    "keyhole",
    "kim",
    "kjvw",
    "krefcom",
    "krpatsky",
    "kryl",
    "kryx",
    "kumiss",
    "lancy",
    "lappc",
    "laser",
    "lazarus",
    "lazlo",
    "lemming",
    "lex",
    "lips",
    "litvax",
    "lngnck",
    "lobuck",
    "lost",
    "lotex",
    "lpcdal",
    "lump",
    "luvthang",
    "macabre",
    "madmax",
    "maga",
    "magoo",
    "malihh",
    "manta",
    "manteion",
    "maxxus",
    "mbsys",
    "mc_lsx",
    "mecati",
    "mich-ns",
    "miramar",
    "mkseast",
    "mm386",
    "mochi",
    "moose",
    "moray",
    "moriah",
    "mortar",
    "motpe",
    "mouthers",
    "moxie",
    "mpc",
    "mrosene",
    "ms",
    "musubi",
    "mwhh",
    "myrddin",
    "n1mnb",
    "n3dmc",
    "n6vbg",
    "navajo",
    "nchs",
    "neener",
    "neptons",
    "netmeg",
    "neur",
    "nexus2",
    "nile",
    "nlcmvax",
    "noesis",
    "noldor",
    "nomad",
    "nullset",
    "oaknet",
    "obsolete",
    "odbffm",
    "odicon",
    "ogre",
    "oldcolo",
    "oldy",
    "olisf0",
    "onion",
    "opddo",
    "opusnet",
    "orac",
    "orbit",
    "otter",
    "oytha",
    "panthr",
    "pbc",
    "pbnext",
    "pccp",
    "peapod",
    "pi",
    "pilikia",
    "pixie",
    "pjbell",
    "plankton",
    "plauger",
    "pmsellicott",
    "ponds",
    "pophyn",
    "priapus",
    "primes",
    "prusik",
    "puddle",
    "puffin",
    "q106fm",
    "quickstar",
    "ralph",
    "ramecs",
    "ramona",
    "randy",
    "ravel",
    "rdk386",
    "rgo",
    "rjf001",
    "rk386",
    "rocad",
    "rodan",
    "rodent",
    "rose3",
    "roxann",
    "roxy",
    "royhome",
    "rpx",
    "rrbible",
    "rudra",
    "rufzh",
    "rvolk",
    "salustra",
    "sander",
    "sarong",
    "satie",
    "sbphy",
    "sbuf06",
    "sbuf07",
    "sbuf08",
    "scifi",
    "sctc-1",
    "scuba",
    "scueng",
    "seanext",
    "seeker",
    "sftwks",
    "sfucmpt",
    "shalah",
    "shastro",
    "shatter",
    "sifasf",
    "sigmasci",
    "siloam",
    "siva",
    "skald",
    "skid",
    "skippy",
    "sl1",
    "slolane",
    "sly",
    "smubic",
    "snafu",
    "snowstor",
    "socal",
    "solomon",
    "solotex",
    "sopwith",
    "sounds",
    "sox",
    "sparc2",
    "speck",
    "spinnaker",
    "splat",
    "sputnik",
    "ssi-h",
    "star24",
    "starag",
    "starcom",
    "statham",
    "stclair",
    "steko",
    "stratix",
    "stre03",
    "suemac",
    "suetholz",
    "sunup",
    "svx86",
    "swhouu",
    "swift286",
    "synapse",
    "tanelorn",
    "tarnovr",
    "taronga",
    "tbi",
    "tbsys",
    "tccbbs",
    "tcsc386",
    "teamnet",
    "technica",
    "teddy",
    "teradyne",
    "tessera",
    "texinst",
    "thorr",
    "tib",
    "tirnan",
    "tlvx",
    "tmpor",
    "tommc",
    "tosh",
    "transit",
    "uclaee",
    "ucsbcc",
    "uiscpt",
    "umbio",
    "umbra",
    "umofm",
    "umsnj",
    "uncbqo",
    "univorl",
    "unsjfi",
    "until",
    "uofaee",
    "upt",
    "uswmrg",
    "uuhare",
    "valkyr",
    "van",
    "ve6mgs",
    "verity",
    "vestal",
    "violet",
    "visenix",
    "vista",
    "vladimir",
    "void",
    "volley",
    "vware",
    "warthog",
    "watjo",
    "wb3anq",
    "wbm386",
    "wemat",
    "wgr1",
    "whizzins",
    "willett",
    "wimpy",
    "winsch",
    "wizkid",
    "wjg",
    "wku",
    "wlbatl",
    "wobl",
    "wombat",
    "woozle",
    "worldex",
    "wrldgate",
    "wstolz",
    "wt1m",
    "wtfm",
    "wvcc",
    "xcluud",
    "xpresso",
    "xtime1",
    "yara",
    "ylum",
    "ypa",
    "ys2",
    "yzrnur",
    "zip",
]

akk.uumap.init()
