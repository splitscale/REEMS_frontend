import { useEffect, useState } from 'react';
import { getContainerList } from '../lib/container/get/getContainerList';
import { UrlContainer } from '../lib/container/UrlContainer';
import { handleFailure } from '../lib/handlers/handleFailure';
import { AddContainer } from './AddContainer';
import ContainerListRenderer from './ContainerListRenderer';
import TableHeader from './Tableheader';

export default function ContainerListTable() {
  const [containers, setContainers] = useState<UrlContainer[]>([]);

  function handleAddContainer(container: UrlContainer) {
    setContainers([...containers, container]);
  }

  async function loadContainers() {
    const containerList = await getContainerList();

    setContainers(containerList);
  }

  useEffect(() => {
    console.debug('loading containers...');
    loadContainers();
  }, []);

  return (
    <div>
      <AddContainer onSuccess={handleAddContainer} onFail={handleFailure} />
      <div className="flex flex-col justify-center items-center">
        <table className="outline outline-1 w-[80%] text-center rounded-t">
          <TableHeader title={'Container Title'} />
          <tbody>
            <ContainerListRenderer
              containers={containers}
              onListUpdate={setContainers}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
