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
        name: "Siteefy",
        url: "https://siteefy.com/how-many-websites-are-there/",
        date: "28.02.2022"
    },
    {
        name: "Website Carbon Calculator",
        url: "https://www.websitecarbon.com/",
        date: "28.02.2022"
    },
    {
        name: "Thanks in Advance",
        url: "https://thanks-in-advance.com/",
        date: "28.02.2022"
    },
    {
        name: "EPA",
        url: "https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator",
        date: "28.02.2022"
    },
    {
        name: "RESET Digital for good",
        url: "https://en.reset.org/whats-carbon-footprint-your-website/",
        date: "28.02.2022"
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
        text: "The amount of carbon emissions per energy unit varies in the region. If you want to know what’s the number of CO2 for " +
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
    text: "lorem impsum bla bla bla"
}

export const termsOfConditions = {
    title: "Terms of Conditions",
    text: "lorem impsum bla bla bla"
}
