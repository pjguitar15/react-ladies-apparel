import React from 'react'
import { Container } from 'react-bootstrap'
import winterjacket from '../../Assets/winterjacket.jpg'
import styled from 'styled-components'
import { Button } from '../StyledComponents/GlobalButtons.jsx'
const AdCard = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`
const BigAdCard = () => {
  return (
    <div className='py-5'>
      <Container>
        {/* Card */}
        <AdCard>
          {/* Left Column */}
          <div className='ad-card-left-col'>
            <h2>Winter Wear</h2>
            <p style={{ fontFamily: 'Open Sans' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='py-3 d-flex justify-content-left align-items-center'>
              <h6
                className='font-weight-normal'
                style={{ fontFamily: 'Open Sans' }}
              >
                Price
              </h6>
              <span
                className='font-weight-bold mb-3 ml-2'
                style={{ fontSize: '30px', fontFamily: 'Open Sans' }}
              >
                $100
              </span>
            </div>
            <Button secondary className='button-outline-dark'>
              Shop Now
            </Button>
          </div>

          {/* Right Column */}
          <div className='ad-card-img-parent'>
            <img className='ad-card-img' src={winterjacket} alt='' />
          </div>
        </AdCard>
      </Container>
    </div>
  )
}

export default BigAdCard
