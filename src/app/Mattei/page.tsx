import Enrico2 from '@images/enrico_mattei2.jpeg'
import Image from 'next/image'
import TextComponent from '@components/TextComponent' // Assumendo che TextComponent sia un componente separato
import Footer from '../components/footer'

export default function Mattei() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center">
                <TextComponent text='Enrico Mattei nacque ad Acqualagna, in provincia di Pesaro, paese d’origine della madre, Angela Galvani. Suo padre, Antonio Mattei, sottufficiale dei carabinieri, proveniva invece da Civitella Roveto, piccolo centro in provincia dell’Aquila. Don Giulio Lucidi, parroco della chiesa di San Giovanni ad Avezzano e amico intimo di Mattei fino alla sua morte nel 1998, ricordava Enrico come un ragazzo vivace e intraprendente. In una conversazione, Mattei raccontò di essersi smarrito durante una gita scolastica sui costoni del monte Viglio e di essere riuscito a tornare a casa seguendo un rigagnolo che sapeva sfociare nel fiume Liri. Primogenito di cinque figli, Enrico aveva tre sorelle – Ester e Maria – e due fratelli, Umberto e Italo. Gli anni trascorsi a Civitella Roveto furono fondamentali per la sua formazione. Pur essendo relativamente fortunato rispetto ai suoi coetanei, grazie al sostegno costante dei genitori che gli garantivano una vita dignitosa, Mattei non restò indifferente alla povertà che lo circondava. I suoi nonni paterni, Angelosante Mattei e Francesca Dosa, conducevano una vita modesta: il nonno, per mantenere la famiglia, lavorava come carrettiere. Questa realtà, tanto amara quanto formativa, lasciò un segno profondo nell’animo del giovane Enrico. Probabilmente fu proprio quell’esperienza a radicare in lui il desiderio di migliorare le condizioni della sua terra e di aiutare la sua gente una volta raggiunto il successo.' className="mr-2" />
                <div className="pt-4 pb-4 pr-4">
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=12.660627%2C43.606462%2C12.680627%2C43.626462&layer=mapnik&marker=43.616462%2C12.670627"
                        className="w-64 h-64 rounded-2xl"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div>
                <TextComponent text="Finite le scuole elementari, Enrico frequenta la scuola tecnica inferiore. Il padre lo fa assumere nella fabbrica di letti di Scuriatti come verniciatore di letti di metallo, nel 1923 entra come garzone alla Conceria Fiore. La carriera di Mattei nell'Azienda è rapida: prima operaio, poi, a soli vent'anni, direttore del laboratorio e infine collaboratore principale del padrone della Conceria. "/>
                <TextComponent text="Si trasferisce a Milano dove continua la sua attività industriale; nel 1934 fonda l'industria Chimica Lombarda. Lo sviluppo dell'impresa assume un ritmo veloce, cresce rapidamente anche il fabbisogno di materie prime. Mattei tenta di trovare una propria fonte attraverso l'integrazione verticale dell'impresa. Condotta un'analisi attenta delle possibilità offerte dalla pesca nel Mar Rosso, prepara un progetto per la creazione di una flottiglia da pesca e di uno stabilimento per il primo trattamento del pescato. Presenta il progetto al ministero delle Corporazioni e chiede una concessione per la pesca industriale in Eritrea, sperando di ottenere dalla pesca di squali e delfini i grassi che gli servono." />
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
                    text="Successivamente alla conclusione della Seconda Guerra mondiale, cominciò il complesso periodo di ricostruzione dell’Italia. Nell’anno 1945, Alcide De Gasperi, che ricopriva la carica di Presidente del Consiglio, scelse proprio Mattei per il ruolo di commissario liquidatore dell’Agip (Azienda Generale Italiana Petroli). Tuttavia, Mattei si rese conto del potenziale dell’Agip e decise di non solo salvarla ma anche rilanciarla. Forte dei ritrovamenti di metano in Val Padana, incrementò la perforazione dei pozzi e ottenne finanziamenti. Inoltre, seguì personalmente il progetto di ristrutturazione dei distributori Agip, introducendo innovazioni come aree di servizio complete con bar, officine meccaniche e altri servizi di supporto."
                    className="order-2 sm:order-2 mr-2"
                />
            </div>




            <Footer />
        </div>
       
    )
}

// su next il routing è file based quindi per ogni pagina devi creare una cartella




/*
Mattei si diploma ragioniere e si iscrive all'Università Cattolica. Nel maggio 1943 incontra Giuseppe Spataro attraverso il quale entra in contatto con i circoli antifascisti milanesi. Viene creato, nel 1944, un Comando militare Alta Italia del CLNAI (Comitato di Liberazione Nazionale Alta Italia) di cui Enrico Mattei fa parte per la Dc. Nei giorni successivi alla tormentata fine della guerra civile in Italia, Enrico Mattei venne incaricato di liquidare le attività dell'Agip ma Mattei sceglie di disattendere questa indicazione; nel 1953 fonda l'Eni.
*/