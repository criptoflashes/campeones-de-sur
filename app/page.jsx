/* import Users from "@/components/Users"; */
import Hero from "components/Hero.jsx"
import MainContentHome from "components/MainContentHome";
import BannerContactHome from "components/BannerContactHome";
import PresentationHomeText from "@/components/PresentationHomeText";

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
    <div className="flex flex-col place-content-center  px-2 h-full ">
      <Hero />
      <PresentationHomeText />


      <div
        class=" flex flex-col place-content-center self-center embed-responsive embed-responsive-16by9 relative  overflow-hidden  h-full bg-red-300 mt-5"
        style={{ padding: "25.25%" }}>
        {/*  <iframe
            class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" */}
        <iframe class="embed-responsive-item absolute  h-full w-full self-center" src="https://www.youtube.com/embed/o_75XMoovRU" title="Salames Campeones del Festival Nacional del Salame en Oncativo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" data-gtm-yt-inspected-2340190_699="true"
          id="240632615"></iframe>
        {/*  allowfullscreen=""
            data-gtm-yt-inspected-2340190_699="true"
            id="240632615"></iframe> */}
      </div>











      <BannerContactHome />
      <MainContentHome />

      {/* <Users users={users} /> */}
    </div>
  );
}

export default IndexPage;
