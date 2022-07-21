# SEG3125 Project 2 - Acchord

## Personal Information

| Key            | Value                                                 |
|----------------|-------------------------------------------------------|
| Name           | ***REMOVED***                                         |
| Student Number | ***REMOVED***                                             |
| Report Title   | Acchord - Self-hosted Online Music Streaming Platform |

## Previous Experience and Learning Resources

I do have some experience with JavaScript, but I don't have much front-end development experience before. UI design is
almost a start-from-scratch thing for me.

For tutorial material, I was mainly reading about official documentation. For example, Mozilla Developer Network (MDN)
docs are a quality source as a frontend development reference, which contains numerous entries and examples of the
latest standard of HTML/CSS/JavaScript. Official site themselves, like Bootstrap and jQuery, serves as a good reference
for corresponding frameworks. I also leaned a lot of React.js, which brings me a new experience of developing websites.

When I encounter a problem, I usually go to Stack Overflow, which has most of the answers to my confusion, or I would
Google the problem and find the wanted answer.

## Business Service Type

I chose the site to be a self-hosted open-source online music streaming platform. It allows anyone to create a private
room and invite anybody to join in and listen to the playlist together at the same pace.

## Inspiration Sites

* [Uber Eats](https://www.ubereats.com/)
* [Spotify](https://www.spotify.com/ca-en/)

## Original Mockups

* See Brightspace submission `Project 2.pdf`, or `Mockup.pdf` in this repo.
* Personas
    * Josh Nelson
        * 18-year-old high-school student
        * Listen to a lot of music
        * Would like to explore and discover the different taste and kind of music
        * **Goal**: Create a separate button or link where the user can search for music in specific genres and add it
          to their playlist.
    * Bob
        * Elder man
        * Loves listening to music with his friends
        * All of them also have their own favorite songs
        * **Goal**: Allows him and his friends to vote on the next few songs

## Second Iteration

* https://32116324.seg3125-summer-2022-project-2.pages.dev/
* Element that will be changed
    * The vast majority of the elements will be kept for the final design, since from Peergrade feedback, the evaluators
      liked the design and only came up some element that can be added to improve the design.
    * Would do some tiny layout adjustments to make it look better.

## Code for Final Version

* Website: https://seg3125-summer-2022-project-2.pages.dev/
* GitHub Repo: https://github.com/uOttawa-Collabs/SEG3125-Summer-2022-Project-2

## Interactive Process

* Follow instructions
    * Creating/join listening rooms
        * Users can create individual rooms to allow other to join in.
    * Sign in/sign up
        * Users can register a new account on the platform and sign in to get
          personalized experience.
* Absorb information
    * Playing music
        * Everyone can listen to the song that is playing in the room.
* Design
    * Plugins
        * Plugins allow users to design their own music source provider and make the playlist richer.
* Analyze
    * Statistics
        * Platform can generate listening reports based on users’ listening records.
* Communicate
    * Feedback
        * Users can ask questions and give feedback on GitHub issues

## Heuristic Evaluation

* Consistency
    * I used one theme color for all pages throughout the website, which is consistent.
* Familiar Language and Metaphors
    * I considered to adapt the website to different target groups and tried to use words that is as simple as possible,
      which makes the website more user-friendly and operable.
    * I tried to use appropriate amount of promotional language, which could guide user in a more natural way and make
      them feel satisfactory.
* Simple, Aesthetic and Functional Design
    * "Minimalism" is what I've been carried out throughout the website. I tried to take out all noise information and
      disturbance from the user, and bring the most useful functionalities to the user's attention.
    * The website is rich of negative spaces, which may reduce the burden on user's brain and may make them more
      focused.
* Freedom and Control
    * The freedom and control is overall good. The whole website could be navigated by browser's native history stack.
    * I tried to avoid adding "Back" buttons in the page, since it duplicates the functionality of native history stack.
      Eliminating these buttons could release more space that can be used on other elements or negative spacing.
* Flexibility
    * Flexibility is what this website is lack of. I did not implement any shortcuts for the user due to time
      constraints. There is only clickable buttons for user.
* Recognition over Recall
    * The amount of text paragraph is reduced to the minimum. Each page does not require user to carry out heavy
      reading.
* Clear Status
    * The page is responsive thanks to the React Router. Single page application provides almost no latency after the
      page is loaded. Users may enjoy the swift and snappy browsing experience.
* Error Prevention
    * I did not do a lot of error checking for input fields, still due to the time constraint. I performed simple
      checks, like validating if the input box is empty.
* Error Recovery
    * I tried to make errors have the least chance to happen. But I seemed to ignore the situation where the network
      fails. User could experience white screen due to network errors. So error recovery is not that good for the
      website.
* Help
    * Since it is to be an open-source software platform, users could post there questions in GitHub issues and get
      community support.

## Appendix 1 - Personas Contributions

* Johnson
    * Fitness enthusiast
    * Likes to play various kind of sports
    * Don't have much money to buy all the gears he loves
    * Relation: Johnson would use the website as a one-stop sport gear online shopping center
    * Goal: The website could add options for lending gears or selling quality second-hand gears for people that want to
      save money.
* Matt
    * White-collar worker
    * Working remotely at home
    * Don't have coffee machine in his house yet
    * Relation: Matt would order some coffee for his breakfast everyday.
    * Goal: The website could add a monthly-pass for regular users like Matt, so that they don't have to order coffee
      manually everyday.
* James
    * Loves football
    * Does not have much football accessories in his house
    * Need a coach to teach him expertise
    * Relation: James would book football courses online and enjoy facilities in the gym
    * Goal: Perform a monitored activity. Each gym member could track their training time on the website (based on
      online accounts).

## Appendix 2 - Heuristic Evaluations

* FootNova: Online Shoe Shop
    * Consistency
        * Some layout consistency could be improved. The page for "Home", "Shop", and "Sign Up" uses different font
          sizes, and the widths of green banner are also different.
    * Simple, Aesthetic, Functional Design
        * The sign-up page looks a bit crowded, and the layout of the form and submit button can be improved.
* Tales Kingdom: Barber Shop
    * Error Prevention
        * In the help page, the error prevention could be improved. For example, the email field could be validated.
    * Error Recovery
        * The website don't have errors when I navigate between pages, so I cannot judge for error recovery.
        * The 404 page is the default style for GitHub pages, but could be customized to match the style of the site.
