import React from 'react'
import QR from '../assets/scan.png'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const Img = styled.img`
width: 337px;
position: absolute;
right: 110px;
bottom: 48px;
height: 375px;
`

const Qr = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    return (
        <div>
            <Img ref={ref} src={QR} style={{zIndex:`${inView ? "5" : '-1'}`}}></Img>
        </div>
    )
}

export default Qr
