import fs from "fs/promises";

import { parse } from "node-html-parser";

import { cwd } from "process";
export default async function Page({
  params: { folder_title, page },
}: {
  params: { folder_title: string; page: string };
}) {
  const pageContent = await fs.readFile(
    cwd() + `/files/${folder_title}/OPS/${page}`,
  );

  const parsedPage = parse(pageContent.toString());

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{
        __html: parsedPage.querySelector("body").innerHTML,
      }}
    ></div>
  );
}
