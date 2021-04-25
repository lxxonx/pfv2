export interface ContentProps {
  title: string;
  content: {
    photo?: string;
    tech: string;
    doc?: string;
    demo: {
      url: string;
      id?: string;
      pw?: string;
    };
  };
}

export const content: ContentProps[] = [
  {
    title: "instagram-clone",
    content: {
      demo: {
        url: "https://dailykoding.xyz/#/",
        id: "username",
        pw: "username",
      },
      doc: "https://github.com/devleeon/instagram-clone-web",
      photo: "/thumbnails/instaclone.png",
      tech: `DB: PostgreSql/Cloudinary for Image Upload \nORM: PrismaORM\nServer: Node.js/Express.js/ApolloServer/Graphql \nWeb: React.js/ApolloClient/Styled-Components\nApp: React Native/ApolloClient/Styled Components`,
    },
  },
  {
    title: "reddit-clone",
    content: {
      demo: {
        url: "https://lireddit-web-olive.vercel.app/login",
      },
      doc: "https://github.com/devleeon/lireddit-web",
      photo: "/thumbnails/redditclone.png",
      tech: `DB: PostgreSql \nORM: TypeORM\nServer: Node.js/Express.js/ApolloServer/Graphql/Redis \nWeb: Next.js/ApolloClient/ChakraUi\nDevOps: Github, Docker, Digital Ocean for Deploying the server(currently server is dead)`,
    },
  },
  {
    title: "portfolio",
    content: {
      demo: {
        url: "https://portfolio-eight-gold.vercel.app/",
      },
      doc: "https://github.com/devleeon/portfolio",
      photo: "/thumbnails/portfolio.png",
      tech: `Web: Next.js/Styled-Components/MaterialUI\nDevOps: Github, Vercel for Deploying`,
    },
  },
  {
    title: "instagram-clone",
    content: {
      demo: {
        url: "https://dailykoding.xyz/#/",
        id: "username",
        pw: "username",
      },
      doc: "https://github.com/devleeon/instagram-clone-web",
      photo: "/thumbnails/instaclone.png",
      tech: `DB: PostgreSql/Cloudinary for Image Upload \nORM: PrismaORM\nServer: Node.js/Express.js/ApolloServer/Graphql \nWeb: React.js/ApolloClient/Styled-Components\nApp: React Native/ApolloClient/Styled Components`,
    },
  },
  {
    title: "reddit-clone",
    content: {
      demo: {
        url: "https://lireddit-web-olive.vercel.app/login",
      },
      doc: "https://github.com/devleeon/lireddit-web",
      photo: "/thumbnails/redditclone.png",
      tech: `DB: PostgreSql \nORM: TypeORM\nServer: Node.js/Express.js/ApolloServer/Graphql/Redis \nWeb: Next.js/ApolloClient/ChakraUi\nDevOps: Github, Docker, Digital Ocean for Deploying the server(currently server is dead)`,
    },
  },
  {
    title: "portfolio",
    content: {
      demo: {
        url: "https://portfolio-eight-gold.vercel.app/",
      },
      doc: "https://github.com/devleeon/portfolio",
      photo: "/thumbnails/portfolio.png",
      tech: `Web: Next.js/Styled-Components/MaterialUI\nDevOps: Github, Vercel for Deploying`,
    },
  },
];
