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
      <div className="flex flex-col items-center">
        <label htmlFor="file-input">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img src={imageSrc} alt="Your Profile Picture" className="w-full h-full object-cover" />
          </div>
        </label>
        <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
      </div>

      <div className="p-1 my-3 mx-4 rounded-lg border border-gray-300">
        <p className="text-left text-sm">Name:</p>
        <p className="text-left text-sm">Email: {user.email}</p>
      </div>
    </>
  );
}
