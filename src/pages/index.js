import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react';
import ImagePreview from '../components/ImgPreview';


export default function Home({items}) {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items)
  return (
    <div className={styles.container}>
      <Head>
        <title>NASA Gallery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.nasa.gov/">NASA</a>
        </h1>

        <input  id="searchBar"
                onChange={(e) => setSearch(e.target.value) }
                className="searchInput"
                placeholder="search"
        />

        <button disabled={search == ""}
                className="button"
                onClick={ async () => {
                  const results = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}`);
                  const previews = await results.json();
                  setPhotos(await previews.collection.items)
                }} 
        >
          FIND
        </button>

        <div className={styles.grid} >
          {
            photos && photos.map((preview) =>(
              <ImagePreview key={preview.data[0].nasa_id}
                imgUrl={preview.links[0].href}
                nasaId={preview.data[0].nasa_id}
              />
            ))
          }
        </div>
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/yaitalla/NASA-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code
        </a>
      </footer>
    </div>
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