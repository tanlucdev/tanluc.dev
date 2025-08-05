import Link from "@/app/components/Link";
import { Metadata } from "next";
import { useTranslations } from "use-intl";
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: "404 | Tan Luc",
  description: "Uh oh! This page does not exist",
};

const Custom404 = async (): Promise<JSX.Element> => {
  const t = await getTranslations("notFound");
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-primary">404</h1>
      <p className="text-secondary max-w-sm">
        {t('message')}
      </p>
      <div className="h-2" />
      <Link href="/" underline>
        {t('returnHome')}
      </Link>
    </div>
  )
};

export default Custom404;
