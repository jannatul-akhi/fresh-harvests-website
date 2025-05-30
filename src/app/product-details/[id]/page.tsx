import DetailedProduct from "@/components/DetailedProduct";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  return <DetailedProduct productId={params.id} />;
};

export default ProductDetailPage;