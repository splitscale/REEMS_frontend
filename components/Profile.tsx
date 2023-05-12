import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [imageSrc, setImageSrc] = useState("user-icon.png");

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);
    reader.onload = () => setImageSrc(reader.result as string);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <label htmlFor="file-input">
          <div className="w-60 h-60 rounded-full overflow-hidden">
            <img src={imageSrc} alt="Your Profile Picture" className="w-full h-full object-cover" />
          </div>

        </label>
        <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />

        <div className="text-2xl mb-20 mt-1">
          Profile Photo
        </div>
      </div>

      <div className="card mb-8">
        <div className="card-body bg-white">
          <div className="mt-4 my-8 mx-40 rounded-lg">
            <p className="text-xl">Name: </p>
            <p className="text-xl">Email Address: {user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
