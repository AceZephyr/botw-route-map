var DATA = Object.assign({
    Towers: {
        display_name: "Towers",
        img: "icons/tower.png",
        popupFunction: function (d) {
            return d.id
        },
        locations: [{
            coords: [3308, -1500.1],
            id: "Akkala Tower"
        }, {
            coords: [-788.64, 442.03],
            id: "Central Tower"
        }, {
            coords: [1016.78, 1714.08],
            id: "Dueling Peaks Tower"
        }, {
            coords: [2174.15, -1556.78],
            id: "Eldin Tower"
        }, {
            coords: [1331.2, 3273.72],
            id: "Faron Tower"
        }, {
            coords: [-3666, 1828.6],
            id: "Gerudo Tower"
        }, {
            coords: [-560.04, 1694.86],
            id: "Great Plateau Tower"
        }, {
            coords: [2735.5, 2133.5],
            id: "Hateno Tower"
        }, {
            coords: [-2173, -2034],
            id: "Hebra Tower"
        }, {
            coords: [-31.82, 2961.6],
            id: "Lake Tower"
        }, {
            coords: [2258, -109],
            id: "Lanayru Tower"
        }, {
            coords: [-1755.3, -774.3],
            id: "Ridgeland Tower"
        }, {
            coords: [-3613.75, -990.16],
            id: "Tabantha Tower"
        }, {
            coords: [-2306.84, 2437.32],
            id: "Wasteland Tower"
        }, {
            coords: [883.88, -1605.71],
            id: "Woodland Tower"
        }]
    },
    Shrines: {
        display_name: "Shrines",
        img: "icons/shrine.png",
        popupFunction: function (d) {
            return d.id
        },
        locations: [{
            coords: [-1795, 3465.39],
            id: "Dila Maag Shrine"
        }, {
            coords: [87.02, 1658.71],
            id: "Bosh Kala Shrine"
        }, {
            coords: [-446.7, 1990.18],
            id: "Ja Baij Shrine"
        }, {
            coords: [-925.03, 2321.23],
            id: "Owa Daim Shrine"
        }, {
            coords: [-1436.35, 1990.99],
            id: "Keh Namut Shrine"
        }, {
            coords: [-673.25, 1513.01],
            id: "Oman Au Shrine"
        }, {
            coords: [1662.36, 1921.6],
            id: "Ha Dahamar Shrine"
        }, {
            coords: [854.73, 838.06],
            id: "Hila Rao Shrine"
        }, {
            coords: [1244.13, 1850.3],
            id: "Shee Venath Shrine"
        }, {
            coords: [1265.27, 1938.7],
            id: "Shee Vaneer Shrine"
        }, {
            coords: [1271.93, 1843.74],
            id: "Ree Dahee Shrine"
        }, {
            coords: [1841.92, 890.4],
            id: "Ta'loh Naeg Shrine"
        }, {
            coords: [2040.49, 972.22],
            id: "Lakna Rokee Shrine"
        }, {
            coords: [1845.65, 2474.14],
            id: "Toto Sah Shrine"
        }, {
            coords: [3388.41, 2215.84],
            id: "Myahm Agana Shrine"
        }, {
            coords: [2621.6, 378.23],
            id: "Mezza Lo Shrine"
        }, {
            coords: [4181.78, 1686.73],
            id: "Tahno O'ah Shrine"
        }, {
            coords: [4012.19, 2990.54],
            id: "Chaas Qeta Shrine"
        }, {
            coords: [3882.12, 1314.94],
            id: "Jitan Sa'mi Shrine"
        }, {
            coords: [2697.65, 1333.48],
            id: "Dow Na'eh Shrine"
        }, {
            coords: [2501.03, 1494.84],
            id: "Kam Urog Shrine"
        }, {
            coords: [3323.58, -518.83],
            id: "Ne'ez Yohma Shrine"
        }, {
            coords: [3333.5, 401.5],
            id: "Rucco Maag Shrine"
        }, {
            coords: [2238.42, -293.04],
            id: "Soh Kofi Shrine"
        }, {
            coords: [4709.2, -1310.29],
            id: "Kah Mael Shrine"
        }, {
            coords: [824.21, 187.79],
            id: "Kaya Wan Shrine"
        }, {
            coords: [1510.45, -376.96],
            id: "Sheh Rata Shrine"
        }, {
            coords: [1601, 462.2],
            id: "Daka Tuss Shrine"
        }, {
            coords: [4245.55, 252.95],
            id: "Shai Yota Shrine"
        }, {
            coords: [3149.7, -416.8],
            id: "Dagah Keek Shrine"
        }, {
            coords: [-2688.6, 2811.2],
            id: "Korsh O'hu Shrine"
        }, {
            coords: [-3817.03, 2819.85],
            id: "Daqo Chisay Shrine"
        }, {
            coords: [-1563.25, 1310.07],
            id: "Rota Ooh Shrine"
        }, {
            coords: [2007, 3285],
            id: "Qukah Nata Shrine"
        }, {
            coords: [3658.13, 3308.26],
            id: "Muwo Jeem Shrine"
        }, {
            coords: [-967.8, 715.89],
            id: "Kaam Ya'tak Shrine"
        }, {
            coords: [-2269.1, -900.1],
            id: "Toh Yahsa Shrine"
        }, {
            coords: [-1432.3, -594.19],
            id: "Zalta Wa Shrine"
        }, {
            coords: [-1488.6, -1473.03],
            id: "Monya Toma Shrine"
        }, {
            coords: [523.29, 3526.27],
            id: "Ka'o Makagh Shrine"
        }, {
            coords: [3324.46, -3420.44],
            id: "Zuna Kai Shrine"
        }, {
            coords: [-1695.29, 1700.12],
            id: "Dah Kaso Shrine"
        }, {
            coords: [-2930.92, -432.05],
            id: "Shae Loya Shrine"
        }, {
            coords: [-3465.47, -447.97],
            id: "Tena Ko'sah Shrine"
        }, {
            coords: [4737.48, 3772.09],
            id: "Korgu Chideh Shrine"
        }, {
            coords: [3899.52, -1302.81],
            id: "Dah Hesho Shrine"
        }, {
            coords: [4524.6, -2127.5],
            id: "Ritaag Zumo Shrine"
        }, {
            coords: [4295.78, -2730.34],
            id: "Katosa Aug Shrine"
        }, {
            coords: [4655, -3710],
            id: "Tu Ka'loh Shrine"
        }, {
            coords: [3777.82, -2704.89],
            id: "Tutsuwa Nima Shrine"
        }, {
            coords: [3027.31, -1667.85],
            id: "Ze Kasho Shrine"
        }, {
            coords: [2723.5, -1166.08],
            id: "Mo'a Keet Shrine"
        }, {
            coords: [-820.5, -3535],
            id: "Qaza Tokki Shrine"
        }, {
            coords: [-1673.17, -3758.45],
            id: "Sha Gehma Shrine"
        }, {
            coords: [-4658.48, 904.84],
            id: "Kema Kosassa Shrine"
        }, {
            coords: [-3656.13, -1756.7],
            id: "Akh Va'quot Shrine"
        }, {
            coords: [2065.85, -2328.36],
            id: "Daqa Koh Shrine"
        }, {
            coords: [1757.22, -2562.46],
            id: "Shae Mo'sah Shrine"
        }, {
            coords: [283.4, -3119.6],
            id: "Ketoh Wawai Shrine"
        }, {
            coords: [-2810.96, 2300.08],
            id: "Kay Noh Shrine"
        }, {
            coords: [-3317.78, 2162.48],
            id: "Dako Tah Shrine"
        }, {
            coords: [-2379.84, -2254.59],
            id: "Gee Ha'rah Shrine"
        }, {
            coords: [344.91, 1007.03],
            id: "Wahgo Katta Shrine"
        }, {
            coords: [-4023.12, -3711.64],
            id: "To Quomo Shrine"
        }, {
            coords: [-3559.8, 1953],
            id: "Sasa Kai Shrine"
        }, {
            coords: [-4446.8, -3803.04],
            id: "Hia Miu Shrine"
        }, {
            coords: [761.29, -821.3],
            id: "Namika Ozz Shrine"
        }, {
            coords: [17.73, -1944.4],
            id: "Kuhn Sidajj Shrine"
        }, {
            coords: [470.7, -2168.78],
            id: "Keo Ruug Shrine"
        }, {
            coords: [-26.43, -2458.62],
            id: "Daag Chokah Shrine"
        }, {
            coords: [837.06, -2419.72],
            id: "Maag Halan Shrine"
        }, {
            coords: [1232, -1212.75],
            id: "Mirro Shaz Shrine"
        }, {
            coords: [1820.74, -1517.04],
            id: "Qua Raym Shrine"
        }, {
            coords: [1535.38, -3118.03],
            id: "Shora Hah Shrine"
        }, {
            coords: [-147.4, -1159.35],
            id: "Saas Ko'sah Shrine"
        }, {
            coords: [-636.41, -345.11],
            id: "Katah Chuki Shrine"
        }, {
            coords: [-951.18, -623.76],
            id: "Noya Neha Shrine"
        }, {
            coords: [1586.72, 3614.93],
            id: "Shai Utoh Shrine"
        }, {
            coords: [1790.48, 2991.89],
            id: "Shoda Sah Shrine"
        }, {
            coords: [559.53, 2990.19],
            id: "Pumaag Nitae Shrine"
        }, {
            coords: [94, 3841],
            id: "Shoqa Tatone Shrine"
        }, {
            coords: [-328.18, 2600.29],
            id: "Ya Naga Shrine"
        }, {
            coords: [870.34, 2328.54],
            id: "Shae Katha Shrine"
        }, {
            coords: [-984.79, 3564.99],
            id: "Ishto Soh Shrine"
        }, {
            coords: [-1418.2, 3448.3],
            id: "Suma Sahma Shrine"
        }, {
            coords: [-1088.16, -2661.51],
            id: "Rona Kachta Shrine"
        }, {
            coords: [2665.21, -1580.75],
            id: "Sah Dahaj Shrine"
        }, {
            coords: [2662, -3456.5],
            id: "Gorae Torr Shrine"
        }, {
            coords: [4194.49, -856.88],
            id: "Ke'nai Shakah Shrine"
        }, {
            coords: [3436.89, 3316.28],
            id: "Kah Yah Shrine"
        }, {
            coords: [2833.36, 3310.97],
            id: "Yah Rin Shrine"
        }, {
            coords: [2637.53, 2834.39],
            id: "Tawa Jinn Shrine"
        }, {
            coords: [-2970.3, 3781.5],
            id: "Misae Suma Shrine"
        }, {
            coords: [-3810.5, 3127.2],
            id: "Raqa Zunzo Shrine"
        }, {
            coords: [-2004.01, 1674.26],
            id: "Joloo Nah Shrine"
        }, {
            coords: [-3083, 1221],
            id: "Kuh Takkar Shrine"
        }, {
            coords: [-3911.26, 1653.8],
            id: "Sho Dantu Shrine"
        }, {
            coords: [-4673.53, 1967.79],
            id: "Kema Zoos Shrine"
        }, {
            coords: [-4799.14, 2800.18],
            id: "Tho Kayu Shrine"
        }, {
            coords: [-4847.04, 3772.63],
            id: "Hawa Koth Shrine"
        }, {
            coords: [-2297.43, 460.73],
            id: "Mogg Latan Shrine"
        }, {
            coords: [-1893.3, 91.5],
            id: "Sheem Dagoze Shrine"
        }, {
            coords: [-2743.27, 226.44],
            id: "Mijah Rokee Shrine"
        }, {
            coords: [-3853.4, 716.7],
            id: "Keeha Yoog Shrine"
        }, {
            coords: [-4120.41, -414.37],
            id: "Kah Okeo Shrine"
        }, {
            coords: [-1939.9, -1458.2],
            id: "Maag No'rah Shrine"
        }, {
            coords: [-2832.47, -1578.04],
            id: "Dunba Taag Shrine"
        }, {
            coords: [-3609.19, -1515.4],
            id: "Bareeda Naag Shrine"
        }, {
            coords: [-4016.18, -1721.91],
            id: "Voo Lota Shrine"
        }, {
            coords: [-3823.08, -2206.36],
            id: "Sha Warvo Shrine"
        }, {
            coords: [-4057.84, -2508.37],
            id: "Maka Rah Shrine"
        }, {
            coords: [-3627.71, -3038.22],
            id: "Mozo Shenno Shrine"
        }, {
            coords: [-2998.62, -3221.58],
            id: "Shada Naw Shrine"
        }, {
            coords: [-2792.31, -2882.31],
            id: "Goma Asaagh Shrine"
        }, {
            coords: [-2378.01, -3224.74],
            id: "Rok Uwog Shrine"
        }, {
            coords: [-2636.37, -2060.36],
            id: "Lanno Kooh Shrine"
        }, {
            coords: [-1721.37, -2554.46],
            id: "Rin Oyaa Shrine"
        }, {
            coords: [-1792.83, 2423.39],
            id: "Jee Noh Shrine"
        }, {
            coords: [2300.66, -941.32],
            id: "Tah Muhl Shrine"
        }, {
            coords: [2076.82, -2039.77],
            id: "Kayra Mah Shrine"
        }]
    },
    "Champion`s Ballad Shrines": {
        display_name: "Champion`s Ballad Shrines",
        img: "icons/shrine-dlc.png",
        popupFunction: function (d) {
            return d.id
        },
        locations: [{
            coords: [-1216.12, 2109.9],
            id: "Etsu Korima Shrine"
        }, {
            coords: [-834.56, 2145.07],
            id: "Ruvo Korbah Shrine"
        }, {
            coords: [-517.17, 1798.4],
            id: "Rohta Chigah Shrine"
        }, {
            coords: [-941.14, 1672.45],
            id: "Yowaka Ita Shrine"
        }, {
            coords: [-3391.23, 1347.84],
            id: "Kihiro Moh Shrine"
        }, {
            coords: [-4895.49, 2155.5],
            id: "Takama Shiri Shrine"
        }, {
            coords: [-2339.53, 3901.64],
            id: "Keive Tala Shrine"
        }, {
            coords: [-3820.27, -2311.2],
            id: "Noe Rajee Shrine"
        }, {
            coords: [-2155.49, -3188.48],
            id: "Kiah Toza Shrine"
        }, {
            coords: [-2376.74, -1382.98],
            id: "Shira Gomar Shrine"
        }, {
            coords: [2128.36, -3228.81],
            id: "Kamia Omuna Shrine"
        }, {
            coords: [2241.35, -1995.7],
            id: "Rinu Honika Shrine"
        }, {
            coords: [2932.71, -2418.1],
            id: "Sharo Lun Shrine"
        }, {
            coords: [3102.94, -833.22],
            id: "Sato Koda Shrine"
        }, {
            coords: [3762.2, -646.45],
            id: "Mah Eliya Shrine"
        }, {
            coords: [4935.17, -1002.4],
            id: "Kee Dafunia Shrine"
        }]
    },
    "Korok Seeds": {
        display_name: "Korok Seeds",
        img: "icons/korok.png",
        popupFunction: function (d) {
            return "SSN: " + d.id + ", ZDN: " + d.zd_id
        },
        locations: [{
            "zd_id": "Seed004",
            "coords": [1049.24, 1783.28],
            "id": "D39"
        }, {
            "zd_id": "Seed007",
            "coords": [516.77, 1788.17],
            "id": "D36"
        }, {
            "zd_id": "Seed023",
            "coords": [-965.48, 1625.7],
            "id": "P04"
        }, {
            "zd_id": "Seed042",
            "coords": [-2247.72, 464.67],
            "id": "R61"
        }, {
            "zd_id": "Seed046",
            "coords": [4095.78, -1627.46],
            "id": "A38"
        }, {
            "zd_id": "Seed059",
            "coords": [3420.94, 2390.29],
            "id": "N59"
        }, {
            "zd_id": "Seed084",
            "coords": [2288.53, 699.62],
            "id": "N10"
        }, {
            "zd_id": "Seed085",
            "coords": [271.72, 3289.59],
            "id": "L65"
        }, {
            "zd_id": "Seed089",
            "coords": [4499.12, 1015.01],
            "id": "Z61"
        }, {
            "zd_id": "Seed090",
            "coords": [4083.59, 2973.26],
            "id": "N66"
        }, {
            "zd_id": "Seed101",
            "coords": [-3696.67, -1684.11],
            "id": "T17"
        }, {
            "zd_id": "Seed109",
            "coords": [695.52, 3071.41],
            "id": "L55"
        }, {
            "zd_id": "Seed118",
            "coords": [-1190.02, 1116.74],
            "id": "C73"
        }, {
            "zd_id": "Seed132",
            "coords": [-1155.97, 245.12],
            "id": "C38"
        }, {
            "zd_id": "Seed161",
            "coords": [1785.54, 3011.07],
            "id": "F19"
        }, {
            "zd_id": "Seed172",
            "coords": [-2448.41, 3751.94],
            "id": "W63"
        }, {
            "zd_id": "Seed198",
            "coords": [4662.71, 2376.26],
            "id": "N57"
        }, {
            "zd_id": "Seed211",
            "coords": [-2697.26, 2105.06],
            "id": "G35"
        }, {
            "zd_id": "Seed230",
            "coords": [-387.59, 3151.55],
            "id": "L47"
        }, {
            "zd_id": "Seed237",
            "coords": [1398.04, -856.35],
            "id": "Z02"
        }, {
            "zd_id": "Seed238",
            "coords": [-12.47, 2586.32],
            "id": "L30"
        }, {
            "zd_id": "Seed239",
            "coords": [4181.04, -2540.41],
            "id": "A28"
        }, {
            "zd_id": "Seed241",
            "coords": [2103.91, 2726.1],
            "id": "F12"
        }, {
            "zd_id": "Seed242",
            "coords": [1803.73, 3222],
            "id": "F28"
        }, {
            "zd_id": "Seed249",
            "coords": [-1996.6, 3619.67],
            "id": "W58"
        }, {
            "zd_id": "Seed252",
            "coords": [-3107.28, 2881.24],
            "id": "W37"
        }, {
            "zd_id": "Seed253",
            "coords": [-3435.39, 2980.16],
            "id": "W43"
        }, {
            "zd_id": "Seed255",
            "coords": [-4195.75, 3091.55],
            "id": "W47"
        }, {
            "zd_id": "Seed273",
            "coords": [-657.77, 3851.84],
            "id": "L80"
        }, {
            "zd_id": "Seed274",
            "coords": [-3751.84, 2531.62],
            "id": "W29"
        }, {
            "zd_id": "Seed278",
            "coords": [400.87, 2150.87],
            "id": "L05"
        }, {
            "zd_id": "Seed280",
            "coords": [-4065.47, -1678.33],
            "id": "T16"
        }, {
            "zd_id": "Seed284",
            "coords": [-1631.54, -515.19],
            "id": "R25"
        }, {
            "zd_id": "Seed296",
            "coords": [2407.27, -1613.6],
            "id": "E33"
        }, {
            "zd_id": "Seed321",
            "coords": [-2751.34, -2258.78],
            "id": "H56"
        }, {
            "zd_id": "Seed335",
            "coords": [3525.98, 1710.62],
            "id": "N39"
        }, {
            "zd_id": "Seed339",
            "coords": [3432.94, 1150.31],
            "id": "N17"
        }, {
            "zd_id": "Seed350",
            "coords": [4707.06, -1355.02],
            "id": "Z01"
        }, {
            "zd_id": "Seed351",
            "coords": [4634.41, -1840.95],
            "id": "A35"
        }, {
            "zd_id": "Seed353",
            "coords": [4356.78, -1528.1],
            "id": "A44"
        }, {
            "zd_id": "Seed355",
            "coords": [-254, -994.61],
            "id": "X10"
        }, {
            "zd_id": "Seed367",
            "coords": [4282.69, 1655.67],
            "id": "N32"
        }, {
            "zd_id": "Seed375",
            "coords": [4274.36, 1981.02],
            "id": "N44"
        }, {
            "zd_id": "Seed377",
            "coords": [4110.98, 2588.17],
            "id": "N62"
        }, {
            "zd_id": "Seed402",
            "coords": [-1148.2, -226.69],
            "id": "R45"
        }, {
            "zd_id": "Seed403",
            "coords": [3152.59, -3328.35],
            "id": "A05"
        }, {
            "zd_id": "Seed404",
            "coords": [3024.41, 3654.23],
            "id": "F50"
        }, {
            "zd_id": "Seed420",
            "coords": [2951.34, 3005.96],
            "id": "F22"
        }, {
            "zd_id": "Seed442",
            "coords": [1832.72, -535.7],
            "id": "Z13"
        }, {
            "zd_id": "Seed452",
            "coords": [1562.56, 2898.32],
            "id": "F16"
        }, {
            "zd_id": "Seed463",
            "coords": [-227.28, 3342.73],
            "id": "L64"
        }, {
            "zd_id": "Seed465",
            "coords": [3083.24, -167.69],
            "id": "Z24"
        }, {
            "zd_id": "Seed474",
            "coords": [4136.61, -408.57],
            "id": "Z20"
        }, {
            "zd_id": "Seed482",
            "coords": [3451.99, 550.79],
            "id": "Z53"
        }, {
            "zd_id": "Seed491",
            "coords": [4572.54, 647.89],
            "id": "Z59"
        }, {
            "zd_id": "Seed492",
            "coords": [-2175.13, 463.35],
            "id": "R62"
        }, {
            "zd_id": "Seed507",
            "coords": [-2429.14, 1921.34],
            "id": "G32"
        }, {
            "zd_id": "Seed509",
            "coords": [-4325.41, 698.29],
            "id": "G05"
        }, {
            "zd_id": "Seed510",
            "coords": [-4340.95, 782.13],
            "id": "G08"
        }, {
            "zd_id": "Seed512",
            "coords": [-4183.68, 291.07],
            "id": "G02"
        }, {
            "zd_id": "Seed514",
            "coords": [1373, 2749.05],
            "id": "F10"
        }, {
            "zd_id": "Seed516",
            "coords": [2939.43, 3427.09],
            "id": "F45"
        }, {
            "zd_id": "Seed524",
            "coords": [963.3, 3371.1],
            "id": "L72"
        }, {
            "zd_id": "Seed527",
            "coords": [1012.07, 3258.18],
            "id": "F23"
        }, {
            "zd_id": "Seed553",
            "coords": [-609.81, 2390.65],
            "id": "L08"
        }, {
            "zd_id": "Seed570",
            "coords": [1188.64, 2476.71],
            "id": "F02"
        }, {
            "zd_id": "Seed584",
            "coords": [-2066.65, 2397.05],
            "id": "W23"
        }, {
            "zd_id": "Seed590",
            "coords": [-4373.9, 2587.06],
            "id": "W28"
        }, {
            "zd_id": "Seed594",
            "coords": [-4353.39, 1838.53],
            "id": "W06"
        }, {
            "zd_id": "Seed633",
            "coords": [-1855.99, -1192.54],
            "id": "R09"
        }, {
            "zd_id": "Seed640",
            "coords": [4344.06, -3178.37],
            "id": "A14"
        }, {
            "zd_id": "Seed652",
            "coords": [-644.58, 876.11],
            "id": "C63"
        }, {
            "zd_id": "Seed664",
            "coords": [-4167.16, -3615.94],
            "id": "H07"
        }, {
            "zd_id": "Seed676",
            "coords": [-3675.04, -393.32],
            "id": "T37"
        }, {
            "zd_id": "Seed691",
            "coords": [-3960.38, -3723.26],
            "id": "H03"
        }, {
            "zd_id": "Seed702",
            "coords": [1725.35, -2553.94],
            "id": "E14"
        }, {
            "zd_id": "Seed731",
            "coords": [1867.82, -2400.64],
            "id": "E17"
        }, {
            "zd_id": "Seed744",
            "coords": [-1230.52, -999.82],
            "id": "R10"
        }, {
            "zd_id": "Seed745",
            "coords": [-3212.86, -574.01],
            "id": "T34"
        }, {
            "zd_id": "Seed746",
            "coords": [-3828.84, -118.42],
            "id": "R35"
        }, {
            "zd_id": "Seed749",
            "coords": [-2826.25, -1580.08],
            "id": "H73"
        }, {
            "zd_id": "Seed756",
            "coords": [-2030.12, -547.6],
            "id": "R23"
        }, {
            "zd_id": "Seed757",
            "coords": [-1964.68, -584.16],
            "id": "R18"
        }, {
            "zd_id": "Seed762",
            "coords": [-2547.83, -306.3],
            "id": "R30"
        }, {
            "zd_id": "Seed765",
            "coords": [-1115.56, -528.59],
            "id": "R26"
        }, {
            "zd_id": "Seed768",
            "coords": [-3661.36, -828.8],
            "id": "T30"
        }, {
            "zd_id": "Seed777",
            "coords": [-4019.88, -2350.36],
            "id": "T01"
        }, {
            "zd_id": "Seed778",
            "coords": [-4396.84, -2049.89],
            "id": "T06"
        }, {
            "zd_id": "Seed780",
            "coords": [-253.83, -425.73],
            "id": "C27"
        }, {
            "zd_id": "Seed790",
            "coords": [-230.69, -633.38],
            "id": "X25"
        }, {
            "zd_id": "Seed805",
            "coords": [-2883.83, -2398.01],
            "id": "H49"
        }, {
            "zd_id": "Seed819",
            "coords": [1544.33, -1837.21],
            "id": "E25"
        }, {
            "zd_id": "Seed821",
            "coords": [2275.01, -720.15],
            "id": "E45"
        }, {
            "zd_id": "Seed837",
            "coords": [-4192.81, -2678.94],
            "id": "H39"
        }, {
            "zd_id": "Seed838",
            "coords": [-4230.89, -3134.81],
            "id": "H24"
        }, {
            "zd_id": "Seed854",
            "coords": [-2338.22, -1726.7],
            "id": "H70"
        }, {
            "zd_id": "Seed878",
            "coords": [-4210.02, 1133.51],
            "id": "G11"
        }, {
            "zd_id": "Seed001",
            "coords": [-887.32, 1891.41],
            "id": "P10"
        }, {
            "zd_id": "Seed002",
            "coords": [1936.54, 2564.5],
            "id": "D59"
        }, {
            "zd_id": "Seed003",
            "coords": [2058.51, 1208.55],
            "id": "D12"
        }, {
            "zd_id": "Seed005",
            "coords": [868.27, 1902.03],
            "id": "D47"
        }, {
            "zd_id": "Seed006",
            "coords": [644.19, 1763.26],
            "id": "D37"
        }, {
            "zd_id": "Seed008",
            "coords": [312.68, 1766.8],
            "id": "D35"
        }, {
            "zd_id": "Seed009",
            "coords": [-953.07, 1721.48],
            "id": "P06"
        }, {
            "zd_id": "Seed010",
            "coords": [-1382.27, 1858.04],
            "id": "P08"
        }, {
            "zd_id": "Seed011",
            "coords": [1258.46, 1851.13],
            "id": "D40"
        }, {
            "zd_id": "Seed012",
            "coords": [-1503.42, 1920.17],
            "id": "P07"
        }, {
            "zd_id": "Seed013",
            "coords": [-1363.47, 2215.2],
            "id": "P15"
        }, {
            "zd_id": "Seed014",
            "coords": [-1443.12, 2105.64],
            "id": "P14"
        }, {
            "zd_id": "Seed015",
            "coords": [-1132.61, 1917.72],
            "id": "P09"
        }, {
            "zd_id": "Seed016",
            "coords": [-1171.62, 2317.23],
            "id": "P17"
        }, {
            "zd_id": "Seed017",
            "coords": [-1204.36, 2322.78],
            "id": "P16"
        }, {
            "zd_id": "Seed018",
            "coords": [-809.22, 1966.91],
            "id": "P11"
        }, {
            "zd_id": "Seed019",
            "coords": [-792.04, 2257.22],
            "id": "P18"
        }, {
            "zd_id": "Seed020",
            "coords": [-423.35, 2022.46],
            "id": "P13"
        }, {
            "zd_id": "Seed021",
            "coords": [-423.02, 1993.36],
            "id": "P12"
        }, {
            "zd_id": "Seed022",
            "coords": [-853.23, 1671.22],
            "id": "P05"
        }, {
            "zd_id": "Seed024",
            "coords": [-769.88, 1574.22],
            "id": "P02"
        }, {
            "zd_id": "Seed025",
            "coords": [-822.64, 1546.92],
            "id": "P01"
        }, {
            "zd_id": "Seed026",
            "coords": [-1334.81, 1675.9],
            "id": "P03"
        }, {
            "zd_id": "Seed027",
            "coords": [4211.83, 2270.37],
            "id": "N54"
        }, {
            "zd_id": "Seed028",
            "coords": [1807.03, 992.2],
            "id": "D03"
        }, {
            "zd_id": "Seed029",
            "coords": [3893.51, -704.23],
            "id": "Z08"
        }, {
            "zd_id": "Seed030",
            "coords": [2163.9, 1034.74],
            "id": "D07"
        }, {
            "zd_id": "Seed031",
            "coords": [-4066.79, 437.85],
            "id": "G03"
        }, {
            "zd_id": "Seed032",
            "coords": [2746.15, -176.4],
            "id": "Z23"
        }, {
            "zd_id": "Seed033",
            "coords": [-4690.49, 842.36],
            "id": "G07"
        }, {
            "zd_id": "Seed034",
            "coords": [3303.74, 22.58],
            "id": "Z34"
        }, {
            "zd_id": "Seed035",
            "coords": [-653.65, 1390.29],
            "id": "C83"
        }, {
            "zd_id": "Seed036",
            "coords": [-1666.66, 1393.96],
            "id": "C85"
        }, {
            "zd_id": "Seed037",
            "coords": [-1370.34, 1165.82],
            "id": "C72"
        }, {
            "zd_id": "Seed038",
            "coords": [-1224.69, 1358.42],
            "id": "C79"
        }, {
            "zd_id": "Seed039",
            "coords": [-3353.04, 2276.31],
            "id": "W17"
        }, {
            "zd_id": "Seed040",
            "coords": [671.09, 1638.38],
            "id": "D28"
        }, {
            "zd_id": "Seed041",
            "coords": [850.51, 1623.99],
            "id": "D29"
        }, {
            "zd_id": "Seed043",
            "coords": [-1491.53, 1832.24],
            "id": "C89"
        }, {
            "zd_id": "Seed044",
            "coords": [3323.92, -519.52],
            "id": "Z16"
        }, {
            "zd_id": "Seed045",
            "coords": [3882.55, -1340.02],
            "id": "A47"
        }, {
            "zd_id": "Seed047",
            "coords": [4530.94, -2098.38],
            "id": "A33"
        }, {
            "zd_id": "Seed048",
            "coords": [-1020.38, 559.81],
            "id": "C53"
        }, {
            "zd_id": "Seed049",
            "coords": [-466.41, 1279.38],
            "id": "C76"
        }, {
            "zd_id": "Seed050",
            "coords": [2511.43, 1571.53],
            "id": "N28"
        }, {
            "zd_id": "Seed051",
            "coords": [627.04, 182.31],
            "id": "C51"
        }, {
            "zd_id": "Seed052",
            "coords": [384.26, 135.36],
            "id": "C45"
        }, {
            "zd_id": "Seed053",
            "coords": [4503.66, -3164.39],
            "id": "A16"
        }, {
            "zd_id": "Seed054",
            "coords": [686.04, -635.1],
            "id": "C19"
        }, {
            "zd_id": "Seed055",
            "coords": [840.41, -692.48],
            "id": "C12"
        }, {
            "zd_id": "Seed056",
            "coords": [3783.72, 2125.18],
            "id": "N47"
        }, {
            "zd_id": "Seed057",
            "coords": [3166.32, 1828.89],
            "id": "N38"
        }, {
            "zd_id": "Seed058",
            "coords": [3148.72, 2402.78],
            "id": "N58"
        }, {
            "zd_id": "Seed060",
            "coords": [2054.83, 2092.73],
            "id": "D52"
        }, {
            "zd_id": "Seed061",
            "coords": [2330.78, 1828.01],
            "id": "N34"
        }, {
            "zd_id": "Seed062",
            "coords": [2484.83, 2103.39],
            "id": "D53"
        }, {
            "zd_id": "Seed063",
            "coords": [1750.43, 1544.69],
            "id": "D20"
        }, {
            "zd_id": "Seed064",
            "coords": [-115.48, 2303.39],
            "id": "D54"
        }, {
            "zd_id": "Seed065",
            "coords": [66.23, 2310.65],
            "id": "L10"
        }, {
            "zd_id": "Seed066",
            "coords": [178.96, 1719.98],
            "id": "D33"
        }, {
            "zd_id": "Seed067",
            "coords": [112.31, 1709.78],
            "id": "D32"
        }, {
            "zd_id": "Seed068",
            "coords": [1936.53, 2778.54],
            "id": "F11"
        }, {
            "zd_id": "Seed069",
            "coords": [1245.11, 1942.18],
            "id": "D49"
        }, {
            "zd_id": "Seed070",
            "coords": [1040.56, 1318.15],
            "id": "D16"
        }, {
            "zd_id": "Seed071",
            "coords": [5.32, 1897.9],
            "id": "D44"
        }, {
            "zd_id": "Seed072",
            "coords": [160.04, 1942.17],
            "id": "D45"
        }, {
            "zd_id": "Seed073",
            "coords": [-38.98, 2513.64],
            "id": "L27"
        }, {
            "zd_id": "Seed074",
            "coords": [-383.21, -993.62],
            "id": "X07"
        }, {
            "zd_id": "Seed075",
            "coords": [-3886.14, 2965.82],
            "id": "W42"
        }, {
            "zd_id": "Seed076",
            "coords": [-1665.9, 2338.16],
            "id": "W21"
        }, {
            "zd_id": "Seed077",
            "coords": [-1809.82, 2459.62],
            "id": "W26"
        }, {
            "zd_id": "Seed078",
            "coords": [604.93, 2408.78],
            "id": "L17"
        }, {
            "zd_id": "Seed079",
            "coords": [3741.72, 1156.12],
            "id": "N18"
        }, {
            "zd_id": "Seed080",
            "coords": [3797.93, 1269.2],
            "id": "N24"
        }, {
            "zd_id": "Seed081",
            "coords": [216.32, 3488.01],
            "id": "L70"
        }, {
            "zd_id": "Seed082",
            "coords": [3565.89, -915.92],
            "id": "Z05"
        }, {
            "zd_id": "Seed083",
            "coords": [2149.36, 790],
            "id": "N08"
        }, {
            "zd_id": "Seed086",
            "coords": [266.1, 3668.95],
            "id": "L73"
        }, {
            "zd_id": "Seed087",
            "coords": [1387.28, -112.93],
            "id": "Z30"
        }, {
            "zd_id": "Seed088",
            "coords": [4533.44, 1022.99],
            "id": "Z62"
        }, {
            "zd_id": "Seed091",
            "coords": [3687.96, 2413.49],
            "id": "N60"
        }, {
            "zd_id": "Seed092",
            "coords": [3347.62, 2249.25],
            "id": "N53"
        }, {
            "zd_id": "Seed093",
            "coords": [-190.95, 1831.54],
            "id": "D43"
        }, {
            "zd_id": "Seed094",
            "coords": [-106.46, 1047.97],
            "id": "C70"
        }, {
            "zd_id": "Seed095",
            "coords": [54.99, 1758.56],
            "id": "D31"
        }, {
            "zd_id": "Seed096",
            "coords": [225.3, 1705.66],
            "id": "D34"
        }, {
            "zd_id": "Seed097",
            "coords": [-749.92, 892.21],
            "id": "C62"
        }, {
            "zd_id": "Seed098",
            "coords": [232.21, 1601.42],
            "id": "D27"
        }, {
            "zd_id": "Seed099",
            "coords": [-3562.25, -1761.35],
            "id": "T15"
        }, {
            "zd_id": "Seed100",
            "coords": [87.01, 1585.1],
            "id": "D26"
        }, {
            "zd_id": "Seed102",
            "coords": [318.16, 1397.9],
            "id": "D22"
        }, {
            "zd_id": "Seed103",
            "coords": [337.15, 1271.06],
            "id": "D14"
        }, {
            "zd_id": "Seed104",
            "coords": [-2358.59, -1872.81],
            "id": "H67"
        }, {
            "zd_id": "Seed105",
            "coords": [518.63, 1475.53],
            "id": "D23"
        }, {
            "zd_id": "Seed106",
            "coords": [668.65, 1468.3],
            "id": "D24"
        }, {
            "zd_id": "Seed107",
            "coords": [4697.84, -547.03],
            "id": "Z10"
        }, {
            "zd_id": "Seed108",
            "coords": [788.84, 1471.35],
            "id": "D25"
        }, {
            "zd_id": "Seed110",
            "coords": [295.58, 1204.8],
            "id": "C77"
        }, {
            "zd_id": "Seed111",
            "coords": [1632.02, -2939.5],
            "id": "E08"
        }, {
            "zd_id": "Seed112",
            "coords": [-1746.92, 1831.1],
            "id": "C88"
        }, {
            "zd_id": "Seed113",
            "coords": [-1728.59, 1478.86],
            "id": "C86"
        }, {
            "zd_id": "Seed114",
            "coords": [-1280.39, 1384.9],
            "id": "C80"
        }, {
            "zd_id": "Seed115",
            "coords": [-1314.3, 1257.34],
            "id": "C78"
        }, {
            "zd_id": "Seed116",
            "coords": [-1149.92, 1204.1],
            "id": "C74"
        }, {
            "zd_id": "Seed117",
            "coords": [-1057.31, 1327.53],
            "id": "C81"
        }, {
            "zd_id": "Seed119",
            "coords": [-1134.46, 1030.47],
            "id": "C68"
        }, {
            "zd_id": "Seed120",
            "coords": [3796.61, 3618.89],
            "id": "F52"
        }, {
            "zd_id": "Seed121",
            "coords": [-1154.36, 964.64],
            "id": "C67"
        }, {
            "zd_id": "Seed122",
            "coords": [-1106.94, 905.26],
            "id": "C60"
        }, {
            "zd_id": "Seed123",
            "coords": [-1009.46, 932.04],
            "id": "C61"
        }, {
            "zd_id": "Seed124",
            "coords": [-1583.93, 1579.69],
            "id": "C87"
        }, {
            "zd_id": "Seed125",
            "coords": [-1512.69, 908.67],
            "id": "C59"
        }, {
            "zd_id": "Seed126",
            "coords": [-1439.6, 846.67],
            "id": "C58"
        }, {
            "zd_id": "Seed127",
            "coords": [-1249.55, 730.68],
            "id": "C57"
        }, {
            "zd_id": "Seed128",
            "coords": [-1313.94, 622.86],
            "id": "C52"
        }, {
            "zd_id": "Seed129",
            "coords": [-1127.29, 414.31],
            "id": "C47"
        }, {
            "zd_id": "Seed130",
            "coords": [-1336.36, 366.62],
            "id": "C37"
        }, {
            "zd_id": "Seed131",
            "coords": [-1336.89, 249.66],
            "id": "C36"
        }, {
            "zd_id": "Seed133",
            "coords": [715.11, 1327.03],
            "id": "D15"
        }, {
            "zd_id": "Seed134",
            "coords": [516.1, 1167.1],
            "id": "D13"
        }, {
            "zd_id": "Seed135",
            "coords": [1293.44, 1331.36],
            "id": "D17"
        }, {
            "zd_id": "Seed136",
            "coords": [1376.53, 1680.34],
            "id": "D30"
        }, {
            "zd_id": "Seed137",
            "coords": [1101.69, 1889.54],
            "id": "D48"
        }, {
            "zd_id": "Seed138",
            "coords": [-308.77, -1166.01],
            "id": "X01"
        }, {
            "zd_id": "Seed139",
            "coords": [815.22, 2089.44],
            "id": "D50"
        }, {
            "zd_id": "Seed140",
            "coords": [4396.83, -2721.58],
            "id": "A23"
        }, {
            "zd_id": "Seed141",
            "coords": [704.99, 1796.57],
            "id": "D38"
        }, {
            "zd_id": "Seed142",
            "coords": [2559.24, 3602.71],
            "id": "F47"
        }, {
            "zd_id": "Seed143",
            "coords": [551.58, 1903.51],
            "id": "D46"
        }, {
            "zd_id": "Seed144",
            "coords": [2925.47, 1401.57],
            "id": "N21"
        }, {
            "zd_id": "Seed145",
            "coords": [-1799.61, 1625.9],
            "id": "G29"
        }, {
            "zd_id": "Seed146",
            "coords": [1449.47, 3531.37],
            "id": "F40"
        }, {
            "zd_id": "Seed147",
            "coords": [1378.1, 3503.56],
            "id": "F39"
        }, {
            "zd_id": "Seed148",
            "coords": [-1142.67, -284.34],
            "id": "R44"
        }, {
            "zd_id": "Seed149",
            "coords": [-1258.4, -240.52],
            "id": "R43"
        }, {
            "zd_id": "Seed150",
            "coords": [-886.65, -274.04],
            "id": "C30"
        }, {
            "zd_id": "Seed151",
            "coords": [833.76, 2434.58],
            "id": "L20"
        }, {
            "zd_id": "Seed152",
            "coords": [518.39, 2492.62],
            "id": "L28"
        }, {
            "zd_id": "Seed153",
            "coords": [-663.3, -432.6],
            "id": "C26"
        }, {
            "zd_id": "Seed154",
            "coords": [-803.96, -403.13],
            "id": "C25"
        }, {
            "zd_id": "Seed155",
            "coords": [-548.5, -229.52],
            "id": "C31"
        }, {
            "zd_id": "Seed156",
            "coords": [-666.94, -543.81],
            "id": "C22"
        }, {
            "zd_id": "Seed157",
            "coords": [-763.77, -606.28],
            "id": "C20"
        }, {
            "zd_id": "Seed158",
            "coords": [-796.22, -558.86],
            "id": "C21"
        }, {
            "zd_id": "Seed159",
            "coords": [2139.98, 3531.94],
            "id": "F43"
        }, {
            "zd_id": "Seed160",
            "coords": [-68.02, 2332.62],
            "id": "L09"
        }, {
            "zd_id": "Seed162",
            "coords": [806.07, 3112.86],
            "id": "L57"
        }, {
            "zd_id": "Seed163",
            "coords": [824.94, 3005.3],
            "id": "L56"
        }, {
            "zd_id": "Seed164",
            "coords": [584.43, 2678.34],
            "id": "L35"
        }, {
            "zd_id": "Seed165",
            "coords": [1638.97, 1376.29],
            "id": "D19"
        }, {
            "zd_id": "Seed166",
            "coords": [-4307.61, 3459.74],
            "id": "W55"
        }, {
            "zd_id": "Seed167",
            "coords": [2927.67, 332.8],
            "id": "Z43"
        }, {
            "zd_id": "Seed168",
            "coords": [-4347.9, 3713.18],
            "id": "W61"
        }, {
            "zd_id": "Seed169",
            "coords": [3206.76, 23.68],
            "id": "Z33"
        }, {
            "zd_id": "Seed170",
            "coords": [-4859.18, 3832.95],
            "id": "W65"
        }, {
            "zd_id": "Seed171",
            "coords": [-2547.43, 3951.93],
            "id": "W68"
        }, {
            "zd_id": "Seed173",
            "coords": [-3031.62, 3754.59],
            "id": "W62"
        }, {
            "zd_id": "Seed174",
            "coords": [-3286.43, 3787.15],
            "id": "W67"
        }, {
            "zd_id": "Seed175",
            "coords": [-2636.2, 3302.57],
            "id": "W52"
        }, {
            "zd_id": "Seed176",
            "coords": [-2918.66, 3061.01],
            "id": "W44"
        }, {
            "zd_id": "Seed177",
            "coords": [-2685.72, 2929.66],
            "id": "W40"
        }, {
            "zd_id": "Seed178",
            "coords": [-2628.11, 2751.21],
            "id": "W35"
        }, {
            "zd_id": "Seed179",
            "coords": [-2298.7, 2850.02],
            "id": "W38"
        }, {
            "zd_id": "Seed180",
            "coords": [3291.97, -261.12],
            "id": "Z25"
        }, {
            "zd_id": "Seed181",
            "coords": [-3331.95, -2297.17],
            "id": "H55"
        }, {
            "zd_id": "Seed182",
            "coords": [-2019.7, 2884.23],
            "id": "W39"
        }, {
            "zd_id": "Seed183",
            "coords": [-1935.35, 2673.5],
            "id": "W34"
        }, {
            "zd_id": "Seed184",
            "coords": [-1465.91, 2952.56],
            "id": "W41"
        }, {
            "zd_id": "Seed185",
            "coords": [-1538.74, 3070.08],
            "id": "W46"
        }, {
            "zd_id": "Seed186",
            "coords": [-1599.5, 3099.94],
            "id": "W45"
        }, {
            "zd_id": "Seed187",
            "coords": [-2172.51, 3200.4],
            "id": "W48"
        }, {
            "zd_id": "Seed188",
            "coords": [-1922.23, 3279.69],
            "id": "W50"
        }, {
            "zd_id": "Seed189",
            "coords": [2705.44, 1164.94],
            "id": "N16"
        }, {
            "zd_id": "Seed190",
            "coords": [3178.81, 1607.3],
            "id": "N37"
        }, {
            "zd_id": "Seed191",
            "coords": [3171.94, 1490.93],
            "id": "N29"
        }, {
            "zd_id": "Seed192",
            "coords": [4438.91, 1432.92],
            "id": "N25"
        }, {
            "zd_id": "Seed193",
            "coords": [4615.14, 1915.47],
            "id": "N40"
        }, {
            "zd_id": "Seed194",
            "coords": [4518.5, 2316.52],
            "id": "N55"
        }, {
            "zd_id": "Seed195",
            "coords": [954.4, 942.47],
            "id": "D01"
        }, {
            "zd_id": "Seed196",
            "coords": [4536.52, 2520.27],
            "id": "N63"
        }, {
            "zd_id": "Seed197",
            "coords": [1595.76, 807.68],
            "id": "Z60"
        }, {
            "zd_id": "Seed199",
            "coords": [1775.8, 963.6],
            "id": "D02"
        }, {
            "zd_id": "Seed200",
            "coords": [1793.9, 1052.83],
            "id": "D04"
        }, {
            "zd_id": "Seed201",
            "coords": [1798.33, 1078.17],
            "id": "D05"
        }, {
            "zd_id": "Seed202",
            "coords": [1957.25, 1062.05],
            "id": "D06"
        }, {
            "zd_id": "Seed203",
            "coords": [1939.51, 1110.93],
            "id": "D08"
        }, {
            "zd_id": "Seed204",
            "coords": [-3780.54, -1865.62],
            "id": "T10"
        }, {
            "zd_id": "Seed205",
            "coords": [-3627.38, -1804.83],
            "id": "T14"
        }, {
            "zd_id": "Seed206",
            "coords": [2207.28, 1373.48],
            "id": "D21"
        }, {
            "zd_id": "Seed207",
            "coords": [1933.26, 1220.96],
            "id": "D11"
        }, {
            "zd_id": "Seed208",
            "coords": [1739.31, 1186.67],
            "id": "D10"
        }, {
            "zd_id": "Seed209",
            "coords": [1676.1, 1157.94],
            "id": "D09"
        }, {
            "zd_id": "Seed210",
            "coords": [1553.54, 1297.19],
            "id": "D18"
        }, {
            "zd_id": "Seed212",
            "coords": [-2259.54, 2224.76],
            "id": "W16"
        }, {
            "zd_id": "Seed213",
            "coords": [1748.57, 1921.65],
            "id": "D42"
        }, {
            "zd_id": "Seed214",
            "coords": [1877.42, 2051.32],
            "id": "D51"
        }, {
            "zd_id": "Seed215",
            "coords": [2495.85, 1804.2],
            "id": "N35"
        }, {
            "zd_id": "Seed216",
            "coords": [2366.56, 2303.5],
            "id": "D58"
        }, {
            "zd_id": "Seed217",
            "coords": [1886.18, 2418.74],
            "id": "D56"
        }, {
            "zd_id": "Seed218",
            "coords": [1682.66, 2327.62],
            "id": "D55"
        }, {
            "zd_id": "Seed219",
            "coords": [1966.63, 2634.48],
            "id": "F08"
        }, {
            "zd_id": "Seed220",
            "coords": [1517.27, 1850.08],
            "id": "D41"
        }, {
            "zd_id": "Seed221",
            "coords": [3277.77, 1436],
            "id": "N22"
        }, {
            "zd_id": "Seed222",
            "coords": [2099.72, 2625.57],
            "id": "F09"
        }, {
            "zd_id": "Seed223",
            "coords": [1381.9, 2277.45],
            "id": "F01"
        }, {
            "zd_id": "Seed224",
            "coords": [-135.84, 3802],
            "id": "L85"
        }, {
            "zd_id": "Seed225",
            "coords": [13.96, 3790.43],
            "id": "L86"
        }, {
            "zd_id": "Seed226",
            "coords": [265.62, 3837.01],
            "id": "L88"
        }, {
            "zd_id": "Seed227",
            "coords": [416.76, 3848.92],
            "id": "L90"
        }, {
            "zd_id": "Seed228",
            "coords": [-878.73, 3567.74],
            "id": "L69"
        }, {
            "zd_id": "Seed229",
            "coords": [-1176.85, 3578.05],
            "id": "L67"
        }, {
            "zd_id": "Seed231",
            "coords": [-420.75, 3368.48],
            "id": "L63"
        }, {
            "zd_id": "Seed232",
            "coords": [-95.25, 3128.96],
            "id": "L49"
        }, {
            "zd_id": "Seed233",
            "coords": [224.17, 2868.4],
            "id": "L42"
        }, {
            "zd_id": "Seed234",
            "coords": [169.73, 2903.42],
            "id": "L43"
        }, {
            "zd_id": "Seed235",
            "coords": [200.87, 2603.86],
            "id": "L32"
        }, {
            "zd_id": "Seed236",
            "coords": [-3.03, 2614.67],
            "id": "L31"
        }, {
            "zd_id": "Seed240",
            "coords": [3736.67, -2884.98],
            "id": "A18"
        }, {
            "zd_id": "Seed243",
            "coords": [-2081.09, 1477.03],
            "id": "G24"
        }, {
            "zd_id": "Seed244",
            "coords": [4232.73, -212.33],
            "id": "Z28"
        }, {
            "zd_id": "Seed245",
            "coords": [-1721.23, 2237.78],
            "id": "G36"
        }, {
            "zd_id": "Seed246",
            "coords": [2684.86, 562.78],
            "id": "N05"
        }, {
            "zd_id": "Seed247",
            "coords": [-4355.34, 709.87],
            "id": "G04"
        }, {
            "zd_id": "Seed248",
            "coords": [-1926.3, 3242],
            "id": "W49"
        }, {
            "zd_id": "Seed250",
            "coords": [-1526.98, 3405.89],
            "id": "W54"
        }, {
            "zd_id": "Seed251",
            "coords": [-1611.52, 3678.33],
            "id": "W59"
        }, {
            "zd_id": "Seed254",
            "coords": [-4224.87, 2738.07],
            "id": "W36"
        }, {
            "zd_id": "Seed256",
            "coords": [-4160.33, 3826.2],
            "id": "W66"
        }, {
            "zd_id": "Seed257",
            "coords": [-4862.2, 3260.97],
            "id": "W51"
        }, {
            "zd_id": "Seed258",
            "coords": [2320.67, 1726.37],
            "id": "N33"
        }, {
            "zd_id": "Seed259",
            "coords": [-1403.12, -2312.29],
            "id": "K13"
        }, {
            "zd_id": "Seed260",
            "coords": [-1410.55, -2224.81],
            "id": "K14"
        }, {
            "zd_id": "Seed261",
            "coords": [-1586.49, -2133],
            "id": "K15"
        }, {
            "zd_id": "Seed262",
            "coords": [2403.83, 2511.22],
            "id": "F07"
        }, {
            "zd_id": "Seed263",
            "coords": [1733.16, 3450.59],
            "id": "F42"
        }, {
            "zd_id": "Seed264",
            "coords": [2303.51, 2375.14],
            "id": "D57"
        }, {
            "zd_id": "Seed265",
            "coords": [1821.04, 3742.03],
            "id": "F55"
        }, {
            "zd_id": "Seed266",
            "coords": [4104.56, -1350.66],
            "id": "A48"
        }, {
            "zd_id": "Seed267",
            "coords": [3229.03, 1545.24],
            "id": "N30"
        }, {
            "zd_id": "Seed268",
            "coords": [1773.84, 2930.87],
            "id": "F17"
        }, {
            "zd_id": "Seed269",
            "coords": [1799.42, 3157.66],
            "id": "F27"
        }, {
            "zd_id": "Seed270",
            "coords": [-1357.03, 3671.94],
            "id": "W60"
        }, {
            "zd_id": "Seed271",
            "coords": [-1379.17, 3328.08],
            "id": "W53"
        }, {
            "zd_id": "Seed272",
            "coords": [-728.07, 134.78],
            "id": "C40"
        }, {
            "zd_id": "Seed275",
            "coords": [2294.48, 3028.17],
            "id": "F21"
        }, {
            "zd_id": "Seed276",
            "coords": [2032.28, 3164.34],
            "id": "F29"
        }, {
            "zd_id": "Seed277",
            "coords": [-3151.57, -1563.28],
            "id": "T19"
        }, {
            "zd_id": "Seed279",
            "coords": [474.96, 2149.12],
            "id": "L06"
        }, {
            "zd_id": "Seed281",
            "coords": [-4225.71, -1747.38],
            "id": "T12"
        }, {
            "zd_id": "Seed282",
            "coords": [-4034.98, -1748.4],
            "id": "T13"
        }, {
            "zd_id": "Seed283",
            "coords": [-2972.81, -1878.1],
            "id": "H66"
        }, {
            "zd_id": "Seed285",
            "coords": [-2316.8, -806.45],
            "id": "R14"
        }, {
            "zd_id": "Seed286",
            "coords": [-3224.52, 1022.45],
            "id": "G12"
        }, {
            "zd_id": "Seed287",
            "coords": [-2542.84, 639.86],
            "id": "R67"
        }, {
            "zd_id": "Seed288",
            "coords": [-2492.7, 589.67],
            "id": "R66"
        }, {
            "zd_id": "Seed289",
            "coords": [-2476.62, 547.67],
            "id": "R65"
        }, {
            "zd_id": "Seed290",
            "coords": [-2483.32, 504.74],
            "id": "R64"
        }, {
            "zd_id": "Seed291",
            "coords": [-2450.16, 373.48],
            "id": "R51"
        }, {
            "zd_id": "Seed292",
            "coords": [696.31, -824.38],
            "id": "C09"
        }, {
            "zd_id": "Seed293",
            "coords": [1412.02, -1759.81],
            "id": "E24"
        }, {
            "zd_id": "Seed294",
            "coords": [3122.88, -17.4],
            "id": "Z32"
        }, {
            "zd_id": "Seed295",
            "coords": [2751.07, -1675.91],
            "id": "E34"
        }, {
            "zd_id": "Seed297",
            "coords": [1940.15, -1217.73],
            "id": "E36"
        }, {
            "zd_id": "Seed298",
            "coords": [1694.87, -862.09],
            "id": "K35"
        }, {
            "zd_id": "Seed299",
            "coords": [-3714.74, -1040.96],
            "id": "T24"
        }, {
            "zd_id": "Seed300",
            "coords": [-1501.96, 156.22],
            "id": "R49"
        }, {
            "zd_id": "Seed301",
            "coords": [-2305.08, 2561.36],
            "id": "W32"
        }, {
            "zd_id": "Seed302",
            "coords": [-2594.76, 2539.87],
            "id": "W30"
        }, {
            "zd_id": "Seed303",
            "coords": [-2815.31, 2247.91],
            "id": "W15"
        }, {
            "zd_id": "Seed304",
            "coords": [-2018.63, 2186.64],
            "id": "W14"
        }, {
            "zd_id": "Seed305",
            "coords": [1736.36, 85.68],
            "id": "Z40"
        }, {
            "zd_id": "Seed306",
            "coords": [-4011.17, -1167.09],
            "id": "T23"
        }, {
            "zd_id": "Seed307",
            "coords": [-3971.63, -920.52],
            "id": "T26"
        }, {
            "zd_id": "Seed308",
            "coords": [-4058.83, -773.85],
            "id": "T27"
        }, {
            "zd_id": "Seed309",
            "coords": [-3966.31, -624.56],
            "id": "T32"
        }, {
            "zd_id": "Seed310",
            "coords": [-4039.64, -350.24],
            "id": "T36"
        }, {
            "zd_id": "Seed311",
            "coords": [-4026.71, -232.41],
            "id": "R33"
        }, {
            "zd_id": "Seed312",
            "coords": [-3418.51, -2066.82],
            "id": "T05"
        }, {
            "zd_id": "Seed313",
            "coords": [-3524.55, -449.69],
            "id": "T35"
        }, {
            "zd_id": "Seed314",
            "coords": [-3441.07, -664.88],
            "id": "T33"
        }, {
            "zd_id": "Seed315",
            "coords": [-3431.2, -707.84],
            "id": "T31"
        }, {
            "zd_id": "Seed316",
            "coords": [3441.94, 3121.88],
            "id": "N65"
        }, {
            "zd_id": "Seed317",
            "coords": [-394.03, -785.4],
            "id": "X18"
        }, {
            "zd_id": "Seed318",
            "coords": [-335.4, -1003.32],
            "id": "X09"
        }, {
            "zd_id": "Seed319",
            "coords": [-911.8, -1612.8],
            "id": "K26"
        }, {
            "zd_id": "Seed320",
            "coords": [-3444.36, -1328.69],
            "id": "T20"
        }, {
            "zd_id": "Seed322",
            "coords": [522.47, 3680.96],
            "id": "L76"
        }, {
            "zd_id": "Seed323",
            "coords": [1980.93, 451.92],
            "id": "N01"
        }, {
            "zd_id": "Seed324",
            "coords": [4199.46, 463.68],
            "id": "Z56"
        }, {
            "zd_id": "Seed325",
            "coords": [2378.29, 373.15],
            "id": "N02"
        }, {
            "zd_id": "Seed326",
            "coords": [2473.89, 461.7],
            "id": "N04"
        }, {
            "zd_id": "Seed327",
            "coords": [2635.69, 370.99],
            "id": "N03"
        }, {
            "zd_id": "Seed328",
            "coords": [2891.03, 517.87],
            "id": "N06"
        }, {
            "zd_id": "Seed329",
            "coords": [2132.42, 678.85],
            "id": "N07"
        }, {
            "zd_id": "Seed330",
            "coords": [-2290.55, 468.24],
            "id": "R60"
        }, {
            "zd_id": "Seed331",
            "coords": [2239.66, 726.35],
            "id": "N09"
        }, {
            "zd_id": "Seed332",
            "coords": [2409.55, 849.32],
            "id": "N11"
        }, {
            "zd_id": "Seed333",
            "coords": [3896.64, 1556.54],
            "id": "N31"
        }, {
            "zd_id": "Seed334",
            "coords": [2728.92, 904.33],
            "id": "N13"
        }, {
            "zd_id": "Seed336",
            "coords": [3383.03, 982.82],
            "id": "N14"
        }, {
            "zd_id": "Seed337",
            "coords": [-3792.61, -2320.19],
            "id": "T02"
        }, {
            "zd_id": "Seed338",
            "coords": [3709.19, 1943.09],
            "id": "N43"
        }, {
            "zd_id": "Seed340",
            "coords": [2636.17, 1109],
            "id": "N15"
        }, {
            "zd_id": "Seed341",
            "coords": [2526.62, 1257.58],
            "id": "N20"
        }, {
            "zd_id": "Seed342",
            "coords": [1406.71, 3198.76],
            "id": "F25"
        }, {
            "zd_id": "Seed343",
            "coords": [4428.84, -3182.9],
            "id": "A15"
        }, {
            "zd_id": "Seed344",
            "coords": [-2008.68, -514.15],
            "id": "R24"
        }, {
            "zd_id": "Seed345",
            "coords": [2504.48, -1304.28],
            "id": "E40"
        }, {
            "zd_id": "Seed346",
            "coords": [3537.01, 1376.11],
            "id": "N23"
        }, {
            "zd_id": "Seed347",
            "coords": [4616.44, -638.03],
            "id": "Z09"
        }, {
            "zd_id": "Seed348",
            "coords": [4698.9, -1003.02],
            "id": "Z07"
        }, {
            "zd_id": "Seed349",
            "coords": [4702.88, -1039.33],
            "id": "Z06"
        }, {
            "zd_id": "Seed352",
            "coords": [4691.71, -1777.33],
            "id": "A36"
        }, {
            "zd_id": "Seed354",
            "coords": [-378.66, -1112.1],
            "id": "X04"
        }, {
            "zd_id": "Seed356",
            "coords": [-250.14, -1061.67],
            "id": "X06"
        }, {
            "zd_id": "Seed357",
            "coords": [-251.84, -1061.77],
            "id": "X05"
        }, {
            "zd_id": "Seed358",
            "coords": [-162.05, -878.05],
            "id": "X16"
        }, {
            "zd_id": "Seed359",
            "coords": [-168.37, -860.41],
            "id": "X15"
        }, {
            "zd_id": "Seed360",
            "coords": [4422.96, -3340.22],
            "id": "A08"
        }, {
            "zd_id": "Seed361",
            "coords": [4817.2, -3094.22],
            "id": "A17"
        }, {
            "zd_id": "Seed362",
            "coords": [4508.73, -2643.61],
            "id": "A24"
        }, {
            "zd_id": "Seed363",
            "coords": [4087.94, 1142.37],
            "id": "N19"
        }, {
            "zd_id": "Seed364",
            "coords": [2408.2, -1229.95],
            "id": "E41"
        }, {
            "zd_id": "Seed365",
            "coords": [3813.46, -3419.22],
            "id": "A04"
        }, {
            "zd_id": "Seed366",
            "coords": [3951.87, 695.89],
            "id": "N12"
        }, {
            "zd_id": "Seed368",
            "coords": [3475.64, 1916.26],
            "id": "N42"
        }, {
            "zd_id": "Seed369",
            "coords": [4541.93, 2405.64],
            "id": "N56"
        }, {
            "zd_id": "Seed370",
            "coords": [581.25, 3007.6],
            "id": "L53"
        }, {
            "zd_id": "Seed371",
            "coords": [3901.08, 2096.73],
            "id": "N48"
        }, {
            "zd_id": "Seed372",
            "coords": [-4340.23, -2354.1],
            "id": "H53"
        }, {
            "zd_id": "Seed373",
            "coords": [284.29, 2253.38],
            "id": "L11"
        }, {
            "zd_id": "Seed374",
            "coords": [2863.86, 2182.9],
            "id": "N46"
        }, {
            "zd_id": "Seed376",
            "coords": [3289.58, 3338.79],
            "id": "F37"
        }, {
            "zd_id": "Seed378",
            "coords": [3367.11, 3653.54],
            "id": "F51"
        }, {
            "zd_id": "Seed379",
            "coords": [3516.12, 2628.38],
            "id": "N61"
        }, {
            "zd_id": "Seed380",
            "coords": [3639.77, 3258.22],
            "id": "F33"
        }, {
            "zd_id": "Seed381",
            "coords": [1685.6, 661.12],
            "id": "Z50"
        }, {
            "zd_id": "Seed382",
            "coords": [-4071.82, -2545.95],
            "id": "H42"
        }, {
            "zd_id": "Seed383",
            "coords": [-1414.65, -2398.6],
            "id": "H59"
        }, {
            "zd_id": "Seed384",
            "coords": [3229.82, 2848.44],
            "id": "N64"
        }, {
            "zd_id": "Seed385",
            "coords": [-4148.76, -2616.47],
            "id": "H41"
        }, {
            "zd_id": "Seed386",
            "coords": [3144.47, 2229.86],
            "id": "N52"
        }, {
            "zd_id": "Seed387",
            "coords": [2991.39, 2272.15],
            "id": "N51"
        }, {
            "zd_id": "Seed388",
            "coords": [-4424.15, -3215.94],
            "id": "H23"
        }, {
            "zd_id": "Seed389",
            "coords": [3029.04, 2017.68],
            "id": "N41"
        }, {
            "zd_id": "Seed390",
            "coords": [-3350.53, -2994.89],
            "id": "H27"
        }, {
            "zd_id": "Seed391",
            "coords": [2811.32, 2391.93],
            "id": "N50"
        }, {
            "zd_id": "Seed392",
            "coords": [2714.13, 2345.55],
            "id": "N49"
        }, {
            "zd_id": "Seed393",
            "coords": [2836.32, 2120.51],
            "id": "N45"
        }, {
            "zd_id": "Seed394",
            "coords": [-2783.55, -2895.53],
            "id": "H28"
        }, {
            "zd_id": "Seed395",
            "coords": [-2830.56, -2828.34],
            "id": "H35"
        }, {
            "zd_id": "Seed396",
            "coords": [2276.03, 1501.62],
            "id": "N26"
        }, {
            "zd_id": "Seed397",
            "coords": [323.49, 1927.43],
            "id": "L01"
        }, {
            "zd_id": "Seed398",
            "coords": [4098.32, -1756.46],
            "id": "A34"
        }, {
            "zd_id": "Seed399",
            "coords": [2279.32, 1608.35],
            "id": "N27"
        }, {
            "zd_id": "Seed400",
            "coords": [2884.09, 1765.03],
            "id": "N36"
        }, {
            "zd_id": "Seed401",
            "coords": [-1691.98, -175.53],
            "id": "R39"
        }, {
            "zd_id": "Seed405",
            "coords": [2508.15, 3825.91],
            "id": "F57"
        }, {
            "zd_id": "Seed406",
            "coords": [3350.1, -3079.84],
            "id": "A11"
        }, {
            "zd_id": "Seed407",
            "coords": [3326.96, -3589.21],
            "id": "A02"
        }, {
            "zd_id": "Seed408",
            "coords": [279.03, 3503.79],
            "id": "L71"
        }, {
            "zd_id": "Seed409",
            "coords": [2856.58, 3651.77],
            "id": "F49"
        }, {
            "zd_id": "Seed410",
            "coords": [1513.74, 3725.04],
            "id": "F54"
        }, {
            "zd_id": "Seed411",
            "coords": [-3847.2, 1467.02],
            "id": "W01"
        }, {
            "zd_id": "Seed412",
            "coords": [-4136.4, 1717.96],
            "id": "G30"
        }, {
            "zd_id": "Seed413",
            "coords": [517.57, 3765.02],
            "id": "L91"
        }, {
            "zd_id": "Seed414",
            "coords": [1374.62, 3751.46],
            "id": "F53"
        }, {
            "zd_id": "Seed415",
            "coords": [-3999.22, -3620.06],
            "id": "H08"
        }, {
            "zd_id": "Seed416",
            "coords": [-4029.34, -3760.18],
            "id": "H02"
        }, {
            "zd_id": "Seed417",
            "coords": [-3757.13, -3848.08],
            "id": "H04"
        }, {
            "zd_id": "Seed418",
            "coords": [-1970.93, -3792.57],
            "id": "H05"
        }, {
            "zd_id": "Seed419",
            "coords": [-2041.04, 296.35],
            "id": "R53"
        }, {
            "zd_id": "Seed421",
            "coords": [1116.14, 555.58],
            "id": "Z47"
        }, {
            "zd_id": "Seed422",
            "coords": [-3845.24, 1897.05],
            "id": "G31"
        }, {
            "zd_id": "Seed423",
            "coords": [1313.97, 503.07],
            "id": "Z48"
        }, {
            "zd_id": "Seed424",
            "coords": [3726.79, -2677.46],
            "id": "A21"
        }, {
            "zd_id": "Seed425",
            "coords": [1446.5, 558.36],
            "id": "Z49"
        }, {
            "zd_id": "Seed426",
            "coords": [-4180.77, 1482.39],
            "id": "G21"
        }, {
            "zd_id": "Seed427",
            "coords": [1434.74, 135.4],
            "id": "Z38"
        }, {
            "zd_id": "Seed428",
            "coords": [883.07, 274.8],
            "id": "Z37"
        }, {
            "zd_id": "Seed429",
            "coords": [1593.19, 114.16],
            "id": "Z39"
        }, {
            "zd_id": "Seed430",
            "coords": [-1356.7, 1002.41],
            "id": "C66"
        }, {
            "zd_id": "Seed431",
            "coords": [2085.79, 181.66],
            "id": "Z41"
        }, {
            "zd_id": "Seed432",
            "coords": [-3065.6, 1287.27],
            "id": "G17"
        }, {
            "zd_id": "Seed433",
            "coords": [1185.5, -67.42],
            "id": "Z29"
        }, {
            "zd_id": "Seed434",
            "coords": [1088.53, -215.89],
            "id": "Z21"
        }, {
            "zd_id": "Seed435",
            "coords": [-3688.85, 798.73],
            "id": "G09"
        }, {
            "zd_id": "Seed436",
            "coords": [1104.02, -444.23],
            "id": "Z11"
        }, {
            "zd_id": "Seed437",
            "coords": [1197.52, -1152.63],
            "id": "K33"
        }, {
            "zd_id": "Seed438",
            "coords": [4815.5, -3300.25],
            "id": "A09"
        }, {
            "zd_id": "Seed439",
            "coords": [3995.8, -3147.58],
            "id": "A13"
        }, {
            "zd_id": "Seed440",
            "coords": [1632.93, -545.2],
            "id": "Z12"
        }, {
            "zd_id": "Seed441",
            "coords": [1282.64, -1123.44],
            "id": "K34"
        }, {
            "zd_id": "Seed443",
            "coords": [1265.18, -707.25],
            "id": "C13"
        }, {
            "zd_id": "Seed444",
            "coords": [2427.76, -412.12],
            "id": "Z14"
        }, {
            "zd_id": "Seed445",
            "coords": [3170.42, 3824.32],
            "id": "F58"
        }, {
            "zd_id": "Seed446",
            "coords": [2968.72, 3380.18],
            "id": "F36"
        }, {
            "zd_id": "Seed447",
            "coords": [2636.23, 3197.8],
            "id": "F31"
        }, {
            "zd_id": "Seed448",
            "coords": [2874.91, 2683.37],
            "id": "F14"
        }, {
            "zd_id": "Seed449",
            "coords": [2181.73, 2534.7],
            "id": "F06"
        }, {
            "zd_id": "Seed450",
            "coords": [2284.27, 2659.97],
            "id": "F13"
        }, {
            "zd_id": "Seed451",
            "coords": [1943.75, 3009.42],
            "id": "F20"
        }, {
            "zd_id": "Seed453",
            "coords": [1660.15, 3163.64],
            "id": "F26"
        }, {
            "zd_id": "Seed454",
            "coords": [1492.12, 3370.49],
            "id": "F34"
        }, {
            "zd_id": "Seed455",
            "coords": [2517.5, -212.48],
            "id": "Z22"
        }, {
            "zd_id": "Seed456",
            "coords": [2791.46, -500.93],
            "id": "Z15"
        }, {
            "zd_id": "Seed457",
            "coords": [2665.53, -1.3],
            "id": "Z31"
        }, {
            "zd_id": "Seed458",
            "coords": [2769.95, 348.85],
            "id": "Z42"
        }, {
            "zd_id": "Seed459",
            "coords": [-2264.51, 2163.38],
            "id": "W12"
        }, {
            "zd_id": "Seed460",
            "coords": [4038.21, -1254.87],
            "id": "A49"
        }, {
            "zd_id": "Seed461",
            "coords": [3140.86, 324.97],
            "id": "Z44"
        }, {
            "zd_id": "Seed462",
            "coords": [-150.92, 3067.3],
            "id": "L48"
        }, {
            "zd_id": "Seed464",
            "coords": [-1035.09, -446.22],
            "id": "C24"
        }, {
            "zd_id": "Seed466",
            "coords": [3321.5, -514.25],
            "id": "Z17"
        }, {
            "zd_id": "Seed467",
            "coords": [3178.98, -3073.67],
            "id": "A10"
        }, {
            "zd_id": "Seed468",
            "coords": [3436.59, -2533.65],
            "id": "A20"
        }, {
            "zd_id": "Seed469",
            "coords": [3520.64, -383.59],
            "id": "Z18"
        }, {
            "zd_id": "Seed470",
            "coords": [1625.49, 3891.73],
            "id": "F56"
        }, {
            "zd_id": "Seed471",
            "coords": [3208.67, -1011.23],
            "id": "Z04"
        }, {
            "zd_id": "Seed472",
            "coords": [-868.5, 219.12],
            "id": "C39"
        }, {
            "zd_id": "Seed473",
            "coords": [4071.79, -459.05],
            "id": "Z19"
        }, {
            "zd_id": "Seed475",
            "coords": [3527.29, -276.76],
            "id": "Z26"
        }, {
            "zd_id": "Seed476",
            "coords": [-427.28, 150.92],
            "id": "C43"
        }, {
            "zd_id": "Seed477",
            "coords": [4080.41, -216.78],
            "id": "Z27"
        }, {
            "zd_id": "Seed478",
            "coords": [4134.86, 60.32],
            "id": "Z35"
        }, {
            "zd_id": "Seed479",
            "coords": [4294.82, 78.5],
            "id": "Z36"
        }, {
            "zd_id": "Seed480",
            "coords": [4144.44, 195.97],
            "id": "Z46"
        }, {
            "zd_id": "Seed481",
            "coords": [3854.32, 352.26],
            "id": "Z45"
        }, {
            "zd_id": "Seed483",
            "coords": [3431.14, 523.75],
            "id": "Z52"
        }, {
            "zd_id": "Seed484",
            "coords": [3271.14, 656.82],
            "id": "Z51"
        }, {
            "zd_id": "Seed485",
            "coords": [3561.94, 626.32],
            "id": "Z54"
        }, {
            "zd_id": "Seed486",
            "coords": [-2298.86, 341.16],
            "id": "R52"
        }, {
            "zd_id": "Seed487",
            "coords": [3721.26, 617.63],
            "id": "Z55"
        }, {
            "zd_id": "Seed488",
            "coords": [-1877.9, -32.18],
            "id": "R38"
        }, {
            "zd_id": "Seed489",
            "coords": [4264.46, 628.22],
            "id": "Z57"
        }, {
            "zd_id": "Seed490",
            "coords": [4452.65, 483.97],
            "id": "Z58"
        }, {
            "zd_id": "Seed493",
            "coords": [-2200.96, 730.85],
            "id": "R70"
        }, {
            "zd_id": "Seed494",
            "coords": [-1962.84, 409.85],
            "id": "R55"
        }, {
            "zd_id": "Seed495",
            "coords": [-1992.89, 161.32],
            "id": "R47"
        }, {
            "zd_id": "Seed496",
            "coords": [3407.37, -1278.33],
            "id": "A46"
        }, {
            "zd_id": "Seed497",
            "coords": [3726.3, -1129.71],
            "id": "A51"
        }, {
            "zd_id": "Seed498",
            "coords": [-1125.95, 3624.43],
            "id": "L68"
        }, {
            "zd_id": "Seed499",
            "coords": [1840.69, 3595.83],
            "id": "F46"
        }, {
            "zd_id": "Seed500",
            "coords": [396.08, -625.56],
            "id": "C18"
        }, {
            "zd_id": "Seed501",
            "coords": [-1062.99, -1934.11],
            "id": "K18"
        }, {
            "zd_id": "Seed502",
            "coords": [3288.68, -1574.59],
            "id": "A40"
        }, {
            "zd_id": "Seed503",
            "coords": [506.91, -882.62],
            "id": "C06"
        }, {
            "zd_id": "Seed504",
            "coords": [-4607.91, 2338.84],
            "id": "W18"
        }, {
            "zd_id": "Seed505",
            "coords": [1426.89, -1544.07],
            "id": "E31"
        }, {
            "zd_id": "Seed506",
            "coords": [-2550.18, 2038.1],
            "id": "W10"
        }, {
            "zd_id": "Seed508",
            "coords": [-2417.31, 1923.72],
            "id": "W08"
        }, {
            "zd_id": "Seed511",
            "coords": [-4409.1, 331.34],
            "id": "G01"
        }, {
            "zd_id": "Seed513",
            "coords": [1305.29, 2434.06],
            "id": "F03"
        }, {
            "zd_id": "Seed515",
            "coords": [-3831.34, -2106.71],
            "id": "T04"
        }, {
            "zd_id": "Seed517",
            "coords": [2836.96, 3452.76],
            "id": "F44"
        }, {
            "zd_id": "Seed518",
            "coords": [2171.21, 3276.91],
            "id": "F30"
        }, {
            "zd_id": "Seed519",
            "coords": [1757.8, 3685.98],
            "id": "F48"
        }, {
            "zd_id": "Seed520",
            "coords": [1552.49, 3529.24],
            "id": "F41"
        }, {
            "zd_id": "Seed521",
            "coords": [1857.43, 3351.67],
            "id": "F35"
        }, {
            "zd_id": "Seed522",
            "coords": [1217.39, 3524.11],
            "id": "F38"
        }, {
            "zd_id": "Seed523",
            "coords": [1074.55, 3620.95],
            "id": "L79"
        }, {
            "zd_id": "Seed525",
            "coords": [742.89, 3243.08],
            "id": "L61"
        }, {
            "zd_id": "Seed526",
            "coords": [699.92, 3276.86],
            "id": "L66"
        }, {
            "zd_id": "Seed528",
            "coords": [1055.12, 3254.77],
            "id": "F24"
        }, {
            "zd_id": "Seed529",
            "coords": [704.04, 2957.84],
            "id": "L54"
        }, {
            "zd_id": "Seed530",
            "coords": [367.1, 3642.12],
            "id": "L74"
        }, {
            "zd_id": "Seed531",
            "coords": [639.39, 3710.84],
            "id": "L77"
        }, {
            "zd_id": "Seed532",
            "coords": [645.72, 3615.12],
            "id": "L75"
        }, {
            "zd_id": "Seed533",
            "coords": [891.17, 3694.83],
            "id": "L78"
        }, {
            "zd_id": "Seed534",
            "coords": [909.62, 3837.29],
            "id": "L92"
        }, {
            "zd_id": "Seed535",
            "coords": [286.84, 3899.42],
            "id": "L89"
        }, {
            "zd_id": "Seed536",
            "coords": [97.36, 3821.55],
            "id": "L87"
        }, {
            "zd_id": "Seed537",
            "coords": [-248.99, 3828.45],
            "id": "L83"
        }, {
            "zd_id": "Seed538",
            "coords": [-240.11, 3882.5],
            "id": "L84"
        }, {
            "zd_id": "Seed539",
            "coords": [-266.35, 3888.15],
            "id": "L82"
        }, {
            "zd_id": "Seed540",
            "coords": [-354.84, 3898.78],
            "id": "L81"
        }, {
            "zd_id": "Seed541",
            "coords": [-26.89, 3042.69],
            "id": "L50"
        }, {
            "zd_id": "Seed542",
            "coords": [69.03, 3221.87],
            "id": "L60"
        }, {
            "zd_id": "Seed543",
            "coords": [610.34, 2869.85],
            "id": "L45"
        }, {
            "zd_id": "Seed544",
            "coords": [418.21, 2873.41],
            "id": "L44"
        }, {
            "zd_id": "Seed545",
            "coords": [340.63, 2830.63],
            "id": "L40"
        }, {
            "zd_id": "Seed546",
            "coords": [163.28, 2783.3],
            "id": "L39"
        }, {
            "zd_id": "Seed547",
            "coords": [-66.25, 2440.66],
            "id": "L15"
        }, {
            "zd_id": "Seed548",
            "coords": [-74.38, 2412.87],
            "id": "L14"
        }, {
            "zd_id": "Seed549",
            "coords": [-54.78, 2492.44],
            "id": "L26"
        }, {
            "zd_id": "Seed550",
            "coords": [-398.4, 2559.24],
            "id": "L25"
        }, {
            "zd_id": "Seed551",
            "coords": [-468.64, 2908.23],
            "id": "L38"
        }, {
            "zd_id": "Seed552",
            "coords": [-601.95, 2656.12],
            "id": "L24"
        }, {
            "zd_id": "Seed554",
            "coords": [34.27, 2102.73],
            "id": "L03"
        }, {
            "zd_id": "Seed555",
            "coords": [214.58, 2070.06],
            "id": "L04"
        }, {
            "zd_id": "Seed556",
            "coords": [354.38, 1997.55],
            "id": "L02"
        }, {
            "zd_id": "Seed557",
            "coords": [625.16, 2305.91],
            "id": "L12"
        }, {
            "zd_id": "Seed558",
            "coords": [609.29, 2409.83],
            "id": "L18"
        }, {
            "zd_id": "Seed559",
            "coords": [679.2, 2499.42],
            "id": "L29"
        }, {
            "zd_id": "Seed560",
            "coords": [370.42, 2567.04],
            "id": "L33"
        }, {
            "zd_id": "Seed561",
            "coords": [280.43, 2405.01],
            "id": "L16"
        }, {
            "zd_id": "Seed562",
            "coords": [755.69, 2347.61],
            "id": "L13"
        }, {
            "zd_id": "Seed563",
            "coords": [889.61, 2395.3],
            "id": "L19"
        }, {
            "zd_id": "Seed564",
            "coords": [790.64, 2565.14],
            "id": "L34"
        }, {
            "zd_id": "Seed565",
            "coords": [1173.39, 2849.99],
            "id": "L46"
        }, {
            "zd_id": "Seed566",
            "coords": [1196.1, 3055.43],
            "id": "L58"
        }, {
            "zd_id": "Seed567",
            "coords": [1325.56, 3008.68],
            "id": "F15"
        }, {
            "zd_id": "Seed568",
            "coords": [1462.68, 2370.85],
            "id": "F05"
        }, {
            "zd_id": "Seed569",
            "coords": [1323.72, 2453.45],
            "id": "F04"
        }, {
            "zd_id": "Seed571",
            "coords": [-923.5, 3436.38],
            "id": "L62"
        }, {
            "zd_id": "Seed572",
            "coords": [-1256.74, 3134.15],
            "id": "L41"
        }, {
            "zd_id": "Seed573",
            "coords": [-1066.79, 2910.01],
            "id": "L36"
        }, {
            "zd_id": "Seed574",
            "coords": [-925.24, 2936.44],
            "id": "L37"
        }, {
            "zd_id": "Seed575",
            "coords": [-1011.91, 2638.47],
            "id": "L23"
        }, {
            "zd_id": "Seed576",
            "coords": [-1214.31, 2701.55],
            "id": "L22"
        }, {
            "zd_id": "Seed577",
            "coords": [-1379.59, 2742.73],
            "id": "L21"
        }, {
            "zd_id": "Seed578",
            "coords": [-1399.42, 2378.2],
            "id": "W22"
        }, {
            "zd_id": "Seed579",
            "coords": [-1658.59, 2306.77],
            "id": "W20"
        }, {
            "zd_id": "Seed580",
            "coords": [-1615.96, 2447.33],
            "id": "W27"
        }, {
            "zd_id": "Seed581",
            "coords": [-2207.69, 2550.62],
            "id": "W33"
        }, {
            "zd_id": "Seed582",
            "coords": [-2358.78, 2554.53],
            "id": "W31"
        }, {
            "zd_id": "Seed583",
            "coords": [-2059.89, 2420.1],
            "id": "W24"
        }, {
            "zd_id": "Seed585",
            "coords": [-2853.36, 2320.15],
            "id": "W19"
        }, {
            "zd_id": "Seed586",
            "coords": [-2464.74, 1713.47],
            "id": "G28"
        }, {
            "zd_id": "Seed587",
            "coords": [-2167.78, 2082.04],
            "id": "W11"
        }, {
            "zd_id": "Seed588",
            "coords": [-2066.65, 1850.1],
            "id": "W07"
        }, {
            "zd_id": "Seed589",
            "coords": [-3728.54, 3610.08],
            "id": "W57"
        }, {
            "zd_id": "Seed591",
            "coords": [-4710.48, 2171.84],
            "id": "W13"
        }, {
            "zd_id": "Seed592",
            "coords": [-4685.21, 1970.39],
            "id": "W09"
        }, {
            "zd_id": "Seed593",
            "coords": [-4170.68, 1989.38],
            "id": "G33"
        }, {
            "zd_id": "Seed595",
            "coords": [-4314.11, 1629.41],
            "id": "W03"
        }, {
            "zd_id": "Seed596",
            "coords": [-4266.57, 1691.54],
            "id": "W05"
        }, {
            "zd_id": "Seed597",
            "coords": [-4220.02, 1659.8],
            "id": "W04"
        }, {
            "zd_id": "Seed598",
            "coords": [-4075.58, 1595.13],
            "id": "G25"
        }, {
            "zd_id": "Seed599",
            "coords": [-4001.08, 1566.55],
            "id": "W02"
        }, {
            "zd_id": "Seed600",
            "coords": [-3715.86, 1558.07],
            "id": "G26"
        }, {
            "zd_id": "Seed601",
            "coords": [-3071.39, 2044.73],
            "id": "G34"
        }, {
            "zd_id": "Seed602",
            "coords": [-3129.01, 1467.15],
            "id": "G22"
        }, {
            "zd_id": "Seed603",
            "coords": [-2817.47, 1652.72],
            "id": "G27"
        }, {
            "zd_id": "Seed604",
            "coords": [-2646.01, 1535.13],
            "id": "G23"
        }, {
            "zd_id": "Seed605",
            "coords": [-2521.76, 1318.59],
            "id": "G19"
        }, {
            "zd_id": "Seed606",
            "coords": [-2850, 1229],
            "id": "G18"
        }, {
            "zd_id": "Seed607",
            "coords": [-2867.82, 1124.93],
            "id": "G13"
        }, {
            "zd_id": "Seed608",
            "coords": [-3069.68, 910.75],
            "id": "G10"
        }, {
            "zd_id": "Seed609",
            "coords": [2087.11, -3573.56],
            "id": "E02"
        }, {
            "zd_id": "Seed610",
            "coords": [2233.99, -3673.53],
            "id": "E03"
        }, {
            "zd_id": "Seed611",
            "coords": [1615.11, -3661.03],
            "id": "E01"
        }, {
            "zd_id": "Seed612",
            "coords": [1143.4, -3742.78],
            "id": "K03"
        }, {
            "zd_id": "Seed613",
            "coords": [603.4, -3633.77],
            "id": "K02"
        }, {
            "zd_id": "Seed614",
            "coords": [206.76, -3559.01],
            "id": "K01"
        }, {
            "zd_id": "Seed615",
            "coords": [-486.72, -3142.92],
            "id": "K05"
        }, {
            "zd_id": "Seed616",
            "coords": [1377.2, -1261.17],
            "id": "E35"
        }, {
            "zd_id": "Seed617",
            "coords": [-147.51, -1159.79],
            "id": "X02"
        }, {
            "zd_id": "Seed618",
            "coords": [-3677.9, -2466.76],
            "id": "H54"
        }, {
            "zd_id": "Seed619",
            "coords": [1549.11, -3108.55],
            "id": "E07"
        }, {
            "zd_id": "Seed620",
            "coords": [3572.84, -3046.93],
            "id": "A12"
        }, {
            "zd_id": "Seed621",
            "coords": [3322.94, -2803.06],
            "id": "E12"
        }, {
            "zd_id": "Seed622",
            "coords": [-3041.12, -2520.18],
            "id": "H46"
        }, {
            "zd_id": "Seed623",
            "coords": [-3061.22, -2813.69],
            "id": "H34"
        }, {
            "zd_id": "Seed624",
            "coords": [-3115.97, -2806.23],
            "id": "H33"
        }, {
            "zd_id": "Seed625",
            "coords": [3779.71, -3361.52],
            "id": "A07"
        }, {
            "zd_id": "Seed626",
            "coords": [-1859.59, 334.3],
            "id": "R56"
        }, {
            "zd_id": "Seed627",
            "coords": [-1965.81, 600.95],
            "id": "R68"
        }, {
            "zd_id": "Seed628",
            "coords": [-1731.08, 375.13],
            "id": "R57"
        }, {
            "zd_id": "Seed629",
            "coords": [-2053.49, 636.41],
            "id": "R69"
        }, {
            "zd_id": "Seed630",
            "coords": [-2729.92, 761.38],
            "id": "R72"
        }, {
            "zd_id": "Seed631",
            "coords": [-2351.15, 846.18],
            "id": "R73"
        }, {
            "zd_id": "Seed632",
            "coords": [-2645.98, 547.92],
            "id": "R63"
        }, {
            "zd_id": "Seed634",
            "coords": [-1094.14, -1731.89],
            "id": "K25"
        }, {
            "zd_id": "Seed635",
            "coords": [-770.03, 1380.98],
            "id": "C82"
        }, {
            "zd_id": "Seed636",
            "coords": [-3841.71, -803.98],
            "id": "T28"
        }, {
            "zd_id": "Seed637",
            "coords": [-161.75, -262.04],
            "id": "C33"
        }, {
            "zd_id": "Seed638",
            "coords": [97.64, -429.81],
            "id": "C29"
        }, {
            "zd_id": "Seed639",
            "coords": [-567.79, -2599.2],
            "id": "K11"
        }, {
            "zd_id": "Seed641",
            "coords": [3292.12, -1428.61],
            "id": "A42"
        }, {
            "zd_id": "Seed642",
            "coords": [-2946.5, -3146.7],
            "id": "H20"
        }, {
            "zd_id": "Seed643",
            "coords": [-2467.77, -2765.22],
            "id": "H36"
        }, {
            "zd_id": "Seed644",
            "coords": [1647.23, -2244.46],
            "id": "E18"
        }, {
            "zd_id": "Seed645",
            "coords": [2019.42, -2172.9],
            "id": "E20"
        }, {
            "zd_id": "Seed646",
            "coords": [1885.78, -2749.11],
            "id": "E10"
        }, {
            "zd_id": "Seed647",
            "coords": [-2210.06, -2908.54],
            "id": "H31"
        }, {
            "zd_id": "Seed648",
            "coords": [-2340.7, 1104.58],
            "id": "R76"
        }, {
            "zd_id": "Seed649",
            "coords": [-2099.38, 1104.73],
            "id": "R77"
        }, {
            "zd_id": "Seed650",
            "coords": [-1819.3, 973.6],
            "id": "R79"
        }, {
            "zd_id": "Seed651",
            "coords": [-1405.51, 459.71],
            "id": "R58"
        }, {
            "zd_id": "Seed653",
            "coords": [86.23, -412.09],
            "id": "C28"
        }, {
            "zd_id": "Seed654",
            "coords": [-234.59, -743.93],
            "id": "X23"
        }, {
            "zd_id": "Seed655",
            "coords": [-247.16, -739.61],
            "id": "X22"
        }, {
            "zd_id": "Seed656",
            "coords": [-425.27, 1189.35],
            "id": "C75"
        }, {
            "zd_id": "Seed657",
            "coords": [-599.95, 1071.82],
            "id": "C69"
        }, {
            "zd_id": "Seed658",
            "coords": [3175.44, 3204.03],
            "id": "F32"
        }, {
            "zd_id": "Seed659",
            "coords": [908.29, 2193.53],
            "id": "L07"
        }, {
            "zd_id": "Seed660",
            "coords": [-4252.4, -84.01],
            "id": "R32"
        }, {
            "zd_id": "Seed661",
            "coords": [-3327.45, -336.92],
            "id": "R28"
        }, {
            "zd_id": "Seed662",
            "coords": [-4330.52, -2052.86],
            "id": "T07"
        }, {
            "zd_id": "Seed663",
            "coords": [-4155.94, -3404.13],
            "id": "H17"
        }, {
            "zd_id": "Seed665",
            "coords": [-4397.61, -3773.92],
            "id": "H01"
        }, {
            "zd_id": "Seed666",
            "coords": [-3574.57, -3272.38],
            "id": "H19"
        }, {
            "zd_id": "Seed667",
            "coords": [-3793.74, -3032.97],
            "id": "H25"
        }, {
            "zd_id": "Seed668",
            "coords": [-2523.4, -1736.95],
            "id": "H69"
        }, {
            "zd_id": "Seed669",
            "coords": [-3207.55, -333.99],
            "id": "R29"
        }, {
            "zd_id": "Seed670",
            "coords": [322.07, 525.01],
            "id": "C56"
        }, {
            "zd_id": "Seed671",
            "coords": [-2516.12, -1436.31],
            "id": "R04"
        }, {
            "zd_id": "Seed672",
            "coords": [-2036.95, -1622.95],
            "id": "K22"
        }, {
            "zd_id": "Seed673",
            "coords": [-1884.49, -1813.18],
            "id": "K20"
        }, {
            "zd_id": "Seed674",
            "coords": [-1047.62, -2620.56],
            "id": "K10"
        }, {
            "zd_id": "Seed675",
            "coords": [-3207.79, -494.89],
            "id": "R20"
        }, {
            "zd_id": "Seed677",
            "coords": [-3109.26, -909.27],
            "id": "R12"
        }, {
            "zd_id": "Seed678",
            "coords": [-3078.34, -1120.36],
            "id": "T25"
        }, {
            "zd_id": "Seed679",
            "coords": [4338.09, -2438.52],
            "id": "A29"
        }, {
            "zd_id": "Seed680",
            "coords": [-2210.6, -1621.4],
            "id": "R01"
        }, {
            "zd_id": "Seed681",
            "coords": [-1095.99, -3399.87],
            "id": "H15"
        }, {
            "zd_id": "Seed682",
            "coords": [-1110.8, -3043.86],
            "id": "H22"
        }, {
            "zd_id": "Seed683",
            "coords": [-1682.22, -2184.84],
            "id": "H62"
        }, {
            "zd_id": "Seed684",
            "coords": [-3014.16, 372.44],
            "id": "R50"
        }, {
            "zd_id": "Seed685",
            "coords": [-3496.12, -3580.67],
            "id": "H09"
        }, {
            "zd_id": "Seed686",
            "coords": [-3461.16, 166.3],
            "id": "R46"
        }, {
            "zd_id": "Seed687",
            "coords": [-1969.75, 1087.83],
            "id": "R78"
        }, {
            "zd_id": "Seed688",
            "coords": [-3476.2, -69.06],
            "id": "R36"
        }, {
            "zd_id": "Seed689",
            "coords": [-2836.95, -1594.78],
            "id": "H72"
        }, {
            "zd_id": "Seed690",
            "coords": [-3861.73, -147.16],
            "id": "R34"
        }, {
            "zd_id": "Seed692",
            "coords": [-2393.37, 1047.34],
            "id": "R75"
        }, {
            "zd_id": "Seed693",
            "coords": [-2454.27, 1157.31],
            "id": "G14"
        }, {
            "zd_id": "Seed694",
            "coords": [-1375.17, -3640.94],
            "id": "H06"
        }, {
            "zd_id": "Seed695",
            "coords": [225.38, 872.04],
            "id": "C65"
        }, {
            "zd_id": "Seed696",
            "coords": [69.3, 1438],
            "id": "C84"
        }, {
            "zd_id": "Seed697",
            "coords": [-1125.28, -675.43],
            "id": "R19"
        }, {
            "zd_id": "Seed698",
            "coords": [-3295.15, -1362.93],
            "id": "T21"
        }, {
            "zd_id": "Seed699",
            "coords": [3877.54, -2371.86],
            "id": "A27"
        }, {
            "zd_id": "Seed700",
            "coords": [4105.45, -2836.7],
            "id": "A19"
        }, {
            "zd_id": "Seed701",
            "coords": [613.41, -743.38],
            "id": "C11"
        }, {
            "zd_id": "Seed703",
            "coords": [2170.74, -2109.55],
            "id": "E21"
        }, {
            "zd_id": "Seed704",
            "coords": [-941.41, -817.63],
            "id": "C07"
        }, {
            "zd_id": "Seed705",
            "coords": [-1372.54, -107.99],
            "id": "R42"
        }, {
            "zd_id": "Seed706",
            "coords": [-1512.02, 56.46],
            "id": "R48"
        }, {
            "zd_id": "Seed707",
            "coords": [-1142.42, -761.95],
            "id": "R16"
        }, {
            "zd_id": "Seed708",
            "coords": [-935.21, -641.24],
            "id": "C14"
        }, {
            "zd_id": "Seed709",
            "coords": [-1092.08, -497.51],
            "id": "R27"
        }, {
            "zd_id": "Seed710",
            "coords": [-737.41, 333.76],
            "id": "C48"
        }, {
            "zd_id": "Seed711",
            "coords": [-710.25, 99.93],
            "id": "C41"
        }, {
            "zd_id": "Seed712",
            "coords": [-516.96, 97.79],
            "id": "C42"
        }, {
            "zd_id": "Seed713",
            "coords": [-363.25, 396.94],
            "id": "C49"
        }, {
            "zd_id": "Seed714",
            "coords": [-512.75, 550.62],
            "id": "C54"
        }, {
            "zd_id": "Seed715",
            "coords": [-122.09, 594],
            "id": "C55"
        }, {
            "zd_id": "Seed716",
            "coords": [-133.71, 945.04],
            "id": "C64"
        }, {
            "zd_id": "Seed717",
            "coords": [39.26, 1034.49],
            "id": "C71"
        }, {
            "zd_id": "Seed718",
            "coords": [-681.32, -860.63],
            "id": "C08"
        }, {
            "zd_id": "Seed719",
            "coords": [-3610.65, -3491.99],
            "id": "H10"
        }, {
            "zd_id": "Seed720",
            "coords": [56.69, 3150.02],
            "id": "L59"
        }, {
            "zd_id": "Seed721",
            "coords": [-2900.08, -2508.79],
            "id": "H47"
        }, {
            "zd_id": "Seed722",
            "coords": [-2918.6, 479.73],
            "id": "R59"
        }, {
            "zd_id": "Seed723",
            "coords": [-2908.74, 796.27],
            "id": "R71"
        }, {
            "zd_id": "Seed724",
            "coords": [-1551.97, 815.49],
            "id": "R74"
        }, {
            "zd_id": "Seed725",
            "coords": [-1984.87, 362.95],
            "id": "R54"
        }, {
            "zd_id": "Seed726",
            "coords": [-2312.61, 24.02],
            "id": "R37"
        }, {
            "zd_id": "Seed727",
            "coords": [-3803.93, -772.46],
            "id": "T29"
        }, {
            "zd_id": "Seed728",
            "coords": [-2715.91, -429.86],
            "id": "R21"
        }, {
            "zd_id": "Seed729",
            "coords": [-3271.39, -1868.26],
            "id": "T11"
        }, {
            "zd_id": "Seed730",
            "coords": [-753.67, -1086.79],
            "id": "C01"
        }, {
            "zd_id": "Seed732",
            "coords": [292.18, -724.09],
            "id": "C10"
        }, {
            "zd_id": "Seed733",
            "coords": [-1349.38, -2734.52],
            "id": "H38"
        }, {
            "zd_id": "Seed734",
            "coords": [-4123.61, -1935.34],
            "id": "T09"
        }, {
            "zd_id": "Seed735",
            "coords": [147.1, 295.77],
            "id": "C50"
        }, {
            "zd_id": "Seed736",
            "coords": [3084.93, 2884.65],
            "id": "F18"
        }, {
            "zd_id": "Seed737",
            "coords": [3960.62, -858.59],
            "id": "A54"
        }, {
            "zd_id": "Seed738",
            "coords": [4239.35, -998.26],
            "id": "A53"
        }, {
            "zd_id": "Seed739",
            "coords": [4042.22, -661.97],
            "id": "A55"
        }, {
            "zd_id": "Seed740",
            "coords": [4144.26, -595.97],
            "id": "A57"
        }, {
            "zd_id": "Seed741",
            "coords": [4332.92, -696.63],
            "id": "A56"
        }, {
            "zd_id": "Seed742",
            "coords": [3075.88, -3684.38],
            "id": "A01"
        }, {
            "zd_id": "Seed743",
            "coords": [-2207.49, -1767.47],
            "id": "H71"
        }, {
            "zd_id": "Seed747",
            "coords": [-2698.42, -766.75],
            "id": "R17"
        }, {
            "zd_id": "Seed748",
            "coords": [-2669.56, -864.39],
            "id": "R13"
        }, {
            "zd_id": "Seed750",
            "coords": [-2083.96, -1558.72],
            "id": "R03"
        }, {
            "zd_id": "Seed751",
            "coords": [-2217.83, -1565.02],
            "id": "R02"
        }, {
            "zd_id": "Seed752",
            "coords": [-2022.65, -1300.63],
            "id": "R06"
        }, {
            "zd_id": "Seed753",
            "coords": [-2383.53, -1150.63],
            "id": "R08"
        }, {
            "zd_id": "Seed754",
            "coords": [2315.03, -1133.26],
            "id": "E43"
        }, {
            "zd_id": "Seed755",
            "coords": [-2060.66, -775.79],
            "id": "R15"
        }, {
            "zd_id": "Seed758",
            "coords": [-2434.11, -491.04],
            "id": "R22"
        }, {
            "zd_id": "Seed759",
            "coords": [-2370.11, -345.31],
            "id": "R31"
        }, {
            "zd_id": "Seed760",
            "coords": [-1045.92, -2707.64],
            "id": "K09"
        }, {
            "zd_id": "Seed761",
            "coords": [-2636.28, -1246.99],
            "id": "R05"
        }, {
            "zd_id": "Seed763",
            "coords": [-1651.16, -39.07],
            "id": "R41"
        }, {
            "zd_id": "Seed764",
            "coords": [-1590.04, -229.13],
            "id": "R40"
        }, {
            "zd_id": "Seed766",
            "coords": [-1077.38, -1278.71],
            "id": "R07"
        }, {
            "zd_id": "Seed767",
            "coords": [1537.85, -2091.5],
            "id": "E19"
        }, {
            "zd_id": "Seed769",
            "coords": [-4876.91, 2469.67],
            "id": "W25"
        }, {
            "zd_id": "Seed770",
            "coords": [-872.9, -3316.11],
            "id": "H16"
        }, {
            "zd_id": "Seed771",
            "coords": [3732.84, -2423.22],
            "id": "A26"
        }, {
            "zd_id": "Seed772",
            "coords": [-1805.36, -1842.53],
            "id": "K21"
        }, {
            "zd_id": "Seed773",
            "coords": [237.44, -2943.39],
            "id": "K07"
        }, {
            "zd_id": "Seed774",
            "coords": [-4330.86, -2600.16],
            "id": "H40"
        }, {
            "zd_id": "Seed775",
            "coords": [-4507.23, -2146.11],
            "id": "H60"
        }, {
            "zd_id": "Seed776",
            "coords": [-4482.93, -1970.88],
            "id": "T08"
        }, {
            "zd_id": "Seed779",
            "coords": [-254.35, -264.41],
            "id": "C32"
        }, {
            "zd_id": "Seed781",
            "coords": [1404.95, -832.99],
            "id": "Z03"
        }, {
            "zd_id": "Seed782",
            "coords": [-2636.62, -2048.35],
            "id": "H64"
        }, {
            "zd_id": "Seed783",
            "coords": [3604.77, -1008.64],
            "id": "A52"
        }, {
            "zd_id": "Seed784",
            "coords": [3112.55, -1295.33],
            "id": "A45"
        }, {
            "zd_id": "Seed785",
            "coords": [3709.39, -1683.44],
            "id": "A37"
        }, {
            "zd_id": "Seed786",
            "coords": [-324.39, -798.16],
            "id": "X19"
        }, {
            "zd_id": "Seed787",
            "coords": [-436.57, -932.83],
            "id": "X13"
        }, {
            "zd_id": "Seed788",
            "coords": [-368.95, -993.45],
            "id": "X08"
        }, {
            "zd_id": "Seed789",
            "coords": [-253.85, -632.23],
            "id": "X24"
        }, {
            "zd_id": "Seed791",
            "coords": [85.55, -634.98],
            "id": "C17"
        }, {
            "zd_id": "Seed792",
            "coords": [-2290.11, -3407.6],
            "id": "H13"
        }, {
            "zd_id": "Seed793",
            "coords": [-1258.63, -2360.1],
            "id": "K12"
        }, {
            "zd_id": "Seed794",
            "coords": [-1675.99, -2139.3],
            "id": "H63"
        }, {
            "zd_id": "Seed795",
            "coords": [-1309.77, -1941.56],
            "id": "K17"
        }, {
            "zd_id": "Seed796",
            "coords": [-4402.56, -2866.69],
            "id": "H32"
        }, {
            "zd_id": "Seed797",
            "coords": [-3799.65, 3428.89],
            "id": "W56"
        }, {
            "zd_id": "Seed798",
            "coords": [3662.78, -2067.32],
            "id": "A32"
        }, {
            "zd_id": "Seed799",
            "coords": [-1351.46, 3770.79],
            "id": "W64"
        }, {
            "zd_id": "Seed800",
            "coords": [3496.16, -3374.3],
            "id": "A06"
        }, {
            "zd_id": "Seed801",
            "coords": [3455.61, -3581.87],
            "id": "A03"
        }, {
            "zd_id": "Seed802",
            "coords": [2441.14, -1241.73],
            "id": "E42"
        }, {
            "zd_id": "Seed803",
            "coords": [-4112.9, 1377.54],
            "id": "G16"
        }, {
            "zd_id": "Seed804",
            "coords": [-703.69, -1443.79],
            "id": "K29"
        }, {
            "zd_id": "Seed806",
            "coords": [-2836.29, -2423.84],
            "id": "H50"
        }, {
            "zd_id": "Seed807",
            "coords": [-3277.42, -2618.86],
            "id": "H43"
        }, {
            "zd_id": "Seed808",
            "coords": [3237.8, -1527.75],
            "id": "A41"
        }, {
            "zd_id": "Seed809",
            "coords": [3297.69, -1583.79],
            "id": "A39"
        }, {
            "zd_id": "Seed810",
            "coords": [3296.23, -1421.09],
            "id": "A43"
        }, {
            "zd_id": "Seed811",
            "coords": [3010.16, -1204.25],
            "id": "A50"
        }, {
            "zd_id": "Seed812",
            "coords": [2551.06, -3592.68],
            "id": "E04"
        }, {
            "zd_id": "Seed813",
            "coords": [2469.91, -3174.5],
            "id": "E06"
        }, {
            "zd_id": "Seed814",
            "coords": [3372.05, -2315.19],
            "id": "A25"
        }, {
            "zd_id": "Seed815",
            "coords": [863.92, -3358.53],
            "id": "K04"
        }, {
            "zd_id": "Seed816",
            "coords": [3244.92, -2000.31],
            "id": "A30"
        }, {
            "zd_id": "Seed817",
            "coords": [3479.97, -2077.34],
            "id": "A31"
        }, {
            "zd_id": "Seed818",
            "coords": [4008.6, -2736.31],
            "id": "A22"
        }, {
            "zd_id": "Seed820",
            "coords": [1950.85, -1832.66],
            "id": "E27"
        }, {
            "zd_id": "Seed822",
            "coords": [2424.33, -1738.5],
            "id": "E29"
        }, {
            "zd_id": "Seed823",
            "coords": [2703.71, -1749.27],
            "id": "E30"
        }, {
            "zd_id": "Seed824",
            "coords": [-1535.3, -3475.82],
            "id": "H14"
        }, {
            "zd_id": "Seed825",
            "coords": [589.77, -1107.13],
            "id": "C02"
        }, {
            "zd_id": "Seed826",
            "coords": [178.55, -940.02],
            "id": "C04"
        }, {
            "zd_id": "Seed827",
            "coords": [-427.4, -1734.05],
            "id": "K27"
        }, {
            "zd_id": "Seed828",
            "coords": [-332.59, -1747.39],
            "id": "K28"
        }, {
            "zd_id": "Seed829",
            "coords": [-40.78, -2985.75],
            "id": "K06"
        }, {
            "zd_id": "Seed830",
            "coords": [-2989.57, -2164.99],
            "id": "T03"
        }, {
            "zd_id": "Seed831",
            "coords": [-3125.19, -1366.51],
            "id": "T22"
        }, {
            "zd_id": "Seed832",
            "coords": [2662.63, -3471.59],
            "id": "E05"
        }, {
            "zd_id": "Seed833",
            "coords": [-1764, -2350.7],
            "id": "H58"
        }, {
            "zd_id": "Seed834",
            "coords": [1687.56, -1717.09],
            "id": "E26"
        }, {
            "zd_id": "Seed835",
            "coords": [2478.57, -1391.59],
            "id": "E38"
        }, {
            "zd_id": "Seed836",
            "coords": [2752.29, -1366.34],
            "id": "E39"
        }, {
            "zd_id": "Seed839",
            "coords": [-3843.16, -3348.18],
            "id": "H18"
        }, {
            "zd_id": "Seed840",
            "coords": [-3414.79, -3509.61],
            "id": "H11"
        }, {
            "zd_id": "Seed841",
            "coords": [-3734.78, -2964.4],
            "id": "H26"
        }, {
            "zd_id": "Seed842",
            "coords": [-2842.7, -3493.49],
            "id": "H12"
        }, {
            "zd_id": "Seed843",
            "coords": [-239.38, -112.59],
            "id": "C35"
        }, {
            "zd_id": "Seed844",
            "coords": [-609.57, -682.3],
            "id": "C15"
        }, {
            "zd_id": "Seed845",
            "coords": [-2602.18, -3238.93],
            "id": "H21"
        }, {
            "zd_id": "Seed846",
            "coords": [-2250.22, -3092.18],
            "id": "H30"
        }, {
            "zd_id": "Seed847",
            "coords": [-2487.66, -3021.6],
            "id": "H29"
        }, {
            "zd_id": "Seed848",
            "coords": [-2984.9, -2693.53],
            "id": "H44"
        }, {
            "zd_id": "Seed849",
            "coords": [-2936.53, -2412.46],
            "id": "H48"
        }, {
            "zd_id": "Seed850",
            "coords": [-2736.11, -2582.83],
            "id": "H45"
        }, {
            "zd_id": "Seed851",
            "coords": [-2638.9, -2364.1],
            "id": "H51"
        }, {
            "zd_id": "Seed852",
            "coords": [-2791.13, -1945.6],
            "id": "H65"
        }, {
            "zd_id": "Seed853",
            "coords": [-2910.18, -1639.04],
            "id": "T18"
        }, {
            "zd_id": "Seed855",
            "coords": [-2382.55, -2132.68],
            "id": "H61"
        }, {
            "zd_id": "Seed856",
            "coords": [-2297.37, -2293.15],
            "id": "H57"
        }, {
            "zd_id": "Seed857",
            "coords": [-2015.55, -2456],
            "id": "H52"
        }, {
            "zd_id": "Seed858",
            "coords": [-2012.6, -1921.7],
            "id": "H68"
        }, {
            "zd_id": "Seed859",
            "coords": [-1781, -2745.02],
            "id": "H37"
        }, {
            "zd_id": "Seed860",
            "coords": [-1819.09, 1532.65],
            "id": "R80"
        }, {
            "zd_id": "Seed861",
            "coords": [-4527.84, 1423.33],
            "id": "G20"
        }, {
            "zd_id": "Seed862",
            "coords": [2655.79, -971.17],
            "id": "E44"
        }, {
            "zd_id": "Seed863",
            "coords": [2355.88, -2067.38],
            "id": "E22"
        }, {
            "zd_id": "Seed864",
            "coords": [2663.9, -2066.87],
            "id": "E23"
        }, {
            "zd_id": "Seed865",
            "coords": [2273.8, -1823.22],
            "id": "E28"
        }, {
            "zd_id": "Seed866",
            "coords": [2179.55, -1282.04],
            "id": "E37"
        }, {
            "zd_id": "Seed867",
            "coords": [2266.56, -1565.49],
            "id": "E32"
        }, {
            "zd_id": "Seed868",
            "coords": [406.11, 3051.13],
            "id": "L52"
        }, {
            "zd_id": "Seed869",
            "coords": [2060.98, -2757.42],
            "id": "E11"
        }, {
            "zd_id": "Seed870",
            "coords": [2195.5, -3007.84],
            "id": "E09"
        }, {
            "zd_id": "Seed871",
            "coords": [1658.13, -2564.88],
            "id": "E13"
        }, {
            "zd_id": "Seed872",
            "coords": [1593.88, -2475.25],
            "id": "E15"
        }, {
            "zd_id": "Seed873",
            "coords": [1865.56, -2465.04],
            "id": "E16"
        }, {
            "zd_id": "Seed874",
            "coords": [319.65, -962.07],
            "id": "C05"
        }, {
            "zd_id": "Seed875",
            "coords": [-4552.24, 1353.16],
            "id": "G15"
        }, {
            "zd_id": "Seed876",
            "coords": [153.95, 2981.72],
            "id": "L51"
        }, {
            "zd_id": "Seed877",
            "coords": [-267.21, -610.19],
            "id": "C16"
        }, {
            "zd_id": "Seed879",
            "coords": [-254, -739.54],
            "id": "X21"
        }, {
            "zd_id": "Seed880",
            "coords": [1008.13, -1564.02],
            "id": "K31"
        }, {
            "zd_id": "Seed881",
            "coords": [868.02, -1362.17],
            "id": "K32"
        }, {
            "zd_id": "Seed882",
            "coords": [25.66, 147.48],
            "id": "C44"
        }, {
            "zd_id": "Seed883",
            "coords": [-1227.24, -1578.18],
            "id": "K24"
        }, {
            "zd_id": "Seed884",
            "coords": [-1436.29, -1668.66],
            "id": "K23"
        }, {
            "zd_id": "Seed885",
            "coords": [-816.68, -1926.16],
            "id": "K19"
        }, {
            "zd_id": "Seed886",
            "coords": [-1019.52, -2077.3],
            "id": "K16"
        }, {
            "zd_id": "Seed887",
            "coords": [-265.74, -1138.76],
            "id": "X03"
        }, {
            "zd_id": "Seed888",
            "coords": [-68.06, -979.62],
            "id": "X12"
        }, {
            "zd_id": "Seed889",
            "coords": [-100.92, -979.75],
            "id": "X11"
        }, {
            "zd_id": "Seed890",
            "coords": [-270.26, -879.2],
            "id": "X14"
        }, {
            "zd_id": "Seed891",
            "coords": [-353.38, -829.61],
            "id": "X17"
        }, {
            "zd_id": "Seed892",
            "coords": [-3673.79, 698.3],
            "id": "G06"
        }, {
            "zd_id": "Seed893",
            "coords": [-1017.86, -1066.08],
            "id": "R11"
        }, {
            "zd_id": "Seed894",
            "coords": [-130.54, -1379.28],
            "id": "K30"
        }, {
            "zd_id": "Seed895",
            "coords": [-670.09, -932.68],
            "id": "C03"
        }, {
            "zd_id": "Seed896",
            "coords": [-163.28, -784.68],
            "id": "X20"
        }, {
            "zd_id": "Seed897",
            "coords": [806.57, 24.09],
            "id": "C46"
        }, {
            "zd_id": "Seed898",
            "coords": [623.24, -194.77],
            "id": "C34"
        }, {
            "zd_id": "Seed899",
            "coords": [504.45, -493.47],
            "id": "C23"
        }, {
            "zd_id": "Seed900",
            "coords": [685.13, -2758.46],
            "id": "K08"
        }]
    }
}, locations);
