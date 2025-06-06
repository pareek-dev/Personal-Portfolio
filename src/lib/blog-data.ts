export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageAiHint?: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'mastering-mern-stack-basics',
    title: 'Mastering the MERN Stack: A Beginner\'s Guide',
    date: '2024-07-20',
    excerpt: 'An introduction to MongoDB, Express.js, React, and Node.js for building powerful full-stack applications.',
    content: `
      <p>The MERN stack is a popular choice for developing modern web applications. It consists of four key technologies:</p>
      <ul>
        <li><strong>MongoDB:</strong> A NoSQL document database.</li>
        <li><strong>Express.js:</strong> A minimal and flexible Node.js web application framework.</li>
        <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
        <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
      </ul>
      <p>This guide will walk you through the basics of each component and how they work together to create a cohesive full-stack application. We'll cover setting up your development environment, creating a simple API with Express and Node.js, connecting to MongoDB, and building a dynamic frontend with React.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Why Choose MERN?</h3>
      <p>One of the main advantages of the MERN stack is that it uses JavaScript across the entire application, from the frontend to the backend and database interactions (with Mongoose ODM for MongoDB). This consistency can simplify development and make it easier for developers to work on different parts of the application.</p>
      <p>Stay tuned for more advanced topics in upcoming posts!</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png',
    imageAiHint: 'code computer',
    author: 'Your Name',
    tags: ['MERN', 'JavaScript', 'Web Development', 'React', 'Node.js'],
  },
  {
    slug: 'deep-dive-into-react-hooks',
    title: 'A Deep Dive into React Hooks',
    date: '2024-06-15',
    excerpt: 'Explore the power and flexibility of React Hooks like useState, useEffect, and useContext for managing state and side effects in functional components.',
    content: `
      <p>React Hooks, introduced in React 16.8, revolutionized how we write React components. They allow you to use state and other React features without writing a class. This post explores some of the most commonly used Hooks:</p>
      <ul>
        <li><strong>useState:</strong> Allows you to add state to functional components.</li>
        <li><strong>useEffect:</strong> Lets you perform side effects in functional components (e.g., data fetching, subscriptions, manually changing the DOM).</li>
        <li><strong>useContext:</strong> Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.</li>
        <li><strong>useReducer:</strong> An alternative to useState for managing more complex state logic.</li>
      </ul>
      <p>We will look at practical examples of how to use these Hooks effectively to build cleaner, more maintainable React applications. Understanding Hooks is crucial for any modern React developer.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png',
    imageAiHint: 'abstract react',
    author: 'Your Name',
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
  },
  {
    slug: 'building-restful-apis-nodejs-express',
    title: 'Building RESTful APIs with Node.js and Express',
    date: '2024-05-10',
    excerpt: 'Learn the fundamentals of creating robust and scalable RESTful APIs using Node.js and the Express.js framework.',
    content: `
      <p>RESTful APIs are the backbone of many modern web applications. Node.js, with its non-blocking I/O model, and Express.js, a minimalist web framework, provide an excellent platform for building efficient APIs.</p>
      <p>This article covers:</p>
      <ul>
        <li>Setting up an Express server.</li>
        <li>Defining routes and handling HTTP methods (GET, POST, PUT, DELETE).</li>
        <li>Middleware for request processing (e.g., authentication, logging).</li>
        <li>Connecting to a database (e.g., MongoDB with Mongoose).</li>
        <li>Error handling and response structuring.</li>
      </ul>
      <p>By the end of this guide, you'll have a solid understanding of how to design and implement RESTful APIs for your projects.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png',
    imageAiHint: 'api network',
    author: 'Your Name',
    tags: ['Node.js', 'Express.js', 'API', 'Backend', 'JavaScript'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
