import React, { useEffect, useState } from "react";
import ContainerList from "./ContainerList";

function listOfContainer({ }) {
  const CONTAINER_API_BASE_URL = "http://34.143.216.186:28762/api/containers";
  const [containers, setContainers] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try{
        const response = await fetch(CONTAINER_API_BASE_URL, {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
          },
        });
        const containers = await response.json();
        setContainers(containers);
      }catch(error){
        console.log(Error)
      }
      setloading(false);
    };
    fetchData();
  },[ContainerList])
  
  return(
 
    <div className="container  mx-auto py-4 flex  my-8 shadow border-b bg-orange-300 ">
      <table className = "min-w-full">
        <thead>
  
        </thead>
        {!loading &&(
        <tbody>
          {containers?.map((container) =>(
             <ContainerList container={container} key={container.id}/>
          ))}
        </tbody>
          )}

      </table>
    </div>
  )
}

export default listOfContainer