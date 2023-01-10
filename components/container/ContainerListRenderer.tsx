import Link from 'next/link';
import { useRouter } from 'next/router';
import { UrlContainer } from '../../lib/container/UrlContainer';
import { handleFailure } from '../../lib/handlers/handleFailure';
import DeleteContainerButton from './DeleteContainer';
import EditContainer from './EditContainer';

export default function ContainerListRenderer({
  containers,
  onListUpdate,
}: {
  containers: UrlContainer[];
  onListUpdate: (containers: UrlContainer[]) => void;
}) {

  const routeHandler = (containerId: number) => {
    const router = useRouter()

    router.push({
      pathname: '/url/[containerId]',
      query: { containerId: containerId }
    }, 'url/[containerId]');
  }

  const list = containers.map((container: UrlContainer) => (
    <tr key={container.id} className="border-b border-current">
      <td className="text-left font-sans px-6 py-3 uppercase text-center">
        <Link href="/url/[containerId]" as={`/url/${container.id}`} onClick={() => routeHandler(container.id)}>
          {container.title}
        </Link>
      </td>
      <td>
        <EditContainer
          container={container}
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
