'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Search from '@/app/_components/search';

export default function NavBar() {
  const pathname = usePathname()

  return (
    <navbar className='block mb-6 pb-6'>
      <Search />
      <ul className='flex flex-row'>
        {pathname !== '/' && (
          <li className='px-2 pl-0'>
            <Link href="/" className="text-gray-400 text-sm hover:underline">Home</Link>
          </li>
        )}
        <li className='px-2'>
          <Link href="/sobre" className="text-gray-400 text-sm hover:underline">Sobre</Link>
        </li>
        {/* Linha "Como contribuir?" removida */}
        {/* Ícone GitHub removido */}
        <li className='px-2'>
          <Link href="/termos" className="text-gray-300 text-sm hover:underline">Termos & Condições</Link>
        </li>
        <li className='px-2'>
          <Link href="/privacidade" className="text-gray-300 text-sm hover:underline">Política de Privacidade</Link>
        </li>
      </ul>
    </navbar>
  )
}


