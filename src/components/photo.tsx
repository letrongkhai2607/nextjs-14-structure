"use client";
import { useUpdateFavoriteTag } from "@/hooks";

import { CldImage } from "next-cloudinary";
import Image from "next/image";

import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Photo = ({
  publicId,
  url,
  tags,
}: {
  publicId: string;
  url: string;
  tags: Array<string>;
}) => {
  const imageStyles = {
    width: "100%",
    height: "auto",
    borderRadius: "0.5rem",
  };
  const isFavorited = tags.includes("favorites");
  const handleUpdateTag = async () => {
    // await useUpdateFavoriteTag(publicId, true);
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        onClick={() => useUpdateFavoriteTag(publicId, !isFavorited)}
        style={{
          width: "20px",
          height: "20px",
          color: isFavorited ? "red" : "white",
          position: "absolute",
          right: 10,
          top: 15,
          cursor: "pointer",
        }}
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
      <Image
        src={url}
        width={0}
        height={0}
        sizes="100vw"
        alt=""
        style={imageStyles} // optional
      />
    </div>
  );
};

export default Photo;
