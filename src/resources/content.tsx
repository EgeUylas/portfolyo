import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ege",
  lastName: "Uylaş",
  name: `Ege Uylaş`,
  role: "Web Developer & Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "egeuylas19013@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Turkish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/EgeUylas",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ege-uylaş-682030273",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/egeeuylas?igsh=bm5iZ3NuaXA3dDBl",
  },
  {
    name: "0546 633 23 04",
    icon: "phone",
    link: "tel:+905466332304",
  },
  {
    name: "egeuylas19013@gmail.com",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Modern Web Çözümleri & Yaratıcı Projeler</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest work
        </Text>
      </Row>
    ),
    href: "/work/saatuzay",
  },
  subline: (
    <>
      Ben Ege Uylaş, Bilgisayar Mühendisi ve Freelance Web Developer.
      Web geliştirme, yazılım mimarisi ve modern teknolojilerle kullanıcı dostu dijital deneyimler oluşturuyorum.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Hakkımda",
  title: `Hakkımda – ${person.name}`,
  description: `${person.name} - ${person.role}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Giriş",
    description: (
      <>
        Bilgisayar Mühendisi olarak web geliştirme ve yazılım mimarisi alanlarında çalışıyorum.
        Freelance web developer olarak müşterilere modern, kullanıcı dostu web çözümleri sunuyorum.
        React ve JavaScript ile projeler geliştirdim, C# ve Python dillerinde nesne yönelimli programlama
        konularında deneyim sahibiyim. Firebase gibi teknolojilerle backend tarafına ilgi duyuyorum.
        Takım çalışmasına yatkın, öğrenmeye açık bir yazılımcı olarak teknik becerilerimi yenilikçi projelerle
        geliştirmeye devam ediyorum.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "İş Deneyimi",
    experiences: [
      {
        company: "Freelance Web Developer",
        timeframe: "2025 - Devam Ediyor",
        role: "Full Stack Developer",
        achievements: [
          <>
            10'dan fazla müşteri projesi başarıyla teslim edildi
          </>,
          <>
            React.js, Next.js ve TypeScript ile modern web uygulamaları geliştirme
          </>,
          <>
            Firebase, Node.js ile backend entegrasyonları ve API geliştirme
          </>,
          <>
            UI/UX odaklı, responsive kullanıcı arayüzü tasarımı
          </>,
          <>
            Proje yönetimi, müşteri iletişimi ve teknik danışmanlık
          </>,
        ],
        images: [],
      },
      {
        company: "Karsan Otomotiv",
        timeframe: "2025",
        role: "Full Stack Developer - Stajyer",
        achievements: [
          <>
            Full stack web uygulaması geliştirme
          </>,
          <>
            Frontend ve backend entegrasyonu
          </>,
          <>
            Modern web teknolojileri ile proje geliştirme
          </>,
          <>
            Takım çalışması ve agile metodolojiler
          </>,
        ],
        images: [],
      },
      {
        company: "Ege Linyitleri İşletmesi Müdürlüğü (ELİ)",
        timeframe: "2024",
        role: "Stajyer Yazılım Geliştirici",
        achievements: [
          <>
            React.js kullanarak modern web uygulaması geliştirme
          </>,
          <>
            Firebase ile kimlik doğrulama ve veritabanı yönetimi
          </>,
          <>
            Responsive ve kullanıcı dostu arayüz tasarımı
          </>,
          <>
            UI/UX prensiplerine uygun işlevsel arayüz tasarımı
          </>,
          <>
            Sürüm kontrolü için Git ve GitHub kullanımı
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Eğitim",
    institutions: [
      {
        name: "Balıkesir Üniversitesi",
        description: <>Bilgisayar Mühendisliği (2021 - 2025)</>,
      },
      {
        name: "Balıkesir Teknokent Ön Kuluçka Mezunu",
        description: <>2025</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Teknik Beceriler",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>React.js, Next.js ve TypeScript ile modern, performanslı web uygulamaları geliştiriyorum. Redux, Context API, Hooks ve component-based mimari konularında deneyimliyim. Responsive tasarım ve modern UI/UX prensipleriyle kullanıcı odaklı arayüzler oluşturuyorum.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Database",
        description: (
          <>Node.js, Firebase ve SQL veritabanları ile backend geliştirme ve API entegrasyonları yapıyorum. RESTful API tasarımı, kimlik doğrulama sistemleri ve veritabanı yönetimi konularında deneyim sahibiyim.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
        ],
        images: [],
      },
      {
        title: "Programming Languages & Tools",
        description: (
          <>JavaScript, TypeScript, Python, C# ve Java dillerinde yazılım geliştirme deneyimim var. Git/GitHub ile versiyon kontrolü, modern development araçları ve agile metodolojiler konusunda pratik bilgiye sahibim.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Git",
            icon: "github",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog Yazılarım",
  description: `${person.name} tarafından yazılan blog yazıları`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projeler",
  title: `Projeler – ${person.name}`,
  description: `${person.name} tarafından geliştirilen web ve yazılım projeleri`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeri",
  title: `Fotoğraf Galerisi – ${person.name}`,
  description: `${person.name} fotoğraf koleksiyonu`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
