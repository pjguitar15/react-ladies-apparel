import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
const BigAdCard = () => {
  const AdCard = styled.div`
    padding: 5rem;
  `
  return (
    <div className='py-5'>
      <Container>
        {/* Card */}
        <AdCard className='shadow-sm'>
          <h2>Winter Wear</h2>
          <p style={{ fontFamily: 'Open Sans' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='py-3 d-flex justify-content-left align-items-center'>
            <h6>Price</h6>
            <span className='font-weight-bold' style={{ fontSize: '20px' }}>
              $100
            </span>
          </div>
        </AdCard>
      </Container>
    </div>
  )
}

export default BigAdCard
