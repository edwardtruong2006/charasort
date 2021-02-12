dataSetVersion = "2020-07-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Castle Chaos/Dominion Odyssey", key: "CC/DO" },
      { name: "FC/OC Tabletop", key: "FCOC" },
      { name: "Salvation", key: "Salv" },
      { name: "The Faithful Ones", key: "TFO" },
      { name: "Fishspider Apocalypse", key: "FSI:A" },
      { name: "Vortex Saga", key: "VS" },
      { name: "Fama Magica", key: "FM" },
      { name: "Surface of the Impermanence", key: "SotI" },
      { name: "Objects of Subjectivity", key: "OoS" },
      { name: "Cyborg Bullshit", key: "CB" },
      { name: "SAO Tabletop", key: "SAO" },
      { name: "Collateral Trauma", key: "CT" },
      { name: "Ethereal Unseen", key: "EU" },
      { name: "Bedlam City", key: "BC" },
      { name: "Lobotomy Apollyon", key: "LA" },
      { name: "Danganronpa: Memento Mori", key: "DRMM" },
      { name: "Persona: The World's Trial", key: "PTWT" }
    ]
  },
  {
    name: "Remove NPCs",
    key: "npc",
    tooltip: "Check this to remove non-player characters.",
    checked: false
  },
  {
    name: "Remove PCs",
    key: "pc",
    tooltip: "Check this to remove all player characters.",
    checked: false
  },
  {
    name: "Remove Child Characters",
    key: "child",
    tooltip: "Check this to remove all characters below the age of 18.",
    checked: false
  },
  {
    name: "Remove Male Characters",
    key: "male",
    tooltip: "Check this to remove all characters that are male.",
    checked: false
  },
  {
    name: "Remove Female Characters",
    key: "female",
    tooltip: "Check this to remove all characters that are female.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Miko",
    img: "KT9DPRa.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      female: true
    }
  },
  {
    name: "Lilah",
    img: "sl0fHUG.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      female: true
    }
  },
  {
    name: "Will",
    img: "HIj1Z4x.png",
    opts: {
      series: [ "CC/DO", "CT" ],
      pc: true,
      child: true,
      male: true
    }
  },
  {
    name: "Gal",
    img: "mhQvdo0.png",
    opts: {
      series: [ "CC/DO", "CT" ],
      pc: true,
      male: true
    },
  },
  {
    name: "Raymond",
    img: "WdC4I4l.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      male: true
    }
  },
  {
    name: "Rickert",
    img: "fWWv6sX.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      male: true
    }
  },
  {
    name: "Wu of the Cat's Eye",
    img: "G9yAPmS.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      male: true
    }
  },
  {
    name: "Lazarus",
    img: "QKbfHoA.png",
    opts: {
      series: ["CC/DO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Aucta",
    img: "5p2dHPl.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      npc: true,
      male: true
    }
  },
  {
    name: "Siren",
    img: "1qdEnua.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Gabriel",
    img: "8AvQ9L3.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      male: true
    }
  },
  {
    name: "Gwyn",
    img: "ul0wgsI.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Maxim",
    img: "hPCThA5.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      male: true
    }
  },
  {
    name: "Vlad",
    img: "yM0CdTP.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Francesca",
    img: "r3uobSM.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Helen",
    img: "whWBPK6.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Orianna",
    img: "FKa3dnX.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Undine",
    img: "o3jpXCa.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Victoria",
    img: "CgWX3bB.png",
    opts: {
      series: [ "CC/DO", "SotI" ],
      npc: true,
      female: true
    }
  },
  {
    name: "Saya",
    img: "sgZPf11.png",
    opts: {
      series: [ "CC/DO" ],
      npc: true,
      female: true
    }
  },
  {
    name: "Hanzo",
    img: "Dk1kGRw.png",
    opts: {
      series: [ "CC/DO", "SotI" ],
      npc: true,
      male: true
    }
  },
  {
    name: "Kuzunoha",
    img: "k5t1A6k.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Sesshouhime",
    img: "xqmtNhp.png",
    opts: {
      series: [ "CC/DO", "SotI", ],
      npc: true,
      female: true
    }
  },
  {
    name: "Serpens",
    img: "ANXWGwx.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Goldenia",
    img: "FwblMU4.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Iris",
    img: "mQOlScK.png",
    opts: {
      series: ["CC/DO"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Chaos",
    img: "FwIQoaQ.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Alhazred",
    img: "56xvNp6.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Darkness",
    img: "PIfwKl7.png",
    opts: {
      series: ["CC/DO", "SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Dragnar",
    img: "nJrqCqt.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      male: true
    }
  },
  {
    name: "Lorelei",
    img: "CcgEc4W.png",
    opts: {
      series: ["CC/DO", "VS"],
      npc: true,
      female: true
    }
  },
  {
    name: "Alri",
    img: "Yey3rst.png",
    opts: {
      series: ["TFO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Beatrix",
    img: "GRa65oX.png",
    opts: {
      series: [ "TFO", "CT" ],
      pc: true,
      female: true
    }
  },
  {
    name: "Golden Tanush",
    img: "gyAWPCc.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Hitmetsuki",
    img: "Gzs6jpd.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Joseph",
    img: "heb5opD.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Kappa",
    img: "5uTMAe9.png",
    opts: {
      series: ["TFO"],
      pc: true,
      female: true
    }
  },
  {
    name: "Landon Stryker",
    img: "zHBSelY.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Lin Yan",
    img: "CrNcwO2.png",
    opts: {
      series: ["TFO"],
      pc: true,
      female: true
    }
  },
  {
    name: "Logos",
    img: "hT6Gx7a.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Rawiya",
    img: "6jHhTpk.png",
    opts: {
      series: ["TFO"],
      pc: true,
      female: true
    }
  },
  {
    name: "Yafeu",
    img: "Z7uelR6.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Haiyan",
    img: "tGUZm8D.png",
    opts: {
      series: ["Salv", "LA"],
      pc: true,
      female: true
    }
  },
  {
    name: "Lazarus Hightower",
    img: "SUgmQX6.png",
    opts: {
      series: ["Salv"],
      pc: true,
      male: true
    }
  },
  {
    name: "Lion Ushiromiya",
    img: "E3H6YKj.png",
    opts: {
      series: ["Salv"],
      pc: true,
      male: true
    }
  },
  {
    name: "Liz",
    img: "fQJH2yz.png",
    opts: {
      series: ["Salv"],
      npc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Raymond Anderson",
    img: "1BDJ2tV.png",
    opts: {
      series: ["Salv"],
      pc: true,
      male: true
    }
  },
  {
    name: "Sancti Supplici",
    img: "0eShIoC.png",
    opts: {
      series: ["Salv"],
      pc: true,
      female: true
    }
  },
  {
    name: "Willard H. Wright",
    img: "tALPllY.png",
    opts: {
      series: ["Salv"],
      pc: true,
      male: true
    }
  },
  {
    name: "Hitomi Mitsue",
    img: "9fDB65M.png",
    opts: {
      series: ["FM"],
      npc: true,
      female: true
    }
  },
  {
    name: "Keiyaku Kurushimi",
    img: "R7oSMt0.png",
    opts: {
      series: ["FM"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Madotsuki",
    img: "FQ3lFaS.png",
    opts: {
      series: ["FM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Quinn",
    img: "G7AIcNW.png",
    opts: {
      series: ["FM"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Sakura Tachibana",
    img: "PdLY3ES.png",
    opts: {
      series: ["FM"],
      npc: true,
      child: true,
      female: true
    }
  },
    {
    name: "Aerona Carne",
    img: "rrQMLkg.png",
    opts: {
      series: ["FM"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Sophia Leticia",
    img: "o022IDb.png",
    opts: {
      series: ["FM"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Urotsuki",
    img: "zswuen9.png",
    opts: {
      series: ["FM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Vayla",
    img: "OPbYHEs.png",
    opts: {
      series: ["CT"],
      pc: true,
      female: true
    }
  },
  {
    name: "Azure",
    img: "DWtFwgH.png",
    opts: {
      series: ["CT"],
      pc: true,
      female: true
    }
  },
  {
    name: "Lebes",
    img: "jE1SpNl.png",
    opts: {
      series: ["CT"],
      pc: true,
      female: true
    }
  },
  {
    name: "SOLSTICE",
    img: "ZYONNz3.png",
    opts: {
      series: ["CT"],
      pc: true,
      female: true
    }
  },
  {
    name: "Tony",
    img: "4bvxiaO.png",
    opts: {
      series: ["CT"],
      pc: true,
      male: true
    }
  },
  {
    name: "Tracy Barrett",
    img: "7kNd6hY.png",
    opts: {
      series: ["CT"],
      pc: true,
      female: true
    }
  },
  {
    name: "Josh",
    img: "jyOculX.png",
    opts: {
      series: ["CT", "FSI:A"],
      pc: true,
      male: true
    }
  },
  {
    name: "Adelyn Conteuse",
    img: "JBAgkrr.png",
    opts: {
      series: ["SotI"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Anastasia",
    img: "l0YkJBd.png",
    opts: {
      series: ["SotI"],
      pc: true,
      female: true
    }
  },
  {
    name: "Elizabeth Aeon",
    img: "s15hGdz.png",
    opts: {
      series: ["SotI"],
      pc: true,
      female: true
    }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    opts: {
      series: ["FM"],
      npc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Emeline Nurucan",
    img: "qaqeKy7.png",
    opts: {
      series: ["SotI"],
      pc: true,
      female: true
    }
  },
  {
    name: "Label Unmei",
    img: "8TZW40R.png",
    opts: {
      series: ["SotI"],
      pc: true,
      female: true
    }
  },
  {
    name: "Létt",
    img: "y9ZMaPn.png",
    opts: {
      series: ["SotI"],
      pc: true,
      male: true
    }
  },
  {
    name: "Tecto Knight",
    img: "Omtcotm.png",
    opts: {
      series: ["SotI"],
      pc: true,
      male: true
    }
  },
  {
    name: "Zain Vaerpath",
    img: "F05FMOY.png",
    opts: {
      series: ["SotI"],
      pc: true,
      male: true
    }
  },
  {
    name: "Zeruel",
    img: "EqHkglT.png",
    opts: {
      series: ["SotI"],
      pc: true,
      male: true
    }
  },
  {
    name: "Kyle",
    img: "eCfeAnb.png",
    opts: {
      series: ["CT"],
      pc: true,
      male: true
    }
  },
  {
    name: "Clarisse",
    img: "qZEHVBj.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Sister Sharon",
    img: "SDlFewA.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Shopkeeper",
    img: "vSmvXf9.png",
    opts: {
      series: ["Salv"],
      npc: true,
      male: true
    }
  },
  {
    name: "Madeleine Charbonnier",
    img: "zO1rrMs.png",
    opts: {
      series: ["FM"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Vayla (FM)",
    img: "5CPagqH.png",
    opts: {
      series: ["FM"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Exodia",
    img: "jnQqf8N.png",
    opts: {
      series: ["TFO"],
      pc: true,
      male: true
    }
  },
  {
    name: "Alia Luna",
    img: "PVuZcQz.png",
    opts: {
      series: ["BC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Arthur Morgan",
    img: "hknFu1q.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Cozy Glow",
    img: "FHrIk12.png",
    opts: {
      series: ["BC"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Mark Xan",
    img: "Xhmi9pE.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Neptune",
    img: "KmJW2mA.png",
    opts: {
      series: ["BC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Paige Martin",
    img: "axSl4XI.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Stufato Zeppeli",
    img: "Oo0n1Jz.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Amanda Coeus",
    img: "JUsH7Qy.jpg",
    opts: {
      series: ["EU"],
      pc: true,
      female: true
    }
  },
  {
    name: "Asahi Sosaku",
    img: "vvvj71x.jpg",
    opts: {
      series: ["EU"],
      pc: true,
      female: true
    }
  },
  {
    name: "Camber Brown",
    img: "2G91mhl.png",
    opts: {
      series: ["EU"],
      pc: true,
      child: true,
      male: true
    }
  },
  {
    name: "Celia Teddy",
    img: "2exE3br.png",
    opts: {
      series: ["EU"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Isabella Argent",
    img: "KFgNLwF.png",
    opts: {
      series: ["EU"],
      pc: true,
      female: true
    }
  },
  {
    name: "Karitei mo Kasa",
    img: "tAaGmN9.png",
    opts: {
      series: ["EU"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Colt Manson",
    img: "FMjKsYb.png",
    opts: {
      series: ["LA"],
      pc: true,
      male: true
    }
  },
  {
    name: "Neptune Delusa",
    img: "L3PhP84.png",
    opts: {
      series: ["LA"],
      pc: true,
      female: true
    }
  },
  {
    name: "Raina",
    img: "oxLGpKT.png",
    opts: {
      series: ["LA"],
      pc: true,
      female: true
    }
  },
  {
    name: "Rehmer",
    img: "agnzTFu.png",
    opts: {
      series: ["LA"],
      pc: true,
      male: true
    }
  },
  {
    name: "Arcadia",
    img: "G8ZL3dj.png",
    opts: {
      series: ["VS"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Guy",
    img: "WAOhqlC.png",
    opts: {
      series: ["VS"],
      pc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Shirou Emiya",
    img: "dZGavE8.png",
    opts: {
      series: ["VS"],
      pc: true,
      male: true
    }
  },
  {
    name: "Teddie",
    img: "oNF71oP.png",
    opts: {
      series: ["VS"],
      pc: true,
      child: true,
      male: true
    }
  },
  {
    name: "Valev",
    img: "xqIAWTo.png",
    opts: {
      series: ["VS", "Salv"],
      pc: true,
      male: true
    }
  },
  {
    name: "Sakura Sajan",
    img: "r3kX003.png",
    opts: {
      series: ["LA"],
      pc: true,
      female: true
    }
  },
  {
    name: "Saru",
    img: "yfCDRYD.png",
    opts: {
      series: ["LA"],
      pc: true,
      female: true
    }
  },
  {
    name: "Abigail",
    img: "IcbmeT2.png",
    opts: {
      series: ["TFO"],
      pc: true,
      female: true
    }
  },
  {
    name: "Agent",
    img: "BVpcB8B.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  { 
    name: "Charlotte",
    img: "jdOQpFA.png", 
    opts: {
      series: ["TFO"],
      pc: true,
      female: true
    } 
  },
  {
    name: "The Wanderer",
    img: "LIHmnHJ.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Iram",
    img: "O97TM5F.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Linx Rifelson",
    img: "1gcfcQh.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Nicomedes Oneiroi",
    img: "iHSm62z.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Odin",
    img: "YEKu1gG.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Steve",
    img: "4KTh3Ih.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Tessera",
    img: "UQQpM2J.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Xander Alsandair",
    img: "7yFmTus.png",
    opts: {
      series: ["FCOC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Abyssion",
    img: "6nbOEJs.png",
    opts: {
      series: ["FCOC"],
      npc: true,
      male: true
    }
  },
  {
    name: "Fen",
    img: "pFgGxd8.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      male: true
    }
  },
  {
    name: "Gwen",
    img: "U3m4NDb.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Lieselotte",
    img: "1nQBToC.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      female: true
    }
  },
  {
    name: "Sieghart",
    img: "LAZds0z.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      male: true
    }
  },
  {
    name: "The Director",
    img: "LR5oU2T.png",
    opts: {
      series: ["CC/DO"],
      npc: true,
      male: true
    }
  },
  {
    name: "Constantine Amaouros",
    img: "B4I2cYr.png",
    opts: {
      series: ["SotI"],
      npc: true,
      male: true
    }
  },
  {
    name: "Anise",
    img: "BHRL7Mr.png",
    opts: {
      series: ["SotI"],
      npc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Emelious Amaouros",
    img: "whvmTN7.png",
    opts: {
      series: ["SotI"],
      npc: true,
      male: true
    }
  },
  {
    name: "Gethwine",
    img: "YEyutkL.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Helstia",
    img: "k7F3LMr.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Mami Tomoe",
    img: "Guy15d5.png",
    opts: {
      series: ["FM"],
      npc: true,
      child: true,
      female: true
    }
  },
  {
    name: "Knight Clad in Dark",
    img: "MFz3PGy.png",
    opts: {
      series: ["SotI"],
      npc: true,
      male: true
    }
  },
  {
    name: "Mariabell Veil'Vanis",
    img: "4DmvIur.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Rebecca Friede Ende",
    img: "640mKGP.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Sapphira",
    img: "PeRNaLK.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Scala Conteuse",
    img: "IMJqR2v.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Valerie",
    img: "99H7LaA.png",
    opts: {
      series: ["SotI"],
      npc: true,
      female: true
    }
  },
  {
    name: "Alice Crane",
    img: "60p8znJ.png",
    opts: {
      series: ["BC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Ano Tsukimi",
    img: "4Uyb4RJ.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Carré",
    img: "sZ9A7x8.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Honō no Ikari",
    img: "mdgXthJ.png",
    opts: {
      series: ["BC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Juno Melodiana",
    img: "yOlvhNl.png",
    opts: {
      series: ["BC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Project SCAR",
    img: "1zcjQHG.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Shizue Kondo",
    img: "X2fsYPY.png",
    opts: {
      series: ["BC"],
      pc: true,
      female: true
    }
  },
  {
    name: "Teppei",
    img: "ERExS9H.png",
    opts: {
      series: ["BC"],
      pc: true,
      male: true
    }
  },
  {
    name: "Ayeka Joho",
    img: "R65Q2h6.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Clay Kurihara",
    img: "BZYlDTg.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Doryom Urbieta",
    img: "zN4Qa9c.png",
    opts: {
      series: ["DRMM"],
      pc: true ,
      male: true
    }
  },
  {
    name: "Fatima Inoue",
    img: "J4moLqr.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Kuzumi Kai",
    img: "kqWJuqG.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Marianne Hoga",
    img: "N6imMEn.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Markiel Daniels",
    img: "RwWRAUb.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      male: true
    }
  },
  {
    name: "Maya Amamiya",
    img: "2QXHbKk.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Sashi Hironaka",
    img: "6dS0lZH.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Shison Kageyama",
    img: "UelA5Pr.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      male: true
    }
  },
  {
    name: "Vivian James",
    img: "cCy2qBc.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Koyama Kira",
    img: "Ww4tLEY.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      male: true
    }
  },
  {
    name: "Asuka Setsuka",
    img: "vfXX7VQ.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "eLzXd65.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true
    }
  },
  {
    name: "Alyssa Morita",
    img: "XFfUD0j.png",
    opts: {
      series: ["DRMM"],
      npc: true,
      female: true
    }
  },
  {
    name: "Hisoka Ryu",
    img: "h5UkWWd.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      male: true
    }
  },
  {
    name: "Hikari Kira",
    img: "AG0M9UD.png",
    opts: {
      series: ["DRMM"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Jane Valindor",
    img: "KFZ31zZ.png",
    opts: {
      series: ["SotI"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Ani d'Aubigny",
    img: "dDyHOaa.png",
    opts: {
      series: ["SotI"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Cydes",
    img: "cUfzvZa.png",
    opts: {
      series: ["SotI"],
      pc: true,
      male: true 
    }
  },
  {
    name: "Blues Voltaire",
    img: "L5t8oXd.png",
    opts: {
      series: ["SotI"],
      pc: true,
      male: true 
    }
  },
  {
    name: "Akari Watanabe",
    img: "TlEcmFb.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Ayaka Akemi",
    img: "3O0gmvp.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Charlotte Russel",
    img: "X2cVzDF.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Emma Kōmori",
    img: "WwBrI7Y.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Inori Ayame",
    img: "ikip1aY.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      female: true 
    }
  },
  {
    name: "Keisuke Matsuo",
    img: "oBntmbM.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      male: true 
    }
  },
  {
    name: "Shoto Kanda",
    img: "cMhhNwU.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      male: true 
    }
  },
  {
    name: "Ten Takashi",
    img: "RFm8GUI.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      male: true 
    }
  },
  {
    name: "Tengoku Angelos",
    img: "BbrHIm3.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      male: true 
    }
  },
  {
    name: "Yoru Tsuki",
    img: "n6bl2cb.png",
    opts: {
      series: ["PTWT"],
      pc: true,
      female: true 
    }
  }
];
