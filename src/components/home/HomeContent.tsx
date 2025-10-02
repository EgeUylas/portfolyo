"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
} from "@once-ui-system/core";
import { about, person } from "@/resources";
import { useTranslations } from "@/hooks/useTranslations";

export function HomeContent() {
  const { t, mounted } = useTranslations();

  // Loading state check - wait for client to mount
  if (!mounted) {
    return null;
  }

  return (
    <Column maxWidth="s" horizontal="center" align="center">
      <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
        <Heading wrap="balance" variant="display-strong-l">
          {t('home.headline')}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
          {t('home.subline')}
        </Text>
      </RevealFx>
      <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
        <Button
          id="about"
          data-border="rounded"
          href={about.path}
          variant="secondary"
          size="m"
          weight="default"
          arrowIcon
        >
          <Row gap="8" vertical="center" paddingRight="4">
            {about.avatar.display && (
              <Avatar
                marginRight="8"
                style={{ marginLeft: "-0.75rem" }}
                src={person.avatar}
                size="m"
              />
            )}
            {t('about.title')}
          </Row>
        </Button>
      </RevealFx>
    </Column>
  );
}
