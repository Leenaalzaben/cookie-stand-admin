import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header";
import Output from "@/components/Output";
import Input from "@/components/Input";
import Footer from "@/components/Footer";


export default function Home() {
  const [addCookies, setAddCookies] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const cookies = {
      id: addCookies.length + 1,
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    setAddCookies([...addCookies, cookies]);
    event.target.reset();
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* class="flex flex-col p-2 space-y-2 bg-green-100 text-center max-w-[200vh]" */}
        <Header />
        <main className="flex flex-col items-center flex-grow py-40 space-y-8 bg-green-200 p-4">
          <Input handeler={submitHandler} />
          <Output handeler={addCookies.length} handeler2={addCookies} />
        </main>
       <Footer/>
      </div>
    </>
  );
}

// function Header() {
//   return (
//     <header className="flex justify-center items-center p-5 bg-green-600 text-black-50">
//       <div className="text-center">
//         <h1 className="text-5xl font-medium">Cookie Stand Admin</h1>
//       </div>
//     </header>
//   );
// }

// function Form(props) {
//   return (
//     <form className="w-1/2 p-10 mx-auto my-4 bg-green-600" onSubmit={props.handler}>
//       <div className="text-center">
//       <h1 className="text-3xl font-bold mb-5">Create Cookie Stand</h1>
//       </div>
//       <div className="flex flex-col mb-4">
//         <label htmlFor="location" className="text-xl mb-12 font-bold">
//           Location:
//         </label>
//         <input
//           type="text"
//           id="location"
//           name="input0" 
//           className="p-2 border"
//           placeholder="Enter the location"
//         />
//       </div>
//       <div className="flex justify-around mb-14">
//         <div className="flex flex-col mr-14">
//           <label htmlFor="Minimum" className="text-xl">
//             Minimum Customers<br />per hour
//           </label>
//           <input
//             type="number"
//             id="Minimum"
//             name="input1" 
//             className="p-2 border w-10/12"
//           />
//         </div>
//         <div className="flex flex-col mr-4">
//           <label htmlFor="Maximum" className="text-xl">
//             Maximum Customers<br />per hour
//           </label>
//           <input
//             type="number"
//             id="Maximum"
//             name="input2" 
//             className="p-2 border w-10/12"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="Average" className="text-xl">
//             Average Cookies per<br />Sale
//           </label>
//           <input
//             type="number"
//             id="Average"
//             name="input3" 
//             className="p-2 border w-10/12"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center"> 
//         <button
//           type="submit"
//           className="px-8 py-2 bg-green-900 text-white rounded hover:bg-green-600"
//         >
//           Create
//         </button>
//       </div>
//     </form>
//   );
// }
