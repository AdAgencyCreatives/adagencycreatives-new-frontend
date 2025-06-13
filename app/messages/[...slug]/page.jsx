import { isStringArray } from "utils/functions";

export default async function Page({ params }) {

  const { slug } = await params;
  const path = (isStringArray(slug) ? slug : [slug]).join('/');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>Path: {path}</div>
    </div>
  );
}