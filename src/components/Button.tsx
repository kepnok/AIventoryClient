import  { type ReactElement } from 'react'

interface ButtonProps {
	text: string,
	startIcon?: ReactElement,
	variant: "primary" | "secondary",
	onClick?: () => void,
	size: "sm"|"md"|"lg"
}

const variant = {
	"primary": "bg-blue-600 hover:bg-blue-400 text-white border-2 border-blue-600 hover:border-blue-400",
	"secondary": "bg-white bg-gray-100 text-gray-500 hover:text-gray-300 border-2 border-gray-300"
}

const size = {
	'sm' : "text-sm px-2 py-1 ",
	'md' : "text-md px-4 py-1",
	'lg' : "text-lg px-6 py-2"
}

export function Button(props : ButtonProps) {
  return <>
		<div className="">
			<button className={`px-4 py-2 rounded cursor-pointer ${variant[props.variant]} ${size[props.size]} flex justify-center items-center gap-2`} onClick={props.onClick}>
				{props.startIcon && <div >
					{props.startIcon}
				</div>}
				{props.text}
			</button> 
		</div>
	</>
  
}
