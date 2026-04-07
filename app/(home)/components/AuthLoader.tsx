"use client";
import { Skeleton } from "antd";

export default function AuthLoader() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <div className="my-4">
          <Skeleton.Button active block style={{ height: "40px" }} />
        </div>
        <div className="my-4">
          <Skeleton.Button active block style={{ height: "40px" }} />
        </div>
        <div className="my-4">
          <Skeleton.Button block active style={{ height: "40px" }} />
        </div>
        <div className="my-4">
          <Skeleton.Button block active style={{ height: "40px" }} />
        </div>
      </div>
      <div>
        <div className="my-4">
          <Skeleton.Button block active style={{ height: "200px" }} />
        </div>
      </div>
    </div>
  );
}
export function Loader() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <div className="my-4">
          <Skeleton.Button active block style={{ height: "40px" }} />
        </div>
        <div className="my-4">
          <Skeleton.Button active block style={{ height: "40px" }} />
        </div>
        <div className="my-4">
          <Skeleton.Button block active style={{ height: "40px" }} />
        </div>
        <div className="my-4">
          <Skeleton.Button block active style={{ height: "40px" }} />
        </div>
      </div>
      <div>
        <div className="my-4">
          <Skeleton.Button block active style={{ height: "200px" }} />
        </div>
      </div>
    </div>
  );
}
