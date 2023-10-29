export const NormalHeader = ({ fullName }: { fullName: string }) => {
	return (
		<div className="bg-gray-300 my-3 rounded p-2">
			<h1>Normal Header</h1>
			<p>Welcome, {fullName}</p>
		</div>
	)
}