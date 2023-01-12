import { useEffect, useState } from 'react';
import { getLinkList } from '../../lib/url/get/getLinkList';
import { Url } from '../../lib/url/Url';
import TableHeader from '../Tableheader';
import { AddLink } from './AddLink';
import LinkListRenderer from './LinkListRenderer';

export default function ListListTable({
  props,
}: {
  props: { containerId: number; token: string };
}) {
  const [urls, setUrls] = useState<Url[]>([]);

  function handleAddContainer(url: Url) {
    setUrls([url, ...urls.slice(0)]);
  }

  useEffect(() => {
    console.debug('loading containers...');

    const loadContainers = async () => {
      const linkList = await getLinkList(props.containerId, props.token);

      setUrls(linkList);
    };

    loadContainers();
  }, []);

  return (
    <div>
      <AddLink onSuccess={handleAddContainer} token={props.token} containerID={props.containerId} />
      <div className="flex flex-col justify-center items-center">
        <table className="outline outline-1 w-[80%] text-center rounded-t">
          <TableHeader title={'Container Title'} />
          <tbody>
            <LinkListRenderer
              urls={urls}
              onListUpdate={setUrls}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
