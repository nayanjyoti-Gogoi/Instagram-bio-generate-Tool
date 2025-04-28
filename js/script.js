// Keyword-specific bio templates
const keywordTemplates = {
    // Photography related
    photography: [
        "📸 Capturing moments | {keywords} storyteller | Visual artist",
        "🎨 {keywords} through my lens | Creating visual poetry | Frame by frame",
        "🌟 Professional {keywords} | Turning moments into memories | Visual storyteller",
        "📷 {keywords} magician | Freezing time | Creating visual art",
        "🎯 {keywords} expert | Capturing emotions | Visual poetry creator",
        "✨ {keywords} artist | Making memories last | Visual storyteller",
        "🎭 {keywords} director | Creating visual stories | Frame by frame artist",
        "💫 {keywords} creator | Turning moments into art | Visual memory maker",
        "📸 {keywords} visionary | Painting with light | Creating visual dreams",
        "🎨 {keywords} explorer | Discovering beauty | Making visual magic",
        "🌟 {keywords} dreamer | Capturing life's beauty | Creating visual wonders",
        "📷 {keywords} poet | Writing with light | Making visual stories",
        "🎯 {keywords} adventurer | Exploring through lens | Creating visual journeys",
        "✨ {keywords} innovator | Redefining visual art | Making photographic dreams",
        "🎭 {keywords} storyteller | Creating visual narratives | Turning moments into art",
        "📸 {keywords} artist | Painting with pixels | Creating visual magic",
        "🎨 {keywords} creator | Making moments eternal | Visual dream weaver",
        "🌟 {keywords} explorer | Discovering through lens | Creating visual tales",
        "📷 {keywords} visionary | Capturing the extraordinary | Making visual poetry",
        "🎯 {keywords} dreamer | Turning reality into art | Creating visual wonders",
        "✨ {keywords} magician | Freezing time in frames | Making visual stories",
        "🎭 {keywords} artist | Painting with emotions | Creating visual dreams",
        "💫 {keywords} storyteller | Making memories visual | Turning moments into art",
        "📸 {keywords} creator | Capturing life's essence | Creating visual magic",
        "🎨 {keywords} visionary | Redefining photography | Making visual poetry"
    ],
    // Travel related
    travel: [
        "✈️ {keywords} explorer | Collecting memories | Adventure seeker",
        "🌍 Professional {keywords} | Discovering new horizons | Making memories",
        "🗺️ {keywords} enthusiast | Living for adventures | Exploring the world",
        "🏝️ {keywords} wanderer | Creating travel stories | Adventure collector",
        "🌅 {keywords} nomad | Chasing sunsets | Making travel memories",
        "🏔️ {keywords} adventurer | Exploring the unknown | Creating travel tales",
        "🌊 {keywords} explorer | Discovering new places | Making travel magic",
        "🌋 {keywords} seeker | Collecting experiences | Creating travel art",
        "✈️ {keywords} dreamer | Living the journey | Making travel dreams",
        "🌍 {keywords} creator | Building travel stories | Exploring new worlds",
        "🗺️ {keywords} artist | Painting with experiences | Creating travel magic",
        "🏝️ {keywords} visionary | Redefining travel | Making adventure art",
        "🌅 {keywords} innovator | Creating travel wonders | Exploring new horizons",
        "🏔️ {keywords} storyteller | Making travel tales | Creating adventure dreams",
        "🌊 {keywords} poet | Writing travel stories | Making journey magic",
        "✈️ {keywords} adventurer | Living the wanderlust | Creating travel dreams",
        "🌍 {keywords} explorer | Making global memories | Discovering new worlds",
        "🗺️ {keywords} dreamer | Turning journeys into art | Creating travel magic",
        "🏝️ {keywords} visionary | Redefining adventure | Making travel stories",
        "🌅 {keywords} creator | Building travel dreams | Exploring new horizons",
        "🏔️ {keywords} artist | Painting with journeys | Creating travel tales",
        "🌊 {keywords} storyteller | Making travel poetry | Turning adventures into art",
        "🌋 {keywords} innovator | Creating travel wonders | Making journey dreams",
        "✈️ {keywords} explorer | Living the adventure | Discovering new worlds",
        "🌍 {keywords} dreamer | Making travel magic | Creating journey stories"
    ],
    // Food related
    food: [
        "🍳 {keywords} lover | Food explorer | Culinary adventurer",
        "🍽️ Professional {keywords} | Creating food memories | Taste tester",
        "🥘 {keywords} enthusiast | Foodie at heart | Culinary storyteller",
        "🍕 {keywords} creator | Making food magic | Culinary artist",
        "🍜 {keywords} explorer | Creating food stories | Taste adventurer",
        "🍰 {keywords} artist | Making food memories | Culinary dreamer",
        "🍣 {keywords} master | Creating food art | Taste experience maker",
        "🍩 {keywords} magician | Making food dreams | Culinary experience creator",
        "🍳 {keywords} visionary | Redefining food art | Creating culinary dreams",
        "🍽️ {keywords} innovator | Making taste magic | Food experience creator",
        "🥘 {keywords} storyteller | Creating food tales | Making culinary art",
        "🍕 {keywords} dreamer | Building food wonders | Creating taste magic",
        "🍜 {keywords} artist | Making culinary dreams | Creating food stories",
        "🍰 {keywords} creator | Building taste experiences | Making food art",
        "🍣 {keywords} explorer | Discovering culinary wonders | Creating taste dreams",
        "🍳 {keywords} artist | Painting with flavors | Creating food magic",
        "🍽️ {keywords} creator | Making taste memories | Culinary dream weaver",
        "🥘 {keywords} visionary | Redefining cuisine | Creating food stories",
        "🍕 {keywords} explorer | Discovering new tastes | Making culinary art",
        "🍜 {keywords} dreamer | Turning ingredients into art | Creating food magic",
        "🍰 {keywords} innovator | Making culinary wonders | Building taste dreams",
        "🍣 {keywords} storyteller | Creating food poetry | Making taste art",
        "🍩 {keywords} artist | Painting with flavors | Creating culinary dreams",
        "🍳 {keywords} creator | Making food magic | Building taste stories",
        "🍽️ {keywords} visionary | Redefining taste | Creating culinary art"
    ],
    // Fashion related
    fashion: [
        "👗 {keywords} stylist | Trend setter | Fashion enthusiast",
        "👠 Professional {keywords} | Creating style stories | Fashion lover",
        "👒 {keywords} curator | Style explorer | Fashion storyteller",
        "👔 {keywords} creator | Making style magic | Fashion artist",
        "👓 {keywords} expert | Creating fashion stories | Style adventurer",
        "👜 {keywords} designer | Making fashion dreams | Style experience maker",
        "👖 {keywords} artist | Creating fashion art | Style memory maker",
        "👡 {keywords} magician | Making style memories | Fashion experience creator",
        "👗 {keywords} visionary | Redefining fashion | Creating style dreams",
        "👠 {keywords} innovator | Making trend magic | Fashion experience maker",
        "👒 {keywords} storyteller | Creating style tales | Making fashion art",
        "👔 {keywords} dreamer | Building fashion wonders | Creating style magic",
        "👓 {keywords} artist | Making style dreams | Creating fashion stories",
        "👜 {keywords} creator | Building trend experiences | Making style art",
        "👖 {keywords} explorer | Discovering fashion wonders | Creating trend dreams",
        "👗 {keywords} artist | Painting with style | Creating fashion magic",
        "👠 {keywords} creator | Making trend memories | Style dream weaver",
        "👒 {keywords} visionary | Redefining style | Creating fashion stories",
        "👔 {keywords} explorer | Discovering new trends | Making style art",
        "👓 {keywords} dreamer | Turning fabrics into art | Creating fashion magic",
        "👜 {keywords} innovator | Making style wonders | Building trend dreams",
        "👖 {keywords} storyteller | Creating fashion poetry | Making style art",
        "👡 {keywords} artist | Painting with trends | Creating fashion dreams",
        "👗 {keywords} creator | Making style magic | Building trend stories",
        "👠 {keywords} visionary | Redefining trends | Creating fashion art"
    ],
    // Fitness related
    fitness: [
        "💪 {keywords} coach | Fitness enthusiast | Health advocate",
        "🏋️ Professional {keywords} | Building strength | Fitness motivator",
        "🧘 {keywords} expert | Wellness warrior | Health and fitness lover",
        "🏃 {keywords} trainer | Creating fitness magic | Health artist",
        "🤸 {keywords} guide | Making fitness dreams | Wellness creator",
        "🏊 {keywords} mentor | Building healthy lives | Fitness storyteller",
        "🚴 {keywords} expert | Creating wellness art | Health experience maker",
        "🤸‍♂️ {keywords} master | Making fitness memories | Wellness memory creator",
        "💪 {keywords} visionary | Redefining fitness | Creating health dreams",
        "🏋️ {keywords} innovator | Making wellness magic | Fitness experience maker",
        "🧘 {keywords} storyteller | Creating health tales | Making fitness art",
        "🏃 {keywords} dreamer | Building wellness wonders | Creating health magic",
        "🤸 {keywords} artist | Making fitness dreams | Creating wellness stories",
        "🏊 {keywords} creator | Building health experiences | Making fitness art",
        "🚴 {keywords} explorer | Discovering wellness wonders | Creating health dreams",
        "💪 {keywords} artist | Painting with strength | Creating fitness magic",
        "🏋️ {keywords} creator | Making health memories | Wellness dream weaver",
        "🧘 {keywords} visionary | Redefining wellness | Creating fitness stories",
        "🏃 {keywords} explorer | Discovering new health paths | Making wellness art",
        "🤸 {keywords} dreamer | Turning movement into art | Creating fitness magic",
        "🏊 {keywords} innovator | Making wellness wonders | Building health dreams",
        "🚴 {keywords} storyteller | Creating fitness poetry | Making wellness art",
        "🤸‍♂️ {keywords} artist | Painting with movement | Creating health dreams",
        "💪 {keywords} creator | Making fitness magic | Building wellness stories",
        "🏋️ {keywords} visionary | Redefining health | Creating fitness art"
    ],
    // Business related
    business: [
        "💼 {keywords} entrepreneur | Business strategist | Growth hacker",
        "📈 Professional {keywords} | Business innovator | Success builder",
        "🚀 {keywords} expert | Business leader | Industry disruptor",
        "💡 {keywords} creator | Making business magic | Success artist",
        "📊 {keywords} master | Creating business stories | Growth storyteller",
        "🎯 {keywords} innovator | Building business dreams | Success experience maker",
        "⚡ {keywords} leader | Creating business art | Growth memory maker",
        "💎 {keywords} expert | Making success memories | Business experience creator",
        "💼 {keywords} visionary | Redefining business | Creating success dreams",
        "📈 {keywords} innovator | Making growth magic | Business experience maker",
        "🚀 {keywords} storyteller | Creating success tales | Making business art",
        "💡 {keywords} dreamer | Building growth wonders | Creating success magic",
        "📊 {keywords} artist | Making business dreams | Creating growth stories",
        "🎯 {keywords} creator | Building success experiences | Making business art",
        "⚡ {keywords} explorer | Discovering growth wonders | Creating success dreams",
        "💼 {keywords} artist | Painting with success | Creating business magic",
        "📈 {keywords} creator | Making growth memories | Success dream weaver",
        "🚀 {keywords} visionary | Redefining success | Creating business stories",
        "💡 {keywords} explorer | Discovering new opportunities | Making growth art",
        "📊 {keywords} dreamer | Turning ideas into art | Creating business magic",
        "🎯 {keywords} innovator | Making success wonders | Building growth dreams",
        "⚡ {keywords} storyteller | Creating business poetry | Making success art",
        "💎 {keywords} artist | Painting with growth | Creating business dreams",
        "💼 {keywords} creator | Making success magic | Building growth stories",
        "📈 {keywords} visionary | Redefining growth | Creating business art"
    ],
    // Tech related
    tech: [
        "💻 {keywords} developer | Tech enthusiast | Code creator",
        "📱 Professional {keywords} | Tech innovator | Digital builder",
        "⚡ {keywords} expert | Tech wizard | Digital transformer",
        "🔧 {keywords} creator | Making tech magic | Digital artist",
        "🌐 {keywords} master | Creating tech stories | Code storyteller",
        "🔌 {keywords} innovator | Building digital dreams | Tech experience maker",
        "💾 {keywords} artist | Creating digital art | Code memory maker",
        "📡 {keywords} expert | Making tech memories | Digital experience creator",
        "💻 {keywords} visionary | Redefining technology | Creating digital dreams",
        "📱 {keywords} innovator | Making code magic | Tech experience maker",
        "⚡ {keywords} storyteller | Creating digital tales | Making tech art",
        "🔧 {keywords} dreamer | Building code wonders | Creating digital magic",
        "🌐 {keywords} artist | Making tech dreams | Creating digital stories",
        "🔌 {keywords} creator | Building code experiences | Making tech art",
        "💾 {keywords} explorer | Discovering digital wonders | Creating code dreams",
        "💻 {keywords} artist | Painting with code | Creating tech magic",
        "📱 {keywords} creator | Making digital memories | Code dream weaver",
        "⚡ {keywords} visionary | Redefining digital | Creating tech stories",
        "🔧 {keywords} explorer | Discovering new technologies | Making digital art",
        "🌐 {keywords} dreamer | Turning code into art | Creating tech magic",
        "🔌 {keywords} innovator | Making digital wonders | Building code dreams",
        "💾 {keywords} storyteller | Creating tech poetry | Making digital art",
        "📡 {keywords} artist | Painting with technology | Creating code dreams",
        "💻 {keywords} creator | Making tech magic | Building digital stories",
        "📱 {keywords} visionary | Redefining digital | Creating tech art"
    ],
    // Art related
    art: [
        "🎨 {keywords} artist | Creative soul | Art lover",
        "🖌️ Professional {keywords} | Art creator | Visual storyteller",
        "✨ {keywords} maker | Art enthusiast | Creative explorer",
        "🎭 {keywords} creator | Making art magic | Creative artist",
        "🖼️ {keywords} master | Creating art stories | Visual storyteller",
        "🎪 {keywords} innovator | Building creative dreams | Art experience maker",
        "🎨 {keywords} expert | Creating visual art | Creative memory maker",
        "🖌️ {keywords} magician | Making art memories | Visual experience creator",
        "✨ {keywords} visionary | Redefining art | Creating visual dreams",
        "🎭 {keywords} innovator | Making creative magic | Art experience maker",
        "🖼️ {keywords} storyteller | Creating art tales | Making visual art",
        "🎪 {keywords} dreamer | Building creative wonders | Creating art magic",
        "🎨 {keywords} artist | Making visual dreams | Creating art stories",
        "🖌️ {keywords} creator | Building creative experiences | Making visual art",
        "✨ {keywords} explorer | Discovering art wonders | Creating visual dreams",
        "🎨 {keywords} artist | Painting with creativity | Creating art magic",
        "🖌️ {keywords} creator | Making visual memories | Art dream weaver",
        "✨ {keywords} visionary | Redefining creativity | Creating art stories",
        "🎭 {keywords} explorer | Discovering new art forms | Making creative art",
        "🖼️ {keywords} dreamer | Turning visions into art | Creating art magic",
        "🎪 {keywords} innovator | Making creative wonders | Building art dreams",
        "🎨 {keywords} storyteller | Creating art poetry | Making visual art",
        "🖌️ {keywords} artist | Painting with imagination | Creating art dreams",
        "✨ {keywords} creator | Making art magic | Building creative stories",
        "🎭 {keywords} visionary | Redefining visual | Creating art art"
    ],
    // Music related
    music: [
        "🎵 {keywords} musician | Music lover | Sound creator",
        "🎸 Professional {keywords} | Music maker | Rhythm explorer",
        "🎹 {keywords} artist | Music enthusiast | Melody creator",
        "🎺 {keywords} creator | Making music magic | Sound artist",
        "🎻 {keywords} master | Creating music stories | Rhythm storyteller",
        "🥁 {keywords} innovator | Building sound dreams | Music experience maker",
        "🎼 {keywords} expert | Creating melody art | Sound memory maker",
        "🎧 {keywords} magician | Making music memories | Rhythm experience creator",
        "🎵 {keywords} visionary | Redefining music | Creating sound dreams",
        "🎸 {keywords} innovator | Making rhythm magic | Music experience maker",
        "🎹 {keywords} storyteller | Creating sound tales | Making music art",
        "🎺 {keywords} dreamer | Building melody wonders | Creating rhythm magic",
        "🎻 {keywords} artist | Making music dreams | Creating sound stories",
        "🥁 {keywords} creator | Building rhythm experiences | Making music art",
        "🎼 {keywords} explorer | Discovering sound wonders | Creating melody dreams",
        "🎵 {keywords} artist | Painting with sound | Creating music magic",
        "🎸 {keywords} creator | Making rhythm memories | Music dream weaver",
        "🎹 {keywords} visionary | Redefining sound | Creating music stories",
        "🎺 {keywords} explorer | Discovering new melodies | Making rhythm art",
        "🎻 {keywords} dreamer | Turning notes into art | Creating music magic",
        "🥁 {keywords} innovator | Making sound wonders | Building rhythm dreams",
        "🎼 {keywords} storyteller | Creating music poetry | Making sound art",
        "🎧 {keywords} artist | Painting with rhythm | Creating music dreams",
        "🎵 {keywords} creator | Making music magic | Building sound stories",
        "🎸 {keywords} visionary | Redefining rhythm | Creating music art"
    ],
    // Writing related
    writing: [
        "✍️ {keywords} writer | Word weaver | Story creator",
        "📚 Professional {keywords} | Content creator | Storyteller",
        "📝 {keywords} author | Writing enthusiast | Word explorer",
        "✒️ {keywords} creator | Making word magic | Story artist",
        "📖 {keywords} master | Creating word stories | Content storyteller",
        "📓 {keywords} innovator | Building story dreams | Writing experience maker",
        "📜 {keywords} expert | Creating content art | Word memory maker",
        "📘 {keywords} magician | Making story memories | Content experience creator",
        "✍️ {keywords} visionary | Redefining writing | Creating word dreams",
        "📚 {keywords} innovator | Making story magic | Writing experience maker",
        "📝 {keywords} storyteller | Creating word tales | Making content art",
        "✒️ {keywords} dreamer | Building story wonders | Creating word magic",
        "📖 {keywords} artist | Making writing dreams | Creating content stories",
        "📓 {keywords} creator | Building word experiences | Making story art",
        "📜 {keywords} explorer | Discovering content wonders | Creating word dreams",
        "✍️ {keywords} artist | Painting with words | Creating writing magic",
        "📚 {keywords} creator | Making story memories | Word dream weaver",
        "📝 {keywords} visionary | Redefining content | Creating writing stories",
        "✒️ {keywords} explorer | Discovering new narratives | Making word art",
        "📖 {keywords} dreamer | Turning thoughts into art | Creating writing magic",
        "📓 {keywords} innovator | Making story wonders | Building word dreams",
        "📜 {keywords} storyteller | Creating writing poetry | Making content art",
        "📘 {keywords} artist | Painting with stories | Creating word dreams",
        "✍️ {keywords} creator | Making writing magic | Building story stories",
        "📚 {keywords} visionary | Redefining content | Creating writing art"
    ],
    // Education related
    education: [
        "📚 {keywords} educator | Knowledge sharer | Lifelong learner",
        "🎓 Professional {keywords} | Teaching innovator | Learning facilitator",
        "📝 {keywords} mentor | Education enthusiast | Knowledge creator",
        "✏️ {keywords} guide | Making learning magic | Education artist",
        "📖 {keywords} expert | Creating knowledge stories | Learning storyteller",
        "🎯 {keywords} innovator | Building education dreams | Knowledge experience maker",
        "💡 {keywords} leader | Creating learning art | Education memory maker",
        "🌟 {keywords} master | Making knowledge memories | Learning experience creator",
        "📚 {keywords} visionary | Redefining education | Creating knowledge dreams",
        "🎓 {keywords} innovator | Making learning magic | Education experience maker",
        "📝 {keywords} storyteller | Creating knowledge tales | Making learning art",
        "✏️ {keywords} dreamer | Building education wonders | Creating knowledge magic",
        "📖 {keywords} artist | Making learning dreams | Creating education stories",
        "🎯 {keywords} creator | Building knowledge experiences | Making learning art",
        "💡 {keywords} explorer | Discovering education wonders | Creating knowledge dreams",
        "📚 {keywords} artist | Painting with knowledge | Creating education magic",
        "🎓 {keywords} creator | Making learning memories | Knowledge dream weaver",
        "📝 {keywords} visionary | Redefining learning | Creating education stories",
        "✏️ {keywords} explorer | Discovering new knowledge | Making learning art",
        "📖 {keywords} dreamer | Turning ideas into art | Creating education magic",
        "🎯 {keywords} innovator | Making knowledge wonders | Building learning dreams",
        "💡 {keywords} storyteller | Creating education poetry | Making learning art",
        "🌟 {keywords} artist | Painting with wisdom | Creating knowledge dreams",
        "📚 {keywords} creator | Making education magic | Building learning stories",
        "🎓 {keywords} visionary | Redefining knowledge | Creating education art"
    ],
    // Sports related
    sports: [
        "⚽ {keywords} athlete | Sports enthusiast | Team player",
        "🏃 Professional {keywords} | Sports performer | Competition lover",
        "🏆 {keywords} competitor | Sports artist | Performance creator",
        "🎯 {keywords} player | Making sports magic | Performance artist",
        "🏅 {keywords} expert | Creating sports stories | Performance storyteller",
        "⚡ {keywords} innovator | Building performance dreams | Sports experience maker",
        "💪 {keywords} leader | Creating sports art | Performance memory maker",
        "🌟 {keywords} master | Making sports memories | Performance experience creator",
        "⚽ {keywords} visionary | Redefining sports | Creating performance dreams",
        "🏃 {keywords} innovator | Making sports magic | Performance experience maker",
        "🏆 {keywords} storyteller | Creating performance tales | Making sports art",
        "🎯 {keywords} dreamer | Building sports wonders | Creating performance magic",
        "🏅 {keywords} artist | Making performance dreams | Creating sports stories",
        "⚡ {keywords} creator | Building sports experiences | Making performance art",
        "💪 {keywords} explorer | Discovering performance wonders | Creating sports dreams",
        "⚽ {keywords} artist | Painting with performance | Creating sports magic",
        "🏃 {keywords} creator | Making sports memories | Performance dream weaver",
        "🏆 {keywords} visionary | Redefining performance | Creating sports stories",
        "🎯 {keywords} explorer | Discovering new challenges | Making performance art",
        "🏅 {keywords} dreamer | Turning effort into art | Creating sports magic",
        "⚡ {keywords} innovator | Making performance wonders | Building sports dreams",
        "💪 {keywords} storyteller | Creating sports poetry | Making performance art",
        "🌟 {keywords} artist | Painting with effort | Creating sports dreams",
        "⚽ {keywords} creator | Making sports magic | Building performance stories",
        "🏃 {keywords} visionary | Redefining performance | Creating sports art"
    ],
    // Gaming related
    gaming: [
        "🎮 {keywords} gamer | Gaming enthusiast | Game creator",
        "🕹️ Professional {keywords} | Gaming artist | Game developer",
        "🎲 {keywords} player | Gaming storyteller | Game experience maker",
        "🎯 {keywords} creator | Making gaming magic | Game artist",
        "🎪 {keywords} expert | Creating game stories | Gaming storyteller",
        "⚡ {keywords} innovator | Building gaming dreams | Game experience maker",
        "💡 {keywords} leader | Creating gaming art | Game memory maker",
        "🌟 {keywords} master | Making gaming memories | Game experience creator",
        "🎮 {keywords} visionary | Redefining gaming | Creating game dreams",
        "🕹️ {keywords} innovator | Making gaming magic | Game experience maker",
        "🎲 {keywords} storyteller | Creating game tales | Making gaming art",
        "🎯 {keywords} dreamer | Building gaming wonders | Creating game magic",
        "🎪 {keywords} artist | Making game dreams | Creating gaming stories",
        "⚡ {keywords} creator | Building gaming experiences | Making game art",
        "💡 {keywords} explorer | Discovering game wonders | Creating gaming dreams",
        "🎮 {keywords} artist | Painting with games | Creating gaming magic",
        "🕹️ {keywords} creator | Making game memories | Gaming dream weaver",
        "🎲 {keywords} visionary | Redefining games | Creating gaming stories",
        "🎯 {keywords} explorer | Discovering new worlds | Making game art",
        "🎪 {keywords} dreamer | Turning pixels into art | Creating gaming magic",
        "⚡ {keywords} innovator | Making game wonders | Building gaming dreams",
        "💡 {keywords} storyteller | Creating gaming poetry | Making game art",
        "🌟 {keywords} artist | Painting with pixels | Creating gaming dreams",
        "🎮 {keywords} creator | Making gaming magic | Building game stories",
        "🕹️ {keywords} visionary | Redefining games | Creating gaming art"
    ],
    // Beauty related
    beauty: [
        "💄 {keywords} artist | Beauty enthusiast | Makeup creator",
        "💅 Professional {keywords} | Beauty innovator | Style creator",
        "✨ {keywords} expert | Beauty storyteller | Style experience maker",
        "💋 {keywords} creator | Making beauty magic | Style artist",
        "👗 {keywords} master | Creating style stories | Beauty storyteller",
        "🌟 {keywords} innovator | Building beauty dreams | Style experience maker",
        "💫 {keywords} leader | Creating beauty art | Style memory maker",
        "🎀 {keywords} expert | Making beauty memories | Style experience creator",
        "💄 {keywords} visionary | Redefining beauty | Creating style dreams",
        "💅 {keywords} innovator | Making beauty magic | Style experience maker",
        "✨ {keywords} storyteller | Creating beauty tales | Making style art",
        "💋 {keywords} dreamer | Building beauty wonders | Creating style magic",
        "👗 {keywords} artist | Making style dreams | Creating beauty stories",
        "🌟 {keywords} creator | Building beauty experiences | Making style art",
        "💫 {keywords} explorer | Discovering style wonders | Creating beauty dreams",
        "💄 {keywords} artist | Painting with beauty | Creating style magic",
        "💅 {keywords} creator | Making style memories | Beauty dream weaver",
        "✨ {keywords} visionary | Redefining style | Creating beauty stories",
        "💋 {keywords} explorer | Discovering new looks | Making style art",
        "👗 {keywords} dreamer | Turning beauty into art | Creating style magic",
        "🌟 {keywords} innovator | Making beauty wonders | Building style dreams",
        "💫 {keywords} storyteller | Creating beauty poetry | Making style art",
        "🎀 {keywords} artist | Painting with style | Creating beauty dreams",
        "💄 {keywords} creator | Making beauty magic | Building style stories",
        "💅 {keywords} visionary | Redefining style | Creating beauty art"
    ],
    // Comedy related
    comedy: [
        "😂 {keywords} comedian | Making the world laugh | One joke at a time",
        "🤣 Professional {keywords} | Turning frowns upside down | Comedy magician",
        "😆 {keywords} joker | Spreading smiles | Laughter therapist",
        "😅 {keywords} entertainer | Making life funnier | One punchline at a time",
        "😄 {keywords} humorist | Creating joy | Laughter engineer",
        "🤪 {keywords} prankster | Professional goofball | Making memories fun",
        "😜 {keywords} funnyman | Life of the party | Bringing the laughs",
        "🤣 {keywords} comedian | Turning everyday into comedy | Making you LOL",
        "😂 {keywords} entertainer | Spreading happiness | One laugh at a time",
        "😆 {keywords} joker | Making the world smile | Comedy wizard",
        "😅 {keywords} humorist | Professional laughter creator | Making life fun",
        "😄 {keywords} comedian | Turning life into comedy | Spreading joy",
        "🤪 {keywords} entertainer | Making memories fun | Laughter expert",
        "😜 {keywords} joker | Creating happiness | One joke at a time",
        "🤣 {keywords} humorist | Professional smile maker | Bringing the fun",
        "😂 {keywords} artist | Painting with laughter | Creating comedy magic",
        "🤣 {keywords} creator | Making joy memories | Comedy dream weaver",
        "😆 {keywords} visionary | Redefining humor | Creating comedy stories",
        "😅 {keywords} explorer | Discovering new laughs | Making humor art",
        "😄 {keywords} dreamer | Turning life into jokes | Creating comedy magic",
        "🤪 {keywords} innovator | Making laughter wonders | Building humor dreams",
        "😜 {keywords} storyteller | Creating comedy poetry | Making humor art",
        "🤣 {keywords} artist | Painting with jokes | Creating comedy dreams",
        "😂 {keywords} creator | Making humor magic | Building laughter stories",
        "😆 {keywords} visionary | Redefining laughter | Creating comedy art"
    ]
};

// Keyword category detection
const keywordCategories = {
    photography: ['photo', 'photography', 'camera', 'lens', 'shoot', 'capture', 'frame'],
    travel: ['travel', 'wander', 'explore', 'adventure', 'journey', 'trip', 'vacation'],
    food: ['food', 'cook', 'chef', 'recipe', 'dining', 'cuisine', 'restaurant'],
    fashion: ['fashion', 'style', 'outfit', 'clothing', 'dress', 'accessory', 'trend'],
    fitness: ['fitness', 'workout', 'gym', 'exercise', 'health', 'train', 'sport'],
    business: ['business', 'entrepreneur', 'startup', 'company', 'enterprise', 'corporate'],
    tech: ['tech', 'technology', 'digital', 'software', 'code', 'programming', 'developer'],
    art: ['art', 'creative', 'design', 'artist', 'painting', 'drawing', 'craft'],
    music: ['music', 'song', 'band', 'artist', 'singer', 'musician', 'instrument'],
    education: ['education', 'learn', 'study', 'school', 'university', 'student', 'teacher'],
    sports: ['sport', 'game', 'athlete', 'team', 'player', 'competition', 'championship'],
    gaming: ['game', 'gaming', 'player', 'console', 'video', 'stream', 'esports'],
    beauty: ['beauty', 'makeup', 'cosmetic', 'skincare', 'hair', 'style', 'glam'],
    lifestyle: ['lifestyle', 'life', 'living', 'daily', 'routine', 'habit', 'wellness']
};

// Base components for dynamic bio generation
const bioComponents = {
    roles: {
        photography: ['photographer', 'visual artist', 'lens master', 'image creator', 'photo storyteller', 'visual poet', 'frame artist', 'moment capturer', 'light painter', 'visual dreamer'],
        travel: ['traveler', 'adventurer', 'explorer', 'wanderer', 'nomad', 'journey maker', 'experience collector', 'horizon chaser', 'world discoverer', 'adventure seeker'],
        food: ['foodie', 'culinary artist', 'taste explorer', 'flavor creator', 'food storyteller', 'culinary dreamer', 'taste adventurer', 'food magician', 'culinary poet', 'flavor artist'],
        fashion: ['stylist', 'trend setter', 'fashion artist', 'style creator', 'fashion dreamer', 'trend explorer', 'style storyteller', 'fashion poet', 'style innovator', 'fashion visionary'],
        fitness: ['coach', 'fitness artist', 'wellness creator', 'health explorer', 'fitness dreamer', 'wellness storyteller', 'health innovator', 'fitness visionary', 'wellness artist', 'health creator'],
        business: ['entrepreneur', 'business artist', 'success creator', 'growth explorer', 'business dreamer', 'success storyteller', 'growth innovator', 'business visionary', 'success artist', 'growth creator'],
        tech: ['developer', 'tech artist', 'code creator', 'digital explorer', 'tech dreamer', 'code storyteller', 'digital innovator', 'tech visionary', 'code artist', 'digital creator'],
        art: ['artist', 'creative soul', 'art creator', 'visual explorer', 'art dreamer', 'creative storyteller', 'visual innovator', 'art visionary', 'creative artist', 'visual creator'],
        music: ['musician', 'sound artist', 'rhythm creator', 'melody explorer', 'music dreamer', 'sound storyteller', 'rhythm innovator', 'music visionary', 'sound artist', 'melody creator'],
        writing: ['writer', 'word artist', 'story creator', 'content explorer', 'writing dreamer', 'word storyteller', 'content innovator', 'writing visionary', 'word artist', 'content creator'],
        education: ['educator', 'teacher', 'mentor', 'guide', 'instructor', 'professor', 'academic', 'scholar', 'tutor', 'trainer'],
        sports: ['athlete', 'player', 'competitor', 'performer', 'sportsman', 'sportswoman', 'champion', 'team player', 'sports artist', 'performance creator'],
        gaming: ['gamer', 'player', 'streamer', 'creator', 'developer', 'designer', 'artist', 'enthusiast', 'gaming expert', 'game master'],
        beauty: ['artist', 'stylist', 'creator', 'expert', 'specialist', 'designer', 'consultant', 'advisor', 'beauty expert', 'style creator'],
        creative: ['dreamer', 'visionary', 'explorer', 'artist', 'creator', 'storyteller', 'innovator', 'magician', 'wonderer', 'builder'],
        modern: ['enthusiast', 'creator', 'innovator', 'trendsetter', 'visionary', 'artist', 'explorer', 'builder', 'maker', 'designer'],
        inspirational: ['believer', 'motivator', 'dreamer', 'visionary', 'creator', 'inspirer', 'builder', 'maker', 'changer', 'leader'],
        lifestyle: ['enthusiast', 'explorer', 'creator', 'visionary', 'innovator', 'dreamer', 'builder', 'maker', 'changer', 'leader'],
        comedy: [
            'comedian', 'entertainer', 'joker', 'prankster', 'funnyman', 'humorist', 'satirist', 'parodist',
            'sketch artist', 'standup comic', 'improv artist', 'wit', 'sarcasm expert', 'pun master', 'meme lord',
            'viral creator', 'content king', 'influencer', 'streamer', 'youtuber', 'tiktoker', 'social media star',
            'entertainer', 'showman', 'performer', 'actor', 'routine master', 'material writer', 'gag creator',
            'punchline pro', 'delivery expert', 'timing master', 'crowd pleaser', 'stage presence', 'mic master',
            'club regular', 'festival favorite', 'tour veteran', 'special creator', 'album artist'
        ]
    },
    actions: {
        photography: ['capturing', 'creating', 'making', 'building', 'discovering', 'exploring', 'painting', 'writing', 'shaping', 'crafting'],
        travel: ['exploring', 'discovering', 'creating', 'making', 'building', 'collecting', 'chasing', 'seeking', 'finding', 'experiencing'],
        food: ['creating', 'making', 'exploring', 'discovering', 'building', 'crafting', 'shaping', 'designing', 'developing', 'experiencing'],
        fashion: ['creating', 'making', 'exploring', 'discovering', 'building', 'crafting', 'shaping', 'designing', 'developing', 'experiencing'],
        fitness: ['building', 'creating', 'making', 'exploring', 'discovering', 'developing', 'shaping', 'crafting', 'designing', 'experiencing'],
        business: ['building', 'creating', 'making', 'exploring', 'discovering', 'developing', 'shaping', 'crafting', 'designing', 'experiencing'],
        tech: ['building', 'creating', 'making', 'exploring', 'discovering', 'developing', 'shaping', 'crafting', 'designing', 'experiencing'],
        art: ['creating', 'making', 'exploring', 'discovering', 'building', 'crafting', 'shaping', 'designing', 'developing', 'experiencing'],
        music: ['creating', 'making', 'exploring', 'discovering', 'building', 'crafting', 'shaping', 'designing', 'developing', 'experiencing'],
        writing: ['creating', 'making', 'exploring', 'discovering', 'building', 'crafting', 'shaping', 'designing', 'developing', 'experiencing'],
        education: ['teaching', 'guiding', 'mentoring', 'instructing', 'educating', 'training', 'coaching', 'facilitating', 'developing', 'shaping'],
        sports: ['competing', 'performing', 'playing', 'training', 'practicing', 'coaching', 'leading', 'developing', 'improving', 'excelling'],
        gaming: ['playing', 'creating', 'developing', 'designing', 'streaming', 'competing', 'winning', 'achieving', 'mastering', 'exploring'],
        beauty: ['creating', 'styling', 'designing', 'enhancing', 'transforming', 'perfecting', 'innovating', 'developing', 'shaping', 'crafting'],
        creative: ['creating', 'building', 'discovering', 'exploring', 'making', 'painting', 'weaving', 'breaking', 'redefining', 'living'],
        modern: ['living', 'building', 'breaking', 'creating', 'setting', 'making', 'discovering', 'redefining', 'building', 'making'],
        inspirational: ['spreading', 'inspiring', 'believing', 'creating', 'building', 'making', 'living', 'changing', 'building', 'making'],
        lifestyle: ['living', 'discovering', 'building', 'creating', 'redefining', 'making', 'building', 'living', 'discovering', 'creating'],
        comedy: [
            'making laugh', 'turning frowns', 'spreading smiles', 'creating joy', 'making fun', 'bringing laughs',
            'spreading happiness', 'making smile', 'creating happiness', 'making memories', 'turning life',
            'spreading joy', 'making fun', 'creating laughter', 'bringing fun', 'making jokes', 'turning everyday',
            'spreading cheer', 'making life', 'creating comedy', 'bringing smiles', 'making humor', 'turning moments',
            'spreading fun', 'making comedy', 'creating fun', 'bringing joy', 'making entertainment', 'turning situations',
            'spreading laughter', 'making happiness', 'creating entertainment', 'bringing happiness', 'making content',
            'turning ideas', 'spreading content', 'making entertainment', 'creating content', 'bringing entertainment'
        ]
    },
    objects: {
        photography: ['moments', 'memories', 'stories', 'dreams', 'art', 'magic', 'wonders', 'tales', 'experiences', 'visions'],
        travel: ['adventures', 'memories', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'horizons', 'journeys'],
        food: ['flavors', 'memories', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'tastes', 'creations'],
        fashion: ['styles', 'trends', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'looks', 'creations'],
        fitness: ['strength', 'health', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'wellness', 'creations'],
        business: ['success', 'growth', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'innovations', 'creations'],
        tech: ['code', 'digital', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'innovations', 'creations'],
        art: ['visual', 'creative', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'visions', 'creations'],
        music: ['sound', 'rhythm', 'stories', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'melodies', 'creations'],
        writing: ['words', 'stories', 'content', 'dreams', 'experiences', 'magic', 'wonders', 'tales', 'visions', 'creations'],
        education: ['knowledge', 'learning', 'education', 'wisdom', 'understanding', 'skills', 'expertise', 'experience', 'growth', 'development'],
        sports: ['performance', 'competition', 'sports', 'games', 'matches', 'events', 'challenges', 'achievements', 'victories', 'success'],
        gaming: ['games', 'worlds', 'experiences', 'adventures', 'challenges', 'achievements', 'victories', 'success', 'creations', 'designs'],
        beauty: ['beauty', 'style', 'looks', 'appearance', 'aesthetics', 'designs', 'creations', 'transformations', 'enhancements', 'perfection'],
        creative: ['magic', 'dreams', 'wonder', 'reality', 'worlds', 'tales', 'boundaries', 'history', 'castles', 'masterpieces'],
        modern: ['moment', 'future', 'mold', 'pace', 'style', 'normal', 'trends', 'waves', 'bar', 'game'],
        inspirational: ['positivity', 'greatness', 'magic', 'possibilities', 'dreams', 'joy', 'reality', 'change', 'history', 'wonder'],
        lifestyle: ['mindfully', 'wellness', 'habits', 'balance', 'harmony', 'wellness', 'balance', 'health', 'wellness', 'magic'],
        comedy: ['world', 'frowns', 'smiles', 'joy', 'life', 'laughs', 'happiness', 'smile', 'happiness', 'memories',
            'life', 'joy', 'fun', 'laughter', 'fun', 'jokes', 'everyday', 'cheer', 'life', 'comedy', 'smiles',
            'humor', 'moments', 'fun', 'comedy', 'fun', 'joy', 'entertainment', 'situations', 'laughter', 'happiness',
            'entertainment', 'happiness', 'content', 'ideas', 'content', 'entertainment', 'content', 'entertainment']
    },
    connectors: ['|', '•', '~', '→', '→', '→', '→', '→', '→', '→'],
    adjectives: {
        photography: ['beautiful', 'stunning', 'captivating', 'breathtaking', 'magical', 'inspiring', 'creative', 'artistic', 'unique', 'extraordinary'],
        travel: ['amazing', 'incredible', 'unforgettable', 'breathtaking', 'magical', 'inspiring', 'adventurous', 'exotic', 'unique', 'extraordinary'],
        food: ['delicious', 'mouthwatering', 'tasty', 'flavorful', 'savory', 'delectable', 'scrumptious', 'appetizing', 'unique', 'extraordinary'],
        fashion: ['stylish', 'trendy', 'elegant', 'chic', 'fashionable', 'sophisticated', 'classy', 'glamorous', 'unique', 'extraordinary'],
        fitness: ['healthy', 'energetic', 'strong', 'fit', 'active', 'powerful', 'dynamic', 'vibrant', 'unique', 'extraordinary'],
        business: ['successful', 'innovative', 'dynamic', 'progressive', 'strategic', 'visionary', 'professional', 'expert', 'unique', 'extraordinary'],
        tech: ['innovative', 'cutting-edge', 'advanced', 'modern', 'digital', 'technical', 'sophisticated', 'expert', 'unique', 'extraordinary'],
        art: ['creative', 'artistic', 'imaginative', 'expressive', 'inspiring', 'unique', 'original', 'visionary', 'extraordinary', 'exceptional'],
        music: ['melodic', 'harmonious', 'rhythmic', 'musical', 'expressive', 'inspiring', 'creative', 'artistic', 'unique', 'extraordinary'],
        writing: ['creative', 'expressive', 'eloquent', 'articulate', 'inspiring', 'thoughtful', 'imaginative', 'visionary', 'unique', 'extraordinary'],
        education: ['knowledgeable', 'experienced', 'expert', 'professional', 'skilled', 'qualified', 'educated', 'learned', 'wise', 'intelligent'],
        sports: ['athletic', 'competitive', 'skilled', 'talented', 'professional', 'expert', 'experienced', 'successful', 'victorious', 'champion'],
        gaming: ['skilled', 'talented', 'expert', 'professional', 'experienced', 'successful', 'victorious', 'champion', 'master', 'elite'],
        beauty: ['beautiful', 'elegant', 'stylish', 'glamorous', 'fashionable', 'trendy', 'chic', 'sophisticated', 'classy', 'refined'],
        creative: ['dreamy', 'visionary', 'explorative', 'artistic', 'creative', 'innovative', 'magical', 'wondrous', 'imaginative', 'unique'],
        modern: ['trendy', 'contemporary', 'current', 'fashionable', 'stylish', 'hip', 'cool', 'fresh', 'new', 'modern'],
        inspirational: ['positive', 'motivational', 'uplifting', 'encouraging', 'empowering', 'inspiring', 'motivating', 'positive', 'uplifting', 'encouraging'],
        lifestyle: ['healthy', 'balanced', 'mindful', 'well', 'harmonious', 'peaceful', 'balanced', 'zen', 'well', 'healthy'],
        comedy: ['funny', 'hilarious', 'humorous', 'witty', 'sarcastic', 'ironic', 'punny', 'meme-worthy', 'viral',
            'entertaining', 'amusing', 'laughable', 'comical', 'satirical', 'parodic', 'sketchy', 'standup',
            'improv', 'witty', 'sarcastic', 'ironic', 'punny', 'meme-worthy', 'viral', 'entertaining', 'amusing',
            'laughable', 'comical', 'satirical', 'parodic', 'sketchy', 'standup', 'improv', 'witty', 'sarcastic',
            'ironic', 'punny', 'meme-worthy', 'viral', 'entertaining']
    },
    additionalPhrases: {
        photography: ['through my lens', 'in every frame', 'with every shot', 'in each moment', 'through the viewfinder'],
        travel: ['around the world', 'across continents', 'through cultures', 'in every journey', 'with each adventure'],
        food: ['in every bite', 'with each recipe', 'through flavors', 'in every dish', 'with culinary passion'],
        fashion: ['in every style', 'with each trend', 'through designs', 'in every look', 'with fashion passion'],
        fitness: ['in every workout', 'with each exercise', 'through training', 'in every session', 'with fitness passion'],
        business: ['in every project', 'with each venture', 'through innovation', 'in every strategy', 'with business passion'],
        tech: ['in every code', 'with each project', 'through innovation', 'in every solution', 'with tech passion'],
        art: ['in every creation', 'with each piece', 'through expression', 'in every artwork', 'with artistic passion'],
        music: ['in every note', 'with each melody', 'through rhythm', 'in every song', 'with musical passion'],
        writing: ['in every word', 'with each story', 'through expression', 'in every piece', 'with writing passion'],
        education: ['in every lesson', 'with each student', 'through knowledge', 'in every class', 'with teaching passion'],
        sports: ['in every game', 'with each match', 'through competition', 'in every event', 'with sports passion'],
        gaming: ['in every game', 'with each level', 'through challenges', 'in every world', 'with gaming passion'],
        beauty: ['in every look', 'with each style', 'through beauty', 'in every design', 'with beauty passion'],
        creative: ['in every moment', 'into reality', 'in chaos', 'with passion', 'of wonder', 'of magic', 'boundaries', 'history', 'in the sky', 'with emotions'],
        modern: ['in the moment', 'the future', 'the mold', 'the pace', 'style', 'normal', 'trends', 'waves', 'bar', 'game'],
        inspirational: ['positivity', 'greatness', 'magic', 'possibilities', 'dreams', 'joy', 'reality', 'change', 'history', 'wonder'],
        lifestyle: ['mindfully', 'wellness', 'habits', 'balance', 'harmony', 'wellness', 'balance', 'health', 'wellness', 'magic'],
        comedy: ['one joke at a time', 'turning frowns upside down', 'spreading smiles', 'making life funnier',
            'one punchline at a time', 'creating joy', 'making memories fun', 'bringing the laughs',
            'turning everyday into comedy', 'making you LOL', 'spreading happiness', 'one laugh at a time',
            'making the world smile', 'comedy wizard', 'professional laughter creator', 'making life fun',
            'turning life into comedy', 'spreading joy', 'making memories fun', 'laughter expert',
            'creating happiness', 'one joke at a time', 'professional smile maker', 'bringing the fun']
    }
};

// Emoji sets for different styles
const emojiSets = {
    none: [],
    minimal: ["✨", "🌟", "💫"],
    fun: ["😊", "🎉", "🌈", "🌟", "✨", "💫", "🎨", "🎭", "🎯", "💫"],
    professional: ["💼", "📈", "🎯", "💡", "⚡", "📊", "🎓", "🏆", "💎", "🚀"],
    travel: ["✈️", "🌍", "🗺️", "🏝️", "🌅", "🏔️", "🌊", "🏖️", "🌋", "🏕️"],
    lifestyle: ["🌿", "☕", "📚", "🎵", "🍳", "🎨", "🎮", "🎬", "📸", "🎪"],
    business: ["💼", "📈", "💡", "🚀", "🎯", "📊", "💎", "🏆", "⚡", "🎓"],
    art: ["🎨", "🖌️", "✨", "🎭", "🖼️", "🎪", "🎯", "💫", "🌟", "🎨"],
    food: ["🍳", "🍽️", "🥘", "🍕", "🍜", "🍰", "🍣", "🍩", "🍪", "☕"],
    fitness: ["💪", "🏋️", "🧘", "🏃", "🤸", "🏊", "🚴", "🤸‍♂️", "🏋️‍♀️", "🧘‍♀️"],
    music: ["🎵", "🎸", "🎹", "🎺", "🎻", "🥁", "🎼", "🎧", "🎤", "🎶"],
    education: ["📚", "🎓", "📝", "✏️", "📖", "🎯", "💡", "🌟", "📚", "🎓"],
    sports: ["⚽", "🏃", "🏆", "🎯", "🏅", "⚡", "💪", "🌟", "⚽", "🏃"],
    gaming: ["🎮", "🕹️", "🎲", "🎯", "🎪", "⚡", "💡", "🌟", "🎮", "🕹️"],
    beauty: ["💄", "💅", "✨", "💋", "👗", "🌟", "💫", "🎀", "💄", "💅"],
    creative: ["✨", "🌟", "💫", "🎨", "🌌", "🎭", "🌠", "🎪", "✨", "🌟"],
    modern: ["✨", "🌟", "💫", "🎨", "🌌", "🎭", "🌠", "🎪", "✨", "🌟"],
    inspirational: ["✨", "🌟", "💫", "🎨", "🌌", "🎭", "🌠", "🎪", "✨", "🌟"],
    lifestyle: ["✨", "🌟", "💫", "🎨", "🌌", "🎭", "🌠", "🎪", "✨", "🌟"],
    comedy: ["😂", "🤣", "😆", "😅", "😄", "🤪", "😜", "🤣", "😂", "😆"]
};

// Font styles configuration
const fontStyles = {
    default: {
        fontFamily: 'inherit',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    cursive: {
        fontFamily: '"Brush Script MT", cursive',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    monospace: {
        fontFamily: '"Courier New", monospace',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    serif: {
        fontFamily: 'Georgia, serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    fantasy: {
        fontFamily: 'fantasy',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    handwriting: {
        fontFamily: '"Comic Sans MS", cursive',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    modern: {
        fontFamily: '"Arial", sans-serif',
        fontWeight: '300',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    vintage: {
        fontFamily: '"Times New Roman", serif',
        fontWeight: 'normal',
        fontStyle: 'italic',
        textDecoration: 'none'
    },
    graffiti: {
        fontFamily: '"Impact", fantasy',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none',
        letterSpacing: '2px'
    },
    elegant: {
        fontFamily: '"Garamond", serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        letterSpacing: '1px'
    },
    bold: {
        fontFamily: '"Arial Black", sans-serif',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    minimal: {
        fontFamily: '"Helvetica Neue", sans-serif',
        fontWeight: '300',
        fontStyle: 'normal',
        textDecoration: 'none',
        letterSpacing: '0.5px'
    },
    playful: {
        fontFamily: '"Comic Sans MS", cursive',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    classic: {
        fontFamily: '"Palatino Linotype", serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none'
    },
    trendy: {
        fontFamily: '"Segoe UI", sans-serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        letterSpacing: '0.5px'
    }
};

// DOM Elements
const generateButton = document.getElementById('generateBio');
const resultCard = document.getElementById('resultCard');
const generatedBio = document.getElementById('generatedBio');
const copyButton = document.getElementById('copyBio');
const regenerateButton = document.getElementById('regenerateBio');

// Event Listeners
generateButton.addEventListener('click', generateBio);
copyButton.addEventListener('click', copyToClipboard);
regenerateButton.addEventListener('click', generateBio);

// Generate bio function
function generateBio() {
    const bioType = document.getElementById('bioType').value;
    const bioLength = document.getElementById('bioLength').value;
    const keywords = document.getElementById('keywords').value.split(',').map(k => k.trim());
    const emojiStyle = document.getElementById('emojiStyle').value;
    const fontStyle = document.getElementById('fontStyle').value;
    
    if (keywords.length === 0 || keywords[0] === '') {
        alert('Please enter at least one keyword');
        return;
    }

    // Detect keyword category with improved matching
    const detectedCategories = detectKeywordCategories(keywords);
    
    // Generate bio based on detected categories or selected type
    let bio;
    if (detectedCategories.length > 0) {
        // Try to use the most relevant category based on keyword matches
        const bestCategory = findBestMatchingCategory(keywords, detectedCategories);
        bio = generateRandomTemplate(bestCategory, bioLength);
    } else {
        bio = generateRandomTemplate(bioType, bioLength);
    }

    // Replace keywords in template with better matching
    bio = replaceKeywordsInBio(bio, keywords);

    // Add emojis if selected
    if (emojiStyle !== 'none') {
        const emojis = emojiSets[emojiStyle];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        bio = `${randomEmoji} ${bio}`;
    }

    // Apply font style
    const style = fontStyles[fontStyle];
    generatedBio.style.fontFamily = style.fontFamily;
    generatedBio.style.fontWeight = style.fontWeight;
    generatedBio.style.fontStyle = style.fontStyle;
    generatedBio.style.textDecoration = style.textDecoration;
    if (style.textShadow) {
        generatedBio.style.textShadow = style.textShadow;
    }
    if (style.letterSpacing) {
        generatedBio.style.letterSpacing = style.letterSpacing;
    }

    // Display the generated bio
    generatedBio.textContent = bio;
    resultCard.style.display = 'block';
}

// Improved keyword category detection
function detectKeywordCategories(keywords) {
    const categories = new Set();
    const keywordScores = {};
    
    keywords.forEach(keyword => {
        for (const [category, terms] of Object.entries(keywordCategories)) {
            const matches = terms.filter(term => 
                keyword.toLowerCase().includes(term) || 
                term.includes(keyword.toLowerCase())
            );
            if (matches.length > 0) {
                categories.add(category);
                keywordScores[category] = (keywordScores[category] || 0) + matches.length;
            }
        }
    });
    
    return Array.from(categories).sort((a, b) => 
        (keywordScores[b] || 0) - (keywordScores[a] || 0)
    );
}

// Find the best matching category based on keyword relevance
function findBestMatchingCategory(keywords, categories) {
    let bestCategory = categories[0];
    let highestScore = 0;

    categories.forEach(category => {
        const score = keywords.reduce((total, keyword) => {
            const categoryTerms = keywordCategories[category];
            const matches = categoryTerms.filter(term => 
                keyword.toLowerCase().includes(term) || 
                term.includes(keyword.toLowerCase())
            );
            return total + matches.length;
        }, 0);

        if (score > highestScore) {
            highestScore = score;
            bestCategory = category;
        }
    });

    return bestCategory;
}

// Improved keyword replacement in bio
function replaceKeywordsInBio(bio, keywords) {
    // First, try to replace {keywords} placeholder
    if (bio.includes('{keywords}')) {
        const mainKeyword = keywords[0];
        bio = bio.replace('{keywords}', mainKeyword);
    }

    // Then try to replace other placeholders with relevant keywords
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        if (!bio.match(regex)) {
            // Find a suitable place to insert the keyword
            const connectors = bioComponents.connectors;
            const randomConnector = connectors[Math.floor(Math.random() * connectors.length)];
            bio += ` ${randomConnector} ${keyword}`;
        }
    });

    return bio;
}

// Copy to clipboard function
function copyToClipboard() {
    const bioText = generatedBio.textContent;
    navigator.clipboard.writeText(bioText).then(() => {
        copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy Bio';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy bio to clipboard');
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Generate random bio template
function generateRandomTemplate(category, length = 'short') {
    const role = bioComponents.roles[category][Math.floor(Math.random() * bioComponents.roles[category].length)];
    const action = bioComponents.actions[category][Math.floor(Math.random() * bioComponents.actions[category].length)];
    const object = bioComponents.objects[category][Math.floor(Math.random() * bioComponents.objects[category].length)];
    const connector = bioComponents.connectors[Math.floor(Math.random() * bioComponents.connectors.length)];
    
    if (length === 'short') {
        return `${role} ${connector} ${action} ${object}`;
    } else {
        // Long bio format
        const adjective = bioComponents.adjectives[category][Math.floor(Math.random() * bioComponents.adjectives[category].length)];
        const additionalPhrase = bioComponents.additionalPhrases[category][Math.floor(Math.random() * bioComponents.additionalPhrases[category].length)];
        
        return `${role} ${connector} ${adjective} ${action} ${object} ${additionalPhrase}`;
    }
}

// Generate multiple bio templates
function generateMultipleTemplates(category, count = 3) {
    const templates = [];
    for (let i = 0; i < count; i++) {
        templates.push(generateRandomTemplate(category));
    }
    return templates;
}

// Blog Read More functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blogContent = this.previousElementSibling;
            const isHidden = blogContent.style.display === 'none';
            
            // Hide all other expanded contents
            document.querySelectorAll('.blog-content').forEach(content => {
                if (content !== blogContent) {
                    content.style.display = 'none';
                    content.nextElementSibling.textContent = 'Read More';
                }
            });
            
            // Toggle current content
            blogContent.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Show Less' : 'Read More';
        });
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Smooth scroll with debounce
    const smoothScroll = debounce(function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }, 100);

    // Initialize smooth scroll
    smoothScroll();

    // Mobile menu optimization
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }

    // Form validation optimization
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Blog read more optimization
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blogContent = this.previousElementSibling;
            const isHidden = blogContent.style.display === 'none';
            
            // Hide all other expanded contents
            document.querySelectorAll('.blog-content').forEach(content => {
                if (content !== blogContent) {
                    content.style.display = 'none';
                    content.nextElementSibling.textContent = 'Read More';
                }
            });
            
            // Toggle current content with animation
            blogContent.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Show Less' : 'Read More';
            
            // Scroll to content if expanding
            if (isHidden) {
                blogContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // Contact form handling with loading state
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            this.classList.add('loading');
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Basic validation
                if (!name || !email || !subject || !message) {
                    alert('Please fill in all fields');
                    this.classList.remove('loading');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    this.classList.remove('loading');
                    return;
                }
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset the form
                this.reset();
                this.classList.remove('loading');
            }, 1000);
        });
    }
}); 

// Add smooth transition for bio regeneration
function regenerateBio() {
    // Generate new bio directly
    generateBio();
}

// Update event listeners
document.addEventListener('DOMContentLoaded', function() {
    // ... existing event listeners ...
    
    // Update regenerate button event listener
    const regenerateButton = document.getElementById('regenerateBio');
    if (regenerateButton) {
        regenerateButton.addEventListener('click', function(e) {
            e.preventDefault();
            regenerateBio();
        });
    }
    
    // Add loading state to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 500);
        });
    });
}); 