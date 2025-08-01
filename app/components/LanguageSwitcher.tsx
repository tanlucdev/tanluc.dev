'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value;
    if (next !== locale)
      router.replace(pathname, { locale: next });
  }
  return (
    <select value={locale} onChange={onChange}>
      <option value="en">English</option>
      <option value="vi">Tiếng Việt</option>
    </select>
  );
}