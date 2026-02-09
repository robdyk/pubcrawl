const crawlRoutes = [
  // STOCKHOLM
  {
    id: 'gamla-stan-classic',
    name: 'Gamla Stan Classic',
    description: 'Historic pubs in Stockholm\'s Old Town',
    duration: '3-4 hours',
    city: 'Stockholm',
    country: 'Sweden',
    pubs: [
      {
        name: 'Wirströms Pub',
        address: 'Stora Nygatan 13, Gamla Stan',
        lat: 59.3251,
        lng: 18.0711,
        description: 'Traditional Swedish pub with extensive beer selection',
        specialty: 'Local craft beers'
      },
      {
        name: 'The Liffey',
        address: 'Stora Nygatan 40, Gamla Stan',
        lat: 59.3245,
        lng: 18.0698,
        description: 'Irish pub with live music and great atmosphere',
        specialty: 'Guinness on tap'
      },
      {
        name: 'Monks Porter House',
        address: 'Munkbrogatan 11, Gamla Stan',
        lat: 59.3238,
        lng: 18.0689,
        description: 'Cozy cellar pub with Belgian beer focus',
        specialty: 'Belgian Trappist beers'
      }
    ]
  },
  {
    id: 'sodermalm-hipster',
    name: 'Södermalm Hipster Trail',
    description: 'Trendy craft beer bars in Stockholm\'s coolest district',
    duration: '4-5 hours',
    city: 'Stockholm',
    country: 'Sweden',
    pubs: [
      {
        name: 'Omnipollos Hatt',
        address: 'Hökens gata 3, Södermalm',
        lat: 59.3142,
        lng: 18.0752,
        description: 'Famous craft brewery with innovative beers and pizza',
        specialty: 'Omnipollo craft beers'
      },
      {
        name: 'Akkurat',
        address: 'Hornsgatan 18, Södermalm',
        lat: 59.3168,
        lng: 18.0589,
        description: 'Beer mecca with 20+ taps and huge bottle selection',
        specialty: 'Rare Belgian and Swedish craft'
      },
      {
        name: 'Brewdog Södermalm',
        address: 'Götgatan 13, Södermalm',
        lat: 59.3178,
        lng: 18.0712,
        description: 'Scottish craft beer chain with bold flavors',
        specialty: 'Punk IPA and seasonal brews'
      },
      {
        name: 'Mikkeller Stockholm',
        address: 'Repslagargatan 8, Södermalm',
        lat: 59.3156,
        lng: 18.0698,
        description: 'Danish craft beer bar with rotating taps',
        specialty: 'Mikkeller exclusives'
      }
    ]
  },
  {
    id: 'stockholm-microbrewery',
    name: 'Stockholm Microbrewery Tour',
    description: 'Artisanal breweries and taprooms across the city',
    duration: '4-5 hours',
    city: 'Stockholm',
    country: 'Sweden',
    pubs: [
      {
        name: 'Stigbergets Fot',
        address: 'Rosenlundsgatan 8, Stockholm',
        lat: 59.3189,
        lng: 18.0534,
        description: 'Gothenburg brewery\'s Stockholm outpost with experimental beers',
        specialty: 'Stigbergets craft and limited releases'
      },
      {
        name: 'Omnipollo\'s Hatt',
        address: 'Hökens gata 3, Stockholm',
        lat: 59.3142,
        lng: 18.0752,
        description: 'Brewery taproom with wood-fired pizza',
        specialty: 'House-brewed IPAs and pastry stouts'
      },
      {
        name: 'Monks Café & Brewery',
        address: 'Luntmakargatan 46, Stockholm',
        lat: 59.3378,
        lng: 18.0612,
        description: 'Belgian-inspired microbrewery',
        specialty: 'Belgian-style ales and saisons'
      },
      {
        name: 'Nya Carnegiebryggeriet',
        address: 'Ljusslingan 17, Stockholm',
        lat: 59.3456,
        lng: 18.0234,
        description: 'Historic Swedish brewery with modern taproom',
        specialty: 'Carnegie Porter and craft lagers'
      }
    ]
  },
  {
    id: 'norrmalm-central',
    name: 'Norrmalm Central Route',
    description: 'City center pubs near major attractions',
    duration: '3 hours',
    city: 'Stockholm',
    country: 'Sweden',
    pubs: [
      {
        name: 'Tennstopet',
        address: 'Dalagatan 50, Vasastan',
        lat: 59.3428,
        lng: 18.0456,
        description: 'Classic neighborhood pub since 1896',
        specialty: 'Traditional Swedish beers'
      },
      {
        name: 'Bishops Arms Bellmansgatan',
        address: 'Bellmansgatan 8, Södermalm',
        lat: 59.3189,
        lng: 18.0645,
        description: 'British-style pub with extensive whisky selection',
        specialty: 'UK ales and whisky'
      },
      {
        name: 'Café Tranan',
        address: 'Karlbergsvägen 14, Vasastan',
        lat: 59.3398,
        lng: 18.0512,
        description: 'Upscale pub with excellent food',
        specialty: 'Swedish craft and food pairings'
      }
    ]
  },
  
  // GOTHENBURG
  {
    id: 'gothenburg-haga',
    name: 'Haga Historic Route',
    description: 'Charming pubs in Gothenburg\'s oldest neighborhood',
    duration: '3-4 hours',
    city: 'Gothenburg',
    country: 'Sweden',
    pubs: [
      {
        name: 'Pivo',
        address: 'Andra Långgatan 5, Gothenburg',
        lat: 57.6989,
        lng: 11.9547,
        description: 'Cozy beer bar with 20+ taps and great atmosphere',
        specialty: 'Swedish and international craft beers'
      },
      {
        name: 'Brewers Beer Bar',
        address: 'Andra Långgatan 16, Gothenburg',
        lat: 57.6995,
        lng: 11.9538,
        description: 'Popular craft beer spot with rotating selection',
        specialty: 'Local Gothenburg breweries'
      },
      {
        name: 'The Rover',
        address: 'Andra Långgatan 22, Gothenburg',
        lat: 57.7001,
        lng: 11.9531,
        description: 'British-style pub with excellent beer selection',
        specialty: 'UK ales and ciders'
      }
    ]
  },
  {
    id: 'gothenburg-microbrewery',
    name: 'Gothenburg Microbrewery Circuit',
    description: 'Artisanal breweries and taprooms',
    duration: '4-5 hours',
    city: 'Gothenburg',
    country: 'Sweden',
    pubs: [
      {
        name: 'Stigbergets Bryggeri',
        address: 'Stigbergstorget 8, Gothenburg',
        lat: 57.6978,
        lng: 11.9423,
        description: 'Iconic Gothenburg microbrewery with experimental beers',
        specialty: 'IPAs, sours, and barrel-aged beers'
      },
      {
        name: 'Oceanbryggeriet',
        address: 'Karl Johansgatan 145, Gothenburg',
        lat: 57.7089,
        lng: 11.9234,
        description: 'Seaside brewery with ocean-inspired beers',
        specialty: 'Lagers and pale ales'
      },
      {
        name: 'Beerbliotek',
        address: 'Magasinsgatan 8, Gothenburg',
        lat: 57.7123,
        lng: 11.9567,
        description: 'Modern brewery with creative recipes',
        specialty: 'Experimental IPAs and stouts'
      },
      {
        name: 'Dugges Bryggeri Taproom',
        address: 'Krokslätts Fabriker 2, Gothenburg',
        lat: 57.6834,
        lng: 12.0123,
        description: 'One of Sweden\'s most awarded breweries',
        specialty: 'Award-winning IPAs and barrel-aged'
      }
    ]
  },
  {
    id: 'gothenburg-avenyn',
    name: 'Avenyn Boulevard Crawl',
    description: 'Lively pubs along Gothenburg\'s main avenue',
    duration: '4 hours',
    city: 'Gothenburg',
    country: 'Sweden',
    pubs: [
      {
        name: 'Ölhallen 7:an',
        address: 'Vasagatan 7, Gothenburg',
        lat: 57.7065,
        lng: 11.9669,
        description: 'Classic beer hall since 1889 with historic charm',
        specialty: 'Traditional Swedish beers'
      },
      {
        name: 'Bishops Arms Avenyn',
        address: 'Kungsportsavenyn 10, Gothenburg',
        lat: 57.7025,
        lng: 11.9698,
        description: 'Large pub with extensive beer and whisky menu',
        specialty: 'International beer selection'
      },
      {
        name: 'Nefertiti',
        address: 'Hvitfeldtsplatsen 6, Gothenburg',
        lat: 57.7012,
        lng: 11.9712,
        description: 'Music venue and bar with great vibe',
        specialty: 'Live music and craft beers'
      }
    ]
  },

  // MALMÖ
  {
    id: 'malmo-old-town',
    name: 'Malmö Old Town Tour',
    description: 'Historic pubs in Malmö\'s charming center',
    duration: '3 hours',
    city: 'Malmö',
    country: 'Sweden',
    pubs: [
      {
        name: 'Mello Yello',
        address: 'Lilla Torg 1, Malmö',
        lat: 55.6050,
        lng: 13.0001,
        description: 'Iconic pub on the famous Lilla Torg square',
        specialty: 'Wide beer selection and outdoor seating'
      },
      {
        name: 'Bishops Arms Malmö',
        address: 'Stortorget 6, Malmö',
        lat: 55.6048,
        lng: 12.9998,
        description: 'Traditional pub with cozy atmosphere',
        specialty: 'British ales and Swedish craft'
      },
      {
        name: 'Tempo Bar & Kök',
        address: 'Södra Förstadsgatan 3, Malmö',
        lat: 55.6038,
        lng: 13.0012,
        description: 'Modern bar with excellent food and drinks',
        specialty: 'Craft cocktails and local beers'
      }
    ]
  },
  {
    id: 'malmo-microbrewery',
    name: 'Malmö Craft Brewery Trail',
    description: 'Local microbreweries and taprooms',
    duration: '3-4 hours',
    city: 'Malmö',
    country: 'Sweden',
    pubs: [
      {
        name: 'Malmö Brewing Co',
        address: 'Bergsgatan 33, Malmö',
        lat: 55.6089,
        lng: 13.0089,
        description: 'Local brewery with taproom and tours',
        specialty: 'House-brewed lagers and IPAs'
      },
      {
        name: 'Brutal Brewing Taproom',
        address: 'Friisgatan 18, Malmö',
        lat: 55.6012,
        lng: 13.0045,
        description: 'Bold and experimental microbrewery',
        specialty: 'Hop-forward IPAs and sours'
      },
      {
        name: 'Brewski Bar',
        address: 'Södra Förstadsgatan 50, Malmö',
        lat: 55.6023,
        lng: 13.0067,
        description: 'Craft beer bar featuring local breweries',
        specialty: 'Rotating taps of Swedish craft'
      }
    ]
  },

  // AMSTERDAM
  {
    id: 'amsterdam-jordaan',
    name: 'Jordaan Brown Café Route',
    description: 'Traditional Dutch brown cafés in Amsterdam\'s most charming district',
    duration: '4 hours',
    city: 'Amsterdam',
    country: 'Netherlands',
    pubs: [
      {
        name: 'Café \'t Smalle',
        address: 'Egelantiersgracht 12, Amsterdam',
        lat: 52.3756,
        lng: 4.8825,
        description: 'Historic canal-side café dating back to 1786',
        specialty: 'Dutch jenever and local beers'
      },
      {
        name: 'Café Pieper',
        address: 'Prinsengracht 424, Amsterdam',
        lat: 52.3712,
        lng: 4.8845,
        description: 'Cozy brown café with authentic Amsterdam atmosphere',
        specialty: 'Traditional Dutch beers'
      },
      {
        name: 'Café Nol',
        address: 'Westerstraat 109, Amsterdam',
        lat: 52.3789,
        lng: 4.8798,
        description: 'Lively sing-along bar with local character',
        specialty: 'Heineken and Dutch sing-alongs'
      },
      {
        name: 'De Twee Zwaantjes',
        address: 'Prinsengracht 114, Amsterdam',
        lat: 52.3801,
        lng: 4.8856,
        description: 'Intimate bar famous for live accordion music',
        specialty: 'Jenever and traditional Dutch songs'
      }
    ]
  },
  {
    id: 'amsterdam-craft',
    name: 'Amsterdam Craft Beer Trail',
    description: 'Best craft beer bars in the city center',
    duration: '4-5 hours',
    city: 'Amsterdam',
    country: 'Netherlands',
    pubs: [
      {
        name: 'Brouwerij \'t IJ',
        address: 'Funenkade 7, Amsterdam',
        lat: 52.3676,
        lng: 4.9267,
        description: 'Iconic brewery in a windmill with outdoor seating',
        specialty: 'House-brewed IPAs and seasonal beers'
      },
      {
        name: 'Craft & Draft',
        address: 'Overtoom 417, Amsterdam',
        lat: 52.3598,
        lng: 4.8712,
        description: 'Modern craft beer bar with 30+ taps',
        specialty: 'Dutch and international craft beers'
      },
      {
        name: 'Arendsnest',
        address: 'Herengracht 90, Amsterdam',
        lat: 52.3789,
        lng: 4.8923,
        description: 'Only Dutch beers - over 100 varieties',
        specialty: 'Exclusively Dutch craft beers'
      },
      {
        name: 'Gollem\'s Proeflokaal',
        address: 'Overtoom 160-162, Amsterdam',
        lat: 52.3612,
        lng: 4.8789,
        description: 'Beer lover\'s paradise with 200+ bottles',
        specialty: 'Belgian and Dutch specialties'
      }
    ]
  },

  // COPENHAGEN
  {
    id: 'copenhagen-nyhavn',
    name: 'Nyhavn Waterfront Route',
    description: 'Colorful harbor bars and historic pubs',
    duration: '3-4 hours',
    city: 'Copenhagen',
    country: 'Denmark',
    pubs: [
      {
        name: 'Nyhavns Færgekro',
        address: 'Nyhavn 5, Copenhagen',
        lat: 55.6798,
        lng: 12.5912,
        description: 'Historic waterfront pub with outdoor seating',
        specialty: 'Danish lagers and harbor views'
      },
      {
        name: 'The Dubliner',
        address: 'Amagertorv 5, Copenhagen',
        lat: 55.6789,
        lng: 12.5778,
        description: 'Irish pub in the heart of Copenhagen',
        specialty: 'Guinness and Irish whiskey'
      },
      {
        name: 'Mikkeller Bar Copenhagen',
        address: 'Viktoriagade 8, Copenhagen',
        lat: 55.6734,
        lng: 12.5589,
        description: 'Flagship bar of famous Danish brewery',
        specialty: 'Mikkeller craft beers'
      }
    ]
  },
  {
    id: 'copenhagen-vesterbro',
    name: 'Vesterbro Craft Beer Trail',
    description: 'Trendy bars in Copenhagen\'s hip district',
    duration: '4 hours',
    city: 'Copenhagen',
    country: 'Denmark',
    pubs: [
      {
        name: 'Warpigs Brewpub',
        address: 'Flæsketorvet 25, Copenhagen',
        lat: 55.6689,
        lng: 12.5545,
        description: 'Mikkeller and 3 Floyds collaboration brewery',
        specialty: 'American-style craft beers and BBQ'
      },
      {
        name: 'Fermentoren',
        address: 'Halmtorvet 29C, Copenhagen',
        lat: 55.6701,
        lng: 12.5598,
        description: 'Craft beer bar with 30+ taps',
        specialty: 'Danish and international craft'
      },
      {
        name: 'Ørsted Ølbar',
        address: 'Nørre Farimagsgade 13, Copenhagen',
        lat: 55.6845,
        lng: 12.5689,
        description: 'Cozy beer bar with rotating selection',
        specialty: 'Rare Danish microbrews'
      },
      {
        name: 'Taphouse',
        address: 'Lavendelstræde 15, Copenhagen',
        lat: 55.6756,
        lng: 12.5712,
        description: 'Modern bar with 61 taps',
        specialty: 'Huge selection of craft beers'
      }
    ]
  },
  {
    id: 'copenhagen-microbrewery',
    name: 'Copenhagen Microbrewery Tour',
    description: 'Artisanal breweries and experimental taprooms',
    duration: '4-5 hours',
    city: 'Copenhagen',
    country: 'Denmark',
    pubs: [
      {
        name: 'Mikkeller Baghaven',
        address: 'Refshalevej 169C, Copenhagen',
        lat: 55.6912,
        lng: 12.6123,
        description: 'Mikkeller\'s experimental brewery and blendery',
        specialty: 'Barrel-aged and spontaneous fermentation'
      },
      {
        name: 'To Øl Brus',
        address: 'Gothersgade 8B, Copenhagen',
        lat: 55.6823,
        lng: 12.5834,
        description: 'Innovative brewery with creative beers',
        specialty: 'Experimental IPAs and sours'
      },
      {
        name: 'Nørrebro Bryghus',
        address: 'Ryesgade 3, Copenhagen',
        lat: 55.6889,
        lng: 12.5567,
        description: 'Neighborhood brewery with restaurant',
        specialty: 'Traditional Danish brewing styles'
      },
      {
        name: 'Amager Bryghus Taproom',
        address: 'Kigkurren 8D, Copenhagen',
        lat: 55.6534,
        lng: 12.6234,
        description: 'Award-winning brewery with bold flavors',
        specialty: 'Hop-forward beers and collaborations'
      }
    ]
  },
  {
    id: 'copenhagen-norrebro',
    name: 'Nørrebro Neighborhood Crawl',
    description: 'Multicultural bars in Copenhagen\'s vibrant district',
    duration: '3-4 hours',
    city: 'Copenhagen',
    country: 'Denmark',
    pubs: [
      {
        name: 'Brus',
        address: 'Guldbergsgade 29, Copenhagen',
        lat: 55.6912,
        lng: 12.5534,
        description: 'Craft beer bar and restaurant with rooftop terrace',
        specialty: 'Danish craft and natural wines'
      },
      {
        name: 'Ørsted Ølbar',
        address: 'Nørre Farimagsgade 13, Copenhagen',
        lat: 55.6845,
        lng: 12.5689,
        description: 'Cozy beer bar with rotating taps',
        specialty: 'Rare Danish microbrews'
      },
      {
        name: 'Kassen',
        address: 'Nørrebrogade 18C, Copenhagen',
        lat: 55.6878,
        lng: 12.5612,
        description: 'Neighborhood bar with local vibe',
        specialty: 'Danish craft and cocktails'
      },
      {
        name: 'Nørrebro Bryghus',
        address: 'Ryesgade 3, Copenhagen',
        lat: 55.6889,
        lng: 12.5567,
        description: 'Local brewery with restaurant',
        specialty: 'House-brewed beers and pub food'
      }
    ]
  },
  {
    id: 'aarhus-latin-quarter',
    name: 'Aarhus Latin Quarter Crawl',
    description: 'Historic pubs in Denmark\'s second city',
    duration: '3 hours',
    city: 'Aarhus',
    country: 'Denmark',
    pubs: [
      {
        name: 'Sherlock Holmes',
        address: 'Frederiksgade 38, Aarhus',
        lat: 56.1589,
        lng: 10.2098,
        description: 'British-style pub with cozy atmosphere',
        specialty: 'UK ales and Danish craft'
      },
      {
        name: 'Ris Ras Filliongongong',
        address: 'Nørregade 9, Aarhus',
        lat: 56.1598,
        lng: 10.2067,
        description: 'Quirky bar with eclectic decor',
        specialty: 'Craft beers and cocktails'
      },
      {
        name: 'Mikkeller Aarhus',
        address: 'Klostergade 34, Aarhus',
        lat: 56.1578,
        lng: 10.2089,
        description: 'Mikkeller outpost with local vibe',
        specialty: 'Mikkeller exclusives'
      }
    ]
  },
  {
    id: 'odense-old-town',
    name: 'Odense Historic Route',
    description: 'Traditional pubs in Hans Christian Andersen\'s hometown',
    duration: '3 hours',
    city: 'Odense',
    country: 'Denmark',
    pubs: [
      {
        name: 'Carlsens Kvarter',
        address: 'Brandts Passage 39, Odense',
        lat: 55.3967,
        lng: 10.3889,
        description: 'Cultural center bar with live music',
        specialty: 'Danish craft and live performances'
      },
      {
        name: 'The Australian Bar',
        address: 'Nørregade 21, Odense',
        lat: 55.3989,
        lng: 10.3867,
        description: 'Sports bar with international beers',
        specialty: 'Australian and Danish beers'
      },
      {
        name: 'Storms Pakhus',
        address: 'Overgade 48, Odense',
        lat: 55.3978,
        lng: 10.3912,
        description: 'Waterfront pub with outdoor seating',
        specialty: 'Local craft beers'
      }
    ]
  },

  // OSLO
  {
    id: 'oslo-grunerlokka',
    name: 'Grünerløkka Hipster Trail',
    description: 'Trendy bars in Oslo\'s coolest neighborhood',
    duration: '3-4 hours',
    city: 'Oslo',
    country: 'Norway',
    pubs: [
      {
        name: 'Crow Bar & Brewery',
        address: 'Torggata 32, Oslo',
        lat: 59.9189,
        lng: 10.7523,
        description: 'Microbrewery with industrial vibe',
        specialty: 'House-brewed IPAs and stouts'
      },
      {
        name: 'Schouskjelleren Mikrobryggeri',
        address: 'Trondheimsveien 2, Oslo',
        lat: 59.9234,
        lng: 10.7589,
        description: 'Historic brewery in old factory',
        specialty: 'Traditional Norwegian brewing'
      },
      {
        name: 'Grünerløkka Brygghus',
        address: 'Thorvald Meyers gate 30, Oslo',
        lat: 59.9245,
        lng: 10.7612,
        description: 'Popular brewpub with great food',
        specialty: 'Norwegian craft beers'
      }
    ]
  },
  {
    id: 'oslo-microbrewery',
    name: 'Oslo Microbrewery Circuit',
    description: 'Artisanal breweries and innovative taprooms',
    duration: '4-5 hours',
    city: 'Oslo',
    country: 'Norway',
    pubs: [
      {
        name: 'Cervisiam',
        address: 'Torggata 11, Oslo',
        lat: 59.9156,
        lng: 10.7498,
        description: 'Craft beer bar with Norwegian focus',
        specialty: 'Norwegian microbreweries'
      },
      {
        name: 'Amundsen Bryggeri & Spiseri',
        address: 'Dronning Eufemias gate 8, Oslo',
        lat: 59.9078,
        lng: 10.7589,
        description: 'Modern brewery with waterfront location',
        specialty: 'IPAs and experimental beers'
      },
      {
        name: 'Vøyenbrygga',
        address: 'Vøyensvingen 13, Oslo',
        lat: 59.9267,
        lng: 10.7234,
        description: 'Neighborhood microbrewery',
        specialty: 'Traditional Norwegian styles'
      },
      {
        name: 'Ægir Bryggeri Oslo',
        address: 'Waldemar Thranes gate 86, Oslo',
        lat: 59.9312,
        lng: 10.7456,
        description: 'Viking-themed brewery with bold beers',
        specialty: 'Strong ales and barrel-aged'
      }
    ]
  },
  {
    id: 'oslo-city-center',
    name: 'Oslo City Center Classics',
    description: 'Traditional pubs in the heart of Oslo',
    duration: '3 hours',
    city: 'Oslo',
    country: 'Norway',
    pubs: [
      {
        name: 'Lorry',
        address: 'Parkveien 12, Oslo',
        lat: 59.9178,
        lng: 10.7289,
        description: 'Historic pub since 1887 with huge beer selection',
        specialty: 'Norwegian and international beers'
      },
      {
        name: 'Café Sør',
        address: 'Torggata 11, Oslo',
        lat: 59.9156,
        lng: 10.7498,
        description: 'Cozy bar with board games',
        specialty: 'Craft beers and ciders'
      },
      {
        name: 'Oslo Mekaniske Verksted',
        address: 'Schweigaards gate 34, Oslo',
        lat: 59.9123,
        lng: 10.7612,
        description: 'Industrial-style bar and restaurant',
        specialty: 'Norwegian craft and cocktails'
      }
    ]
  },
  {
    id: 'bergen-bryggen',
    name: 'Bergen Bryggen Waterfront',
    description: 'Historic wharf pubs with fjord views',
    duration: '3 hours',
    city: 'Bergen',
    country: 'Norway',
    pubs: [
      {
        name: 'Bryggeloftet & Stuene',
        address: 'Bryggen 11, Bergen',
        lat: 60.3978,
        lng: 5.3245,
        description: 'Traditional restaurant and pub on historic wharf',
        specialty: 'Norwegian beers and seafood'
      },
      {
        name: 'Apollon Platebar',
        address: 'Kong Oscars gate 16, Bergen',
        lat: 60.3912,
        lng: 5.3289,
        description: 'Record bar with vinyl collection',
        specialty: 'Craft beers and vinyl music'
      },
      {
        name: 'Altona Vinbar',
        address: 'Strandgaten 81, Bergen',
        lat: 60.3934,
        lng: 5.3267,
        description: 'Wine and beer bar with cozy atmosphere',
        specialty: 'Natural wines and craft beers'
      }
    ]
  },
  {
    id: 'trondheim-midtbyen',
    name: 'Trondheim City Center Route',
    description: 'Student-friendly pubs in Norway\'s third city',
    duration: '3 hours',
    city: 'Trondheim',
    country: 'Norway',
    pubs: [
      {
        name: 'Trondhjem Mikrobryggeri',
        address: 'Prinsensgata 39, Trondheim',
        lat: 63.4312,
        lng: 10.3978,
        description: 'Local microbrewery with taproom',
        specialty: 'House-brewed Norwegian beers'
      },
      {
        name: 'Bare Blæst',
        address: 'Nordre gate 24, Trondheim',
        lat: 63.4298,
        lng: 10.3945,
        description: 'Lively student bar with good prices',
        specialty: 'Norwegian and international beers'
      },
      {
        name: 'Antikvariatet',
        address: 'Nordre gate 20, Trondheim',
        lat: 63.4301,
        lng: 10.3956,
        description: 'Cozy pub with book-themed decor',
        specialty: 'Craft beers and whisky'
      }
    ]
  },
  {
    id: 'stavanger-old-town',
    name: 'Stavanger Old Town Crawl',
    description: 'Charming pubs in Norway\'s oil capital',
    duration: '3 hours',
    city: 'Stavanger',
    country: 'Norway',
    pubs: [
      {
        name: 'Cardinal',
        address: 'Skagen 16, Stavanger',
        lat: 58.9712,
        lng: 5.7334,
        description: 'Popular pub with outdoor seating',
        specialty: 'Wide beer selection'
      },
      {
        name: 'Bøker og Børst',
        address: 'Øvre Holmegate 10, Stavanger',
        lat: 58.9698,
        lng: 5.7312,
        description: 'Bookstore café and bar',
        specialty: 'Craft beers and coffee'
      },
      {
        name: 'Cementen',
        address: 'Nedre Strandgate 15, Stavanger',
        lat: 58.9689,
        lng: 5.7289,
        description: 'Underground bar with live music',
        specialty: 'Norwegian craft and live shows'
      }
    ]
  },

  // HELSINKI
  {
    id: 'helsinki-kallio',
    name: 'Kallio Bohemian Route',
    description: 'Hip bars in Helsinki\'s alternative neighborhood',
    duration: '3-4 hours',
    city: 'Helsinki',
    country: 'Finland',
    pubs: [
      {
        name: 'Sori Brewing',
        address: 'Vaasankatu 7, Helsinki',
        lat: 60.1845,
        lng: 24.9512,
        description: 'Popular craft brewery with taproom',
        specialty: 'House-brewed IPAs and sours'
      },
      {
        name: 'Teerenpeli Kallio',
        address: 'Helsinginkatu 15, Helsinki',
        lat: 60.1823,
        lng: 24.9489,
        description: 'Finnish brewery and whisky distillery',
        specialty: 'Finnish craft beers and whisky'
      },
      {
        name: 'Siltanen',
        address: 'Hämeentie 13B, Helsinki',
        lat: 60.1812,
        lng: 24.9456,
        description: 'Cozy neighborhood bar with great selection',
        specialty: 'Finnish and international craft'
      }
    ]
  },
  {
    id: 'helsinki-microbrewery',
    name: 'Helsinki Microbrewery Tour',
    description: 'Artisanal Finnish breweries and taprooms',
    duration: '4 hours',
    city: 'Helsinki',
    country: 'Finland',
    pubs: [
      {
        name: 'Stadin Panimo',
        address: 'Kaasutehtaankatu 1, Helsinki',
        lat: 60.1678,
        lng: 24.9234,
        description: 'Helsinki\'s oldest microbrewery',
        specialty: 'Traditional Finnish brewing'
      },
      {
        name: 'Bryggeri Helsinki',
        address: 'Sofiankatu 2, Helsinki',
        lat: 60.1689,
        lng: 24.9512,
        description: 'Modern brewery with restaurant',
        specialty: 'Seasonal and experimental beers'
      },
      {
        name: 'Hiisi Brewing',
        address: 'Jätkäsaarenlaituri 1, Helsinki',
        lat: 60.1589,
        lng: 24.9178,
        description: 'Innovative brewery with bold flavors',
        specialty: 'Hop-forward IPAs and stouts'
      },
      {
        name: 'Suomenlinnan Panimo',
        address: 'Suomenlinna C1, Helsinki',
        lat: 60.1456,
        lng: 24.9889,
        description: 'Island brewery in historic fortress',
        specialty: 'Traditional Finnish ales'
      }
    ]
  },
  {
    id: 'helsinki-center',
    name: 'Helsinki City Center Classics',
    description: 'Traditional pubs in the heart of Helsinki',
    duration: '3 hours',
    city: 'Helsinki',
    country: 'Finland',
    pubs: [
      {
        name: 'Oluthuone Kaisla',
        address: 'Vilhonkatu 4, Helsinki',
        lat: 60.1689,
        lng: 24.9456,
        description: 'Historic beer hall with extensive selection',
        specialty: 'Finnish craft and traditional beers'
      },
      {
        name: 'Bruuveri',
        address: 'Fredrikinkatu 22, Helsinki',
        lat: 60.1623,
        lng: 24.9389,
        description: 'Microbrewery with restaurant',
        specialty: 'House-brewed beers and pub food'
      },
      {
        name: 'Ateljee Bar',
        address: 'Yrjönkatu 26, Helsinki',
        lat: 60.1645,
        lng: 24.9412,
        description: 'Rooftop bar with stunning city views',
        specialty: 'Cocktails and Finnish beers with a view'
      }
    ]
  }
];
