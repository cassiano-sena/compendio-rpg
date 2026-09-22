const compendioData = {
    // CATEGORIA: MONSTROS
    monsters: {
        "herald": { 
            title: "Arauto da Aniquilação", 
            path: "./monster/data/herald/herald.html"
        },
        "froghemoth": {
            title: "Froghemoth",
            tipo: "json",
            path: "./monster/data/froghemoth/froghemoth.json",
        },
        "shapeshifters": {
            title: "Shapeshifters",
            children: {
                "alpha_werewolf": {
                    title: "Lobisomem Alfa",
                    tipo: "json",
                    path: "./monster/data/alpha-werewolf/alpha-werewolf.json"
                },
                "werewolf": {
                    title: "Lobisomem",
                    tipo: "json",
                    path: "./monster/data/werewolf/werewolf.json"
                },
                "wereboar": {
                    title: "Javali-homem",
                    tipo: "json",
                    path: "./monster/data/wereboar/wereboar.json"
                },
                "weretiger": {
                    title: "Tigre-homem",
                    tipo: "json",
                    path: "./monster/data/weretiger/weretiger.json"
                },
                "wererat": {
                    title: "Rato-homem",
                    tipo: "json",
                    path: "./monster/data/wererat/wererat.json"
                },
                "werebear": {
                    title: "Urso-homem",
                    tipo: "json",
                    path: "./monster/data/werebear/werebear.json"
                },
                "werevulture": {
                    title: "Abutre-homem",
                    tipo: "json",
                    path: "./monster/data/werevulture/werevulture.json"
                },
                "werejaguar": {
                    title: "Jaguar-homem",
                    tipo: "json",
                    path: "./monster/data/werejaguar/werejaguar.json"
                },
                "wereraven": {
                    title: "Corvo-homem",
                    tipo: "json",
                    path: "./monster/data/wereraven/wereraven.json"
                },
                "wereraven": {
                    title: "Jovem Corvo-homem",
                    tipo: "json",
                    path: "./monster/data/young-wereraven/young-wereraven.json"
                },
                "werewyvern": {
                    title: "Wyvern-homem",
                    tipo: "json",
                    path: "./monster/data/werewyvern/werewyvern.json",
                },
            },
        },
        "vampire_spawn": {
            title: "Cria de Vampiro",
            tipo: "json",
            path: "./monster/data/vampire-spawn/vampire-spawn.json"
        },
        "vampire_lord": {
            title: "Lorde Vampiro",
            tipo: "json",
            path: "./monster/data/vampire-lord/vampire-lord.json"
        },
        "mothman": {
            title: "Homem Mariposa",
            path: "./monster/data/mothman/mothman.html"
        },
        "tarrasque": {
            title: "Tarrasque",
            tipo: "json",
            path: "./monster/data/tarrasque/tarrasque.json"
        },
        "skeleton": {
            title: "Esqueleto",
            tipo: "json",
            path: "./monster/data/skeleton/skeleton.json"
        }
    },
    // CATEGORIA: NPCs
    npcs: {
        "kael": {
            title: "Kael Varhen",
            path: "./npc/kael/kael.html",
        },
        "butcher": {
            title: "Carniceiro de Hadar",
            path: "./npc/butcher/butcher.html",
        },
        "astel": { 
            title: "Astel Vhalzar Varhen", 
            path: "./npc/astel/astel.html" 
        },
        "connor": { 
            title: "Connor Smith", 
            path: "./npc/connor/connor.html" 
        },
        "aetheron": { 
            title: "43TH3R0N", 
            path: "./npc/aetheron/aetheron.html" 
        },
        "willick": { 
            title: "Willick Wolfgang Blackthorne III", 
            path: "./npc/willick/willick.html" 
        },
        "mustang": { 
            title: "Eusébio Mustang Queiroz", 
            path: "./npc/mustang/mustang.html" 
        },
        "zaltherion": { 
            title: "Zaltherion Vindicator", 
            path: "./npc/zaltherion/zaltherion.html" 
        },
        "lyra": { 
            title: "Lyra Bloodseeker", 
            path: "./npc/lyra/lyra.html" 
        },
    },
    // CATEGORIA: MAPAS
    maps: {
        "mansion":{
            title: "Refúgio Varhen",
            children:{
                "krynn": {
                    title: "Krynn",
                    tipo: "png",
                    path: "./map/varhen-masion/Varhen_Mansion_UpperFloor.png"
                },
                "village": {
                    title: "Vila Varhen",
                    tipo: "png",
                    path: "./map/varhen-village/Varhen_Village.png"
                },
                "upper-mansion": {
                    title: "Mansão Varhen (Andar Superior)",
                    tipo: "png",
                    path: "./map/varhen-masion/Varhen_Mansion_UpperFloor.png"
                },
                "lower-mansion": {
                    title: "Mansão Varhen (Andar Inferior)",
                    tipo: "png",
                    path: "./map/varhen-masion/Varhen_Mansion_LowerFloor.png"
                },
                "raid": {
                    title: "Zona de Conflito",
                    tipo: "png",
                    path: "./map/varhen-masion/Varhen_Mansion_LowerFloor.png"
                },
            },
        },
    },
    // CATEGORIA: ITENS
    items: {
        "consumables":{
            title: "Consumíveis",
            children: {
                "healing-potion":{
                    title: "Poção de Cura",
                    tipo: "json",
                    path: "",
                },
                "greater-healing-potion":{
                    title: "Grande Poção de Cura",
                    tipo: "json",
                    path: "",
                },
                "supreme-healing-potion":{
                    title: "Poção de Cura Suprema",
                    tipo: "json",
                    path: "",
                },
            },
        },
        "armor":{
            title: "Armaduras",
            children: {
                "mithral-armor": {
                    title: "Armadura de Mitral",
                    tipo: "json",
                    path: "./item/mithral-armor/mithral-armor.json",
                },
            },
        },
        "weapons":{
            title: "Armas",
            children: {
                "la-espada": {
                    title: "La Espada",
                    path: "./item/la-espada/la-espada.html"
                },
                "moon-sickle": {
                    title: "Ceifa da Lua",
                    tipo: "json",
                    path: "./item/moon-sickle/moon-sickle.json"
                },
            },
        },
        "wondrous-items":{
            title: "Itens Maravilhosos",
            children: {
                "luckstone": {
                    title: "Pedra da Sorte",
                    tipo: "json",
                    path: "./item/luckstone/luckstone.json"
                },
                "fdd": {
                    title: "Fate Dealer's Deck",
                    tipo: "json",
                    path: "./item/fdd/fdd.json"
                },
                "rmd": {
                    title: "Bumbo do Orquestrador",
                    tipo: "json",
                    path: "./item/rmd/rmd.json"
                },
            },
        },
    },
    session: {
        "casa-varhen": {
            title: "Casa Varhen",
            children: {
                "prologo": {
                    title: "Prólogo",    
                    path: "./session/casa-varhen/prologo.html"
                },
                "ato1": {
                    title: "Ato 1 · A Ilusão de Poder",
                    path: "./session/casa-varhen/ato1.html"
                },
                "ato2": {
                    title: "Ato 2 · O Sino e o Carniceiro",
                    path: "./session/casa-varhen/ato2.html"
                },
                "ato3": {
                    title: "Ato 3 · O Labirinto do Arauto",
                    path: "./session/casa-varhen/ato3.html"
                },
                "epilogo": {
                    title: "Epílogo · Batalha Kaiju",
                    path: "./session/casa-varhen/epilogo.html"
                }
            }
        },
    }
};