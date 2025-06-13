import CreativeResources from "pageComponents/creative-resources/index";

import { isStringArray } from "utils/functions";

export default async function CreativeResourcesPage({ params }) {

  const { slug } = await params;
  const path = (isStringArray(slug) ? slug : [slug]).join('/');

 return <CreativeResources slug={slug} path={path} />;
}
