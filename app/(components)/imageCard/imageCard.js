import Image from 'next/image'
export default function ImageCard({title,source}) {
  return (
    <div class="facilities-col">
    <Image src={source} alt="" width={200} height={230}/>
    <h3>{title}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Distinctio omnis asperiores atque aperiam.
    </p>
  </div>
  )
}
