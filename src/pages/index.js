import React, { useState } from 'react';
import Head from 'next/head';
import ImagePreview from '../components/ImgPreview';
import { Container, Main, Background, H1,
  SearchInput, SearchBtn, Grid, Footer
} from '../containers/Landing/style';
import styles from '../styles/Home.module.css'


export default function Landing({items}) {
  const [input, setInput] = useState("");
  const [images, setImages] = useState(items);
  const [enableBtn, setEnableBtn] = useState(true);
  const send = async () => {
    console.log(input)
    const results = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${input}`);
    const previews = await results.json();
    setImages(await previews.collection.items)
  }
  const handleInput = (e) => {
    setEnableBtn(e.target.value.length < 1)
    setInput(e.target.value)
  }
  return (
    <Container>
      <Background>
      </Background>
      <Head>
        <title>NASA Gallery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nasa.gov/">NASA 
          </a>  Image Finder
           
        </H1>
        <SearchInput
                onChange={handleInput}
                placeholder="search (ex: saturn)"
        />
        <SearchBtn disabled={enableBtn}
                className="button"
                onClick={send}
        >
          FIND
        </SearchBtn>
        <Grid>
          {
            images && images.map((preview) =>(
              <ImagePreview key={preview.data[0].nasa_id}
                imgUrl={preview.links[0].href}
                nasaId={preview.data[0].nasa_id}
              />
            ))
          }
        </Grid>
      </Main>
      <Footer>
        <a
          href="https://github.com/yaitalla/NASA-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>
      </Footer>
    </Container>
  )
}

export async function getStaticProps(){
  const result = await fetch("https://images-api.nasa.gov/search?media_type=image");
  const preview = await result.json();
  const items = await preview.collection.items;
  return {
    props: {items},
  }
}