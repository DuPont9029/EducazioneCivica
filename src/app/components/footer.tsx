"use client";

import EniLogo from '@images/Eni-logo.png';
import Image from 'next/image';
import DeviceNetN from '@images/DeviceNetN.png';

/*


export default function Footer() {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    

                    <Image className="w-32 sm:mx-auto" src= {EniLogo} alt="Eni Logo"/>
                    <p>
                        Da energie diverse, un'energia unica
                    </p>
                    
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 David Novelli. Tutti i diritti riservati.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0"> 
                    {footerNavs.map((nav, index) => (
                        <li key={index}>
                            <a href={nav.href}>
                                {nav.name}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
    */

export default function Footer() {

    const footerNavs = [
        {
            href: 'javascript:alert("procedendo la navigazione su questo sito accetti di impegnarti a sterminare ogni singolo componente della popolazione della federazione russa senza discriminazione di sesso, età, o condizione sociale")',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ];

    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <div className="flex justify-center">
                    <Image className="w-64 sm:mx-auto" src={DeviceNetN} alt="Eni Logo" />
                    </div>
                    <p className='text-center'>
                        Uniti nella diversità, sotto un unica forte rete.
                    </p>
                </div>
                <div className="mt-10 py-10 border-t flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-center sm:text-left">© { new Date().getFullYear()} David Novelli. Tutti i diritti riservati.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {footerNavs.map((nav, index) => (
                            <li key={index}>
                                <a href={nav.href}>
                                    {nav.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}