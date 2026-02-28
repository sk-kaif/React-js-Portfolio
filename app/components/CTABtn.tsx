import { cn } from "@/lib/utils";

interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CTABtn({
  children,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'group inline-flex items-center justify-center gap-2',
        'rounded-lg px-6 py-3 text-sm font-medium',
        'bg-white text-black hover:bg-gray-100',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        'transition-all',
        className
      )}
    >
      {children}
    </button>
  );
}
