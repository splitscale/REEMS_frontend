import { Url } from "../../lib/url/Url";

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
          {url.link}
      </td>
      <td>
        Edit
      </td>
      <td>
        Delete
      </td>
    </tr>
  ));

  return <>{list}</>;
}