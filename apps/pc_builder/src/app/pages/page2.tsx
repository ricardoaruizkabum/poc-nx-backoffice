import { Button, Input } from '@kbm/ui';

export function Page2() {
  return (
    <div>
      <h2 className="text-xl font-bold">PC Builder - Page 2</h2>
      <p className="text-lg font-semibold text-gray-500">Conteúdo da Page 2.</p>
      <div className="flex mt-10">
        <Button variant="destructive">Click Here</Button>
        <Input placeholder="Type your content here" />
      </div>
    </div>
  );
}

export default Page2;
