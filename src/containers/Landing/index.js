import React, { useState } from 'react';
import Head from 'next/head';
import ImagePreview from '../../components/ImgPreview';
import { Container, Main, Background, H1,
    SearchInput, SearchBtn, Grid, Footer
} from './style';

export default function Landing ( { items } ) {
    const [input, setInput] = useState("");
    const [images, setImages] = useState(items);

    const submit = async () => {
        const res = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${input}`);
        const result = await res.json();
        setImages(await result.collection.items)
    }
    return (
        <Container>
            <Head>
                <title>NASA Image Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <H1>
                  <a href="https://www.nasa.gov/">NASA</a>
                </H1>
            </Main>
            <SearchInput placeholder="search (ex: moon)"
                onChange={(e) => setInput(e.target.value) }
            />
            <SearchBtn onClick={submit} disabled={input == ""} >
                Find
            </SearchBtn>
            <Grid>
                {
                    images && images.map((img, i) => {
                        <ImagePreview key={i}
                            imgUrl={img.links[0].href}
                            nasaId={img.data[0].nasa_id}
                        />
                    })
                }
            </Grid>
            <Footer>
                <a
                    href="https://github.com/yaitalla/NASA-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    code
                </a>
            </Footer>
        </Container>
    )
}
