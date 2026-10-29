import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type Props = { src: string; alt: string; variant: "hero" | "card" };

// Renders the photo when it exists in /public, otherwise a styled placeholder
// so the layout still reads correctly before real product shots are added.
export default function FigureImage({ src, alt, variant }: Props) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (exists) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={variant === "hero"}
        sizes={variant === "hero" ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 33vw"}
        className={`figure-img figure-img--${variant}`}
      />
    );
  }

  return (
    <div className={`figure-placeholder figure-placeholder--${variant}`} role="img" aria-label={alt}>
      <span>{src}</span>
    </div>
  );
}
