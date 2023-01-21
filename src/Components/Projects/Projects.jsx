import React, { useEffect, useState } from 'react'
import image from '.././SourceFiles/graphing.jpg'
import coins from '../SourceFiles/coins.jpg'

const Projects = () => {

    const [type, setType] = useState('')

    const getLink = () => {
        const url = `${window.location.href}`;
        const part = url.split("?");
        const path = part[1];
        setType(path);
    }

    const handleClickScroll = () => {
        const element = document.getElementById(`${type}`);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    console.log(type)

    useEffect(() => {
        getLink();
        // scrollFunction();
        handleClickScroll()
    }, [type])

    return (
        <div>

            <div className='bgheading'>
                <div className='headingtext'>
                    <div className='fw-bold fs-5 display-3 lh-sm text-center container'>
                        <p style={{ color: '#161616' }}>Our Projects</p>
                    </div>
                    <p className='textDemo text-center container' style={{ color: '#161616' }}>We invest in multiple categories. There are 07 investment plans which may suite you.<br /> Please choose one of the following plans.</p>
                </div>
            </div>

            <div>
                <div className='row mt-5 mb-5 m-5' id='stock'>
                    <div className='col-lg-5 containerx'>
                        <img src={coins} className='ImagePlan img-fluid' alt="" />
                    </div>
                    <div className='col-lg-7'>
                        <h1 className='' style={{ color: '#cfcfcf' }}> Cryptocurrency History:</h1>
                        <p className='textDemo'>For the first time the term "cryptocurrency" appeared in 2009, due to the appearance of the payment system "bitcoin", developed until now unknown man or maybe even a group of people under the pseudonym Satoshi Nakamoto (Eng. Satoshi Nakamoto).
                            In the first year of bitcoin is not represented almost no value, the rate fluctuated between 700 - 1600 btc for 1 US dollar. Over the next four years the situation has changed many times, there were ups and downs.
                            2013 became fatal for bitcoin. At the beginning of the year it was breaking the mark of $ 31 for 1 bitcoin, just after 2 months’ rod has risen to $ 100, and by the end of the year the course was already unbelievable $ 1200 per electronic coin!
                            Today the market replenished with many new cryptocurrency, some of them are already entrenched in the market, while others are just beginning their way to conquer the peaks, "survive" certainly not all, but as practice shows in recent years, cryptocurrency already firmly entrenched in the global economy, and deserves proper attention.
                            Who knows, maybe after some time cryptocurrency generally replace familiar to us with your money, at least looking at the current trends, such a scenario would not be a big surprise</p>
                    </div>
                </div>

                <div className='row mt-5 mb-5 m-5' id='realEstate'>
                    <div className='col-lg-7'>
                        <h1 className='' style={{ color: '#cfcfcf' }}>Stocks and Shares Trading:</h1>
                        <p className='textDemo'>How Stock market works?</p>
                        <p className='textDemo'>The Stock markets are the largest financial market in the world. The total market capitalization of the U.S. stock market is currently $40,511,838.8 million as of December 31st, 2022. Trading in the stocks is not done at one central location but is conducted between participants through electronic communication networks (ECNs) and phone networks in various markets around the world. We trade in NYSE and hold $159.33 million worth of stocks.
                            The cornerstone of the NYSE market model is the Designated Market Maker (DMM). DMMs have obligations to maintain fair and orderly markets for their assigned securities. They operate both manually and electronically to facilitate price discovery during market opens, closes and during periods of trading imbalances or instability. This high-touch approach is crucial for offering the best prices, dampening volatility, adding liquidity and enhancing value.
                            DMMs apply their market experience and judgment of dynamic trading conditions, macroeconomic news and industry-specific intelligence, to inform their decisions. A valuable resource for our listed-company community, DMMs offer insights, while making capital commitments, maintaining market integrity, and supporting price discovery.
                            We stand new companies by funding them as DMMs and trade shares afterwards on the longer run.</p>
                    </div>
                    <div className='col-lg-5 containerx'>
                        <img src={image} className='ImagePlan img-fluid' alt="" />
                    </div>
                </div>

                <div className='row mt-4 mb-5 m-5' id='crops'>
                    <div className='col-lg-5 containerx'>
                        <img src={image} className='ImagePlan img-fluid' alt="" />
                    </div>
                    <div className='col-lg-7'>
                        <h1 className='' style={{ color: '#cfcfcf' }}>Real Estate Investments:</h1>
                        <p className='textDemo'>A Real Estate entrepreneur or a Real Estate Investor to a lesser extent is someone who actively or passively invests in real estate. An active investor may buy a property, make repairs and/or improvements to the property, and sell it later for a profit.
                            We rent out various properties commercial and residential both and generate revenue for our clients. Invest in new development projects and resell it with a great margin in NY and other several regions in US.
                            Moreover, we are diversifying in one of the most amazing growths in property rates in the market of Dubai, Canada and Netherlands</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects