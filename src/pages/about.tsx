import MainLayout from '../layouts/Main'
import {Space, Typography, Divider} from 'antd'
import Head from 'next/head'
import Image from 'next/image'

const {Title, Paragraph, Link} = Typography

const About = () => {
  return (
    <MainLayout>
      <Head>
        <title>DigitalEstate | About us</title>
        <meta
          name="description"
          content="Real Estate website to search your dream property"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Real Estate, DigitalEstate, SASS, Typescript, ts, js, JavaScript, React, Redux, NodeJs, NextJs, NestJs, mongoDB, ant design"
        />
        <meta property="og:title" content="Digital Estate" />
        <meta
          property="og:description"
          content="Real Estate website to search your dream property"
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:image:alt" content="Digital Estate" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="http://localhost:3000/" />
        <link rel="canonical" href="http://localhost:3000/" />
      </Head>
      <Title level={1}>About us and our technologies</Title>
      <section>
        <Divider />
        <Title level={2}>General tools</Title>
        <Space
          size="large"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'flex-start',
          }}>
          <Space direction="vertical" align="center">
            <Title level={3}>TypeScript</Title>
            <Link href="https://www.typescriptlang.org/">
              <Image src="/ts.svg" height={200} width={200} alt="Typescript" />
            </Link>
            <Paragraph>
              TypeScript is a programming language developed and maintained by
              Microsoft. It is a strict syntactical superset of JavaScript and
              adds optional static typing to the language. TypeScript is
              designed for the development of large applications and
              transcompiles to JavaScript.
            </Paragraph>
          </Space>
          <Space direction="vertical" align="center">
            <Title level={3}>SASS</Title>
            <Link href="https://sass-lang.com/">
              <Image src="/sass.svg" height={200} width={230} alt="SASS" />
            </Link>

            <Paragraph>
              Sass (short for syntactically awesome style sheets) is a
              preprocessor scripting language that is interpreted or compiled
              into Cascading Style Sheets (CSS). SassScript is the scripting
              language itself.
            </Paragraph>
          </Space>
          <Space direction="vertical" align="center">
            <Title level={3}>Node.js</Title>
            <Link href="https://nodejs.org/en/">
              <Image src="/node.svg" height={200} width={300} alt="Node.js" />
            </Link>

            <Paragraph>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser. Node.js lets developers use
              JavaScript to write command line tools and for server-side
              scripting
            </Paragraph>
          </Space>
        </Space>
        <Divider />
        <Title level={2}>Frontend</Title>

        <Space
          size="large"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'flex-start',
          }}>
          <Space direction="vertical" align="center">
            <Title level={3}>React</Title>
            <Link href="https://reactjs.org/">
              <Image src="/react.svg" height={200} width={270} alt="React" />
            </Link>

            <Paragraph>
              React is an open-source front-end JavaScript library[3] for
              building user interfaces or UI components. It is maintained by
              Facebook and a community of individual developers and companies.
            </Paragraph>
          </Space>
          <Space direction="vertical" align="center">
            <Title level={3}>Next.js</Title>
            <Link href="https://nextjs.org/">
              <Image src="/next.svg" height={200} width={300} alt="Next.js" />
            </Link>

            <Paragraph>
              The React Framework for Production Next.js gives you the best
              developer experience with all the features you need for
              production: hybrid static & server rendering, TypeScript support,
              smart bundling, route pre-fetching, and more. No config needed.
            </Paragraph>
          </Space>
          <Space direction="vertical" align="center">
            <Title level={3}>Ant Design</Title>
            <Link href="https://ant.design/">
              <Image src="/ant.svg" height={200} width={200} alt="Ant Design" />
            </Link>

            <Paragraph>
              An enterprise-class UI design language and React UI library with a
              set of high-​quality React components, one of best React UI
              library for enterprises.
            </Paragraph>
          </Space>
        </Space>
        <Divider />
        <Title level={2}>Backend</Title>

        <Space
          size="large"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'flex-start',
          }}>
          <Space direction="vertical" align="center">
            <Title level={3}>Nest.js</Title>
            <Link href="https://nestjs.com/">
              <Image src="/nest.svg" height={300} width={270} alt="Nest.js" />
            </Link>

            <Paragraph>
              Next.js is an open-source React front-end development web
              framework created by Vercel that enables functionality such as
              server-side rendering and generating static websites for React
              based web applications. It is a production-ready framework that
              allows developers to quickly create static and dynamic JAMstack
              websites and is used widely by many large companies.
            </Paragraph>
          </Space>
          <Space direction="vertical" align="center">
            <Title level={3}>MongoDB</Title>
            <Link href="https://www.mongodb.com/">
              <Image src="/mongo.svg" height={300} width={300} alt="MongoDB" />
            </Link>

            <Paragraph>
              MongoDB is a source-available cross-platform document-oriented
              database program. Classified as a NoSQL database program, MongoDB
              uses JSON-like documents with optional schemas. MongoDB is
              developed by MongoDB Inc. and licensed under the Server Side
              Public License
            </Paragraph>
          </Space>
        </Space>

        <Divider />
        <Title level={2}>Version control</Title>

        <Space
          size="large"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'flex-start',
          }}>
          <Space direction="vertical" align="center">
            <Title level={3}>Git</Title>
            <Link href="https://git-scm.com/">
              <Image src="/git.svg" height={300} width={270} alt="Git" />
            </Link>

            <Paragraph>
              Git is a free and open source distributed version control system
              designed to handle everything from small to very large projects
              with speed and efficiency.
            </Paragraph>
          </Space>
          <Space direction="vertical" align="center">
            <Title level={3}>GitHub</Title>
            <Link href="https://github.com/MaksFenek?tab=repositories">
              <Image src="/github.svg" height={300} width={300} alt="GitHub" />
            </Link>

            <Paragraph>
              GitHub, Inc. is a provider of Internet hosting for software
              development and version control using Git. It offers the
              distributed version control and source code management (SCM)
              functionality of Git, plus its own features
            </Paragraph>
          </Space>
        </Space>
      </section>
    </MainLayout>
  )
}

export default About
