"use client";

import React from "react";

interface VideoEmbedProps {
  googleDriveUrl: string;
  title: string;
  className?: string;
}

// Function to convert Google Drive share URL to embed URL
const convertToEmbedUrl = (shareUrl: string): string => {
  // Extract file ID from Google Drive share URL
  const fileIdMatch = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return shareUrl;
};

export default function VideoEmbed({ googleDriveUrl, title, className = "" }: VideoEmbedProps) {
  const embedUrl = convertToEmbedUrl(googleDriveUrl);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full rounded-lg border border-border"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        {title}
      </p>
    </div>
  );
}