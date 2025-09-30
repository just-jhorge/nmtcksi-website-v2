import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";

interface StaffCardProps {
  rank: string;
  name: string;
  email: string;
}

export default function StaffCardBig({ rank, name, email }: StaffCardProps) {
  return (
    <div key={email}>
      <div className="relative aspect-square w-full bg-neutral-100">
        <Image
          src={placeholder}
          fill
          alt="gallery_image"
          className="object-cover"
        />
      </div>
      <div className="pt-2">
        <p className="mb-1 text-xs font-light">{rank}</p>
        <h3 className="text-primary text-sm font-semibold md:text-base">
          {name}
        </h3>
        <a
          href={`mailTo:${email}`}
          className="text-muted-foreground text-xs underline underline-offset-1 md:text-sm"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
