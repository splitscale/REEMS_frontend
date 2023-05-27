import { useRouter } from "next/router"

export default function SignOut() {
  const router = useRouter()

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="d-flex py-2 text-4xl text-gray-700 no-underline align-items-center border border-red rounded-xl px-2"
        role="menuitem"
        id="user-menu-item-2"
        onClick={() => {
          router.push('/')
        }}
      >
        <span className="text-red-500">Sign Out</span>
      </button>
    </div>
  )
}
