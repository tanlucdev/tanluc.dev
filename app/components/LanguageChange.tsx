import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; // Thay đổi import
import ReactCountryFlag from "react-country-flag";

export default function LanguageChange() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", name: "English", countryCode: "GB" },
    { code: "vi", name: "Tiếng Việt", countryCode: "VN" },
  ];

  function onValueChange(next: string) {
    if (next !== locale) {
      // Construct the new path with the selected locale
      const segments = pathname.split('/');
      // Replace the first segment if it matches a locale code
      if (languages.some(lang => lang.code === segments[1])) {
        segments[1] = next;
      } else {
        segments.splice(1, 0, next);
      }
      const newPath = segments.join('/');
      router.replace(newPath);
    }
  }

  return (
    <Select.Root value={locale} onValueChange={onValueChange}>
      <Select.Trigger
        className="relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg"
        aria-label="Language"
      >
        <Select.Value>
          {locale === "en" ? (
            <ReactCountryFlag countryCode="GB" style={{ width: '1.2rem', height: '1.2rem' }} svg className=" cursor-pointer text-secondary transition-colors hover:text-primary" />
          ) : (
            <ReactCountryFlag countryCode="VN" style={{ width: '1.2rem', height: '1.2rem' }} svg className=" cursor-pointer text-secondary transition-colors hover:text-primary" />
          )}
        </Select.Value>
      </Select.Trigger>

      <AnimatePresence>
        <Select.Portal>
          <Select.Content asChild position="popper" side="bottom" align="end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
              className="absolute right-0 z-10 mt-2 max-h-60 w-36 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base capitalize shadow-md focus:outline-none dark:bg-black sm:text-sm"
            >
              <Select.Viewport>
                {languages.map((language) => (
                  <Select.Item
                    key={language.code}
                    value={language.code}
                    className={clsx(
                      "relative flex cursor-default select-none items-center justify-between gap-2 rounded-md px-4 py-2",
                      "focus:outline-none",
                      "data-[highlighted]:bg-secondary",
                    )}
                  >
                    <Select.ItemText className="truncate">
                      {language.name}
                    </Select.ItemText>
                    <ReactCountryFlag countryCode={language.countryCode} svg className="h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
                  </Select.Item>
                ))}
              </Select.Viewport>
            </motion.div>
          </Select.Content>
        </Select.Portal>
      </AnimatePresence>
    </Select.Root>
  );
}