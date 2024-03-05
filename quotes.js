const localMovieQuotes = [
    {
        text: 'Vydrž, Prťka, vydrž!',
        movie: 'Sněženky a machři',
        year: 1983,
    },
    {
        text: 'Dřepkins!',
        movie: 'Sněženky a machři',
        year: 1983,
    },
    {
        text: 'Von asi neví, že sem ji v kartách vyhrál já!',
        movie: 'Sněženky a machři',
        year: 1983,
    },
    {
        text: 'Znám zkratku. Je to sice dál, ale zato horší cesta.',
        movie: 'Sněženky a machři',
        year: 1983,
    },
    {
        text: 'Pane učitel, vy ste študovanej člověk, vždyť vy víte, že to uhlí nemá nožičky.',
        movie: 'Sněženky a machři',
        year: 1983,
    },
    {
        text: 'Co je? To jste ještě neviděli chlapa v pyžamu? - Chlapa jo, ale Máchu ne!',
        movie: 'Sněženky a machři',
        year: 1983,
    },
    {
        text: 'Hliník se odstěhoval do Humpolce.',
        movie: 'Marečku, podejte mi pero!',
        year: 1983,
    },
    {
        text: 'Hujer, metelescum bleskum!',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Tady jsem si dovolil pár švestiček ze své zahrádky.',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Pane učiteli, už je čas...',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Kam až sahají Hujerovi?',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Máte úhel beta... - No to nemám! - Máte úhel beta, stranu A a B. Sestrojte trojúhelník.',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'To byla těžká písemná práce! Těžká! I já jsem s ní měl co dělat!',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Já když kouřím, tak zvracím.',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Ty podávaš knihu, ja podávam pero.',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Tak co s Vámi, chlapče? No, nepotěšil jste mě, a ani já Vás nepotěším.',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Maminko, pročpak pořád leštíš ta zrcadla? - Aby ses dobře viděl, jakej seš mladík!',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Tuček, Šlajs. Stejné chyby, stejné známky.',
        movie: 'Marečku, podejte mi pero!',
        year: 1976,
    },
    {
        text: 'Asi dobrej oddíl, no...',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Vy nás ale zásobujete, pane Karfík.',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Kde je ten prďola, co tady čepuje to pivo?',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'A každému z nich jsme na tady tý točně říkal: Neber úplatky, neber úplatky nebo se z toho zblázníš. Ale je to marný, je to marný, je to marný.',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Nebudeme se pouštět do žádných větších akcí.',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Neber úplatky, neber úplatky, nebo se z toho zblázníš.',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Kolik třešní, tolik višní.',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Náš ústav se Vám mými ústy omlouvá za toto politováníhodné nedopatření, ke kerému dochází maximálně jedenkrát za 10 let.',
        movie: 'Jáchyme, hoď ho do stroje!',
        year: 1974,
    },
    {
        text: 'Víš co, Sašo? Jdi do prdele.',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Olovo volovo.',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Může jít Jindra ven? - Nikdy, nebo navždy!!!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Ty knedlíky připomínají vajíčka karety obrovské. - Koho? - MOŘSKÉ ŽELVY!!!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Kdo se ptal na tvůj názor?! S kým si myslíš, že paseš krávy. Já ti dal život! To je tím, s kým se taháš. S nějakým anarchistickým bohémem, rudým bolševickým nokem!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'A skláři nebudou mít co žrát.',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Promiň maličká. Promiň stařičká.',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'To je alibismus, odporný alibismus. Ty, která jsi učila vařit v Akronu, nevíš, co mi cpeš pod čumák?!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'A komu tím prospějete, co? Druhé straně?',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Líbali se, líbali. A jak dlouho? Děsně dlouho!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Já jsem přesvědčen, že kdyby mi chrstli vařící olej do ksichtu, tak se ona bude co? Bude se smát!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Maminko, ty nám tu jenom hoříš!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Co to tu smrdí? - Karma! To je osud, víš?',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Mě vyslýchali nacisti. Na mě si, děvenko, s nějakým nokem nepřijdeš!',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Zajímalo by mě, kde udělali soudruzi z NDR chybu.',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Teda to muselo dát šílenou práci. A přitom taková blbost, co?',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'Rozkaz zněl jasně - zastavit muže s koženou brašnou. Nebyl čas zjišťovat, kdo je kdo.',
        movie: 'Pelíšky',
        year: 1999,
    },
    {
        text: 'To je dost, žes nás taky jednou vyvez! Žes udělal něco pro rodinu.',
        movie: 'Slavnosti sněženek',
        year: 1983,
    },
    {
        text: 'To zas bude v álejích nablito.',
        movie: 'Slavnosti sněženek',
        year: 1983,
    },
    {
        text: 'To koukáte, co? To je moje, kupovat lacino krásný věci s kazem třeba... Ale nekupte to, když je to tak výhodný!',
        movie: 'Slavnosti sněženek',
        year: 1983,
    },
    {
        text: 'Pánové, nic mi nevyčítejte, nemějte mi to za zlý, já sem vás varoval. Já jsem vám to říkal, já na co přídu, tak to sežeru. Poroučím se vám, pánové, poroučím se.',
        movie: 'Slavnosti sněženek',
        year: 1983,
    },
    {
        text: 'Jak by tady bylo krásně, kdyby tu nebyly ty zatracený vosy!',
        movie: 'Slavnosti sněženek',
        year: 1983,
    },  
    {
        text: 'Se pobleju! - Aby ses neposral.',
        movie: 'Slunce, seno, jahody',
        year: 1983,
    },  
    {
        text: 'Ale já se s tebou nebudu zlobit. Počkej až táta vystřízliví, ten ti jich nandá!',
        movie: 'Slunce, seno, jahody',
        year: 1983,
    },  
    {
        text: 'Nevíte samou rostažností, co byste do tý huby dali.',
        movie: 'Slunce, seno, jahody',
        year: 1983,
    },  
    {
        text: 'Se svatým Petrem abych se hádal o každýho mordýře, a ty nám šoupneš i abatyši.',
        movie: 'Anděl Páně',
        year: 2005,
    },  
    {
        text: 'Chodit po vodě, to u nás umí jen mladej pán. A to víš, to je elita, tam já si netroufám.',
        movie: 'Anděl Páně',
        year: 2005,
    },  
    {
        text: 'Okamžitě slez dolů, ty darebný jinochu!',
        movie: 'S čerty nejsou žerty',
        year: 1984,
    },    
    {
        text: 'Je to rebel! Při zatýkání tři vojáky těžce zranil, dva zhmoždil a jednoho zesměšnil.',
        movie: 'S čerty nejsou žerty',
        year: 1984,
    },    
    {
        text: 'A zase obráceně! Obraťte mě! - Obraťte koně! - Ale ne koně, mě obraťte!',
        movie: 'S čerty nejsou žerty',
        year: 1984,
    },    
    {
        text: 'Máchale, spadlo ti to! Asi vítr.',
        movie: 'S čerty nejsou žerty',
        year: 1984,
    },    
    {
        text: 'Já to řeknu tatínkovi a ten vám vyhlásí válku.',
        movie: 'S čerty nejsou žerty',
        year: 1984,
    },    
    {
        text: 'Vy jste samá revoluce a když padne facka, tak jste hysterický.',
        movie: 'Světáci',
        year: 1969,
    },        
    {
        text: 'Toníku, nedělej ostudu! - Jakoupak ostudu, já mu dám do držky a bude po ptákách.',
        movie: 'Světáci',
        year: 1969,
    },        
    {
        text: 'Nojó, dáma... Dáma může bejt taky pěkná svině, viď.',
        movie: 'Světáci',
        year: 1969,
    },        
    {
        text: 'Já mu dal tu facku v jeho vlastním zájmu.',
        movie: 'Světáci',
        year: 1969,
    },        
    {
        text: 'Taťka jde. Dneska si vzal kolo, tak je doma brzo.  - Kde jsou moje blatníky?!',
        movie: 'Obecná škola',
        year: 1991,
    },        
    {
        text: 'Na tuto školu dávají učitele za trest. Do vašeho rajonu, jak mi bylo řečeno, se před válkou odvažovali policisté pouze na koních a vždy ve dvou!',
        movie: 'Obecná škola',
        year: 1991,
    },        
    {
        text: 'Nebij ho do hlavy, bude hloupej.',
        movie: 'Obecná škola',
        year: 1991,
    },        
    {
        text: 'Kdo z rodičů chce vidět Idiota, nechť se staví v ředitelně.',
        movie: 'Obecná škola',
        year: 1991,
    },        
    {
        text: 'Nemůžeš napsat, že je magor. - Poloviční blázen, bych napsal... - Doktor říkal, že je momentálně zavostalej',
        movie: 'Vesničko má středisková',
        year: 1985,
    },        
    {
        text: 'Vem si plavky, pojedem se vykoupat, teď tam nikdo nebude. - Já se koupat nemůžu! - Tak se budeš dívat, jak se koupu já!',
        movie: 'Vesničko má středisková',
        year: 1985,
    },               
    {
        text: 'Vy jste se zase kochal, že jo, pane doktore? Vy jednou špatně skončíte, pane doktore. - To každej, Karle.',
        movie: 'Vesničko má středisková',
        year: 1985,
    },        
    {
        text: 'Ze sedmýho? - Z jinýho nepiju.',
        movie: 'Vesničko má středisková',
        year: 1985,
    },        
    {
        text: 'Dáte si čaj nebo kávu? - Nebo něco ostřejšího? - Rohlík.',
        movie: 'Vesničko má středisková',
        year: 1985,
    },        
    {
        text: 'Na co vy tady čekáte? - Na pohlavní choroby. - Nemáme, nevedeme.',
        movie: 'Vrchní, prchni!',
        year: 1980,
    },        
    {
        text: 'Tak já jdu. - Na poštu? - Na mateřskou.',
        movie: 'Vrchní, prchni!',
        year: 1980,
    },        
    {
        text: 'Myl jsem to saponátem a teď jsme se v příručce dočetli, že prej to nějak žere lak. Nebo co. - Já nevím. Já to dávám do čistírny.',
        movie: 'Vrchní, prchni!',
        year: 1980,
    },        
    {
        text: 'No jo, vypadá jako Vrána, ale je to Králík!',
        movie: 'Vrchní, prchni!',
        year: 1980,
    },        
    {
        text: 'Člověče, vy jste do toho bouch! - To je hadrák, pane. Ten neublíží, ten leští!',
        movie: 'Vrchní, prchni!',
        year: 1980,
    },        
    {
        text: 'Ale já vás miluji! - No to mě bude teprv něco stát...',
        movie: 'Limonádový Joe aneb Koňská opera',
        year: 1964,
    },        
    {
        text: 'Teď se té dámě omluvíte a prohlásíte, že jste srmdutý kojot, vy prašivý skunku!',
        movie: 'Limonádový Joe aneb Koňská opera',
        year: 1964,
    },        
    {
        text: 'Padouch nebo hrdina, my jsme jedna rodina.',
        movie: 'Limonádový Joe aneb Koňská opera',
        year: 1964,
    },        
    {
        text: 'Jsem stařičký ladič pijan. Spíš pijan než ladič.',
        movie: 'Limonádový Joe aneb Koňská opera',
        year: 1964,
    },        
    {
        text: 'Pekelný zmetku! - Konečně teplé, lidské slovo.',
        movie: 'Limonádový Joe aneb Koňská opera',
        year: 1964,
    },        
]
