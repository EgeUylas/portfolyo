"use client";

import { ProjectCard } from "@/components";
import { useTranslations } from "@/hooks/useTranslations";

interface ProjectCardWithLocaleProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  content: string;
  avatars: { src: string }[];
  link: string;
}

export function ProjectCardWithLocale({
  href,
  priority,
  images,
  title,
  titleEn,
  description,
  descriptionEn,
  content,
  avatars,
  link,
}: ProjectCardWithLocaleProps) {
  const { locale, mounted } = useTranslations();

  // Wait for client to mount
  if (!mounted) {
    return null;
  }

  const displayTitle = locale === 'en' ? titleEn : title;
  const displayDescription = locale === 'en' ? descriptionEn : description;

  return (
    <ProjectCard
      href={href}
      priority={priority}
      images={images}
      title={displayTitle}
      description={displayDescription}
      content={content}
      avatars={avatars}
      link={link}
    />
  );
}
