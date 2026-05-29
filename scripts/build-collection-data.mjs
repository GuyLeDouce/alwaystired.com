import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const metadataDir =
  process.env.COLLECTION_METADATA_DIR ?? "D:\\atnft_upload_ready";
const outputPath = path.join(process.cwd(), "public", "assets", "collection.json");
const imageGatewayBaseUrl =
  process.env.COLLECTION_IMAGE_GATEWAY ??
  "https://ipfs.chlewigen.ch/ipfs/QmcMWvNKhSzFqbvyCdcaiuBgQLTSEmHXWjys2N1dBUAHFe";

function getEditionFromFilename(filename) {
  const basename = path.basename(filename, ".json");

  if (!/^\d+$/.test(basename)) {
    return null;
  }

  return Number(basename);
}

const files = (await readdir(metadataDir))
  .filter((file) => path.extname(file).toLowerCase() === ".json")
  .map((file) => ({ file, edition: getEditionFromFilename(file) }))
  .filter((entry) => entry.edition !== null)
  .sort((a, b) => a.edition - b.edition);

const collection = [];

for (const { file, edition } of files) {
  const raw = await readFile(path.join(metadataDir, file), "utf8");
  const metadata = JSON.parse(raw);

  collection.push({
    id: String(metadata.edition ?? edition),
    name: metadata.name ?? `Always Tired #${edition}`,
    description: metadata.description ?? "",
    image: `${imageGatewayBaseUrl}/${metadata.edition ?? edition}.jpg`,
    edition: metadata.edition ?? edition,
    attributes: Array.isArray(metadata.attributes) ? metadata.attributes : [],
  });
}

await writeFile(outputPath, `${JSON.stringify(collection)}\n`);

console.log(`Wrote ${collection.length} NFTs to ${outputPath}`);
