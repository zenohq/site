export default function Hero() {
    return (
        <div className="relative overflow-hidden">
            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32  sm:pl-24 lg:pl-36">
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-lg md:mx-auto lg:col-span-5 lg:text-left">
                            <h1>
                                <span className="mt-1 block text-5xl tracking-tight font-light sm:text-5xl xl:text-6xl">
                                    <span className="block">为快速交付打造的</span>
                                    <span className="block">应用分发平台</span>
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                支持多种语言、框架，无论项目大小，都可以轻松地使用。Zeno 为应用提供开发后的持续集成到分发能力，让创作者专注迭代、快速交付。
                            </p>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <a
                                    href="/docs/getting-started"
                                    className="block w-64 rounded-md border border-transparent px-5 py-3 bg-black text-base font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-10"
                                >
                                    即刻使用
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-7 lg:flex lg:items-center">
                            <svg
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                                width={640}
                                height={784}
                                fill="none"
                                viewBox="0 0 640 784"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                                        x={118}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                            </svg>
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-xl">
                                <iframe
                                    className="relative block w-full bg-white rounded-lg overflow-hidden h-[370px]"
                                    scrolling="no"
                                    src="https://asciinema.org/a/8vCAl9djCAOZ2LY8Qm6mvzewx/iframe?" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
