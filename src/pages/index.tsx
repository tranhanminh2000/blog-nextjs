import LandingPage from '@/common/components/layouts/landing-page'
import Link from 'next/link'

export default function Home() {
  let posts = []

  return (
    <LandingPage>
      <header className="intro-header" style={{ backgroundImage: "url('/img/home-bg.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="site-heading">
                <h1>Pre-rendering Blog</h1>
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
            {posts.map((post: any) => {
              return (
                <>
                  <div className="post-preview">
                    <Link href={`/api/posts/${post.id}`}>
                      <h2 className="post-title">
                        {post.title}
                      </h2>
                      {post.subTitle ? (<h3 className="post-subtitle">{post.subTitle}</h3>) : "null"}
                    </Link>
                    <p className="post-meta">Posted by <Link href="#">{post.postedBy}</Link> on {post.date}</p>
                  </div>
                  <hr />
                </>
              )
            })}

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
