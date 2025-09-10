import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return(
        <div className="flex flex-col items-center justify-center my-auto h-screen space-y-6">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-4xl font-semibold">This Page is Not Ready Yet!</p>

            <Link
            className="bg-gray-400 p-3 rounded-xl hover:bg-gray-200 transition-" 
            to={'/'}>
                Homepage
            </Link>
        </div>
    )
}