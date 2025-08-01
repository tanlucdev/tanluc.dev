import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Export locale-aware wrappers around Next.js navigation APIs (v4)
export const { Link, usePathname, useRouter, redirect, getPathname } =
  createNavigation(routing);