import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

// Navigation bar
const navigation = [
    
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
    { name: 'News & Insights', href: '/news-insights' }, 
    { name: 'Inspections & Repairs', href: '/inspections-and-repairs' },
    { name: 'Architecture & Builds', href: '/architecture-and-builds' },
    
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const handleScroll = (href) => {
        if (href.startsWith('/')) {
            window.location.href = href;
        } else {
            const scrollToSection = () => {
                const element = document.getElementById(href);
                if (element) {
                    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1500; // Duration in milliseconds
                    let start = null;

                    window.requestAnimationFrame(function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const percent = Math.min(progress / duration, 1);
                        const easedPercent = easeInOutCubic(percent);
                        window.scrollTo(0, startPosition + distance * easedPercent);
                        if (progress < duration) {
                            window.requestAnimationFrame(step);
                        }
                    });
                }
            };

            if (window.location.pathname !== '/') {
                window.location.href = `/#${href}`;
                window.addEventListener('load', scrollToSection);
            } else {
                scrollToSection();
            }
        }
    };

    return (
        <>
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6">
                <div className="">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">RK Architect, PA | RK Builders, Inc.</span>
                        <img
                            alt="RK Architect Logo"
                            src="/rk-architect-logo.jpg"
                            className="h-14 sm:h-16 md:h-20 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-8 w-8" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:w-full mr-16">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleScroll(item.href)}
                            className="text-[1.1rem] font-semibold leading-6 text-white cursor-pointer hover:text-[#8E784D] transition-colors duration-300"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1E1412] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">RK Architect, PA | RK Builders, Inc.</span>
                            <img
                                alt="RK Architect Logo"
                                src="/rk-architect-logo.jpg"
                                className="h-14 sm:h-16 md:h-20 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-300"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-300">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            handleScroll(item.href);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#261916] cursor-pointer"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
        </>
    )
}