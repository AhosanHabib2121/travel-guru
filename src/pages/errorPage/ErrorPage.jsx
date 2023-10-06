import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" text-center mt-60">
            <h2 className=" text-2xl font-bold mb-4">{error.statusText}</h2>
            <Link to='/' className=" bg-orange-600 text-white px-3 py-2 rounded-md text-lg font-medium">Go to Home page..</Link>
        </div>
    );
};

export default ErrorPage;