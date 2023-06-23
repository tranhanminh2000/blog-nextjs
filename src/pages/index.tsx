import LandingPage from '@/common/components/layouts/landing-page'
import { getPostCollection } from '@/utilities/data-handler'
import Link from 'next/link'

export async function getStaticProps() {
  let posts = await getPostCollection();
  return {
    props: {
      posts: posts
    }
  }
}

export default function Home({ posts }: any) {

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
                <div key={post.id}>
                  <div className="post-preview">
                    <Link href={`/post/${post.id}`}>
                      <h2 className="post-title">
                        {post.title}
                      </h2>
                      {post.subTitle ? (<h3 className="post-subtitle">{post.subTitle}</h3>) : "null"}
                    </Link>
                    <p className="post-meta">Posted by <Link href="#">{post.postedBy}</Link> on {post.createdAt}</p>
                  </div>
                  <hr />
                </div>
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
