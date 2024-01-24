import React, { Suspense } from "react";
import Notes from "../../components/notes";

const Page = ({ params }: { params: {} }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        {/* @ts-expect-error Async */}
        <Notes />
      </Suspense>
    </div>
  );
};

export default Page;
