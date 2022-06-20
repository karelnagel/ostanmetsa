
export const config = {
    email: 'info@ostanmetsa.ee',
    phone: '+372 504 8545',
    people: [
        { name: "Urmas Heliste", position: "Müügijuht", email: "urmas@ostanmetsa.ee", phone: "+37255567840" },
        { name: "Kaimo Laht", position: "Taksaator", email: "kaimo@ostanmetsa.ee", phone: "+3725048545" },
    ]
};
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
interface Work {
    location: string;
    county: County;
    types: Type[];
    seller: Seller;
    size: number;
}
function NewWork(location: string, county: County, types: Type[], seller: Seller, size?: number) {
    return { location, county, types, size, seller } as Work;
}
export const works: { year: number, work: Work[] }[] =
    [{
        year: 2016, work: [
            NewWork("Uue-Kolga", County.voru, [Type.raie], Seller.era, 500),
            NewWork("Kopli", County.laane, [Type.raie], Seller.era, 600),
            NewWork("Koosi", County.harju, [Type.raie], Seller.era, 1500),
        ]
    }, {
        year: 2015, work: [
            NewWork("Pihlaka", County.voru, [Type.raie], Seller.era, 450),
            NewWork("Tänavaotsa", County.rapla, [Type.raie], Seller.era, 1200),
            NewWork("Tammimetsa", County.rapla, [Type.raie], Seller.jur, 1500),
            NewWork("Väiksepalu", County.polva, [Type.raie], Seller.era, 230),
            NewWork("Hallikivi-Mihkli ", County.parnu, [Type.metsa], Seller.era, 1200),
            NewWork("Tupsu", County.harju, [Type.raie], Seller.jur, 200),
            NewWork("Loeta", County.saare, [Type.raie], Seller.era, 600),
            NewWork("Ahula", County.harju, [Type.metsa], Seller.era, 1200),
        ]
    }, {
        year: 2014, work: [
            NewWork("Küti", County.viljandi, [Type.raie], Seller.era, 500),
            NewWork("Tullino", County.valga, [Type.raie], Seller.era, 546),
            NewWork("Männa", County.parnu, [Type.raie], Seller.era, 1555),
            NewWork("Hangu", County.voru, [Type.raie], Seller.era, 1200),
            NewWork("Sikka", County.polva, [Type.raie], Seller.era, 250),
            NewWork("Müüriselja", County.parnu, [Type.metsa], Seller.era, 2500),
            NewWork("Lepavõsa", County.laane, [Type.metsa], Seller.era, 1700),
            NewWork("Tedrema", County.harju, [Type.raie], Seller.era, 590),
            NewWork("Metsa-Juhani", County.harju, [Type.raie], Seller.jur, 500),
            NewWork("Uueotsa 13", County.harju, [Type.raie], Seller.era, 600),
            NewWork("Mõisanurga", County.voru, [Type.raie], Seller.jur, 450),
            NewWork("Mõla", County.jarva, [Type.raie], Seller.era, 695),
            NewWork("Innumetsa", County.jogeva, [Type.metsa], Seller.era, 600),
            NewWork("Liuka", County.harju, [Type.metsa], Seller.era, 2000),
            NewWork("Tondi", County.voru, [Type.metsa, Type.pollu], Seller.era),
            NewWork("Kalda", County.voru, [Type.metsa, Type.pollu], Seller.era),
            NewWork("Kivipõllu", County.voru, [Type.metsa, Type.pollu], Seller.era)
        ]
    }, {
        year: 2013, work: [
            NewWork("Pärna", County.harju, [Type.kinnistu, Type.raie], Seller.era, 600),
            NewWork("Männa", County.parnu, [Type.raie], Seller.era, 1000),
            NewWork("Siimu-Mati", County.parnu, [Type.kinnistu], Seller.era),
            NewWork("Andemaa", County.parnu, [Type.raie], Seller.era, 600),
            NewWork("Kesa", County.harju, [Type.raie], Seller.era, 520),
            NewWork("Ürg-Raudsepa", County.valga, [Type.raie], Seller.era, 425),
            NewWork("Maidu", County.voru, [Type.kinnistu], Seller.era),
            NewWork("Pealt-Kübareste", County.parnu, [Type.raie], Seller.era, 566),
            NewWork("Arno", County.harju, [Type.raie], Seller.era, 1500),
            NewWork("Ristmetsa", County.tartu, [Type.kinnistu], Seller.era),
            NewWork("Küti", County.voru, [Type.raie], Seller.era, 128),
            NewWork("Luiga", County.polva, [Type.raie], Seller.era, 700),
        ]
    },]