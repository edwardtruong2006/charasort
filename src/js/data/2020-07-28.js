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
      {name: "Lobotomy Apollyon", key: "LA"}
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
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Miko",
    img: "KT9DPRa.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true
    }
  },
  {
    name: "Lilah",
    img: "sl0fHUG.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true
    }
  },
  {
    name: "Will",
    img: "HIj1Z4x.png",
    opts: {
      series: [ "CC/DO", "CT" ],
      pc: true
    }
  },
  {
    name: "Gal",
    img: "mhQvdo0.png",
    opts: {
      series: [ "CC/DO", "CT" ],
      pc: true
    },
  },
  {
    name: "Raymond",
    img: "WdC4I4l.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true
    }
  },
  {
    name: "Rickert",
    img: "fWWv6sX.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true
    }
  },
  {
    name: "Wu of the Cat's Eye",
    img: "G9yAPmS.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true
    }
  },
  {
    name: "Lazarus",
    img: "QKbfHoA.png",
    opts: {
      series: ["CC/DO"],
      pc: true
    }
  },
  {
    name: "Aucta",
    img: "5p2dHPl.png",
    opts: {
      series: [ "CC/DO" ],
      pc: true,
      npc: true
    }
  },
  {
    name: "Siren",
    img: "1qdEnua.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Gabriel",
    img: "8AvQ9L3.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Gwyn",
    img: "ul0wgsI.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Maxim",
    img: "hPCThA5.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Vlad",
    img: "yM0CdTP.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Francesca",
    img: "r3uobSM.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Helen",
    img: "whWBPK6.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Orianna",
    img: "FKa3dnX.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Undine",
    img: "o3jpXCa.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Victoria",
    img: "CgWX3bB.png",
    opts: {
      series: [ "CC/DO" ],
      npc: true
    }
  },
  {
    name: "Saya",
    img: "sgZPf11.png",
    opts: {
      series: [ "CC/DO" ],
      npc: true
    }
  },
  {
    name: "Hanzo",
    img: "Dk1kGRw.png",
    opts: {
      series: [ "CC/DO", "SotI" ],
      npc: true
    }
  },
  {
    name: "Kuzunoha",
    img: "k5t1A6k.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Sesshouhime",
    img: "xqmtNhp.png",
    opts: {
      series: [ "CC/DO", "SotI", ],
      npc: true
    }
  },
  {
    name: "Serpens",
    img: "ANXWGwx.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Goldenia",
    img: "FwblMU4.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Iris",
    img: "mQOlScK.png",
    opts: {
      series: ["CC/DO"],
      pc: true
    }
  },
  {
    name: "Chaos",
    img: "FwIQoaQ.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Alhazred",
    img: "56xvNp6.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Darkness",
    img: "PIfwKl7.png",
    opts: {
      series: ["CC/DO", "SotI"],
      npc: true
    }
  },
  {
    name: "Dragnar",
    img: "nJrqCqt.png",
    opts: {
      series: ["CC/DO"],
      npc: true
    }
  },
  {
    name: "Lorelei",
    img: "CcgEc4W.png",
    opts: {
      series: ["CC/DO", "VS"],
      npc: true
    }
  },
  {
    name: "Alri",
    img: "Yey3rst.png",
    opts: {
      series: ["TFO"],
      npc: true
    }
  },
  {
    name: "Beatrix",
    img: "GRa65oX.png",
    opts: {
      series: [ "TFO", "CT" ],
      pc: true
    }
  },
  {
    name: "Golden Tanush",
    img: "gyAWPCc.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Hitmetsuki",
    img: "Gzs6jpd.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Joseph",
    img: "heb5opD.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Kappa",
    img: "5uTMAe9.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Landon Stryker",
    img: "zHBSelY.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Lin Yan",
    img: "CrNcwO2.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Logos",
    img: "hT6Gx7a.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Rawiya",
    img: "6jHhTpk.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Yafeu",
    img: "Qut0Xgb.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Haiyan",
    img: "tGUZm8D.png",
    opts: {
      series: ["Salv", "LA"],
      pc: true
    }
  },
  {
    name: "Lazarus Hightower",
    img: "SUgmQX6.png",
    opts: {
      series: ["Salv"],
      pc: true
    }
  },
  {
    name: "Lion Ushiromiya",
    img: "E3H6YKj.png",
    opts: {
      series: ["Salv"],
      pc: true
    }
  },
  {
    name: "Liz",
    img: "fQJH2yz.png",
    opts: {
      series: ["Salv"],
      npc: true
    }
  },
  {
    name: "Raymond Anderson",
    img: "1BDJ2tV.png",
    opts: {
      series: ["Salv"],
      pc: true
    }
  },
  {
    name: "Sancti Supplici",
    img: "0eShIoC.png",
    opts: {
      series: ["Salv"],
      pc: true
    }
  },
  {
    name: "Willard H. Wright",
    img: "tALPllY.png",
    opts: {
      series: ["Salv"],
      pc: true
    }
  },
  {
    name: "Hitomi Mitsue",
    img: "9fDB65M.png",
    opts: {
      series: ["FM"],
      npc: true
    }
  },
  {
    name: "Keiyaku Kurushimi",
    img: "R7oSMt0.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Madotsuki",
    img: "FQ3lFaS.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Quinn",
    img: "G7AIcNW.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Sakura Tachibana",
    img: "PdLY3ES.png",
    opts: {
      series: ["FM"],
      npc: true
    }
  },
    {
    name: "Aerona Carne",
    img: "rrQMLkg.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Sophia Leticia",
    img: "o022IDb.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Urotsuki",
    img: "zswuen9.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Vayla",
    img: "OPbYHEs.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "Azure",
    img: "DWtFwgH.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "Lebes",
    img: "jE1SpNl.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "SOLSTICE",
    img: "ZYONNz3.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "Tony",
    img: "4bvxiaO.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "Tracy Barrett",
    img: "7kNd6hY.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "Josh",
    img: "jyOculX.png",
    opts: {
      series: ["CT", "FSI:A"],
      pc: true
    }
  },
  {
    name: "Adelyn Conteuse",
    img: "JBAgkrr.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Anastasia",
    img: "l0YkJBd.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Elizabeth Aeon",
    img: "s15hGdz.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    opts: {
      series: ["FM"],
      npc: true
    }
  },
  {
    name: "Emeline Nurucan",
    img: "qaqeKy7.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Label Unmei",
    img: "8TZW40R.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Létt",
    img: "EA2Amev.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Tecto Knight",
    img: "Omtcotm.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Zain Vaerpath",
    img: "F05FMOY.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Zeruel",
    img: "EqHkglT.png",
    opts: {
      series: ["SotI"],
      pc: true
    }
  },
  {
    name: "Kyle",
    img: "eCfeAnb.png",
    opts: {
      series: ["CT"],
      pc: true
    }
  },
  {
    name: "Clarisse",
    img: "qZEHVBj.png",
    opts: {
      series: ["SotI"],
      npc: true
    }
  },
  {
    name: "Sister Sharon",
    img: "SDlFewA.png",
    opts: {
      series: ["SotI"],
      npc: true
    }
  },
  {
    name: "Shopkeeper",
    img: "vSmvXf9.png",
    opts: {
      series: ["Salv"],
      npc: true
    }
  },
  {
    name: "Madeleine Charbonnier",
    img: "zO1rrMs.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Vayla (FM)",
    img: "5CPagqH.png",
    opts: {
      series: ["FM"],
      pc: true
    }
  },
  {
    name: "Exodia",
    img: "jnQqf8N.png",
    opts: {
      series: ["TFO"],
      pc: true
    }
  },
  {
    name: "Alia Luna",
    img: "PVuZcQz.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Arthur Morgan",
    img: "hknFu1q.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Cozy Glow",
    img: "FHrIk12.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Mark Xan",
    img: "Xhmi9pE.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Neptune",
    img: "KmJW2mA.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Paige Martin",
    img: "axSl4XI.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Stufato Zeppeli",
    img: "Oo0n1Jz.png",
    opts: {
      series: ["BC"],
      pc: true
    }
  },
  {
    name: "Amanda Coeus",
    img: "JUsH7Qy.jpg",
    opts: {
      series: ["EU"],
      pc: true
    }
  },
  {
    name: "Asahi Sosaku",
    img: "vvvj71x.jpg",
    opts: {
      series: ["EU"],
      pc: true
    }
  },
  {
    name: "Camber Brown",
    img: "2G91mhl.png",
    opts: {
      series: ["EU"],
      pc: true
    }
  },
  {
    name: "Celia Teddy",
    img: "2exE3br.png",
    opts: {
      series: ["EU"],
      pc: true
    }
  },
  {
    name: "Isabella Argemt",
    img: "KFgNLwF.png",
    opts: {
      series: ["EU"],
      pc: true
    }
  },
  {
    name: "Karitei mo Kasa",
    img: "tAaGmN9.png",
    opts: {
      series: ["EU"],
      pc: true
    }
  },
  {
    name: "Colt Manson",
    img: "FMjKsYb.png",
    opts: {
      series: ["LA"],
      pc: true
    }
  },
  {
    name: "Neptune Delusa",
    img: "L3PhP84.png",
    opts: {
      series: ["LA"],
      pc: true
    }
  },
  {
    name: "Raina",
    img: "vPMNXBY.png",
    opts: {
      series: ["LA"],
      pc: true
    }
  },
  {
    name: "Rehmer",
    img: "AHbFrjz.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Arcadia",
    img: "G8ZL3dj.png",
    opts: {
      series: ["VS"],
      pc: true
    }
  },
  {
    name: "Guy",
    img: "WAOhqlC.png",
    opts: {
      series: ["VS"],
      pc: true
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
      pc: true
    }
  },
  {
    name: "Teddie",
    img: "oNF71oP.png",
    opts: {
      series: ["VS"],
      pc: true
    }
  },
  {
    name: "Valev",
    img: "xqIAWTo.png",
    opts: {
      series: ["VS", "SotI"],
      pc: true
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      series: ["WBaWC"],
      stage: ["ex"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "JZnExhN.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      series: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      series: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
