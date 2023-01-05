import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { UrlContainer } from "../lib/container/UrlContainer";

// import EditContainer from "../components/EditContainer";

export function ContainerRow({container}: {container: UrlContainer}) {

  return (
    <tr
      className="border-b border-current uppercase"
      key={container.id}
    >
      <td className="font-sans px-6 py-3 text-center">
        <Link
          href="/content/[containerId]"
          as={`/content/${container.id}`}>
          {container.title}
        </Link>
      </td>
      <td>
        <button className="btn btn-info py-2">
          <i className="bi bi-pencil-square">Edit</i>
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger py-2"
          // onClick={() => DeleteContainer()}
        >
          <i className="bi bi-trash">Delete</i>
        </button>
      </td>
    </tr>
  );
}
