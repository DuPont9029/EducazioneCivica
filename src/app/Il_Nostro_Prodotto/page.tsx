
import Enrico2 from '@images/enrico_mattei2.jpeg'
import Image from 'next/image'
import TextComponent from '@components/TextComponent' // Assumendo che TextComponent sia un componente separato
import Footer from '@components/footer'
import enisede from '@images/Architettura React Native.webp'
import foss from '@images/foss.jpeg'

export default function Il_Nostro_Prodotto () {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center">
                <TextComponent text="Il client di DeviceNet è l’applicazione pensata per riportare in vita dispositivi elettronici dismessi, trasformandoli in nodi attivi e autonomi di una rete decentralizzata. Si installa facilmente su smartphone, tablet o altri dispositivi compatibili e consente loro di entrare in comunicazione tra loro senza l’uso di server centrali o infrastrutture di rete tradizionali.

                Una volta avviato, il client stabilisce connessioni dirette con altri dispositivi nelle vicinanze, costruendo una rete mesh dinamica. Ogni dispositivo diventa così un punto di trasmissione, ricezione e instradamento dei dati, contribuendo attivamente alla stabilità e all’estensione della rete. L'interfaccia è minimale e accessibile: dal dispositivo stesso o da un browser collegato localmente è possibile visualizzare lo stato del nodo, consultare le informazioni sul traffico e monitorare le condizioni operative in tempo reale." className="mr-2" />
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
                <TextComponent text="Il software è progettato per operare in modo efficiente anche su hardware datato, riducendo al minimo il consumo energetico e la complessità dell’interazione. La configurazione iniziale è automatica e non richiede competenze tecniche, il che lo rende adatto anche a contesti sociali o geografici in cui l’accesso alla tecnologia è limitato. Dal punto di vista tecnico, il client è sviluppato in React Native, una scelta che permette di mantenere la compatibilità multipiattaforma e di ottimizzare la distribuzione, sia su dispositivi Android che su iOS. Il linguaggio di sviluppo principale è TypeScript, che garantisce maggiore sicurezza nel codice e facilità di manutenzione anche nel lungo periodo. "/>
                <TextComponent text="Per garantire l’integrazione diretta con le funzionalità del sistema operativo, il client utilizza le API native del dispositivo. Questo gli permette di controllare elementi fondamentali come la connettività wireless (Wi-Fi Direct, hotspot locali, Bluetooth), la gestione dell’energia, i sensori e le funzioni di basso livello legate alla rete. Dove necessario, sono stati sviluppati moduli nativi in Java per Android, in modo da ottenere il massimo delle prestazioni quando il software gestisce processi critici come la creazione di reti locali o l’instradamento dei pacchetti." />
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
                        src={foss}
                        className="w-80 h-64 rounded-2xl"
                        style={{ border: 0 }}
                        loading="lazy"
                        alt="Description of the image"
                    />
                </div>
                <TextComponent 
                    text="Il client funge anche da base per ulteriori applicazioni. La rete generata può infatti supportare servizi distribuiti, come piattaforme di messaggistica locale, sistemi di allerta, micro-cloud, archiviazione condivisa e persino strumenti educativi offline. Ogni nodo può diventare sia un punto d’accesso che un’unità di elaborazione. In questo modo, la rete non è solo un’infrastruttura di trasporto, ma una piattaforma applicativa diffusa, scalabile e collaborativa.

Il potenziale di questa tecnologia cresce con la comunità che la utilizza. Per questo il client di DeviceNet è rilasciato come software libero: il codice è accessibile, documentato e aperto al contributo di sviluppatori, makers, enti locali e realtà attive nel riuso e nell’innovazione sociale. Il nostro obiettivo non è semplicemente distribuire un’app, ma creare un ecosistema condiviso, in cui ogni nodo umano sia importante quanto ogni nodo tecnologico."
                    className="order-2 sm:order-2 mr-2"
                />
            </div>




            <Footer />
        </div>
       
    )
}