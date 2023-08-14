import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [cookie, setCookie] = useState({ location: '', minimum: '', Maximum: '', Average: '' });

  function cookiHandler(event) {
    event.preventDefault();
    const formData = {
      location: event.target.location.value,
      minimum: event.target.Minimum.value,
      Maximum: event.target.Maximum.value,
      Average: event.target.Average.value,
    };
    setCookie(formData);
    event.target.reset();
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <Header />
        <main className="flex-grow">
          <Form handler={cookiHandler} />
          <Lastcookie data={cookie} />
        </main>
        <footer className="bg-green-500 p-4 text-white text-center">&copy;LeeNa A.Alzaben @2023</footer>
      </div>
    </>
  );
}




function Header() {
  return (
    <>
      <header className='text-6xl font-bold p-10 bg-green-500'>
        <h1 className='text-6xl'>Cookie Stand Admin</h1>
      </header>
    </>
  );
}

function Form(props) {
  return (
    <>
      <form className="w-1/2 p-10 mx-auto my-4 bg-green-300" onSubmit={props.handler}>
        <h1 className="text-3xl font-bold mb-4">Create Cookie Stand</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="location" className="text-xl mb-2 font-bold">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="p-2 border"
            placeholder="Enter the location"
          />
        </div>
        <div className="flex justify-around mb-4">
          <div className="flex flex-col mr-4">
            <label htmlFor="Minimum" className="text-xl">
              Minimum Customers<br />per hour
            </label>
            <input
              type="number"
              id="Minimum"
              name="Minimum" // Add the 'name' attribute to the input field
              className="p-2 border w-10/12"
            />
          </div>

          <div className="flex flex-col mr-4">
            <label htmlFor="Maximum" className="text-xl">
              Maximum Customers<br />per hour
            </label>
            <input
              type="number"
              id="Maximum"
              name="Maximum"
              className="p-2 border w-10/12"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Average" className="text-xl">
              Average Cookies per<br />Sale
            </label>
            <input
              type="number"
              id="Average"
              name="Average"
              className="p-2 border w-10/12"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-2 bg-green-700 text-white rounded hover:bg-green-600"
        >
          Create
        </button>
      </form>
    </>
  );
}


function Lastcookie(props) {
  return (
    <>
      <div className="bg-pink-400">

      </div>
      <div class="flex justify-center items-start min-h-screen pt-16">
     </div>
    </>
  );
}
