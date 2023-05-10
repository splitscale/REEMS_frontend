import { useRouter } from "next/router"
import { useAuth } from "../context/AuthContext"

export default function SignOut() {
  const { user, logout } = useAuth()
  console.log(user)
  const router = useRouter()
  
  return (
    <a className="block py-2 text-sm text-gray-700 underline" role="menuitem" id="user-menu-item-2" onClick={() => {
      logout()
      router.push('/')
    }}>
      Sign Out
    </a>
  )
}