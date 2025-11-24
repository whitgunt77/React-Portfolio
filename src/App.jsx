import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function App() {
const [dark, setDark] = useState(() => {
const saved = localStorage.getItem('theme')
return saved ? JSON.parse(saved) : true
})


useEffect(() => {
const root = document.documentElement
if (dark) root.classList.add('dark')
else root.classList.remove('dark')
localStorage.setItem('theme', JSON.stringify(dark))
}, [dark])


const projects = [
{ id: 'recipe', title: 'Recipe Sharing Platform', excerpt: 'Full-stack recipe app with CRUD, Yup validation, and tests', img: '/assets/recipe.png' },
{ id: 'tasks', title: 'Task Management Dashboard', excerpt: 'Drag-and-drop task app with reusable components', img: '/assets/tasks.png' },
{ id: 'weather', title: 'Weather Forecast App', excerpt: 'Real-time and 5-day forecasts with API integration', img: '/assets/weather.png' },
{ id: 'budget', title: 'Budget Tracker', excerpt: 'Track income & expenses with visual breakdowns', img: '/assets/budget.png' }
]


return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
<header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
<Link to="/" className="text-2xl font-bold">Whitney Gunter</Link>
<div className="flex items-center gap-4">
<a href="/mnt/data/Whitney_Gunter_Resume.docx" className="hidden sm:inline-block underline">Resume</a>
<button
aria-label="Toggle dark mode"
onClick={() => setDark(d => !d)}
className="p-2 rounded focus:outline-none focus:ring"
>
{dark ? <SunIcon /> : <MoonIcon />}
</button>
</div>
</header>


<main className="max-w-6xl mx-auto p-6">
<AnimatePresence mode="wait">
<Routes>
<Route path="/" element={<Home projects={projects} />} />
<Route path="/projects/:id" element={<ProjectPage projects={projects} />} />
</Routes>
</AnimatePresence>
</main>


<footer className="max-w-6xl mx-auto p-6 text-center text-sm opacity-80">© {new Date().getFullYear()} Whitney Gunter</footer>
</div>
)
}
