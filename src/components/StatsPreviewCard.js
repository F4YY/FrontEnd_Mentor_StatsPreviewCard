import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    Statsdetail,
    Statsinfo,
    StatsLeftCard,
    Statsprevcardbox,
    Statspreviewimage,
}
from './styled/Statspreview.styled';

export const StatsPreviewCard = () => {
  return (
    <Container>
        <Statsprevcardbox>
            <StatsLeftCard>
                <h1>
                    Get <span>&nbsp;insights&nbsp;</span> that help your business grow.
                </h1>
                <h5>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer
                    experience, and overall efficiency.
                </h5>
                <Statsinfo>
                    <Statsdetail>
                        <h4>
                            10k+
                        </h4>
                        <p>
                            companies
                        </p>
                    </Statsdetail>
                    <Statsdetail>
                        <h4>
                            314
                        </h4>
                        <p>
                            templates
                        </p>
                    </Statsdetail>
                    <Statsdetail>
                        <h4>
                            12M+
                        </h4>
                        <p>
                            queries
                        </p>
                    </Statsdetail>
                </Statsinfo>
            </StatsLeftCard>
            <Statspreviewimage />
        </Statsprevcardbox>
        <Attribution>
            <AttributionA>
                Challenge by <a href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Order Summary Components.</a>
            </AttributionA>
            <AttributionA>
                &nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
