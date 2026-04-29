import { Button, Input } from "@kbm/ui";

export function Page1() {
  return (
    <div>
      <h2>Product - Page 1</h2>
      <p>Conteúdo da Page 1.</p>

      <div className="flex">
        <Button variant='default'>Click Here</Button>
        <Input placeholder="Type your content here"/>
      </div>
    </div>
  );
}

export default Page1;
