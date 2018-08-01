import { Service } from '../core';
import douban_api from '../constants/douban_api';
import http from '../helper/http';
class ArticleService extends Service {
  async article_list({ start, count }) {
    const result = await http({
      url: douban_api.movie_250,
      params: {
        start,
        count
      }
    });
    return result;
  }
  async article_item(item_id) {
    const content = `
    <p>By Nicole Chavez and Janet DiGiacomo, CNN</p>
    <p>Updated 3:36 AM ET, Wed August 1, 2018 </p>
    <p>Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.</p>
    <div class="article-image-container">
        <figure>
            <div class="media-outer-container" style="width:460px">
                <div class="media-container" style="padding-bottom:56.30434782608695%;">
                    <img class="image" src="//p0.ipstatp.com/large/005b616431d2c094e8cc">
                </div>
            </div>
        </figure>
    </div>
    <p>(CNN)A white police officer in Michigan who says he was taunted by fellow officers when he told them that he was part black will receive a $65,000 settlement, his attorney said.</p>
    <p>Sgt. Cleon Brown, a 19-year veteran with the police department in Hastings, Michigan, said a series of taunts began in 2016 when he took a genetic test through Ancestry.com and learned that he was 18% African.</p>
    <p>His colleagues at the police department were whispering "Black Lives Matter" while pumping their fists as they walked past him and his police chief referred to him as "Kunta," he said. (Kunta Kinte is a character in Alex Haley's novel, "Roots: The Saga of an American Family.")</p>
    <p>"It was almost like a disgraced type of reaction that I got from them like, 'Why are you proud of this type of thing?'," he told CNN affiliate WDIV.</p>
    <p></p>
    <h3>The Santa head</h3>
    <div class="article-image-container">
        <figure>
            <div class="media-outer-container" style="width:460px">
                <div class="media-container" style="padding-bottom:56.30434782608695%;">
                    <img class="image" src="//p0.ipstatp.com/large/0059147c3e19c0a32daa">
                </div>
            </div>
        </figure>
    </div>
    <p>Around Christmas 2016, someone placed a black Santa head in his Christmas stocking. It had "18%" written on its beard, the suit says.</p>
    <p>"I call it straight up racism," Brown told the affiliate.</p>
    <p>The city rebuts the officer's claims.</p>
    <p>"During this most recent holiday season, a good friend of Brown found a tan color ceramic Santa head sitting in his own stocking with "18%" written on it. Not knowing where it came from and knowing his friendship with Brown, the officer placed it in Brown's stocking," the city statement said.</p>
    <p>It goes on to say: "The officer who placed the Santa in Brown's stocking then went to Brown to apologize for doing so, since he heard that Brown was upset about the incident."</p>
    <p></p>
    <h3>Officer plans to leave city</h3>
    <p>Brown's attorney says his client is disappointed with the outcome.</p>
    <p>As part of the settlement, Brown will continue receiving salary and benefits through October 31, but he can't seek future employment with the city of Hastings, his attorney Karie Boylan said.</p>
    <p>The officer is planning to sell his home and look for employment outside of the city. </p>
    <p>"They didn't want this to be a big case. He was hoping that by filing the complaint the harassment would be over, but it wasn't," Boylan said.</p>
    <p></p>
    <h3>City had disputed claim</h3>
    <p>Prior to the settlement, the city had disputed Brown's claims and claimed the officer "joked" about the results of the genetic test with colleagues:</p>
    <p>"Other officers have stated that after Brown first told them about the test results they never approached him about it again. Instead, it was Brown who specifically went to other officers, raised the topic, joked about it, and engaged in typical racial stereotypes. Clearly, Sgt. Brown welcomed his interaction with other officers on this topic."</p>
    <p>In a statement about the settlement, Hastings city manager Jeff Mansfield said the lawsuit did not have merit.</p>
    <p>"The city did not believe the lawsuit had merit. But when comparing the settlement to the cost and disruptive effect of defending the case. It was in the city's best interest to resolve the case on the terms in the mediated settlement agreement," Mansfield said in a statement to CNN affiliate WWMT.</p>
    <p>CNN's Joe Sutton contributed to this report.</p>
    <ul>
        <h2>Content by LendingTree</h2>
    </ul>
    <ul>
        <h2>Paid Partner Content</h2>
    </ul>
</div>
</div>
    `;
    const result = await {
      title: 'good article',
      content,
      item_id
    };
    return result;
  }
}
export default ArticleService;
