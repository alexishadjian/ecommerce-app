import Configurator from '../_components/personnalisation/configurator';
import HowToUseSection from '../_components/personnalisation/how-to-use-section';
import InspirationSection from '../_components/personnalisation/inspiration-section';
import ProductHeader from '../_components/personnalisation/product-header';
import StickersSection from '../_components/personnalisation/stickers-section';
import SubHeader from '../_components/sub-header';

const productId = '66ed3aec4efc2724b6ae419f'; // ID du produit

export default function PersonnalisationGameboyPage() {
  return (
    <div>
      <SubHeader />
      <ProductHeader />
      <Configurator productId={productId} />
      <StickersSection />
      <InspirationSection />
      <HowToUseSection />
    </div>
  );
}
