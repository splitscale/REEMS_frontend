import Link from 'next/link';
import { UrlContainer } from '../lib/container/UrlContainer';
import { handleFailure } from '../lib/handlers/handleFailure';
import DeleteContainerButton from './DeleteContainer';
import EditContainer from './EditContainer';

export default function ContainerListRenderer({
  containers,
  onListUpdate,
}: {
  containers: UrlContainer[];
  onListUpdate: (containers: UrlContainer[]) => void;
}) {
  const list = containers.map((container: UrlContainer) => (
    <tr key={container.id} className="border-b border-current">
      <td className="text-left font-sans px-6 py-3 uppercase text-center">
        <Link href="/content/[containerId]" as={`/content/${container.id}`}>
          {container.title}
        </Link>
      </td>
      <td>
        <EditContainer
          containerId={container.id}
          containers={containers}
          onSuccess={onListUpdate}
          onFail={handleFailure}
        />
      </td>
      <td>
        <DeleteContainerButton
          containerId={container.id}
          containers={containers}
          onSuccess={onListUpdate}
          onFail={handleFailure}
        />
      </td>
    </tr>
  ));

  return <>{list}</>;
}
