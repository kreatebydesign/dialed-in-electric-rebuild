type TestimonialCardProps = {
  quote: string;
  author: string;
  service?: string;
};

export default function TestimonialCard({
  quote,
  author,
  service,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-edge rounded-xl">
      {/* Quote — no star ratings; these are customer comments, not verified Google reviews */}
      <blockquote className="text-charcoal text-base leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-2 border-t border-edge">
        <div className="flex items-center justify-center w-8 h-8 bg-surface rounded-full text-xs font-bold text-charcoal-mid">
          {author.charAt(0)}
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-charcoal">{author}</cite>
          {service && (
            <p className="text-xs text-muted">{service}</p>
          )}
        </div>
      </footer>
    </div>
  );
}
