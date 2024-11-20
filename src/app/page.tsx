import Image from "next/image";

import Navbar from "@components/navbar";
import ImageSlider from "@components/ImageSlider";
import TextComponent from "@components/TextComponent";
import TradingViewWidget from "@components/TradingViewWidget";
import Footer from "./components/footer";





export default function Home() {
  return (
    <div>
      
        <ImageSlider />
          <div className="py-10 px-5">
            <TradingViewWidget />
          </div>
            <TextComponent text="Enrico Mattei, una delle figure più emblematiche e controverse dell’Italia del dopoguerra, incarna in pieno l’energia e le ambizioni della nazione che stava risorgendo dalle macerie del conflitto mondiale. Fondatore dell'ENI, l'Ente Nazionale Idrocarburi, Mattei riuscì a trasformare un'azienda statale di secondo piano in una delle più influenti compagnie energetiche a livello globale, cambiando non solo la mappa dell’energia in Italia, ma anche i rapporti internazionali in un periodo in cui il petrolio si affermava come risorsa strategica. Enrico Mattei, figura emblematica e visionaria dell’Italia del dopoguerra, rappresenta il fervore e la determinazione di una nazione desiderosa di risollevarsi e ritagliarsi uno spazio autonomo sulla scena globale. Fondatore dell’ENI, l’Ente Nazionale Idrocarburi, Mattei trasformò una realtà statale marginale in un colosso energetico capace di sfidare i giganti petroliferi internazionali e di ridefinire le regole del gioco. Grazie alla sua audacia e alla sua strategia innovativa, Mattei cambiò il volto dell’industria energetica italiana e influenzò profondamente la geopolitica, promuovendo accordi vantaggiosi per i paesi produttori e sostenendo l’indipendenza economica dell’Italia in un periodo di grande cambiamento. Mattei riuscì a ottenere concessioni e appalti nei Paesi detentori delle riserve di petrolio, offrendo ai governanti condizioni più vantaggiose di quelle proposte dalle grandi compagnie che dominavano il mercato, da lui battezzate “le sette sorelle”. I successi dell’Eni procurarono a Mattei molti nemici, sia in Italia, sia all’estero, e nel 1962 il dirigente trovò la morte in un incidente aereo causato da un attentato dinamitardo. I mandanti non sono mai stati individuati con certezza.P" className="mt-4" />
            <TextComponent text="Mattei riuscì a ottenere concessioni e appalti nei Paesi detentori delle riserve di petrolio, offrendo ai governanti condizioni più vantaggiose di quelle proposte dalle grandi compagnie che dominavano il mercato, da lui battezzate “le sette sorelle”. I successi dell’Eni procurarono a Mattei molti nemici, sia in Italia, sia all’estero, e nel 1962 il dirigente trovò la morte in un incidente aereo causato da un attentato dinamitardo. I mandanti non sono mai stati individuati con certezza." className="mt-4" />
          <Footer />



    </div>
  );
}