import React from "react";
import { servicesPage } from "../text";
import InitiativesSection from "../sections/InitiativesSection"

export default function ServicesPage() {

    return (
        <div className="secondPage">
            <span>
                <h3 className="servicesSectionTitle"
                    style={{ marginBottom: '40px', marginTop: '40px' }}>{servicesPage.text[0]}</h3>
                <h6 className="servicesSectionText"
                    style={{ marginBottom: '60px', paddingTop: '6px' }}>{servicesPage.text[1]}</h6>
            </span>
            <span>
                <h3 className="servicesSectionTitle"
                    style={{ marginBottom: '20px', marginTop: '80px' }}>{servicesPage.text[2]}</h3>
                <div className='serviceRects'>
                    {servicesPage.services.map((x) => {
                        return <div className="singleService">
                            <div>
                                <div className="serviceRectTitle">{x.title}</div>
                                <div className="serviceRectText" style={{ fontSize: '16px' }}>{x.text}</div>
                            </div>
                        </div>;
                    })}
                </div>
            </span>
            <span>
                <h4 className="servicesSectionTitle"
                    style={{ textAlign: 'center', marginTop: '54px' }}>{servicesPage.text[3]}</h4>
                <div className="circleBlog">
                    <div className="baseCircle" style={{ marginBottom: 0 }}>
                        <h3 style={{ fontWeight: '400', height: '50%', width: '50%' }}>{servicesPage.text[4]}</h3>
                    </div>
                </div>
                <div>
                    <h4 className="servicesSectionTitle" style={{ textAlign: 'center' }}>{servicesPage.text[5]}</h4>
                    <a href={"https://doodle.com/bp/nataliaotto/ec0lint-free-consultation"} target="_blank" rel="noreferrer">
                        <button className="mainButton"
                            style={{ fontWeight: '500', marginBottom: '90px', marginTop: '20px' }}>BOOK</button>
                    </a>
                </div>
            </span>
            <InitiativesSection></InitiativesSection>
            <span>
                <h4 className="servicesSectionTitle"
                    style={{ marginBottom: '12px', marginTop: '64px' }}>{servicesPage.text[6]}</h4>
                <div className="servicesSectionText" style={{ marginBottom: '110px' }}>
                    {servicesPage.meetUs.map((x: JSX.Element) => {
                        return x
                    })}
                </div>
            </span>
        </div>
    );
}