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
      </div>

      <div className="mt-12 py-8 px-12 my-20 mx-96 rounded-lg bg-gray-300">
        <p className="text-left text-2xl">Name:</p>
        <p className="text-left text-2xl">Email: {user.email}</p>
      </div>
    </>
  );
}
