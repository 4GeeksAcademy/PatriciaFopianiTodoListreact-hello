import React, { useState } from "react";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");

	const addTask = (e) => {
		if (e.key === "Enter" && input !== "") {
			setTasks([...tasks, input]);
			setInput("");
		}
	};

	const deleteTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="container">
			<h1 className="title">TODOS</h1>

			<ul className="list">
				<li>
					<input
						type="text"
						placeholder="What needs to be done?"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={addTask}
					/>
				</li>

				{tasks.length === 0 && (
					<li className="empty">
						No hay tareas, añadir tareas
					</li>
				)}

				{tasks.map((task, index) => (
					<li key={index} className="task">
						{task}
						<span
							className="delete"
							onClick={() => deleteTask(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>

			<div className="counter">{tasks.length} item left</div>
		</div>
	);
};

export default Home;
