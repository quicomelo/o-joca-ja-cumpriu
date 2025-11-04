import { allPromessas } from '@/lib/utils';

export default function Cumpridometro() {
  const promessas = allPromessas();

  const total = promessas.length;
  const fulfilled = promessas.filter(p => p.data.fulfilled_date).length;
  const percent = total > 0 ? Math.round((fulfilled / total) * 100) : 0;

  return (
    <div className="text-center my-6">
      <p className="text-xl font-semibold">Cumpridómetro</p>
      <p className="text-2xl">
        <span className="text-green-500">{fulfilled}</span>
        <span className="text-gray-500"> / {total}</span> ({percent}%)
      </p>
    </div>
  );
}

