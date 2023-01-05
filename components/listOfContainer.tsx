import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ContainerRow } from "./ContainerRow";
import { UrlContainer } from "../lib/container/UrlContainer";
import { getUrlContainerList } from "../lib/container/get/getUrlContainerList";


function listOfContainer() {
  const [containers, setContainers] = useState<UrlContainer[]>([]);
  const [loading, setloading] = useState(true);
  const [containerId, setcontainerId] = useState(null);
  const [responseContainer, setResponseContainer] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const listOfContainer = await getUrlContainerList()
      setContainers(listOfContainer)
      setloading(false);
    };
    fetchData();
  }, [containerId, responseContainer]);

  const deleteContainer= () => {
    return
  }

  // const editContainer = (e) => {
  //   e.preventDefault();
  //   const response =await fetch(URL+"/"+containerId, {
  //     method: "PUT",
  //     headers:{
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(container)
  //   });
  //   if(!response.ok){
  //     throw new Error("erro Updating container")
  //   }
  //   const _container = await repsonse.json;
  //   reset(e);
  // };
  return (
    <div className="flex flex-col justify-center items-center">
      <table className = "outline outline-1 w-[80%] text-center rounded-t">
          <thead className="bg-gradient-to-b from-yellow-500 to-orange-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3"> CONTAINER TITLE </th>
              <th scope="col" className="px-6 py-3"><i className="bi bi-pencil-square"> Edit </i></th>
              <th scope="col" className="px-6 py-3"><i className="bi bi-trash"> Delete </i></th>          
            </tr>
          </thead>

        {!loading && (
          <tbody>
            {containers.map((container: UrlContainer) => (
              <ContainerRow
                container={container}
                key={container.id}
                // deleteContainer={deleteContainer}
                // editContainer={editContainer}
              />  
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default listOfContainer;
