const Header = ({title}) => {
    return (
        <div>
            <header
                className="bg-blue-100 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-50"
            >
                {/* Adding breakpoints for phone and monitor */}
                <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-blue-400">{title}</h1>
                </div>
            </header>
        </div>
    )
}

export default Header