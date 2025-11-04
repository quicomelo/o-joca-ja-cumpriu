import fs from 'fs';
import path from 'path';

export default function Cumpridometro() {
  const filePath = path.join(process.cwd(), 'cumpridometro.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const percent = data.total > 0 ? Math.round((data.fulfilled / data.total) * 100) : 0;

  return (
    <div className="text-center my-6">
      <p className="text-xl font-semibold">Cumpridómetro</p>
      <p className="text-2xl">
        <span className="text-green-500">{data.fulfilled}</span>
        <span className="text-gray-500"> / {data.total}</span> ({percent}%)
      </p>
    </div>
  );
}
