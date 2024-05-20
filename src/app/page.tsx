import App from "@/components/app";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="h-screen flex flex-col flex-grow-0 shrink">
      <Nav />
      <App />
    </div>
  );
}
