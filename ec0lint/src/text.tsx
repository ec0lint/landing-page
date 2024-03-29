import Kasia from './resources/Kasia.webp';
import Malwina from './resources/Malwina.webp';
import Ania from './resources/Ania.webp';
import Julia from './resources/Julia.webp';
import Natalia from './resources/Natalia.webp';
import Martyna from './resources/Martyna.webp';
import Ola from './resources/Ola.webp';
import Marta from './resources/Marta.webp';
import Gosia from './resources/Gosia.webp';
import Joanna from './resources/Joanna.webp';
import website_1 from './resources/website_1.webp';
import website_2 from './resources/website_2.webp';
import website_3 from './resources/website_3.webp';
import website_4 from './resources/website_4.webp';
import website_5 from './resources/website_5.webp';
import iec from './resources/iec.webp';
import helsinki1 from './resources/helsinki1.webp';
import helsinki2 from './resources/helsinki2.webp';
import perspektywy from './resources/perspektywy.webp';
import ing from './resources/ing.webp';
import reactIndia from './resources/reactindia.webp';
import weAreDevelopers from './resources/wearedevelopers.webp';
import react from './resources/react.webp';
import conf42 from './resources/conf42.webp';
import xtremejs from './resources/xtremejs.webp';
import kdi from './resources/kdi.webp';
import lighterImageFile from './resources/lighter-image-file.webp';
import efficientBackgroundFig2 from './resources/efficient-background.webp'
import efficientBackgroundFig1 from './resources/efficientBackgroundFigure1.webp'
import React from "react";

export const banner = {
    logo: "{e}",
    goal: "Create sustainable digital environment with",
    name: "ec0lint",
    email: "ec0lint@tutanota.com"
}

export const gitHubUrl = "https://github.com/ec0lint/ec0lint";
export const linkedInUrl = "https://linkedin.com/company/ec0lint";
export const krystalUrl = "https://krystal.uk/green";

export const whySection = {
    title: "Why?",
    text: [
        "Did you know that more than 250 000 web pages are published every day? " +
        "The majority of them uses too heavy fonts, too large/unnecessary images or utilizes redundant libraries. " +
        "These factors, and more, generate carbon footprint. Actually, ",
        "one view of an average website generates 1.8 g CO2, which amounts to 216 kg CO2 annually",
        " (10 000 monthly views on average). Unfortunately, current solutions optimize only already existing websites."
    ]
};

export const ec0lintIsSection = {
    title: "#For developers",
    subtitle: "ec0lint is...",
    text: "...a tool for frontend developers that mitigates the " +
        "carbon footprint of websites. It shows tips used to create a more eco-friendly web page code."
};

export const forBusinessSection = {
    title: "#For business",
    subtitle: "What can we do for your organisation?"
};

export const impactSection = {
    title: "Impact",
    cards: [
        [
            "Thanks to code optimization we can help in ",
            "reducing CO2 emissions ",
            "per one click from 1.8 g to ~0.2 g so to only 24 kg CO2 annually, saving 198 kg CO2 (-88%!)."
        ],
        ["Free, open-source solution - everyone has access to the code and can participate in ec0lint's development."],
        ["The community can help in scaling up the tool and deciding on the most emerging features."]
    ]
};

export const donateSection = {
    title: "Donate now",
    text: "We'd be thankful if you'd like to support our work by pressing the donate " +
    "button. We truly care about the environment and want to keep on developing ec0lint. Thanks!"
};

export const donateUrl = "https://opencollective.com/ec0lint";

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
        text: "WIRED",
        url: "https://www.wired.co.uk/article/internet-carbon-footprint",
        accessed: "18.09.2022"
    },
    {
        text: "RESET Digital for good",
        url: "https://en.reset.org/whats-carbon-footprint-your-website/",
        accessed: "28.02.2022"
    }
];

export const getStartedForUsers = <span>{"Have you ever heard of ESLint? You use it daily? Great! ec0lint is "}
    {"pretty much ESLint, but it helps you to mitigate the carbon footprint of a web page. \n\n\n"}
    {"That's why we won't write long poems as ESLint did, once was enough. We'll forward you to "}
    <a target="_blank" rel="noreferrer" href="https://eslint.org/docs/user-guide/getting-started" className="link">their site.</a></span>;

export const featuresPage = {
    title: "Highlights",
    text: [
        "At the moment, we deployed the first three features, namely:",
        "Eventually, we aim to automate our solution. One click and you can start discovering a green " +
        "version of your website."
    ],
    mainFeatures: [
        {
            title: "Woff Woff! Font format validation",
            text: "If a font format isn't WOFF or WOFF2, the font takes up to 70% more disk space. Let's change them all to WOFF2!",
            url: "/no-ttf-font-files"
        },
        {
            title: "Replacement of heavy libraries functions",
            text: "Heavy library calls can be replaced by plain JS code or lighter libraries. In the case of axios - when all axios functions will be " +
                "removed from the code, the module can be deleted, saving 440 kB of space (0.16 g CO2 per view). ",
            url: "/lighter-http"
        },
        {
            title: "Lighter image files",
            text: "Image files inside web application should have WebP format - these formats can crunch large images down into more manageable sizes. We can achieve 99% reduction of file size using these formats over PPM, PS, RGB or PNG file. ",
            url: "/lighter-image-files"
        }
    ],
    allFeaturesTitle: "All features"
};

export const servicesPage = {
    text: [
        "We have a lot to offer",
        "Except for ec0lint we are always happy to share our knowledge and help organisations become more environment-friendly. " +
        "We will help you identify and reduce the carbon footprint of your website and learn about digital ecology. ",
        "Services",
        "Need",
        "help?",
        "Schedule a free call",
        "Meet us:"
    ],
    services: [
        {
            title: "Website audits",
            text: "We will identify your website's ecological impact and provide you with recommendations how to improve it."
        },
        {
            title: "Website optimisation",
            text: "We can make your current website lighter and reduce its carbon footprint."
        },
        {
            title: "Discovery workshops",
            text: "We are always eager to talk about digital ecology and how to implement its principles into daily practices of your organisation."
        }
    ],
    meetUs: [
        <span>
            <a className="link" href={"https://spolecznosc.ing.pl/-/Blog/Startup-zakodowany-na-zielone/ba-p/39931"}
               target="_blank">
                <span>Startup zakodowany na zielone...</span>
            </a>
            <span> [Accessed on the 28.12.2022]</span>
        </span>,
        <span style={{marginTop: '10px'}}>
        <a className="link"
           href={"https://portal.gitnation.org/contents/digital-ecology-how-can-you-mitigate-the-carbon-footprint-of-websites"}
           target="_blank">
            <span>ec0lint and sustainable websites in 5 minutes (React Day Berlin)</span>
        </a>
        <span> [Accessed on the 5.12.2022]</span>
        </span>,
        <span style={{marginTop: '10px'}}>
        <a className="link" href={"https://www.youtube.com/watch?v=Hy11T_eoUHg&t=6300s"}
           target="_blank">
            <span>Digital ecology - How to mitigate carbon footprint of websites? (Full presentation during React India)</span>
        </a>
        <span> [Accessed on the 24.09.2022]</span>
        </span>
    ]
}

export const features = [
    {
        name: "avoid-lodash",
        overview: <span>{"Disallows to use lodash. \n\n"}
            {"It’s a great library, but in most cases can be replaced by plain javascript.\n"}
        </span>,
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>0.5 g per website view</u>{" after removing the redundant library. By multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of a library can be calculated."}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>Name</u></td>
                        <td className="tableCell"><u>Size</u></td>
                        <td className="tableCell"><u>CO2 reduction</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">lodash</td>
                        <td className="tableCell">1.41 MB</td>
                        <td className="tableCell">0.5 g</td>
                    </tr>
                </tbody>
            </table>
            {"The library sizes were checked at "}<a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package" className="link">https://www.npmjs.com/package.</a>{" For more examples how to replace lodash with plain javascript go here: "}<a target="_blank" rel="noreferrer" href="https://youmightnotneed.com/lodash" className="link">https://youmightnotneed.com/lodash.</a>
        </span>,
        examples: "The following patterns are considered problems:\n\n/*ec0lint avoid-lodash: \"error\"*/\n\n" +
            "const lodash = require(lodash)\n\n/*ec0lint avoid-lodash: \"error\"*/\n\n " +
            "import lodash from ‘lodash’\n\n/*ec0lint avoid-lodash: \"error\"*/ \n\n" +
            "import { compact } from 'lodash'\ncompact([0, 1, 2])\n\n" +
            "The following pattern is not considered as a problem:\n\n" +
            "/*ec0lint avoid-lodash: \"error\"*/\n\n[0, 1, 2].filter(x => !!x)"
    }
    ,
    {
        name: "no-date-fns",
        overview: <span>{"Disallows to use date-fns. \n\n"}
            {"It’s a great library, but in most cases can be replaced by plain javascript.\n"}
        </span>,
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>2.26 g per website view</u>{" after removing the redundant library. By multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of a library can be calculated."}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>Name</u></td>
                        <td className="tableCell"><u>Size</u></td>
                        <td className="tableCell"><u>CO2 reduction</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">date-fns</td>
                        <td className="tableCell">6.47 MB</td>
                        <td className="tableCell">2.26 g</td>
                    </tr>
                </tbody>
            </table>
            {"The library sizes were checked at "}<a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package" className="link">https://www.npmjs.com/package.</a>{" For more examples how to replace date-fns with plain javascript go here: "}<a target="_blank" rel="noreferrer" href="https://youmightnotneed.com/date-fns" className="link">https://youmightnotneed.com/date-fns.</a>
        </span>,
        examples: "The following patterns are considered problems:\n\n/*ec0lint  no-date-fns: \"error\"*/\n\n" +
            "const date_fns = require(‘date-fns’)\n\n/*ec0lint  no-date-fns: \"error\"*/\n\n " +
            "import date_fns from ‘date-fns’\n\n/*ec0lint  no-date-fns: \"error\"*/ \n\n" +
            "const closestIndexTo = require('date-fns/closestIndexTo')\n" +
            "const dateToCompare = new Date(2015, 8, 6)\n" +
            "const datesArray = [\n" +
            "\tnew Date(2015, 0, 1),\n" +
            "\tnew Date(2016, 0, 1),\n" +
            "\tnew Date(2017, 0, 1)\n" +
            "\t]\n\n" +
            "closestIndexTo(dateToCompare, datesArray)\n\n" +
            "The following pattern is not considered as a problem:\n\n" +
            "/*ec0lint  no-date-fns: \"error\"*/\n\n" +
            "const closestIndexTo = (dateToCompare, datesArray) => \n{\n" +
            "\tconst distances = datesArray.map(date => Math.abs(date - dateToCompare));\n" +
            "\treturn distances.indexOf(Math.min(...distances));\n" +
            "}\n\n" +
            "const dateToCompare = new Date(2015, 8, 6)\n" +
            "const datesArray = [\n" +
            "\tnew Date(2015, 0, 1),\n" +
            "\tnew Date(2016, 0, 1),\n" +
            "\tnew Date(2017, 0, 1)\n" +
            "\t]\n\n" +
            "closestIndexTo(dateToCompare, datesArray)"
    },
    {
        name: "no-moment-js",
        overview: <span>{"Disallows to use moment-js. \n\n"}
            {"It’s a great library, but in most cases can be replaced by plain javascript. If you are working on a performance sensitive web application, using moment-js might cause a huge performance overhead because of its complex APIs and large bundle size. Plain javascript is much greener than moment-js.\n"}
        </span>,
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>1.48 g per website view</u>{" after removing the redundant library. By multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of a library can be calculated."}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>Name</u></td>
                        <td className="tableCell"><u>Size</u></td>
                        <td className="tableCell"><u>CO2 reduction</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">moment-js</td>
                        <td className="tableCell">4.23 MB</td>
                        <td className="tableCell">1.48 g</td>
                    </tr>
                </tbody>
            </table>
            {"The library sizes were checked at "}<a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package" className="link">https://www.npmjs.com/package.</a>{" For more examples how to replace moment-js with plain javascript go here: "}<a target="_blank" rel="noreferrer" href="https://github.com/you-dont-need/You-Dont-Need-Momentjs" className="link">https://github.com/you-dont-need/You-Dont-Need-Momentjs.</a>
        </span>,
        examples: "The following patterns are considered problems:\n\n/*ec0lint no-moment-js: \"error\"*/\n\n" +
            "const moment = require(‘moment-js’)\n\n/*ec0lint no-moment-js: \"error\"*/\n\n " +
            "import moment from ‘no-moment-js’\n\n/*ec0lint  no-moment-js: \"error\"*/ \n\n" +
            "import moment from ‘moment-js’\n\n" +
            "moment('12-25-1995', 'MM-DD-YYYY');\n\n" +
            "The following pattern is not considered as a problem:\n\n" +
            "/*ec0lint  no-moment-js: \"error\"*/\n\n" +
            "const datePattern = /^(\\d{2})-(\\d{2})-(\\d{4})$/;\n" +
            "const [, month, day, year] = datePattern.exec('12-25-1995');\n" +
            // eslint-disable-next-line no-template-curly-in-string
            "new Date(`${month}, ${day} ${year}`);"
    },
    {
        name: "no-ttf-font-files",
        overview: <span>{"Disallow using TTF custom font files. \n\n"}
            {"Fonts should be converted to WOFF or WOFF2 format. WOFF2 is now the most modern and efficient format available in browsers. It was developed by Google as an update to the original WOFF format and is considered the best format of the bunch because it offers smaller file sizes and better performance for modern browsers that support it. We can achieve almost 70% reduction of file size simply through loading a WOFF2 file over a TTF and almost 60% in case of using WOFF instead of TTF font files. \n"}
        </span>,
        CO2: <span>{"Convertion of only one of the most popular fonts used on websites – Helvetica Neue - from TTF to WOFF2 format can reduce the carbon footprint even up to "}
            <u>0.54 g per website view.</u>{" By converting the same file to WOFF format we achieve "}<u>0.35 g</u>{" CO2 reduction."}
            {"\n\nIn the table below we show carbon footprint emission depending on file format for 10 popular fonts used on websites. \n"}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>Font</u></td>
                        <td className="tableCell"><u>TTF</u></td>
                        <td className="tableCell"><u>WOFF</u></td>
                        <td className="tableCell"><u>WOFF2</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">Helvetica</td>
                        <td className="tableCell">0.89 g</td>
                        <td className="tableCell">0.54 g (-39%)</td>
                        <td className="tableCell">0.35 g (-61%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Tisa</td>
                        <td className="tableCell">0.61 g</td>
                        <td className="tableCell">0.29 g (-52%)</td>
                        <td className="tableCell">0.24 g (-61%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Montserrat</td>
                        <td className="tableCell">0.55 g</td>
                        <td className="tableCell">0.27 g (-51%)</td>
                        <td className="tableCell">0.17 g (-69%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Playfair Display</td>
                        <td className="tableCell">0.54 g</td>
                        <td className="tableCell">0.26 g (-52%)</td>
                        <td className="tableCell">0.17 g (-69%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Roboto</td>
                        <td className="tableCell">0.47 g</td>
                        <td className="tableCell">0.26 g (-45%)</td>
                        <td className="tableCell">0.18 g (-62%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Poppins</td>
                        <td className="tableCell">0.44 g</td>
                        <td className="tableCell">0.21 g (-52%)</td>
                        <td className="tableCell">0.14 g (-68%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Merriweather</td>
                        <td className="tableCell">0.42 g</td>
                        <td className="tableCell">0.24 g (-43%)</td>
                        <td className="tableCell">0.17 g (-60%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Open Sans</td>
                        <td className="tableCell">0.37 g</td>
                        <td className="tableCell">0.23 g (-48%) </td>
                        <td className="tableCell">0.17 g (-54%) </td>
                    </tr>
                    <tr>
                        <td className="tableCell">Lato</td>
                        <td className="tableCell">0.21 g</td>
                        <td className="tableCell">0.1 g (-52%)</td>
                        <td className="tableCell">0.08 g (-62%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Oxygen</td>
                        <td className="tableCell">0.13 g</td>
                        <td className="tableCell">0.08 g (-48%)</td>
                        <td className="tableCell">0.06 g (-54%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Arial</td>
                        <td className="tableCell">1.03 g</td>
                        <td className="tableCell">0.50 g (-51%)</td>
                        <td className="tableCell">0.43 g (-58%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Calibri</td>
                        <td className="tableCell">0.99 g</td>
                        <td className="tableCell">0.40 g (-60%)</td>
                        <td className="tableCell">0.34 g (-66%)</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Times New Roman</td>
                        <td className="tableCell">0.97 g</td>
                        <td className="tableCell">0.50 g (-48%)</td>
                        <td className="tableCell">0.45 g (-54%)</td>
                    </tr>
                </tbody>
            </table>
            {"By multiplying the library size by the end-user traffic (0.81 kWh / 1024 Mb) and by the energy emissions (442 g/kWh), the carbon footprint of the TTF file (2.49 MB for Helvetica Neue) – sums up to 0.89 g. For WOFF2 (0.99 MB) the carbon footprint amounts to 0.35 g and for WOFF (1.51 MB) to 0.54 g. So, by substracting 0.35 g and 0.54 g from 0.89 g we get respectively 0.54 g (61% less CO2) and 0.35 g (39% less CO2). \n\n"}
            {"TTF font file sizes were checked at "}<a target="_blank" rel="noreferrer" href="https://fonts.google.com/" className="link">https://fonts.google.com/</a>{" and converted to WOFF and WOFF2 formats on "}<a target="_blank" rel="noreferrer" href="https://cloudconvert.com/" className="link">https://cloudconvert.com/</a>{". \n"}
        </span>,
        examples: "@font-face { font-family: 'foo'; src: url('/path/to/foo.ttf'); } - Unrecommended format of the file \n\n" +
            "The following patterns are considered problems: \n\n(a) \n@font-face { font-family: 'foo'; src: url('/path/to/foo.ttf'); } \n\n" +
            "(b) \n@font-face { font-family: \"MyFont\"; src: url(\"myfont.ttf\") format(\"ttf\");} \n\n" +
            "(c) \n@font-face { \n\tfont-family: dashicons; \n" +
            "\tsrc: url(data:application/font-ttf;charset=utf-8;base64, ABCDEF==) format(\"ttf\"); \n" +
            "\tfont-weight: normal; \n\tfont-style: normal; \n } \n\n\nThe following patterns are not considered problems: \n\n" +
            "(a) \n@font-face { font-family: 'foo'; src: url('/path/to/foo.woff'); } \n\n" +
            "(b) \n@font-face { font-family: \"MyFont\"; src: url(\"myfont.woff2\") format(\"woff2\"); } \n\n" +
            "(c) \n@font-face {\n\tfont-family: dashicons; \n\tsrc: url(data:application/font-woff;charset=utf-8;base64, ABCDEF==) format(\"woff\"), \n" +
            "\turl(../fonts/dashicons.woff) format(\"truetype\"),\n\turl(../fonts/dashicons.svg#dashicons) format(\"svg\");" +
            "\n\tfont-weight: normal; \n\tfont-style: normal;\n} "
    },
    {
        name: "lighter-http",
        overview: <span>{"Disallows to use libraries like: axios, got, request, make-fetch-happen, superagent, needle, simple-get. \n\n"}
            {"Importing large sets of packages, which are doing exactly the same work as fetch, takes a large amount of disk space. Fetch API is a built-in functionality, so it's always on hand. We recommend using fetch. "}</span>,
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>0.21 g per website view</u>{" after removing a redundant library.\n\n"}
            {"By multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of a library can be calculated. \n\n"}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>Name</u></td>
                        <td className="tableCell"><u>Size</u></td>
                        <td className="tableCell"><u>CO2 reduction</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">simple-get</td>
                        <td className="tableCell">0.01 MB</td>
                        <td className="tableCell">0.003 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">make-fetch-happen</td>
                        <td className="tableCell">0.06 MB</td>
                        <td className="tableCell">0.02 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">request</td>
                        <td className="tableCell">0.2 MB</td>
                        <td className="tableCell">0.07 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">got</td>
                        <td className="tableCell">0.24 MB</td>
                        <td className="tableCell">0.08 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">needle</td>
                        <td className="tableCell">0.26 MB</td>
                        <td className="tableCell">0.09 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">axios</td>
                        <td className="tableCell">0.44 MB</td>
                        <td className="tableCell">0.16 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">superagent</td>
                        <td className="tableCell">0.58 MB</td>
                        <td className="tableCell">0.21 g</td>
                    </tr>
                </tbody>
            </table>
            {"The library sizes were checked at "}<a target="_blank" rel="noreferrer" href="https://www.npmjs.com/" className="link">www.npmjs.com/package/...</a>{". For more examples how to replace axios or other http library with plain javascript go here: "}<a target="_blank" rel="noreferrer" href="https://danlevy.net/you-may-not-need-axios/" className="link">https://danlevy.net/you-may-not-need-axios/</a></span>,
        examples: "The following patterns are considered problems: \n\n(a) /* ec0lint lighter-http: \"error\" */ \n\n" +
            "\tconst axios = require('axios') \n\n(b) /* ec0lint lighter-http: \"error\" */ \n\n\timport axios from 'axios'\n\n" +
            "(c) /* ec0lint lighter-http: \"error\" */ \n\n\timport * as axios from 'axios' \n\n\n" +
            "The following pattern is not considered as a problem: \n\n(a) /* ec0lint lighter-http: \"error\" */ \n\n fetch('https://api.github.com/orgs/nodejs')" +
            "\n\t.then(response => response.json()) \n\t.then(data => { \n\t\tconsole.log(data) // Prints result from `response.json()` in getRequest \n\t})\n\t.catch(error => console.error(error)) "
    },
    {
        name: "lighter-image-formats",
        overview: "Encourages to use WebP and SVG format of image files in CSS code. \n\n" +
            "Image files inside web application should be in  WebP and SVG format. These formats can crunch large images down into more manageable file sizes. They are on average much smaller than GIF, JPEG, PNG, even at extremely high resolutions. We can achieve up to 75% reduction of file size using SVG instead of JPG and up to 94% in case of PNG. For WebP format we get up to 60% reduction of file size in case of converting from JPG and up to 91% for PNG.",
        CO2: <span>Convertion of an exemplary image in 1800 x 1200 resolution from PNG to SVG format can reduce the carbon footprint by about <u>5.79 g CO2 per website view.</u>
            {"\n\nThe table below shows comparison between file sizes and CO2 emission for exemplary image (displayed below) in 1800 x 1200 resolution for the most popular image formats. \n"}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>File format</u></td>
                        <td className="tableCell"><u>File size</u></td>
                        <td className="tableCell"><u>CO2 emission</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">SVG</td>
                        <td className="tableCell">126 kB</td>
                        <td className="tableCell">0.04 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">WebP</td>
                        <td className="tableCell">200 kB</td>
                        <td className="tableCell">0.07 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">AVIF</td>
                        <td className="tableCell">231 kB</td>
                        <td className="tableCell">0.08 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">JPG</td>
                        <td className="tableCell">503 kB</td>
                        <td className="tableCell">0.18 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">GIF</td>
                        <td className="tableCell">913 kB</td>
                        <td className="tableCell">0.33 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">PNG</td>
                        <td className="tableCell">2 111 kB</td>
                        <td className="tableCell">0.76 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">TIFF</td>
                        <td className="tableCell">6 329 kB</td>
                        <td className="tableCell">2.27 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">PSD</td>
                        <td className="tableCell">12 657 kB</td>
                        <td className="tableCell">4.53 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">PS</td>
                        <td className="tableCell">12 825 kB</td>
                        <td className="tableCell">4.59 g</td>
                    </tr>
                </tbody>
            </table>
            <img src={lighterImageFile} alt="lighter file" className="image" />
            {"\nBy multiplying the file size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of the exemplary PNG file (2.1 MB) – sums up to 0.76 g. The same image in SVG format (126 kB) generates 0.04 g CO2. So, by substracting 0.04 g from 0.76 g we get 0.69 g. (91% less CO2). \n"}
            {"\nFor the same exemplary image in WebP (1.6 Mb) the carbon footprint amounts to 0.57g. So, by subtracting 0.57 g from 6.05 g we get 5.48 g (91% less CO2). \n"}
            {"\nExemplary image was downloaded from "}<a target="_blank" rel="noreferrer" href="https://wallpaperaccess.com/1800x1200-hd" className="link">https://wallpaperaccess.com/1800x1200-hd</a>{" and converted to different formats using "}<a target="_blank" rel="noreferrer" href="https://cloudconvert.com/" className="link">https://cloudconvert.com/</a>
        </span>,
        examples: "background-image: url('image.png');\nimport image from './image.png'; - Unrecommended format of the file \n\nThe following patterns are considered problems: \n\n(a)\nbackground-image: url('image.ppm');\nimport image from './image.png'; \n\n" +
            "(b) \nbackground-image: url('image.ps');\nimport image from './image.ppm'; \n\n(c) \nbackground-image: url('image.rgb');\nimport {ReactComponent as image} from './image.ps'; \n\n(d) \nbackground-image: url('image.png');\nlet Image = require('../src/image.rgb'); \n\n\nThe following patterns are not considered problems: \n\n" +
            "(a) \nbackground-image: url('image.webp');\nimport {ReactComponent as image} from './image.webp'; \n\n(b) \nbackground-image: url('image.svg');\nimport image from './image.svg'; \n\n(c) \nbackground-image: url('image.jpg');\nlet Image = require('../src/image.jpg'); \n\n(d) \nbackground-image: url('image.gif'); \nimport image from './image.gif'; "
    },
    {
        name: "require-font-display",
        overview: <span>{"Disallow using @font-face without font-display property. \n\n"}
            {"The font-display property supports five different values: “auto”, “block”, “swap”, “fallback”, “optional”, each describing a different method of behaviour for different scenarios. In short, it allows fine control over whether a fallback font is used immediately, and what should happen after the custom font has loaded. "}</span>,
        examples: "@font-face { font-family: 'foo'; src: url('/path/to/foo.ttf'); } \n\n" +
            "The following patterns are considered problems: \n\n(a) \n@font-face { font-family: \"MyFont\"; src: url(\"myfont.ttf\") format(\"ttf\"); } \n\n" +
            "(b) \n@font-face { font-family: \"MyFont\"; src: url(\"myfont.ttf\") format(\"ttf\"); } \n\n" +
            "(c) \n@font-face { \n\tfont-family: dashicons; \n\tsrc: url(\"myfont.ttf\") format(\"ttf\");\n" +
            "\tfont-weight: normal; \n\tfont-style: normal; \n } \n\n\nThe following patterns are not considered problems: \n\n" +
            "(a) \n@font-face { font-family: 'foo'; font-display: block; src: url('/path/to/foo.woff'); } \n\n" +
            "(b) \n@font-face { font-family: \"MyFont\"; font-display: block; src: url(\"myfont.woff2\") format(\"woff2\"); } \n\n" +
            "(c) \n@font-face {\n\tfont-family: dashicons; \n\tsrc: url(data:application/font-woff;charset=utf-8;base64, ABCDEF==) format(\"woff\"), \n" +
            "\turl(../fonts/dashicons.woff) format(\"truetype\"), \n\turl(../fonts/dashicons.svg#dashicons) format(\"svg\");" +
            "\n\tfont-weight: normal; \n\tfont-style: normal;\n} "
    },
    {
        name: "lazy-load",
        overview: `Encourages to use lazy loading for image and video files. \n\nLazy loading loads heavy elements of a website, like an image or a video, only when they’re needed. For example, images or videos further down on a website are only loaded if the user scrolls down. \n\nWith lazy loading, less data needs to be transferred and thus less energy is consumed.`,
        CO2: <span>{"By using lazy loading no unnecessary images and videos are transferred. For the file that isn’t displayed by a website user, we reduce CO2 emissions related to loading the file to 0 g.\n\n"}
            {"To calculate the combined carbon footprint of all image files on an average website (1000 kB), we multiply the file sizes by the end-user traffic (0.81 kWh/1024 MB) and by the energy emissions (442 g/kWh), which sums up to 0.36 g.\n\n"}
            {"So, by enabling lazy loading of these files, we could get 0.36 CO2 reduction (100% less CO2). \n\n"}
            {"In the case of video files (on average 3472 kB per website), we get 1.25 g CO2 reduction."}</span>,
        examples: "The following patterns are considered as problems: \n\n" +
            "(a) <video class='none'></video> \n\n" +
            "(b) <video preload='auto'></video> \n\n" +
            "(c) <img src='img.jpg'></img> \n\n" +
            "(d) <iframe data-src='img.jpg' class='none'></iframe> \n\n\n" +
            "The following patterns are not considered problems: " +
            "(a) <img src='img.jpg' loading='lazy'></img> \n\n" +
            "(b) <iframe data-src='img.jpg' class='lazy'></iframe> \n\n" +
            "(c) <img data-src='img.jpg' class='lazyload'></img> \n\n" +
            "(d) <video class='lazy'></video> "
    },
    {
        name: "lighter-video-formats",
        overview: `Encourages to use WebM video file format in React code. \n\nVideo files inside web applications should be in WebM format. It is an open, royalty-free media file format designed specifically for the web, hence it is supported by HTML and has a good compatibility with all modern browsers. Clips in the WebM format are on average much smaller than those in MP4 or OGG (other video formats supported by HTML). We can achieve even a 66% reduction of the file size using WebM instead of the popular MP4 format which quality is only slightly better.`,
        CO2: <span>{"The table below shows the comparison between file sizes and CO2 emission for a short (23 s) exemplary video (in 1366 x 720 resolution). \n\n"}
            {"Link to the exemplary video: "} <a target="_blank" rel="noreferrer" href="https://www.pexels.com/video/alpaca-closeup-5795043" className="link">https://www.pexels.com/video/alpaca-closeup-5795043</a>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>File format</u></td>
                        <td className="tableCell"><u>File size</u></td>
                        <td className="tableCell"><u>CO2 emission</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">WebM</td>
                        <td className="tableCell">2.6 MB</td>
                        <td className="tableCell">0.91 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">MP4</td>
                        <td className="tableCell">5.9 MB</td>
                        <td className="tableCell">2.06 g</td>
                    </tr>
                </tbody>
                <caption style={{ captionSide: "bottom" }}>Converting the video from MP4 to WebM format can reduce the carbon footprint by 1.15 g of CO2 per website view. </caption>
            </table>
            {"By multiplying the file size by the end-user traffic (0.81 kWh /1024MB) and by thy energy emissions (442 g / kWh), the carbon footprint of the exemplary video in MP4 sums up to 2.06 g. The same file in WebM format generates 0.91 g of CO2. So, by subtracting 0.91 g from 2.06 g, we get "}<u>1.15 g (56% less CO2)</u>{". \n\nExemplary video was downloaded from "}<a target="_blank" rel="noreferrer" href='https://www.pexels.com/search/videos' className="link">https://www.pexels.com/search/videos</a> {"and converted to WebM online with "}<a target="_blank" rel="noreferrer" href='https://www.veed.io/convert/video-converter' className="link">https://www.veed.io/convert/video-converter</a>{"."}</span>,
        examples: "The following patterns are considered problems: \n\n" +
            "(a) \nimport video from './video.ogg'; \n\n" +
            "(b) \nimport video from './video.mp4'; \n\n" +
            "(c) \nimport {ReactComponent as video} from './video.m4a'; \n\n" +
            "(d) \nimport {ReactComponent as video} from './video.m4p'; \n\n" +
            "(e) \nlet Video = require('../src/video.m4b'); \n\n" +
            "(f) \nlet Video = require('../src/video.m4r'); \n\n" +
            "(g) \nlet Video = require('../src/video.m4v'); \n\n\n" +
            "The following patterns are not considered problems: \n\n" +
            "(a) \nimport video from './video.webm'; \n\n" +
            "(b) \nimport {ReactComponent as video} from './video.webm'; \n\n" +
            "(c) \nlet Video = require('../src/video.webm'); "
    },
    {
        name: "no-ajax",
        overview: <span>{"Disallows the "}<a target="_blank" rel="noreferrer" href='https://api.jquery.com/jQuery.ajax/' className="link">/$.ajax</a><a target="_blank" rel="noreferrer" href="https://api.jquery.com/jQuery.get" className="link">/$.get</a><a target="_blank" rel="noreferrer" href='https://api.jquery.com/jQuery.getJSON/' className="link">/$.getJSON</a><a target="_blank" rel="noreferrer" href='https://api.jquery.com/jQuery.getScript/' className="link">/$.getScript</a><a target="_blank" rel="noreferrer" href="https://api.jquery.com/jQuery.post" className="link">/$.post</a>{" utilities. We recommend using Window.fetch. \n\n"}
            {"Fetch API is the new standard to replace XMLHttpRequest to do what ajax does. It works on Chrome and Firefox, you can use polyfills to make it work on legacy browsers. \n\n"}
            {"Try github/fetch on IE9+ or fetch-ie8 on IE8+, fetch-jsonp to make JSONP requests. "}</span>,
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>0.46 g per website view</u>{" if you decide to remove the jQuery library.\n\nBy multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of this library can be calculated. "}</span>,
        examples: "The following patterns are considered problems: \n\n" +
            "$.ajax({ \n\ttype: 'POST',\n\turl: '/my/url',\n\tdata: data\n});\n\n " +
            "$.ajax({\n\ttype: 'GET',\n\turl: '/my/url',\n\tsuccess: function (resp) {},\n\terror: function () {}\n}); \n\n\n" +
            "The following patterns are not considered problems: \n\n" +
            "await fetch('/my/url', {\n\tmethod: 'POST',\n\theaders: {\n\t\t'Content-Type': 'application/json'\n\t},\n\tbody: JSON.stringify(data)\n});\n\nconst response = await fetch('/my/url')\n\nif (!response.ok) {\n}\n\nconst body = await response.text(); "
    },
    {
        name: "no-ajax-events",
        overview: <span>{"Disallows to use global ajax events handlers: "}<a target="_blank" rel="noreferrer" href="https://api.jquery.com/ajaxComplete" className="link">.ajaxComplete/</a> <a target="_blank" rel="noreferrer" href="https://api.jquery.com/ajaxError" className="link">.ajaxError/</a> <a target="_blank" rel="noreferrer" href="https://api.jquery.com/ajaxSend" className="link">.ajaxSend/</a> <a target="_blank" rel="noreferrer" href="https://api.jquery.com/ajaxStart" className="link">.ajaxStart/</a> <a target="_blank" rel="noreferrer" href="https://api.jquery.com/ajaxStop" className="link">.ajaxStop/</a> <a target="_blank" rel="noreferrer" href="https://api.jquery.com/ajaxSuccess" className="link">.ajaxSuccess</a>{". We recommend using local events instead. "}</span>,
        CO2: <span>{"Using global events causes an increase in requests to the HTTP server. Global events make queries per each ajax call. Replacing these events with local ones will significantly reduce the number of requests to the server. For example:\n\n$.ajaxSuccess(callback)\n\nWill call HTTP server each time any ajax call will be resolved, but\n\n$.ajax({\n\tsuccess: callback })\n\nWill be called only on this particular ajax call.\n\nThe amount of CO2 produced varies with the amount of data transferred, on average it is "}<u>0.35 g/MB</u>{". "}</span>,
        examples: "The following patterns are considered problems: \n\n" +
            "$( document ).on( 'ajaxSend', function ( e ) { } );\n\n" +
            "$( document ).on( 'ajaxSuccess', function ( e ) { } ); \n\n" +
            "$form.on( 'ajaxError', function ( e ) { } ); \n\n" +
            "$form.on( 'ajaxComplete', function ( e ) { } ); \n\n" +
            "$form.on( 'ajaxStart', function ( e ) { } ); \n\n" +
            "$form.on( 'ajaxStop', function ( e ) { } ); \n\n" +
            "$( document ).ajaxSend( function ( e ) { } ); \n\n" +
            "$( document ).ajaxSuccess( function ( e ) { } ); \n\n" +
            "$form.ajaxError( function ( e ) { } ); \n\n" +
            "$form.ajaxComplete( function ( e ) { } ); \n\n" +
            "$form.ajaxStart( function ( e ) { } ); \n\n" +
            "$form.ajaxStop( function ( e ) { } ); \n\n\n" +
            "The following patterns are not considered problems: \n\n" +
            "$( document ).on( 'click', function ( e ) { } ); \n\n" +
            "$form.on( 'submit', function ( e ) { } ); \n\n" +
            "$form.on(); \n\n" +
            "on( 'ajaxSuccess', '.js-select-menu', function ( e ) { } ); \n\n" +
            "form.on( 'ajaxSend' ); \n\n" +
            "form.ajaxSend(); \n\n" +
            "$.ajaxSend(); "
    },
    {
        name: "no-animate",
        overview: "Disallows the .animate method. Use CSS transitions instead.",
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>0.46 g per website view</u>{" if you decide to remove the jQuery library.\n\nBy multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of this library can be calculated."}</span>,
        examples: "The following pattern is considered as a problem:\n\n" +
            "$( 'div' ).animate(); \n\n" +
            "$div.animate(); \n\n" +
            "$( 'div' ).first().animate();\n\n" +
            "$( 'div' ).append( $( 'input' ).animate() );\n\n" +
            "$div.animate( { scrollTop: 100 } ); \n\n" +
            "$div.animate( { scrollLeft: 200 } ); \n\n" +
            "$div.animate( { scrollTop: 100, scrollLeft: 200 } );\n\n" +
            "$div.animate( { scrollTop: 100, width: 300 } ); \n\n\n" +
            "The following pattern is not considered as a problem: \n\n" +
            "animate(); \n\n" +
            "[].animate(); \n\n" +
            "div.animate(); \n\n" +
            "div.animate; "
    },
    {
        name: "no-attr",
        overview: "Disallows the .attr/.removeAttr methods and $.attr/$.removeAttr utilies. We recommend using Element#getAttribute/setAttribute/removeAttribute.",
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>0.46 g per website view</u>{" if you decide to remove the jQuery library.\n\nBy multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of this library can be calculated. "}</span>,
        examples: "The following patterns is considered a problem:\n\n" +
            "$.attr(); \n\n" +
            "$( 'div' ).attr();\n\n" +
            "$div.attr(); \n\n" +
            "$( 'div' ).first().attr();\n\n" +
            "$( 'div' ).append( $( 'input' ).attr() );\n\n" +
            "$( 'div' ).attr( 'name' ); \n\n" +
            "$( 'div' ).attr( 'name', 'random' );\n\n" +
            "$.removeAttr(); \n\n" +
            "$( 'div' ).removeAttr( 'name' );\n\n\n" +
            "The following pattern is not considered as a problem:\n\n" +
            "el.getAttribute('tabindex'); \n\n" +
            "el.removeAttribute('tabindex'); \n\n" +
            "el.setAttribute('tabindex', 3); "
    },
    {
        name: "no-autoplay",
        overview: "Disallows the autoplay property of YouTube videos embedded in your web application.\n\n" +
            "The autoplay parameter appended to a YouTube video’s URL makes a video start automatically. This behaviour forces to download the video before the website is being loaded. On the other hand, when autoplay is not set to true, the only resource needed when the website is being loaded is the cover image of the video. The video itself is downloaded only if the user clicks on YouTube iframe element.\n\n" +
            "Autoplay property significantly increases the bandwidth needed to display a website as well as makes the page load much longer. ",
        CO2: <span>{"By deleting the autoplay=1 part of the YouTube video URL, the video is not downloaded when entering the website. Carbon emissions can be reduced by 99% if a user does not click on the video.\n\nA sample YouTube video – "}<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=XqZsoesa55w" className="link">Baby Shark</a>{" which lasts only 2 minutes, in the resolution of 720p (HD), has the file size of 14.7 MB.\n\nTo calculate the carbon footprint of a YouTube video file, we multiply the size of the video (14.7 MB) by the end-user traffic (0.81 kWh/1024 MB) and by the energy emissions (442 g/kWh), which sums up to "}<u>5.14 g of CO2</u>{". "}</span>,
        examples: "The following patterns are considered problems:\n\n(a)\n<iframe src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'>" +
            "</iframe>\n\n(b)\n<iframe src='https://www.youtube.com/embed/tgbNymZ7mvqY?mute=1&autoplay=1'></iframe>" +
            "\n\nThe following patterns are not considered problems: \n\n" +
            "(a) \n" +
            "<iframe src='https://www.youtube.com/embed/tgbNymZ7mvqY'></iframe> "
    },
    {
        name: "no-bind",
        overview: "Disallows the .bind/.unbind methods. We recommend using .on/.off or EventTarget#addEventListener/removeEventListener.",
        CO2: <span>{"By using this rule in your project, you can reduce the carbon footprint even up to "}<u>0.46 g per website view</u>{" if you decide to remove the jQuery library.\n\nBy multiplying the library size by the end-user traffic (0.81 kWh / 1024 MB) and by the energy emissions (442 g/kWh), the carbon footprint of this library can be calculated. "}</span>,
        examples: "The following pattern is considered as a problem:\n\n" +
            "$( 'div' ).bind(); \n\n" +
            "$div.bind(); \n\n" +
            "$( 'div' ).first().bind();\n\n" +
            "$( 'div' ).append( $( 'input' ).bind() );\n\n" +
            "$( 'div' ).unbind(); \n\n" +
            "$div.unbind(); \n\n" +
            "$( 'div' ).first().unbind();\n\n" +
            "$( 'div' ).append( $( 'input' ).unbind() );\n\n\n" +
            "The following pattern is not considered as a problem:\n\n" +
            "el.getAttribute('tabindex'); \n\n" +
            "el.removeAttribute('tabindex'); \n\n" +
            "el.setAttribute('tabindex', 3); "
    },
    {
        name: "no-web-fonts",
        overview: <span>{"Disallows importing web fonts by @import and @font-face CSS rules. We recommend using system or locally hosted fonts.\n\nSystem fonts are automatically installed in every operating system of any device, which is used to display a website. Even if you don’t like system fonts, you can add a static font file (we recommend WOFF2, see: "}<a target="_blank" rel="noreferrer" href="https://ec0lint.com/features/no-ttf-font-files" className="link">https://ec0lint.com/features/no-ttf-font-files</a>{") to your website. All additional server requests and data transfer related to fonts can be saved. "}</span>,
        CO2: <span>{"By using system fonts or fonts hosted locally, you do not import any data from an external server. If you choose Arial (system font) instead of Arimo (web font, Arial equivalent from Google Fonts) you can save up to "}<u>0.021 g CO2 per view</u>{". To calculate the carbon footprint of a web font, the size of TTF font file can be multiplied by the end-user traffic (0.81 kWh/1024 MB) and by the energy emissions (442 g/kWh). "}
            <table className="table">
                <tbody>
                    <tr>
                        <td className="tableCell"><u>Name</u></td>
                        <td className="tableCell"><u>Size</u></td>
                        <td className="tableCell"><u>CO2 reduction</u></td>
                    </tr>
                    <tr>
                        <td className="tableCell">Arimo</td>
                        <td className="tableCell">0.061 MB</td>
                        <td className="tableCell">0.021 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Roboto</td>
                        <td className="tableCell">0.14 MB</td>
                        <td className="tableCell">0.049 g</td>
                    </tr>
                    <tr>
                        <td className="tableCell">Open Sans</td>
                        <td className="tableCell">0.516 MB</td>
                        <td className="tableCell">0.18 g</td>
                    </tr>
                </tbody>
            </table></span>,
        examples: "The following patterns are considered problems:\n\n" +
            "@font-face { font-family: 'foo'; src: url('/path/to/foo.ttf') };\n\n" +
            "@import url('www.foo-font.com');\n\n\n" +
            "The following patterns are not considered problems:\n\n" +
            "@font-face { font-family: system-ui; }\n\n" +
            "@font-face { font-family: system-ui, Verdana; }\n\n" +
            "@import url('./foo.woff'); "
    },{
        name: "efficient-background-color",
        overview: <span>{"Encourages users to use energy-efficient colors to reduce the power consumption on OLED displays.\n\nRule efficient-background-color checks background-color CSS property and, based on particular components of color’s RGB format, decides if the level of energy consumption is not too high. The boundaries of RGB components values are red – 204, green – 204 and blue – 153, as shown in Figure 1.\n"}
            <figure><img src={efficientBackgroundFig1} alt="hexagon graph with rgb model" className="image" />
            <figcaption>Figure 1 - The recommended colors are inside the marked hexagon.</figcaption></figure>
            {"How OLED displays work\n\nEach pixel of an OLED display emits three channels of color - red, green and blue. The luminance of the three colors is different. The black color does not emit light, so it is the least power-consuming color, whereas the white color has the maximum luminance, so it consumes the most power. More information: "}<a target="_blank" rel="noreferrer" href="https://www.hindawi.com/journals/misy/2016/6575931/" className="link">https://www.hindawi.com/journals/misy/2016/6575931/</a>{"."}</span>,
        CO2: <span>{"According to "}<a target="_blank" rel="noreferrer" href="https://ieeexplore.ieee.org/abstract/document/5989813" className="link">link</a>{" we can calculate the power consumption of OLED displays as a sum of power consumption of each RGB color of a pixel. Figure 1 shows the energy consumption of three RGB colors of different intensities on a μOLED-32028-P1 AMOLED display. Research: "}<a target="_blank" rel="noreferrer" href="https://ieeexplore.ieee.org/abstract/document/5989813" className="link">https://ieeexplore.ieee.org/abstract/document/5989813"</a>{"\n"}
            <figure><img src={efficientBackgroundFig2} alt="graph of power consumption" className="image" />
                <figcaption>Figure 2 - Power consumption for the R, G, and B components of a pixel of OLED screen with different intensity levels.</figcaption></figure>
            {"Based on the above figure we can see that the most power-consuming color is blue – this is why we decided to set in ec0lint a lower boundary value for blue color than for other two.\nIn order to reduce energy consumption we should use energy efficient color palettes. Examples: "}<a target="_blank" rel="noreferrer" href="https://greentheweb.com/energy-efficient-color-palette-ideas/" className="link">https://greentheweb.com/energy-efficient-color-palette-ideas/</a>{"."}</span>
        ,
        examples: "The following patterns are considered problems:\n\n" +
            "(a)\nbackground-color: white;\n\n" +
            "(b)\nbackground-color: #ffffff;\n\n" +
            "(c)\nbackground-color: hsl(0,100%,100%);\n\n" +
            "(d)\nbackground-color: rgb(255,255,255);\n\n\n" +
            "The fing patterns are not considered problems:\n\n" +
            "(a)\nbackground-color: black; \n\n" +
            "(b)\nbackground-color: #000000;\n\n" +
            "(c)\nbackground-color: hsl(0,0%,0%);\n\n" +
            "(d)\nbackground-color: rgb(0,0,0);\n\n"
    }
    // {
    //     name: "",
    //     overview: "",
    //     CO2: <span></span>,
    //     examples: ""
    // }
]

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
                { name: "Data Transfer of the First Visit", description: "Energy of The Website" },
                { name: "Data Transfer of the Returning Visit", description: "Energy of The Webpage x 2% " },
                { name: "Energy of The Webpage", description: "Webpage Size x End-User Traffic" },
                { name: "Energy Emissions", description: "442 g/kWh" },
                { name: "End-User Traffic", description: "0.81 kWh/GB" }
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
        text: "The amount of carbon emissions per energy unit varies in each region. If you want to know what's the number of CO2 for a" +
            "specific location, please refer to “Technology-specific Cost and Performance Parameters” by IPCC, and if you wish to know " +
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
    text: <span>{"Updated at 2022-01-29 \n\n"}
        {"ec0lint (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by ec0lint. \n\n"}
        {"This Privacy Policy applies to our website, and its associated subdomains (collectively, our “Service”) alongside our application, ec0lint. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms and Conditions. \n\n"}
        {"Definitions and key terms \n\n"}
        {"To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, are strictly defined as: \n\n"}
        <ul>
            <li>Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</li>
            <li>Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to ec0lint, that is responsible for your information under this Privacy Policy.</li>
            <li>Country: where ec0lint or the owners/founders of ec0lint are based, in this case is Poland.</li>
            <li>Customer: refers to the company, organization or person that signs up to use the ec0lint Service to manage the relationships with your consumers or service users.</li>
            <li>Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit ec0lint and use the services.</li>
            <li>IP address: Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet.</li>
            <li>Personnel: refers to those individuals who are employed by ec0lint or are under contract to perform a service on behalf of one of the parties.</li>
            <li>Personal Data: any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</li>
            <li>Service: refers to the service provided by ec0lint as described in the relative terms (if available) and on this platform.</li>
            <li>Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
            <li>Website: ec0lint."'s" site, which can be accessed via this URL: ec0lint.com.</li>
            <li>You: a person or entity that is registered with ec0lint to use the Services.</li>
        </ul>
        {"Information automatically collected \n\n"}
        {"There is some information like your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our platform. This information may be used to connect your computer to the Internet. Other information collected automatically could be a login, e-mail address, password, computer and connection information such as browser plug-in types and versions and time zone setting, operating systems and platforms, purchase history, (we sometimes aggregate with similar information from other Users), the full Uniform Resource Locator (URL) clickstream to, through and from our Website that may include date and time; cookie number; parts of the site you viewed or searched for; and the phone number you used to call our Customer Services. We may also use browser data such as cookies, Flash cookies (also known as Flash Local Shared Objects) or similar data on certain parts of our Website for fraud prevention and other purposes. During your visits, we may use software tools such as JavaScript to measure and collect session information including page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page. We may also collect technical information to help us identify your device for fraud prevention and diagnostic purposes. \n\n"}
        {"Sale of Business \n\n"}
        {"We reserve the right to transfer information to a third party in the event of a sale, merger or other transfer of all or substantially all of the assets of ec0lint or any of its Corporate Affiliates (as defined herein), or that portion of ec0lint or any of its Corporate Affiliates to which the Service relates, or in the event that we discontinue our business or file a petition or have filed against us a petition in bankruptcy, reorganization or similar proceeding, provided that the third party agrees to adhere to the terms of this Privacy Policy. \n\n"}
        {"Affiliates \n\n"}
        {"We may disclose information (including personal information) about you to our Corporate Affiliates. For purposes of this Privacy Policy, \"Corporate Affiliate\" means any person or entity which directly or indirectly controls, is controlled by or is under common control with ec0lint, whether by ownership or otherwise. Any information relating to you that we provide to our Corporate Affiliates will be treated by those Corporate Affiliates in accordance with the terms of this Privacy Policy. \n\n"}
        {"Governing Law \n\n"}
        {"This Privacy Policy is governed by the laws of Poland without regard to its conflict of laws provision. You consent to the exclusive jurisdiction of the courts in connection with any action or dispute arising between the parties under or in connection with this Privacy Policy except for those individuals who may have rights to make claims under Privacy Shield, or the Swiss-US framework. \n\n"}
        {"The laws of Poland, excluding its conflicts of law rules, shall govern this Agreement and your use of the website. Your use of the website may also be subject to other local, state, national, or international laws. \n\n"}
        {"By using ec0lint or contacting us directly, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, you should not engage with our website, or use our services. Continued use of the website, direct engagement with us, or following the posting of changes to this Privacy Policy that do not significantly affect the use or disclosure of your personal information will mean that you accept those changes. \n\n"}
        {"Your Consent \n\n"}
        {"We've updated our Privacy Policy to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our website, registering an account, or making a purchase, you hereby consent to our Privacy Policy and agree to its terms. \n\n"}
        {"Links to Other Websites \n\n"}
        {"This Privacy Policy applies only to the Services. The Services may contain links to other websites not operated or controlled by ec0lint. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website's own rules and policies. Such third parties may use their own cookies or other methods to collect information about you. \n\n"}
        {"Cookies \n\n"}
        {"ec0lint uses \"Cookies\" to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the website as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies. \n\n"}
        {"Blocking and disabling cookies and similar technologies \n\n"}
        {"Wherever you're located you may also set your browser to block cookies and similar technologies, but this action may block our essential cookies and prevent our website from functioning properly, and you may not be able to fully utilize all of its features and services. You should also be aware that you may also lose some saved information (e.g. saved login details, site preferences) if you block cookies on your browser. Different browsers make different controls available to you. Disabling a cookie or category of cookie does not delete the cookie from your browser, you will need to do this yourself from within your browser, you should visit your browser's help menu for more information. \n\n"}
        {"Kids' Privacy \n\n"}
        {"We collect information from kids under the age of 13 just to better our services. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data without your permission, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers. \n\n"}
        {"Changes To Our Privacy Policy \n\n"}
        {"We may change our Service and policies, and we may need to make changes to this Privacy Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Privacy Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Privacy Policy. If you do not want to agree to this or any updated Privacy Policy, you can delete your account. \n\n"}
        {"Third-Party Services \n\n"}
        {"We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services (\"Third- Party Services\"). \n\n"}
        {"You acknowledge and agree that ec0lint shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. ec0lint does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services. \n\n"}
        {"Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties' terms and conditions. \n\n"}
        {"Information about General Data Protection Regulation (GDPR) \n\n"}
        {"We may be collecting and using information from you if you are from the European Economic Area (EEA), and in this section of our Privacy Policy we are going to explain exactly how and why is this data collected, and how we maintain this data under protection from being replicated or used in the wrong way. \n\n"}
        {"What is GDPR? \n\n"}
        {"GDPR is an EU-wide privacy and data protection law that regulates how EU residents' data is protected by companies and enhances the control the EU residents have, over their personal data. \n\n"}
        {"The GDPR is relevant to any globally operating company and not just the EU-based businesses and EU residents. Our customers' data is important irrespective of where they are located, which is why we have implemented GDPR controls as our baseline standard for all our operations worldwide. \n\n"}
        {"What is personal data? \n\n"}
        {"Any data that relates to an identifiable or identified individual. GDPR covers a broad spectrum of information that could be used on its own, or in combination with other pieces of information, to identify a person. Personal data extends beyond a person's name or email address. Some examples include financial information, political opinions, genetic data, biometric data, IP addresses, physical address, sexual orientation, and ethnicity. \n\n"}
        {"The Data Protection Principles include requirements such as: \n\n"}
        <ul>
            <li>Personal data collected must be processed in a fair, legal, and transparent way and should only be used in a way that a person would reasonably expect.</li>
            <li>Personal data should only be collected to fulfil a specific purpose and it should only be used for that purpose. Organizations must specify why they need the personal data when they collect it.</li>
            <li>Personal data should be held no longer than necessary to fulfil its purpose.</li>
            <li>People covered by the GDPR have the right to access their own personal data. They can also request a copy of their data, and that their data be updated, deleted, restricted, or moved to another organization.</li>
        </ul>
        {"Why is GDPR important? \n\n"}
        {"GDPR adds some new requirements regarding how companies should protect individuals' personal data that they collect and process. It also raises the stakes for compliance by increasing enforcement and imposing greater fines for breach. Beyond these facts it's simply the right thing to do. At ec0lint we strongly believe that your data privacy is very important and we already have solid security and privacy practices in place that go beyond the requirements of this new regulation. \n\n"}
        {"Individual Data Subject's Rights - Data Access, Portability and Deletion \n\n"}
        {"We are committed to helping our customers meet the data subject rights requirements of GDPR. ec0lint processes or stores all personal data in fully vetted, DPA compliant vendors. We do store all conversation and personal data for up to 6 years unless your account is deleted. In which case, we dispose of all data in accordance with our Terms of Service and Privacy Policy, but we will not hold it longer than 60 days. \n\n"}
        {"We are aware that if you are working with EU customers, you need to be able to provide them with the ability to access, update, retrieve and remove personal data. We got you! We've been set up as self service from the start and have always given you access to your data and your customers data. Our customer support team is here for you to answer any questions you might have about working with the API. \n\n"}
        {"Contact Us \n\n"}
        {"Don't hesitate to contact us if you have any questions. \n\n"}
        {"Via Email: ec0lint@tutanota.com"}</span>
}

export const termsOfConditions = {
    title: "Terms of Conditions",
    text: <span>
        {"Updated at 2022-01-29 \n\n"}
        {"General Terms \n\n"}
        {"By accessing and placing an order with ec0lint, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and ec0lint. \n\n"}
        {"Under no circumstances shall ec0lint team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if ec0lint team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof. \n\n"}
        {"ec0lint will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment. \n\n"}
        {"License \n\n"}
        {"ec0lint grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement. \n\n"}
        {"These Terms & Conditions are a contract between you and ec0lint (referred to in these Terms & Conditions as \"ec0lint\", \"us\", \"we\" or \"our\"), the provider of the ec0lint website and the services accessible from the ec0lint website (which are collectively referred to in these Terms & Conditions as the \"ec0lint Service\"). \n\n"}
        {"You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the ec0lint Service. In these Terms & Conditions, \"you\" refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice. \n\n"}
        {"Definitions and key terms \n\n"}
        {"To help explain things as clearly as possible in this Terms & Conditions, every time any of these terms are referenced, are strictly defined as: \n\n"}
        <ul>
            <li>Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</li>
            <li>{"Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to ec0lint, that is responsible for your information under this Terms & Conditions."}</li>
            <li>Country: where ec0lint or the owners/founders of ec0lint are based, in this case is Poland.</li>
            <li>Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit ec0lint and use the services.</li>
            <li>Service: refers to the service provided by ec0lint as described in the relative terms (if available) and on this platform.</li>
            <li>Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
            <li>{"Website: ec0lint.\"'s\" site, which can be accessed via this URL: ec0lint.com."}</li>
            <li>You: a person or entity that is registered with ec0lint to use the Services.</li>
        </ul>
        {"Restrictions \n\n"}
        {"You agree not to, and you will not permit others to: \n\n"}
        <ul>
            <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the website or make the platform available to any third party.</li>
            <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the website.</li>
            <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of ec0lint or its affiliates, partners, suppliers or the licensors of the website.</li>
        </ul>
        {"Return and Refund Policy \n\n"}
        {"Thanks for shopping at ec0lint. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you're exploring, evaluating, and purchasing our products. \n\n"}
        {"As with any shopping experience, there are terms and conditions that apply to transactions at ec0lint. We'll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at ec0lint, you agree to the terms along with ec0lint.\"'s\" Privacy Policy. \n\n"}
        {"If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product. \n\n"}
        {"Your Suggestions \n\n"}
        {"Any feedback, comments, ideas, improvements or suggestions (collectively, \"Suggestions\") provided by you to ec0lint with respect to the website shall remain the sole and exclusive property of ec0lint. \n\n"}
        {"ec0lint shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you. \n\n"}
        {"Your Consent \n\n"}
        {"We've updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our website, registering an account, or making a purchase, you hereby consent to our Terms & Conditions. \n\n"}
        {"Links to Other Websites \n\n"}
        {"This Terms & Conditions applies only to the Services. The Services may contain links to other websites not operated or controlled by ec0lint. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Terms & Conditions are no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website's own rules and policies. Such third parties may use their own cookies or other methods to collect information about you. \n\n"}
        {"Cookies \n\n"}
        {"ec0lint uses \"Cookies\" to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the website as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies. \n\n"}
        {"Changes To Our Terms & Conditions \n\n"}
        {"You acknowledge and agree that ec0lint may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at ec0lint's sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform ec0lint when you stop using the Service. You acknowledge and agree that if ec0lint disables access to your account, you may be prevented from accessing the Service, your account details or any files or other materials which is contained in your account. \n\n"}
        {"If we decide to change our Terms & Conditions, we will post those changes on this page, and/or update the Terms & Conditions modification date below. \n\n"}
        {"Modifications to Our website \n\n"}
        {"ec0lint reserves the right to modify, suspend or discontinue, temporarily or permanently, the website or any service to which it connects, with or without notice and without liability to you. \n\n"}
        {"Updates to Our website \n\n"}
        {"ec0lint may from time to time provide enhancements or improvements to the features/ functionality of the website, which may include patches, bug fixes, updates, upgrades and other modifications (\"Updates\"). \n\n"}
        {"Updates may modify or delete certain features and/or functionalities of the website. You agree that ec0lint has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the website to you. \n\n"}
        {"You further agree that all Updates will be (i) deemed to constitute an integral part of the website, and (ii) subject to the terms and conditions of this Agreement. \n\n"}
        {"Third-Party Services \n\n"}
        {"We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services (\"Third- Party Services\"). \n\n"}
        {"You acknowledge and agree that ec0lint shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. ec0lint does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services. \n\n"}
        {"Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties' terms and conditions. \n\n"}
        {"Term and Termination \n\n"}
        {"This Agreement shall remain in effect until terminated by you or ec0lint. \n\n"}
        {"ec0lint may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice. \n\n"}
        {"This Agreement will terminate immediately, without prior notice from ec0lint, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the website and all copies thereof from your computer. \n\n"}
        {"Upon termination of this Agreement, you shall cease all use of the website and delete all copies of the website from your computer. \n\n"}
        {"Termination of this Agreement will not limit any of ec0lint's rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement. \n\n"}
        {"Copyright Infringement Notice \n\n"}
        {"If you are a copyright owner or such owner's agent and believe any material on our website constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner. \n\n"}
        {"Indemnification \n\n"}
        {"You agree to indemnify and hold ec0lint and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the website; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party. \n\n"}
        {"No Warranties \n\n"}
        {"The website is provided to you \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, ec0lint, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the website, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, ec0lint provides no warranty or undertaking, and makes no representation of any kind that the website will meet your requirements, achieve any intended results, be compatible or work with any other software, systemsor services, operate without interruption, meet any performance or reliability standards or be error free or that any errors ordefects can or will be corrected. \n\n"}
        {"Limitation of Liability \n\n"}
        {"Notwithstanding any damages that you might incur, the entire liability of ec0lint and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the website. \n\n"}
        {"To the maximum extent permitted by applicable law, in no event shall ec0lint or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the website, third-party software and/or third-party hardware used with the website, or otherwise in connection with any provision of this Agreement), even if ec0lint or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. \n\n"}
        {"Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you. \n\n"}
        {"Severability \n\n"}
        {"If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect. \n\n"}
        {"This Agreement, together with the Privacy Policy and any other legal notices published by ec0lint on the Services, shall constitute the entire agreement between you and ec0lint concerning the Services. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and ec0lint\"'s\" failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. YOU AND ec0lint AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED. \n\n"}
        {"Waiver \n\n"}
        {"Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute waiver of any subsequent breach. \n\n"}
        {"No failure to exercise, and no delay in exercising, on the part of either party, any right or any power under this Agreement shall operate as a waiver of that right or power. Nor shall any single or partial exercise of any right or power under this Agreement preclude further exercise of that or any other right granted herein. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall govern. \n\n"}
        {"Amendments to this Agreement \n\n"}
        {"ec0lint reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. \n\n"}
        {"By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use ec0lint. \n\n"}
        {"Entire Agreement \n\n"}
        {"The Agreement constitutes the entire agreement between you and ec0lint regarding your use of the website and supersedes all prior and contemporaneous written or oral agreements between you and ec0lint. \n\n"}
        {"You may be subject to additional terms and conditions that apply when you use or purchase other ec0lint's services, which ec0lint will provide to you at the time of such use or purchase. \n\n"}
        {"Updates to Our Terms \n\n"}
        {"We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account. \n\n"}
        {"Intellectual Property \n\n"}
        {"The website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by ec0lint, its licensors or other providers of such material and are protected by Poland and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of ec0lint, unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited. \n\n"}
        {"Agreement to Arbitrate \n\n"}
        {"This section applies to any dispute EXCEPT IT DOESN'T INCLUDE A DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE RELIEF REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR ec0lint.\"'s\" INTELLECTUAL PROPERTY RIGHTS. The term “dispute” means any dispute, action, or other controversy between you and ec0lint concerning the Services or this agreement, whether in contract, warranty, tort, statute, regulation, ordinance, or any other legal or equitable basis. “Dispute” will be given the broadest possible meaning allowable under law. \n\n"}
        {"Notice of Dispute \n\n"}
        {"In the event of a dispute, you or ec0lint must give the other a Notice of Dispute, which is a written statement that sets forth the name, address, and contact information of the party giving it, the facts giving rise to the dispute, and the relief requested. You must send any Notice of Dispute via email to: ec0lint@gmail.com. ec0lint will send any Notice of Dispute to you by mail to your address if we have it, or otherwise to your email address. You and ec0lint will attempt to resolve any dispute through informal negotiation within sixty (60) days from the date the Notice of Dispute is sent. After sixty (60) days, you or ec0lint may commence arbitration. \n\n"}
        {"Binding Arbitration \n\n"}
        {"If you and ec0lint don't resolve any dispute by informal negotiation, any other effort to resolve the dispute will be conducted exclusively by binding arbitration as described in this section. You are giving up the right to litigate (or participate in as a party or class member) all disputes in court before a judge or jury. The dispute shall be settled by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. Either party may seek any interim or preliminary injunctive relief from any court of competent jurisdiction, as necessary to protect the party's rights or property pending the completion of arbitration. Any and all legal, accounting, and other costs, fees, and expenses incurred by the prevailing party shall be borne by the non-prevailing party. \n\n"}
        {"Submissions and Privacy \n\n"}
        {"In the event that you submit or post any ideas, creative suggestions, designs, photographs, information, advertisements, data or proposals, including ideas for new or improved products, services, features, technologies or promotions, you expressly agree that such submissions will automatically be treated as non-confidential and non-proprietary and will become the sole property of ec0lint without any compensation or credit to you whatsoever. ec0lint and its affiliates shall have no obligations with respect to such submissions or posts and may use the ideas contained in such submissions or posts for any purposes in any medium in perpetuity, including, but not limited to, developing, manufacturing, and marketing products and services using such ideas. \n\n"}
        {"Promotions \n\n"}
        {"ec0lint may, from time to time, include contests, promotions, sweepstakes, or other activities (“Promotions”) that require you to submit material or information concerning yourself. Please note that all Promotions may be governed by separate rules that may contain certain eligibility requirements, such as restrictions as to age and geographic location. You are responsible to read all Promotions rules to determine whether or not you are eligible to participate. If you enter any Promotion, you agree to abide by and to comply with all Promotions Rules. \n\n"}
        {"Additional terms and conditions may apply to purchases of goods or services on or through the Services, which terms and conditions are made a part of this Agreement by this reference. \n\n"}
        {"Typographical Errors \n\n"}
        {"In the event a product and/or service is listed at an incorrect price or with incorrect information due to typographical error, we shall have the right to refuse or cancel any orders placed for the product and/or service listed at the incorrect price. We shall have the right to refuse or cancel any such order whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, we shall immediately issue a credit to your credit card account or other payment account in the amount of the charge. \n\n"}
        {"Miscellaneous \n\n"}
        {"If for any reason a court of competent jurisdiction finds any provision or portion of these Terms & Conditions to be unenforceable, the remainder of these Terms & Conditions will continue in full force and effect. Any waiver of any provision of these Terms & Conditions will be effective only if in writing and signed by an authorized representative of ec0lint. ec0lint will be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. ec0lint operates and controls the ec0lint Service from its offices in Poland. The Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access the ec0lint Service from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. These Terms & Conditions (which include and incorporate the ec0lint Privacy Policy) contains the entire understanding, and supersedes all prior understandings, between you and ec0lint concerning its subject matter, and cannot be changed or modified by you. The section headings used in this Agreement are for convenience only and will not be given any legal import. \n\n"}
        {"Disclaimer \n\n"}
        {"ec0lint is not responsible for any content, code or any other imprecision. \n\n"}
        {"ec0lint does not provide warranties or guarantees. \n\n"}
        {"In no event shall ec0lint be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. \n\n"}
        {"The ec0lint Service and its contents are provided \"as is\" and \"as available\" without any warranty or representations of any kind, whether express or implied. ec0lint is a distributor and not a publisher of the content supplied by third parties; as such, ec0lint exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via the ec0lint Service. Without limiting the foregoing, ec0lint specifically disclaims all warranties and representations in any content transmitted on or in connection with the ec0lint Service or on sites that may appear as links on the ec0lint Service, or in the products provided as a part of, or otherwise in connection with, the ec0lint Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by ec0lint or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, ec0lint does not warrant that the ec0lint Service will be uninterrupted, uncorrupted, timely, or error-free. \n\n"}
        {"Contact Us \n\n"}
        {"Don't hesitate to contact us if you have any questions. \n\n"}
        {"Via Email: ec0lint@tutanota.com \n\n"}
    </span>
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
                "all texts in WOFF2. All website visitors can access the same hosted font file " +
                "rather than multiple versions being uploaded across the internet. Also, less variety of fonts helps."
        },
        {
            title: "Hosting",
            text: "The hosting provider we chose, Krystal, uses renewable energy to power its servers and " +
                "specialized in energy-efficient architecture."
        },
        {
            title: "Illustration formats",
            text: "All images are saved in WebP which makes them much lighter than PNGs and JPGs."
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
            url: "https://colorable.jxnblk.com",
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
    title: "Blog posts",
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
                <h6>Did you know that 250 000 new websites are being published every day? We find it crazy. According to our research, an average website with 10 000 views every month generates 1.8 g of carbon dioxide per view. This sums up to 216 kg of CO2 annually. And this number is valid only for one single website.</h6>,
                <h6>{"Malwina and I learned about digital ecology for the first time during a hackathon. At first, we wanted to work on an app that would teach the users how to establish habits aligned with digital ecology. However, what is the purpose of creating an intensive in emissions app if you can come up with something else instead? We found a website called Sustainable Web Design and learned how much carbon footprint is being generated by web pages. We looked at already existing solutions, but all of them help in optimizing already released websites. “It would be ideal if a frontend developer would know what to improve before the website is published” I said. And this thought ignited an idea in Malwina's mind."}</h6>,
                <h6>Frontend developers use daily a tool called ESlint. It shows comments that something is missing in the code. For example, it tells you to add a semi-comma. This tool is well-known in the programming world and thus, we used this concept for building our tool.</h6>,
                <h5 style={{ color: '#8ECCEA' }}>So, what exactly is ec0lint?</h5>,
                <h6>ec0lint is a tool for frontend developers that helps in mitigating the carbon footprint of websites. You can use it already during the coding process to prevent a carbon-heavy web page from publishing. ec0lint advices you on what to change in your code to minimize the size of different components. For example, if you change the font format from TOFF to WOFF you save up to 75% of space. The font will look exactly the same for the end-users, but you'll know. It is all about minimizing the space taken by various elements of the website. In our next article, you'll learn how to precisely calculate the carbon emissions of a website.</h6>,
                <h6>Hey, but how many grams of carbon dioxide are we exactly talking about? Thanks to code optimization we can help in reducing CO2 emissions per one view from 1.8 g to ~0.2 g so to only 24 kg CO2 per website annually, saving 216 kg CO2 (-96%!). </h6>,
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
                    <ul>
                        <li>Videos account for 1% of global emissions consuming the same amount of energy as Spain. If it's possible, block the automatic playing of videos. </li>
                        <li>According to the International Energy Agency (IEA), watching Netflix for an hour entails 36 g of CO2. Watching films in lower definition reduces data traffic significantly and thus, lowers the amount of energy needed to power the platform. This works for other platforms like YouTube. Alternatively, you can opt for downloading a video. </li>
                        <li>Video conferencing can be more eco-friendly if you switch off your camera.</li>
                    </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>2. Email, a snake in the grass  </h5>
                    <ul>
                        <li>An email stored in an email account emits 19 g of CO2 annually. So, open up your mailbox and delete unnecessary emails.</li>
                        <li>Whenever possible, avoid sending emails. Use an internal messaging tool that consumes less energy. Slack, for example. You can also switch to SMS - sending one email generates on average 4 g of CO2 whereas an old-fashioned SMS only 0.014 g.</li>
                        <li>Try using an anti-spam tool. For instance, download Cleanfox to unsubscribe from all newsletters you don't read.</li>
                        <li>When sending an attachment, compress the file first or send it as a download link. You can try WeTransfer or Google Drive. Alternatively, think about using a USB. </li>
                        <li>Remove images from your email signature.</li>
                    </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>3. Vicious cycle of browsing</h5>
                    <ul>
                        <li>Close unused tabs as each web page that remains open is continuously connected to its server.  </li>
                        <li>When you want to visit a page which address you know by heart, write its address directly in the bar of a browser instead of in the search engine.  </li>
                        <li>Avoid repeating identical searches by using bookmarks.</li>
                        <li>Utilize an eco-responsible web search engine like Ecosia or Lilo.  </li>
                        <li>Rethink your keywords. The more precise you are, the more energy you save. </li>
                        <li>Remember to erase old media on your social platforms from time to time.  </li>
                    </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>4. Casting a cloud on the cloud </h5>
                    <ul>
                        <li>One hundred zettabytes of data will be stored in the cloud by 2025 and such online storage solutions consume a lot of energy. Try periodically deleting data from your cloud or favor storing them on an external hard drive instead.  </li>
                        <li>Before choosing a cloud service, get familiar with the company's mission and opt for the most environmental-friendly choice.  </li>
                    </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>5. Criminal cryptocurrency</h5>
                    <ul>
                        <li>According to researchers from the University of Cambridge, bitcoin uses 0.21% of the world's energy supply according. Have you ever heard of Cardano which claims to be 37,500 times more energy-efficient than Bitcoin? How about Solarcoin?  </li>
                    </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>6. Your devices, perennial comrade</h5>
                    <ul>
                        <li>Changing smartphones or computers less often has a positive impact on the planet. Replacing computers every 6 years instead of 4 saves 190 kg of CO2 emissions per person.  </li>
                    </ul>
                </h6>,
                <h6><h5 style={{ color: '#8ECCEA' }}>7. Heavenly disconnecting</h5>
                    <ul>
                        <li>Disconnect whenever your hectic life allows you to.  </li>
                        <li>Delete mobile apps you barely use.  </li>
                        <li>Disable mobile notifications.  </li>
                        <li>Unplug your router at night to save some energy.  </li>
                    </ul>
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
        },
        {
            title: "Five websites we recommend",
            url: "five-websites-we-recommend",
            text: [
                <h6>{"Do you want to more know about the sustainability of your website and your impact on digital pollution? This article is just for you. We're going to present you five web pages that are really absorbing. Go and check them out!"}</h6>,
                <h5 style={{ color: '#8ECCEA' }}>{"1) "} <a target="_blank" rel="noreferrer" href="https://www.websitecarbon.com/" className="link">Website Carbon Calculator</a></h5>,
                <img src={website_1} className="photo" style={{ maxHeight: '263px' }} alt="website_1" />,
                <h6>{"Website Carbon Calculator determines the carbon footprint of any website and suggests what actions can be taken to enhance its sustainability level. It presents examples of web pages with notably low carbon dioxide emissions, invites to subscribe to their newsletter and even grants badges raising awareness about website carbon emissions. What we found stimulating were the comparisons Website Carbon Calculator made for the carbon emissions of our website, e.g. how many trees are needed to absorb the amount of carbon emitted by our web page annually."}</h6>,
                <h5 style={{ color: '#8ECCEA' }}>{"2)  "} <a target="_blank" rel="noreferrer" href="https://ecograder.com/" className="link">Ecograder</a></h5>,
                <img src={website_2} className="photo" style={{ maxHeight: '230px' }} alt="website_2" />,
                <h6>{"Ecograder grades your website based on its page speed, findability, design and user experience, and green hosting. In every category, it gives you tips on how to improve your score. For example, a higher PageSpeed Insights means that your site runs more efficiently and uses less energy. And this can “simply” be achieved by reducing page load time."}</h6>,
                <h5 style={{ color: '#8ECCEA' }}>{"3)  "} <a target="_blank" rel="noreferrer" href="https://thanks-in-advance.com/" className="link">Thanks in Advance</a></h5>,
                <img src={website_3} className="photo" alt="website_3" />,
                <h6>{"Beautifully designed, Thanks in Advance draws attention to our inboxes. Have you ever wondered if Earth's inbox is already full? Thanks in Advance explains the problem and encourages to take actions like managing newsletters or reducing file sizes. What we love the most is how sustainable the web page was designed and how well each step of the process was described."}</h6>,
                <h5 style={{ color: '#8ECCEA' }}>{"4)  "} <a target="_blank" rel="noreferrer" href="https://www.thegreenwebfoundation.org/directory/" className="link">The Green Web Foundation</a></h5>,
                <img src={website_4} className="photo" alt="website_4" />,
                <h6>{"Recently, we used the Green Web Foundation to find a green hosting service. You can use the information to check if your website uses a green hosting service and if not, find in The Green Hosting Directory a list of over 400 companies that could become your future hosting provider. Besides, they offer a partnership opportunity, teach how to green someone's practices and publish an online magazine called Branch."}</h6>,
                <h5 style={{ color: '#8ECCEA' }}>{"5)  "} <a target="_blank" rel="noreferrer" href="https://sustainablewebdesign.org/" className="link">Sustainable Web Design</a></h5>,
                <img src={website_5} className="photo" alt="website_5" />,
                <h6>{"At the heart of Sustainable Web Design lies the Sustainable Web Manifesto, an approach to designing web services that puts people and the planet first. Sustainable Web Manifesto names clean, efficient, open, honest, regenerative, and resilient as the main principles. You can learn more about the manifesto and familiarise yourself with the literature they recommend on their website. "}</h6>
            ]
        }
    ]
};

export const team = {
    title1: "Steering Commitee",
    intro: "We met each other for the first time in 2018 during the scholarship program called \"New Technologies for Women\" organized by Intel and Perspektywy Women in Tech. In 2021, we participated in \"LeaderSHEp in Tech Academy\" and therefore, we were invited to take part in a hackathon about digital ecology. We won it by presenting ec0lint and here we are - developing the project further.  ",
    title2: "Contributors",
    title3: "Comitters",
    footer: "If you want to join our contributors team, feel free to reach out to us by email or on LinkedIn!",
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
        },
        {
            name: "Natalia Otto",
            photo: <img src={Natalia} className="circlePhoto" alt="Natalia Otto" />,
            linkedin: "https://www.linkedin.com/in/natalia-otto/"

        },
        {
            name: "Martyna Babiak",
            photo: <img src={Martyna} className="circlePhoto" alt="Martyna Babiak" />,
            linkedin: "https://www.linkedin.com/in/martyna-babiak/",
            github: "https://github.com/martinabab?fbclid=IwAR3mmVZVB-kI6jIP_w5wznkllt79Yd2W9paWrMSdIDPEKo4puoYoJMFjnWQ"
        },
        {
            name: "Aleksandra Borowska",
            photo: <img src={Ola} className="circlePhoto" alt="Aleksandra Borowska" />,
            linkedin: "https://www.linkedin.com/in/aleksandra-borowska28/",
            github: "https://github.com/Ola2808-Boro"
        }
    ],
    comitters: [
        {
            name: "Małgosia Haruba",
            photo: <img src={Gosia} className="circlePhoto" alt="Małgosia Haruba" />,
            linkedin: "https://www.linkedin.com/in/ma%C5%82gorzata-haruba/"

        },
        {
            name: "Marta Weiner",
            photo: <img src={Marta} className="circlePhoto" alt="Marta Weiner" />,
            linkedin: "https://www.linkedin.com/in/marta-weiner-3b7721259/",
            github: "https://github.com/martaweiner/"

        },
        {
            name: "Joanna Nitek",
            photo: <img src={Joanna} className="circlePhoto" alt="Joanna Nitek" />,
            linkedin: "https://www.linkedin.com/in/joannanitek/",
            github: "https://github.com/JoannaNitek"
        },
    ]
};

export const initiativesSection = {
    title: 'Initiatives',
    cards: [
        [
            <span id="0">
                <img src={iec} alt="iec" />
                <h6>Digital Ecology</h6>
                <h6>Institute</h6>
            </span>,
            <span id="1">
                <img src={helsinki1} alt="helsinki think company" style={{ paddingRight: 0 }} />
                <img src={helsinki2} alt="think company fund" style={{ paddingLeft: '5px' }} />
                <div>
                    <h6>{"Helsinki Think Company &"}</h6>
                    <h6>Think Company Fund</h6>
                </div>
            </span>,
            <span id="2">
                <img src={weAreDevelopers} alt="WeAreDevelopers" />
                <h6>WeAreDevelopers</h6>
            </span>
        ],
        [
            <span id="3">
                <img src={perspektywy} alt="perspektywy women in tech" />
                <h6>Perspektywy</h6>
                <h6>Women in Tech</h6>
            </span>,
            <span id="4" style={{ padding: '0 30px' }}>
                <img src={reactIndia} alt="reactIndia" />
                <h6>React India</h6>
            </span>,
            <span id="5">
                <img src={ing} alt="ING" />
                <h6>ING</h6>
            </span>
        ],
        [
            <span id="6">
                <img src={react} alt="react day Berlin" />
                <h6>React Day Berlin</h6>
            </span>,
            <span id="7">
                <img src={conf42} alt="Conf42" />
                <h6>Conf42</h6>
            </span>,
            <span id="8">
                <img src={xtremejs} alt="XtremeJS" />
                <h6>XtremeJS</h6>
            </span>
        ],
        [
            <span id="9">
                <img src={kdi} alt="krakowskie dni informatyki" />
                <h6>Krakowskie Dni Informatyki</h6>
            </span>
        ]
    ],
    modal: [
        {
            title: "Digital Ecology Institute",
            text: "We collaborate with a mentor from the Digital Ecology Institute.",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://digitalecology.institute" rel="noreferrer">here</a>.</span>,
            image: <img src={iec}></img>
        },
        {
            title: "Helsinki Think Company",
            text: "Helsinki Think Company granted ec0lint a small fund from the Think Company Fund.",
            link: <span>You can read more about the initiative <a className="navLinkPurple" target="_blank" href="https://www.thinkcompany.fi/what-we-do/programs/think-company-fund-2022" rel="noreferrer">here</a>.</span>,
            image: <><img src={helsinki1} className="helsinki-image"></img><img src={helsinki2}></img></>,
        },
        {
            title: "WeAreDevelopers",
            text: "ec0lint was featured in the newsletter sent out by WeAreDevelopers (60 000+ readers). In addition, we gave a lecture during We are Developers React Day.",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://www.wearedevelopers.com/" rel="noreferrer">here</a>.</span>,
            image: <img src={weAreDevelopers}></img>
        },
        {
            title: "Perspektywy Women in Tech",
            text: "ec0lint stems from the LeaderSHEp Women in Tech program organized by Perspektywy Women in Tech. ec0lint had its premiere during the flagship event of the foundation - Women in Tech Summit (10 000+ attended). ",
            link: <span>You can find more information <a className="navLinkPurple" target="_blank" href="https://womenintech.perspektywy.org/" rel="noreferrer">here</a>.</span>,
            image: <img src={perspektywy}></img>
        },
        {
            title: "React India",
            text: "At the end of September 2022, we spoke about the importance of digital ecology and present ec0lint during React India (600+ developers in-person, 3 000+ participants online). ",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://www.reactindia.io/" rel="noreferrer">here</a>.</span>,
            image: <img src={reactIndia}></img>
        },
        {
            title: "ING",
            text: "ec0lint was chosen as one of the top 10 finalists in the ING Grant Competition. Being a part of the ING community, we were given the opportunity to share our history and showcase the tool during FEST Festival in Chorzow. ",
            link: <span>You can read more about the competition <a className="navLinkPurple" target="_blank" href="https://www.ing.pl/o-banku/esg/program-grantowy" rel="noreferrer">here</a>.
                In addition, ING wrote about us <a className="navLinkPurple" target="_blank" href="https://spolecznosc.ing.pl/-/Blog/Startup-zakodowany-na-zielone/ba-p/39931" rel="noreferrer">here</a>.</span>,
            image: <img src={ing}></img>
        },
        {
            title: "React Day Berlin",
            text: "ec0lint’s team gave a speech at React Day Berlin (800+ in-person attendees, 5 000 remote attendees) in December 2022.",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://reactday.berlin/" rel="noreferrer">here</a>.</span>,
            image: <img src={react}></img>
        },
        {
            title: "Conf42",
            text: "ec0lint was showcased during Conf42 JavaScript in November 2022.",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://www.conf42.com/" rel="noreferrer">here</a>.</span>,
            image: <img src={conf42}></img>
        },
        {
            title: "XtremeJS",
            text: "ec0lint’s team gave a keynote during XtremeJS in December 2022.",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://xtremejs.dev/2022/" rel="noreferrer">here</a>.</span>,
            image: <img src={xtremejs}></img>
        },
        {
            title: "Krakowskie Dni Informatyki",
            text: "We presented a speech during Krakowskie Dni Informatyki (1 000+ attendees) in December 2022.",
            link: <span>More information <a className="navLinkPurple" target="_blank" href="https://kdi.org.pl/" rel="noreferrer">here</a>.</span>,
            image: <img src={kdi}></img>
        }
    ]
};
