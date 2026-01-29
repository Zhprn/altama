import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export default getRequestConfig(async ({ locale }) => {
  let validatedLocale = locale as Locale;
  if (!locales.includes(validatedLocale)) {
    validatedLocale = defaultLocale;
  }

  const common = (await import(`./locales/${validatedLocale}/common.json`))
    .default;
  const navigation = (
    await import(`./locales/${validatedLocale}/navigation.json`)
  ).default;
  const hero = (await import(`./locales/${validatedLocale}/hero.json`)).default;
  const home = (await import(`./locales/${validatedLocale}/home.json`)).default;
  const profile = (await import(`./locales/${validatedLocale}/profile.json`))
    .default;
  const lifeAtAltama = (
    await import(`./locales/${validatedLocale}/lifeAtAltama.json`)
  ).default;
  const contactUs = (
    await import(`./locales/${validatedLocale}/contactUs.json`)
  ).default;
  const privacy = (await import(`./locales/${validatedLocale}/privacy.json`))
    .default;

  return {
    locale: validatedLocale,
    messages: {
      ...common,
      ...navigation,
      hero,
      home,
      profile,
      lifeAtAltama,
      contactUs,
      privacy,
    },
  };
});
