import React from "react"; 
import {Helmet} from "react-helmet"
import {Link} from "gatsby";
import "../../articles/articles.css"
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
                        <small> | Thu, 19 Jan 2023 15:54:59 -0700</small>
                    </div>
                    <div>
                      <p>
                        It's so weird; for some reason it seems like every calendar on earth just skipped the year 2022, which is crazy, right...? Ahem... Anyway, coming a bit late into the new year and including last year, I've started taking a new approach to "new year's resolutions" and how to go about them, and the truth is: goals are hard. They're really hard. And they're especially hard because if you mess up, it feels like failure. I've always been bad at keeping my resolutions going, but I think now I've got a good system going that I'd like to share.
                      </p>
                      <p>
                        Themes. That's the answer, so you can stop reading if you'd like, but to go into it further, I choose to give each year one grand theme and then section the year into four quarters, which each have a smaller theme. "What is a theme?" I hear you ask. It's simple; it's just a guiding idea. Take, for example, a theme of "maintenance" (which was my grand theme last year); now, when you make decisions, try to first think about how it relates to your theme. "I don't want to do the dishes right now, but I want to maintain a clean kitchen," would be an example of an application of a theme.
                      </p>
                      <p>
                        So how is this different from a goal? You cannot fail to complete a theme like you can fail to complete a goal. So many New Year's resolutions are abandoned because "oh, I'm just too busy" or "I was doing something that was too hard," and so taking one day off the goal cascades into dropping it entirely. Themes, however, do not have a "completion," and while some may argue that is a flaw, I argue that is their benefit. It allows you to "cheat" a few days without doing something without feeling like you've just thrown away your goal.
                      </p>
                      <p>
                        The idea is that you make more decisions in the direction of your theme than against it, and by the end of the year, you've done a better job at whatever "thing" you wanted to do than the last year, right? Not everything is about maximizing every day to its fullest potential and completely changing your life with a single thought; sometimes it's only about being a little better than you were the day before.
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
