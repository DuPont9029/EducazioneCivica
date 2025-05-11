import David from '@images/davidcern.jpg'
import Image from 'next/image'
import TextComponent from '@components/TextComponent' // Assumendo che TextComponent sia un componente separato
import Footer from '@components/footer'

export default function DeviceNet() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center">
                <TextComponent text="DeviceNet was born in one of the many dilapidated laboratories at the Enrico Fermi State Industrial Technical Institute, the brainchild of David Novelli, a 5th year computer science student. The idea was born, as with many other inventions, out of the economic/humanitarian crises that had occurred around the world. At that moment it became clear to everyone that our communication systems were based on very expensive and inefficient servers that at the slightest power outage, cyber attack or natural disaster stopped working. David had also been very impressed with the research done on WEEE assigned to him by the Systems and Networks professorship, so that it was more than evident from the data collected that the rates of consumption of rare earths used in the creation of electronic equipment had become unsustainable. Therefore, by combining the two problems we have also combined the solutions by providing an innovative flasible, safe and inexpensive communication system that is also environmentally friendly" className="mr-2" />
                <div className="pt-4 pb-4 pr-4">
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=12.421014904975891%2C41.93920441228924%2C12.423691749572756%2C41.9409401891792&amp;layer=mapnik&amp;marker=41.940072306640324%2C12.422353327274323"
                        className="w-64 h-64 rounded-2xl"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div>
                <TextComponent text="After finishing high school following the realization that he had gradually lost his passion in programming David enrolled in medicine, while continuing to work on the project. in order to do so he contacted a multitude of research and development environments including CERN and the Casaccia department of ENEA. At this juncture DeviceNet S.P.A was born, but it still remained private and the shares were divided equally between David Novelli, Alessandro Guragata and Tommaso Coviello. "/>
                <TextComponent text="After founding DeviceNet S.P.A., the company embarked on a path of growth and innovation in sustainable communications. Although initially private, with shares equally divided among David Novelli, Alessandro Guragata and Tommaso Coviello, DeviceNet quickly attracted the attention of research and academic institutions. Collaborations with CERN and ENEA's Casaccia department have enabled further development of the technology, making it more efficient and adaptable to different needs. These partnerships have also facilitated access to advanced resources and expertise, accelerating the development process." />
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
                        src={David}
                        className="w-80 h-64 rounded-2xl"
                        style={{ border: 0 }}
                        loading="lazy"
                        alt="Description of the image"
                    />
                </div>
                <TextComponent 
                    text="Over time, DeviceNet has expanded its team to include experts in electrical engineering, computer science, and environmental science. This has led to the creation of innovative solutions that combine environmental sustainability and communications infrastructure resilience.

The company has also initiated pilot projects in collaboration with local communities, testing the effectiveness of its solutions in real-world settings. These projects have provided valuable feedback, helping to further refine the technology.

Today, DeviceNet continues to pursue its mission of providing flexible, secure, cost-effective and environmentally friendly communication systems, addressing global challenges with innovative and collaborative solutions."
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