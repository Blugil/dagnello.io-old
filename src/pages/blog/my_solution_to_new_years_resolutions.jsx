import React from "react"; 
import {Helmet} from "react-helmet"
import {Link} from "gatsby";
import "../../articles/style.css";
import BackButton from "../../articles/back_button/back_button";


const Article = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>My Solution to New Year's Resolutions | Dominick Agnello</title>
            </Helmet>
            <div className='article-container'>
                <div className='entry'>
                    <BackButton />
                    <h1 id='my_solution_to_new_years_resolutions'>My Solution to New Year's Resolutions</h1>
                    <div className="small">
                        <small>by <Link to="/">Dominick Agnello</Link></small>
                        <small> | Sun, 09 Jan 2022 15:28:47 -0700</small>
                    </div>
                    <div>
                    <p> This is a rough draft </p>

                    </div>
                    <footer>
                        <small>by <Link to="/">Dominick Agnello</Link></small>
                        <small> | Sun, 09 Jan 2022 15:28:47 -0700</small>

                    </footer>
                </div>
            </div>
        </React.Fragment>
    )

}

 export default Article