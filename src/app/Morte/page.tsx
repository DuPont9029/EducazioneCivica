import Image from 'next/image'
import TextComponent from '@components/TextComponent' // Assumendo che TextComponent sia un componente separato
import Timer from '@components/timer'
import Footer from '@components/footer'


export default function Morte () {
    return (
        <div>
            <TextComponent text="Enrico Mattei, Un uomo che rese l'italia distrutta dalla guerra una superpotenza muore assassinato dagli interessi economici esteri, e con la complicità del nostro paese. Per un uomo come lui, un uomo come pochi chiedo al lettore un minuto di silezio." className='py-10'/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
                
                <Timer />
            </div>
            <Footer />
        </div>
    )
}