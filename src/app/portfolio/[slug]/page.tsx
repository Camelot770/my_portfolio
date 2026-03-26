import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import { ProjectDetail } from './ProjectDetail';
import { ProjectJsonLd } from '@/components/seo/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Проект не найден',
    };
  }

  return {
    title: `${project.title} — ${project.categoryLabel}`,
    description: project.shortDescription,
    alternates: {
      canonical: `https://stacklab.su/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.title} — ${project.categoryLabel} | StackLab`,
      description: project.fullDescription.slice(0, 200),
      images: [project.images.hero],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prevProject, nextProject } = getAdjacentProjects(slug);

  return (
    <>
      <ProjectJsonLd
        name={project.title}
        description={project.fullDescription.slice(0, 300)}
        url={`/portfolio/${slug}`}
        image={project.images.hero}
        category={project.categoryLabel}
        technologies={project.technologies}
        datePublished={`${project.year}-01-01`}
      />
      <ProjectDetail
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </>
  );
}
