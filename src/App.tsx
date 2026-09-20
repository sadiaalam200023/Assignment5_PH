import Nav from "./Nav";
import Herobanner from "./Herobanner";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
 import { Suspense } from "react";
 import Tech from "./Tech";
 import type { Itech } from "./techtype";

 const techFetch =  async():Promise<Itech[]> => {
   const res = await fetch('/data.json');
   const data = await res.json();
   return data;


 }


function App() {
   const techPromise = techFetch();
  return (
    <>
    <Nav></Nav>
    <ToastContainer />
    <Herobanner></Herobanner>
     
    <Suspense
    fallback={
        <div className="flex justify-center items-center p-8">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }
>
    <Tech techPromise={techPromise} />
</Suspense>

    <Footer></Footer>
    </>
  );
}

export default App;
  
