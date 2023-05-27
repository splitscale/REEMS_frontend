import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="flex flex-row justify-center"
      style={{
        backgroundImage: `url('/nav-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "75px",
        width: "100%",
      }}
    >
      <div className="flex items-center">
        <img
          className="w-20 h-16 pl-2 mx-1"
          src="logo-2.png"
          alt="logo" />

        <span className="text-2xl" style={{ fontFamily: 'cursive' }}>
          Reems
        </span>

      </div><div className="flex items-center ml-auto mr-6">
        <Link className="relative" href="/login">
          <button type="button" className="btn btn-light">
            Login
          </button>
        </Link>
      </div>
    </div >
  );
}
