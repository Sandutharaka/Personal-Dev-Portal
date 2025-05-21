import React, { useEffect, useState } from 'react';

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

export default function AboutMe() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const GITHUB_USERNAME = 'sandutharaka'; // Replace with your username

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  if (!userData) return <div className="text-white">Loading profile...</div>;

  return (
    <div className="relative flex items-start gap-8 my-12">
      {/* Circular Profile Photo (Left) */}
      <div className="relative z-10">
        <img
          src={userData.avatar_url}
          alt="GitHub profile"
          className="w-32 h-32 rounded-full border-4 border-gray-800 shadow-xl hover:border-blue-500 transition-all duration-300"
          style={{
            transform: 'translateX(20%)', // Overlaps the card
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
          }}
        />
      </div>

      {/* Bio Card (Right) */}
      <div 
        className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 flex-1"
        style={{
          marginLeft: '-3rem', // Pulls card under the photo
          paddingLeft: '5rem', // Makes space for photo
          minHeight: '16rem' // 2x profile photo height (8rem*2)
        }}
      >
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-2">
            {userData.name}
          </h2>
          
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            {userData.bio || "Full-stack developer passionate about creating beautiful interfaces."}
          </p>
          
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-blue-400 hover:text-blue-300 transition-colors"
          >
            Visit GitHub Profile →
          </a>
        </div>
      </div>
    </div>
  );
}
