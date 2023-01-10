import { deleteContainer } from '../../lib/container/delete/deleteContiner';
import { UrlContainer } from '../../lib/container/UrlContainer';

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
  async function deleteContainerInDb() {
    if (containerId === undefined) {
      onFail(new Error('Invalid container: ' + containers));
    }

    if (!confirm('Are you sure you want to delete this container?')) {
      return;
    }

    console.log('deleted', containerId);

    const filteredContainers = containers.filter(
      (c: UrlContainer) => c.id !== containerId
    );

    const isSuccess = await deleteContainer(containerId);

    if (isSuccess) {
      onSuccess(filteredContainers);
    } else {
      onFail(
        new Error('Unable to delete container, try again later:' + containerId)
      );
    }
  }

  return (
    <button className="btn btn-danger py-2" onClick={deleteContainerInDb}>
      Delete
    </button>
  );
}
