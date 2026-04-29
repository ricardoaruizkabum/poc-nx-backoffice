import { Button, Input } from "@kbm/ui";

export function Page2() {
  return (
    <div>
      <h2>PC Builder - Page 2</h2>
      <p>Conteúdo da Page 2.</p>
      <div className="flex">
        <Button variant='destructive'>Click Here</Button>
        <Input placeholder="Type your content here"/>
      </div>
    </div>
  );
}

export default Page2;
