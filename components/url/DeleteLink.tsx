import { deleteUrl } from "../../lib/url/delete/deleteUrl";
import { Url } from "../../lib/url/Url";

export default function DeleteUrlButton({
  urls,
  urlId,
  onSuccess,
  onFail,
}: {
  urls: Url[];
  urlId: number;
  onSuccess: (urls: Url[]) => void;
  onFail: (err: Error) => void;
}) {
  async function deleteUrlInDb() {
    if (urlId === undefined) {
      onFail(new Error('Invalid url id: ' + urlId));
    }

    if (!confirm('Are you sure you want to delete this link?')) {
      return;
    }


    const filteredUrls = urls.filter(
      (u: Url) => u.id !== urlId
    );

    const isSuccess = await deleteUrl(urlId);

    if (isSuccess) {
      onSuccess(filteredUrls);
    } else {
      onFail(
        new Error('Unable to delete link, try again later:' + urlId)
      );
    }
  }

  return (
    <button className="btn btn-danger py-2" onClick={deleteUrlInDb}>
      Delete
    </button>
  );
}
