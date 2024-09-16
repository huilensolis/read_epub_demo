import fs from "fs/promises";
import Link from "next/link";
import { cwd } from "process";

export default async function Folder_files({
  params: { folder_title },
}: {
  params: { folder_title: string };
}) {
  const files = await fs.readdir(cwd() + `/files/${folder_title}/OPS`);
  return (
    <ul className="flex flex-col gap-2">
      {files.map((file_name) => (
        <Link
          key={file_name}
          href={`/ebook/${folder_title}/${file_name}`}
          className="text-lg"
        >
          {file_name}
        </Link>
      ))}
    </ul>
  );
}
