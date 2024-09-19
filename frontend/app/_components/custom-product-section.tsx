import { Product1, Product2, Product3, Product4 } from "@/public/images";
import TitleSection from "@/components/title-section";
import ProductCard from "@/components/product-card";

export default function CustomProductSection() {

    const products = [
        { title: "GAMEBOY COLOR", titleColor: "#000000", subtitle: "Le plus grand écran", image: Product1, width: "small", bgColor: "333deg, #F3F3F3 30%, #D8EBFF 100%" },
        { title: "GAMEBOY ADVANCE", titleColor: "#FFFFFF", subtitle: "La plus polyvalente", image: Product2, width: "big", bgColor: "149deg, #121212 30%, #003523 100%" },
        { title: "ADVANCE SP", titleColor: "#FFFFFF", subtitle: "La plus pratique", image: Product3, width: "big", bgColor: "198deg, #121212 30%, #1D0046 100%" },
        { title: "GAMEBOY DMG", titleColor: "#000000", subtitle: "L'originale", image: Product4, width: "small", bgColor: "316deg, #F3F3F3 30%, #FFEEE4 100%" },
    ];

    return (
        <section>
            
            <TitleSection
                title="CUSTOMISATION"
                subtitle="Construit ta propre console"
                titleColor="#000000"
                bgColor="#f4f8fc"
            />

            <div className="flex flex-wrap m-3">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        titleColor={product.titleColor}
                        subtitle={product.subtitle}
                        image={product.image}
                        bgColor={product.bgColor}
                        width={product.width}
                    />
                ))}
            </div>
        </section>
    );
}