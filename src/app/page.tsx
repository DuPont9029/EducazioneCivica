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
            <TextComponent text="
            Ogni anno, milioni di smartphone, tablet e dispositivi elettronici finiscono dimenticati nei cassetti o, peggio, nelle discariche. Ma cosa accadrebbe se invece di smaltirli, potessimo riutilizzarli per costruire qualcosa di nuovo, utile e sostenibile? 
            DeviceNet è la prima rete di comunicazione decentralizzata basata sul riutilizzo di dispositivi elettronici dismessi. Trasformiamo RAEE (Rifiuti di Apparecchiature Elettriche ed Elettroniche) in nodi intelligenti di una rete indipendente, resiliente e a basso impatto ambientale. 
            DeviceNet nasce per rispondere a questo problema con un’idea radicale: dare nuova vita ai dispositivi che il mercato ha scartato, trasformandoli in nodi attivi di una rete di comunicazione decentralizzata. 
            Il nostro progetto unisce sostenibilità ambientale, tecnologia e resilienza digitale, proponendo un modello completamente nuovo per pensare la connettività e il valore degli oggetti tecnologici.
            Attraverso un processo di recupero e rigenerazione, i dispositivi elettronici vengono riconvertiti grazie a un software leggero e open-source, che consente loro di comunicare tra loro senza bisogno di infrastrutture centralizzate. 
            Ogni nodo è indipendente, ma allo stesso tempo parte di un ecosistema distribuito, sicuro e resistente. Così, invece di diventare spazzatura, i vecchi dispositivi contribuiscono a costruire una rete viva, dinamica, capace di crescere con l’aiuto di chiunque voglia partecipare." 
            className="mt-4" 
            />


            <TextComponent text="DeviceNet nasce per rispondere al problema dei RAEE con un’idea radicale: dare nuova vita ai dispositivi che il mercato ha scartato, trasformandoli in nodi attivi di una rete di comunicazione decentralizzata. 
            Il nostro progetto unisce sostenibilità ambientale, tecnologia e resilienza digitale, proponendo un modello completamente nuovo per pensare la connettività e il valore degli oggetti tecnologici. 
            Attraverso un processo di recupero e rigenerazione, i dispositivi elettronici vengono riconvertiti grazie a un software leggero e open-source, che consente loro di comunicare tra loro senza bisogno di infrastrutture centralizzate. 
            Ogni nodo è indipendente, ma allo stesso tempo parte di un ecosistema distribuito, sicuro e resistente. Così, invece di diventare spazzatura, i vecchi dispositivi contribuiscono a costruire una rete viva, dinamica, capace di crescere con l’aiuto di chiunque voglia partecipare." 
            className="mt-4" 
            />
          <Footer />



    </div>
  );
}