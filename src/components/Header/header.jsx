import React from 'react';
import { Image, Container } from './styleHeader';
import imageTop from '../../assets/imageTop.png';

export function Header({ title }) {
    return (
        <Container>
            <div>
                <Image src={imageTop} />
            </div>
            <div>
                <h1>{title}</h1>
            </div>
        </Container>

    )
 }
 export default Header;





