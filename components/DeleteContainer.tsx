import { UrlContainer } from '../lib/container/UrlContainer';

export default function DeleteContainerButton({
  containers,
  containerId,
  onSuccess,
  onFail,
}: {
  containers: UrlContainer[];
  containerId: number;
  onSuccess: (containers: UrlContainer[]) => void;
  onFail: (err: Error) => void;
}) {
  function deleteContainerInDb() {
    console.log('deleted', containerId);

    const filteredContainers = containers.filter(
      (c: UrlContainer) => c.id !== containerId
    );

    onSuccess(filteredContainers);

    if (containerId === undefined) {
      onFail(new Error('Invalid container: ' + containers));
    }
  }

  return (
    <button className="btn btn-danger py-2" onClick={deleteContainerInDb}>
      Delete
    </button>
  );
}
