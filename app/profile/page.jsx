"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  useRouter;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, []);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Profile
      name="my"
      desc="welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
