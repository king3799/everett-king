export type Project = {
  slug: string;
  title: string;
  desc: string;
  img: string;
};

export const projects: Project[] = [
  { slug: 'task-manager', title: 'Task Management Web App', desc: 'Full-stack task manager using React, Node.js, PostgreSQL.', img: '/project1.png' },
  { slug: 'ecommerce-dashboard', title: 'E-Commerce Dashboard', desc: 'Admin dashboard for managing products and orders.', img: '/project2.png' },
  { slug: 'portfolio-site', title: 'Portfolio Website', desc: 'Responsive portfolio website with SvelteKit and PostgreSQL backend.', img: '/project3.png' },
  { slug: 'project4', title: 'Project 4', desc: 'Description for Project 4', img: '/project4.png' },
  { slug: 'project5', title: 'Project 5', desc: 'Description for Project 5', img: '/project5.png' },
  { slug: 'project6', title: 'Project 6', desc: 'Description for Project 6', img: '/project6.png' }
];