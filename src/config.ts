
const requireEnvVar = (name: string): string => {
    const value = import.meta.env[name];
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};

export const config = {
    wire: {
        endpoint:'https://jovi.gitgo.app',
        // Demo key - in production, this should be managed through a wallet
        demoPrivateKey:'5JQafxYWQGypjHALsNNpcirrAYMWhxsjvU49dVYSJUC3qdZ2jq9'
    },
    persona: {
        wasm: "0061736D01000000018B011660000060017E0060047E7E7E7E017F60027F7F006000017E60037F7F7F017F6000017F60027F7F017F60027F7F017E60027F7E0060067E7E7E7E7F7F017F60047F7E7F7F0060037E7E7E017F60037E7E7E0060017F017F60017F0060087F7F7F7F7F7F7F7F0060047F7F7F7F0060057F7E7F7F7F0060047F7F7E7F0060067F7E7E7F7F7F0060027E7E0002DC031603656E760C726571756972655F61757468000103656E760B64625F66696E645F693634000203656E760C737973696F5F617373657274000303656E761063757272656E745F7265636569766572000403656E760561626F7274000003656E76076D656D6D6F7665000503656E7610616374696F6E5F646174615F73697A65000603656E7610726561645F616374696F6E5F64617461000703656E76066D656D637079000503656E76087072696E74735F6C000303656E76207365745F626C6F636B636861696E5F706172616D65746572735F7061636B6564000303656E76206765745F626C6F636B636861696E5F706172616D65746572735F7061636B6564000703656E76167365745F70726F706F7365645F70726F647563657273000803656E760C63757272656E745F74696D65000403656E76146765745F6163746976655F70726F647563657273000703656E7611737973696F5F6173736572745F636F6465000903656E760A64625F6765745F693634000503656E760C64625F73746F72655F693634000A03656E760D64625F7570646174655F693634000B03656E761164625F6C6F776572626F756E645F693634000203656E760A64625F656E645F693634000C03656E760F64625F70726576696F75735F6936340007032A29000D0E0F000E0F0E0F0710070F010F030703111207130311031103140713131507071515070E0705030405017001010105030100010616037F014180C0000B7F0041CDC5000B7F0041CDC5000B070901056170706C7900170A835C290400101A0BAB01002000102310162000200151044042809893C5AFD5E6EEF40020025104402000200110350542808080C3E5ECC9C7462002510440200020011038054280B0D8D4BE979AD3DB002002510440200020011039052000428080808080C0BAD847520440410042808080D9D3B3ED82EF00100F0B0B0B0B05428080808080C0BAD84720015104404280808080AEFADEEAA47F2002510440410042818080D9D3B3ED82EF00100F0B0B0B410010240B7201037F024020000D0041000F0B4100410028028C40200041107622016A220236028C404100410028028440220320006A410F6A4170712200360284400240200241107420004B0D004100200241016A36028C40200141016A21010B024020014000417F470D0041004190C00010020B20030B02000B3601017F230041106B2200410036020C4100200028020C280200410F6A417071220036028040410020003602844041003F0036028C400B3301027F2000410120001B2101024003402001101822000D014100210041002802C8402202450D0120021100000C000B0B20000B0600200010190BB40101037F200021010240024002402000410371450D00024020002D00000D00200020006B0F0B200041016A210103402001410371450D0120012D00002102200141016A220321012002450D020C000B0B2001417C6A21010340200141046A22012802002202417F73200241FFFDFB776A7141808182847871450D000B0240200241FF01710D00200120006B0F0B034020012D00012102200141016A2203210120020D000C020B0B2003417F6A21030B200320006B0B05001004000BF80101067F024020002001460D00200128020420012D00002202410176200241017122031B2102200141016A210420012802082105410A2101024020002D000022064101712207450D002000280200417E71417F6A21010B2005200420031B21030240200220014B0D00024002402007450D00200028020821010C010B200041016A21010B02402002450D0020012003200210051A0B200120026A41003A0000024020002D0000410171450D002000200236020420000F0B200020024101743A000020000F0B024002402007450D00200028020421040C010B200641017621040B20002001200220016B2004410020042002200310200B20000BF80101037F0240416E20016B2002490D000240024020002D0000410171450D00200028020821080C010B200041016A21080B416F21090240200141E6FFFFFF074B0D00410B21092001410174220A200220016A22022002200A491B2202410B490D00200241106A41707121090B2009101B210202402004450D0020022008200410081A0B02402006450D00200220046A2007200610081A0B0240200320056B220320046B2207450D00200220046A20066A200820046A20056A200710081A0B02402001410A460D002008101C0B200020023602082000200320066A220436020420002009410172360200200220046A41003A00000F0B1004000BC40101047F2001101D2102410A2103024020002D000022044101712205450D002000280200417E71417F6A21030B0240200220034B0D00024002402005450D00200028020821030C010B200041016A21030B02402002450D0020032001200210051A0B200320026A41003A0000024020002D0000410171450D002000200236020420000F0B200020024101743A000020000F0B024002402005450D00200028020421050C010B200441017621050B20002003200220036B20054100200520022001102020000B05001004000B0A00410020003703D0400B02000B9D0403017F017E017F230041E0006B2202240020002903001000200241306A4100360200200242003703282002427F370320200220002903002203370318200220033703100240200320034280D0EBF4CCC9E2D7AA7F4201100122044100480D000240200241106A20041026280214200241106A460D004100419DC10010020B410041A9C00010020B200029030021032002200136020820022003370358024010032002290310510D00410041E7C10010020B2002200241D8006A3602482002200241106A3602442002200241086A3602404120101B22004100360210200042003702082000200241106A360214200241C0006A200010272002200036025020022000290300220337034020022000280218220436023C02400240200228022C220120022802304F0D00200120043602102001200337030820024100360250200120003602002002200141186A36022C0C010B200241286A200241D0006A200241C0006A2002413C6A10280B200228025021002002410036025002402000450D00024020002D0008410171450D00200041106A280200101C0B2000101C0B024020022802282204450D0002400240200228022C22002004470D00200421000C010B0340200041686A220028020021012000410036020002402001450D00024020012D0008410171450D00200141106A280200101C0B2001101C0B20042000470D000B200228022821000B2002200436022C2000101C0B200241E0006A24000BE30302077F017E230041306B220221032002240002400240200028021822042000411C6A2802002205460D0002400340200541786A2802002001460D012004200541686A2205470D000C020B0B20042005460D00200541686A28020021050C010B024002400240024020014100410010102206417F4A0D00410041D0C10010020C010B2006418104490D010B200610182104410121070C010B20022006410F6A4170716B22042400410021070B20012004200610101A2003200420066A36022820032004360224200320043602204120101B220520003602142005410036021020054200370208200541086A2108200421020240200641074B0D00410041A3C5001002200328022421020B20052002410810081A2003200241086A360224200341206A200810361A20052001360218200320053602182003200529030022093703102003200136020C02400240200028021C2206200041206A2802004F0D00200620013602102006200937030820034100360218200620053602002000200641186A36021C0C010B200041186A200341186A200341106A2003410C6A10280B02402007450D00200410190B20032802182101200341003602182001450D00024020012D0008410171450D00200141106A280200101C0B2001101C0B200341306A240020050BCE0202087F017E230041106B2202210320022400200142013703004108210420002802042105200141086A22062000280200280200101F1A2001410C6A2802002207AD420020012D0008220841017122091B210A0340200441016A2104200A420788220A4200520D000B024002402007200841017620091B220820046A2207418104490D002007101821020C010B20022007410F6A4170716B220224000B20032002360204200320023602002003200220086A20046A360208200221040240200741074A0D004100419AC2001002200328020421040B20042001410810081A2003200441086A36020420032006103A1A200120052903084280D0EBF4CCC9E2D7AA7F20002802082903002001290300220A20022007101136021802402007418104490D00200210190B0240200A2005290310540D002005427E200A42017C200A427D561B3703100B200341106A24000BB20301057F0240024002402000280204200028020022046B41186D220541016A220641ABD5AAD5004F0D0041AAD5AAD500210702400240200028020820046B41186D220441D4AAD52A4B0D0020062004410174220720072006491B22070D0041002107410021040C010B200741186C101B21040B20012802002106200141003602002004200541186C22086A2201200328020036021020012002290300370308200120063602002004200741186C6A2105200141186A21062000280204220220002802002207460D01200420086A41686A21010340200241686A220428020021032004410036020020012003360200200141086A200241706A2202290300370300200141106A200241086A280200360200200141686A21012004210220072004470D000B200141186A210120002802042107200028020021040C020B20001022000B200721040B200020053602082000200636020420002001360200024020072004460D000340200741686A220728020021012007410036020002402001450D00024020012D0008410171450D00200141106A280200101C0B2001101C0B20042007470D000B0B02402004450D002004101C0B0BFA0803027F017E017F23004190016B2205240020052001370360200110000240200328020420032D0000220641017620064101711B0D00410041D8C00010020B200541D8006A4100360200200542003703502005427F370348200520002903002207370340200520073703380240024020072007428080808080CCEE93C5002001100122064100480D000240200541386A2006102A2206280214200541386A460D004100419DC10010020B2000290300210120052004360210200541386A20062001200541106A102B0C010B20002903002101200520043602042005200541E0006A36020020052001370370024010032005290338510D00410041E7C10010020B2005200541F0006A3602182005200541386A360214200520053602104120101B2206410036021020064200370208200642003703002006200541386A360214200541106A2006102C200520063602880120052006290300220137031020052006280218220836028001024002402005280254220420052802584F0D0020042008360210200420013703082005410036028801200420063602002005200441186A3602540C010B200541D0006A20054188016A200541106A20054180016A102D0B200528028801210620054100360288012006450D00024020062D0008410171450D00200641106A280200101C0B2006101C0B200541306A4100360200200542003703282005427F3703202005200529036037031820052000290300220137031020052003360208200520023602042005200541106A3602002005200137038801024010032005290310510D00410041E7C10010020B200520054188016A3602782005200541106A3602742005200536027041C800101B2203420037023020034200370228200342003702202003420037021820034200370210200342003702082003200541106A360238200541F0006A2003102E20052003360280012005200329030022013703702005200328023C220636026C02400240200528022C220020052802304F0D0020002006360210200020013703082005410036028001200020033602002005200041186A36022C0C010B200541286A20054180016A200541F0006A200541EC006A102F0B2005280280012103200541003602800102402003450D00024020032D002C410171450D00200341346A280200101C0B024020032D0020410171450D00200341286A280200101C0B024020032D0014410171450D002003411C6A280200101C0B024020032D0008410171450D00200341106A280200101C0B2003101C0B024020052802282200450D0002400240200528022C22032000470D00200021030C010B200541306A210603402006200341686A2203103020002003470D000B200528022821030B2005200036022C2003101C0B024020052802502206450D0002400240200528025422032006470D00200621030C010B0340200341686A220328020021002003410036020002402000450D00024020002D0008410171450D00200041106A280200101C0B2000101C0B20062003470D000B200528025021030B200520063602542003101C0B20054190016A24000BEA0302077F017E230041306B220221032002240002400240200028021822042000411C6A2802002205460D0002400340200541786A2802002001460D012004200541686A2205470D000C020B0B20042005460D00200541686A28020021050C010B024002400240024020014100410010102206417F4A0D00410041D0C10010020C010B2006418104490D010B200610182104410121070C010B20022006410F6A4170716B22042400410021070B20012004200610101A2003200420066A36022820032004360224200320043602204120101B22052000360214200541003602102005420037020820054200370300200541086A2108200421020240200641074B0D00410041A3C5001002200328022421020B20052002410810081A2003200241086A360224200341206A200810361A20052001360218200320053602182003200529030022093703102003200136020C02400240200028021C2206200041206A2802004F0D00200620013602102006200937030820034100360218200620053602002000200641186A36021C0C010B200041186A200341186A200341106A2003410C6A102D0B02402007450D00200410190B20032802182101200341003602182001450D00024020012D0008410171450D00200141106A280200101C0B2001101C0B200341306A240020050BEA0204037F017E037F017E230041106B2204210520042400024020012802142000460D00410041E8C20010020B024010032000290300510D0041004196C30010020B4108210620012903002107200141086A22082003280200101F1A024020072001290300510D00410041C9C30010020B2001410C6A2802002203AD420020012D00082209410171220A1B210B0340200641016A2106200B420788220B4200520D000B0240024020032009410176200A1B220920066A2203418104490D002003101821040C010B20042003410F6A4170716B220424000B20052004360204200520043602002005200420096A20066A360208200421060240200341074A0D004100419AC2001002200528020421060B20062001410810081A2005200641086A36020420052008103A1A2001280218200220042003101202402003418104490D00200410190B024020072000290310540D002000427E200742017C2007427D561B3703100B200541106A24000BD60202087F017E230041106B22022103200224002001200028020022042802002903003703004108210520002802042106200141086A22072004280204101F1A2001410C6A2802002204AD420020012D0008220841017122091B210A0340200541016A2105200A420788220A4200520D000B024002402004200841017620091B220820056A2204418104490D002004101821020C010B20022004410F6A4170716B220224000B20032002360204200320023602002003200220086A20056A360208200221050240200441074A0D004100419AC2001002200328020421050B20052001410810081A2003200541086A36020420032007103A1A20012006290308428080808080CCEE93C50020002802082903002001290300220A20022004101136021802402004418104490D00200210190B0240200A2006290310540D002006427E200A42017C200A427D561B3703100B200341106A24000BB20301057F0240024002402000280204200028020022046B41186D220541016A220641ABD5AAD5004F0D0041AAD5AAD500210702400240200028020820046B41186D220441D4AAD52A4B0D0020062004410174220720072006491B22070D0041002107410021040C010B200741186C101B21040B20012802002106200141003602002004200541186C22086A2201200328020036021020012002290300370308200120063602002004200741186C6A2105200141186A21062000280204220220002802002207460D01200420086A41686A21010340200241686A220428020021032004410036020020012003360200200141086A200241706A2202290300370300200141106A200241086A280200360200200141686A21012004210220072004470D000B200141186A210120002802042107200028020021040C020B20001022000B200721040B200020053602082000200636020420002001360200024020072004460D000340200741686A220728020021012007410036020002402001450D00024020012D0008410171450D00200141106A280200101C0B2001101C0B20042007470D000B0B02402004450D002004101C0B0BE40303057F017E047F230041106B220221032002240020002802042104024002402000280200220528020022062903102207427F520D004200210702402006290300200629030842808080C095E6E0D8927F420010132208417F4A0D00200642003703100C020B2006200810321A20034100360204200320063602002006427E2003103B280204290300220742017C2007427D561B22073703100B2007427E540D0041004185C4001002200629031021070B20012007370300200141086A22082005280204101F1A200141146A22092005280208101F1A200141206A220A4184C40010211A2001412C6A220B4184C40010211A2003410036020020032001103C1A0240024020032802002205418104490D002005101821060C010B20022005410F6A4170716B220624000B20032006360204200320063602002003200620056A360208200621020240200541074A0D004100419AC2001002200328020421020B20022001410810081A2003200241086A36020420032008103A2009103A200A103A200B103A1A2001200429030842808080C095E6E0D8927F20002802082903002001290300220720062005101136023C02402005418104490D00200610190B024020072004290310540D002004427E200742017C2007427D561B3703100B200341106A24000B8D0301057F0240024002402000280204200028020022046B41186D220541016A220641ABD5AAD5004F0D0041AAD5AAD500210702400240200028020820046B41186D220441D4AAD52A4B0D0020062004410174220420042006491B22070D0041002107410021040C010B200741186C101B21040B20012802002106200141003602002004200541186C22086A2201200328020036021020012002290300370308200120063602002004200741186C6A2105200141186A21062000280204220220002802002207460D01200420086A41686A21040340200241686A220128020021032001410036020020042003360200200441086A200241706A2202290300370300200441106A200241086A280200360200200441686A21042001210220072001470D000B200441186A210120002802042107200028020021040C020B20001022000B200721040B200020053602082000200636020420002001360200024020072004460D00200041086A210103402001200741686A2207103020042007470D000B0B02402004450D002004101C0B0B7E01017F200128020021022001410036020002402002450D00024020022D002C410171450D00200241346A280200101C0B024020022D0020410171450D00200241286A280200101C0B024020022D0014410171450D002002411C6A280200101C0B024020022D0008410171450D00200241106A280200101C0B2002101C0B0BC70403027F017E017F230041E0006B220624002000290300100041002107200641D8006A4100360200200642003703502006427F37034820062001370340200620002903002208370338024002402008200142808080C095E6E0D8927F2002100122094100480D00200641386A200910322207280238200641386A460D014100419DC10010020C010B410041F4C00010020B200029030021022006200436021420062003360210024020070D00410041C5C20010020B200641386A20072002200641106A103341002107200641306A4100360200200642003703282006427F370320200620002903002202370318200620023703100240024020022002428080808080CCEE93C5002001100122034100480D000240200641106A2003102A2207280214200641106A460D004100419DC10010020B20002903002101200620053602080C010B41004186C10010022000290300210120062005360208410041C5C20010020B200641106A20072001200641086A1034024020062802282203450D0002400240200628022C22002003470D00200321000C010B0340200041686A220028020021072000410036020002402007450D00024020072D0008410171450D00200741106A280200101C0B2007101C0B20032000470D000B200628022821000B2006200336022C2000101C0B024020062802502207450D0002400240200628025422002007470D00200721000C010B200641D8006A210303402003200041686A2200103020072000470D000B200628025021000B200620073602542000101C0B200641E0006A24000B830403057F017E017F230041306B2202240020022203200136022C02400240200028021822042000411C6A2802002205460D0002400340200541786A2802002001460D012004200541686A2205470D000C020B0B20042005460D00200541686A28020021020C010B024002400240024020014100410010102204417F4A0D00410041D0C10010020C010B2004418104490D010B200410182105410121060C010B20022004410F6A4170716B22052400410021060B20012005200410101A2003200520046A360228200320053602242003200536022020032003412C6A36020C2003200341206A3602082003200036021041C800101B22012000200341086A103D2102200320013602182003200129030022073703082003200128023C220836020402400240200028021C2204200041206A2802004F0D00200420083602102004200737030820034100360218200420013602002000200441186A36021C0C010B200041186A200341186A200341086A200341046A102F0B02402006450D00200510190B20032802182105200341003602182005450D00024020052D002C410171450D00200541346A280200101C0B024020052D0020410171450D00200541286A280200101C0B024020052D0014410171450D002005411C6A280200101C0B024020052D0008410171450D00200541106A280200101C0B2005101C0B200341306A240020020BD40203027F017E037F230041106B2204210520042400024020012802382000460D00410041E8C20010020B024010032000290300510D0041004196C30010020B20012903002106200141206A22072003280200101F1A2001412C6A22082003280204101F1A024020062001290300510D00410041C9C30010020B2005410036020020052001103C1A0240024020052802002209418104490D002009101821030C010B20042009410F6A4170716B220324000B20052003360204200520033602002005200320096A360208200321040240200941074A0D004100419AC2001002200528020421040B20042001410810081A2005200441086A3602042005200141086A103A200141146A103A2007103A2008103A1A200128023C200220032009101202402009418104490D00200310190B024020062000290310540D002000427E200642017C2006427D561B3703100B200541106A24000BEA0204037F017E037F017E230041106B2204210520042400024020012802142000460D00410041E8C20010020B024010032000290300510D0041004196C30010020B4108210620012903002107200141086A22082003280200101F1A024020072001290300510D00410041C9C30010020B2001410C6A2802002203AD420020012D00082209410171220A1B210B0340200641016A2106200B420788220B4200520D000B0240024020032009410176200A1B220920066A2203418104490D002003101821040C010B20042003410F6A4170716B220424000B20052004360204200520043602002005200420096A20066A360208200421060240200341074A0D004100419AC2001002200528020421060B20062001410810081A2005200641086A36020420052008103A1A2001280218200220042003101202402003418104490D00200410190B024020072000290310540D002000427E200742017C2007427D561B3703100B200541106A24000BE50102047F017E230041F0006B220221032002240041002104024010062205450D00024002402005418004490D002005101821040C010B20022005410F6A4170716B220424000B2004200510071A0B20032004360244200320043602402003200420056A3602482003410036023820034200370330200341C0006A200341306A10361A200341086A20032802482204360200200341286A2004360200200320032903402206370300200320013703182003200037031020032006370320200341106A200341306A1025024020032D0030410171450D002003280238101C0B200341F0006A24000BA00301057F230041206B2202240020024100360218200242003703102000200241106A10371A0240024002402002280214200228021022036B2204450D00200241086A410036020020024200370300200441704F0D02024002402004410A4B0D00200220044101743A0000200241017221050C010B200441106A4170712206101B21052002200436020420022006410172360200200220053602080B0340200520032D00003A0000200541016A2105200341016A21032004417F6A22040D000B200541003A00000240024020012D00004101710D00200141003B01000C010B200128020841003A00002001410036020420012D0000410171450D002001280208101C200141003602000B20012002290300370200200141086A200241086A2802003602000C010B0240024020012D00004101710D00200141003B01000C010B200128020841003A00002001410036020420012D0000410171450D002001280208101C200141003602000B20014100360208200142003702000B024020022802102205450D00200220053602142005101C0B200241206A240020000F0B2002101E000BFF0103017F017E047F2000280204210242002103410021040340024020022000280208490D004100419FC5001002200028020421020B20022D000021052000200241016A22063602042003200541FF0071200441FF0171220274AD842103200241076A2104200621022005418001710D000B0240024020012802042205200128020022026B22072003A722044F0D002001200420076B103E2000280204210620012802042105200128020021020C010B200720044D0D002001200220046A22053602040B0240200028020820066B200520026B22054F0D00410041A3C5001002200028020421060B20022006200510081A2000200028020420056A36020420000B9F0302037F017E230041A0016B220221032002240002400240100622040D00410021020C010B024002402004418004490D002004101821020C010B20022004410F6A4170716B220224000B2002200410071A0B20032002360274200320023602702003200220046A360278200342003703680240200441074B0D00410041A3C5001002200328027421020B200341E8006A2002410810081A2003200241086A3602742003410036026020034200370358200341F0006A200341D8006A10361A2003410036025020034200370348200341F0006A200341C8006A10361A2003410036024020034200370338200341F0006A200341386A10361A200341086A41086A200341F0006A41086A2802002202360200200341306A2002360200200320032903702205370308200320013703202003200037031820032005370328200341186A2003290368200341D8006A200341C8006A200341386A1029024020032D0038410171450D002003280240101C0B024020032D0048410171450D002003280250101C0B024020032D0058410171450D002003280260101C0B200341A0016A24000BDF0302047F017E230041A0016B220221032002240002400240100622040D00410021020C010B024002402004418004490D002004101821020C010B20022004410F6A4170716B220224000B2002200410071A0B20032002360274200320023602702003200220046A2205360278200342003703680240200441074B0D00410041A3C500100220032802782105200328027421020B200341E8006A2002410810081A2003200241086A22023602740240200520026B41074B0D00410041A3C5001002200328027421020B200341E0006A2002410810081A2003200241086A3602742003410036025820034200370350200341F0006A200341D0006A10361A2003410036024820034200370340200341F0006A200341C0006A10361A2003410036023820034200370330200341F0006A200341306A10361A200341086A200341F0006A41086A2802002202360200200341286A2002360200200320032903702206370300200320013703182003200037031020032006370320200341106A20032903682003290360200341D0006A200341C0006A200341306A1031024020032D0030410171450D002003280238101C0B024020032D0040410171450D002003280248101C0B024020032D0050410171450D002003280258101C0B200341A0016A24000BFD0103027F017E027F230041106B22022400200128020420012D0000220341017620034101711BAD21042000280204210303402004A721052002200442078822044200522206410774200541FF0071723A000F0240200028020820036B41004A0D004100419AC2001002200028020421030B20032002410F6A410110081A2000200028020441016A220336020420060D000B0240200128020420012D00002205410176200541017122061B2205450D002001280208200141016A20061B21060240200028020820036B20054E0D004100419AC2001002200028020421030B20032006200510081A2000200028020420056A3602040B200241106A240020000B960101027F230041106B2201240002400240200028020422020D00024020002802002202290300200229030842808080C095E6E0D8927F10142202417F470D00410041B9C40010020B2002200141086A10152202417F4A0D01410041B9C40010020C010B200228023C200141086A10152202417F4A0D00410041EFC40010020B2000200028020020021032360204200141106A240020000B830303017F017E017F2000200028020041086A22023602002001410C6A350200420020012D00084101711B21030340200241016A2102200342078822034200520D000B200020023602000240200128020C20012D0008220441017620044101711B2204450D002000200420026A22023602000B200141186A350200420020012D00144101711B21030340200241016A2102200342078822034200520D000B200020023602000240200128021820012D0014220441017620044101711B2204450D002000200420026A22023602000B200141246A350200420020012D00204101711B21030340200241016A2102200342078822034200520D000B200020023602000240200128022420012D0020220441017620044101711B2204450D002000200420026A22023602000B200141306A350200420020012D002C4101711B21030340200241016A2102200342078822034200520D000B200020023602000240200128023020012D002C220141017620014101711B2201450D002000200120026A3602000B20000BAE0101017F200020013602382000420037022020004200370208200041306A4200370200200041286A4200370200200041186A4200370200200041106A4200370200024020022802002201280208200128020422036B41074B0D00410041A3C5001002200128020421030B20002003410810081A2001200128020441086A3602042001200041086A1036200041146A1036200041206A10362000412C6A10361A2000200228020428020036023C20000B980201057F02400240024020002802082202200028020422036B2001490D000340200341003A00002000200028020441016A22033602042001417F6A22010D000C020B0B2003200028020022046B220520016A2206417F4C0D0141FFFFFFFF07210302400240200220046B220241FEFFFFFF034B0D0020062002410174220320032006491B22030D0041002103410021020C010B2003101B21020B200220036A2106200220056A220421030340200341003A0000200341016A21032001417F6A22010D000B20042000280204200028020022016B22026B2104024020024101480D0020042001200210081A200028020021010B2000200636020820002003360204200020043602002001450D002001101C0B0F0B20001022000B0BD60503004190C0000B3C6661696C656420746F20616C6C6F6361746520706167657300506572736F6E6120696E666F20616C72656164792065786973747300000000000000000041CCC0000B81050000000000000000000000004D657373616765204349442063616E6E6F7420626520656D707479004D657373616765206E6F7420666F756E6400436F6E766572736174696F6E206E6F7420666F756E64006F626A6563742070617373656420746F206974657261746F725F746F206973206E6F7420696E206D756C74695F696E646578006572726F722072656164696E67206974657261746F720063616E6E6F7420637265617465206F626A6563747320696E207461626C65206F6620616E6F7468657220636F6E7472616374006461746173747265616D20617474656D7074656420746F20777269746520706173742074686520656E640063616E6E6F74207061737320656E64206974657261746F7220746F206D6F64696679006F626A6563742070617373656420746F206D6F64696679206973206E6F7420696E206D756C74695F696E6465780063616E6E6F74206D6F64696679206F626A6563747320696E207461626C65206F6620616E6F7468657220636F6E747261637400757064617465722063616E6E6F74206368616E6765207072696D617279206B6579207768656E206D6F64696679696E6720616E206F626A65637400006E657874207072696D617279206B657920696E207461626C65206973206174206175746F696E6372656D656E74206C696D69740063616E6E6F742064656372656D656E7420656E64206974657261746F72207768656E20746865207461626C6520697320656D7074790063616E6E6F742064656372656D656E74206974657261746F7220617420626567696E6E696E67206F66207461626C6500676574006461746173747265616D20617474656D7074656420746F207265616420706173742074686520656E64000041000B04D0220000",
        abi: "0E737973696F3A3A6162692F312E3200060A636F6E766F5F696E666F00020C6163636F756E745F6E616D65046E616D651666756C6C5F636F6E766F5F686973746F72795F63696406737472696E670B66696E616C697A656D736700050C6163636F756E745F6E616D65046E616D65036B65790675696E7436340E706F73745F73746174655F63696406737472696E6708726573706F6E736506737472696E671666756C6C5F636F6E766F5F686973746F72795F63696406737472696E670B696E6974706572736F6E61000111696E697469616C5F73746174655F63696406737472696E670C6D6573736167655F696E666F0005036B65790675696E7436340D7072655F73746174655F63696406737472696E67076D73675F63696406737472696E670E706F73745F73746174655F63696406737472696E6708726573706F6E736506737472696E670C706572736F6E615F696E666F00020269640675696E74363411696E697469616C5F73746174655F63696406737472696E67097375626D69746D736700040C6163636F756E745F6E616D65046E616D650D7072655F73746174655F63696406737472696E67076D73675F63696406737472696E671666756C6C5F636F6E766F5F686973746F72795F63696406737472696E6703001896EABB68A65B0B66696E616C697A656D73670000CCA4F8AA9ADD740B696E6974706572736F6E61000000605866278FC6097375626D69746D736700030000000060BA27450369363400000A636F6E766F5F696E666F000000583183B1920369363400000C6D6573736167655F696E666F00E89ACE4C8AAFAA0369363400000C706572736F6E615F696E666F0000000000"
    }
} as const;

export default config;
