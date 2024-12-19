document.addEventListener("DOMContentLoaded", () => {
  const data = {
    0: {
      section: "branding",
      component_id: 3,
      component_name: "7P's marketing mix",

      description:
        "The 7P's Marketing Mix empowers businesses to craft a holistic strategy by integrating Product, Price, Place, Promotion, People, Process, and Physical Evidence, ensuring optimal customer engagement and business growth.\n",
      validations: {
        tab: "7P's marketing mix",
        validation: `Any Reference Brands(Optional):sed for giving reference brands to AI for better results.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      },
      logo_url: "images/7ps.png",
    },
    1: {
      section: "perfomance_marketing",
      component_id: 23,
      component_name: "Abandoned Cart",
      description:
        "Abandoned Cart is a strategic tool that re-engages online shoppers through reminder emails and discounts, boosting conversion rates by encouraging them to return and complete their purchase for enhanced customer experience and sales growth.",
      validation: `Cart Image:used for giving reference about Cart to AI 
Tone(Optional):Defines Tone of the output AI generates
Target Audience(Optional):Helps AI define the Target Audience /People for better understanding.
Brand/Store Name(Optional):Used to define Brand/Store Name so AI can give Brand/Store specific answers;
Incentives(OPtional):Incentives you would like the AI to add like any discounts, free shipping, or special promotions to encourage purchase completion.
Preferred Communication Channels(Optional):It is used to instruct AI to give content according to preferred way communication like email,sms,push notifications etc.
Keywords(Optionla):Keywords are used for suggesting and improving SEO or product focus.`,
      logo_url: "images/abondoned_cart.png",
    },
    2: {
      section: "perfomance_marketing",
      component_id: 32,
      component_name: "Ad creator",
      description:
        "The AD Creator is a versatile tool that simplifies ad design, customization, and deployment across platforms, combining user-friendly interfaces, advanced targeting, and powerful analytics to maximize engagement and achieve marketing goals.\n",
      validation: `Tabs:User can toggle between Google and Facebook specific Ad Creator.
      Target Audience(Optional):Helps AI define the Target Audience /People for better understanding.
      Ad Extensions(Optional):It helps user add extra information like sitelinks,callbuttons etc to add more context.
      Visual Cues(Optional):It defines visual aspect of the Ad eg theme ,images, or key display element to attract elements.
      Additional Details(Optional):Enter any specific or extra information related to the Ad.
      Tone(Optional):Defines Tone of the output AI generates.
      Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/ad_creator.png",
    },
    3: {
      section: "copywriting",
      component_id: 18,
      component_name: "Article writer",
      description:
        "The Article Writer combines the skills of outlining and crafting content, ensuring each section is logically structured, informative, and engaging, for coherent and compelling articles that meet editorial standards.",
      validation: `Tabs:User can toggle between type of article section or outline specific content.
	  				Article Outline(Optional):User can provide a brief or structure of the outline of the article than help generate better repsonses.
					Max Word Count(Optional): User can set a maximum word count for the article.
					Specific Brief: User can provide a detailed brief or key points to focus on for the article.
					Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/article_writing.png",
    },
    4: {
      section: "branding",
      component_id: 33,
      component_name:
        "Audience, tone of voice, personality, colour palettes & font options",
      description:
        "This comprehensive branding toolkit refines your marketing strategy by identifying your audience, establishing a unique tone of voice, and selecting cohesive color palettes and font options, ensuring effective brand communication and stronger market connection.\n",
      validation: `Brand Brief (Optional): User can summarize the brand, including its mission, values, and key messaging.`,
      logo_url: "images/audience_tone.png",
    },
    5: {
      section: "copywriting",
      component_id: 25,
      component_name: "Blog writer",
      description:
        "The Blog Writer crafts engaging and informative content, blending expertise and SEO strategies to drive traffic and enhance online presence, ultimately boosting a brand's content marketing success.",
      validation: `Blog Topic*: User can specify the main topic or theme of the blog.
Main Keyword (Optional): User can enter a primary keyword for SEO optimization.
List of Keywords (Optional): User can provide additional SEO keywords for inclusion.
Keyword Density of Main Keyword (Percentage) (Optional): User can set the desired percentage for the keyword density.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/blog_writer.png",
    },
    6: {
      section: "copywriting",
      component_id: 22,
      component_name: "Brochure",
      description:
        "The Brochure is a versatile marketing tool that combines engaging visuals and concise text to promote products, services, or events, effectively communicating brand value through both print and digital formats.",
      validation: `Purpose of the Brochure*: State intended use or purpose.
Page Count (Optional): Specify the desired number of pages for the brochure.
Preliminary Content Structure (Optional): Outline brochure sections.
Distribution Channel (Optional): Specify where and how the brochure will be distributed (e.g., online, printed, at events).`,
      logo_url: "images/brochure.png",
    },
    7: {
      section: "socialmedia",
      component_id: 43,
      component_name: "Buyers journey touchpoint",
      description:
        "Buyer's Journey Touchpoints is a powerful tool that maps and analyzes customer interactions throughout the purchase process, providing insights to optimize marketing strategies, enhance customer experiences, and drive business growth.",
      validation: `Product/Service Information*: Key features and benefits, Unique selling proposition, Price point and positioning.
Target Audience (Optional): Who is your audience? e.g., demographics, preferences, and pain points of the target customers.
Marketing Channels (Optional): Select from given options (e.g., social media, email, content marketing).
Industry Landscape (Optional): What industry are you in, and what does the competitive landscape look like? Identify key competitors, emerging industry trends, and shifts in consumer behaviour or technological advancements relevant to your market.
Tone (Optional): Specify the tone (e.g., professional, conversational, formal).
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/buyers_journey.png",
    },
    8: {
      section: "essential",
      component_id: 36,
      component_name: "Campaign strategy & budget planning",
      description:
        "The Campaign Strategy and Budget Planning tool empowers businesses to craft year-round digital marketing strategies, leveraging daily insights, market trends, and consumer behavior for maximum ROI. Seamlessly integrating channels like SEO, social media, and PPC, it ensures continuous engagement, growth, and measurable success in the digital landscape.\n",
      validation: `Campaign Name (Optional): A unique name for the campaign to easily track and manage its progress.
Brand and Business Information (Optional): A brief description of the company’s values, offerings, and mission to align the campaign with the brand’s identity.
Target Audience (Optional): Insights into demographics, preferences, and pain points to tailor the campaign to meet the needs of the intended audience.
Market Research and Information (Optional): Analysis of the competitive landscape, customer trends, and business performance (e.g., past sales, marketing metrics, and conversion rates) to guide strategic decisions.
Budget and Resources (Optional): Details about the allocated budget, available personnel, and tools/resources for executing the campaign effectively.
Sales Channel (Optional): The sales channels used for campaign execution, such as online platforms, retail stores, or third-party services.
Additional Information (Optional): Information on loyalty-building initiatives, peak sales periods, seasonal trends, and special promotions to enhance customer engagement.
Enter Additional Information: Additional insights related to customer engagement, product positioning, or marketing strategies not covered by other fields.
Start Date (Optional): dd/mm/yyyy, specifying the start date of the campaign.
End Date (Optional): dd/mm/yyyy, specifying the end date of the campaign.
Tone (Optional): Desired communication style (e.g., professional, conversational) to maintain consistency across the campaign.`,
      logo_url: "images/campaign_strat.png",
    },
    9: {
      section: "customeroutreach",
      component_id: 31,
      component_name: "Cold marketing message",
      description:
        "Cold Marketing Messages combine email and WhatsApp strategies to engage potential customers with personalized, relevant content, introducing your brand and driving new leads with clear calls to action.",
      validation: `Aim: Specify the primary objective of the cold marketing message, such as lead generation, brand awareness, or product promotion.
Business Name (Optional): Enter the name of your business to personalize the message.
Product/Service: Describe the product or service being promoted.
Unique Selling Proposition (USP) (Optional): Highlight key differentiators or unique aspects of the product/service.
Target Audience (Optional): Define the demographics, interests, or specific audience you want to target.
Theme (Optional): Specify the theme or tone of the message, such as professional, casual, or promotional.
Key Benefits (at least 3): List at least three key benefits of the product/service being offered.
Call-to-Action (CTA) (Optional): Provide a clear call-to-action, such as “Sign Up,” “Buy Now,” or “Learn More.”
Any Current Promotions or Offers (Optional): Mention any ongoing promotions or exclusive offers in the message.
Website or Landing Page URL (Optional): Include a link to the business website or a dedicated landing page.
Social Proof (Optional): Include testimonials, reviews, or case studies as social proof to build trust.
Additional Information (Optional): Provide any other relevant details or customization for the cold marketing message.`,
      logo_url: "images/cold_marketing.png",
    },
    10: {
      section: "copywriting",
      component_id: 28,
      component_name: "Content improver",
      description:
        "The Content Improver uses advanced rewriting tools to refine clarity, engagement, and structure, making texts more appealing, unique, and optimized for different audiences and platforms while preserving the original message's intent.",
      validation: `Tabs: Select from content tone improver, article text improver, human text rewriter.
Text Content: Enter the text you want to improve.
Tone of Voice (Optional): Enter the desired tone, such as professional, casual, formal, etc.
Content Complexity (Optional): Specify the desired complexity level of the content (e.g., simple, intermediate, advanced).
Article to Improve: Enter the specific article or section you wish to improve.
Additional Instructions (Optional): Provide any extra details or specific areas to focus on during the improvement process.
Human Written Text: Enter text that has been manually written for improvement.
Brand Name to Replace with (Optional): If applicable, enter a brand name to replace with a different name or keyword.`,
      logo_url: "images/content_improver.png",
    },
    11: {
      section: "branding",
      component_id: 13,
      component_name: "Corporate video Generator",
      description:
        "The Corporate Video Generator transforms business storytelling with AI-driven templates and customizable features, making it effortless to create professional-quality videos for impactful presentations, marketing, and internal communications.\n",
      validation: `Title/Topic: Enter the title or topic of the video.
Language (Optional): Enter the preferred language for the video content.
Video Duration (In seconds) (Optional): Specify the desired duration of the video in seconds.
Tone (Optional): Enter the tone of the video, such as professional, casual, motivational, etc.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/corporate_video_generator.png",
    },
    12: {
      section: "customeroutreach",
      component_id: 42,
      component_name: "Customer engagement Techniques",
      description:
        "The Customer Engagement Techniques tool offers innovative strategies to enhance interaction and satisfaction, fostering meaningful connections and loyalty through personalized communication and engaging content.",
      validation: `Business Name & Type: Enter the name and type of business to tailor engagement strategies accordingly.
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
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/customer_engagement_techniques.png",
    },
    13: {
      section: "perfomance_marketing",
      component_id: 41,
      component_name: "E-commerce product description",
      description:
        "E-Commerce Product Descriptions craft compelling, SEO-optimized write-ups that highlight product features, benefits, and unique selling points to drive online sales and enhance customer experience.",
      validation: `Product Name: Enter the name of the product.
Product Overview/Description: Provide a brief overview or description of the product.
Product Features/Specifications: List the key features and specifications of the product.
Benefits/Unique Selling Points: Highlight the benefits and unique selling points that differentiate the product.
Target Audience (Optional): Specify the target audience for the product.
Usage Instructions (Optional): Enter detailed usage instructions for the product.
Keywords (Optional): Include relevant keywords for SEO purposes.
Additional Information (Promotions, Discounts, etc.) (Optional): Provide additional details like promotions, discounts, or special offers.
Tone (Optional): Specify the desired tone for the product description, such as professional, casual, informative, etc.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/ecommerce_product_desc.png",
    },
    14: {
      section: "branding",
      component_id: 12,
      component_name: "Elevator Pitch",
      description:
        "Elevator Pitch is your go-to tool for crafting concise, impactful statements that capture your brand's essence and unique value proposition, ensuring your ideas stand out in any room.\n",
      validation: `Brand Name: Enter the name of your brand.
Industry (Optional): Specify the industry your brand operates in.
Brand Voice (Optional): Describe the tone and style of communication used by your brand (e.g., professional, innovative, friendly).
Key Benefits (at least 3): List at least three key benefits that highlight your brand’s value.
Unique Selling Point (USP) (Optional): Provide the unique selling point that sets your brand apart from competitors.
Target Audience (Optional): Specify the target audience, including demographics, interests, and needs.`,
      logo_url: "images/elevator_pitch.png",
    },
    15: {
      section: "socialmedia",
      component_id: 38,
      component_name: "Festival post generator",
      description:
        "The Festival Post Generator is a cutting-edge tool that effortlessly crafts engaging, culturally apt social media posts for festivals, complete with themed visuals and text, ensuring a vibrant online presence for every celebration.\n",
      validation: `Festival Name: Enter the name of the festival for which the post is being generated.`,
      logo_url: "images/festival.png",
    },
    16: {
      section: "google",
      component_id: 8,
      component_name: "Fifty business update generator",
      description:
        "The Fifty Business Update Generator crafts an extensive list of fifty update topics based relevant keywords to elevate SEO and content marketing strategies, enhancing online visibility and search engine rankings by diversifying and targeting audience search queries.\n",
      validation: `Keywords: Enter relevant business update keywords.
	  Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/50_business.png",
    },
    17: {
      section: "copywriting",
      component_id: 21,
      component_name: "Framework based copywriting",
      description:
        "Framework-based Copywriting uses structured templates and psychological insights to craft compelling marketing messages, ensuring consistency and effectiveness in driving action, conversions, and brand loyalty.",
      validation: `Type of Copy: Enter the type of copy you need (e.g., landing page, ad copy, email marketing).
Select Framework: Select the appropriate framework (e.g., AIDA, PAS, 4Ps).
Specific Product or Service: Enter the product or service for which the copy is being created.
Target Audience (Optional): Specify the target audience, including demographics or interests.
Call to Action (Optional): Enter a call-to-action for the copy.
Word Count (Optional): Specify the desired word count for the content.
Key Points (Optional): Include key points or focus areas for the copy.
Content Complexity: Choose the complexity level from Expert, Medium, or Easy.`,
      logo_url: "images/framework_based_copywriting.png",
    },
    18: {
      section: "customeroutreach",
      component_id: 17,
      component_name: "Funnel agent",
      tabs: "whatsapp,linkedIn,Email",
      description:
        " Funnel Agent combines strategic email, LinkedIn, and WhatsApp automation to guide potential customers from initial contact to conversion with personalized communication, fostering engagement and building meaningful relationships for business growth.",
      validation: `WhatsApp Funnel:

Business Name: Enter the name of the business.
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
LinkedIn Connection Funnel:

Connection Name: Enter the connection's name.
Company Name: Enter the company name.
Designation: Enter the designation of the person.
Reason for Connecting: Enter the reason for connecting.
Common Interests or Mutual Connections (Optional): Enter common interests or mutual connections.
Value Proposition (Optional): Enter the value proposition.
Recent Achievements or Projects (optional) (Optional): Enter recent achievements or projects.
Follow-up Intent (Optional): Enter the follow-up intent.
Email Funnel:

Business and Product/Service Details (Optional): Enter details about the business and product/service.
Target Audience Information (Optional): Enter information about the target audience.
Lead Magnet or Initial Offer (Optional): Enter the lead magnet or initial offer.
Main Product/Service to be Promoted (Optional): Enter the main product/service to be promoted.
Unique Selling Proposition (USP) (Optional): Enter the USP.
Email Service Provider Capabilities (if specified) (Optional): Enter email service provider capabilities if specified.
Desired Funnel Length (number of emails) (Optional): Enter the desired length of the email funnel (number of emails).
Timing Between Emails (if specified) (Optional): Enter timing between emails if specified.
Include Competitors Data:Use it for better AI response,you can add upto 3 competitors in brand profile and note it takes more credits!`,
      logo_url: "images/funnel_agent.png",
    },
    19: {
      section: "google",
      component_id: 40,
      component_name: "Google business optimiser",
      description:
        "Google Business Optimizer boosts your business's online presence by enhancing Google My Business listings, optimizing information, improving photo and post quality, and amplifying local search visibility to attract more customers and elevate engagement.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_business_optimizer.png",
    },
    20: {
      section: "google",
      component_id: 30,
      component_name: "Google FAQs and answer writer",
      description:
        "The Google FAQs and Answer Writer tool empowers businesses to craft clear, comprehensive FAQ sections that enhance user understanding and satisfaction, reducing support queries and streamlining customer service operations.",
      logo_url: "images/google_faq.png",
    },
    21: {
      section: "google",
      component_id: 34,
      component_name: "Google review response writer",
      description:
        "The Google Review Response Writer crafts personalized and brand-aligned responses to customer reviews, enhancing reputation and showcasing commitment to customer service excellence.",
      logo_url: "images/google_review_response.png",
    },
    22: {
      section: "google",
      component_id: 14,
      component_name: "Google review writing",
      description:
        "Google Review Writing crafts detailed reviews that enhance brand reputation, provide valuable feedback, and influence customer perceptions, building trust and credibility online.\n",
      logo_url: "images/google_review_writing.png",
    },
    23: {
      section: "google",
      component_id: 2,
      component_name: "Google search keyword generator",
      description:
        "The Google Search Keyword Generator uncovers essential keywords and phrases to boost website content and ad optimization, enhancing SEO and PPC strategies to attract targeted traffic and amplify online marketing success.\n",
      logo_url: "images/google_search_keyword.png",
    },
    24: {
      section: "google",
      component_id: 39,
      component_name: "Google service product description",
      description:
        "The Google Service Product Description crafts detailed, SEO-optimized descriptions that enhance search visibility, effectively attracting targeted traffic by highlighting service features and benefits.",
      logo_url: "images/google_service_product_description.png",
    },
    25: {
      section: "customeroutreach",
      component_id: 15,
      component_name: "Growth hacking ideas",
      description:
        "The Growth Hacking Ideas tool offers creative, customized strategies that leverage trends and innovative marketing techniques to boost brand visibility, engagement, and conversions, fostering rapid and sustainable growth with cost-effective methods",
      logo_url: "images/growth_hacking.png",
    },
    26: {
      section: "essential",
      component_id: 6,
      component_name: "Image caption",
      tabs: "x,y,z",
      description:
        "Image Captions are concise, engaging texts that enrich social media visuals, drive audience interaction, and amplify the reach and impact of your posts.",
      logo_url: "images/image_caption.png",
    },
    27: {
      section: "customeroutreach",
      component_id: 16,
      component_name: "Inexpensive direct sales ideas",
      description:
        "The Inexpensive Direct Sales Ideas tool provides budget-friendly strategies to boost sales efforts, enhance customer engagement, and maximize ROI with creative and impactful direct selling tactics",
      logo_url: "images/inexpensive_direct_sales.png",
    },
    28: {
      section: "customeroutreach",
      component_id: 20,
      component_name: "Innovative Ideas",
      description:
        "The Innovative Ideas tool generates creative, trend-setting concepts to enhance brand strategies, products, and services, helping businesses stay ahead with personalized solutions that engage and grow their audience.",
      logo_url: "images/innovative_idea.png",
    },
    29: {
      section: "linkedin",
      component_id: 27,
      component_name: "Linkedin commenting tool",
      description:
        "The LinkedIn Commenting Tool boosts your professional presence by guiding you to craft impactful and relevant comments, fostering meaningful interactions and establishing you as a thought leader in your industry.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin_comment.png",
    },
    30: {
      section: "linkedin",
      component_id: 35,
      component_name: "Linkedin posts",
      description:
        "LinkedIn Posts are strategically crafted to engage a professional network by showcasing expertise, sharing industry insights, and maintaining consistent brand presence, ultimately enhancing credibility and fostering meaningful professional relationships.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin.png",
    },
    31: {
      section: "linkedin",
      component_id: 37,
      component_name: "LinkedIn skill assessment tool",
      description:
        "The LinkedIn Skill Assessment Tool is an intelligent AI-driven assistant designed to accurately solve varied MCQ questions, enabling users to validate their expertise and showcase skills effectively on their LinkedIn profiles.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin_skill_assessment.png",
    },
    32: {
      section: "linkedin",
      component_id: 26,
      component_name: "LinkedIn's top voice helper",
      description:
        "LinkedIn Top Voice Helper boosts your influence by enhancing content and engagement strategies, offering personalized, data-driven insights to maximize your impact and reach as an industry leader.\n",
      logo_url: "images/linkedin_topvoice.png",
    },
    33: {
      section: "branding",
      component_id: 19,
      component_name: "Positioning Statement",
      description:
        "The Positioning Statement tool clarifies and communicates your brand's unique market position, aligning strengths with customer needs to ensure a compelling and memorable foundation for all marketing efforts",
      logo_url: "images/positioning.png",
    },
    34: {
      section: "essential",
      component_id: 10,
      component_name: "PPC helper",
      description:
        "PPC Helper boosts your digital advertising strategies with detailed analytics, automated bid management, and targeted campaigns, ensuring maximum ROI in the pay-per-click world.\n",
      logo_url: "images/ppc_helper.png",
    },
    35: {
      section: "customeroutreach",
      component_id: 11,
      component_name: "Quora answer",
      description:
        "Quora Answer optimizes your Quora engagement by analyzing top answers and suggesting improvements, helping you craft authoritative responses that boost visibility and establish thought leadership.",
      logo_url: "images/quora_answer.png",
    },
    36: {
      section: "copywriting",
      component_id: 4,
      component_name: "Sales punchline",
      description:
        "Sales Punchlines deliver catchy, memorable phrases that encapsulate product benefits and solve customer pain points, boosting interest, brand recall, and conversions.\n",
      logo_url: "images/sales_punchline.png",
    },
    37: {
      section: "socialmedia",
      component_id: 1,
      component_name: "Social media posts",
      description:
        "Social Media Posts empower brands with strategic Instagram content, including captivating visuals, reels, and stories, to enhance visibility, foster engagement, and align with marketing goals through consistent planning and creative execution.\n",
      logo_url: "images/social_media_posts.png",
    },
    38: {
      section: "essential",
      component_id: 7,
      component_name: "Stock image generation",
      description:
        "The Stock Image Generator leverages AI to craft unique, high-quality images from specific prompts, transforming content creation with instant, personalized visuals for any purpose.",
      logo_url: "images/stock_image.png",
    },
    39: {
      section: "branding",
      component_id: 24,
      component_name: "Swot analysis",
      description:
        "The SWOT Analysis tool provides a clear framework for identifying and evaluating strengths, weaknesses, opportunities, and threats, empowering businesses to make informed decisions and strategic plans with confidence.",
      logo_url: "images/swot_analysis.png",
    },
    40: {
      section: "socialmedia",
      component_id: 9,
      component_name: "Viral content strategy",
      description:
        "Viral Content Strategy is an innovative tool that crafts powerful Instagram content calendars using data-driven insights, tailored to boost engagement and maximize online presence for brands and influencers.\n",
      logo_url: "images/viral_content_strat.png",
    },
    41: {
      section: "copywriting",
      component_id: 5,
      component_name: "Website content writer",
      description:
        "A Website Content Writer crafts engaging and SEO-friendly digital content that enhances online presence, conveys brand messages, and boosts search rankings to drive visitor action and website success.\n",
      logo_url: "images/website_content_writer.png",
    },
    42: {
      section: "copywriting",
      component_id: 29,
      component_name: "Write like me",
      description:
        " Write Like Me is an innovative tool that replicates your unique writing style, ensuring content remains true to your personal or brand voice while maintaining consistency across all written materials.",
      logo_url: "images/write_like_me.png",
    },
  };
  const subtopicsContainer = document.getElementById("subtopicsContainer");

  // Function to create subtopic sections dynamically
  function createSubtopicSections() {
    // Group data by section
    const sectionGroups = {};
    Object.values(data).forEach((item) => {
      if (!sectionGroups[item.section]) {
        sectionGroups[item.section] = [];
      }
      sectionGroups[item.section].push(item);
    });

    // Clear existing content
    subtopicsContainer.innerHTML = "";

    // Create sections for each section group
    Object.keys(sectionGroups).forEach((sectionName) => {
      const sectionItems = sectionGroups[sectionName];

      sectionItems.forEach((item) => {
        const subtopicSection = document.createElement("section");
        subtopicSection.classList.add("subtopic-card");
        subtopicSection.classList.add(`${sectionName}-subtopics`);
        subtopicSection.setAttribute("data-title", item.component_name);
        subtopicSection.setAttribute("tabindex", "0");

        subtopicSection.innerHTML = `
          <div class="card-info">
            <h2>${item.component_name}</h2>
            <p>${item.description}</p>
              ${
                item.validation
                  ? `<ul class="validation-list">
            ${item.validation
              .split("\n")
              .map((line) => {
                const [boldText, ...regularText] = line.split(":");
                return `<li>
                          <strong>${boldText.trim()}:</strong> 
                          ${regularText.join(":").trim()}
                        </li>`;
              })
              .join("")}
           </ul>`
                  : ""
              }
                     </div>
          <div class="card-visual">
            <img 
              src="${item.logo_url}" 
              alt="${item.component_name} Icon" 
            />
          </div>
        `;

        subtopicsContainer.appendChild(subtopicSection);
      });
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

  // Search Functionality
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const subtopicCards = document.querySelectorAll(".subtopic-card");

    subtopicCards.forEach((card) => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(query) ? "grid" : "none";
    });
  });

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
