import React from 'react'
import logo from "../assets/images/FirstPageAlienLOGO.svg"
import MainButton  from "./mainButton/mainButton"
import UseLink from "./linksDelay/linksDelay";

export default function Root(): React.JSX.Element {

	const nameBtn: string = 'Start';
	return (
		<>
			<div className="content">
				<img className="logo" src={logo} alt="Logo" />
			</div>
				<UseLink to="/tutorial">
					<MainButton name={nameBtn} /> 
				</UseLink>
		</>
	)
}