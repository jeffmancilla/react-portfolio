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
						<h2>{project.name}</h2>
						<p>{project.description}</p>
						<div>
						</div>
						<div>
							<a href={project.live} target="_blank" rel="noreferrer">
								<button className="primary" title="Link to app (new window)">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 2048 2048"
									>
										<path
											fill="currentColor"
											d="M2048 0v1664h-384v384H0V384h384V0zm-128 1536V128H512v256h256v128H128v1408h1408v-640h128v256zm-979-339l-90-90l594-595h-421V384h640v640h-128V603z"
										/>
									</svg>
								</button>
							</a>
							<a href={project.git}>
								<button title="GitHub repo (new window)">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 2048 2048"
									>
										<path
											fill="currentColor"
											d="M1024 25q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 165-50 318t-143 281t-221 224t-286 149q-3 1-9 1t-9 1q-24 0-38-14t-14-37v-140q0-69 1-141q0-51-15-103t-54-87q116-13 203-47t146-96t88-150t30-212q0-78-26-147t-79-128q11-28 16-58t5-60q0-39-8-77t-23-76q-5-2-11-2t-11 0q-32 0-67 10t-69 26t-67 35t-57 36q-125-35-256-35t-256 35q-25-17-57-36t-66-34t-70-26t-67-11h-11q-6 0-11 2q-14 37-22 75t-9 78q0 30 5 60t16 58q-53 58-79 127t-26 148q0 122 29 211t88 150t146 97t203 48q-29 26-44 62t-21 75q-27 13-57 20t-60 7q-64 0-106-30t-75-82q-12-19-29-38t-37-34t-43-24t-48-10h-12q-8 0-15 3t-14 6t-6 10q0 12 14 23t23 18l3 2q22 17 38 32t30 33t23 38t23 47q34 78 95 113t147 36q26 0 52-3t52-9v174q0 24-14 38t-39 14h-8q-5 0-9-2q-157-51-286-147t-221-225t-142-282t-51-318q0-141 36-272t104-244t160-207t207-161T752 62t272-37"
										/>
									</svg>
								</button>
							</a>
						</div>
					</div>
					<div
						style={{ backgroundImage: project.image }}
						className="project-image" id={`a${idx}`}
					></div>
				</div>
			)
		})
	}

	return (
		<>
			<h1>Projects</h1>
			<div className="Projects">{projects ? loaded() : <p>loading...</p>}</div>
		</>
	)
}
export default Projects
