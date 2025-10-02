"use client";

import { Heading } from "@once-ui-system/core";
import { useTranslations } from "@/hooks/useTranslations";

export function WorkContent() {
  const { t, mounted } = useTranslations();

  // Loading state check - wait for client to mount
  if (!mounted) {
    return null;
  }

  return (
    <Heading marginBottom="l" variant="heading-strong-xl" align="center">
      {t('work.title')}
    </Heading>
  );
}
