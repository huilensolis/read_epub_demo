"use server";

import { exec } from "child_process";
import fs from "fs/promises";
import { cwd } from "process";

export async function read_epub_file(formdata: FormData) {
  const file = formdata.get("epub") as File;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  // write file
  await fs.writeFile(
    cwd() + `/files/${file.name}-${crypto.randomUUID().slice(0, 4)}`,
    buffer,
  );

  // extract file
  exec(`unzip files/${file.name} -d ./files/${file.name}-extracted`);
}
