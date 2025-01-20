import Image from "next/image"
export function Hero(){
    return(
        <section className="container mx-auto px-4 py-16 ">
            {/* <div className="relative h-[250px]">
                <Image src="/img.png" alt={"Ceramic vase with dried branches"} fill className="object-contain" priority />
            </div> */}
            <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading tight">
                    DONDE LA ARCILLA <br /> COBRA VIDA
                </h1>
                <p className="font-light-italic text-gray-600 leading-relaxed text-lg">
                    En Alas de Barro encontraras piezas de ceramica que aportaran calidez y personalidad a tu hogar.
                    Cada creacion esta pensada para ser disfrutada y apreciada, transmitiendo la belleza y la serenidad que solo la ceramica artesanal puede ofrecer.
                </p>
            </div>
        </section>
    )
}