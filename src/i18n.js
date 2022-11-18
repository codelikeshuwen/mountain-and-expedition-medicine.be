import { createI18n } from "vue-i18n";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
// TODO: fix bug in below method
// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key).default
//     }
//   })
//   return messages
// }

const messages = {
  en: {
    header: {
      forwho:'for who',
    },
    home: {
      h1:'MEDICAL ADVICE & GUIDANCE',
      h2:'FOR ADVENTURERS, MOUNTAINEERS, SPORTERS AND EXPEDITIONS TO EXTREME/ EXOTIC REGIONS',
      p1:'The interest in trekkings in remote areas,in people who want to maximize medical self-reliance, in persons who will make a unique journey (once in a life time) f.e trekking around the Annapurna pushed me to share my knowledge ,and promote best medical practice in remote environments in order to reduce health risks and to increase self-reliance in this areas.',
      expertise1:'Course high altitude medicine Cusco Peru 2010',
      expertise2:'Course wilderness & expedition medicine Keswick UK 2012',
      expertise3:'Wilderness&desert course Namibie 2015',
      expertise4:'Mountain medecine course Everest Basecamp Nepal 2017',
      expertise5:'Expedition medicine course Botswana 2018',
      expertise6:'WEM (world extreme medicine) congres Edinburgh 2021',
      expertise7:'Advice for outdoor-sporters, expedition members, members of charity organisations who lack medical assistance in remote areas.',
      expertise8:'Advice: individual, group sessions,presentations',
      expertise9:'Vaccinationshedules, medical kits, endurance performance, gear information',
    },
    forwho:{
      h5:'FOR',
      h5expedities:'FOR',
      who1:'MOUNTAINEERS & ROCK CLIMBERS',
      description1:'Altitude illness: what , prevention, treatment \n oxygen: when, how much l/min \n frostbite: prevention, managing \n nutrition: what, quality of food , quantity : calories',
      who2:'ATHLETES',
      description2:' Marathon des sables, Iron man, mountainbike trekkings \n endurance performance \n nutrition : energy- and fluid balance \n acclimatisation.',
      who3:'DESERT EXPEDITIONS',
      description3:'acclimatisation \n heat related illness: what, prevention, treatment \n clothing , fluid intake \n scorpione- and snakebites : envenomation : prevention , treatment',
      who4:'JUNGLE EXPEDITIONS',
      description4:'The hazards and challenges of humid tropical environments \n tropical diseases: malaria, dengue \n insect bites , leeches \n skin diseases and woudinfection: prevention, management clothing.',
      who5:'POLE EXPEDITIONS',
      description5:'For any one challenging the Arctic North (Siberia, Alaska, Canada, North Pole) or the Antartic South (Antartica). \n Hypothermia: prevention, m \n Deshydratation: what , prevention',
      who6:'CAVE & DEEP-SEA DIVERS',
      description6:'The risks and challenges of deep-see diving (decompression, preparations,, how to deal with sharks and other see creatures, coral cuts) \n The bends, barotrauma : prevention, managing \n Dive tables',
   },
   contact:{
      h1:'get in touch',
      p:'Are you planning an expedition? Preparing for a super marathon? Get in touch for medical advice, guidance, vaccinations and fysical tests to prepare you for your challenges.',
      doctor:'Doctor',
      belgium:'Belgium',
   }
  },
  nl: {
    header: {
      forwho:'Voor Wie',
    },
     home: {
      h1:'MEDISCH ADVIES & BEGELEIDING',
      h2:'VOOR AVONTURIERS, BERGBEKLIMMERS, SPORTERS EN EXPEDITIES NAAR EXTREME / EXOTISCHE OORDEN',
      p1:'De belangstelling voor trekkings in afgelegen gebieden, voor personen die een unieke reis, uitdaging - once in a lifetime- vb Annapurnatrektocht - willen maken, heeft mij ertoe aangezet de nodige medische expertise te verwerven om deze avonturiers met deskundig advies bij te staan met het doel de gezondheids risicos in onherbergzame gebieden te verkleinen, de medische zelfredzaamheid te vergroten en alzo hun slaagkansen te optimaliseren.',
      expertise1:'Cursus bergsportgeneeskunde Cusco Peru 2010',
      expertise2:'Cursus en stage wilderness & expedition medicine Keswick UK 2012',
      expertise3:'Wildernis&woestijncursus Namibie 2015',
      expertise4:'Cursus berggeneeskunde Nepal (Everest Base Camp) 2017',
      expertise5:'Expeditie geneeskunde cursus Botswana 2018',
      expertise6:'WEM (world extreme medicine) congres Edinburgh 2021',
      expertise7:'Advies voor buitensporters, expeditieleden,vrijwilligers van hulporganisaties, die in afgelegen gebieden verwijderd zijn van medische zorg.',
      expertise8:'Advies: individueel,in groep,presentaties',
      expertise9:'oppuntstelling fysieke conditie vaccinatieschema , medische noodkit logistiek: kledij , materiaal',  
    },
    forwho:{
       h5:'VOOR',
       h5expedities:'VOOR EXPEDITIES DOOR',
       who1:'BERGBEKLIMMERS',
       description1:' hoogteziekte: wat , hoe voorkomen, behandeling \n zuurstof: wanneer , hoeveel \n vriesletsels (frostbite): hoe voorkomen \n voeding : wat, hoeveel calorieen per dag',
       who2:'ATLETEN',
       description2:' Marathon des sables, Iron Man, ultraloop, mountainbike tochten \n Training \n voeding : energie-en vochtbalans \n acclimatisatie',
       who3:'WOESTIJNEN & OUTBACKS',
       description3:' acclimatisatie \n hitte gerelateerde ziekten: wat , preventie , behandeling \n kledij \n schorpioen- en slangenbeten: wat doen , hoe voorkomen',
       who4:'OERWOUDEN / JUNGLES',
       description4:'tropische ziekten : malaria , dengue .....  \n insectenbeten \n huidziekten door de hoge vochtigheidsgraad \n typische kledij.',
       who5:'POOLREIZIGERS',
       description5:' Voor iedereen die zich waagt aan het Arctische Noorden (Siberië, Alaska, Canada, de Noordpool, ...) of het Antarctisch \n Vriesletsels \n Deshydratatie : wat , preventie; Hypothermie(onderkoeling) : kledij ...',
       who6:'GROT- & DIEPZEEDUIKERS',
       description6:'De risicos en uitdagingen van diepzeeduikers \n Decompressieziekte ( the bends) : wat , preventie \n Contact met onderwaterflora en -fauna \n Duiktabellen: wat , hoe interpreteren',
    },
    contact:{
      h1:'NEEM CONTACT OP',
      p:'Gaat u op expeditie? Bereidt u zich voor op een super marathon? Neem contact op voor medisch advies, begeleiding, vaccinaties en fysische proeven.',
      doctor:'Dokter',
      belgium:'België',
    }
  },
};

export default createI18n({
  //locale: "en",
  locale: process.env.VUE_APP_LOCALE,
  fallbackLocale: "en",
  messages
  // 
  // TODO: fix bug in this method
  // messages: loadLocaleMessages()
});
