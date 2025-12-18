import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-teal-600">
                        {/* Example SVG */}
                        <svg
                            className="h-8"
                            viewBox="0 0 118 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.83 19.2047C37.2352..."
                                fill="currentColor"
                            ></path>
                            {/* other paths */}
                        </svg>
                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                        cum itaque neque.
                    </p>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">About</a></li>
                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Careers</a></li>
                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">History</a></li>
                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Services</a></li>
                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Projects</a></li>
                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Blog</a></li>
                    </ul>

                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <span className="sr-only">Facebook</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10..."
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <span className="sr-only">Instagram</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.315 2c2.43 0..."
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <span className="sr-only">Twitter</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0..."></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <span className="sr-only">GitHub</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2..."
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <span className="sr-only">Dribbble</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.48 2..."
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
