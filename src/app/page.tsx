import { cwd } from "process";
import { read_epub_file } from "./read_epub_file";
import fs from "fs/promises";
import Link from "next/link";

export default async function Home() {
  const ebooks_dir = await fs.readdir(cwd() + "/files");

  const ebooks = ebooks_dir.map((file_name) => {
    return file_name;
  });

  return (
    <div className="text-black">
      <form action={read_epub_file}>
        <label htmlFor="epub"></label>
        <input type="file" id="epub" name="epub" className="text-black" />
        <button type="submit">submit</button>
      </form>
      <ul>
        {ebooks.map((folder_name, i) => (
          <li key={i}>
            <Link href={`/ebook/${folder_name}/`}>{folder_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
