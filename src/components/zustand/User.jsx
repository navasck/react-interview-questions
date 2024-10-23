'use client';
import { userDetails } from '@/zustand-hooks/userdsetails';
import React, { useEffect } from 'react';

function User() {
  const { user, loading, error, fetchUser } = userDetails();

  useEffect(() => {
    fetchUser(1); // Fetch user with ID 1 on component mount
  }, [fetchUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {user && (
        <div>
          <h2 className='text-2xl'>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default User;
