const movies = [
  { 
        name: "Walking Dead", 
        page: "asset/movies/PAGEMOVIE_the-walking-dead-1648.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-walking-dead-1648.jpg",
        genre: "action" 
    },
    { 
        name: "War In The USA", 
        page: "asset/movies/PAGEMOVIE_war-in-the-usa-1630858890.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/war-in-the-usa-1630858890.jpg",
        genre: "action" 
    },
    { 
        name: "It Feeds", 
        page: "asset/movies/PAGEMOVIE_it-feeds-1630858891.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/it-feeds-1630858891.webp",
        genre: "action" 
    },
   { 
        name: "Home Alone", 
        page: "asset/movies/PAGEMOVIE_home-alone-4954.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/home-alone-4954.jpg",
        genre: "action" 
    },
    { 
        name: "Home Alone 2:Lost in New York", 
        page: "asset/movies/PAGEMOVIE_home-alone-2-lost-in-new-york-4955.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/home-alone-2-lost-in-new-york-4955.jpg",
        genre: "action" 
    },
    { 
        name: "Punchdrunk:Behind The Mask", 
        page: "asset/movies/PAGEMOVIE_punchdrunk-behind-the-mask-1630858899.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/punchdrunk-behind-the-mask-1630858899.webp",
        genre: "action" 
    },
    { 
        name: "Plankton:The Movie", 
        page: "asset/movies/PAGEMOVIE_plankton-the-movie-1630858561.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/plankton-the-movie-1630858561.jpg",
        genre: "action" 
    },
   { 
        name: "Twister(1996)", 
        page: "asset/movies/PAGEMOVIE_twister-1996-5827483.html", 
        image: "https://m.media-amazon.com/images/M/MV5BNGVhY2JjYzgtYjAyOC00ODg0LTliYWEtMzliZWYzMjA2NjYyXkEyXkFqcGc@._V1_SL200_QL1.jpg",
        genre: "Adventure" 
    },
   { 
        name: "NOVOCAINE", 
        page: "asset/movies/PAGEMOVIE_novocaine-1038483944.html", 
        image: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/xmMHGz9dVRaMY6rRAlEX4W0Wdhm.jpg",
        genre: "Adventure" 
    },
   { 
        name: "The Chosen", 
        page: "asset/movies/PAGEMOVIE_the-chosen-6825828.html", 
        image: "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/fc6FqGatySnYSNYg2U4HQeZfoeV.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Darla in Space", 
        page: "asset/movies/PAGEMOVIE_darla-in-space-1630858904.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/darla-in-space-1630858904.webp",
        genre: "Adventure" 
    },

   { 
        name: "Cash on Delivery", 
        page: "asset/movies/PAGEMOVIE_cash-on-delivery-1630858903.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/cash-on-delivery-1630858903.webp",
        genre: "Adventure" 
    },
   { 
        name: "Hancock: Very Nearly an Armful", 
        page: "asset/movies/PAGEMOVIE_hancock-very-nearly-an-armful-1630858905.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/hancock-very-nearly-an-armful-1630858905.jpg",
        genre: "Adventure" 
    },
    
   { 
        name: "Don‘t Turn Out The Lights", 
        page: "asset/movies/PAGEMOVIE_don-t-turn-out-the-lights-1630858902.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/don-t-turn-out-the-lights-1630858902.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Shark Warning", 
        page: "asset/movies/PAGEMOVIE_shark-warning-1630857387.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/shark-warning-1630857387.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Tale of the Forest Unicorn", 
        page: "asset/movies/PAGEMOVIE_tale-of-the-forest-unicorn-1630858898.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/tale-of-the-forest-unicorn-1630858898.jpg",
        genre: "Adventure" 
    },
   { 
        name: "The Bunker", 
        page: "asset/movies/PAGEMOVIE_the-bunker-1630858897.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/the-bunker-1630858897.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Meg 2: The Trench", 
        page: "asset/movies/PAGEMOVIE_meg-2-the-trench-1627222790.html", 
        image: "https://media.themoviedb.org/t/p/w116_and_h174_face/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        genre: "Adventure" 
    },  
   { 
        name: "Snow White", 
        page: "asset/movies/PAGEMOVIE_snow-white-1630858706.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/snow-white-1630858706.jpg",
        genre: "action" 
    },
    { 
        name: "Iron Within", 
        page: "asset/movies/PAGEMOVIE_iron-within-1630858852.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/iron-within-1630858852.webp",
        genre: "action" 
    },
    { 
        name: "Nimona", 
        page: "asset/movies/PAGEMOVIE_nimona-1630855397.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/nimona-1630855397.jpg",
        genre: "action" 
    },
    { 
        name: "Avatar: The Way of Water", 
        page: "asset/movies/PAGEMOVIE_avatar-way-of-water.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVqLEwgcLlUjls-o6ahgTNyekv3quiAfrNL62Axed5zM1lc1jwrGsh4A&amp;s=10",
        genre: "action" 
    },
   { 
        name: "Wonka", 
        page: "asset/movies/PAGEMOVIE_wonka-1630856393.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/wonka-1630856207.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Mr Doom", 
        page: "asset/movies/PAGEMOVIE_mr-doom-1038483944.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/mr-doom-1630858894.webp",
        genre: "Adventure" 
    },
   { 
        name: "The Highwayman", 
        page: "asset/movies/PAGEMOVIE_the-high-way-man.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-highwayman-1630853362.jpg",
        genre: "Adventure" 
    },
   { 
        name: "The Jack in the Box: Awakening", 
        page: "asset/movies/PAGEMOVIE_the-jack-in-the-box-awakening-1630852585.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-jack-in-the-box-awakening-1630852585.jpg",
        genre: "Adventure" 
    },

   { 
        name: "Saltwater: The Battle for Ramree Island", 
        page: "asset/movies/PAGEMOVIE_saltwater-the-battle-for-ramree-island-1621869051.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/saltwater-the-battle-for-ramree-island-1621869051.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Billie Eilish Unfiltered", 
        page: "asset/movies/PAGEMOVIE_billie-eilish-unfiltered-1630858893.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/billie-eilish-unfiltered-1630858893.webp",
        genre: "Adventure" 
    },
    
   { 
        name: "Not Just a Goof", 
        page: "asset/movies/PAGEMOVIE_not-just-a-goof-1630858879.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/not-just-a-goof-1630858879.jpg",
        genre: "Adventure" 
    },
   { 
        name: "The Shift", 
        page: "asset/movies/PAGEMOVIE_the-shift-48382838.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-shift-1630858743.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Cora", 
        page: "asset/movies/PAGEMOVIE_cora-1630858866.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/cora-1630858866.webp",
        genre: "Adventure" 
    },
   { 
        name: "Interstate", 
        page: "asset/movies/PAGEMOVIE_interstate-1630857393.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/interstate-1630857393.jpg",
        genre: "Adventure" 
    },
   { 
        name: "The Ape Star", 
        page: "asset/movies/PAGEMOVIE_the-ape-star-1627222790.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-ape-star-1627222790.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Hitting The Apex", 
        page: "asset/movies/PAGEMOVIE_hitting-the-apex-5355.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/hitting-the-apex-5355.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Planet of The Apes", 
        page: "asset/movies/PAGEMOVIE_planet-of-the-apes-4138..html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/planet-of-the-apes-4138.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Planet of The Apes(2001)", 
        page: "asset/movies/PAGEMOVIE_planet-of-the-apes-2001-5460.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/planet-of-the-apes-2001-5460.jpg",
        genre: "Adventure" 
    },
    
  { 
        name: "War For The Planet Of The Apes", 
        page: "asset/movies/PAGEMOVIE_war-for-the-planet-of-the-apes-21331.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/war-for-the-planet-of-the-apes-21331.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Rise Of The Planet Of The Apes", 
        page: "asset/movies/PAGEMOVIE_rise-of-the-planet-of-the-apes-3096.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/rise-of-the-planet-of-the-apes-3096.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Kingdom of the Planet of the Apes", 
        page: "asset/movies/PAGEMOVIE_Kingdom-of-the-Planet-of-the Apes-1627222790.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_kiWlZbIJKqGZy8L4M5XXJ_5S6ndaDFPCjvq5W-ZVeupfUIR",
        genre: "Adventure" 
    },

  { 
        name: "Origin", 
        page: "asset/movies/PAGEMOVIE_origin-1630858872.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/origin-1630858872.webp",
        genre: "action" 
    },
    { 
        name: "Dark Nuns", 
        page: "asset/movies/PAGEMOVIE_dark-nuns-1630858752.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/dark-nuns-1630858752.jpg",
        genre: "action" 
    },
    { 
        name: "Harbin", 
        page: "asset/movies/PAGEMOVIE_harbin-9697602.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/harbin-1630858832.jpg",
        genre: "action" 
    },
    { 
        name: "Dirty Money", 
        page: "asset/movies/PAGEMOVIE_dirty-money-6838.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/dirty-money-1630858831.jpg",
        genre: "action" 
    },
   { 
        name: "Uprising", 
        page: "asset/movies/PAGEMOVIE_uprising-93747.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/uprising-1630857769.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Rule Breakers", 
        page: "asset/movies/PAGEMOVIE_rule-breakers.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/rule-breakers-1630858870.webp",
        genre: "Adventure" 
    },
   { 
        name: "Avatar", 
        page: "asset/movies/PAGEMOVIE_avatar-53849329.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/avatar-4318.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Aliens", 
        page: "asset/movies/PAGEMOVIE_Aliens-637283838.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/aliens-5835.jpg",
        genre: "Adventure" 
    },

   { 
        name: "The Terminator", 
        page: "asset/movies/PAGEMOVIE_the-terminator.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-terminator-2184.jpg",
        genre: "Adventure" 
    },
   { 
        name: "After Death", 
        page: "asset/movies/PAGEMOVIE_after-death-58273.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/after-death-1630858863.webp",
        genre: "Adventure" 
    },
    
    { 
        name: "Pusaka", 
        page: "asset/movies/PAGEMOVIE_pusaka-38483.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/pusaka-1630858840.jpg",
        genre: "action" 
    },
    { 
        name: "Bloody Escape: Bats out of Hell", 
        page: "asset/movies/PAGEMOVIE_Bloody-Escape-Bats-out-of Hell.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/bloody-escape-bats-out-of-hell-1630858841.webp",
        genre: "action" 
    },
    { 
        name: "Uploud", 
        page: "asset/movies/PAGEMOVIE_uploud-4838.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc1uNPEBR0wJb_r8ovyosvUGhGhkKfUHgvlZy9Xm7bNZ08AOzgy3Jtjw&amp;s=10",
        genre: "action" 
    },
    { 
        name: "The Wild Robot", 
        page: "asset/movies/PAGEMOVIE_wild-robot-page-SED.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-wild-robot-1630858186.jpg",
        genre: "action" 
    },
    { 
        name: "Moses", 
        page: "asset/movies/PAGEMOVIE_moses-6838.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/moses-1630853049.jpg",
        genre: "action" 
    },
    { 
        name: "The Great Escape", 
        page: "asset/movies/PAGEMOVIE_the-great-escape-6892.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-great-escape-6892.jpg",
        genre: "action" 
    },
    { 
        name: "America‘s Burning", 
        page: "asset/movies/PAGEMOVIE_america-s-burninh-2422828282831.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/america-s-burning-1630858799.webp",
        genre: "action" 
    },
    { 
        name: "Silent Roar ", 
        page: "asset/movies/PAGEMOVIE_silent-roar-39374848.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/silent-roar-1630858798.webp",
        genre: "action" 
    },
   { 
        name: "Mickey 17", 
        page: "asset/movies/PAGEMOVIE_micky-17-93747.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/mickey-17-1630858789.webp",
        genre: "Adventure" 
    },
   { 
        name: "A Working man", 
        page: "asset/movies/PAGEMOVIE_a-working-man.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/a-working-man-1630858790.jpg",
        genre: "Adventure" 
    },
   { 
        name: "The Meg", 
        page: "asset/movies/PAGEMOVIE_The-meg.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-meg-25819.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Attack on Titan", 
        page: "asset/movies/PAGEMOVIE_attack-on-titan.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1Lxhucxb2DP-lRnzVfasheqf0IM4xvu6yckqKsGAln50D8cnaKvD1IK1&amp;s=10",
        genre: "Adventure" 
    },
 
 { 
        name: "Pacific Rim", 
        page: "asset/movies/PAGEMOVIE_pacific-rim-2155.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/pacific-rim-2155.jpg",
        genre: "other" 
    },
    { 
        name: "Invincible S2", 
        page: "asset/movies/PAGEMOVIE_invincible-season-2-1630856012.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/invincible-season-2-1630856012.jpg",
        genre: "Comedy" 
    },
    { 
        name: "Rick And Morty", 
        page: "asset/movies/PAGEMOVIE_rick-and-morty-1630856389.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVNlpOkyo6HVu-7md5L6IrKShfqAt0zQq_sfRY2D14l1vwwWpiBREl7s&amp;s=10",
        genre: "Action" 
    },
    { 
        name: "Monkey King:  Hero is Back", 
        page: "asset/movies/PAGEMOVIE_monkey-king-hero-is-back-1630858788.html",
        image:"https://img.cdno.my.id/thumb/w_156/h_234/monkey-king-hero-is-back-1630858788.webp",
        genre: "Adventure" 
    },
    { 
        name: "The World Will Tremble", 
        page: "asset/movies/PAGEMOVIE_the-world-will-tremble-1630858787.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/the-world-will-tremble-1630858787.webp",
        genre: "Action" 
    },
    { 
        name: "Five Broken Camras", 
        page: "asset/movies/PAGEMOVIE_five-broken-cameras-1630858755.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/five-broken-cameras-1630858755.webp",
        genre: "Action" 
    },
    { 
        name: "The Glassworker", 
        page: "asset/movies/PAGEMOVIE_the-glassworker-1630858642.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/the-glassworker-1630858642.webp",
        genre: "Action" 
    },
    { 
        name: "Night of the Zoopocalypse", 
        page: "asset/movies/PAGEMOVIE_night-of-the-zoopocalypse-1630858767.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/night-of-the-zoopocalypse-1630858767.webp",
        genre: "others" 
    },
    { 
        name: "Hearts Around the Table: Josh's Third Serving", 
        page:
        "asset/movies/PAGEMOVIE_hearts-around-the-table-josh-s-third-serving-1630858783.html",
        
        image: "https://img.cdno.my.id/thumb/w_312/h_468/hearts-around-the-table-josh-s-third-serving-1630858783.webp",
        genre: "others" 
    },
    { 
        name: "Kupu-Kupu Kertas", 
        page: "asset/movies/PAGEMOVIE_kupu-kupu-kertas-1630858782.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/kupu-kupu-kertas-1630858782.webp",
        genre: "action" 
    },
    { 
        name: "Candlewood", 
        page: "asset/movies/PAGEMOVIE_candlewood-1630858786.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/candlewood-1630858786.webp",
        genre: "action" 
    },
    { 
        name: "Final Caller", 
        page: "asset/movies/PAGEMOVIE_final-caller-1630858778.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/final-caller-1630858778.webp",
        genre: "action" 
    },
    { 
        name: "825 Forest Road", 
        page: "asset/movies/PAGEMOVIE_825-forest-road-1630858774.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/825-forest-road-1630858774.webp",
        genre: "action" 
    },
    { 
        name: "Pacific Rim: Uprising", 
        page: "asset/movies/PAGEMOVIE_pacific-rim-uprising-24221.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/pacific-rim-uprising-24221.jpg",
        genre: "action" 
    },
 { 
        name: "A Minecraft Movie", 
        page: "asset/movies/PAGEMOVIE_a-minecraft-movie-387383873.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SqqxtPAydhmhZ3neF0FSaok-z3jjPGJCCkT7y2ljZr6-5GEmxSbVQFtf&amp;s=10",
        genre: "other" 
    },
    { 
        name: "The Amazing Spider-man 2", 
        page: "asset/movies/PAGEMOVIE_the-amazing-spider-man-2-48473.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsqzdj_a6ur2jeB3i3_Za0pz0UVBrfxKtPg&amp;s",
        genre: "Comedy" 
    },
    { 
        name: "The Beekeeper", 
        page: "asset/movies/PAGEMOVIE_the-beekeeper-1630856389.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/the-beekeeper-1630856389.jpg",
        genre: "Action" 
    },
    { 
        name: "Spider-man:Across The Spider-verse", 
        page: "asset/movies/PAGEMOVIE_spider-man-across-the-spider-verse.html",
        image:"https://img.cdno.my.id/thumb/w_200/h_300/the-truman-show-2432.jpg",
        genre: "Adventure" 
    },
    { 
        name: "Aquaman", 
        page: "asset/movies/PAGEMOVIE_Aquaman-383748.html", 
        image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg",
        genre: "Action" 
    },
  { 
        name: "Wallace & Gromit: Vengeance Most Fowl", 
        page: "asset/movies/PAGEMOVIE_wallaceh.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/wallace--gromit-vengeance-most-fowl-1630858672.webp",
        genre: "other" 
    },
    { 
        name: "Attack on Titan: THE LAST ATTACK", 
        page: "asset/movies/PAGEMOVIE_attack-on-titan-the-last-attack.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/attack-on-titan-the-last-attack-1630858643.webp",
        genre: "Action" 
    },
    { 
        name: "Free Guy", 
        page: "asset/movies/PAGEMOVIE_free-guy-1627222751.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/free-guy-1627222751.jpg",
        genre: "Comedy" 
    },
    { 
        name: "Ready Player One", 
        page: "asset/movies/PAGEMOVIE_ready-player-one-24292.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/ready-player-one-24292.jpg",
        genre: "Action" 
    },
    { 
        name: "The Truman Show", 
        page: "asset/movies/PAGEMOVIE_the-truman-show.html",
        image:"https://img.cdno.my.id/thumb/w_200/h_300/the-truman-show-2432.jpg",
        genre: "Adventure" 
    },
    { 
        name: "Almighty Bruce", 
        page: "asset/movies/PAGEMOVIE_bruce-almighty-3960.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/bruce-almighty-3960.jpg",
        genre: "Action" 
    },
    { 
        name: "Transformers One", 
        page: "asset/movies/PAGEMOVIE_transformers-one-1630857630.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-one-1630857630.jpg",
        genre: "Action" 
    },
    { 
        name: "Transformers:The Last Knight", 
        page: "asset/movies/PAGEMOVIE_transformers-the-last-knight-21142.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-the-last-knight-21142.jpg",
        genre: "Action" 
    },
    { 
        name: "Transformers:Rise of The Beasts", 
        page: "asset/movies/PAGEMOVIE_transformers-rise-of-the-beasts-1630855300.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-rise-of-the-beasts-1630855300.jpg",
        genre: "others" 
    },
    { 
        name: "Transformers:Revenge Of The Fallen", 
        page: "asset/movies/PAGEMOVIE_transformers-revenge-of-the-fallen-1707.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-revenge-of-the-fallen-1707.jpg",
        genre: "others" 
    },
    { 
        name: "Transformers:Dark Side Of the Moon", 
        page: "asset/movies/PAGEMOVIE_transformers-dark-of-the-moon.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/transformers-dark-of-the-moon-1706.jpg",
        genre: "action" 
    },
    { 
        name: "Deadpool", 
        page: "asset/movies/PAGEMOVIE_deadpool-2883.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/deadpool-9802.jpg",
        genre: "action" 
    },
      { 
        name: "Bring Them Down", 
        page: "asset/movies/PAGEMOVIE_bring-them-down.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/bring-them-down-1630858433.webp",
        genre: "other" 
    },
    { 
        name: "A Quiet Place:Day One", 
        page: "asset/movies/PAGEMOVIE_Ga-quiet-place-day-one.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/a-quiet-place-day-one-1630857226.jpg",
        genre: "Action" 
    },
    { 
        name: "A Quiet Place II", 
        page: "asset/movies/PAGEMOVIE_a-quiet-place-part-ii.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/a-quiet-place-part-ii-1621869026.jpg",
        genre: "Comedy" 
    },
    { 
        name: "World War Z", 
        page: "asset/movies/PAGEMOVIE_worldwar-z.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJoksMZJA7xz6fRmAD7KIdp5NoUX18eg5Ku3xcSFkVLbhVfjyRK81ZF8&amp;s=10",
        genre: "Action" 
    },
    { 
        name: "Fortitude: Forging the Trillion Dollar Space Economy", 
        page: "asset/movies/PAGEMOVIE_fortitude-forging-the-trillion-dollar-space-economy.html",
        image:"https://img.cdno.my.id/thumb/w_312/h_468/fortitude-forging-the-trillion-dollar-space-economy-1630858727.jpg",
        genre: "Adventure" 
    },
    { 
        name: "A Knights War", 
        page: "asset/movies/PAGEMOVIE_a-knights-war.html", 
        image: "https://img.cdno.my.id/thumb/w_234/h_351/a-knight-s-war-1630858719.webp",
        genre: "Action" 
    },
    { 
        name: "Gladiator II", 
        page: "asset/movies/PAGEMOVIE_gladiatorII.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/gladiator-ii-1630857926.jpg",
        genre: "Action" 
    },
    { 
        name: "Rampage(2018)", 
        page: "asset/movies/PAGEMOVIE_rampage.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/rampage-24533.jpg",
        genre: "Action" 
    },
    { 
        name: "Inception", 
        page: "asset/movies/PAGEMOVIE_Inception.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxi_rRdrGA5qw7S6d5S2bTH7RAIT14BrfLydn7bnU15790t6enBvYs5Y&amp;s=10",
        genre: "Sci-Fi" 
    },
    { 
        name: "Godzilla", 
        page: "asset/movies/PAGEMOVIE_Godzilla.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-GJ1keH-r6WO1o_2zqOBfPhnDlkZ0KvdRGZABcoKJBv-APuCAIeGn0xE&amp;s=10",
        genre: "Action" 
    },
    { 
        name: "The Red One", 
        page: "asset/movies/PAGEMOVIE_redone.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/red-one-1630857912.jpg",
        genre: "Comedy" 
    },
    { 
        name: "Venom: The Last Dance", 
        page: "asset/movies/PAGEMOVIE_thelastdance.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/venom-the-last-dance-1630857833.jpg",
        genre: "Action" 
    },
    { 
        name: "Aquaman:The Lost Kingdom", 
        page: "asset/movies/PAGEMOVIE_aquamanlostking.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt81k9_cJuHayL7zXSMdsMeWvPU1qS6rEaUjO1P7j7ke57C-DJQrsN2kE&amp;s=10",
        genre: "Adventure" 
    },
    { 
        name: "The Brutalist", 
        page: "asset/movies/PAGEMOVIE_brutalist.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/the-brutalist-1630858152.jpg",
        genre: "Action" 
    },
    { 
        name: "Gladiator II", 
        page: "asset/movies/PAGEMOVIE_gladiatorII.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/gladiator-ii-1630857926.jpg",
        genre: "Action" 
    },
    { 
        name: "Conclave", 
        page: "asset/movies/PAGEMOVIE_conclave.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/conclave-1630858009.jpg",
        genre: "Action" 
    },
    { 
        name: "Heretic", 
        page: "asset/movies/PAGEMOVIE_heretic.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/heretic-1630857913.jpg",
        genre: "others" 
    },
    { 
        name: "Kraven The Hunter", 
        page: "asset/movies/PAGEMOVIE_kraven-the-hunter.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/kraven-the-hunter-1630858127.jpg",
        genre: "others" 
    },
    { 
        name: "Spider-man", 
        page: "asset/movies/PAGEMOVIE_Spider-man.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-3337.jpg",
        genre: "action" 
    },
    { 
        name: "Renner", 
        page: "asset/movies/PAGEMOVIE_Renner.html", 
        image: "https://img.cdno.my.id/thumb/w_156/h_234/renner-1630858715.webp",
        genre: "action" 
    },
    { 
        name: "Spiderman:Home Coming", 
        page: "asset/movies/PAGEMOVIE_spiderman-homecoming.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-homecoming-21248.jpg",
        genre: "action" 
    },
    { 
        name: "Spiderman 3", 
        page: "asset/movies/PAGEMOVIE_spiderman-3.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-3-3339.jpg",
        genre: "action" 
    },
    { 
        name: "Spiderman 2 ", 
        page: "asset/movies/PAGEMOVIE_spiderman-2.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-2-3338.jpg",
        genre: "action" 
    },
    { 
        name: "Spider-man:Into The Spider-verse ", 
        page: "asset/movies/PAGEMOVIE_spider-man-into-the-spider-verse.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/spider-man-into-the-spider-verse-27208.jpg",
        genre: "action" 
    },
   { 
        name: "Dog man", 
        page: "asset/movies/PAGEMOVIE_Dogman.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/dog-man-1630858469.webp",
        genre: "Adventure" 
    },
   { 
        name: "The Order", 
        page: "asset/movies/PAGEMOVIE_The-order.html", 
        image: "https://img.cdno.my.id/thumb/w_312/h_468/the-order-1630858158.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla(1998)", 
        page: "asset/movies/PAGEMOVIE_godzilla-1998.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-1998-6990.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla Minus One", 
        page: "asset/movies/PAGEMOVIE_godzilla-minus-one.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-minus-one-1630856261.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla Vs Kong", 
        page: "asset/movies/PAGEMOVIE_godzilla-vs-kong.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-vs-kong-12101145.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla:The King Of the Monsters", 
        page: "asset/movies/PAGEMOVIE_godzilla-the-king-of-the-monster.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-king-of-the-monsters-28717.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Godzilla x Kong:The New Empire", 
        page: "asset/movies/PAGEMOVIE_the-new-empire.html", 
        image: "https://img.cdno.my.id/thumb/w_200/h_300/godzilla-x-kong-the-new-empire-1630856838.jpg",
        genre: "Adventure" 
    },
   { 
        name: "Sins Of The Night", 
        page: "asset/movies/PAGEMOVIE_sin-of-the-night.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/sins-of-the-night-1630858718.webp",
        genre: "Adventure" 
    },
   { 
        name: "Ultra Red", 
        page: "asset/movies/PAGEMOVIE_ultra-red.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/ultra-red-1630858710.webp",
        genre: "Adventure" 
    },
    
   { 
        name: "The Life List", 
        page: "asset/movies/PAGEMOVIE_thelifelist.html", 
        image: "https://img.cdno.my.id/thumb/w_171/h_257/the-life-list-1630858717.webp",
        genre: "Adventure" 
    },
    
   { 
        name: "The Electric State", 
        page: "asset/movies/PAGEMOVIE_electricstste.html", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLoV2gU72HnqDkHGFOqNx2a4w6dryyBU6ftPAZNdEu7NwB2EiN9EigTpW&amp;s=10",
        genre: "Adventure" 
    }
];

// Shuffle array function
function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }



// Function to display movies
function displayMovies(movieList, elementId) {
  const container = document.getElementById(elementId);

  const hotMovies = movieList.filter(movie => movie.isHot);
  const otherMovies = movieList.filter(movie => !movie.isHot);

  container.innerHTML = `
    ${hotMovies.length > 0 ? `

      <div class="movies-container hot-movies">
        ${hotMovies.map(movie => `
          <div class="movie-card">
            <img src="${movie.image}" loading="lazy" alt="Bongwatch: ${movie.name}">
            <div class="hot-label">HOT</div>
            <div class="movie-info">
              <div class="movie-title">${movie.name}</div>
              <figure></figure>
              <button class="rent-btn" onclick="location.href='${movie.page}'">Watch</button>
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}


    <div class="movies-container">
      ${otherMovies.map(movie => `
        <div class="movie-card">
          <img src="${movie.image}" loading="lazy" alt="Bongwatch: ${movie.name}">
          <div class="movie-info">
            <div class="movie-title">${movie.name}</div>
            <figure></figure>
            <button class="rent-btn" onclick="location.href='${movie.page}'">Watch</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}


// Function to load movies
function loadMovies() {
  let shuffled = shuffleArray([...movies]);
  let recommendedMovies = shuffled.slice(0, 4);
  let otherMovies = shuffled.slice(4, 34); // Start after recommended ones

  // Display recommended and other movies
  displayMovies(recommendedMovies, "recommended-list");
  displayMovies(otherMovies, "other-movies-list");

  // Display the first 9 movies in the movies array as the Latest Movies
  const latestMovies = movies.slice(0, 9);  // Show the first 9 movies
  displayMovies(latestMovies, "latest-movies");

  // Handle country-specific movies
  const country = "USA"; // Default country
  let countryMovies = getCountryMovies(country);
  displayMovies(countryMovies, "top-country-movies");
  document.getElementById("top-country-title").textContent = `Top Movies in ${country}`;
}

// Function to get and manage country-specific movies
function getCountryMovies(country) {
  const currentTime = new Date().getTime();
  const lastUpdatedTime = localStorage.getItem(`${country}-movies-last-updated`);

  // Check if 3 hours have passed or if no record exists
  if (!lastUpdatedTime || currentTime - lastUpdatedTime > 3 * 60 * 60 * 1000) {
    // More than 3 hours passed or no previous data
    const countryMovies = shuffleArray(movies.filter(movie => movie.country === country)).slice(0, 5);
    localStorage.setItem(`${country}-movies`, JSON.stringify(countryMovies));
    localStorage.setItem(`${country}-movies-last-updated`, currentTime); // Update the last updated time
    return countryMovies;
  } else {
    // Return the previously stored movies
    return JSON.parse(localStorage.getItem(`${country}-movies`));
  }
}


// Function to get and manage country-specific movies

 


// Toggle favorite status
function searchMovies() {
  const search = document.getElementById("search").value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestions-container");

  // Clear previous suggestions
  suggestionsContainer.innerHTML = "";

  // If the search input is empty, don't show suggestions
  if (search.trim() === "") {
    suggestionsContainer.style.display = "none";
    return; // Do nothing if the search field is empty
  }

  // Filter movies based on search input
  const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(search));

  // Show suggestions for the filtered movies
  if (filteredMovies.length > 0) {
    suggestionsContainer.style.display = "block"; // Show suggestions
    filteredMovies.forEach(movie => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");

      // Create an image element
      const movieImage = document.createElement("img");
      movieImage.src = movie.image || "default-image.jpg"; // Fallback to default image if none is provided
      movieImage.alt = movie.name;
      movieImage.classList.add("suggestion-image");

      // Create text element for movie name
      const movieName = document.createElement("span");
      movieName.textContent = movie.name;
      movieName.classList.add("movie-name");

      // Append the image and name to the suggestion item
      suggestionItem.appendChild(movieImage);
      suggestionItem.appendChild(movieName);

      // Add an event listener to populate the search input when a suggestion is clicked
suggestionItem.addEventListener("click", function() {
  window.location.href = movie.page;
});


      suggestionsContainer.appendChild(suggestionItem);
    });
  } else {
    // If no matches, display a "No movies found" message
    const noResultsItem = document.createElement("div");
    noResultsItem.classList.add("suggestion-item");
    noResultsItem.textContent = "No movies found.";
    suggestionsContainer.appendChild(noResultsItem);
  }
}





function filterMovies() {
    let selectedGenre = document.getElementById("genreFilter").value.toLowerCase();
    let movieItems = document.querySelectorAll("#movie");

    movieItems.forEach(movie => {
        let movieName = movie.querySelector("h3").innerText;
        let movieData = movies.find(m => m.name === movieName);

        if (movieData) {
            movie.style.display = (selectedGenre === "" || movieData.genre.toLowerCase() === selectedGenre) ? "block" : "none";
        }
    });
}


window.onload = function() {
    generateGenreOptions();
    loadMovies();
};




// Load movies when the page opens
window.onload = loadMovies;