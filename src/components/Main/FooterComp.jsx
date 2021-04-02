import React from 'react'
import styled from 'styled-components'
const FooterComp = () => {
  const Footer = styled.div`
    padding: 3rem;
    background: #f2ede2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  return (
    <Footer>
      {/* Copyright */}
      <div className='footer-copyright'>
        <h6 className='font-weight-bold'>Libre Baskerville</h6>
        <p
          className='text-secondary'
          style={{ fontSize: '13px', fontFamily: 'Open Sans' }}
        >
          © Copyright 2021. Designed and Developed by
          <span className='font-weight-bold'> Philcob Suzuki Josol</span>
        </p>
      </div>

      {/* social media icons */}
      <div className='social-media-icons-parent m-0 p-0'>
        <i className='social-media-icons fab fa-facebook-f'></i>
        <i className='social-media-icons fab fa-instagram'></i>
        <i className='social-media-icons fab fa-github'></i>
      </div>
    </Footer>
  )
}

export default FooterComp
