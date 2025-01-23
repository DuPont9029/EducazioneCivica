
import Enrico2 from '@images/enrico_mattei2.jpeg'
import Image from 'next/image'
import TextComponent from '@components/TextComponent' // Assumendo che TextComponent sia un componente separato
import Footer from '@components/footer'
import enisede from '@images/enisede.jpeg'

export default function Eni () {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center">
                <TextComponent text="L'Eni, acronimo di Ente Nazionale Idrocarburi, è una multinazionale italiana fondata il 10 febbraio 1953. La sua creazione avvenne attraverso la trasformazione dell'Agip, azienda istituita nel 1926 con l'obiettivo di esplorare giacimenti petroliferi e commercializzare petrolio e derivati. Enrico Mattei, nominato presidente dell'Eni nel marzo 1953, guidò l'ente nella ricostruzione della politica energetica italiana nel periodo post-bellico. Riconoscendo la limitatezza delle risorse interne, l'Eni iniziò a esplorare opportunità all'estero, entrando in competizione con le grandi compagnie petrolifere internazionali, note come le 'sette sorelle'. Mattei introdusse una nuova strategia contrattuale, la cosiddetta 'formula Mattei', che prevedeva una partecipazione paritaria nelle attività di estrazione e commercializzazione del petrolio con i paesi produttori. Questo approccio collaborativo mirava a trasferire competenze e supportare lo sviluppo locale, instaurando relazioni basate sul rispetto reciproco." className="mr-2" />
                <div className="pt-4 pb-4 pr-4">
                <Image
                    src={enisede}
                    className="w-80 h-64 rounded-2xl"
                    style={{ border: 0 }}
                    loading="lazy"
                    alt="Description of the image"
                />
                </div>
            </div>

            <div>
                <TextComponent text="Nel 1995, l'Eni fu trasformata in una società per azioni e quotata in borsa, segnando l'inizio di un percorso che l'avrebbe portata a diventare una Global Energy Tech Company. Questa transizione rifletteva la volontà di adattarsi alle dinamiche del mercato globale, mantenendo al contempo un forte legame con le proprie radici e missioni istituzionali. "/>
                <TextComponent text="A partire dal 2014, l'Eni ha intrapreso una trasformazione significativa per rispondere alle sfide poste dal cambiamento climatico e dalla transizione energetica. L'azienda si è impegnata a raggiungere la neutralità carbonica, nota come obiettivo Net Zero, adottando un approccio che considera l'intera catena del valore dell'energia. Questo percorso include lo sviluppo di tecnologie innovative e soluzioni sostenibili per offrire prodotti e servizi sempre più decarbonizzati ai propri clienti" />
            </div>

            { 
            /*
            <div className="flex flex-col sm:flex-row items-center">

                <div className="order-2 sm:order-1 p-4">
                    <Image
                        src={Enrico2}
                        className="w-80 h-64 rounded-2xl"
                        style={{ border: 0 }}
                        loading="lazy"
                        alt="Description of the image"
                    />
                </div>
                <TextComponent 
                    text="Successivamente alla conclusione della Seconda Guerra mondiale, cominciò il complesso periodo di ricostruzione dell’Italia. Nell’anno 1945, Alcide De Gasperi, che ricopriva la carica di Presidente del Consiglio, scelse proprio Mattei per il ruolo di commissario liquidatore dell’Agip (Azienda Generale Italiana Petroli). Tuttavia, Mattei si rese conto del potenziale dell’Agip e decise di non solo salvarla ma anche rilanciarla. Forte dei ritrovamenti di metano in Val Padana, incrementò la perforazione dei pozzi e ottenne finanziamenti. Inoltre, seguì personalmente il progetto di ristrutturazione dei distributori Agip, introducendo innovazioni come aree di servizio complete con bar, officine meccaniche e altri servizi di supporto."
                    className="order-1 sm:order-2 mr-2"
                />
            </div>
            */
            }

            <div className="flex flex-col sm:flex-row items-center">
                <div className="order-1 sm:order-1 p-4">
                    <Image
                        src={Enrico2}
                        className="w-80 h-64 rounded-2xl"
                        style={{ border: 0 }}
                        loading="lazy"
                        alt="Description of the image"
                    />
                </div>
                <TextComponent 
                    text="L'approccio di Mattei, basato sulla collaborazione e sul rispetto delle culture locali, ha lasciato un'impronta indelebile nella cultura aziendale dell'Eni. L'azienda ha continuato a promuovere iniziative che favoriscono lo sviluppo sociale ed economico nei paesi in cui opera, mantenendo un impegno costante verso la sostenibilità e l'innovazione. Dalla sua fondazione nel 1953, l'Eni ha svolto un ruolo cruciale nello sviluppo economico e industriale dell'Italia, evolvendosi da ente pubblico a multinazionale energetica globale. Attraverso strategie innovative e un impegno costante verso la sostenibilità, l'azienda continua ad affrontare le sfide energetiche del presente e del futuro, rimanendo fedele ai principi stabiliti dal suo fondatore, Enrico Mattei."
                    className="order-2 sm:order-2 mr-2"
                />
            </div>




            <Footer />
        </div>
       
    )
}