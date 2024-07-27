import Arrow from "@/Component/Arrow/Arrow";
import Header from "@/Component/Header/Header";
import Navbar from "@/Component/Navbar/Navbar";
export default function Home() {
  return (
    <>
      <div className="Home relative w-[200vh]">
        <Arrow />
        <Navbar />
        <Header />
        </div>
    </>
  );
}
