"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Row,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import styles from "./about.module.scss";
import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

export function AboutContent() {
  const { t, mounted } = useTranslations();

  // Loading state check - wait for client to mount
  if (!mounted) {
    return null;
  }

  return (
    <Row fillWidth s={{ direction: "column" }} horizontal="center">
      {about.avatar.display && (
        <Column
          className={styles.avatar}
          top="64"
          fitHeight
          position="sticky"
          s={{ position: "relative", style: { top: "auto" } }}
          xs={{ style: { top: "auto" } }}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" style={{ width: "200px", height: "200px" }} />
          <Row gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="mapPin" />
            {t('about.location')}
          </Row>
          {person.languages && person.languages.length > 0 && (
            <Row wrap gap="8">
              {person.languages.map((language, index) => (
                <Tag key={index} size="l">
                  {language}
                </Tag>
              ))}
            </Row>
          )}
        </Column>
      )}
      <Column className={styles.blockAlign} flex={9} maxWidth={40}>
        <Column
          id={t('about.intro.title')}
          fillWidth
          minHeight="160"
          vertical="center"
          marginBottom="32"
        >
          {about.calendar.display && (
            <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
              className={styles.blockAlign}
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
              <Row paddingX="8">Schedule a call</Row>
              <IconButton
                href={about.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Row>
          )}
          <Heading className={styles.textAlign} variant="display-strong-xl">
            {person.name}
          </Heading>
          <Text
            className={styles.textAlign}
            variant="display-default-xs"
            onBackground="neutral-weak"
          >
            {person.role}
          </Text>
          {social.length > 0 && (
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
              data-border="rounded"
            >
              {social.map(
                (item) =>
                  item.link && (
                    <React.Fragment key={item.name}>
                      <Row s={{ hide: true }}>
                        <Button
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <IconButton
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </Row>
                    </React.Fragment>
                  ),
              )}
            </Row>
          )}
        </Column>

        {about.intro.display && (
          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
            {t('about.intro.description')}
          </Column>
        )}

        {about.work.display && (
          <>
            <Heading as="h2" id={t('about.work.title')} variant="display-strong-s" marginBottom="m">
              {t('about.work.title')}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {['freelance', 'karsan', 'eli'].map((jobKey, index) => (
                <Column key={`${jobKey}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                    <Text id={t(`about.work.${jobKey}.company`)} variant="heading-strong-l">
                      {t(`about.work.${jobKey}.company`)}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {t(`about.work.${jobKey}.timeframe`)}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {t(`about.work.${jobKey}.role`)}
                  </Text>
                  <Column as="ul" gap="16">
                    {Array.isArray(t(`about.work.${jobKey}.achievements`)) &&
                      t(`about.work.${jobKey}.achievements`).map(
                        (achievement: string, achIndex: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${jobKey}-${achIndex}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                  </Column>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.studies.display && (
          <>
            <Heading as="h2" id={t('about.education.title')} variant="display-strong-s" marginBottom="m">
              {t('about.education.title')}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {['university', 'teknokent'].map((eduKey, index) => (
                <Column key={`${eduKey}-${index}`} fillWidth gap="4">
                  <Text id={t(`about.education.${eduKey}.name`)} variant="heading-strong-l">
                    {t(`about.education.${eduKey}.name`)}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {t(`about.education.${eduKey}.description`)}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.technical.display && (
          <>
            <Heading
              as="h2"
              id={t('about.technical.title')}
              variant="display-strong-s"
              marginBottom="40"
            >
              {t('about.technical.title')}
            </Heading>
            <Column fillWidth gap="l">
              {['frontend', 'backend', 'tools'].map((skillKey, index) => (
                <Column key={`${skillKey}-${index}`} fillWidth gap="4">
                  <Text id={t(`about.technical.${skillKey}.title`)} variant="heading-strong-l">
                    {t(`about.technical.${skillKey}.title`)}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {t(`about.technical.${skillKey}.description`)}
                  </Text>
                  {about.technical.skills[index]?.tags && about.technical.skills[index].tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {about.technical.skills[index].tags.map((tag, tagIndex) => (
                        <Tag key={`${skillKey}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Row>
  );
}
