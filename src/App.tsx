import Nav from "./Nav";
import Herobanner from "./Herobanner";
import Logo from "../assets/logo-text.png";
import { Suspense } from "react";
import Tech from "./Tech";
import type { Itech } from "./techtype";

const techFetch =  async():Promise<Itech[]> => {
  const res = await fetch('/public/data.json');
  const data = await res.json();
  return data;


}


function App() {
  const techPromise = techFetch();
  return (
    <>
    <Nav></Nav>
    <Herobanner></Herobanner>
    <Suspense fallback={<div className="flex justify-center items-center p-8">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>}><Tech techPromise ={techPromise}/> </Suspense>
    </>
  );
}

export default App;
  
