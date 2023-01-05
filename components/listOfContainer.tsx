import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { deleteContainer } from "../lib/container/deleteContainer/deleteContainer";
import { getContainerList } from "../lib/container/getContainer/getContainerList";
import { Container } from "../lib/container/Container";
import { ContainerRow } from "./containerRow";


function listOfContainer() {
  const uid = Cookies.get("uid");
  const URL = `http://34.143.216.186:28762/api/containers`;
  const [containers, setContainers] = useState<Container[]>([]);
  const [loading, setloading] = useState(true);
  const [containerId, setcontainerId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const listOfContainer = await getContainerList()
      setContainers(listOfContainer)
      setloading(false);
    };
    fetchData();
  }, [containerId]);




  // const editContainer = (e, id) => {
  //   e.preventDefault();
  //   setcontainerId(id);
  // };
  return (
    <div className="container  mx-auto py-4 flex  my-8 shadow border-b bg-orange-300 ">
      <table className="min-w-full">
        <thead></thead>
        {!loading && (
          <tbody>
            {containers.map((container: Container) => (
              <ContainerRow
                container={container}
                key={container.containerID}
                deleteContainer={deleteContainer}
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
