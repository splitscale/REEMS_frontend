import React, { useEffect, useState } from "react";
import ContainerList from "./ContainerList";

function listOfContainer({container}) {
  const CONTAINER_API_BASE_URL = "http://34.143.216.186:28762/api/containers";
  const [containers, setContainers] = useState(null);
  const [loading, setloading] = useState(true);
  const [containerId, setcontainerId] = useState(null)
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
  },[container])
   
  const deleteContainer = (e,container_id) => {
    e.preventDefault();
    fetch (CONTAINER_API_BASE_URL + "/" + container_id, {
      method: "DELETE",
    }).then((res) => {
      if(container){
        setContainers((prevElement) =>{
          return prevElement.filter((container) => container_id != id)
        })
      }
    });
  }
 
  const editContainer = (e, id) =>{
    e.preventDefault();
    setcontainerId(id);

  }
  return(
 
    <div className="container  mx-auto py-4 flex  my-8 shadow border-b bg-orange-300 ">
      <table className = "min-w-full">
        <thead>
  
        </thead>
        {!loading &&(
        <tbody>
          {containers?.map((container) =>(
             <ContainerList container={container}
              key={container.id} 
              deleteContainer={deleteContainer}
             editContainer={editContainer}
             />
          ))} 
        </tbody>
          )}

      </table>
    </div>
  )
}

export default listOfContainer