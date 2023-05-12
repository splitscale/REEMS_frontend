import { useRouter } from "next/router"
import { useAuth } from "../context/AuthContext"

export default function SignOut() {
  const { user, logout } = useAuth()
  console.log(user)
  const router = useRouter()

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="d-flex py-2 text-4xl text-gray-700 no-underline align-items-center"
        role="menuitem"
        id="user-menu-item-2"
        onClick={() => {
          logout()
          router.push('/')
        }}
      >
        <span className="text-red-500">Sign Out</span>
      </button>
    </div>
  )
}
