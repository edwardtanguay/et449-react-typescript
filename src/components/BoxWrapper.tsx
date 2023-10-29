interface IProps {
	children: React.ReactNode;
}

export const BoxWrapper = ({ children } : IProps) => {
	return (
		<div className="boxWrapper bg-slate-400 mt-3 rounded p-4 w-5/12 shadow-sm shadow-black">
			{children}
		</div>
	)
}