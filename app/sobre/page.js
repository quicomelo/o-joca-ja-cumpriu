
export default function Sobre() {
  return (
    <div>
      <h1 className='text-4xl font-bold mb-12'>Sobre</h1>

      <p className="mb-4">A fiscalização da ação autárquica e o escrutínio público da gestão municipal são aspetos fundamentais de um regime democrático local, por diversas razões. Entre estas, destacam-se a transparência e a prestação de contas, a garantia dos direitos dos cidadãos, a melhoria da qualidade dos serviços públicos, o fortalecimento das instituições locais e o envolvimento da comunidade. Em suma, a fiscalização das autarquias é um exercício que confere legitimidade, eficiência e responsabilidade na gestão pública municipal.</p>
      <p className="mb-4">Em Portugal, o poder local é exercido pelas autarquias — câmaras municipais e juntas de freguesia —, que têm a responsabilidade direta de gerir o território, os serviços e os recursos da sua comunidade. Cabe à assembleia municipal e à oposição política o papel formal de fiscalização da atividade da câmara, conforme previsto na lei..</p>
      <p className="mb-4">No entanto, acreditamos que também a sociedade civil deve desempenhar um papel ativo no acompanhamento da governação local. Por essa razão nasce “O Joca Já Cumpriu”, um projeto independente que visa acompanhar, de forma simples e transparente, o cumprimento das promessas feitas pelo candidato do PSD à Câmara Municipal de Valpaços, Jorge Mata Pires, durante a campanha eleitoral e inscritas no seu programa autárquico.</p>
      <p>O objetivo é promover a transparência, incentivar a responsabilidade política e reforçar a participação cívica dos cidadãos no dia a dia do seu concelho.</p>
      <p>Se identificou uma promessa que acha que foi cumprida e não está contabilizada, envie um e-mail para ojocajacumpriu@proton.me.</p>
      <p className="mt-6"><strong>Autor:</strong> <a className='hover:underline' >@umvalpacense</a></p>
    </div>
  )
}

export function generateMetadata() {
  return {
    title: "Sobre"
  }
}
