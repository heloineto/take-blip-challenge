import Button from "../Button";

interface Props {
	onRetry?: () => void;
}

const ErrorState = ({ onRetry }: Props) => {
	return (
		<div className="min-h-full pt-16 pb-12">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
				<h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
					Error
				</h1>
				<p className="mt-2 text-base text-gray-500">Something went wrong</p>
				<Button className="mt-6 w-fit" onClick={onRetry}>
					Try again
				</Button>
			</main>
		</div>
	);
};

export default ErrorState;
