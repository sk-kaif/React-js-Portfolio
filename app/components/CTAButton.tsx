import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export default function CTAButton({
  children,
  variant = 'primary',
  href,
}: CTAButtonProps) {
  const styles = cn(
    'group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all',
    'rounded-lg',
    variant === 'primary'
      ? 'bg-white text-black hover:bg-gray-100'
      : 'border border-white/20 text-white hover:border-white/40'
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles}>
      {content}
    </button>
  );
}
