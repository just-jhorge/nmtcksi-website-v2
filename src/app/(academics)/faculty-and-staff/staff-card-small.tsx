interface StaffCardProps {
  role: string;
  name: string;
  email: string;
}

export default function StaffCardSmall({ role, name, email }: StaffCardProps) {
  return (
    <div className="bg-muted group px-2 py-3 md:px-4 md:py-6">
      <p className="text-muted-foreground mb-1 text-xs">{role}</p>
      <h3 className="group-hover:text-primary text-sm font-semibold transition-colors duration-300 md:text-base">
        {name}
      </h3>
      <a
        href={`mailto:${email}`}
        className="text-xs underline underline-offset-4 md:text-sm"
      >
        {email}
      </a>
    </div>
  );
}
