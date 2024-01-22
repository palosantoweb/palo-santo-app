'use client'
import { Skeleton, Spinner } from "keep-react";

const SkeletonComponent = () => {
    return ( 
    <div className="max-w-3xl py-5">
      <Spinner />
    </div>);
}
 
export default SkeletonComponent;