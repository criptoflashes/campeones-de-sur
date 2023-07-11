import Users from "@/components/Users";
import Hero from "@/components/Hero";

//REact Server Component
//esta función la voy a ejecutar  desde el servidor, el método fetch se usa en el front como el back
//estos datos se ejecutan desde el servidor y no en el front end es por eso que lo veré en la consola del vsc y no en la del navegador
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

//para ver los datos en el front

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
     <Hero/>
      <h1>Index page</h1>
      <button className="btn btn-primary">Error</button>
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
