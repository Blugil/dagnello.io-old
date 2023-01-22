import React from "react"; 
import {Helmet} from "react-helmet"
import {Link} from "gatsby";
import "../../articles/articles.css"
import BackButton from "../../articles/back_button/back_button";


const Article = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>My Solution to New Year's Resolutions
My Solution to New Years Resolutions | Dominick Agnello</title>
            </Helmet>
            <div className='article-container'>
                <div className='entry'>
                    <BackButton />
                    <h1 id='my_solution_to_new_years_resolutions'>My Solution to New Year's Resolutions
My Solution to New Years Resolutions</h1>
                    <div className="small">
                        <small>by <Link to="/">Dominick Agnello</Link></small>
                        <small> | Thu, 19 Jan 2023 15:54:59 -0700</small>
                    </div>
                    <div>
                      <p>
                        
                      </p>
                    </div>
                    <footer>
                        <small>by <Link to="/">Dominick Agnello</Link></small>
                        <small> | Thu, 19 Jan 2023 15:54:59 -0700</small>

                    </footer>
                </div>
            </div>
        </React.Fragment>
    )

}

 export default Article
