import Image from "next/image";


export default function CardS3({title, copy, index}: {title: string, copy: string, index: number}) {
    return (
      <div className="card-s3" id={`card-s3-${index + 1}`}>
        <div className="card-s3-inner">
          <div className="card-s3-content"><h1>{title}</h1><p>{copy}</p></div>
          <div className="card-s3-img">
            <Image src={`/img/card-s3-${index + 1}.png`} alt={title} width={1000} height={1000} />
          </div>
        </div>
      </div>
    );
}