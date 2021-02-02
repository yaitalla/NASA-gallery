import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {PreWrap} from './style';

const ImagePreview = ({imgUrl, nasaId}) => {
    return (
        <PreWrap>
            <Link as={`/photo/${nasaId}`} href="/photo/[id]" >
                <a>
                    <Image width={250} height={125} src={imgUrl} />
                    <div>Nasa ID: {nasaId}</div>
                </a>
            </Link>
        </PreWrap>
    )
}

export default ImagePreview;