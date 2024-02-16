import React, { useState, useEffect } from "react";
import { API_URL } from "../lib/constant";
import ResultCard from "./ResultCard";

export const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by boundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

export const LiveUpdatingData = () => {
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setLiveData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data initially

    // Set up interval to fetch data every second
    const interval = setInterval(fetchData, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <div className="">
        <div className="p-5">
          <div className="w-full bg-slate-200 p-5 text-center  ">
            {liveData ? (
              <p className="font-bold text-blue-800 text-[200px]">
                {liveData.live.twod}
              </p>
            ) : (
              <p className="font-bold text-blue-800 text-[200px]">Loading...</p>
            )}
          </div>
          <div className="w-full text-center font-mono">
            {liveData ? (
              <p className="">{liveData.live.time}</p>
            ) : (
              <p className="">Loading...</p>
            )}
          </div>

          {liveData ? (
          liveData.result.map(item => (
            <div key={item.set} className="flex flex-col">
              
              <ResultCard set={item.set} value={item.value} time={item.open_time} twod={item.twod} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        </div>
      </div>
    </>
  );
};
