import './main.css';
import './styles.css';
import grow from '../assests/images/illustration-grow-together.svg';
import flow from '../assests/images/illustration-flowing-conversation.svg';
import yours from '../assests/images/illustration-your-users.svg';


function Main() {
    return(
        <section>
        <div class="row col-xl-10 col-lg-10">
            <div class="row-1B col-xl-4 col-12">
                <h2 class="col-12">Grow Together</h2>
                <p class="p-2 col-12">Generate meaniful discussion with your audience and build a strong, loyal community. Think of the insightful conversation you miss out on with a feed back form.</p>

            </div>
            <div>
                <img class="image-4" src={grow} alt=""/>
            </div>
        </div>
        <div class="row  col-xl-10 col-lg-10">
            <div>
                <img class="image-4" src={flow} alt=""/>
            </div>
            <div class="row-2B col-xl-4 col-12">
                <h2>Flowing Conversation</h2>
                <p class="p-2">You wouldn't paginate a conversation in real life, so why do it online? Our thrads have just-in-time loading, for a more natural flow.</p>

            </div>
        
        </div>
        <div class="row  col-xl-10 col-lg-10">
            <div class="row-3B col-xl-4 col-12">
                <h2>Your Users</h2>
                <p class="p-2">It take no time at all to integrate huddle with your app's authentification solution. This means once you sign into your app, your user can start chatting immediately.</p>

            </div>
            <div>
                <img class="image-4" src={yours}alt=""/>
            </div>

        </div>
        <div class="none col-md-10 col-sm-10 col-10">
            <div>
                <img class="image-4n" src={grow} alt=""/>
            </div>
            <div class="row-1Bn col-xl-4 col-12">
                <h2 class="col-12">Grow Together</h2>
                <p class="p-2 col-12">Generate meaniful discussion with your audience and build a strong, loyal community. Think of the insightful conversation you miss out on with a feed back form.</p>

            </div>
        </div>
        <div class="none col-md-10 col-sm-10 col-10">
            <div>
                <img class="image-4n" src={flow} alt=""/>
            </div>
            <div class="row-1Bn col-xl-4 col-12 col-xs-12">
                <h2>Flowing Conversation</h2>
                <p class="p-2">You wouldn't paginate a conversation in real life, so why do it online? Our thrads have just-in-time loading, for a more natural flow.</p>

            </div>
        
        </div>
        <div class="none col-md-10 col-sm-10 col-10">
            <div>
                <img class="image-4n" src={yours}alt=""/>
            </div>
            <div class="row-1Bn col-xl-4 col-12">
                <h2>Your Users</h2>
                <p class="p-2">It take no time at all to integrate huddle with your app's authentification solution. This means once you sign into your app, your user can start chatting immediately.</p>

            </div>
        </div>
        <div class="roll col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 col-xs-8">
            <div>
                <h2 class="h2-2">Ready To Build Your Community?</h2>
                <div class="roll-1B col-xl-6 col-lg-6 col-md-6 col-sm-8 col-8 col-xs-8">
                    <p class="p2-2">Get started for free</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Main;