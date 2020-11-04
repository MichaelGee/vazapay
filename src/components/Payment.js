import React from 'react'
import Pay from '../assets/payment.png'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const Img = styled.img`
width: 337px;
position: absolute;
right: 110px;
bottom: 48px;
height: 375px;
`

const Payment = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div>
            <Img src={Pay} style={{zIndex:`${inView ? "10" : '-1'}`}}></Img>
        </div>
    )
}

export default Payment
