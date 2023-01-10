import Link from "next/link";
import { handleFailure } from "../../lib/handlers/handleFailure";
import { Url } from "../../lib/url/Url";
import DeleteUrlButton from "./DeleteLink";
import EditLink from "./EditLink";

export default function LinkListRenderer({
  urls,
  onListUpdate,
}: {
  urls: Url[];
  onListUpdate: (urls: Url[]) => void;
}) {
  const list = urls.map((url: Url) => (
    <tr key={url.id} className="border-b border-current">
      <td className="text-left font-sans px-6 py-3">
        <Link href={url.link}>
          <span className="truncate font-sans">{url.link}</span>
        </Link>
      </td>
      <td>
        <EditLink
          url={url}
          urls={urls}
          onSuccess={onListUpdate}
          onFail={handleFailure}
        />
      </td>
      <td>
        <DeleteUrlButton
          urls={urls}
          urlId={url.id}
          onSuccess={onListUpdate}
          onFail={handleFailure}
        />
      </td>
    </tr>
  ));

  return <>{list}</>;
}
