document.addEventListener("DOMContentLoaded", () => {
  const data = {
    0: {
      section: "branding",
      component_id: 3,
      component_name: "7P's marketing mix",
      description:
        "The 7P's Marketing Mix empowers businesses to craft a holistic strategy by integrating Product, Price, Place, Promotion, People, Process, and Physical Evidence, ensuring optimal customer engagement and business growth.\n",
      validations: [
        {
          tab: "",
          detail:
            "Any Reference Brands(Optional):sed for giving reference brands to AI for better results.\nInclude Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!",
        },
      ],
      logo_url: "images/7ps.png",
    },
    1: {
      section: "perfomance_marketing",
      component_id: 23,
      component_name: "Abandoned Cart",
      description:
        "Abandoned Cart is a strategic tool that re-engages online shoppers through reminder emails and discounts, boosting conversion rates by encouraging them to return and complete their purchase for enhanced customer experience and sales growth.",
      validations: [
        {
          tab: "",
          detail: `Cart Image:used for giving reference about Cart to AI 
Tone(Optional):Defines Tone of the output AI generates
Target Audience(Optional):Helps AI define the Target Audience /People for better understanding.
Brand/Store Name(Optional):Used to define Brand/Store Name so AI can give Brand/Store specific answers;
Incentives(OPtional):Incentives you would like the AI to add like any discounts, free shipping, or special promotions to encourage purchase completion.
Preferred Communication Channels(Optional):It is used to instruct AI to give content according to preferred way communication like email,sms,push notifications etc.
Keywords(Optionla):Keywords are used for suggesting and improving SEO or product focus.`,
        },
      ],
      logo_url: "images/abondoned_cart.png",
    },
    2: {
      section: "perfomance_marketing",
      component_id: 32,
      component_name: "Ad creator",
      description:
        "The AD Creator is a versatile tool that simplifies ad design, customization, and deployment across platforms, combining user-friendly interfaces, advanced targeting, and powerful analytics to maximize engagement and achieve marketing goals.\n",
      validations: [
        {
          tab: "Google Ad Creator/Facebook Ad Creator",
          detail: `Tabs:User can toggle between Google and Facebook specific Ad Creator.
      Target Audience(Optional):Helps AI define the Target Audience /People for better understanding.
      Ad Extensions(Optional):It helps user add extra information like sitelinks,callbuttons etc to add more context.
      Visual Cues(Optional):It defines visual aspect of the Ad eg theme ,images, or key display element to attract elements.
      Additional Details(Optional):Enter any specific or extra information related to the Ad.
      Tone(Optional):Defines Tone of the output AI generates.
      Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/ad_creator.png",
    },
    3: {
      section: "copywriting",
      component_id: 18,
      component_name: "Article writer",
      description:
        "The Article Writer combines the skills of outlining and crafting content, ensuring each section is logically structured, informative, and engaging, for coherent and compelling articles that meet editorial standards.",
      validations: [
        {
          tab: "Article Section Writer",
          detail: `Tabs:User can toggle between type of article section or outline specific content.
	  				Article Outline(Optional):User can provide a brief or structure of the outline of the article than help generate better repsonses.
					Max Word Count(Optional): User can set a maximum word count for the article.
					Specific Brief: User can provide a detailed brief or key points to focus on for the article.
					Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
        {
          tab: "Article Outline Writer",
          detail:
            "Article Template(Optional):Briefly describe the topic or main idea of the article.\nArticle Template(Optional):Select from given templates.\nInclude Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!",
        },
      ],
      logo_url: "images/article_writing.png",
    },
    4: {
      section: "branding",
      component_id: 33,
      component_name:
        "Audience, tone of voice, personality, colour palettes & font options",
      description:
        "This comprehensive branding toolkit refines your marketing strategy by identifying your audience, establishing a unique tone of voice, and selecting cohesive color palettes and font options, ensuring effective brand communication and stronger market connection.\n",
      validations: [
        {
          tab: "",
          detail: `Brand Brief (Optional): User can summarize the brand, including its mission, values, and key messaging.`,
        },
      ],
      logo_url: "images/audience_tone.png",
    },
    5: {
      section: "copywriting",
      component_id: 25,
      component_name: "Blog writer",
      description:
        "The Blog Writer crafts engaging and informative content, blending expertise and SEO strategies to drive traffic and enhance online presence, ultimately boosting a brand's content marketing success.",
      validations: [
        {
          tab: "",
          detail: `Blog Topic*: User can specify the main topic or theme of the blog.
Main Keyword (Optional): User can enter a primary keyword for SEO optimization.
List of Keywords (Optional): User can provide additional SEO keywords for inclusion.
Keyword Density of Main Keyword (Percentage) (Optional): User can set the desired percentage for the keyword density.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/blog_writer.png",
    },
    6: {
      section: "copywriting",
      component_id: 22,
      component_name: "Brochure",
      description:
        "The Brochure is a versatile marketing tool that combines engaging visuals and concise text to promote products, services, or events, effectively communicating brand value through both print and digital formats.",
      validations: [
        {
          tab: "",
          detail: `Purpose of the Brochure*: State intended use or purpose.
Page Count (Optional): Specify the desired number of pages for the brochure.
Preliminary Content Structure (Optional): Outline brochure sections.
Distribution Channel (Optional): Specify where and how the brochure will be distributed (e.g., online, printed, at events).`,
        },
      ],
      logo_url: "images/brochure.png",
    },
    7: {
      section: "socialmedia",
      component_id: 43,
      component_name: "Buyers journey touchpoint",
      description:
        "Buyer's Journey Touchpoints is a powerful tool that maps and analyzes customer interactions throughout the purchase process, providing insights to optimize marketing strategies, enhance customer experiences, and drive business growth.",
      validations: [
        {
          tab: "",
          detail: `Product/Service Information*: Key features and benefits, Unique selling proposition, Price point and positioning.
Target Audience (Optional): Who is your audience? e.g., demographics, preferences, and pain points of the target customers.
Marketing Channels (Optional): Select from given options (e.g., social media, email, content marketing).
Industry Landscape (Optional): What industry are you in, and what does the competitive landscape look like? Identify key competitors, emerging industry trends, and shifts in consumer behaviour or technological advancements relevant to your market.
Tone (Optional): Specify the tone (e.g., professional, conversational, formal).
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/buyers_journey.png",
    },
    8: {
      section: "essential",
      component_id: 36,
      component_name: "Campaign strategy & budget planning",
      description:
        "The Campaign Strategy and Budget Planning tool empowers businesses to craft year-round digital marketing strategies, leveraging daily insights, market trends, and consumer behavior for maximum ROI. Seamlessly integrating channels like SEO, social media, and PPC, it ensures continuous engagement, growth, and measurable success in the digital landscape.\n",
      validations: [
        {
          tab: "Budget Planning",
          detail:
            "Campaign Name (Optional): A unique name for the campaign to easily track and manage its progress.\nHook Words(Optional):The catchy word or slogan that captures attention.\nGoals:Enter specific objectives or outcomes the campaign intends to achieve.Target Audience(Optional):Enter who is your audience?i.e demographics,preferences etc.\nMarket Research and Information(Optional):Enter things like customer trends , key insights, etc.\nTactics(Optional):Strategies or actions planned to engage the audience and drive campaign success.\nSales Channel:Channels through which the product service will be sold (select from given options).\nMetrics:Enter key perfomance indicators to track the campaign success.\nTotal Budget(Optional):Enter total amount allocated to the campaign execution.\nCampaign Duration-Start Date(Optional):Start of the campaign.\nCampaign Duration-End Date(Optional):Enter end of the Campaign.\nTone (Optional): Desired communication style (e.g., professional, conversational) to maintain consistency across the campaign.\nInclude Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!",
        },
        {
          tab: "Campaign Strategy",
          detail: `Campaign Name (Optional): A unique name for the campaign to easily track and manage its progress.
Brand and Business Information (Optional): A brief description of the company’s values, offerings, and mission to align the campaign with the brand’s identity.
Target Audience (Optional): Insights into demographics, preferences, and pain points to tailor the campaign to meet the needs of the intended audience.
Market Research and Information (Optional): Analysis of the competitive landscape, customer trends, and business performance (e.g., past sales, marketing metrics, and conversion rates) to guide strategic decisions.
Budget and Resources (Optional): Details about the allocated budget, available personnel, and tools/resources for executing the campaign effectively.
Sales Channel (Optional): The sales channels used for campaign execution, such as online platforms, retail stores, or third-party services.
Additional Information (Optional): Information on loyalty-building initiatives, peak sales periods, seasonal trends, and special promotions to enhance customer engagement.
Enter Additional Information: Additional insights related to customer engagement, product positioning, or marketing strategies not covered by other fields.
Campaign Timeline-Start Date (Optional): dd/mm/yyyy, specifying the start date of the campaign.
Campaign Timeline-End Date (Optional): dd/mm/yyyy, specifying the end date of the campaign.
Tone (Optional): Desired communication style (e.g., professional, conversational) to maintain consistency across the campaign.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/campaign_strat.png",
    },
    9: {
      section: "customeroutreach",
      component_id: 31,
      component_name: "Cold marketing message",
      description:
        "Cold Marketing Messages combine email and WhatsApp strategies to engage potential customers with personalized, relevant content, introducing your brand and driving new leads with clear calls to action.",
      validations: [
        {
          tab: "Cold Whatsapp Client",
          detail: `Aim: Specify the primary objective of the cold marketing message, such as lead generation, brand awareness, or product promotion.
Business Name (Optional): Enter the name of your business to personalize the message.
Product/Service: Describe the product or service being promoted.
Unique Selling Proposition (USP) (Optional): Highlight key differentiators or unique aspects of the product/service.
Target Audience (Optional): Define the demographics, interests, or specific audience you want to target.
Theme (Optional): Specify the theme or tone of the message, such as professional, casual, or promotional.
Key Benefits (at least 3): List at least three key benefits of the product/service being offered.
Call-to-Action (CTA) (Optional): Provide a clear call-to-action, such as “Sign Up,” “Buy Now,” or “Learn More.”
Any Current Promotions or Offers (Optional): Mention any ongoing promotions or exclusive offers in the message.
Website or Landing Page URL (Optional): Include a link to the business website or a dedicated landing page.
Social Proof (Optional): Include reviews, or case studies as social proof to build trust.
Additional Information (Optional): Provide any other relevant details or customization for the cold marketing message.`,
        },
        {
          tab: "Cold Email Client",
          detail: `Business Name (Optional):Enter the business name.
Product/Service:Describe product or market service marketed.
E-Mail Subject (Optional): Enter subject line of cold email.
E-Mail Outline (Optional): Enter key points or structure of the email.
Target Audience (Optional):Enter who is your audience? Describe the demographics, preferences and pain points of the target customers.
Unique Selling Proposition (USP) (Optional): Highlight the unique aspect of your product or service that sets it apart from competitors.
Key Benefits (at least 3): List at least three key benefits of the product/service being offered.
Call-to-Action (CTA) (Optional): Provide a clear call-to-action, such as “Sign Up,” “Buy Now,” or “Learn More.
Any Current Promotions or Offers (Optional): Mention any ongoing promotions or exclusive offers in the message.
Website or Landing Page URL (Optional): Include a link to the business website or a dedicated landing page.
Social Proof (Optional): Include reviews, or case studies as social proof to build trust.
Desired Email Length (Optional): Indicate the preferred length of the email (e.g. short, medium, detailed).`,
        },
      ],
      logo_url: "images/cold_marketing.png",
    },
    10: {
      section: "copywriting",
      component_id: 28,
      component_name: "Content improver",
      description:
        "The Content Improver uses advanced rewriting tools to refine clarity, engagement, and structure, making texts more appealing, unique, and optimized for different audiences and platforms while preserving the original message's intent.",
      validations: [
        {
          tab: "Content Tone Improver",
          detail: `Tabs: Select from content tone improver, article text improver, human text rewriter.
Text Content: Enter the text you want to improve.
Tone of Voice (Optional): Enter the desired tone, such as professional, casual, formal, etc.
Content Complexity (Optional): Specify the desired complexity level of the content (e.g., simple, intermediate, advanced).`,
        },
        {
          tab: "Article Improver Client",
          detail: `Article to Improve: Enter the specific article or section you wish to improve.
Additional Instructions (Optional): Provide any extra details or specific areas to focus on during the improvement process.`,
        },
        {
          tab: "Humantext Rewriter Client",
          detail: `Human Written Text: Enter text that has been manually written for improvement.
Brand Name to Replace with (Optional): If applicable, enter a brand name to replace with a different name or keyword.`,
        },
      ],
      logo_url: "images/content_improver.png",
    },
    11: {
      section: "branding",
      component_id: 13,
      component_name: "Corporate video Generator",
      description:
        "The Corporate Video Generator transforms business storytelling with AI-driven templates and customizable features, making it effortless to create professional-quality videos for impactful presentations, marketing, and internal communications.\n",
      validations: [
        {
          tab: "",
          detail: `Title/Topic: Enter the title or topic of the video.
Language (Optional): Enter the preferred language for the video content.
Video Duration (In seconds) (Optional): Specify the desired duration of the video in seconds.
Tone (Optional): Enter the tone of the video, such as professional, casual, motivational, etc.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/corporate_video_generator.png",
    },
    12: {
      section: "customeroutreach",
      component_id: 42,
      component_name: "Customer engagement Techniques",
      description:
        "The Customer Engagement Techniques tool offers innovative strategies to enhance interaction and satisfaction, fostering meaningful connections and loyalty through personalized communication and engaging content.",
      validations: [
        {
          tab: "",
          detail: `Business Name & Type: Enter the name and type of business to tailor engagement strategies accordingly.
Target Audience (Optional): Enter details about the target audience, such as demographics, interests, and behavior.
Current Engagement Methods: Describe the current methods used to engage with customers.
Primary Goals: Specify the main objectives of the engagement initiatives (e.g., increase customer retention, boost engagement rates).
Pain Points: List the challenges or issues faced in engaging with customers.
Preferred Social Media Platform: Select from available social media platforms for targeted engagement.
Interactive Content Types (Optional): Enter types of interactive content, like polls, quizzes, videos, etc.
Personalization Tactics of Interest (Optional): Describe personalization strategies such as tailored recommendations or customer journey mapping.
Current Feedback Channel (Optional): Enter the current methods used to collect customer feedback (e.g., surveys, reviews).
Desired Improvements for Feedback Collection (Optional): Suggest ways to enhance the feedback collection process, such as automated surveys or real-time feedback features.
Budget for Engagement Initiatives (Optional): Specify the budget allocated for engagement-related activities.
Specific Competitor Strategies to Emulate or Avoid (Optional): Mention any competitor strategies that should be considered or avoided for better engagement outcomes.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/customer_engagement_techniques.png",
    },
    13: {
      section: "perfomance_marketing",
      component_id: 41,
      component_name: "E-commerce product description",
      description:
        "E-Commerce Product Descriptions craft compelling, SEO-optimized write-ups that highlight product features, benefits, and unique selling points to drive online sales and enhance customer experience.",
      validations: [
        {
          tab: "",
          detail: `Product Name: Enter the name of the product.
Product Overview/Description: Provide a brief overview or description of the product.
Product Features/Specifications: List the key features and specifications of the product.
Benefits/Unique Selling Points: Highlight the benefits and unique selling points that differentiate the product.
Target Audience (Optional): Specify the target audience for the product.
Usage Instructions (Optional): Enter detailed usage instructions for the product.
Keywords (Optional): Include relevant keywords for SEO purposes.
Additional Information (Promotions, Discounts, etc.) (Optional): Provide additional details like promotions, discounts, or special offers.
Tone (Optional): Specify the desired tone for the product description, such as professional, casual, informative, etc.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/ecommerce_product_desc.png",
    },
    14: {
      section: "branding",
      component_id: 12,
      component_name: "Elevator Pitch",
      description:
        "Elevator Pitch is your go-to tool for crafting concise, impactful statements that capture your brand's essence and unique value proposition, ensuring your ideas stand out in any room.\n",
      validations: [
        {
          tab: "",
          detail: `Brand Name: Enter the name of your brand.
Industry (Optional): Specify the industry your brand operates in.
Brand Voice (Optional): Describe the tone and style of communication used by your brand (e.g., professional, innovative, friendly).
Key Benefits (at least 3): List at least three key benefits that highlight your brand’s value.
Unique Selling Point (USP) (Optional): Provide the unique selling point that sets your brand apart from competitors.
Target Audience (Optional): Specify the target audience, including demographics, interests, and needs.`,
        },
      ],
      logo_url: "images/elevator_pitch.png",
    },
    15: {
      section: "socialmedia",
      component_id: 38,
      component_name: "Festival post generator",
      description:
        "The Festival Post Generator is a cutting-edge tool that effortlessly crafts engaging, culturally apt social media posts for festivals, complete with themed visuals and text, ensuring a vibrant online presence for every celebration.\n",
      validations: [
        {
          tab: "",
          detail: `Festival Name: Enter the name of the festival for which the post is being generated.`,
        },
      ],
      logo_url: "images/festival.png",
    },
    16: {
      section: "google",
      component_id: 8,
      component_name: "Fifty business update generator",
      description:
        "The Fifty Business Update Generator crafts an extensive list of fifty update topics based relevant keywords to elevate SEO and content marketing strategies, enhancing online visibility and search engine rankings by diversifying and targeting audience search queries.\n",
      validations: [
        {
          tab: "",
          detail: `Keywords: Enter relevant business update keywords.
	  Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/50_business.png",
    },
    17: {
      section: "copywriting",
      component_id: 21,
      component_name: "Framework based copywriting",
      description:
        "Framework-based Copywriting uses structured templates and psychological insights to craft compelling marketing messages, ensuring consistency and effectiveness in driving action, conversions, and brand loyalty.",
      validations: [
        {
          tab: "",
          detail: `Type of Copy: Enter the type of copy you need (e.g., landing page, ad copy, email marketing).
Select Framework: Select the appropriate framework (e.g., AIDA, PAS, 4Ps).
Specific Product or Service: Enter the product or service for which the copy is being created.
Target Audience (Optional): Specify the target audience, including demographics or interests.
Call to Action (Optional): Enter a call-to-action for the copy.
Word Count (Optional): Specify the desired word count for the content.
Key Points (Optional): Include key points or focus areas for the copy.
Content Complexity: Choose the complexity level from Expert, Medium, or Easy.`,
        },
      ],
      logo_url: "images/framework_based_copywriting.png",
    },
    18: {
      section: "customeroutreach",
      component_id: 17,
      component_name: "Funnel agent",
      tabs: "whatsapp,linkedIn,Email",
      description:
        " Funnel Agent combines strategic email, LinkedIn, and WhatsApp automation to guide potential customers from initial contact to conversion with personalized communication, fostering engagement and building meaningful relationships for business growth.",
      validations: [
        {
          tab: "WhatsApp Funnel",
          detail: `Business Name: Enter the name of the business.
Product/Service: Enter the product or service related to the funnel.
Target Audience (Optional): Specify the target audience.
User's Common Pain Point or Interest (Optional): Enter the user's common pain point or interest.
Unique Selling Proposition (USP) (Optional): Enter the USP.
Offer or Discount (if applicable) (Optional): Enter any applicable offer or discount.
Discount Code (if applicable) (Optional): Enter a discount code if applicable.
Additional Benefits (Optional): Enter additional benefits.
Video Demo Link (if available) (Optional): Enter a link to a video demo if available.
Next Purchase Discount Code (for loyalty stage if applicable) (Optional): Enter a discount code for the next purchase in the loyalty stage.
Follow-up Time Frame (Optional): Enter the follow-up time frame.
Feedback or Survey Link (if available) (Optional): Enter a link for feedback or survey if available.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
        {
          tab: "LinkedIn Connection Funnel",
          detail: `Connection Name: Enter the connection's name.
Company Name: Enter the company name.
Designation: Enter the designation of the person.
Reason for Connecting: Enter the reason for connecting.
Common Interests or Mutual Connections (Optional): Enter common interests or mutual connections.
Value Proposition (Optional): Enter the value proposition.
Recent Achievements or Projects (optional) (Optional): Enter recent achievements or projects.
Follow-up Intent (Optional): Enter the follow-up intent.`,
        },
        {
          tab: "Email Funnel",
          detail: `Business and Product/Service Details (Optional): Enter details about the business and product/service.
Target Audience Information (Optional): Enter information about the target audience.
Lead Magnet or Initial Offer (Optional): Enter the lead magnet or initial offer.
Main Product/Service to be Promoted (Optional): Enter the main product/service to be promoted.
Unique Selling Proposition (USP) (Optional): Enter the USP.
Email Service Provider Capabilities (if specified) (Optional): Enter email service provider capabilities if specified.
Desired Funnel Length (number of emails) (Optional): Enter the desired length of the email funnel (number of emails).
Timing Between Emails (if specified) (Optional): Enter timing between emails if specified.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!
`,
        },
      ],
      logo_url: "images/funnel_agent.png",
    },
    19: {
      section: "google",
      component_id: 40,
      component_name: "Google business optimiser",
      description:
        "Google Business Optimizer boosts your business's online presence by enhancing Google My Business listings, optimizing information, improving photo and post quality, and amplifying local search visibility to attract more customers and elevate engagement.\n",
      validations: [
        {
          tab: "",
          detail: `Business Name:Enter name of your business.
Business Category: Enter primary business category.
Business Location (Optional): Enter area/city of service.
Photos on GMB Listing?:Enter if you have photos on google my business listing (yes/no).
High-Quality Up-to-date Photos?: Are the photos high quality/up-to-date (yes/no).
Average Customer Rating (Optional): Enter average customer rating.
Number of Reviews (Optional):Enter how many reviews you have.
Respond to Reviews?: Do you respond to reviews? (yes/no).
Goals:What's your main goal with Google My Business? (e.g., increase visits, improve reputation).
Tone (Optional): Specify the desired tone`,
        },
      ],
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_business_optimizer.png",
    },
    20: {
      section: "google",
      component_id: 30,
      component_name: "Google FAQs and answer writer",
      description:
        "The Google FAQs and Answer Writer tool empowers businesses to craft clear, comprehensive FAQ sections that enhance user understanding and satisfaction, reducing support queries and streamlining customer service operations.",
      validations: [
        {
          tab: "",
          detail: `Idea of Product or Service:Briefly describe the product or service concept.
Number of FAQ(Optional):Number of FAQ's to be generated.`,
        },
      ],
      logo_url: "images/google_faq.png",
    },
    21: {
      section: "google",
      component_id: 34,
      component_name: "Google review response writer",
      description:
        "The Google Review Response Writer crafts personalized and brand-aligned responses to customer reviews, enhancing reputation and showcasing commitment to customer service excellence.",
      validations: [
        {
          tab: "",
          detail: `Google Review:Paste the cutomer review to respond to.`,
        },
      ],
      logo_url: "images/google_review_response.png",
    },
    22: {
      section: "google",
      component_id: 14,
      component_name: "Google review writing",
      description:
        "Google Review Writing crafts detailed reviews that enhance brand reputation, provide valuable feedback, and influence customer perceptions, building trust and credibility online.\n",
      validations: [
        {
          tab: "",
          detail: `List of Target Audiences:Specify demographics or groups targeted.`,
        },
      ],
      logo_url: "images/google_review_writing.png",
    },
    23: {
      section: "google",
      component_id: 2,
      component_name: "Google search keyword generator",
      description:
        "The Google Search Keyword Generator uncovers essential keywords and phrases to boost website content and ad optimization, enhancing SEO and PPC strategies to attract targeted traffic and amplify online marketing success.\n",
      validations: [
        {
          tab: "",
          detail: `Business Location Name:Enter business location.
                        Business Category:Enter business category.
                        Business City Name:Enter Business city name.
                        Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
        },
      ],
      logo_url: "images/google_search_keyword.png",
    },
    24: {
      section: "google",
      component_id: 39,
      component_name: "Google service product description",
      description:
        "The Google Service Product Description crafts detailed, SEO-optimized descriptions that enhance search visibility, effectively attracting targeted traffic by highlighting service features and benefits.",
      validations: [
        {
          tab: "",
          detail: `Brand, Product or Service Name:Briefly describe product or service.
                   Keywords(Optional):`,
        },
      ],
      logo_url: "images/google_service_product_description.png",
    },
  };

  const subtopicsContainer = document.getElementById("subtopicsContainer");
  const searchInput = document.getElementById("searchInput");

  function parseValidationDetails(detail) {
    return detail
      .split("\n")
      .map((line) => {
        const [boldText, ...regularText] = line.split(":");
        return `<li>
          <strong>${boldText.trim()}:</strong> 
          ${regularText.join(":").trim()}
        </li>`;
      })
      .join("");
  }

  function createTabsHTML(validations, componentId) {
    const tabButtons = validations
      .map(
        (validation) => `
        <button 
          class="tab-button"
          data-tab="${validation.tab}"
          aria-selected="false"
          aria-controls="${componentId}-panel-${validation.tab}"
          role="tab"
        >
          ${validation.tab}
        </button>
      `
      )
      .join("");

    const tabPanels = validations
      .map(
        (validation) => `
        <div 
          class="tab-panel"
          id="${componentId}-panel-${validation.tab}"
          role="tabpanel"
          aria-labelledby="${componentId}-tab-${validation.tab}"
          hidden
        >
          <ul class="validation-list">
            ${parseValidationDetails(validation.detail)}
          </ul>
        </div>
      `
      )
      .join("");

    return `
      <div class="tabs-container">
        <div class="tab-buttons" role="tablist">
          ${tabButtons}
        </div>
        <div class="tab-panels">
          ${tabPanels}
        </div>
      </div>
    `;
  }

  function createSubtopicSections() {
    subtopicsContainer.innerHTML = "";

    Object.values(data).forEach((item) => {
      const subtopicSection = document.createElement("section");
      subtopicSection.classList.add(
        "subtopic-card",
        `${item.section}-subtopics`
      );
      subtopicSection.setAttribute(
        "data-title",
        item.component_name.toLowerCase()
      );
      subtopicSection.setAttribute("tabindex", "0");

      subtopicSection.innerHTML = `
        <div class="card-info">
          <h2>${item.component_name}</h2>
          <p>${item.description}</p>
          ${createTabsHTML(item.validations, item.component_id)}
        </div>
        <div class="card-visual">
          <img 
            src="${item.logo_url}" 
            alt="${item.component_name} Icon" 
            onerror="this.src='placeholder.png'"
          />
        </div>
      `;

      subtopicsContainer.appendChild(subtopicSection);

      // Add click handlers for tab buttons
      const tabButtons = subtopicSection.querySelectorAll(".tab-button");
      tabButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          tabButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
          });

          const panelId = button.getAttribute("aria-controls");
          subtopicSection.querySelectorAll(".tab-panel").forEach((panel) => {
            panel.hidden = true;
            panel.classList.remove("active");
          });

          button.classList.add("active");
          button.setAttribute("aria-selected", "true");

          document.getElementById(panelId).hidden = false;
          document.getElementById(panelId).classList.add("active");
        });
      });

      // Show the first tab by default
      const firstTab = tabButtons[0];
      firstTab.classList.add("active");
      firstTab.setAttribute("aria-selected", "true");
      const firstPanelId = firstTab.getAttribute("aria-controls");
      document.getElementById(firstPanelId).hidden = false;
      document.getElementById(firstPanelId).classList.add("active");
    });
  }

  function filterSubtopics(query) {
    const subtopicCards = document.querySelectorAll(".subtopic-card");
    subtopicCards.forEach((card) => {
      const title = card.getAttribute("data-title");
      card.style.display = title.includes(query.toLowerCase())
        ? "grid"
        : "none";
    });
  }

  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainTopics = document.getElementById("mainTopics");
  const hamburgerIcon = mobileNavToggle.querySelector(".hamburger-icon");
  const closeIcon = mobileNavToggle.querySelector(".close-icon");

  mobileNavToggle.addEventListener("click", () => {
    mainTopics.classList.toggle("show");
    hamburgerIcon.style.display = mainTopics.classList.contains("show")
      ? "none"
      : "inline";
    closeIcon.style.display = mainTopics.classList.contains("show")
      ? "inline"
      : "none";
  });

  // Search Input Event Listener
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    filterSubtopics(query);
  });

  //main topic
  // Main Topic Selection
  const mainTopicElements = document.querySelectorAll(".main-topic");

  mainTopicElements.forEach((mainTopic) => {
    mainTopic.addEventListener("click", () => {
      // Deselect all main topics
      mainTopicElements.forEach((topic) => topic.classList.remove("selected"));

      // Select clicked main topic
      mainTopic.classList.add("selected");

      // Get the section name from the data attribute
      const sectionName = mainTopic
        .getAttribute("data-subtopic")
        .replace("-subtopics", "");

      // Show/hide subtopic cards based on section
      const subtopicCards = document.querySelectorAll(".subtopic-card");
      subtopicCards.forEach((card) => {
        // Check if the card matches the selected section
        card.style.display = card.classList.contains(`${sectionName}-subtopics`)
          ? "grid"
          : "none";
      });
    });
  });

  // Initial setup
  createSubtopicSections();
});
