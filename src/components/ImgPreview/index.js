import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {PreWrap, P} from './style';
import styles from '../../styles/Home.module.css';

const ImagePreview = ({imgUrl, nasaId}) => {
    return (
        <PreWrap className={styles.card}>
            <Link as={`/photo/${nasaId}`} href="/photo/[id]" >
                <a>
                    <Image width={300} height={150} src={imgUrl} />
                    <P>Nasa ID: {nasaId}</P>
                </a>
            </Link>
        </PreWrap>
    )
}

export default ImagePreview;