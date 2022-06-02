import Kasia from './images/Kasia.jpg';
import Malwina from './images/Malwina.jpg';
import Ania from './images/Ania.jpg';
import Julia from './images/Julia.jpeg';

export const banner = {
    logo: "{e}",
    goal: "Create sustainable digital environment with",
    name: "ec0lint",
    email: "ec0lint@tutanota.com"
}

export const gitHubUrl = "https://github.com/ec0lint/ec0lint";

export const whySection = {
    title: "Why?",
    text: [
        "Did you know that more than 250 000 web pages are published every day? " +
        "The majority of them use too heavy fonts, too large/unnecessary images or utilize redundant libraries. " +
        "These factors, and more, generate carbon footprint. Actually, ",
        "one view of an average website generates 4.6 g CO2, which amounts to 552 kg CO2 annually",
        " (10 000 monthly views on average). Unfortunately, current solutions optimize only already existing websites."
    ]
};

export const ec0lintIsSection = {
    title: "ec0lint is...",
    text: "...a tool for frontend developers that mitigates the " +
    "carbon footprint of websites. It shows tips used to create a more eco-friendly web page code."
};

export const impactSection = {
    title: "Impact",
    cards: [
        [
            "Thanks to code optimization we can help in ",
            "reducing CO2 emissions ",
            "per one click from 4.6 g to ~0.2 g so to only 24 kg CO2 annually, saving 528 kg CO2 (-96%!)."
        ],
        [ "Free, open-source solution." ],
        [ "The community can help in scaling up the tool and deciding on the most emerging features." ]
    ]
};

export const donateSection = "We'd be thankful if you would like to support our work by pressing the donate " +
"button. We truly care about the environment and want to keep on developing ec0lint. Thanks!";

export const donateUrl = "";

export const references = [
    {
        text: "Siteefy",
        url: "https://siteefy.com/how-many-websites-are-there/",
        accessed: "28.02.2022"
    },
    {
        text: "Website Carbon Calculator",
        url: "https://www.websitecarbon.com/",
        accessed: "28.02.2022"
    },
    {
        text: "Thanks in Advance",
        url: "https://thanks-in-advance.com/",
        accessed: "28.02.2022"
    },
    {
        text: "EPA",
        url: "https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator",
        accessed: "28.02.2022"
    },
    {
        text: "RESET Digital for good",
        url: "https://en.reset.org/whats-carbon-footprint-your-website/",
        accessed: "28.02.2022"
    }
];

export const getStartedForUsers = "Have you ever heard of ESLint? You use it daily? Great! ec0lint is " + 
    "pretty much ESLint, but it helps you to mitigate the carbon footprint of a web page. \n" + 
    "That's why we won't write long poems as ESLint did, once was enough. We'll forward you to their site.";

export const getStartedInANutshell = "In a nutshell: \n\n" +
    "1) Make sure you have Node installed\n" + 
    "2) Download ec0lint: npm i @ec0lint \n" +
    "3) Configure your project: npm init @ec0lint/config" +
    "4) Let's go and build a web page!";

export const featuresPage = {
    title: "Currently",
    text: [
        "At the moment, we want to deploy the first three features, namely:",
        "Eventually, we aim to automate our solution. One-click and you can start discovering a green " +
        "version of your website."
    ],
    mainFeatures: [
        {
            title: "Woff Woff! Font format validation",
            text: "If a font format isn't WOFF, up to 75% more space for the font will be taken. Let's change them all to WOFF!"
        },
        {
            title: "Replacement of heavy libraries functions",
            text: "Heavy library calls can be replaced by plain JS code. In the case of axios - when all axios functions will be " +
                "removed from the code, the axios module can be deleted, saving 400 kB of space. "
        },
        {
            title: "TBD",
            text: "tbd"
        }
    ]
};

export const CO2Calculation = {
    title: "How do we calculate CO2 savings?",
    intro: "Calculating greenhouse gas emissions of websites is difficult as many energy consuming components of the Internet " +
        "infrastructure have to be taken into account. We decided to use an off-the-shelf methodology to estimate carbon emissions " +
        "of digital products that was established by Wholegrain Digital, Green Web Foundation, Mightbytes, EcoPing, and Medina Works. ",
    formula: {
        title: "The formula",
        equasion: "Emissions of CO2 Per One Website Visit = (Data Transfer of the First Visit x 75% + Data Transfer of the Returning Visit x 25%) x Energy Emissions",
        description: {
            intro: "in which:",
            points: [
                { name: "Data Transfer of the First Visit", description: "Energy of The Website"},
                { name: "Data Transfer of the Returning Visit", description: "Energy of The Webpage x 2% "},
                { name: "Energy of The Webpage", description: "Webpage Size x End-User Traffic"},
                { name: "Energy Emissions", description: "442 g/kWh"},
                { name: "End-User Traffic", description: "0.81 kWh/GB"}
            ],
        },
        footNote: "Having this formula makes the CO2 estimation very easy, as the only parameter we need to know is the size of a website. ec0lint calculates it " +
           "with every code compilation and thus, we get the carbon saving with each hint."
    },
    assumptions: {
        title: "Assumptions of the formula",
        bulletPoints: [
            "The carbon footprint of the global grid equals 442 g per kWh of consumed energy.",
            "Annual Internet Energy (End User Traffic) is set to an average value of 0.81 kWh " +
            "per GB of data sent over the Internet. ",
            "To correct estimate the number of users interacting with the web page, the methodology assumes there are 75% of users " +
            "who open the page just once, and the rest – 25% - return, loading 2% of data during the second view. "
        ]
    },
    finalRemarks: {
        title: "Final remarks",
        text: "The amount of carbon emissions per energy unit varies in the region. If you want to know what's the number of CO2 for " +
            "specific locations, please refer to “Technology-specific Cost and Performance Parameters” by IPCC, and if you wish to know " +
            "more about the differences, we suggest reading the article “Why do estimates of Internet energy consumption vary so drastically?” " +
            "published by Whole Grain Digital."
    },
    references: [
        {
            text: "Sustainable Web Design",
            url: "https://sustainablewebdesign.org/calculating-digital-emissions/",
            accessed: "08.05.2022"
        },
        {
            text: "Ptolemy Institute of Scientific Research and Technology",
            url: "https://pisrt.org/psr-press/journals/easl-vol-3-issue-2-2020/new-perspectives-on-internet-electricity-use-in-2030/",
            accessed: "08.05.2022"
        },
        {
            text: "Technology-specific Cost and Performance Parameters, Intergovernmental Panel on Climate Change",
            url: "https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf",
            accessed: "08.05.2022"
        },
        {
            text: "Whole Grain Digital",
            url: "https://www.wholegraindigital.com/blog/website-energy-consumption/",
            accessed: "08.05.2022"
        }
    ]
};

export const privacyPolicy = {
    title: "Privacy Policy",
    text: <span style={{ whiteSpace: 'pre-wrap' }}>Updated at 2022-01-29
    
        ec0lint (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by ec0lint.

        \n This Privacy Policy applies to our website, and its associated subdomains (collectively, our “Service”) alongside our application, ec0lint. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms and Conditions.

        Definitions and key terms

        To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, are strictly defined as:

        <ul>Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</ul>
        <ul>Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to ec0lint, that is responsible for your information under this Privacy Policy.</ul>
        <ul>Country: where ec0lint or the owners/founders of ec0lint are based, in this case is Poland.</ul>
        <ul>Customer: refers to the company, organization or person that signs up to use the ec0lint Service to manage the relationships with your consumers or service users.</ul>
        <ul>Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit ec0lint and use the services.</ul>
        <ul>IP address: Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet.</ul>
        <ul>Personnel: refers to those individuals who are employed by ec0lint or are under contract to perform a service on behalf of one of the parties.</ul>
        <ul>Personal Data: any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</ul>
        <ul>Service: refers to the service provided by ec0lint as described in the relative terms (if available) and on this platform.</ul>
        <ul>Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</ul>
        <ul>Website: ec0lint."'s" site, which can be accessed via this URL: ec0lint.com.</ul>
        <ul>You: a person or entity that is registered with ec0lint to use the Services.</ul>

        Information automatically collected

        There is some information like your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our platform. This information may be used to connect your computer to the Internet. Other information collected automatically could be a login, e-mail address, password, computer and connection information such as browser plug-in types and versions and time zone setting, operating systems and platforms, purchase history, (we sometimes aggregate with similar information from other Users), the full Uniform Resource Locator (URL) clickstream to, through and from our Website that may include date and time; cookie number; parts of the site you viewed or searched for; and the phone number you used to call our Customer Services. We may also use browser data such as cookies, Flash cookies (also known as Flash Local Shared Objects) or similar data on certain parts of our Website for fraud prevention and other purposes. During your visits, we may use software tools such as JavaScript to measure and collect session information including page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page. We may also collect technical information to help us identify your device for fraud prevention and diagnostic purposes.
        
        Sale of Business
        
        We reserve the right to transfer information to a third party in the event of a sale, merger or other transfer of all or substantially all of the assets of ec0lint or any of its Corporate Affiliates (as defined herein), or that portion of ec0lint or any of its Corporate Affiliates to which the Service relates, or in the event that we discontinue our business or file a petition or have filed against us a petition in bankruptcy, reorganization or similar proceeding, provided that the third party agrees to adhere to the terms of this Privacy Policy.
    
        Affiliates
        
        We may disclose information (including personal information) about you to our Corporate Affiliates. For purposes of this Privacy Policy, "Corporate Affiliate" means any person or entity which directly or indirectly controls, is controlled by or is under common control with ec0lint, whether by ownership or otherwise. Any information relating to you that we provide to our Corporate Affiliates will be treated by those Corporate Affiliates in accordance with the terms of this Privacy Policy.
        
        Governing Law

        This Privacy Policy is governed by the laws of Poland without regard to its conflict of laws provision. You consent to the exclusive jurisdiction of the courts in connection with any action or dispute arising between the parties under or in connection with this Privacy Policy except for those individuals who may have rights to make claims under Privacy Shield, or the Swiss-US framework.

        The laws of Poland, excluding its conflicts of law rules, shall govern this Agreement and your use of the website. Your use of the website may also be subject to other local, state, national, or international laws.

        By using ec0lint or contacting us directly, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, you should not engage with our website, or use our services. Continued use of the website, direct engagement with us, or following the posting of changes to this Privacy Policy that do not significantly affect the use or disclosure of your personal information will mean that you accept those changes.

        Your Consent

        We've updated our Privacy Policy to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our website, registering an account, or making a purchase, you hereby consent to our Privacy Policy and agree to its terms.

        Links to Other Websites

        This Privacy Policy applies only to the Services. The Services may contain links to other websites not operated or controlled by ec0lint. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website's own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.

        Cookies

        ec0lint uses "Cookies" to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the website as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.

        Blocking and disabling cookies and similar technologies

        Wherever you're located you may also set your browser to block cookies and similar technologies, but this action may block our essential cookies and prevent our website from functioning properly, and you may not be able to fully utilize all of its features and services. You should also be aware that you may also lose some saved information (e.g. saved login details, site preferences) if you block cookies on your browser. Different browsers make different controls available to you. Disabling a cookie or category of cookie does not delete the cookie from your browser, you will need to do this yourself from within your browser, you should visit your browser's help menu for more information.

        Kids' Privacy

        We collect information from kids under the age of 13 just to better our services. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data without your permission, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

        Changes To Our Privacy Policy

        We may change our Service and policies, and we may need to make changes to this Privacy Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Privacy Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Privacy Policy. If you do not want to agree to this or any updated Privacy Policy, you can delete your account.

        Third-Party Services

        We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services ("Third- Party Services").

        You acknowledge and agree that ec0lint shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. ec0lint does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.

        Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties' terms and conditions.

        Information about General Data Protection Regulation (GDPR)

        We may be collecting and using information from you if you are from the European Economic Area (EEA), and in this section of our Privacy Policy we are going to explain exactly how and why is this data collected, and how we maintain this data under protection from being replicated or used in the wrong way.

        What is GDPR?

        GDPR is an EU-wide privacy and data protection law that regulates how EU residents' data is protected by companies and enhances the control the EU residents have, over their personal data.

        The GDPR is relevant to any globally operating company and not just the EU-based businesses and EU residents. Our customers' data is important irrespective of where they are located, which is why we have implemented GDPR controls as our baseline standard for all our operations worldwide.

        What is personal data?

        Any data that relates to an identifiable or identified individual. GDPR covers a broad spectrum of information that could be used on its own, or in combination with other pieces of information, to identify a person. Personal data extends beyond a person's name or email address. Some examples include financial information, political opinions, genetic data, biometric data, IP addresses, physical address, sexual orientation, and ethnicity.

        The Data Protection Principles include requirements such as:
        <ul>Personal data collected must be processed in a fair, legal, and transparent way and should only be used in a way that a person would reasonably expect.</ul>
        <ul>Personal data should only be collected to fulfil a specific purpose and it should only be used for that purpose. Organizations must specify why they need the personal data when they collect it.</ul>
        <ul>Personal data should be held no longer than necessary to fulfil its purpose.</ul>
        <ul>People covered by the GDPR have the right to access their own personal data. They can also request a copy of their data, and that their data be updated, deleted, restricted, or moved to another organization.</ul>

        Why is GDPR important?

        GDPR adds some new requirements regarding how companies should protect individuals' personal data that they collect and process. It also raises the stakes for compliance by increasing enforcement and imposing greater fines for breach. Beyond these facts it's simply the right thing to do. At ec0lint we strongly believe that your data privacy is very important and we already have solid security and privacy practices in place that go beyond the requirements of this new regulation.

        Individual Data Subject's Rights - Data Access, Portability and Deletion

        We are committed to helping our customers meet the data subject rights requirements of GDPR. ec0lint processes or stores all personal data in fully vetted, DPA compliant vendors. We do store all conversation and personal data for up to 6 years unless your account is deleted. In which case, we dispose of all data in accordance with our Terms of Service and Privacy Policy, but we will not hold it longer than 60 days.

        We are aware that if you are working with EU customers, you need to be able to provide them with the ability to access, update, retrieve and remove personal data. We got you! We've been set up as self service from the start and have always given you access to your data and your customers data. Our customer support team is here for you to answer any questions you might have about working with the API.

        Contact Us

        Don't hesitate to contact us if you have any questions.

        Via Email: ec0lint@tutanota.com"</span>
}

export const termsOfConditions = {
    title: "Terms of Conditions",
    text: "lorem impsum bla bla bla"
}

export const useCases = {
    title: "But hey, for now, you can learn why we designed our website the way we did.",
    bulletPoints: [
        { 
            title: "Colors", 
            text: "You don't have to increase the screen brightness wasting your battery " +
                "and computing energy as we used high contrasting colors."
        },
        { 
            title: "Fonts", 
            text: "We used only one font hosted online, namely Fibra Code, and saved " +
                "all texts in WOFF. All website visitors can access the same hosted font file " +
                "rather than multiple versions being uploaded across the internet. Also, less variety of fonts helps."
        },
        { 
            title: "Hosting", 
            text: "The hosting provider we chose, Krystal, uses renewable energy to power its servers and " +
                "specialized in energy-efficient architecture."
        },
        { 
            title: "Illustration formats", 
            text: "All images are saved in SVG which makes them lighter than PNGs and JPGs."
        },
        { 
            title: "Static", 
            text: "We hand-coded this site which results in less energy being used by the servers."
        }
    ],
    footer: "...and, obviously, we implemented all ec0lint rules. ",
    references: [
        {
            text: "Thanks in Advance",
            url: "https://thanks-in-advance.com/",
            accessed: "14.04.2022"
        },
        {
            text: "Colorable",
            url: "https://colorable.jxnblk.com/c571ff/000000",
            accessed: "14.04.2022"
        },
        {
            text: "Krystal",
            url: "https://krystal.uk/",
            accessed: "14.04.2022"
        },
        {
            text: "WHOLEGRAINdigital",
            url: "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
            accessed: "14.04.2022"
        },
        {
            text: "Kinsta",
            url: "https://kinsta.com/blog/optimize-images-for-web/",
            accessed: "14.04.2022"
        },
        {
            text: "XDA Developers",
            url: "https://www.xda-developers.com/google-wants-developers-to-add-dark-themes-to-save-battery-life/",
            accessed: "14.04.2022"
        },
        {
            text: "AppleInsider",
            url: "https://appleinsider.com/articles/19/01/05/how-to-extend-the-battery-life-of-your-iphone-xr-or-iphone-xs-to-all-day-and-beyond",
            accessed: "14.04.2022"
        }
    ]
};

export const blog = {
    title: "Blog",
    posts: [
        {
            title: "Introduction to digital ecology",
            url: "introduction-to-digital-ecology",
            text: [
                <h5 style={{ color: '#8ECCEA' }}>Have you ever wondered how much carbon dioxide emissions your online habits generate? Till last year we haven't.</h5>,
                <h6>{"Every email you send, every movie you watch on Netflix, every music video you view on YouTube, every photograph you add on " +
                    "Instagram, and every website you design creates an invisible carbon footprint. Mainly, it's the energy needed to power your " +
                    "electronic devices and to power servers in data centers that defines someone's impact, but the whole story takes a little longer."}</h6>,
                <h5 style={{ color: '#8ECCEA' }}>What is a digital ecology?</h5>,
                <h6>{"Digital ecology is a branch of ecology that promotes green practices to fight digital pollution. And digital pollution refers to a few grams of the emitted carbon dioxide. How much is it really? The total carbon footprint of the internet, our electronic devices, and supporting elements add up to about 3.7% of global greenhouse gas emissions. It is as much as for the airline industry and the number keeps on rising. Unfortunately, the definition of digital pollution isn't well defined, there are also emissions that come from manufacturing the hardware and more."}</h6>,
                <h6>{"Let's take a closer look at how much a single activity pollutes the environment. By 2023, over 347 billion emails will be sent globally every day and each of them generates about 4 g of CO2. Another study showed that extending the lifespan of a single computer from 4 to 6 years would cut down the carbon emissions by 190 kg. NFTs bought on the Ethereum blockchain platform require as much energy as Libya every year. YouTube? It was calculated that by listening to music without watching a video emissions would be reduced by 5%. These 5% equals 11 million tonnes of carbon dioxide emissions every year. One Tweet sharing this news would cost us 0.2 g of CO2."}</h6>,                
                <h6>{"Luckily, more and more people and companies are trying to reduce their ecological impact. Microsoft and Fortum announced that they are going to heat homes and businesses with waste heat from a data center. Green web-hosting providers use renewable energy to sustain their servers. And Google pledged to operate carbon-free by 2030."}</h6>,                
                <h5 style={{ color: '#8ECCEA' }}>So, what are you going to do?</h5>       
            ],
            references: [
                {
                    text: "BBC",
                    url: "https://www.bbc.com/future/article/20200305-why-your-internet-habits-are-not-as-clean-as-you-think",
                    accessed: "18.04.2022"
                },
                {
                    text: "Forbes",
                    url: "https://www.forbes.com/sites/cognizant/2021/09/21/how-to-be-both-digital-and-green-at-the-same-time/?sh=1fe990525b5f",
                    accessed: "18.04.2022"
                },
                {
                    text: "Energuide",
                    url: "https://www.energuide.be/en/questions-answers/do-i-emit-co2-when-i-surf-the-internet/69/",
                    accessed: "18.04.2022"
                },
                {
                    text: "Eni",
                    url: "https://www.eni.com/en-IT/digital-transformation/digital-pollution.html",
                    accessed: "18.04.2022"
                },
                {
                    text: "Greenmatters",
                    url: "https://www.greenmatters.com/p/do-emails-leave-carbon-footprint",
                    accessed: "18.04.2022"
                },
                {
                    text: "Fortum",
                    url: "https://www.fortum.com/media/2022/03/fortum-and-microsoft-announce-worlds-largest-collaboration-heat-homes-services-and-businesses-sustainable-waste-heat-new-data-centre-region",
                    accessed: "18.04.2022"
                },
                {
                    text: "The Green Web Foundation",
                    url: "https://www.thegreenwebfoundation.org/",
                    accessed: "18.04.2022"
                }               
            ]
        },
        {
            title: "ec0 + lint = ec0lint",
            url: "ec0lint",
            text: [
                <h5 style={{ color: '#8ECCEA' }}>{"Hey ladies, what is the project you're working on? ec0lint, what is it? Let us explain."}</h5>,
                <h6>Did you know that 250 000 new websites are being published every day? We find it crazy. According to our research, an average website with 10 000 views every month generates 4.6 g of carbon dioxide per view. This sums up to 552 kg of CO2 annually. And this number is valid only for one single website.</h6>,
                <h6>{"Malwina and I learned about digital ecology for the first time during a hackathon. At first, we wanted to work on an app that would teach the users how to establish habits aligned with digital ecology. However, what is the purpose of creating an intensive in emissions app if you can come up with something else instead? We found a website called Sustainable Web Design and learned how much carbon footprint is being generated by web pages. We looked at already existing solutions, but all of them help in optimizing already released websites. “It would be ideal if a frontend developer would know what to improve before the website is published” I said. And this thought ignited an idea in Malwina's mind."}</h6>,
                <h6>Frontend developers use daily a tool called ESlint. It shows comments that something is missing in the code. For example, it tells you to add a semi-comma. This tool is well-known in the programming world and thus, we used this concept for building our tool.</h6>,
                <h5 style={{ color: '#8ECCEA' }}>So, what exactly is ec0lint?</h5>,
                <h6>ec0lint is a tool for frontend developers that helps in mitigating the carbon footprint of websites. You can use it already during the coding process to prevent a carbon-heavy web page from publishing. ec0lint advices you on what to change in your code to minimize the size of different components. For example, if you change the font format from TOFF to WOFF you save up to 75% of space. The font will look exactly the same for the end-users, but you'll know. It is all about minimizing the space taken by various elements of the website. In our next article, you'll learn how to precisely calculate the carbon emissions of a website.</h6>,
                <h6>Hey, but how many grams of carbon dioxide are we exactly talking about? Thanks to code optimization we can help in reducing CO2 emissions per one view from 4.6 g to ~0.2 g so to only 24 kg CO2 per website annually, saving 529 kg CO2 (-96%!). </h6>,
                <h6>We're already dreaming of the near future when we'll optimize the process so that a programmer could by one click change the whole website to its eco-friendly version. And this isn't the end. After we finish ec0lint we want to take a closer look at WordPress and develop a suitable plugin.</h6>,
                <h5 style={{ color: '#8ECCEA' }}>We hope that you'll learn a lot from us and that most of you will use ec0lint on a day-to-day basis.</h5>
            ]
        },
        {
            title: "Change your online habits",
            url: "change-your-online-habits",
            text: [
                <h6>We always knew that my online activities impact climate change, but as their consequences are invisible, I kept on ignoring the topic. Exactly one year ago, we started learning more about digital pollution and discovered the term digital ecology. In this article, we want to share with you tips and tricks on how to act against internet pollution on a day-to-day basis.</h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>1. Deceitful videos</h5>
                    <ul>Videos account for 1% of global emissions consuming the same amount of energy as Spain. If it's possible, block the automatic playing of videos. </ul>
                    <ul>According to the International Energy Agency (IEA), watching Netflix for an hour entails 36 g of CO2. Watching films in lower definition reduces data traffic significantly and thus, lowers the amount of energy needed to power the platform. This works for other platforms like YouTube. Alternatively, you can opt for downloading a video. </ul>
                    <ul>Video conferencing can be more eco-friendly if you switch off your camera.</ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>2. Email, a snake in the grass  </h5>
                    <ul>An email stored in an email account emits 19 g of CO2 annually. So, open up your mailbox and delete unnecessary emails.</ul>
                    <ul>Whenever possible, avoid sending emails. Use an internal messaging tool that consumes less energy. Slack, for example. You can also switch to SMS - sending one email generates on average 4 g of CO2 whereas an old-fashioned SMS only 0.014 g.</ul>
                    <ul>Try using an anti-spam tool. For instance, download Cleanfox to unsubscribe from all newsletters you don't read.</ul>
                    <ul>When sending an attachment, compress the file first or send it as a download link. You can try WeTransfer or Google Drive. Alternatively, think about using a USB. </ul>
                    <ul>Remove images from your email signature.</ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>3. Vicious cycle of browsing</h5>
                    <ul>Close unused tabs as each web page that remains open is continuously connected to its server.  </ul>
                    <ul>When you want to visit a page which address you know by heart, write its address directly in the bar of a browser instead of in the search engine.  </ul>
                    <ul>Avoid repeating identical searches by using bookmarks.</ul>
                    <ul>Utilize an eco-responsible web search engine like Ecosia or Lilo.  </ul>
                    <ul>Rethink your keywords. The more precise you are, the more energy you save. </ul>
                    <ul>Remember to erase old media on your social platforms from time to time.  </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>4. Casting a cloud on the cloud </h5>
                    <ul>One hundred zettabytes of data will be stored in the cloud by 2025 and such online storage solutions consume a lot of energy. Try periodically deleting data from your cloud or favor storing them on an external hard drive instead.  </ul>
                    <ul>Before choosing a cloud service, get familiar with the company's mission and opt for the most environmental-friendly choice.  </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>5. Criminal cryptocurrency</h5> 
                    <ul>According to researchers from the University of Cambridge, bitcoin uses 0.21% of the world's energy supply according. Have you ever heard of Cardano which claims to be 37,500 times more energy-efficient than Bitcoin? How about Solarcoin?  </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>6. Your devices, perennial comrade</h5>
                    <ul>Changing smartphones or computers less often has a positive impact on the planet. Replacing computers every 6 years instead of 4 saves 190 kg of CO2 emissions per person.  </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>7. Heavenly disconnecting</h5>
                    <ul>Disconnect whenever your hectic life allows you to.  </ul>
                    <ul>Delete mobile apps you barely use.  </ul>
                    <ul>Disable mobile notifications.  </ul>
                    <ul>Unplug your router at night to save some energy.  </ul>
                </h6>
            ],
            references: [
                {
                    text: "World Economic Forum",
                    url: "https://www.weforum.org/agenda/2021/12/digital-carbon-footprint-how-to-lower-electronics/",
                    accessed: "08.05.2022"
                },  
                {
                    text: "ELLE",
                    url: "https://elle.in/article/the-rising-impact-of-digital-pollution-and-how-we-can-reduce-it/",
                    accessed: "08.05.2022"
                },  
                {
                    text: "Welcome to the Jungle",
                    url: "https://www.welcometothejungle.com/en/articles/how-to-reduce-digital-pollution",
                    accessed: "08.05.2022"
                },  
                {
                    text: "eni",
                    url: "https://www.eni.com/en-IT/digital-transformation/digital-pollution.html",
                    accessed: "08.05.2022"
                },       
                {
                    text: "youmatter",
                    url: "https://youmatter.world/en/reduce-environmental-impact-internet/",
                    accessed: "08.05.2022"
                },  
                {
                    text: "earthday",
                    url: "https://earthday.ca/2020/04/07/why-and-how-to-reduce-digital-pollution-in-the-office/",
                    accessed: "08.05.2022"
                },  
                {
                    text: "Climate Consulting by Selectra",
                    url: "https://climate.selectra.com/en/environment/internet-pollution",
                    accessed: "08.05.2022"
                },  
                {
                    text: "Cardano Feed",
                    url: "https://cardanofeed.com/6-most-eco-friendly-cryptocurrencies-in-2021-7016.html",
                    accessed: "11.05.2022"
                },     
                {
                    text: "The Times",
                    url: "https://www.thetimes.co.uk/money-mentor/article/eco-friendly-cryptocurrencies/",
                    accessed: "11.05.2022"
                }
            ]
        }
    ]
};

export const team = {
    title1: "Steering Commitee",
    intro: "We met each other for the first time in 2018 during the scholarship program called \"New Technologies for Women\" organized by Intel and Perspektywy Women in Tech. In 2021, we participated in \"LeaderSHEp in Tech Academy\" and therefore, we were invited to take part in a hackathon about digital ecology. We won it by presenting ec0lint and here we are - developing the project further.  ",
    title2: "Contributors",
    footer: "",
    committee: [
        {
            name: "Katarzyna Wojdalska",
            photo: <img src={Kasia} className="circlePhoto" alt="Katarzyna Wojdalska" />,
            linkedin: "https://www.linkedin.com/in/k-wojdalska/"
        },
        {
            name: "Malwina Kubas",
            photo: <img src={Malwina} className="circlePhoto" alt="Malwina Kubas" />,
            linkedin: "https://www.linkedin.com/in/malwina-kubas/",
            github: "https://github.com/malwinq"
        }
    ],
    contributors: [
        {
            name: "Anna Gut",
            photo: <img src={Ania} className="circlePhoto" alt="Anna Gut" />,
            linkedin: "https://www.linkedin.com/in/anna-gut-376b93208/",
            github: "https://github.com/aniagut"
        },
        {
            name: "Julia Ziębińska",
            photo: <img src={Julia} className="circlePhoto" alt="Julia Ziębińska" />,
            linkedin: "https://www.linkedin.com/in/julia-zi%C4%99bi%C5%84ska/",
            github: "https://github.com/nemmip"
        }
    ]
}
