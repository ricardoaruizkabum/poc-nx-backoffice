import { Button, Input } from '@kbm/ui';

export function Page1() {
  return (
    <div>
      <h2 className="text-xl font-bold">Produto - Página 1</h2>
      <p className="text-lg font-semibold text-gray-500">Conteúdo da Page 1.</p>

      <div className="flex">
        <Button variant="default">Click Here</Button>
        <Input placeholder="Type your content here" />
      </div>
    </div>
  );
}

export default Page1;
