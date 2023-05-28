import { useEffect, useState } from 'react';
import { handleReadDataPersist } from '../lib/handlers/handleReadPersistedData';
import { stored } from '../public/config/stored';
import { ShieldUser } from '../lib/User/ShieldUser';

export default function Profile() {
  const [imageSrc, setImageSrc] = useState('user-icon.png');
  const [username, setUsername] = useState('Jiv');
  const [email, setEmail] = useState('jivdelacruz@gmail.com');

  useEffect(() => {
    const user = handleReadDataPersist<ShieldUser>(stored.key.user);

    if (user) {
      setUsername(user.displayName);
      setEmail(user.email);
    }

    if (!user) alert('Something went wrong while loading the user profile');
  }, []);

  async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);

    reader.onload = async () => {
      setImageSrc(reader.result as string);

      try {
        const response = await fetch('http://localhost:8080', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: reader.result,
          }),
        });

        if (response.ok) {
          console.log('Image uploaded successfully');
        } else {
          console.log('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  }

  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <label htmlFor="file-input">
          <div className="w-60 h-60 rounded-full overflow-hidden">
            <img
              src={imageSrc}
              alt="Your Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="sr-only"
        />

        <div className="text-2xl mb-20 mt-1">Profile Photo</div>
      </div>

      <div className="card mb-8">
        <div className="card-body bg-white">
          <div className="mt-4 my-8 mx-40 rounded-lg">
            <p className="text-xl">Username: {username}</p>
            <p className="text-xl">Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
