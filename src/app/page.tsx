import { redirect } from "next/navigation";

const HomePage = () => {
  // Redirige a /usuario
  redirect("/usuario");

  return null;
};

export default HomePage;
