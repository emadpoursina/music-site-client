import React from "react";

interface SocialLinks {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  website?: string;
}

interface SingerProfileProps {
  name: string;
  bio?: string;
  avatarUrl?: string;
  socialLinks?: SocialLinks;
}

const socialIcons: Record<string, string> = {
  instagram:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  twitter:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
  youtube:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
  website:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/internetarchive.svg",
};

const SingerProfile: React.FC<SingerProfileProps> = ({
  name,
  bio,
  avatarUrl,
  socialLinks,
}) => (
  <div
    className="w-full h-full bg-[#181820] text-white rounded-2xl p-8 flex flex-col items-center gap-8"
    dir="rtl"
  >
    <div className="flex flex-col items-center gap-4">
      <img
        src={avatarUrl || "https://via.placeholder.com/96x96"}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#23232b]"
      />
      <h1 className="text-3xl font-bold">{name}</h1>
      {bio && <p className="text-white/80 text-center max-w-xl">{bio}</p>}
      {socialLinks && (
        <div className="flex gap-4 mt-2">
          {Object.entries(socialLinks).map(
            ([key, value]) =>
              value && (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <img src={socialIcons[key]} alt={key} className="w-7 h-7" />
                </a>
              )
          )}
        </div>
      )}
    </div>
  </div>
);

export default SingerProfile;
