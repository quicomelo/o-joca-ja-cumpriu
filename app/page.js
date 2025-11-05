import { getSections } from '@/lib/promessas';
import Section from '@/app/_components/section';
import Cumpridometro from '@/app/_components/cumpridometro';
import Image from 'next/image';
import { getSections } from '@/lib/promessas';

export default async function Home() {
  const sections = getSections();

  return (
    <div>
      <div className='text-center mb-12'>
      <Image
          src="/imagens/presidente.png"
          alt="Presidente da Câmara"
          width={200}
          height={200}
          className="mx-auto rounded-full mb-4 shadow-lg"
        />
        <h1 className='text-4xl mb-4'>O Joca Já Cumpriu?</h1>
        <Cumpridometro />
        <a className='underline' href="/programas/programa.pdf">Programa</a>
      </div>

      <div>
        {Object.entries(sections).map(([slug, name]) => (
          <Section key={slug} slug={slug} name={name} hidePromessas />
        ))}
      </div>
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: "O Joca Já Cumpriu?",
  }
}
