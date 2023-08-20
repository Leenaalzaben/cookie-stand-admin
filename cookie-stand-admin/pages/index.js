import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [addCookies, setAddCookies] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const cookies = {
      id: event.target.input0.value.length,
      location: event.target.input0.value,
      minCustomersPerHour: parseInt(event.target.input1.value),
      maxCustomersPerHour: parseInt(event.target.input2.value),
      avgCookiesPerSale: parseFloat(event.target.input3.value),
    };

    setAddCookies([...addCookies, cookies]);
    event.target.reset();
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          <Form handler={submitHandler} />
          {addCookies.length === 0 ? (
            <p className="p-17 font-medium text-Black-600 ">
              Report Table Coming Soon...
            </p>
          ) : (
            <pre className="p-1 mt-5 bg-green-300">
              {JSON.stringify(addCookies, null, 2)}
            </pre>
          )}
        </main>
        <footer className="bg-green-700 p-4 text-white text-center">
          &copy;LeeNa A.Alzaben @2023
        </footer>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="flex justify-center items-center p-5 bg-green-600 text-black-50">
      <div className="text-center">
        <h1 className="text-5xl font-medium">Cookie Stand Admin</h1>
      </div>
    </header>
  );
}

function Form(props) {
  return (
    <form className="w-1/2 p-10 mx-auto my-4 bg-green-600" onSubmit={props.handler}>
      <div className="text-center">
      <h1 className="text-3xl font-bold mb-5">Create Cookie Stand</h1>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="location" className="text-xl mb-12 font-bold">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="input0" 
          className="p-2 border"
          placeholder="Enter the location"
        />
      </div>
      <div className="flex justify-around mb-14">
        <div className="flex flex-col mr-14">
          <label htmlFor="Minimum" className="text-xl">
            Minimum Customers<br />per hour
          </label>
          <input
            type="number"
            id="Minimum"
            name="input1" 
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
            name="input2" 
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
            name="input3" 
            className="p-2 border w-10/12"
          />
        </div>
      </div>
      <div className="flex justify-center"> 
        <button
          type="submit"
          className="px-8 py-2 bg-green-900 text-white rounded hover:bg-green-600"
        >
          Create
        </button>
        
      </form>
    </>
  );
}

<></>

function Lastcookie(props) {
  return (
    <>
      <div className="bg-green-400 p-4">

        <p className="text-center text-2xl font-bold">{JSON.stringify(props.data.location)}</p>
        <p className="text-center text-2xl text-bold">1. Minimum Customers per hour: {JSON.stringify(props.data.minimum)}</p>
        <p className="text-center text-2xl text-bold">2. Maximum Customers per hour: {JSON.stringify(props.data.Maximum)}</p>
        <p className="text-center text-2xl text-bold">3. Average Cookies per Sale: {JSON.stringify(props.data.Average)}</p>
      </div>
      <div class="flex justify-center items-start min-h-screen pt-16">
      <table className="w-1/2 h-1/2 mt-20">
      <tr className="font-bold border border-black text-center bg-green-600">
        <td  className="border border-black">location</td>
        <td  className="border border-black">6am</td>
        <td  className="border border-black">7am</td>
        <td  className="border border-black">8am</td>
        <td  className="border border-black">9am</td>
        <td  className="border border-black">10am</td>
        <td  className="border border-black">11am</td>
        <td  className="border border-black">12pm</td>
        <td  className="border border-black">1pm</td>
        <td  className="border border-black">2pm</td>
        <td  className="border border-black">3pm</td>
        <td  className="border border-black">4pm</td>
        <td  className="border border-black">5pm</td>
        <td  className="border border-black">6pm</td>
        <td  className="border border-black">7pm</td>
        <td  className="border border-black">Totals</td>
      </tr>
      <tr className="border border-black text-center bg-green-400">
        <td className="border border-black">Calexico</td>
        <td className="border border-black">48</td>
        <td className="border border-black">42</td>
        <td className="border border-black">30</td>
        <td className="border border-black">24</td>
        <td className="border border-black">42</td>
        <td className="border border-black">24</td>
        <td className="border border-black">36</td>
        <td className="border border-black">42</td>
        <td className="border border-black">42</td>
        <td className="border border-black">48</td>
        <td className="border border-black">36</td>
        <td className="border border-black">42</td>
        <td className="border border-black">24</td>
        <td className="border border-black">36</td>
        <td className="border border-black">516</td>
      </tr>
      <tr className="border border-black text-center bg-green-300">
        <td className="border border-black">Barcelona</td>
        <td className="border border-black">95</td>
        <td className="border border-black">95</td>
        <td className="border border-black">60</td>
        <td className="border border-black">95</td>
        <td className="border border-black">90</td>
        <td className="border border-black">50</td>
        <td className="border border-black">100</td>
        <td className="border border-black">55</td>
        <td className="border border-black">65</td>
        <td className="border border-black">80</td>
        <td className="border border-black">90</td>
        <td className="border border-black">95</td>
        <td className="border border-black">50</td>
        <td className="border border-black">70</td>
        <td className="border border-black">1090</td>
      </tr>
      

      <tr className="border border-black text-center bg-green-400">
        <td className="border border-black">Vancouver</td>
        <td className="border border-black">30</td>
        <td className="border border-black">20</td>
        <td className="border border-black">30</td>
        <td className="border border-black">20</td>
        <td className="border border-black">20</td>
        <td className="border border-black">25</td>
        <td className="border border-black">30</td>
        <td className="border border-black">35</td>
        <td className="border border-black">40</td>
        <td className="border border-black">20</td>
        <td className="border border-black">20</td>
        <td className="border border-black">45</td>
        <td className="border border-black">35</td>
        <td className="border border-black">30</td>
        <td className="border border-black">400</td>
      </tr>
      <tr className="border border-black text-center bg-green-300">
        <td className="border border-black">Milano</td>
        <td className="border border-black">19</td>
        <td className="border border-black">9</td>
        <td className="border border-black">25</td>
        <td className="border border-black">25</td>
        <td className="border border-black">28</td>
        <td className="border border-black">28</td>
        <td className="border border-black">19</td>
        <td className="border border-black">28</td>
        <td className="border border-black">19</td>
        <td className="border border-black">9</td>
        <td className="border border-black">9</td>
        <td className="border border-black">22</td>
        <td className="border border-black">19</td>
        <td className="border border-black">9</td>
        <td className="border border-black">265</td>
      </tr>

      <tr className="border border-black text-center bg-green-400">
        <td className="border border-black">Detroit</td>
        <td className="border border-black">70</td>
        <td className="border border-black">77</td>
        <td className="border border-black">62</td>
        <td className="border border-black">81</td>
        <td className="border border-black">92</td>
        <td className="border border-black">77</td>
        <td className="border border-black">62</td>
        <td className="border border-black">88</td>
        <td className="border border-black">85</td>
        <td className="border border-black">70</td>
        <td className="border border-black">77</td>
        <td className="border border-black">92</td>
        <td className="border border-black">66</td>
        <td className="border border-black">88</td>
        <td className="border border-black">1087</td>
      </tr>

      <tr className="border border-black text-center bg-green-300">
        <td className="border border-black">Addids Ababa</td>
        <td className="border border-black">51</td>
        <td className="border border-black">33</td>
        <td className="border border-black">25</td>
        <td className="border border-black">66</td>
        <td className="border border-black">90</td>
        <td className="border border-black">51</td>
        <td className="border border-black">66</td>
        <td className="border border-black">37</td>
        <td className="border border-black">40</td>
        <td className="border border-black">29</td>
        <td className="border border-black">66</td>
        <td className="border border-black">33</td>
        <td className="border border-black">55</td>
        <td className="border border-black">22</td>
        <td className="border border-black">592</td>
      </tr>
      <tr className="border border-black text-center bg-green-400">
        <td className="border border-black">Dublin</td>
        <td className="border border-black">30</td>
        <td className="border border-black">13</td>
        <td className="border border-black">57</td>
        <td className="border border-black">13</td>
        <td className="border border-black">54</td>
        <td className="border border-black">34</td>
        <td className="border border-black">57</td>
        <td className="border border-black">17</td>
        <td className="border border-black">64</td>
        <td className="border border-black">64</td>
        <td className="border border-black">17</td>
        <td className="border border-black">27</td>
        <td className="border border-black">27</td>
        <td className="border border-black">57</td>
        <td className="border border-black">531</td>

      </tr>
      
      <tr className="border border-black text-center bg-green-300">
        <td className="border border-black">Tacoma</td>
        <td className="border border-black">33</td>
        <td className="border border-black">44</td>
        <td className="border border-black">14</td>
        <td className="border border-black">33</td>
        <td className="border border-black">44</td>
        <td className="border border-black">18</td>
        <td className="border border-black">25</td>
        <td className="border border-black">40</td>
        <td className="border border-black">44</td>
        <td className="border border-black">29</td>
        <td className="border border-black">37</td>
        <td className="border border-black">25</td>
        <td className="border border-black">25</td>
        <td className="border border-black">37</td>
        <td className="border border-black">4929</td>
      </tr>

      <tr className="border border-black text-center font-bold bg-green-400">
        <td className="border border-black">Totals</td>
        <td className="border border-black">30</td>
        <td className="border border-black">20</td>
        <td className="border border-black">30</td>
        <td className="border border-black">20</td>
        <td className="border border-black">20</td>
        <td className="border border-black">25</td>
        <td className="border border-black">30</td>
        <td className="border border-black">35</td>
        <td className="border border-black">40</td>
        <td className="border border-black">20</td>
        <td className="border border-black">20</td>
        <td className="border border-black">45</td>
        <td className="border border-black">35</td>
        <td className="border border-black">30</td>
        <td className="border border-black">400</td>
      </tr>
    </table>
    </div>
    </>
      </div>
    </form>
  );
}