interface IProps {
	component: React.ReactNode
}

export const Header = ({ component }: IProps) => {
	return (
		<div className="p-4 bg-slate-100">
			<p>All kinds of general information here for <strong>every customer</strong></p>
			{component}
			<p>And more information for all customers</p>
		</div>
	)
}