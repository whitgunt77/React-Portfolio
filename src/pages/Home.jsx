import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function Home({ projects }) {
return (
<div>
<section className="mb-10">
<motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-extrabold">Hi — I’m Whitney</motion.h1>
<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 max-w-2xl">Full Stack Web Developer focusing on React, TypeScript, and building delightful user experiences. I build APIs and wire up frontends with strong UX and test coverage.</motion.p>
</section>


<section>
<h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{projects.map(p => (
<motion.article key={p.id} layout whileHover={{ scale: 1.02 }} className="rounded-xl p-4 bg-gray-50 dark:bg-gray-800 shadow">
<img src={p.img} alt="screenshot" className="w-full h-40 object-cover rounded-md mb-3" />
<h3 className="text-lg font-semibold"><Link to={`/projects/${p.id}`}>{p.title}</Link></h3>
<p className="mt-2 text-sm">{p.excerpt}</p>
<Link to={`/projects/${p.id}`} className="mt-3 inline-block underline text-indigo-600">View project</Link>
</motion.article>
))}
</div>
</section>
</div>
)
}
