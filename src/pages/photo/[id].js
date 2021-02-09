import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Wrap, ImgWrap, BtnWrap, Btn } from '../../components/Frame/style';

const Photo = ({photo}) => {
    const router = useRouter();
    if (!router.isFallback && !photo){
        return <div>ERROR 404 PAGE NOT FOUND</div>
    }
    return (
        <Wrap>
            <ImgWrap>
                {
                    router.isFallback ? (
                        <div>Loading...</div>
                    ) : (
                        <Image width={960} height={540} src={photo} />
                    )
                }
            </ImgWrap>
            <div >
                <Link href="/" >
                    <a>
                        <Btn>Back</Btn>
                    </a>
                </Link>
            </div>
        </Wrap>
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
