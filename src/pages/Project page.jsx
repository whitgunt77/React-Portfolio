import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function ProjectPage({ projects }) {
const { id } = useParams()
const project = projects.find(p => p.id === id)
if (!project) return <div>Project not found</div>


return (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
<Link to="/" className="underline">← Back</Link>
<h1 className="text-3xl font-extrabold">{project.title}</h1>
<img src={project.img} alt={`${project.title} screenshot`} className="w-full max-h-72 object-cover rounded-md shadow" />


<section>
<h2 className="text-xl font-bold">Overview</h2>
<p className="mt-2">{project.excerpt}. Built with React, Axios, Yup, and tested with Jest. Deployed on Vercel.</p>
</section>


<section>
<h3 className="text-lg font-semibold">Key features</h3>
<ul className="list-disc ml-5 mt-2">
<li>Responsive design</li>
<li>API integration and error handling</li>
<li>Form validation with Yup</li>
<li>Unit and integration tests with Jest</li>
</ul>
</section>


<section>
<h3 className="text-lg font-semibold">Core code</h3>
<pre className="bg-black text-green-400 p-4 rounded">{`// example axios call
await axios.get('/api/recipes')`}</pre>
</section>


</motion.div>
)
}
