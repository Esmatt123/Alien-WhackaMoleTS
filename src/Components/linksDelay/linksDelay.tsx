import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

interface Props {
	to: string 
	children: any
}

// eslint-disable-next-line react/prop-types
export default function UseLink({ to, children}: Props){
	const delayTime = 500
	const [flag, setFlag] = useState(false)
	const navigate = useNavigate()

	const linkDelay = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault()
		setFlag(true)
		setTimeout(()=>{
			
			setFlag(false)
			navigate(to)
		}, delayTime)
	}

	return (
		<>
			<Link to={to} onClick={linkDelay} style={{pointerEvents: flag ? 'none' : 'auto'}}>
				{children}	
			</Link>
		</>
	)
}
