
export const people = [
    { name: "Urmas Heliste", position: "Müügijuht", email: "urmas@ostanmetsa.ee", phone: "+37255567840" },
    { name: "Kaimo Laht", position: "Taksaator", email: "kaimo@ostanmetsa.ee", phone: "+3725048545" },
];
enum Seller {
    jur = "juriidiline isik",
    era = "eraisik"
}
enum Type {
    raie = "raieõiguse",
    metsa = "metsamaa",
    pollu = "põllumaa",
    kinnistu = "kinnistu"
}
enum County {
    voru = "Võrumaa",
    viljandi = "Viljandimaa",
    parnu = "Pärnumaa",
    polva = "Põlvamaa",
    laane = "Lääne-Virumaa",
    harju = "Harjumaa",
    jarva = "Järvamaa",
    jogeva = "Jõgevamaa",
    rapla = "Raplamaa",
    valga = "Valgamaa",
    tartu = "Tartumaa",
    saare = "Saaremaa",
}
interface Too {
    location: string;
    county: County;
    types: Type[];
    seller: Seller;
    size: number;
}
function New(location: string, county: County, types: Type[], seller: Seller, size?: number) {
    return { location, county, types, size, seller } as Too;
}
export const tood: { year: number, tood: Too[] }[] =
    [{
        year: 2016, tood: [
            New("Uue-Kolga", County.voru, [Type.raie], Seller.era, 500),
            New("Kopli", County.laane, [Type.raie], Seller.era, 600),
            New("Koosi", County.harju, [Type.raie], Seller.era, 1500),
        ]
    }, {
        year: 2015, tood: [
            New("Pihlaka", County.voru, [Type.raie], Seller.era, 450),
            New("Tänavaotsa", County.rapla, [Type.raie], Seller.era, 1200),
            New("Tammimetsa", County.rapla, [Type.raie], Seller.jur, 1500),
            New("Väiksepalu", County.polva, [Type.raie], Seller.era, 230),
            New("Hallikivi-Mihkli ", County.parnu, [Type.metsa], Seller.era, 1200),
            New("Tupsu", County.harju, [Type.raie], Seller.jur, 200),
            New("Loeta", County.saare, [Type.raie], Seller.era, 600),
            New("Ahula", County.harju, [Type.metsa], Seller.era, 1200),
        ]
    }, {
        year: 2014, tood: [
            New("Küti", County.viljandi, [Type.raie], Seller.era, 500),
            New("Tullino", County.valga, [Type.raie], Seller.era, 546),
            New("Männa", County.parnu, [Type.raie], Seller.era, 1555),
            New("Hangu", County.voru, [Type.raie], Seller.era, 1200),
            New("Sikka", County.polva, [Type.raie], Seller.era, 250),
            New("Müüriselja", County.parnu, [Type.metsa], Seller.era, 2500),
            New("Lepavõsa", County.laane, [Type.metsa], Seller.era, 1700),
            New("Tedrema", County.harju, [Type.raie], Seller.era, 590),
            New("Metsa-Juhani", County.harju, [Type.raie], Seller.jur, 500),
            New("Uueotsa 13", County.harju, [Type.raie], Seller.era, 600),
            New("Mõisanurga", County.voru, [Type.raie], Seller.jur, 450),
            New("Mõla", County.jarva, [Type.raie], Seller.era, 695),
            New("Innumetsa", County.jogeva, [Type.metsa], Seller.era, 600),
            New("Liuka", County.harju, [Type.metsa], Seller.era, 2000),
            New("Tondi", County.voru, [Type.metsa, Type.pollu], Seller.era),
            New("Kalda", County.voru, [Type.metsa, Type.pollu], Seller.era),
            New("Kivipõllu", County.voru, [Type.metsa, Type.pollu], Seller.era)
        ]
    }, {
        year: 2013, tood: [
            New("Pärna", County.harju, [Type.kinnistu, Type.raie], Seller.era, 600),
            New("Männa", County.parnu, [Type.raie], Seller.era, 1000),
            New("Siimu-Mati", County.parnu, [Type.kinnistu], Seller.era),
            New("Andemaa", County.parnu, [Type.raie], Seller.era, 600),
            New("Kesa", County.harju, [Type.raie], Seller.era, 520),
            New("Ürg-Raudsepa", County.valga, [Type.raie], Seller.era, 425),
            New("Maidu", County.voru, [Type.kinnistu], Seller.era),
            New("Pealt-Kübareste", County.parnu, [Type.raie], Seller.era, 566),
            New("Arno", County.harju, [Type.raie], Seller.era, 1500),
            New("Ristmetsa", County.tartu, [Type.kinnistu], Seller.era),
            New("Küti", County.voru, [Type.raie], Seller.era, 128),
            New("Luiga", County.polva, [Type.raie], Seller.era, 700),
        ]
    },]