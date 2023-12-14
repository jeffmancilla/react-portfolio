import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
	// create state to hold projects
	const [projects, setProjects] = useState(null)

	// make an initial call for the data inside a useEffect, so it only happens once on component load
	useEffect(() => {
		//create function to make api call
		const getProjectsData = async () => {
			//make api call and get response
			const response = await fetch('./projects.json')

			// turn response into javascript object
			const data = await response.json()

			// set the projects state to the data
			setProjects(data)
		}
		getProjectsData()
	}, [])

	// define a function that will return the JSX needed once we get the data
	const loaded = () => {
		return projects.map((project, idx) => {
			project.image = `url(${project.image})`
			return (
				<div className="project" key={idx}>
					<div>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<div>
							<a href={project.live}>
								<button className="primary">live site</button>
							</a>
							<a href={project.git}>
								<button>Github</button>
							</a>
						</div>
					</div>
					<div
						style={{ backgroundImage: project.image }}
						className="project-image"
					></div>
				</div>
			)
		})
	}

	return (
		<>
			<h2>Projects</h2>
			<div className="Projects">{projects ? loaded() : 'Loading'}</div>
		</>
	)
}
export default Projects
