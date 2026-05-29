import Image from "next/image";

type NftImageProps = {
  id: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export function NftImage({
  id,
  alt,
  priority,
  sizes = "(max-width: 768px) 90vw, 360px",
}: NftImageProps) {
  return (
    <Image
      alt={alt}
      height={1600}
      priority={priority}
      sizes={sizes}
      src={`/assets/nfts/${id}.jpg`}
      width={1600}
    />
  );
}
