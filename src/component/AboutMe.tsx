import React, { useEffect, useState } from 'react';

export default function AboutMe() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    // Replace 'sanduni-tharaka' with your actual GitHub username if different
    fetch('https://api.github.com/users/sandutharaka')
      .then(res => res.json())
      .then(data => setAvatarUrl(data.avatar_url))
      .catch(() => setAvatarUrl(null));
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt="GitHub Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400"
        />
      )}
      <h2 className="text-2xl font-bold text-blue-400">Mabharana Arachchige Sanduni Tharaka</h2>
      <p className="mt-2 text-gray-300">
        I'm Sanduni Tharaka, an enthusiastic undergraduate pursuing a BICT (Hons)  at Rajarata University of Sri Lanka. Passionate about quality assurance and software testing, I’m currently gaining hands-on experience as a Test Engineer Intern at Jasmin Media. I enjoy building efficient systems, automating testing workflows, and exploring the intersection of AI and image processing.
      </p>
    </div>
  );
}
