interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  category = "ACADEMIC",
}: EventCardProps) {
  return (
    <div className="bg-card border-border hover:border-muted-foreground/30 rounded-lg border p-6 transition-colors">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="text-muted-foreground bg-muted rounded px-2 py-1 font-mono text-xs tracking-wider uppercase">
          {category}
        </span>
      </div>

      {/* Event Title */}
      <h3 className="text-foreground mb-3 text-xl font-semibold text-balance">
        {title}
      </h3>

      {/* Event Details */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground min-w-[60px] font-mono text-sm">
            DATE
          </span>
          <span className="text-foreground text-sm">{date}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-muted-foreground min-w-[60px] font-mono text-sm">
            TIME
          </span>
          <span className="text-foreground text-sm">{time}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-muted-foreground min-w-[60px] font-mono text-sm">
            VENUE
          </span>
          <span className="text-foreground text-sm">{location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
        {description}
      </p>

      {/* Open to All Students Notice */}
      <div className="border-border mt-4 border-t pt-4">
        <p className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
          Open to all students • No registration required
        </p>
      </div>
    </div>
  );
}
