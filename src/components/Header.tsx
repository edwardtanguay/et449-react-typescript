interface IProps {
	component: React.ReactNode
}

export const Header = ({ component }: IProps) => {
	return (
		<div style={{ backgroundColor: 'yellow' }}>
			<p>All kinds of application information here</p>
			{component}
		</div>
	)
}