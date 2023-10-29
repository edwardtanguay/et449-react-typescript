export const VipHeader = ({ fullName }: { fullName: string }) => {
	return (
		<div className="bg-green-300 border-green-700 border-4 my-2 text-blue-900 font-bold border rounded p-2">
			<h1>VIP Header</h1>
			<p>Welcome, {fullName}</p>
			<p>extra VIP information</p>
		</div>
	)
}