/* import Users from "@/components/Users"; */
import Hero from "components/Hero.jsx"
import BannerContactHome from "components/BannerContactHome";
import PresentationHomeText from "@/components/PresentationHomeText";
import HomeVideo from "@/components/HomeVideo";

/* import Image from "next/image"; */

//REact Server Component
//esta función la voy a ejecutar  desde el servidor, el método fetch se usa en el front como el back
//estos datos se ejecutan desde el servidor y no en el front end es por eso que lo veré en la consola del vsc y no en la del navegador
/* async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
} */

//para ver los datos en el front

async function IndexPage() {
  /*  const users = await fetchUsers(); */

  return (
    <div className="flex flex-col place-content-center  px-2 h-full bg-white-100">
      <Hero />
      <PresentationHomeText />



      <HomeVideo className="bg-red-100"/>
      <BannerContactHome  />


      {/* <Users users={users} /> */}
    </div>
  );
}

export default IndexPage;
