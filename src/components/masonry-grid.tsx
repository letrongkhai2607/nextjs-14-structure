import { ICloudinaryItem } from "@/app/page";
import Photo from "@/components/photo";

import React, { Suspense } from "react";
import styles from "../app/page.module.css";
const MansonryGrid = ({ result }: { result: any }) => {
  function getColumns(colIndex: number) {
    if (result && result.resources.length > 0) {
      return result.resources.filter(
        (resource: Object, index: number) => index % 4 === colIndex
      );
    }
    return [];
  }

  const renderColumns = (index: number) => {
    const first = getColumns(index);
    return first.map((element: ICloudinaryItem, index: number) => (
      <Photo
        key={element.public_id}
        publicId={element.public_id}
        url={element.url}
        tags={element.tags}
      />
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.col}>{renderColumns(0)}</div>
      <div className={styles.col}>{renderColumns(1)}</div>
      <div className={styles.col}>{renderColumns(2)}</div>
      <div className={styles.col}>{renderColumns(3)}</div>
    </div>
  );
};

export default MansonryGrid;
