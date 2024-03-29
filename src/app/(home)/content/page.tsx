"use client"
import ClientTypeAnimation from '../../utils/ClientTypeAnimation'
import OnScroll from '../../utils/OnScroll'
import Link from 'next/link'
import Gallery, { GalleryImage } from '../../ui-components/Gallery'
import { useEffect } from 'react'
import { basePath } from '@/app/utils/url-helpers'

import pancakes from '../../../../public/assets/images/pancakes.jpg'
import mountains from '../../../../public/assets/images/mountains.png'
import miniature from '../../../../public/assets/images/miniature.png'
import cube from '../../../../public/assets/images/cube.png'
import weightless from '../../../../public/assets/images/weightless.jpg'
import exterior from '../../../../public/assets/images/exterior.png'
import exterior2 from '../../../../public/assets/images/exterior2.png'
import bathroom from '../../../../public/assets/images/bathroom2.jpg'
import interior4 from '../../../../public/assets/images/interior4.png'

export default function Home() {
    useEffect(() => {
        document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <main id="content" className="px-5 flex-col max-w-4xl mx-auto">
            <OnScroll>
                <h1 className="font-bold font-display text-4xl pb-10">
                    <ClientTypeAnimation
                        sequence={["~> About ", 250, "~> About Me", 1000]}
                    />
                </h1>
            </OnScroll>
            <p className="text-xl text-justify">
                I guess you could call me a <b>Software Engineer</b>,
                but that&apos;s not the only thing I&apos;d like to do with my career...
                <br /><br />Aside from writing code across the <b>full-stack</b>, I&apos;m also interested
                in <b>computer architecture, deep learning</b> and all things <b>CGI & Design</b>
                .
            </p>
            <a href={`${basePath}/assets/documents/CV.pdf`}>
                <div className="mx-auto w-32 text-center font-display text-sm border-solid border-b-4 hover:bg-slate-200 hover:text-black transition-colors duration-150 cursor-pointer p-3 m-16">
                    download resume
                </div>
            </a>
            <OnScroll>
                <h1 className="font-bold font-display text-4xl pb-10"><ClientTypeAnimation
                    sequence={["~> GRApHics &", 250, "~> GRApHics & desiG•N", 1000]} />
                </h1>
            </OnScroll>
            <p className="pb-8 text-xl text-justify">
                Inspired by the insane home-cooked VFX made by youtubers like <b>Corridor Digital</b> and <b>Freddie Wong</b>,
                I decided to try it out for myself. I quickly fell down the digital rabbit hole of CGI and inhaled everything.
                <br /><br />I find enjoy that it&apos;s technical while also letting my creativity and imagination shine through.
                I&apos;m especially interested in composition and colour theory,
                because of the transferrable uses is has across photography, design, film, rendering etc.
                <br /><br />
                Anyway, here&apos;s some 3D renders I made in my spare time...
            </p>
            <div className="w-full flex flex-col items-center">
                <Gallery>
                    <Link href="/view/pancakes"><GalleryImage src={pancakes} /></Link>
                    <Link href="/view/weightless"><GalleryImage src={weightless} /></Link>
                    <Link href="/view/miniature"><GalleryImage src={miniature} /></Link>
                    <Link href="/view/cube"><GalleryImage src={cube} /></Link>
                    <Link href="/view/mountains"><GalleryImage src={mountains} /></Link>
                    <Link href="/archviz" scroll={false}><GalleryImage src={exterior} /></Link>
                    <Link href="/archviz" scroll={false}><GalleryImage src={exterior2}></GalleryImage></Link>
                    <Link href="/archviz" scroll={false}><GalleryImage src={bathroom}></GalleryImage></Link>
                    <Link href="/archviz" scroll={false}><GalleryImage src={interior4}></GalleryImage></Link>
                </Gallery>
                <Link href="/archviz" scroll={false}>
                    <div className="w-32 text-center font-display text-sm border-solid border-4 hover:bg-slate-200 hover:text-black transition-colors duration-150 cursor-pointer p-1 m-16">
                        archviz gallery
                    </div>
                </Link>
            </div>

            <div className="h-screen w-full text-center py-8">
                <div className="text-9xl pb-8 font-display">WIP</div>
                <div> Unfortunately, this page is still a work in progress. <br /> In the meantime, feel free to check me out on one of my socials: </div>
                <div className="flex-row flex justify-center">
                    <a href="https://github.com/tipex360" target="_blank" rel="noopener noreferrer">
                        <svg className="fill-slate-50 hover:fill-slate-400 transition-colors my-2 mx-3" width="50px" height="50px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/tymsusz/" target="_blank" rel="noopener noreferrer">
                        <svg className="fill-slate-50 hover:fill-slate-400 transition-colors my-2 mx-3" width="50px" height="50px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/_tymsusz.renders/" target="_blank" rel="noopener noreferrer">
                        <svg className="fill-slate-50 hover:fill-slate-400 transition-colors my-2 mx-3" width="50px" height="50px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                    </a>
                </div>
            </div>
        </main>
    )
}
