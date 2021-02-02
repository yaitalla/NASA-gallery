import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Photo = ({photo}) => {
    const router = useRouter();
    if (!router.isFallback && !photo){
        return <div>ERROR 404 PAGE NOT FOUND</div>
    }
    return (
        <div>
            <div>
                {
                    router.isFallback ? (
                        <div>Loading...</div>
                    ) : (
                        <Image width={960} height={540} src={photo} />
                    )
                }
            </div>
            <div >
                <Link href="/" >
                    <a>
                        <button>Back</button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Photo;

export async function getStaticProps({params}){
    const nasa_id = params.id;
    const results = await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`);
    const previews = await results.json();
    const photo = await previews.collection.items[0].href;

    return {
        props: {photo}
    }
}

export async function getStaticPaths(){
    const result = await fetch("https://images-api.nasa.gov/search?media_type=image");
    const preview = await result.json();
    const items = await preview.collection.items;
    return {
        paths: items?.map((nasa) => ({
            params: {
                id: nasa.data[0].nasa_id
            }
        })) || [],
        fallback: true
    }

}
