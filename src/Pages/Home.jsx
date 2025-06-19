import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";

const Home = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="destructive">Danger</Button>
      <Button variant="dark">Dark</Button>
      <Button asChild variant="link">
        <Link href="/dashboard/button">Link Button</Link>
      </Button>

      <div className="space-y-4">
        <label className="text-sm text-gray-600">Email</label>
        <Input type="email" placeholder="dashtail@codeshaper.net" />
      </div>
    </div>
  );
};

export default Home;
