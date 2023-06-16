import LandingPage from "@/common/components/layouts/landing-page";
import Link from "next/link";

const HomePage = () => {
    return (
        <LandingPage>
            <header className="intro-header" style={{ backgroundImage: "url('img/home-bg.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <hr className="small" />
                                <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="post-preview">
                            <Link href="/post">
                                <h2 className="post-title">
                                    Man must explore, and this is exploration at its greatest
                                </h2>
                                <h3 className="post-subtitle">
                                    Problems look mighty small from 150 miles up
                                </h3>
                            </Link>
                            <p className="post-meta">Posted by <Link href="#">Start Bootstrap</Link> on September 24, 2014</p>
                        </div>
                        <hr />
                        <div className="post-preview">
                            <Link href="/post">
                                <h2 className="post-title">
                                    I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                                </h2>
                            </Link>
                            <p className="post-meta">Posted by <Link href="#">Start Bootstrap</Link> on September 18, 2014</p>
                        </div>
                        <hr />
                        <div className="post-preview">
                            <Link href="/post">
                                <h2 className="post-title">
                                    Science has not yet mastered prophecy
                                </h2>
                                <h3 className="post-subtitle">
                                    We predict too much for the next year and yet far too little for the next ten.
                                </h3>
                            </Link>
                            <p className="post-meta">Posted by <Link href="#">Start Bootstrap</Link> on August 24, 2014</p>
                        </div>
                        <hr />
                        <div className="post-preview">
                            <Link href="/post">
                                <h2 className="post-title">
                                    Failure is not an option
                                </h2>
                                <h3 className="post-subtitle">
                                    Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                                </h3>
                            </Link>
                            <p className="post-meta">Posted by <Link href="#">Start Bootstrap</Link> on July 8, 2014</p>
                        </div>
                        <hr />
                        <ul className="pager">
                            <li className="next">
                                <Link href="#">Older Posts &rarr;</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
        </LandingPage >
    )
}
export default HomePage;