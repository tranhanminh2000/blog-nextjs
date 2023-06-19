import LandingPage from "@/common/components/layouts/landing-page";
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
    const { id } = context.query
    let response = await fetch(`${process.env.HOST_NAME}/api/posts/${id}`).then(response => response.json())

    if (!response.post) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            }
        }
    }

    return {
        props: {
            post: response.post ? response.post : null
        },
    }
}

const PostPage = ({ post }) => {

    return (
        <LandingPage>
            <header className="intro-header" style={{ backgroundImage: "url('/img/post-bg.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="post-heading">
                                <h1>Man must explore, and this is exploration at its greatest</h1>
                                <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
                                <span className="meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" dangerouslySetInnerHTML={{ __html: post.text }}>
                        </div>
                    </div>
                </div>
            </article>

            <hr />
        </LandingPage >
    );
};

export default PostPage;